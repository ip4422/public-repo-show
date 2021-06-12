import React from 'react'
import { Route, Switch } from 'react-router-dom' // <-- New code

import { RepoListContainer } from '../pages'
import { Repo } from '../pages'

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
type RouteItem = {
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
interface RoutesProps {
  routes: RouteItem[]
}

export const REPOS_ROOT_KEY = 'REPOS_ROOT_KEY'
export const REPO_PAGE_KEY = 'REPO_PAGE_KEY'

export const ROUTES: RouteItem[] = [
  { path: '/', key: 'APP_ROOT', exact: true, component: RepoListContainer },
  {
    path: '/:userId',
    exact: true,
    key: REPOS_ROOT_KEY,
    component: RepoListContainer
  },
  { path: '/:userId/:repoId', key: REPO_PAGE_KEY, component: Repo }
]

/**
 * Render a route with potential sub routes
 * @param {RouteItem} route - Route with potential sub routes.
 * @returns {JSX.Element} - Route (react-router-dom component)
 */
const RouteWithSubRoutes = (route: RouteItem): JSX.Element => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  )
}

/**
 * Render all array of routes with potential sub routes
 * @param {RouteItem} route - Route with potential sub routes.
 * @returns {JSX.Element} - All Routes wrapped in Switch (react-router-dom
 * component)
 */
export const ApplicationRoutes = ({ routes }: RoutesProps): JSX.Element => {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes {...route} />
      })}
      <Route component={() => <h1>Page Not Found!</h1>} />
    </Switch>
  )
}
