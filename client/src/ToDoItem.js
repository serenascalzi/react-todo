import React, { Component } from 'react'
import {updateStatus, removeTodo} from './actions/listActions'

class ToDoItem extends Component {
  
  update = (e) => {
    if (this.props.status === 'active') {
      updateStatus(this.props.id, 'completed')
    } else {
      updateStatus(this.props.id, 'active')
    }
  }

  remove = (e) => {
    removeTodo(this.props.id)
  }
  
  render() {
    return (
      <li>
        <button onClick={this.update}><i className="fa fa-check"></i></button>
        {this.props.task} <span className="taskStatus">{this.props.status}</span>
        <button onClick={this.remove}><i className="fa fa-times"></i></button> 
      </li>
    )
  }
}

export default ToDoItem
