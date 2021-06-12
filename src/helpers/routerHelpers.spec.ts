import { getRoutesState } from './routerHelpers'

describe('checking for different routes', () => {
  it('should return two undefined id', () => {
    const result = getRoutesState('')
    expect(result).toEqual({ userId: undefined, repoId: undefined })
  })

  it('should return userId and undefined repoId', () => {
    const result = getRoutesState('/ip4422')
    expect(result).toEqual({ userId: 'ip4422', repoId: undefined })
  })

  it('should return userId and repoId', () => {
    const result = getRoutesState('/ip4422/shop-app')
    expect(result).toEqual({
      userId: 'ip4422',
      repoId: 'shop-app'
    })
  })
})
