import { configureStore } from '@reduxjs/toolkit'
import repos from '../ducks/repos'

const store = configureStore({
  reducer: {
    repos
  },
  devTools: true
})

// Infer the `RootState` type from the store
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
