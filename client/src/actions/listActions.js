import axios from 'axios'
import store from '../store'

export function getTodos() {
	var filter = store.getState().filter
	var fltr = ''

	if (filter === 'all') {
		fltr = ''
	} else if (filter === 'active') {
		fltr = '?status=active'
	} else if (filter === 'completed') {
		fltr = '?status=completed'
	} else {
		fltr = ''
	}

	axios.get('http://localhost:3001/todos' + fltr).then(resp => {
		store.dispatch({
			type:'GET_TODOS',
			payload:resp.data
		})

		axios.get('http://localhost:3001/todos?status=active').then(resp => {
			store.dispatch({
				type:'GET_COUNT',
				payload:resp.data.length
			})
		})
	})
}

export function addTodo(task) {
	axios.post('http://localhost:3001/todos', {
		task:task,
		status:'active'
	}).then(resp => {
		getTodos()
	})
}

export function updateStatus(id, status) {
	axios.patch('http://localhost:3001/todos/' + id, {
		status:status
	}).then(resp => {
		getTodos()
	})
}

export function removeTodo(id) {
	axios.delete('http://localhost:3001/todos/' + id).then(resp => {
		getTodos()
	})
}

export function applyFilter(filter) {
	store.dispatch({
		type:'APPLY_FILTER',
		payload:filter
	})
	getTodos()
}
