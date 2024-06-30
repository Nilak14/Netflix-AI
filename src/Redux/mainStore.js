import {configureStore} from '@reduxjs/toolkit'
import userSlice from './Slices/userSlice'
import movieSlice from './Slices/movieSlice'
import tvSeriesSlice from './Slices/tvSeriesSlice'

const mainStore = configureStore({
  reducer: {
    userSlice,
    movieSlice,
    tvSeriesSlice,
  },
})

export default mainStore
