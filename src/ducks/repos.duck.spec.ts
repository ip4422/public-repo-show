import reducer, {
  fetchRepos,
  fetchRepoContent,
  fetchRepoReadme,
  LoadingStatus,
  RepoContetItemType,
  initialState
} from './repos.duck'

const repoContent = [
  {
    name: 'testName1',
    type: RepoContetItemType.dir
  },
  {
    name: 'testName2',
    type: RepoContetItemType.file
  }
]

const repoList = [
  {
    name: 'testName1',
    description: 'test description 1'
  },
  {
    name: 'testName2',
    description: 'test description 2'
  }
]

it('should return the initial state', () => {
  const result = reducer(undefined, {})
  expect(result).toEqual(initialState)
})

describe('repos', () => {
  it('should set repos and reposLoading status to "succeeded"', async () => {
    const action = { type: fetchRepos.fulfilled.type, payload: repoList }
    const state = reducer(undefined, action)
    expect(state).toEqual({
      ...initialState,
      repos: repoList,
      reposLoading: LoadingStatus.succeeded
    })
  })

  it('should set reposLoading status "pending"', async () => {
    const action = { type: fetchRepos.pending.type }
    const state = reducer(undefined, action)
    expect(state).toEqual({
      ...initialState,
      reposLoading: LoadingStatus.pending
    })
  })

  it('should set reposLoading status "failed"', async () => {
    const action = { type: fetchRepos.rejected.type, payload: 'loading error' }
    const state = reducer(undefined, action)
    expect(state).toEqual({
      ...initialState,
      error: 'loading error',
      reposLoading: LoadingStatus.failed
    })
  })
})

describe('repoContent', () => {
  it('should set repoContent and repoLoading status to "succeeded"', async () => {
    const action = {
      type: fetchRepoContent.fulfilled.type,
      payload: repoContent
    }
    const state = reducer(undefined, action)
    expect(state).toEqual({
      ...initialState,
      repoContent,
      repoLoading: LoadingStatus.succeeded
    })
  })

  it('should set repoLoading status "pending"', async () => {
    const action = { type: fetchRepoContent.pending.type }
    const state = reducer(undefined, action)
    expect(state).toEqual({
      ...initialState,
      repoLoading: LoadingStatus.pending
    })
  })

  it('should set repoLoading status "failed"', async () => {
    const action = {
      type: fetchRepoContent.rejected.type,
      payload: 'loading error'
    }
    const state = reducer(undefined, action)
    expect(state).toEqual({
      ...initialState,
      error: 'loading error',
      repoLoading: LoadingStatus.failed
    })
  })
})

describe('repoReadme', () => {
  const readme = { content: 'test readme value' }

  it('should set repoReadme and readmeLoading status to "succeeded"', async () => {
    const action = {
      type: fetchRepoReadme.fulfilled.type,
      payload: readme
    }
    const state = reducer(undefined, action)
    expect(state).toEqual({
      ...initialState,
      repoReadme: atob(readme.content),
      readmeLoading: LoadingStatus.succeeded
    })
  })

  it('should set readmeLoading status "pending"', async () => {
    const action = { type: fetchRepoReadme.pending.type }
    const state = reducer(undefined, action)
    expect(state).toEqual({
      ...initialState,
      readmeLoading: LoadingStatus.pending
    })
  })

  it('should set readmeLoading status "failed"', async () => {
    const action = {
      type: fetchRepoReadme.rejected.type,
      payload: 'loading error'
    }
    const state = reducer(undefined, action)
    expect(state).toEqual({
      ...initialState,
      error: 'loading error',
      readmeLoading: LoadingStatus.failed
    })
  })
})
