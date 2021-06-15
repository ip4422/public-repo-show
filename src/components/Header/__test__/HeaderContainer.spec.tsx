import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import { storeFactory } from '../../../utils/testUtils'
import { HeaderContainer } from '../'

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

const githubUserName = 'testName'

const renderHeaderContainer = state => {
  const history = createMemoryHistory()
  const store = storeFactory(state)
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

  it('should render with empty state without errors', () => {
    renderHeaderContainer()
    const searchElement = screen.getByPlaceholderText("Github's username")
    expect(searchElement).toHaveValue('')
  })

  it('userId should be passed to store and repositories fetched', () => {
    fetch.mockResponseOnce(JSON.stringify(repoContent))

    renderHeaderContainer()

    let searchElement = screen.getByPlaceholderText("Github's username")
    userEvent.type(searchElement, githubUserName)

    const searchButton = screen.getByRole('button')
    userEvent.click(searchButton)

    expect(fetch).toHaveBeenCalledTimes(1)

    searchElement = screen.getByPlaceholderText("Github's username")
    expect(searchElement).toHaveValue(githubUserName)
  })
})
