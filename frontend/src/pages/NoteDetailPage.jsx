import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import api from '../lib/axios'
import { LoaderIcon } from 'lucide-react'

export default function NoteDetailPage() {
  const { id } = useParams() // get id from url
  const navigate = useNavigate()

  const [note, setNote] = useState(null) // we'll fetch complete note from the API
  const [loading, setLoading] = useState(true)
  const [editAndSave, setEditAndSave] = useState(false)

  // Now, we'll make our 4th and final API call for this Project MVP

  async function updateNote() {
    try {
      api.patch(`/notes/${id}`)
    } catch (error) {
      console.log(`Error updating note`, error)
    } finally {
      // setLoading(false)
    }
  }

  useEffect(() => {
    updateNote()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <h1>Current Note ID: {id}</h1>
    </div>
  )
}
