import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

export default function NoteDetailPage() {
  const { id } = useParams() // get id from url
  const navigate = useNavigate()

  const [note, setNote] = useState(null) // we'll fetch complete note from the API
  const [loading, setLoading] = useState(false)
  const [editAndSave, setEditAndSave] = useState(false)

  return (
    <div className="min-h-screen">
      <h1>Current Note ID: {id}</h1>
    </div>
  )
}
