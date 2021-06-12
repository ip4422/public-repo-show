import React from 'react'
import { Empty } from 'antd'

import RepoList from './RepoList'
import { useAppSelector } from '../../app/hooks'

export const RepoListContainer = () => {
  const repos = useAppSelector(state => state.repos.repos || [])

  return (
    <div>
      {repos.length ? (
        <RepoList repos={repos} />
      ) : (
        <Empty description={<span>Not found</span>} />
      )}
    </div>
  )
}

export default RepoListContainer
