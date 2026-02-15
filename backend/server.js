import express from 'express'
import notesRouter from './routes/notesRoutes.js'

const app = express()

let PORT = process.env.PORT || 3000

app.use('api/v1/notes', notesRouter)

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`)
})
