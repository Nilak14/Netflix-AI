import {createSlice} from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload
    },
  },
})

export const {addNowPlaying, addTrailer} = movieSlice.actions
export default movieSlice.reducer
