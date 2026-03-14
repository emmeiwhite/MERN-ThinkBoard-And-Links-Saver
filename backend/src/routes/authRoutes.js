import express from 'express'
import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser
} from '../controllers/authController.js'
const authRouter = express.Router()

import { protectRoute } from '../middleware/authMiddleware.js'
// Auth Routes

// 1. POST /api/v1/auth/register
authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)
authRouter.delete('/logout', logoutUser)

// 4. Get Current User | Protected Route (For React or FE to know who the current User is)
authRouter.get('/me', protectRoute, getCurrentUser)

export default authRouter
