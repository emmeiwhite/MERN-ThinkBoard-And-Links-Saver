import { Route, Routes } from 'react-router'
import HomePage from './pages/app/HomePage'
import NoteDetailPage from './pages/NoteDetailPage'
import CreateNote from './pages/CreatePage'
import ProtectedRoute from './routes/ProtectedRoute'
import LoginPage from './pages/public/LoginPage'
import RegisterPage from './pages/public/RegisterPage'

export default function App() {
  return (
    <div data-theme="forest">
      <Routes>
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/register"
          element={<RegisterPage />}
        />

        {/* Notes are protected and we need protected routes */}
        <Route element={<ProtectedRoute />}>
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
        </Route>
      </Routes>
    </div>
  )
}
