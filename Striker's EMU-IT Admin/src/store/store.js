import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../Slice/users/userSlice'
import postReducer from '../Slice/users/postSlice'

export const store = configureStore({
    reducer: {
      users: userReducer,
      posts: postReducer,
    },
  })