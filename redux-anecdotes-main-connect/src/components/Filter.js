import { setFilter } from "../reducers/filterReducer"
import { connect } from "react-redux"
const Filter = (props) => {
    const handleChange = (event) => {
        event.preventDefault()
        props.setFilter(event.target.value)
      // input-field value is in variable event.target.value
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        Filter <input name='filter' onChange={handleChange} />
      </div>
    )
  }
 
  export default connect(null,{setFilter})(Filter)