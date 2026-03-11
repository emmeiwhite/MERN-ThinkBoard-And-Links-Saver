import express from 'express'
import { registerUser } from '../controllers/authController.js'

const authRouter = express.Router()

// Auth Routes

// 1. POST /api/v1/auth/register
authRouter.post('/register', registerUser)

export default authRouter
