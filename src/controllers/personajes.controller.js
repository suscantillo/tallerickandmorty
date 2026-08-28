import {
  fetchTodosLosPersonajesConcurrente,
  fetchTodosLosPersonajesSecuencial
} from '../services/rickAndMortyApi.js'
import { normalizarPersonajes } from '../utils/normalizar.js'
import {
  vivosHumanos,
  conVeinteOMasEpisodios,
  primerAlienFemenino,
  algunoTieneTipo,
  todosTienenImagenYEpisodio
} from '../utils/consultas.js'
import { agruparPorEspecie, clasificarPorEpisodios } from '../utils/estadisticas.js'

export async function obtenerTodos(req, res) {
  const personajes = await fetchTodosLosPersonajesConcurrente()
  res.json(personajes)
}

export async function obtenerNormalizados(req, res) {
  const personajes = await fetchTodosLosPersonajesConcurrente()
  res.json(normalizarPersonajes(personajes))
}

export async function obtenerConsultas(req, res) {
  const personajes = normalizarPersonajes(await fetchTodosLosPersonajesConcurrente())

  res.json({
    vivosHumanos: vivosHumanos(personajes),
    conVeinteOMasEpisodios: conVeinteOMasEpisodios(personajes),
    primerAlienFemenino: primerAlienFemenino(personajes),
    algunoTieneTipo: algunoTieneTipo(personajes),
    todosTienenImagenYEpisodio: todosTienenImagenYEpisodio(personajes)
  })
}

export async function obtenerEstadisticas(req, res) {
  const personajes = normalizarPersonajes(await fetchTodosLosPersonajesConcurrente())

  res.json({
    porEspecie: agruparPorEspecie(personajes),
    porEpisodios: clasificarPorEpisodios(personajes)
  })
}

export async function obtenerBenchmark(req, res) {
  const inicioSecuencial = Date.now()
  await fetchTodosLosPersonajesSecuencial()
  const tiempoSecuencial = Date.now() - inicioSecuencial

  const inicioConcurrente = Date.now()
  await fetchTodosLosPersonajesConcurrente()
  const tiempoConcurrente = Date.now() - inicioConcurrente

  res.json({ tiempoSecuencial, tiempoConcurrente })
}
