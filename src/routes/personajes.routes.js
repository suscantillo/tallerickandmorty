import { Router } from 'express'
import {
  obtenerTodos,
  obtenerNormalizados,
  obtenerConsultas,
  obtenerEstadisticas,
  obtenerBenchmark
} from '../controllers/personajes.controller.js'

const router = Router()

router.get('/todos', obtenerTodos)
router.get('/normalizados', obtenerNormalizados)
router.get('/consultas', obtenerConsultas)
router.get('/estadisticas', obtenerEstadisticas)
router.get('/benchmark', obtenerBenchmark)

export default router
