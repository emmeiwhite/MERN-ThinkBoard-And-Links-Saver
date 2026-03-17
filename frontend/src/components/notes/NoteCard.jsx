import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { Link } from 'react-router'
import { formatDate } from '../../lib/utils'
import api from '../../lib/axios'
import toast from 'react-hot-toast'

import { useState } from 'react'

export default function NoteCard({ note, setNotes }) {
  const [isDeleting, setIsDeleting] = useState(false)
  async function handleDelete(e, id) {
    e.preventDefault() // get rid of navigation behaviour

    if (!window.confirm('Are you sure you want to delete this note?')) return

    //   Make another API call to the BE and ask BE to delete the particular note with this id
    setIsDeleting(true)
    try {
      await api.delete(`/notes/${id}`)

      console.log('Note Deleted Successfully!')

      // NOW, FE sync with BE is a must and UI = F(state), so we need to update the FE state as per the BE server data
      setNotes(prev => {
        return prev.filter(note => note._id !== id)
      })
    } catch (error) {
      // Also if a user makes too many requests 429 Error Limit

      if (error.response.status === 429) {
        toast.error('Too many requests, please try again later!')
      } else {
        console.log(`Error deleting note`, error)
      }
    } finally {
      setIsDeleting(false)
    }
  }
  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00ff9D] border block">
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70">{note.content}</p>

        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>

          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={e => handleDelete(e, note._id)}>
              {isDeleting ? 'Deleting ...' : <Trash2Icon className="size-4" />}
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
