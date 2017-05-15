import ActionTypes from '../constants/ActionTypes.js';

function addTodo(id, text) {
	return {
		type: ActionTypes.ADD_TODO,
		payload: {
			id, text
		}
	};
}

function editTodo(id) {
	return {
		type: ActionTypes.EDIT_TODO,
		payload: {
			id
		}
	};
}

function cancelUpdate(id) {
	return {
		type: ActionTypes.CANCEL_EDIT,
		payload: {
			id
		}
	};
}

function updateTodo(id, text) {
	return {
		type: ActionTypes.UPDATE_TODO,
		payload: {
			id, text
		}
	};
}

function deleteTodo(id) {
	return {
		type: ActionTypes.DELETE_TODO,
		payload: {
			id
		}
	};
}

function toggleComplete(id) {
	return {
		type: ActionTypes.TOGGLE_COMPLETED,
		payload: {
			id
		}
	};
}

function toggleVisibility(filter) {
	return {
		type: ActionTypes.TOGGLE_VISIBILITY,
		payload: {
			filter
		}
	};
}

function shareLink() {
	return {
		type: ActionTypes.SHOW_SHARE
	};
}

function hideLink() {
	return {
		type: ActionTypes.HIDE_SHARE
	};
}

export { addTodo, editTodo, cancelUpdate, updateTodo, deleteTodo, toggleComplete, toggleVisibility, shareLink, hideLink };