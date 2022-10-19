import { voteAnecdote} from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux' 

const AnecdoteList = (props) => { 
    const vote = (anecdote) => {
        props.setNotification(`You voted '${anecdote.content}'.`, 5)
        props.voteAnecdote(anecdote.id)
    }
    return (
    <div>
        {props.anecdotes.map(anecdote =>
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
const mapStateToProps = (state)=>{
    if(state.filter === '')
        return {
            anecdotes: state.anecdotes
        }
    else{

        return{
            anecdotes: state.anecdotes.filter(x =>  x.content.toLowerCase().includes(state.filter))
        }
    }

}
const mapDispatchToProps = {
    setNotification,
    voteAnecdote
}
export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)