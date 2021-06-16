import React from 'react'
import { Empty, Spin } from 'antd'

import { Repo } from '@root/store'
import { RepoCard } from '@root/components'

/**
 * Interface for RepoList component
 * @typedef RepoListProps
 * @type {object}
 * @param {Repo[]} repos - array of repositories info
 * @param {string} loading - loading flag
 */
interface RepoListProps {
  repos: Repo[]
  loading: boolean
}

/**
 * List or repositories names and descripsions with links to its content
 */
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
