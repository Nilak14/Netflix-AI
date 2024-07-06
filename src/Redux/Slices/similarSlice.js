import {createSlice} from '@reduxjs/toolkit'

const similarSlice = createSlice({
  name: 'similarSlice',
  initialState: {
    similarMovies: null,
    similarSeries: null,
  },
  reducers: {
    addSimilarMovies: (state, action) => {
      state.similarMovies = action.payload
    },
    addSimilarSeries: (state, action) => {
      state.similarSeries = action.payload
    },
  },
})
export const {addSimilarMovies, addSimilarSeries} = similarSlice.actions
export default similarSlice.reducer
