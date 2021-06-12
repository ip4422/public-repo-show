import React, { useEffect, useRef } from 'react'
import './App.less'
import { Layout } from 'antd'
import { useLocation } from 'react-router-dom'

import ROUTES, { ApplicationRoutes } from './config/routes'
import { fetchRepos, setUserId } from './ducks'
import { useAppDispatch } from './app/hooks'
import { HeaderContainer } from './components'
import { getRoutesState } from './helpers'

function App() {
  const firstRender = useRef(true)
  const dispatch = useAppDispatch()
  const location = useLocation()

  useEffect(() => {
    if (firstRender.current) {
      const { userId } = getRoutesState(location.pathname)
      if (userId) {
        dispatch(setUserId(userId))
        dispatch(fetchRepos(userId))
      }
    }
    firstRender.current = false
  }, [location, dispatch])

  // TODO: add favicon

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderContainer />
      <Layout.Content style={{ padding: '20px 50px' }}>
        <ApplicationRoutes routes={ROUTES} />
      </Layout.Content>
      <Layout.Footer
        style={{ textAlign: 'center', position: 'sticky', bottom: '0' }}
      >
        Application for displaying Github user's public repositories
      </Layout.Footer>
    </Layout>
  )
}

export default App
