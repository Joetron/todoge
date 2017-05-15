import { addTodo, editTodo, cancelUpdate, updateTodo, deleteTodo, toggleComplete, toggleVisibility, shareLink, hideLink } from './index';
import VisibilityFilters from '../constants/VisibilityFilters';
import ActionTypes from '../constants/ActionTypes';

it('emits an add action', () => {
	let action = {
		type: ActionTypes.ADD_TODO,
		payload: {
			id: 1, 
			text: 'So todo'
		}
	};

	expect(addTodo(1, 'So todo')).toEqual(action);
});

it('emits an edits action', () => {
	let action = {
		type: ActionTypes.EDIT_TODO,
		payload: {
			id: 1
		}
	};

	expect(editTodo(1)).toEqual(action);
});

it('emits a cancel update action', () => {
	let action = {
		type: ActionTypes.CANCEL_EDIT,
		payload: {
			id: 1
		}
	};

	expect(cancelUpdate(1)).toEqual(action);
});

it('emits an update todo action', () => {
	let action = {
		type: ActionTypes.UPDATE_TODO,
		payload: {
			id: 1, 
			text: 'Very edit'
		}
	};

	expect(updateTodo(1, 'Very edit')).toEqual(action);
});

it('emits a delete todo action', () => {
	let action = {
		type: ActionTypes.DELETE_TODO,
		payload: {
			id: 1
		}
	};

	expect(deleteTodo(1)).toEqual(action);
});

it('emits a toggle complete action', () => {
	let action = {
		type: ActionTypes.TOGGLE_COMPLETED,
		payload: {
			id: 1
		}
	};

	expect(toggleComplete(1)).toEqual(action);
});

it('emits a toggle visibility action', () => {
	let action = {
		type: ActionTypes.TOGGLE_VISIBILITY,
		payload: {
			filter: VisibilityFilters.COMPLETE
		}
	};

	expect(toggleVisibility(VisibilityFilters.COMPLETE)).toEqual(action);
});

it('emits a show share action', () => {
	let action = {
		type: ActionTypes.SHOW_SHARE
	};

	expect(shareLink()).toEqual(action);
});

it('emits a hide share action', () => {
	let action = {
		type: ActionTypes.HIDE_SHARE
	};

	expect(hideLink()).toEqual(action);
});


