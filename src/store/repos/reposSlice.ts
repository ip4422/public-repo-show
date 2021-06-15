import { createSlice } from '@reduxjs/toolkit'
import { fetchRepos, fetchRepoContent, fetchRepoReadme } from './reposActions'
import { Repo, LoadingStatus, RepoContent, initialState } from './types'

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

export const repos = counterSlice.reducer
export * from './reposActions'
export * from './types'
