import {createSlice} from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movieSlice',
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    popularMovies: null,
    topRatedMovies: null,
    movieImages: null,
    seriesImages: null,
    movieDetails: null,
    seriesDetails: null,
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
    addMoviesImage: (state, action) => {
      state.movieImages = action.payload
    },
    addSeriesImages: (state, action) => {
      state.seriesImages = action.payload
    },
    addMovieDetails: (state, action) => {
      state.movieDetails = action.payload
    },
    addSeriesDetails: (state, action) => {
      state.seriesDetails = action.payload
    },
  },
})

export const {
  addNowPlaying,
  addTrailer,
  addPopular,
  addTopRated,
  addMoviesImage,
  addSeriesImages,
  addMovieDetails,
  addSeriesDetails,
} = movieSlice.actions
export default movieSlice.reducer
