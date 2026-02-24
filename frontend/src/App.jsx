import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import EditNote from './pages/NoteDetailPage'
import CreateNote from './pages/CreatePage'
import toast from 'react-hot-toast'

export default function App() {
  return (
    <div>
      <h1>Tailwind CSS classes vs DaisyUI single class</h1>
      <button
        class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
        onClick={() => toast.success('Way and back again!')}>
        Button
      </button>

      <button
        class="btn"
        onClick={() => toast.success('Way and back again!')}>
        Button
      </button>

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/note/:id"
          element={<EditNote />}
        />
        <Route
          path="/create"
          element={<CreateNote />}
        />
      </Routes>
    </div>
  )
}
