import Note from '../models/Note.js'
import { asyncHandler } from '../middleware/asyncHandler.js'

export const getAllNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.userId }).sort({ createdAt: -1 }) // newest first
  res.status(200).send(notes)
})

export const createNote = asyncHandler(async (req, res) => {
  const { title, content } = req.body

  const note = new Note({ title, content, user: req.userId })

  const newNote = await note.save()

  res.status(201).send(newNote)
})

export const editNote = asyncHandler(async (req, res) => {
  const { id } = req.params
  const { content, title } = req.body
  const updateFields = {}

  if (title !== undefined) updateFields.title = title
  if (content !== undefined) updateFields.content = content

  //  (Ownership Protection)
  const updatedNote = await Note.findByIdAndUpdate({ _id: id, user: req.userId }, updateFields, {
    new: true,
    runValidators: true
  })
  // If id doesn't match
  if (!updatedNote) return res.status(404).json({ message: 'Note not found' })

  res.status(200).send(updatedNote)
})

export const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.params

  const deletedNote = await Note.findByIdAndDelete({ _id: id, user: req.userId })

  if (!deletedNote) {
    return res.status(404).json({ message: 'Note not found' })
  }

  res.status(200).json({ message: 'Note deleted successfully' })
})

export const getNoteById = asyncHandler(async (req, res) => {
  const { id } = req.params

  const note = await Note.findOne({ _id: id, user: req.userId })
  if (!note) return res.status(404).json({ message: 'Note not found!' })
  res.status(200).json(note)
})
