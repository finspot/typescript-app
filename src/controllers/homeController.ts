import { Request, Response } from 'express'

/**
 * Home page.
 * @route GET /
 */

const snooze = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const index = async (_req: Request, res: Response) => {
  await snooze(1000)
  res.send({ hello: 'world' })
}
