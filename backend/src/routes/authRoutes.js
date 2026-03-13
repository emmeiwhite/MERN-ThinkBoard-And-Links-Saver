import express from 'express'
import { registerUser, loginUser, logoutUser } from '../controllers/authController.js'
import { protectRoute } from '../middleware/authMiddleware.js'

const authRouter = express.Router()

// Auth Routes

// 1. POST /api/v1/auth/register
authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)
authRouter.delete('/logout', logoutUser)

// Protected Routes
router.get('/', protectRoute, (req, res) => {
  res.json({
    message: 'You are authenticated'
  })
})

export default authRouter
