import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import EditNote from './pages/NoteDetailPage'
import CreateNote from './pages/CreatePage'
// import toast from 'react-hot-toast'

export default function App() {
  return (
    <div data-theme="forest">
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
