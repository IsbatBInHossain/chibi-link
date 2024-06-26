import { Request, Response } from 'express'
import { prisma } from '../../server.js'
import { validatePassword } from '../../utils/validatePassword.js'
import hashPassword from '../../utils/hashPassword.js'

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: 'Please fill in all required fields' })
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    })
    if (existingUser) {
      return res.status(400).json({ message: 'This email is already in use' })
    }

    try {
      validatePassword(password)
    } catch (error: any) {
      return res.status(400).json({ message: error.message })
    }

    const hashedPassword = await hashPassword(password)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    res.status(201).json({ user })
  } catch (error: unknown) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
