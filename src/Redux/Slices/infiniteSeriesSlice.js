import {createSlice} from '@reduxjs/toolkit'

const infiniteSeriesSlice = createSlice({
  name: 'infiniteSeriesSlice',
  initialState: {
    currentPage: 2,
    seriesList: [],
  },
  reducers: {
    increasePage: (state) => {
      state.currentPage = state.currentPage + 1
    },
    addSeries: (state, action) => {
      state.seriesList = [...state.seriesList, ...action.payload]
    },
  },
})

export const {increasePage, addSeries} = infiniteSeriesSlice.actions
export default infiniteSeriesSlice.reducer
