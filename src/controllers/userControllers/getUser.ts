import { Request, Response } from 'express'
import { prisma } from '../../server.js'

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    })
    if (user) {
      res.status(200).json({ user })
    } else {
      res.status(404).json({ message: 'User not found' })
    }
  } catch (error: unknown) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
