import React, { Component } from 'react'
import {getTodos, deleteTodo} from './actions/list'
import {connect} from 'react-redux'

class ToDoList extends Component {
  componentDidMount() {
    getTodos()
  }

  /*handleSubmit = (e) => {
    e.preventDefault()
    deleteTodo(this.props.todos.id)
  }
  <button type="submit" onSubmit={this.handleSubmit}>Delete</button>*/

  render() {
    return (
      <div>
        <ol>
          {this.props.todos.map((todo, i) => (
            <li key={'todo' + i}><input type="checkbox" /> {todo.name}</li>
          ))}
        </ol>
      </div>
    )
  }
}

ToDoList.defaultProps = {
  todos:[]
}

function mapStateToProps(state) {
  return {todos:state.todos}
}

export default connect(mapStateToProps)(ToDoList)
