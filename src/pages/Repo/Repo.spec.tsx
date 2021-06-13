import React from 'react'
import { render, screen } from '@testing-library/react'

import { RepoContetItemType } from '../../ducks'
import Repo from './Repo'

const repoItems = [
  {
    name: 'testItemDir',
    type: RepoContetItemType.dir
  },
  {
    name: 'testItemFile',
    type: RepoContetItemType.file
  }
]
const header = 'test header'

describe('rendering Repo', () => {
  it('should render Repo without any props without errors', () => {
    render(<Repo />)
  })

  it('should render Repo with 2 items', () => {
    render(<Repo items={repoItems} header={header} />)
    let repoItemComponent = screen.getByText(repoItems[0].name)
    expect(repoItemComponent).toBeInTheDocument()
    repoItemComponent = screen.getByText(repoItems[1].name)
    expect(repoItemComponent).toBeInTheDocument()
  })
})
