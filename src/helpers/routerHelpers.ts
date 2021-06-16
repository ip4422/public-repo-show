import { matchPath } from 'react-router-dom'
import { ROUTES, REPO_PAGE_KEY, REPOS_ROOT_KEY } from '@root/config/routes'

/**
 * All known params for application routes
 * @typedef RoutesParams
 * @type {object}
 * @property {string} userId - current userId
 * @property {string} repoId -  current repoId
 */
export type RouteParams = {
  userId?: string
  repoId?: string
}

const userIdPath =
  ROUTES.find(route => route.key === REPOS_ROOT_KEY)?.path || ''
const repoIdPath = ROUTES.find(route => route.key === REPO_PAGE_KEY)?.path || ''
/**
 * List of all possible routes params for parsing on app initialization
 * to fetch data if we starts from some known route
 */
const allRoutesToList = [userIdPath, repoIdPath]

/**
 * Parsing route params
 * @param {string} pathname - current location pathname (current route)
 * @returns {RouteParams} - all params for current route
 */
export const getRouteParams = (pathname: string): RouteParams => {
  // check for userId first. We can repform on routes
  const { userId = undefined } = (matchPath(pathname, {
    path: allRoutesToList
  })?.params as RouteParams) || { userId: undefined, repoId: undefined }

  // if we have userId than can exist repoId
  if (userId) {
    const { repoId } = (matchPath(pathname, {
      path: repoIdPath
    })?.params as RouteParams) || { userId: undefined, repoId: undefined }
    return { userId, repoId }
  }
  return { userId, repoId: undefined }
}
