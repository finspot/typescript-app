import { Request, Response, NextFunction, RequestHandler } from 'express'

const apiKey = process.env.API_KEY

export async function apiKeyAuthentication(req: Request, res: Response, next: NextFunction) {
  const auth = req.header('Authorization')
  if (!apiKey || auth !== `ApiKey ${apiKey}`) {
    return res.sendStatus(401)
  }
  next()
}

export function defaultErrorHandler(error: any, _req: Request, res: Response, _next: NextFunction) {
  res.status(500).send({ error })
}

// See https://thecodebarbarian.com/80-20-guide-to-express-error-handling
export function wrapAsync(fn: RequestHandler): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    // Make sure to `.catch()` any errors and pass them along to the `next()`
    // middleware in the chain, in this case the error handler.
    fn(req, res, next).catch(next)
  }
}
