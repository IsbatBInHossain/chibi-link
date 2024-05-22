import * as dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import userRoutes from './routes/useRoutes.js'
import urlShortnerRoutes from './routes/urlShortnerRoutes.js'

dotenv.config()

const app = express()

export const prisma = new PrismaClient()

const port = process.env.PORT

async function main() {
  // app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use('/api/user', userRoutes)
  app.use('/api/link-shotener', urlShortnerRoutes)

  // Catch unregistered routes
  app.all('*', (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` })
  })

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })
}

main()
  .then(async () => {
    await prisma.$connect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
