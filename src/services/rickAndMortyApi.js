const BASE_URL = 'https://rickandmortyapi.com/api/character'

// trae una sola pagina, esto ya sirve para las dos estrategias de abajo
export async function fetchPagina(numeroPagina) {
  const respuesta = await fetch(`${BASE_URL}?page=${numeroPagina}`)

  if (!respuesta.ok) {
    throw new Error(`Error al consultar la pagina ${numeroPagina}`)
  }

  return respuesta.json()
}

// TODO Parte C - Estrategia 1: recorrer todas las paginas con await dentro de un ciclo
// usar fetchPagina y devolver un unico arreglo con todos los personajes
export async function fetchTodosLosPersonajesSecuencial() {
  throw new Error('fetchTodosLosPersonajesSecuencial no implementado')
}

// TODO Parte C - Estrategia 2: recorrer todas las paginas con Promise.all
// usar fetchPagina y devolver un unico arreglo con todos los personajes
export async function fetchTodosLosPersonajesConcurrente() {
  throw new Error('fetchTodosLosPersonajesConcurrente no implementado')
}
