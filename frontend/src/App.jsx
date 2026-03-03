import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import NoteDetailPage from './pages/NoteDetailPage'
import CreateNote from './pages/CreatePage'

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
          element={<NoteDetailPage />}
        />
        <Route
          path="/create"
          element={<CreateNote />}
        />
      </Routes>
    </div>
  )
}
