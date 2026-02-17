export const getAllNotes = async (req, res) => {
  res.status(200).send('Our first demo note in the first route')
}

export const createNote = async (req, res) => {
  res.status(201).send('New Note Created')
}

export const editNote = async (req, res) => {
  res.status(203).send(' Note edited Created')
}

export const deleteNote = async (req, res) => {
  res.status(200).send('Note Deleted')
}
