import * as dotenv from 'dotenv'

if (process.env.NODE_ENV) {
  const result = dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

  if (result.error) {
    throw result.error
  }
}
