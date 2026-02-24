import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import EditNote from './pages/NoteDetailPage'
import CreateNote from './pages/CreatePage'
import toast from 'react-hot-toast'

export default function App() {
  return (
    <div>
      <button onClick={() => toast.success('Way and back again!')}>Test Toaster</button>
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
