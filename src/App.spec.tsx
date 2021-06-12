import React from 'react'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import { ThunkMiddleware } from '@reduxjs/toolkit'
import configureMockStore from 'redux-mock-store'

import { LoadingStatus, Repo } from './ducks'
import App from './App'

const initialState = {
  loading: LoadingStatus.idle,
  userId: '',
  repos: [] as Repo[]
}

const mockStore = configureMockStore(ThunkMiddleware)

const store = mockStore({ repos: initialState })

test('renders learn react link', () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  )
  const inputElement = screen.getByPlaceholderText("Github's username")
  expect(inputElement).toBeInTheDocument()
})
