import { useState, useEffect } from 'react'

// 1. Create Context (We are importing it as VSCode is not allowing multiple exports)
import { AuthContext } from './AuthContext'
import api from '../lib/axios'

// 2. Create Provider --- which wraps our entire component tree and makes state available
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const login = user => {
    setUser(user)
  }

  const logout = () => {
    setUser(null)
  }

  // Context Object

  const contextValues = {
    user,
    login,
    logout,
    loading
  }

  const checkAuth = async () => {
    try {
      const res = await api.get('/auth/me')
      console.log('Result:', res)
      // setUser(res.data.user)
    } catch (error) {
      console.log(error)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }
  // On page load, we'll check /auth/me (Is User logged in)
  useEffect(() => {
    checkAuth()
  }, [])
  return <AuthContext.Provider value={contextValues}>{children}</AuthContext.Provider>
}
