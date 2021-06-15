import { render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

import { store } from '@root/app'
import { RepoContainer } from '../'
import { RepoContetItemType } from '@root/store'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({ userId: 'userIdRoute', repoId: 'repoIdRoute' }),
  useRouteMatch: () => ({ url: '/userIdRoute/repoIdRoute' })
}))

const repoContent = [
  {
    name: 'testName1',
    type: RepoContetItemType.dir
  },
  {
    name: 'testName2',
    type: RepoContetItemType.file
  }
]

const readMeContent = 'content of readme file'
const repoRoute = '/userIdRoute/repoIdRoute'
const readmeHeader = 'REAMDE.md'

const renderRepoContainer = state => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <Provider store={store}>
        <RepoContainer />
      </Provider>
    </Router>
  )
  return history
}

it('should render RepoContainer without any props without errors', () => {
  renderRepoContainer()
  let emptyComponent = screen.getByText('Not found')
  expect(emptyComponent).toBeInTheDocument()
})

it('should apply changed route', async () => {
  fetch.resetMocks()

  fetch.mockResponses(
    [JSON.stringify(repoContent), { status: 200 }],
    [JSON.stringify({ content: btoa(readMeContent) }), { status: 200 }]
  )

  const history = renderRepoContainer()

  // should out empty component while fetch not fulfilled
  let emptyComponent = screen.getByText('Not found')
  expect(emptyComponent).toBeInTheDocument()

  // change route for start fetching repo content
  history.push(repoRoute)

  // should fetch repo content and readme file
  expect(fetch).toHaveBeenCalledTimes(2)

  // should render repo content
  await waitFor(() =>
    expect(screen.getByText(repoContent[0].name)).toBeInTheDocument()
  )
  await waitFor(() =>
    expect(screen.getByText(repoContent[1].name)).toBeInTheDocument()
  )

  await waitFor(() =>
    expect(screen.getByText(readmeHeader)).toBeInTheDocument()
  )
})
