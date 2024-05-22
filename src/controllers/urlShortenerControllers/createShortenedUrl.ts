import { Request, Response } from 'express'
import { validateUrl } from '../../utils/validateUrl.js'

export const createShortenedUrl = async (req: Request, res: Response) => {
  const { url } = req.body
  try {
    const validatedUrl = validateUrl(url)
    res.status(200).json({
      url: validatedUrl,
    })
  } catch (error: any) {
    return res.status(400).json({ message: error.message })
  }
}
