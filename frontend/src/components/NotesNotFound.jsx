import { NotebookIcon } from 'lucide-react'
import { Link } from 'react-router'

export default function NoteNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div>
        <NotebookIcon className="size-10 text-primary" />
      </div>
      <h3>No notes yet</h3>
      <p>Ready to organise your thoughts? Create your first note to get started on your journey.</p>
      <Link to={'/create'}>Create Your First Note</Link>
    </div>
  )
}
