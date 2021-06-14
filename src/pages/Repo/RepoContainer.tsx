import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { fetchRepoContent, fetchRepoReadme, LoadingStatus } from '../../ducks'
import { RepoContent } from '../../ducks'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import Repo from './Repo'
import { RouteParams } from '../../helpers'

const RepoContainer = () => {
  const dispatch = useAppDispatch()
  const items = useAppSelector(
    state => state.repos.repoContent || ([] as RepoContent[])
  )
  const loading = useAppSelector(
    state =>
      state.repos.reposLoading === LoadingStatus.pending ||
      state.repos.repoLoading === LoadingStatus.pending ||
      state.repos.readmeLoading === LoadingStatus.pending
  )
  const readme = useAppSelector(state => state.repos.repoReadme || '')
  let { userId, repoId } = useParams() as RouteParams

  useEffect(() => {
    if (userId && repoId) {
      dispatch(fetchRepoContent({ userName: userId, repoName: repoId }))
      dispatch(fetchRepoReadme({ userName: userId, repoName: repoId }))
    }
  }, [userId, repoId, dispatch])

  return (
    <Repo items={items} header={repoId} readme={readme} loading={loading} />
  )
}

export default RepoContainer
