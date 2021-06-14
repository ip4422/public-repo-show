import React from 'react'
import { Empty, Spin } from 'antd'

import { Repo } from '../../ducks'
import { RepoCard } from '../../components'

interface RepoListProps {
  repos: Repo[]
  loading: boolean
}

export const RepoList = ({
  repos = [],
  loading = false
}: RepoListProps): JSX.Element => {
  return (
    <Spin tip='Loading...' spinning={loading}>
      {repos.length ? (
        repos.map(repo => (
          <RepoCard
            key={`key-for-${repo.full_name}`}
            name={repo.name}
            link={repo.full_name}
            description={repo.description}
          />
        ))
      ) : (
        <Empty description={<span>Not found</span>} />
      )}
    </Spin>
  )
}

export default RepoList
