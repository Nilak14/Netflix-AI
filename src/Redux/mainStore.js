import {configureStore} from '@reduxjs/toolkit'
import userSlice from './Slices/userSlice'
import movieSlice from './Slices/movieSlice'
import infiniteMovieSlice from './Slices/infiniteMoviesSlice'
import infiniteSeriesSlice from './Slices/infiniteSeriesSlice'
import geminiSlice from './Slices/geminiSlice'
const mainStore = configureStore({
  reducer: {
    userSlice,
    movieSlice,
    infiniteMovieSlice,
    infiniteSeriesSlice,
    geminiSlice,
  },
})

export default mainStore
