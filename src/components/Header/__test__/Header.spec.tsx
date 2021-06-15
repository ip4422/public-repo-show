import configureMockStore from 'redux-mock-store'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'

import { Header } from '../'

const mockStore = configureMockStore()
const history = createMemoryHistory()

const renderHeader = (state, props) => {
  render(
    <Router history={history}>
      <Provider store={mockStore(state)}>
        <Header {...props} />
      </Provider>
    </Router>
  )
}

describe('should render without errors', () => {
  it('should render with default empty params', () => {
    renderHeader()
    const searchElement = screen.getByPlaceholderText("Github's username")
    expect(searchElement).toBeInTheDocument()
  })

  it('types in search box', () => {
    const mockOnChange = jest.fn()
    renderHeader(undefined, { onChange: mockOnChange })
    let searchElement = screen.getByPlaceholderText("Github's username")
    userEvent.type(searchElement, 'ip4422')
    searchElement = screen.getByPlaceholderText("Github's username")
    expect(searchElement).toHaveValue('ip4422')
    expect(mockOnChange).toHaveBeenCalledTimes(6)
  })

  it('should have passed username', () => {
    renderHeader(undefined, { userId: 'ip4422' })
    let searchElement = screen.getByPlaceholderText("Github's username")
    expect(searchElement).toHaveValue('ip4422')
  })

  it('types in search box and fire up onSearch event', () => {
    const mockOnSearch = jest.fn()
    renderHeader(undefined, { onSearch: mockOnSearch })
    const searchElement = screen.getByPlaceholderText("Github's username")
    userEvent.type(searchElement, 'ip4422')
    const searchButton = screen.getByRole('button')
    userEvent.click(searchButton)
    expect(mockOnSearch).toHaveBeenCalledTimes(1)
  })
})
