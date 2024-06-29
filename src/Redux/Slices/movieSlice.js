import {createSlice} from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    popularMovies: null,
    topRatedMovies: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload
    },
    addPopular: (state, action) => {
      state.popularMovies = action.payload
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload
    },
    addTopRated: (state, action) => {
      state.topRatedMovies = action.payload
    },
  },
})

export const {addNowPlaying, addTrailer, addPopular, addTopRated} =
  movieSlice.actions
export default movieSlice.reducer
