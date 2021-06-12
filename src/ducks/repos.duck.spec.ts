import reducer, {
  setUserId,
  fetchRepos,
  LoadingStatus,
  Repo
} from './repos.duck'

const initialState = {
  loading: LoadingStatus.idle,
  userId: '',
  repos: [] as Repo[]
}

const repoContent = [
  {
    name: 'testName1',
    description: 'test description 1'
  },
  {
    name: 'testName2',
    description: 'test description 2'
  }
]


describe('repos slice', () => {
  it('should return the initial state', () => {
    const result = reducer(undefined, {})
    expect(result).toEqual(initialState)
  })

  it('should should set userId', () => {
    const testUserId = 'newUser'
    const result = reducer(undefined, setUserId(testUserId))
    expect(result.userId).toBe(testUserId)
  })

  it('should set repos and loadign status to "succeeded"', async () => {
    const action = { type: fetchRepos.fulfilled.type, payload: repoContent }
    const state = reducer(undefined, action)
    expect(state).toEqual({
      ...initialState,
      repos: repoContent,
      loading: LoadingStatus.succeeded
    })
  })

  it('should set loadign status "pending"', async () => {
    const action = { type: fetchRepos.pending.type }
    const state = reducer(undefined, action)
    expect(state).toEqual({
      ...initialState,
      loading: LoadingStatus.pending
    })
  })

  it('should set loadign status "failed"', async () => {
    const action = { type: fetchRepos.rejected.type, payload: 'loading error' }
    const state = reducer(undefined, action)
    expect(state).toEqual({
      ...initialState,
      error: 'loading error',
      loading: LoadingStatus.failed
    })
  })
})
