import { PlusIcon } from 'lucide-react'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <nav className="max-w-6xl p-4 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl text-primary font-bold tracking-tight font-mono">Thinkboard</h1>
          <div className="flex items-center gap-4">
            <Link
              to={'/create'}
              className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>Create</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
