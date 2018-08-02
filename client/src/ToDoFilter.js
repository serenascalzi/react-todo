import React, { Component } from 'react'
import {applyFilter} from './actions/listActions'
import {connect} from 'react-redux'

class ToDoFilter extends Component {

  getAll = (e) => {
    applyFilter('all')
  }

  getActive = (e) => {
    applyFilter('active')
  }

  getCompleted = (e) => {
    applyFilter('completed')
  }
  
  render() {
    return (
      <div>
        <div className="statusBar">
          <div>
            <p>Items Left: {this.props.count}</p>
          </div>
          <div className="statusButtons">
            <button onClick={this.getAll}>All</button>
            <button onClick={this.getActive}>Active</button>
            <button onClick={this.getCompleted}>Completed</button>
          </div>
        </div>
      </div>
    )
  }
}

ToDoFilter.defaultProps = {
  count:0
}

function mapStateToProps(appState) {
  return {count:appState.count}
}

export default connect(mapStateToProps)(ToDoFilter)
