import { useDispatch } from 'react-redux'
import {createNewAnecdote} from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
  
    const createNew = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        dispatch(createNewAnecdote(content))
        dispatch(setNotification(`You created '${content}'`, 5))
        console.log('create new ', content)
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