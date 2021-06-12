import React from 'react'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { RepoCard } from './RepoCard'

it('should render Empty Card component', async () => {
  const history = createMemoryHistory()
  const props = {
    name: 'example title',
    description: 'just description'
  }
  render(
    <Router history={history}>
      <RepoCard {...props} />
    </Router>
  )
  const linkElement = screen.getByRole('link', { name: /example title/i })
  expect(linkElement).toBeInTheDocument()
})
