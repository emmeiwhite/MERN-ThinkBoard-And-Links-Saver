// We create Router

import express from 'express'

const notesRouter = express.Router

app.get('/api/v1/notes', (req, res) => {
  res.send('Our first demo note in the first route')
})

app.post('/api/v1/notes', (req, res) => {
  res.send('New Note Created')
})

app.patch('/api/v1/notes/:id', (req, res) => {
  res.send(' Note edited Created')
})

app.delete('/api/v1/notes/:id', (req, res) => {
  res.send('Note Deleted')
})

export default notesRouter
