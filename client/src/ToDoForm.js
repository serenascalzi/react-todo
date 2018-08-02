import React, { Component } from 'react'
import {addTodo} from './actions/listActions'

class ToDoForm extends Component {
  
  state = {
  	task:''
  }

  handleSubmit = (e) => {
  	e.preventDefault()
  	addTodo(this.state.task)
    this.setState({
      task: ''
    })
  }

  handleChange = (e) => {
  	this.setState({
  		task: e.target.value
  	})
  }

  render() {
    return (
      <div>
        <h1>&mdash; To Do List &mdash;</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="task" placeholder="What needs to be done?" value={this.state.task} onChange={this.handleChange} />
            <button type="submit"><i className="fa fa-plus"></i></button>
          </form>
      </div>
    )
  }
}

export default ToDoForm
