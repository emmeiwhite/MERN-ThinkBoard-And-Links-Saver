// We create Router

import express from 'express'
import {
  createNote,
  deleteNote,
  editNote,
  getAllNotes,
  getNoteById
} from '../controllers/notesController.js'
import { validateObjectId } from '../middleware/validateObjectId.js'

const notesRouter = express.Router()

notesRouter.get('/', getAllNotes)

notesRouter.get('/:id', validateObjectId, getNoteById)

notesRouter.post('/', createNote)

notesRouter.patch('/:id', validateObjectId, editNote)

notesRouter.delete('/:id', validateObjectId, deleteNote)

export default notesRouter
