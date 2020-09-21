import { Request, Response } from 'express'

/**
 * Home page.
 * @route GET /
 */
export const index = (_req: Request, res: Response) => {
  res.send({ hello: 'world' })
}
