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
  const [saving, setSaving] = useState(false)

  // Now, we'll make our 4th and final API call for this Project MVP

  async function handleSave() {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error('Please add a title or a content')
      return
    }

    try {
      await api.patch(`/notes/${note._id}`, {
        title: note.title,
        content: note.content
      })
      toast.success('Note has been successfully updated and saved')
    } catch (error) {
      console.log(`Error updating and saving note`, error)
      toast.error('Error updating and saving the note')
    }
  }

  async function handleDelete() {
    if (!window.confirm('Are you sure you want to delete this note?')) return

    try {
      await api.delete(`/notes/${note._id}`)
      toast.success('Note deleted successfully!')
      navigate(`/`)
    } catch (error) {
      console.log(`Error deleting note`, error)
      toast.error('Error while deleting Note')
    }
  }

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
        <div className="max-w-2xl mx-auto">
          {/* Top section */}
          <div className="flex justify-between align-center mb-6">
            <Link
              to={`/`}
              className="btn btn-ghost">
              <ArrowLeftIcon className="size-5" /> Back to Notes
            </Link>

            <button
              className="btn btn-error btn-outline"
              onClick={handleDelete}>
              <Trash2Icon className="size-5" /> Delete Note
            </button>
          </div>

          {/* Card */}
          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">
                <label
                  className="block mb-2 p-2"
                  htmlFor="note-desc">
                  <span className="font-bold pl-2">Title</span>
                </label>

                <input
                  type="text"
                  placeholder="Note title"
                  className="input input-bordered w-full"
                  value={note.title}
                  onChange={e => setNote({ ...note, title: e.target.value })}
                />
              </div>

              <div className="form-control mb-6">
                <label
                  className="block mb-2"
                  htmlFor="note-desc">
                  <span className="font-bold pl-2">Content</span>
                </label>

                <textarea
                  type="text"
                  placeholder="Write your note here ..."
                  className="textarea textarea-bordered h-32 w-full p-4"
                  id="note-desc"
                  value={note.content}
                  onChange={e => setNote({ ...note, content: e.target.value })}
                />
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={saving}
                  onClick={handleSave}>
                  {saving ? 'Saving ...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
      </div>
    </div>
  )
}
