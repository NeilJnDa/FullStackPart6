import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote} from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'
const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()
  
  
    const vote = (anecdote) => {
        dispatch(showNotification(`You voted '${anecdote.content}'.`))
        setTimeout(() => {
            dispatch(hideNotification())
        }, 5000);
        dispatch(voteAnecdote(anecdote.id))
    }
    return (
    <div>
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
            </div>
            </div>
        )}      
    </div>
    )
  }
  
  export default AnecdoteList