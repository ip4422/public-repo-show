import React, { useState, useEffect } from 'react'
import './App.css'
import { Layout, Row, Col, Menu, Input } from 'antd'

const { Header, Content, Footer } = Layout
const { Search } = Input

const HOST_NAME = 'https://api.github.com'
const API_GET_REPOS = '/users/ip4422/repos'

function App() {
  const [githubUserName, setGithubUserName] = useState('ip4422')
  const [repos, setRepos] = useState('')

  const fetchReposForUser = async (userName: string) => {
    let response = await fetch(`${HOST_NAME}/users/${userName}/repos`)
    const repo = await response.json()
    console.log(`repo: `, repo)
    setRepos(repo)
  }

  //   useEffect(() => {
  //     if (githubUserName) {
  //       const resp = fetchReposForUser(githubUserName)
  //       console.log(`resp: `, resp)
  //     }
  //   }, [])

  const handleSearch = (value: string, e: any) => {
    fetchReposForUser(value)
    console.log(`value: `, value)
    console.log(`e: `, e)
  }

  return (
    <Layout className='layout'>
      <Header>
        <Row justify='start' align='middle' gutter={32}>
          <Col span={4}>
            <Input.Group compact>
              <Search
                placeholder="Github's username"
                // loading
                // value={githubUserName}
                // onChange={handleChangeUserName}
                onSearch={handleSearch}
              />
            </Input.Group>
          </Col>
          <Col span={12}>
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
              <Menu.Item key='1'>nav 1</Menu.Item>
              <Menu.Item key='2'>nav 2</Menu.Item>
              <Menu.Item key='3'>nav 3</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: '20px 50px' }}>
        Content
        <div style={{ width: '300px' }}>
          <Search
            placeholder="Github's username"
            allowClear
            onSearch={() => {}}
          />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Footer</Footer>
    </Layout>
  )
}

export default App
