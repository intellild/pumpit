import { Pumpa } from '../pumpa'

describe('Resolve value', () => {
  test('Resolve value', () => {
    const pumpa = new Pumpa()
    const key = 'name'
    const nameValue = 'ivan'

    pumpa.addValue(key, nameValue)

    const result = pumpa.resolve(key)

    expect(result).toBe(nameValue)
  })

  test('Throw if key is already registered', () => {
    const pumpa = new Pumpa()
    const key = 'name'
    const nameValue = 'ivan'

    pumpa.addValue(key, nameValue)

    expect(() => pumpa.addValue(key, nameValue)).toThrowError(`${key}`)
  })

  test('Throw if key to be resolved cannot be found', () => {
    const pumpa = new Pumpa()
    const key = 'name'

    expect(() => pumpa.resolve(key)).toThrowError(`${key}`)
  })
})
