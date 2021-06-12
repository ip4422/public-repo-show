import React from 'react'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import RepoList from './RepoList'

const repoContent = [
  {
    avatar_url: 'https://www.url1.com',
    name: 'testName1',
    description: 'test description 1'
  },
  {
    avatar_url: 'https://www.url2.com',
    name: 'testName2',
    description: 'test description 2'
  }
]

describe('rendering RepoList', () => {
  const history = createMemoryHistory()
  // const props = {}

  it('should render RepoList without any props without errors', () => {
    render(
      <Router history={history}>
        <RepoList />
      </Router>
    )
  })

  it('should render 2 items list', () => {
    render(
      <Router history={history}>
        <RepoList repos={repoContent} />
      </Router>
    )
    let repoListComponent = screen.getByRole('link', {
      name: repoContent[0].name
    })
    expect(repoListComponent).toBeInTheDocument()
    repoListComponent = screen.getByRole('link', {
      name: repoContent[1].name
    })
    expect(repoListComponent).toBeInTheDocument()
  })
})
