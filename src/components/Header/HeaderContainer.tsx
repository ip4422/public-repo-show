import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { fetchRepos, setUserId, LoadingStatus } from '../../ducks'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Header from './Header'
import { getRoutesState } from '../../helpers'

const HeaderContainer = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const loading = useAppSelector(
    state => state.repos.loading === LoadingStatus.pending
  )
  const userId = useAppSelector(state => state.repos.userId)
  const [searchValue, setSearchValue] = useState(userId)
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    // wait for userId from redux. On app init it may already be set
    setSearchValue(userId)
  }, [userId])

  const handleSearch = (value: string) => {
    // fetch dispatched on location change
    history.push(`/${value}`)
  }

  useEffect(() => {
    const { userId: userName } = getRoutesState(location.pathname)
    if (userName) {
      dispatch(setUserId(userName))
      dispatch(fetchRepos(userName))
      setSearchValue(userName)
    }
  }, [location, dispatch])

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
