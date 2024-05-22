import { Router } from 'express'
import urlShortenerControllers from '../controllers/urlShortenerControllers/index.js'

const router = Router()

router.get('/url', urlShortenerControllers.getShortendUrl)
router.post('/create', urlShortenerControllers.createShortenedUrl)

export default router
