import React from 'react'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import App from './App'

test('renders learn react link', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>
  )
  const inputElement = screen.getByPlaceholderText("Github's username")
  expect(inputElement).toBeInTheDocument()
})
