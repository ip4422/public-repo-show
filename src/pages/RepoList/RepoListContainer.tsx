import React from 'react'

import RepoList from './RepoList'
import { LoadingStatus } from '../../ducks'
import { useAppSelector } from '../../app/hooks'

export const RepoListContainer = () => {
  const repos = useAppSelector(state => state.repos.repos || [])
  const loading = useAppSelector(
    state =>
      state.repos.reposLoading === LoadingStatus.pending ||
      state.repos.repoLoading === LoadingStatus.pending ||
      state.repos.readmeLoading === LoadingStatus.pending
  )

  return <RepoList repos={repos} loading={loading} />
}

export default RepoListContainer
