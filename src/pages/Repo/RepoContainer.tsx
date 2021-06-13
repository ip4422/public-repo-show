import React from 'react'
import { Empty } from 'antd'

import { RepoContent } from '../../ducks'
import Repo from './Repo'

const RepoContainer = () => {
  const items = [] as RepoContent[]
  const header = ''
  return (
    <div>
      {items.length ? (
        <Repo items={items} header={header} />
      ) : (
        <Empty description={<span>Not found</span>} />
      )}
    </div>
  )
}

export default RepoContainer
