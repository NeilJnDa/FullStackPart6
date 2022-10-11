import { useDispatch } from 'react-redux'
import { newAction} from '../reducers/anecdoteReducer'
const AnecdoteForm = () => {
    const dispatch = useDispatch()
  
    const createNew = (event) => {
        event.preventDefault()
        console.log(event.target.anecdote.value)
        dispatch(newAction(event.target.anecdote.value))
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