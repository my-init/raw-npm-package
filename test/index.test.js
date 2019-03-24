const { sum } = require('../src/index')

describe('Test connection', () => {
  test('should sum 1+1', () => {
    expect(sum(1, 1)).toBe(2)
  })
})
