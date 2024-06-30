import {createSlice} from '@reduxjs/toolkit'

const infiniteMoviesSlice = createSlice({
  name: 'infiniteMoviesSlice',
  initialState: {
    currentPage: 2,
    movieList: [],
  },
  reducers: {
    increasePage: (state) => {
      state.currentPage = state.currentPage + 1
    },
    addMovie: (state, action) => {
      state.movieList = [...state.movieList, ...action.payload]
    },
  },
})

export const {increasePage, addMovie} = infiniteMoviesSlice.actions
export default infiniteMoviesSlice.reducer
