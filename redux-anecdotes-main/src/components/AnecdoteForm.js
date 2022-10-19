import { useDispatch } from 'react-redux'
import {newAnecdote} from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
  
    const createNew = (event) => {
        event.preventDefault()
        console.log(event.target.anecdote.value)
        dispatch(newAnecdote(event.target.anecdote.value))
        dispatch(showNotification(`You created '${event.target.anecdote.value}'`))
        setTimeout(() => {
            dispatch(hideNotification())
        }, 5000);
        console.log('create new ', event.target.anecdote.value)
    }
    return (
    <div>
        <h2>Create new</h2>
        <form onSubmit={createNew}>
            <div><input name='anecdote'/></div>
            <button type='submit'>create</button>
        </form>
    </div>
    )
  }
  
  export default AnecdoteForm