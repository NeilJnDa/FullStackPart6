import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

//******************** 
// Local database for testing
// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]
//const initialState = anecdotesAtStart.map(asObject)
//******************** 

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState : [],
  reducers :{
    voteAnecdote(state, action){
      console.log(action)
      let anecdoteToChange = state.find(a => a.id === action.payload.id)
      anecdoteToChange = action.payload
      return state.map(a=>a.id ===action.payload.id? anecdoteToChange : a )
    },
    newAnecdote(state, action){
      state.push(action.payload)
    },
    setAnecdotes(state, action){
      return action.payload
    }
  } 
})
export default anecdoteSlice.reducer

export const initializeAnecdotes = () => async dispatch =>{
  const anecdotes = await anecdoteService.getAll()
  dispatch(anecdoteSlice.actions.setAnecdotes(anecdotes))
}
export const createNewAnecdote = (content) => async dispatch =>{
  const anecdotes = await anecdoteService.createNew(content)
  dispatch(anecdoteSlice.actions.newAnecdote(anecdotes))
}
export const voteAnecdote = (id) => async dispatch =>{
  const anecdotes = await anecdoteService.vote(id)
  dispatch(anecdoteSlice.actions.voteAnecdote(anecdotes))
}