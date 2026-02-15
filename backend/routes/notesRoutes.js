// We create Router

import express from 'express'

const notesRouter = express.Router()

notesRouter.get('/', (req, res) => {
  res.status(200).send('Our first demo note in the first route')
})

notesRouter.post('/', (req, res) => {
  res.status(201).send('New Note Created')
})

notesRouter.patch('/:id', (req, res) => {
  res.status(203).send(' Note edited Created')
})

notesRouter.delete('/:id', (req, res) => {
  res.status(200).send('Note Deleted')
})

export default notesRouter
