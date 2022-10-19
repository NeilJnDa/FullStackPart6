import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'



const asObject = (anecdoteContent) => {
  return {
    content: anecdoteContent,
    votes: 0
  }
}
const getAll = async () =>{
    const response = await axios.get(baseUrl)
    return response.data
}
const createNew = async (content)=>{
    const response = await axios.post(baseUrl,asObject(content))
    return response.data
}
const vote = async (id)=>{
    const getResponse = await axios.get(`${baseUrl}/${id}`)
    getResponse.data.votes += 1
    const response = await axios.put(`${baseUrl}/${id}`, getResponse.data)
    return response.data
}
export default {getAll, createNew, vote}