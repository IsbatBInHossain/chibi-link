import { Request, Response } from 'express'
import { prisma } from '../server.js'
import hashPassword from '../utils/hashPassword.js'

// register User
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

    const hashedPassword = await hashPassword(password)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    res.status(201).json({ user })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

// Login User
export const loginUser = (req: Request, res: Response) => {
  res.json({
    data: 'User logged in',
  })
}

//Logout User
export const logoutUser = (req: Request, res: Response) => {
  res.json({
    data: 'User logged out',
  })
}

//Get User
export const getUser = (req: Request, res: Response) => {
  res.json({
    data: 'Get User ',
  })
}
