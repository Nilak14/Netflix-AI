import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    currentUser: null,
    userLoggedIn: false,
    isLoading: true,
  },
  reducers: {
    initializeUser: (state, action) => {
      if (action.payload) {
        state.currentUser = action.payload
        state.userLoggedIn = true
      } else {
        state.currentUser = null
        state.userLoggedIn = false
      }
      state.isLoading = false
    },
  },
})

export const {initializeUser} = userSlice.actions
export default userSlice.reducer
