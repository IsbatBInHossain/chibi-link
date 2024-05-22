import userControllers from '../controllers/userControllers/index.js'
import { Router } from 'express'
const router = Router()

router.post('/register', userControllers.registerUser)
router.post('/login', userControllers.loginUser)
router.get('/logout', userControllers.logoutUser)
router.get('/:id', userControllers.getUser)

export default router
