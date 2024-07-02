import {createSlice} from '@reduxjs/toolkit'
import run from '../../Gemini/gemini'

const geminiSlice = createSlice({
  name: 'geminiSlice',
  initialState: {
    generatedResult: null,
  },
  reducers: {
    addGeneratedResult: (state, action) => {
      state.generatedResult = action.payload
    },
  },
})
export const {addGeneratedResult} = geminiSlice.actions
export default geminiSlice.reducer
