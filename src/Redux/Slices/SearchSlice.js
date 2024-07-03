import {createSlice} from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: {
    isSearchPageOn: false,
    cachedData: {},
  },
  reducers: {
    toggleSearchPage: (state) => {
      state.isSearchPageOn = !state.isSearchPageOn
    },

    addDataToCache: (state, action) => {
      state.cachedData = Object.assign(state.cachedData, action.payload)
    },
  },
})

export const {toggleSearchPage, addDataToCache} = searchSlice.actions
export default searchSlice.reducer
