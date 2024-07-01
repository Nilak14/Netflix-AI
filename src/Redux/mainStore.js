import {configureStore} from '@reduxjs/toolkit'
import userSlice from './Slices/userSlice'
import movieSlice from './Slices/movieSlice'
import infiniteMovieSlice from './Slices/infiniteMoviesSlice'
import infiniteSeriesSlice from './Slices/infiniteSeriesSlice'
const mainStore = configureStore({
  reducer: {
    userSlice,
    movieSlice,
    infiniteMovieSlice,
    infiniteSeriesSlice,
  },
})

export default mainStore
