import express from 'express'
import personajesRouter from './routes/personajes.routes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/personajes', personajesRouter)

app.get('/', (req, res) => {
  res.json({
    mensaje: 'API Taller Rick and Morty',
    rutas: [
      'GET /personajes/todos',
      'GET /personajes/normalizados',
      'GET /personajes/consultas',
      'GET /personajes/estadisticas',
      'GET /personajes/benchmark'
    ]
  })
})

// manejador de errores general, para no repetir try/catch en cada ruta
app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500).json({ error: err.message })
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
