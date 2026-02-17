// We create Router

import express from 'express'
import { createNote, deleteNote, editNote, getAllNotes } from '../controllers/notesController.js'

const notesRouter = express.Router()

notesRouter.get('/', getAllNotes)

notesRouter.post('/', createNote)

notesRouter.patch('/:id', editNote)

notesRouter.delete('/:id', deleteNote)

export default notesRouter
