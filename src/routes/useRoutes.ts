import { Router } from 'express'
import {
  getUser,
  loginUser,
  logoutUser,
  registerUser,
} from '../controllers/userController.js'

const router = Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/logout', logoutUser)
router.get('/:id', getUser)

export default router
