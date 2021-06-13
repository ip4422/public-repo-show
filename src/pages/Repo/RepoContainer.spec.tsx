import React from 'react'
import { render, screen } from '@testing-library/react'

import RepoContainer from './RepoContainer'

it('should render RepoContainer without any props without errors', () => {
  render(<RepoContainer />)
  let emptyComponent = screen.getByText('Not found')
  expect(emptyComponent).toBeInTheDocument()
})
