import React from 'react'
// import React, { useState } from 'react'
import './App.less'
// import './App.css'
import { Layout, Row, Col, Input, Space, Breadcrumb } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

import ROUTES, { ApplicationRoutes } from './config/routes'
import { RepoCard } from './components/RepoCard'
const { Header, Content, Footer } = Layout
const { Search } = Input

// const HOST_NAME = 'https://api.github.com'

function App() {
  //   const [githubUserName, setGithubUserName] = useState('ip4422')
  //   const [repos, setRepos] = useState('')

  //   const fetchReposForUser = async (userName: string) => {
  //     let response = await fetch(`${HOST_NAME}/users/${userName}/repos`)
  //     const repo = await response.json()
  //     console.log(`repo: `, repo)
  //     setRepos(repo)
  //   }

  //   const handleSearch = (value: string, e: any) => {
  //     // fetchReposForUser(value)
  //     console.log(`value: `, value)
  //     console.log(`e: `, e)
  //   }

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
                  //   onSearch={handleSearch}
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
