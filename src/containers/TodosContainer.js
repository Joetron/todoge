import { connect } from 'react-redux';
import { updateTodo, editTodo, cancelUpdate, deleteTodo, toggleComplete } from '../actions';
import TodosComponent from '../components/TodosComponent.jsx';
import { mapToVisibilty } from '../utils/TodoFilters.js';

const mapStateToProps = (state) => {
	return {
		todos: mapToVisibilty(state)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUpdateTodo: (id, text) => {
			dispatch(updateTodo(id, text));
		},
		onCancelUpdate: (id) => {
			dispatch(cancelUpdate(id));
		},
		onEditTodo: (id) => {
			dispatch(editTodo(id));
		},
		onDeleteTodo: (id) => {
			dispatch(deleteTodo(id));
		},
		onToggleComplete: (id) => {
			dispatch(toggleComplete(id));
		}
	};
};

const TodosContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodosComponent);

export default TodosContainer;