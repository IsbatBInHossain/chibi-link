import { Request, Response } from 'express'

export const logoutUser = (req: Request, res: Response) => {
  res.json({
    data: 'User logged out',
  })
}
