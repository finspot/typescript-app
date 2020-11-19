import './util/config'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import { pinoHttpLogger } from './util/logger'
// import { wrapAsync } from './middlewares'
import * as homeController from './controllers/homeController'

// Express server
const app = express()

// Express configuration
app.set('port', process.env.PORT || 8080)
app.use(bodyParser.json())
if (process.env.NODE_ENV != 'test') {
  app.use(pinoHttpLogger)
}

// Express routes
const homeRouter = express.Router()
homeRouter.use('/', homeController.index)

// app.use(apiKeyAuthentication)
app.use('/', homeRouter)

export default app
