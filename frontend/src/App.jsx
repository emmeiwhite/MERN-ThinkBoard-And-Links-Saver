import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import EditNote from './pages/NoteDetailPage'
import CreateNote from './pages/CreatePage'

export default function App() {
  return (
    <div>
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
