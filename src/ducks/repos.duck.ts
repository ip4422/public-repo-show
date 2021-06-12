import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

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
>('public-repo-show/repos/fetch', async (userName, { rejectWithValue }) => {
  const response = await fetch(`https://api.github.com/users/${userName}/repos`)
  if (response.status === 200) {
    const repos = await response.json()
    return repos
  }
  return rejectWithValue((await response.json()).message)
})

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

/**
 * Repository state
 * @typedef ReposState
 * @type {object}
 * @property {string} loading - Loading status
 * @property {string} error -  error message for fetching repositories
 * @property {string} userId - user name for fetching repositories
 * @property {Repo[]} repos - repositories list for current user
 */
export interface ReposState {
  loading: LoadingStatus
  error?: string
  userId?: string
  repos: Repo[]
}

const initialState: ReposState = {
  loading: LoadingStatus.idle,
  userId: '',
  repos: [] as Repo[]
}

const counterSlice = createSlice({
  name: 'public-repo-show/repos',
  initialState,
  reducers: {
    setUserId(state, action: PayloadAction<string>) {
      state.userId = action.payload
    }
  },
  extraReducers: builder => {
    builder
      // pending for repositories
      .addCase(fetchRepos.pending, state => {
        state.loading = LoadingStatus.pending
      })
      // repositories succesfully loaded and passed to reducer
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.loading = LoadingStatus.succeeded
        state.repos = action.payload || ([] as Repo[])
      })
      // some error occurred while loading repositories
      .addCase(fetchRepos.rejected, (state, action) => {
        state.error = action?.payload || ''
        state.repos = [] as Repo[]
        state.loading = LoadingStatus.failed
      })
  }
})

export const { setUserId } = counterSlice.actions
export default counterSlice.reducer
