import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../module/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  }
})

