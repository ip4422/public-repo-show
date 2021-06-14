import React from 'react'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import RepoList from './RepoList'

const defaultProps = {
  repos: [
    {
      full_name: 'ip4422/shop-app',
      name: 'testName1',
      description: 'test description 1'
    },
    {
      full_name: 'ip4422/test1',
      name: 'testName2',
      description: 'test description 2'
    }
  ],
  loading: false
}

const renderRepoList = props => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <RepoList {...props} />
    </Router>
  )
  return history
}

describe('rendering RepoList', () => {
  // const props = {}

  it('should render RepoList without any props without errors', () => {
    renderRepoList()
    let emptyComponent = screen.getByText('Not found')
    expect(emptyComponent).toBeInTheDocument()
  })

  it('should render 2 items list', () => {
    renderRepoList(defaultProps)

    let repoListComponent = screen.getByRole('link', {
      name: defaultProps.repos[0].name
    })
    expect(repoListComponent).toBeInTheDocument()
    repoListComponent = screen.getByRole('link', {
      name: defaultProps.repos[1].name
    })
    expect(repoListComponent).toBeInTheDocument()
  })
})
