import React, { Component } from 'react'
import ToDoItem from './ToDoItem'
import {connect} from 'react-redux'

class ToDoList extends Component {

  render() {
    return (
      <div>
        <ol>
          {this.props.todos.map((todo, i) => (
            <ToDoItem key={'todo' + i} {...todo} />
          ))}
        </ol>
      </div>
    )
  }
}

ToDoList.defaultProps = {
  todos:[]
}

function mapStateToProps(appState) {
  return {todos:appState.todos}
}

export default connect(mapStateToProps)(ToDoList)
