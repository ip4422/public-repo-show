import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { repos, ReposState } from '../store'

const middlewareEnhancer = applyMiddleware(thunkMiddleware)

/**
 * Create a testing store with imported reducers, middleware, and initial state
 * globals: rootReducer, middlewares
 * @function storeFactory
 * @param {object} initialState  - Initial state for store
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState: ReposState) =>
  createStore(repos, initialState, middlewareEnhancer)
