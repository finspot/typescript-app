import { expect } from 'chai'

describe('foo()', function () {
  it('returns bar', function () {
    const foo = () => { return 'bar' }
    const expectations = 'bar'
    expect(foo()).equal(expectations)
  })
})
