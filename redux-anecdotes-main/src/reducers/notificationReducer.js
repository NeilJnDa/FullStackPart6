import { createSlice } from "@reduxjs/toolkit"
import { createAction } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: "",
  reducers:{
    ShowNotification(state,action){
      console.log('Notification state now: ', state)
      console.log('action', action)
      state = action.payload
      return state
    },
    HideNotification(state,action){
      console.log('Notification state now: ', state)
      console.log('action', action)
      state = ''
      return state
    }
  }
})
export default notificationSlice.reducer
export const showNotification = createAction('notification/ShowNotification')
export const hideNotification = createAction('notification/HideNotification')
