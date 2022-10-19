import { createSlice } from "@reduxjs/toolkit"

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

let timeOutID = 0
export const setNotification = (message, duration = 5) =>dispatch =>{
  dispatch(notificationSlice.actions.ShowNotification(message))
  clearTimeout(timeOutID)
  timeOutID = setTimeout(() => {
    dispatch(notificationSlice.actions.HideNotification(''))
  }, duration * 1000);
}