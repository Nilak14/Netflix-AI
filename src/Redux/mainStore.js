import {configureStore} from '@reduxjs/toolkit'
import userSlice from './Slices/userSlice'

const mainStore = configureStore({
  reducer: {
    userSlice,
  },
})

export default mainStore
