import React from 'react'
// import { useDispatch } from 'react-redux'
// import React, { useState } from 'react'
import './App.less'
// import './App.css'
import { Layout, Row, Col, Input, Space, Breadcrumb } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

import ROUTES, { ApplicationRoutes } from './config/routes'
import { RepoCard } from './components'
import { fetchRepos } from './ducks'
import { useAppDispatch } from './app/hooks'

const { Header, Content, Footer } = Layout
const { Search } = Input

function App() {
  const dispatch = useAppDispatch()

  const handleSearch = (value: string) => {
    dispatch(fetchRepos(value))
  }

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
                  <Breadcrumb style={{ color: '#fff' }}>
                    <Breadcrumb.Item href=''>Application List</Breadcrumb.Item>
                    <Breadcrumb.Item>Application</Breadcrumb.Item>
                  </Breadcrumb>
                </Space>
              </div>
            </Row>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: '20px 50px' }}>
        <ApplicationRoutes routes={ROUTES} />
        <RepoCard title='simple title' description='simple description' />
        {/* <Empty /> */}
      </Content>
      <Footer style={{ textAlign: 'center', position: 'sticky', bottom: '0' }}>
        Footer
      </Footer>
    </Layout>
  )
}

export default App
