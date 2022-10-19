import { createSlice } from "@reduxjs/toolkit"
import { createAction } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: "",
  reducers:{
    SetFilter(state,action){
      console.log('Filter state now: ', state)
      console.log('action', action)
      state = action.payload
      return state
    }
  }
})
export default filterSlice.reducer
export const setFilter = createAction('filter/SetFilter')
