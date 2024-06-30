import {createSlice} from '@reduxjs/toolkit'

const tvSeriesSlice = createSlice({
  name: 'tvSeriesSlice',
  initialState: {
    onTheAirSeries: null,
    tvSeriesTrailer: null,
  },
  reducers: {
    addOnTheAir: (state, action) => {
      state.onTheAirSeries = action.payload
    },
    addTvSeriesTrailer: (state, action) => {
      state.tvSeriesTrailer = action.payload
    },
  },
})

export const {addOnTheAir, addTvSeriesTrailer} = tvSeriesSlice.actions
export default tvSeriesSlice.reducer
