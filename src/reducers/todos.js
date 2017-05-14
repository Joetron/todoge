import ActionTypes from '../constants/ActionTypes.js';
import { readFromSessionStorage, writeToSessionStorage, readPropsFromQuery } from '../utils';


const TODOS = 'TODOS';

/**
 * A function to create a new todo and to document the full data structure
 */
function _todoModel(id, text) {
	return {
		id: id,
		text: text,
		complete: false,
		editing: false
	};
}

var queryProps = readPropsFromQuery([]);
const initialState = queryProps ? queryProps : readFromSessionStorage(sessionStorage, TODOS, []);

function todos(state = initialState, action) {
	var nextState;
	switch(action.type) {
		case ActionTypes.ADD_TODO:
			nextState = [
				...state, new _todoModel(action.payload.id, action.payload.text, false)
			];
			break;
		case ActionTypes.EDIT_TODO:
			nextState = state.map((todo) => {
				if (todo.id === action.payload.id) {
					return Object.assign({}, todo, {
						editing: true
					});	
				}
				return todo;
			});
			break;
		case ActionTypes.CANCEL_EDIT:
			nextState = state.map((todo) => {
				if (todo.id === action.payload.id) {
					return Object.assign({}, todo, {
						editing: false
					});	
				}
				return todo;
			});
			break;
		case ActionTypes.DELETE_TODO:
			nextState = state.filter(todo => {
				return todo.id !== action.payload.id;
			});
			break;
		case ActionTypes.UPDATE_TODO:
			nextState = state.map((todo) => {
				if (todo.id === action.payload.id) {
					return Object.assign({}, todo, {
						text: action.payload.text,
						editing: false
					});	
				}
				return todo;
			});
			break;
		case ActionTypes.TOGGLE_COMPLETED:
			nextState = state.map((todo) => {
				if (todo.id === action.payload.id) {
					return Object.assign({}, todo, {
						complete: !todo.complete
					});	
				}
				return todo;
			});
			break;
		default:
			nextState = state;
			break;
	}
	
	writeToSessionStorage(sessionStorage, TODOS, nextState);
	return nextState;
}

export default todos;