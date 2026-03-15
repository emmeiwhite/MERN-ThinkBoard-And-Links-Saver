import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

// Custom Hook
export const useAuth = () => {
  return useContext(AuthContext)
}
