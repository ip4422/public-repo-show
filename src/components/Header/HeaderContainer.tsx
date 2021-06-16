import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { fetchRepos, LoadingStatus } from '@root/store'
import { useAppDispatch, useAppSelector } from '@root/utils/hooks'
import { Header } from './'
import { getRouteParams } from '@root/helpers'
import { ROOT_PATH } from '@root/config/constants'

export const HeaderContainer = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const loading = useAppSelector(
    state => state.repos.reposLoading === LoadingStatus.pending
  )
  const [searchValue, setSearchValue] = useState('')
  const history = useHistory()
  const location = useLocation()

  const handleSearch = (value: string) => {
    // fetch dispatched on location change
    history.push(`${ROOT_PATH}/${value}`)
  }

  useEffect(() => {
    const { userId: userName } = getRouteParams(location.pathname)
    if (userName) {
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
