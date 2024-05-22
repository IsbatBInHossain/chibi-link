import { Request, Response } from 'express'

export const getShortendUrl = (req: Request, res: Response) => {
  res.json({
    url: 'url',
  })
}
