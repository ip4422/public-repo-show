import React from 'react'
import { render, screen } from '@testing-library/react'
import { RepoItem } from '../'

describe('rendering RepoContent without errors', () => {
  it('should render RepoItem without any props without errors', () => {
    render(<RepoItem />)
  })

  it('should render item with description', () => {
    const name = 'simple object name'
    render(<RepoItem name={name} />)
    let repoItemComponent = screen.getByText(name)
    expect(repoItemComponent).toBeInTheDocument()
  })
})
