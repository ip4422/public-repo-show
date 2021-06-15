import { RepoListContainer } from '../pages'
import { RepoContainer } from '../pages'

/**
 * @typedef RouteItem
 * @type {object}
 * @property {string} path - the route that’s handled by this config
 * @property {string} key -  a unique identifier for the route
 * @property {boolean} exact - a bool that determines whether the path should
 * be matched for exactly, or just partially
 * @property {JSX.Element} component - the component to render when the app is
 * at the particular path
 */
export type RouteItem = {
  path: string
  key: string
  exact?: boolean
  component: <T>(props: T) => JSX.Element
  routes?: RouteItem[]
}

/**
 * Interface for Routes component
 * @typedef RoutesProps
 * @type {object}
 * @property {RouteItem[]} routes - routes to render
 */
export interface RoutesProps {
  routes: RouteItem[]
}

export const REPOS_ROOT_KEY = 'REPOS_ROOT_KEY'
export const REPO_PAGE_KEY = 'REPO_PAGE_KEY'

/**
 *  All application routes
 * @type {RouteItem[]}
 */
export const ROUTES: RouteItem[] = [
  { path: '/', key: 'APP_ROOT', exact: true, component: RepoListContainer },
  {
    path: '/:userId',
    exact: true,
    key: REPOS_ROOT_KEY,
    component: RepoListContainer
  },
  { path: '/:userId/:repoId', key: REPO_PAGE_KEY, component: RepoContainer }
]
