import { Request, Response } from 'express'

// register User
export const registerUser = (req: Request, res: Response) => {
  res.json({
    data: 'User registered',
  })
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
