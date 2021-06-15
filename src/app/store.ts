import { configureStore } from '@reduxjs/toolkit'
import { repos } from '../store'

export const store = configureStore({
  reducer: {
    repos
  },
  devTools: true
})

// Infer the `RootState` type from the store
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {repos: ReposState}
export type AppDispatch = typeof store.dispatch
