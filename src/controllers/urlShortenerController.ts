import { Request, Response } from 'express'

const urlShortenerController = (req: Request, res: Response) => {
  res.json({
    url: 'url',
  })
}

export default urlShortenerController
