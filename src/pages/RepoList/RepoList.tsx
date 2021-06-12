import React from 'react'

import { Repo } from '../../ducks'
import { RepoCard } from '../../components'

interface RepoListProps {
  repos: Repo[]
}

export const RepoList = ({ repos = [] }: RepoListProps): JSX.Element => {
  return (
    <>
      {repos.map(repo => (
        <RepoCard
          key={`key-for-${repo.full_name}`}
          name={repo.name}
          link={repo.full_name}
          description={repo.description}
        />
      ))}
    </>
  )
}

export default RepoList
