import React from 'react'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import BreadcrumbsContainer from './BreadcrumbsContainer'

it('should render breadcrumbs correctly', () => {
  const history = createMemoryHistory()
  const route = '/ip4422/shop-app'
  history.push(route)
  render(
    <Router history={history}>
      <BreadcrumbsContainer />
    </Router>
  )
  let linkElement = screen.getByRole('link', { name: 'ip4422' })
  expect(linkElement).toBeInTheDocument()

  linkElement = screen.getByRole('link', { name: 'shop-app' })
  expect(linkElement).toBeInTheDocument()
})
