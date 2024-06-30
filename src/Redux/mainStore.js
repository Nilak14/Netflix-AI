import {configureStore} from '@reduxjs/toolkit'
import userSlice from './Slices/userSlice'
import movieSlice from './Slices/movieSlice'
import infiniteMovieSlice from './Slices/infiniteMoviesSlice'
const mainStore = configureStore({
  reducer: {
    userSlice,
    movieSlice,
    infiniteMovieSlice,
  },
})

export default mainStore
