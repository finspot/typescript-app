import Bugsnag from '@bugsnag/js'

const BUGSNAG_API_KEY = process.env.BUGSNAG_API_KEY

if (process.env.NODE_ENV == 'production') {
  if (BUGSNAG_API_KEY) {
    Bugsnag.start({
      apiKey: BUGSNAG_API_KEY
    })
  } else throw new Error('BUGSNAG_API_KEY is empty')
}

export { Bugsnag }
