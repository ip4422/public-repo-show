import { createAsyncThunk } from '@reduxjs/toolkit'
import { Repo, RepoContent, RepoReadme } from './types'

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
