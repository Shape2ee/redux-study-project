import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  number: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action)
      state.number = state.number + action.payload
    }
  }
})

export const { add } = counterSlice.actions

export default counterSlice.reducer