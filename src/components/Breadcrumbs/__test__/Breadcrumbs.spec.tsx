import React from 'react'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { Breadcrumbs } from '../'

it('should render breadcrumbs correctly', () => {
  const history = createMemoryHistory()
  const props = {
    items: [
      { href: 'href1', title: 'title1' },
      { href: 'href2', title: 'title2' }
    ]
  }
  render(
    <Router history={history}>
      <Breadcrumbs {...props} />
    </Router>
  )
  let linkElement = screen.getByRole('link', { name: props.items[0].title })
  expect(linkElement).toBeInTheDocument()

  linkElement = screen.getByRole('link', { name: props.items[1].title })
  expect(linkElement).toBeInTheDocument()
})
