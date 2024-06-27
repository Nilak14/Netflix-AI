import {configureStore} from '@reduxjs/toolkit'
import userSlice from './Slices/userSlice'
import movieSlice from './Slices/movieSlice'

const mainStore = configureStore({
  reducer: {
    userSlice,
    movieSlice,
  },
})

export default mainStore
