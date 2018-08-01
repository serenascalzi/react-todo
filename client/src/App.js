import React, { Component } from 'react'
import './App.css'
import {addTodo} from './actions/list'
import ToDoList from './ToDoList'
import store from './store'
import {Provider} from 'react-redux'

class App extends Component {
  state = {
  	todo:''
  }

  handleSubmit = (e) => {
  	e.preventDefault()
  	addTodo(this.state.todo)
    this.setState({
      todo:''
    })
  }

  handleChange = (e) => {
  	this.setState({
  		todo: e.target.value
  	})
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>To Do List</h1>
          <form onSubmit={this.handleSubmit}>
          	<input type="text" name="todo" placeholder="What needs to be done?" value={this.state.todo} onChange={this.handleChange} />
          	<button type="submit">+</button>
          </form>
          <ToDoList />
        </div>
      </Provider>
    )
  }
}

export default App
