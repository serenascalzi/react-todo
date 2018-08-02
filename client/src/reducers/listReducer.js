const initialState = {
	todos:[],
	filter:'all',
	count:0
}

export default function(state = initialState, action) {
	switch (action.type) {
		case 'GET_TODOS':
			return{...state, todos:action.payload}
		case 'GET_COUNT':
			return{...state, count:action.payload}
		case 'APPLY_FILTER':
			return{...state, filter:action.payload}
		default:
			return state
	}
}
