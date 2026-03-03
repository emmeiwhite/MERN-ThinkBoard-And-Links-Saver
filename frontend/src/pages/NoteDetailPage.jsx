import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import api from '../lib/axios'
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from 'lucide-react'
import toast from 'react-hot-toast'
import { Link } from 'react-router'

export default function NoteDetailPage() {
  const { id } = useParams() // get id from url
  const navigate = useNavigate()

  const [note, setNote] = useState(null) // we'll fetch complete note from the API
  const [loading, setLoading] = useState(true)
  const [editAndSave, setEditAndSave] = useState(false)

  // Now, we'll make our 4th and final API call for this Project MVP

  async function updateNote() {
    try {
      const res = await api.get(`/notes/${id}`)
      console.log({ res })

      setNote(res.data)
    } catch (error) {
      console.log(`Error updating note`, error)
      toast.error('Failed to fetch the note')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    updateNote()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        {/* Top section */}
        <div className="flex justify-between align-center mb-6">
          <Link
            to={`/`}
            className="btn btn-ghost">
            <ArrowLeftIcon className="size-5" /> Back to Notes
          </Link>

          <button className="btn btn-error btn-outline">
            <Trash2Icon className="size-5" /> Delete Note
          </button>
        </div>

        {/* Form Section */}
      </div>
    </div>
  )
}
