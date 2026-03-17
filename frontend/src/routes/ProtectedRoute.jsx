import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../hooks/useAuth'

export default function ProtectedRoute() {
  const { loading, user } = useAuth()

  if (loading) {
    return <div className="text-center py-10">Checking authentication...</div>
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
      />
    )
  }
  return <Outlet />
}

/**
Explanation:
------------
loading → wait for /auth/me
no user → redirect login
user exists → render protected pages
 */
