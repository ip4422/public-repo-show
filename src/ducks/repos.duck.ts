import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

/**
 * Repository info
 * @typedef Repo
 * @type {object}
 * @property {string} full_name - full name of repository (use as local link)
 * @property {string} name -  repository name
 * @property {string} description - repository description
 */
export type Repo = {
  full_name: string
  name: string
  description: string
}

export enum LoadingStatus {
  idle = 'idle',
  pending = 'pending',
  succeeded = 'succeeded',
  failed = 'failed'
}

export enum RepoContetItemType {
  dir = 'dir',
  file = 'file'
}

/**
 * Repository cintent item
 * @typedef RepoContent
 * @type {object}
 * @property {string} name - item name (file or folder name)
 * @property {RepoContetItem} type -  item type
 */
export type RepoContent = {
  name: string
  type: RepoContetItemType
}

/**
 * Repository readme file
 * @typedef RepoReadme
 * @type {object}
 * @property {string} name - readme file name(should be "README.md")
 * @property {RepoContetItem} type -  item type(should be "file")
 * @property {string} content -  repo readme content (should be encoded base64)
 * @property {string} encoding -  repo readme encoding (should be "base64")
 */
export type RepoReadme = {
  name: string
  type: RepoContetItemType
  content: string
  encoding: string
}

/**
 * Asunc fetch repositories action creator
 * @param {string} userName - User name
 * @fulfilled {Repo[]} - Repo list for picked userName
 * @rejected {string} - Error message
 *
 */
export const fetchRepos = createAsyncThunk<
  Repo[],
  string,
  {
    rejectValue: string
  }
>(
  'public-repo-show/repos/fetchRepos',
  async (userName, { rejectWithValue }) => {
    const response = await fetch(
      `https://api.github.com/users/${userName}/repos`
    )
    if (response.status === 200) {
      const repos = await response.json()
      return repos
    }
    return rejectWithValue((await response.json()).message)
  }
)

/**
 * Asunc fetch repository content action creator
 * @param {string, string} userName, repoName - User name
 * @fulfilled {RepoContent[]} - Repo list for picked userName
 * @rejected {string} - Error message
 *
 */
export const fetchRepoContent = createAsyncThunk<
  RepoContent[],
  { userName: string; repoName: string },
  {
    rejectValue: string
  }
>(
  'public-repo-show/repos/fetchRepoContent',
  async ({ userName, repoName }, { rejectWithValue }) => {
    const response = await fetch(
      `https://api.github.com/repos/${userName}/${repoName}/contents`
    )
    if (response.status === 200) {
      const repoContent = await response.json()
      return repoContent
    }
    return rejectWithValue((await response.json()).message)
  }
)

/**
 * Asunc fetch repository content action creator
 * @param {string, string} userName, repoName - User name
 * @fulfilled {RepoContent[]} - Repo list for picked userName
 * @rejected {string} - Error message
 *
 */
export const fetchRepoReadme = createAsyncThunk<
  RepoReadme,
  { userName: string; repoName: string },
  {
    rejectValue: string
  }
>(
  'public-repo-show/repos/fetchRepoReadme',
  async ({ userName, repoName }, { rejectWithValue }) => {
    const response = await fetch(
      `https://api.github.com/repos/${userName}/${repoName}/readme`
    )
    if (response.status === 200) {
      const repoReadme = await response.json()
      return repoReadme
    }
    return rejectWithValue((await response.json()).message)
  }
)
/**
 * Repository state
 * @typedef ReposState
 * @type {object}
 * @property {LoadingStatus} loading - Loading status
 * @property {string} error -  error message for fetching repositories
 * @property {Repo[]} repos - repositories list for current user
 * @property {LoadingStatus} readmeLoading - readme file loading status
 * @property {string} repoReadme - repository readme
 */
export interface ReposState {
  reposLoading: LoadingStatus
  error?: string
  repos: Repo[]
  repoContent: RepoContent[]
  repoLoading?: LoadingStatus
  readmeLoading?: LoadingStatus
  repoReadme?: string
}

export const initialState: ReposState = {
  reposLoading: LoadingStatus.idle,
  repoLoading: LoadingStatus.idle,
  readmeLoading: LoadingStatus.idle,
  repos: [] as Repo[],
  repoContent: [] as RepoContent[],
  repoReadme: ''
}

const counterSlice = createSlice({
  name: 'public-repo-show/repos',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Repositories list actions
      // pending for repositories
      .addCase(fetchRepos.pending, state => {
        state.reposLoading = LoadingStatus.pending
      })
      // repositories succesfully loaded and passed to reducer
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.reposLoading = LoadingStatus.succeeded
        state.repos = action.payload || ([] as Repo[])
      })
      // some error occurred while loading repositories
      .addCase(fetchRepos.rejected, (state, action) => {
        state.error = action?.payload || ''
        state.repos = [] as Repo[]
        state.reposLoading = LoadingStatus.failed
      })
      // Repository content actions
      // pending for repository content
      .addCase(fetchRepoContent.pending, state => {
        state.repoLoading = LoadingStatus.pending
      })
      // repository content succesfully loaded and passed to reducer
      .addCase(fetchRepoContent.fulfilled, (state, action) => {
        state.repoLoading = LoadingStatus.succeeded
        state.repoContent = action.payload || ([] as RepoContent[])
      })
      // some error occurred while loading repository content
      .addCase(fetchRepoContent.rejected, (state, action) => {
        state.error = action?.payload || ''
        state.repoContent = [] as RepoContent[]
        state.repoLoading = LoadingStatus.failed
      })
      // Repository readme file actions
      // pending for repository readme file
      .addCase(fetchRepoReadme.pending, state => {
        state.readmeLoading = LoadingStatus.pending
      })
      // repository readme file succesfully loaded and passed to reducer
      .addCase(fetchRepoReadme.fulfilled, (state, action) => {
        state.readmeLoading = LoadingStatus.succeeded
        state.repoReadme = atob(action.payload.content || '')
      })
      // some error occurred while loading repository readme file
      .addCase(fetchRepoReadme.rejected, (state, action) => {
        state.error = action?.payload || ''
        state.repoReadme = ''
        state.readmeLoading = LoadingStatus.failed
      })
  }
})

export default counterSlice.reducer
