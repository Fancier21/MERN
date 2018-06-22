
export default (state = [], action) => {
	switch(action.type) {
		case 'POSTS_LIST':
			return action.payload
		case 'ADD_POST':
			return [
				...state,
				action.payload
			]
		case 'DELETE_POST':
			return state.filter(post => post._id !== action.payload)
		// case 'UPDATE_POST':
		// 	return state
		default:
			return state
	}
}