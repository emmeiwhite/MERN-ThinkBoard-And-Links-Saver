import { ArrowLeftIcon } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import toast from 'react-hot-toast'
import api from '../../lib/axios'

export default function CreateNote() {
  const [loading, setLoading] = useState(false)
  const [noteTitle, setNoteTitle] = useState('')
  const [noteContent, setNoteContent] = useState('')

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (!noteTitle.trim() || !noteContent.trim()) {
      toast.error('All fields are required!')
      return
    }

    setLoading(true) // as soon as we set setLoading to true, button gets disabled and user cannot make another request until setLoading is false

    // Now, we can make an API call to the Backend to create resource

    try {
      await api.post(`/notes`, {
        title: noteTitle,
        content: noteContent
      })

      toast.success('Note created successfully!')
      navigate('/')
    } catch (error) {
      if (error.response.status === 429) {
        toast.error('Slow down! you are creating notes too fast!', {
          duration: 4000,
          icon: '💀'
        })
      } else {
        console.log('Error creating Note', error)
        toast.error('Failed to create Note')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link
            to={`/`}
            className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          <div className="card bg-base-100">
            <div className="card-body">
              <div className="card-title text-2xl mb-4">Create New Note</div>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-6">
                  <label
                    className="block mb-2"
                    htmlFor="note-title">
                    <span className="font-bold pl-2">Title</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Note Title"
                    className="input input-bordered w-full p-2"
                    id="note-title"
                    value={noteTitle}
                    onChange={e => setNoteTitle(e.target.value)}
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
                    value={noteContent}
                    onChange={e => setNoteContent(e.target.value)}
                  />
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}>
                    {loading ? 'Creating ...' : 'Create Note'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
