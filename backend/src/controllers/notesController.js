import Note from '../models/Note.js'

export const getAllNotes = async (req, res) => {
  console.log('Controller Invoked')
  try {
    const notes = await Note.find().sort({ createdAt: -1 }) // newest first
    res.status(200).send(notes)
  } catch (error) {
    console.log(`Error getting all notes`, error)
    res.status(500).send({ message: 'Internal Server Error!' })
  }
}

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body

    const note = new Note({ title, content })

    const newNote = await note.save()

    res.status(201).send(newNote)
  } catch (error) {
    console.log(`Error creating Note`, error)
    res.status(500).send({ message: 'Internal Server Error!' })
  }
}

export const editNote = async (req, res) => {
  try {
    const { id } = req.params
    const { content, title } = req.body
    const updateFields = {}

    if (title !== undefined) updateFields.title = title
    if (content !== undefined) updateFields.content = content

    const updatedNote = await Note.findByIdAndUpdate(id, updateFields, {
      new: true,
      runValidators: true
    })
    // If id doesn't match
    if (!updatedNote) return res.status(404).json({ message: 'Note not found' })

    res.status(200).send(updatedNote)
  } catch (error) {
    console.log(`Error editing Note`, error)
    res.status(500).send({ message: 'Internal Server Error!' })
  }
}

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params

    const deletedNote = await Note.findByIdAndDelete(id)

    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' })
    }

    res.status(200).json({ message: 'Note deleted successfully' })
  } catch (error) {
    console.log('Error deleting note', error)
    res.status(500).json({ message: 'Internal Server Error!' })
  }
}

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)
    if (!note) return res.status(404).json({ message: 'Note not found!' })
    res.status(200).json(note)
  } catch (error) {
    console.log('Error getting single note with this ID', error)
    res.status(500).json({ message: 'Internal Server Error!' })
  }
}
