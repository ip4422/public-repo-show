import React from 'react'
import { Route, Switch } from 'react-router-dom' // <-- New code
import { RouteItem, RoutesProps } from '../config/routes'
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

export * from '../config/routes'
