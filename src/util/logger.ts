import * as Pino from 'pino'
import * as PinoHttp from 'pino-http'

type GoogleCloudRunLevel = 'DEBUG' | 'DEFAULT' | 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL'

// Map pino levels to GCP, https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#LogSeverity
function severity(label: string): GoogleCloudRunLevel {
  switch (label) {
    case 'trace':
      return 'DEBUG'
    case 'debug':
      return 'DEBUG'
    case 'info':
      return 'INFO'
    case 'warn':
      return 'WARNING'
    case 'error':
      return 'ERROR'
    case 'fatal':
      return 'CRITICAL'
    default:
      return 'DEFAULT'
  }
}

function level(label: string, _number: number) {
  return { severity: severity(label) }
}

export const pinoLogger: Pino.Logger = Pino({
  formatters: {
    level
  },
  base: null,
  messageKey: 'message',
  timestamp: false,
  level: process.env.LOG_LEVEL ? process.env.LOG_LEVEL.toLowerCase() : 'info'
})

export const pinoHttpLogger: PinoHttp.HttpLogger = PinoHttp({
  logger: pinoLogger,
  customLogLevel: (res: any, _err: any) => (res.statusCode >= 500 ? 'error' : 'info'),
  customErrorMessage: (res: any, _err: any) => {
    return res.stack
  }
})

export type Logger = Pino.Logger
export type HttpLogger = PinoHttp.HttpLogger
