import { useState } from 'react'

// 1. Create Context (We are importing it as VSCode is not allowing multiple exports)
import { AuthContext } from './AuthContext'

// 2. Create Provider --- which wraps our entire component tree and makes state available
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

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
    logout
  }
  return <AuthContext.Provider value={contextValues}>{children}</AuthContext.Provider>
}
