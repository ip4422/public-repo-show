import React from 'react'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import { ThunkMiddleware } from '@reduxjs/toolkit'
import configureMockStore from 'redux-mock-store'

import { initialState } from './ducks'
import App from './App'

const mockStore = configureMockStore(ThunkMiddleware)

const store = mockStore({ repos: initialState })

test('render App without errors', () => {
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
