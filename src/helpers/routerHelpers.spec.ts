import { getRouteParams } from './'

describe('checking for different routes', () => {
  it('should return two undefined id', () => {
    const result = getRouteParams('')
    expect(result).toEqual({ userId: undefined, repoId: undefined })
  })

  it('should return userId and undefined repoId', () => {
    const result = getRouteParams('/ip4422')
    expect(result).toEqual({ userId: 'ip4422', repoId: undefined })
  })

  it('should return userId and repoId', () => {
    const result = getRouteParams('/ip4422/shop-app')
    expect(result).toEqual({
      userId: 'ip4422',
      repoId: 'shop-app'
    })
  })
})
