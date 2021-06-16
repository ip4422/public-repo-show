import React from 'react'
import { Layout, Row, Col, Input, Space } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './header.css'

import { BreadcrumbsContainer } from '../'

/**
 * Interface for Header component
 * @typedef HeaderProps
 * @type {object}
 * @property {string} userId - userId for search input
 * @property {boolean} loading - loading flag
 * @property {function} onSearch - handling search event for fetch repos
 * @property {function} onChange - handling change event for storing userId
 *
 */
interface HeaderProps {
  onSearch: (value: string) => void
  userId?: string
  loading?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * Show Header with search input and breadcrumbs
 * @param {function} onSearch - handler for userId repo list fetching
 * @param {string} userId - user for repositories list
 * @param {boolean} loading - loading flag
 * @param {function} onChange - handler for storing userId value
 */
export const Header = ({
  onSearch,
  userId,
  loading,
  onChange
}: HeaderProps) => {
  return (
    <Layout.Header>
      <Row justify='start' align='middle' gutter={32}>
        <Col span={4}>
          <Row justify='start' align='middle'>
            <Space align='center'>
              <Link to='/'>
                <GithubOutlined
                  style={{ fontSize: '32px', color: '#fff', display: 'block' }}
                />
              </Link>
              <Input.Search
                placeholder="Github's username"
                style={{ display: 'block' }}
                loading={loading}
                value={userId}
                onSearch={onSearch}
                onChange={onChange}
              />
            </Space>
          </Row>
        </Col>
        <Col span={12}>
          <Row justify='start' align='middle'>
            <div className='header'>
              <Space align='center'>
                <BreadcrumbsContainer />
              </Space>
            </div>
          </Row>
        </Col>
      </Row>
    </Layout.Header>
  )
}
