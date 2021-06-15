import React from 'react'
import './App.less'
import { Layout } from 'antd'

import { HeaderContainer } from '../components'
import { ROUTES, ApplicationRoutes } from './'

export function App() {
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
