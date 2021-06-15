import React from 'react'

import { RepoList } from './'
import { LoadingStatus } from '@root/store'
import { useAppSelector } from '@root/utils/hooks'

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
