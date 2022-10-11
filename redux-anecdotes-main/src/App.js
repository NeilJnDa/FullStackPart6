import { useSelector, useDispatch } from 'react-redux'
import { voteAction, newAction} from './reducers/anecdoteReducer'
const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAction(id))
    console.log('vote ', id)
  }
  const createNew = (event) => {
    event.preventDefault()
    console.log(event.target.anecdote.value)
    dispatch(newAction(event.target.anecdote.value))
    console.log('create new ', event.target.anecdote.value)
  }
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>Create new</h2>
      <form onSubmit={createNew}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App