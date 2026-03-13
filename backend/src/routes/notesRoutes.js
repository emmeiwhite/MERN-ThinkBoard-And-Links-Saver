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
import { protectRoute } from '../middleware/authMiddleware.js'

// For routes with an ID, we want this order: protectRoute → validateObjectId → controller

const notesRouter = express.Router()

// Get all notes of logged-in user
notesRouter.get('/', protectRoute, getAllNotes)

// Get single note
notesRouter.get('/:id', protectRoute, validateObjectId, getNoteById)

// Create note
notesRouter.post('/', protectRoute, createNote)

// Edit note
notesRouter.patch('/:id', protectRoute, validateObjectId, editNote)

// delete note
notesRouter.delete('/:id', protectRoute, validateObjectId, deleteNote)

export default notesRouter
