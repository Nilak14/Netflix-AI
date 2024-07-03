import {createSlice} from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: {
    isSearchPageOn: false,
    cachedData: {},
  },
  reducers: {
    openSearchPage: (state) => {
      state.isSearchPageOn = true
    },
    closeSearchPage: (state) => {
      state.isSearchPageOn = false
    },

    addDataToCache: (state, action) => {
      state.cachedData = Object.assign(state.cachedData, action.payload)
    },
  },
})

export const {openSearchPage, closeSearchPage, addDataToCache} =
  searchSlice.actions
export default searchSlice.reducer
