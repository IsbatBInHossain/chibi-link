import { Router } from 'express'
import urlShortenerController from '../controllers/urlShortenerController.js'

const router = Router()

router.get('/url', urlShortenerController)

export default router
