import React, { useState, useEffect } from 'react'

import { fetchRepos, setUserId, LoadingStatus } from '../../ducks'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Header from './Header'

const HeaderContainer = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const loading = useAppSelector(
    state => state.repos.loading === LoadingStatus.pending
  )
  const userId = useAppSelector(state => state.repos.userId)
  const [searchValue, setSearchValue] = useState(userId)

  useEffect(() => {
    // wait for userId from redux. On app init it may already be set
    setSearchValue(userId)
  }, [userId])

  const handleSearch = (value: string) => {
    dispatch(setUserId(value))
    dispatch(fetchRepos(value))
  }

  const handleChangeSearchValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(event.target.value)
  }

  return (
    <Header
      onSearch={handleSearch}
      loading={loading}
      userId={searchValue}
      onChange={handleChangeSearchValue}
    />
  )
}

export default HeaderContainer
