import { defaultErrorHandler } from './middlewares'
import app from './app'

app.use(defaultErrorHandler) // /!\ This must be the last app.use() for error handling to work

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
  console.log('  App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'))
  console.log('  Press CTRL-C to stop\n')
})

export default server
