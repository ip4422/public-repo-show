import React from 'react'
import { List } from 'antd'

import { RepoContent } from '../../ducks'
import RepoItem from './RepoItem'

interface RepoProps {
  header?: string
  items: RepoContent[]
}

const Repo = ({ items, header }: RepoProps): JSX.Element => {
  return (
    <List
      itemLayout='horizontal'
      header={<div>{header}</div>}
      bordered
      dataSource={items}
      renderItem={item => <RepoItem {...item} />}
    />
  )
}

export default Repo
