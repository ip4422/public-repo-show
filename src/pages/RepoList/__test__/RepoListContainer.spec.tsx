import configureMockStore from 'redux-mock-store'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import { RepoListContainer } from '../'
import { initialState } from '@root/store'

const repoContent = [
  {
    name: 'testName1',
    full_name: 'testName1',
    description: 'test description 1'
  },
  {
    name: 'testName2',
    full_name: 'testName2',
    description: 'test description 2'
  }
]

const mockStore = configureMockStore()

const renderWithInitialState = state => {
  const history = createMemoryHistory()
  const setupState = { ...initialState, ...(state && state) }
  const store = mockStore({ repos: setupState })
  render(
    <Router history={history}>
      <Provider store={store}>
        <RepoListContainer />
      </Provider>
    </Router>
  )
}

describe('rendering with store', () => {
  it('should render with initial state without error', () => {
    renderWithInitialState()
    const emptyComponent = screen.getByText(/Not Found/i)
    expect(emptyComponent).toBeInTheDocument()
  })

  it('should render list of repositories', () => {
    renderWithInitialState({ repos: repoContent })
    let repoComponent = screen.getByRole('link', { name: /testName1/i })
    expect(repoComponent).toBeInTheDocument()

    repoComponent = screen.getByText(/test description 1/i)
    expect(repoComponent).toBeInTheDocument()

    repoComponent = screen.getByRole('link', { name: /testName2/i })
    expect(repoComponent).toBeInTheDocument()

    repoComponent = screen.getByText(/test description 2/i)
    expect(repoComponent).toBeInTheDocument()
  })
})
