import { useState, useEffect } from 'react'

// 1. Create Context (We are importing it as VSCode is not allowing multiple exports)
import { AuthContext } from './AuthContext'
import api from '../lib/axios'

// 2. Create Provider --- which wraps our entire component tree and makes global state available
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const checkAuth = async () => {
    try {
      const res = await api.get('/auth/me')
      console.log('Result:', res)
      setUser(res.data.user)
    } catch (error) {
      console.log(error)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const login = async credentials => {
    const res = await api.post('/auth/login', credentials)
    setUser(res.data.user)

    return res.data.user
  }

  const logout = async () => {
    try {
      await api.delete('/auth/logout')
    } catch (error) {
      console.error(error)
    } finally {
      setUser(null)
    }
  }

  // On page load, we'll check /auth/me (Is User logged in)
  useEffect(() => {
    checkAuth()
  }, [])

  // Context Object

  const contextValues = {
    user,
    login,
    logout,
    loading
  }

  return <AuthContext.Provider value={contextValues}>{children}</AuthContext.Provider>
}
