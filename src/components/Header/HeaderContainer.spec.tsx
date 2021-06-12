import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import { storeFactory } from '../../utils/testUtils'
import HeaderContainer from './HeaderContainer'
import { LoadingStatus } from '../../ducks'

const initialState = {
  loading: LoadingStatus.idle,
  userId: '',
  repos: [] as Repo[]
}

const repoContent = [
  {
    name: 'testName1',
    description: 'test description 1'
  },
  {
    name: 'testName2',
    description: 'test description 2'
  }
]

const renderWithInitialState = state => {
  const history = createMemoryHistory()
  const setupState = { ...initialState, ...(state && state) }
  const store = storeFactory(setupState)
  render(
    <Router history={history}>
      <Provider store={store}>
        <HeaderContainer />
      </Provider>
    </Router>
  )
}

describe('should render without errors', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('should render with initial state without errors', () => {
    renderWithInitialState()
    const searchElement = screen.getByPlaceholderText("Github's username")
    expect(searchElement).toHaveValue('')
  })

  it('userId should be passed to store and repositories fetched', () => {
    fetch.mockResponseOnce(JSON.stringify(repoContent))

    const history = createMemoryHistory()
    const store = storeFactory(initialState)

    render(
      <Router history={history}>
        <Provider store={store}>
          <HeaderContainer />
        </Provider>
      </Router>
    )

    let searchElement = screen.getByPlaceholderText("Github's username")
    userEvent.type(searchElement, 'ip4422')

    const searchButton = screen.getByRole('button')
    userEvent.click(searchButton)

    expect(fetch).toHaveBeenCalledTimes(1)

    searchElement = screen.getByPlaceholderText("Github's username")
    expect(searchElement).toHaveValue('ip4422')

    expect(store.getState().userId).toEqual('ip4422')
  })
})
