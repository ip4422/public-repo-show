import React, { useEffect, useRef } from 'react'
import './App.less'
import { Layout, Row, Col, Input, Space } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { useLocation } from 'react-router-dom'

import ROUTES, { ApplicationRoutes } from './config/routes'
import { fetchRepos, setUserId } from './ducks'
import { useAppDispatch } from './app/hooks'
import { BreadcrumbsContainer } from './components'
import { getRoutesState } from './helpers'

const { Header, Content, Footer } = Layout
const { Search } = Input

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

  const handleSearch = (value: string) => {
    dispatch(setUserId(value))
    dispatch(fetchRepos(value))
  }

  // TODO: add favicon

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <Row justify='start' align='middle' gutter={32}>
          <Col span={4}>
            <Row justify='start' align='middle'>
              <Space align='center'>
                <GithubOutlined
                  style={{ fontSize: '32px', color: '#fff', display: 'block' }}
                />
                <Search
                  placeholder="Github's username"
                  style={{ display: 'block' }}
                  // loading
                  // value={githubUserName}
                  onSearch={handleSearch}
                />
              </Space>
            </Row>
          </Col>
          <Col span={12}>
            <Row justify='start' align='middle'>
              <div style={{ height: '64px' }}>
                <Space align='center'>
                  <BreadcrumbsContainer />
                </Space>
              </div>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: '20px 50px' }}>
        <ApplicationRoutes routes={ROUTES} />
      </Content>
      <Footer style={{ textAlign: 'center', position: 'sticky', bottom: '0' }}>
        Application for displaying Github user's public repositories
      </Footer>
    </Layout>
  )
}

export default App
