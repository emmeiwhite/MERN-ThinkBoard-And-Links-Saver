import { ArrowLeftIcon } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import toast from 'react-hot-toast'

export default function CreateNote() {
  const [loading, setLoading] = useState(false)
  const [noteTitle, setNoteTitle] = useState('')
  const [noteContent, setNoteContent] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!noteTitle.trim() || !noteContent.trim()) {
      toast.error('All fields are required!')
      return
    }

    setLoading(true)
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-7xl mx-auto px-4 py-8">Create Form</div>

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
                  className="input input-bordered w-full"
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
                  className="textarea textarea-bordered h-32 w-full"
                  id="note-desc"
                  value={noteContent}
                  onChange={e => setNoteContent(e.target.value)}
                />

                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}>
                    {loading ? 'Creating ...' : 'Create Note'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
