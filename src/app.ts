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
app.use(pinoHttpLogger)
// app.use(apiKeyAuthentication)

// Express routes
app.use('/', homeController.index)

// const v3Router = express.Router()
// v3Router.post('/concatenate', wrapAsync(v3.concatenate))
// v3Router.post('/gatherFiles', wrapAsync(v3.gatherFiles))
// app.use('/v3', v3Router)

export default app
