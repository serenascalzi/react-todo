import axios from 'axios'
import store from '../store'

export function addTodo(todo) {
	axios.post('http://localhost:3001/todos', {
		name:todo,
		completed:false
	}).then(resp => {
		getTodos()
	})
}

export function getTodos() {
	axios.get('http://localhost:3001/todos').then(resp => {
		store.dispatch({
			type:'GET_TODOS',
			payload:resp.data
		})
	})
}

/*export function deleteTodo(todo) {
	axios.delete(`http://localhost:3001/todos/${todo}`).then(resp => {
		getTodos()
	})
}*/
