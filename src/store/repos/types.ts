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
