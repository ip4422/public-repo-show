import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Repo = {
  avatar_url: string
  name: string
  description: string
}

interface State {
  loaded?: boolean
  loading?: boolean
  error?: string
  userId?: string
  repos: Repo[]
}

const initialState: State = {
  loaded: false,
  userId: '',
  repos: [] as Repo[]
}

const counterSlice = createSlice({
  name: 'public-repo-show/repos',
  initialState,
  reducers: {
    load(state) {
      state.loading = true
      state.loaded = false
    },
    loadSuccess(state, action: PayloadAction<Repo[]>) {
      state.loading = false
      state.loaded = true
      state.repos = action.payload || ([] as Repo[])
    },
    loadFail(state, action: PayloadAction<string>) {
      state.error = action.payload
    },
    changeUserId(state, action: PayloadAction<string>) {
      state.userId = action.payload
    }
  }
})

export const { load, loadSuccess, loadFail, changeUserId } =
  counterSlice.actions
export default counterSlice.reducer
