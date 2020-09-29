import 'mocha'
import * as request from 'supertest'
import app from '../../src/app'

describe('homeApiController', () => {
  describe('GET /', () => {
    it('should return 200 OK', done => {
      request(app).get('/').expect(200, done)
    })
  })
})
