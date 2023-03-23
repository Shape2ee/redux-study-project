import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  number: 0,
  status: 'welcome',
}

export const asyncUpfetch = createAsyncThunk('counterSlice/asyncUpfetch',
  async () => {
    const resp = await fetch('https://api.countapi.xyz/hit/opesaljkdfsadf.com/visits')
    const data = await resp.json()
    return data.value
  }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action)
      state.number = state.number + action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpfetch.pending, (state, action) => {
      state.status = 'Loding'
    })
    builder.addCase(asyncUpfetch.fulfilled, (state, action) => {
      state.number = action.payload
      state.status = 'complete'
    })
    builder.addCase(asyncUpfetch.rejected, (state, action) => {
      state.status = 'fail'
    })
  }
  
})

export const { add } = counterSlice.actions

export default counterSlice.reducer