import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import repos from '../ducks/repos.duck'

const middlewareEnhancer = applyMiddleware(thunkMiddleware)

/**
 * Create a testing store with imported reducers, middleware, and initial state
 * globals: rootReducer, middlewares
 * @function storeFactory
 * @param {object} initialState  - Initial state for store
 * @returns {Store} - Redux store
 */
export const storeFactory = initialState =>
  createStore(repos, initialState, middlewareEnhancer)
