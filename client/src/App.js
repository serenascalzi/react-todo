import React, { Component } from 'react'
import './App.css'
import {getTodos} from './actions/listActions'
import {Provider} from 'react-redux'
import store from './store'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import ToDoFilter from './ToDoFilter'

class App extends Component {

  componentDidMount() {
    getTodos()
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <ToDoForm />
          <ToDoList />
          <ToDoFilter />
        </div>
      </Provider>
    )
  }
}

export default App
