import { Request, Response } from 'express'

export const createShortenedUrl = async (req: Request, res: Response) => {
  res.json({
    message: 'url shortened',
  })
}
