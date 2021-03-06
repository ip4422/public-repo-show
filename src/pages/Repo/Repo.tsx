import React from 'react'
import { List, Typography, Card, Empty, Spin } from 'antd'
import ReactMarkdown from 'react-markdown'
import './repo.css'

import { RepoContent } from '@root/store'
import { RepoItem } from './'

/**
 * Interface for Repo component
 * @typedef RepoProps
 * @type {object}
 * @param {string} header - repository name
 * @param {string} readme - readme formatted content
 * @param {string} loading - loading flag
 * @param {RepoContent[]} items - repository content files and folder names
 * with content type flag ('file' | 'dir')
 */
interface RepoProps {
  header?: string
  items: RepoContent[]
  readme: string
  loading?: boolean
}

/**
 * Draw repository content and readme content
 */
export const Repo = ({
  items = [],
  header = '',
  readme = '',
  loading = false
}: RepoProps): JSX.Element => {
  return (
    <Spin tip='Loading...' spinning={loading}>
      {items.length ? (
        <>
          <List
            size='small'
            header={<Typography.Title level={4}>{header}</Typography.Title>}
            bordered
            dataSource={items}
            renderItem={item => <RepoItem {...item} />}
          />
          <div className='card-wrapper'>
            <Card title='REAMDE.md'>
              <ReactMarkdown children={readme} />
            </Card>
          </div>
        </>
      ) : (
        <Empty description={<span>Not found</span>} />
      )}
    </Spin>
  )
}
