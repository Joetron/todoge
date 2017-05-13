import { connect } from 'react-redux';
import { updateTodo, editTodo, cancelUpdate, deleteTodo, toggleComplete } from '../actions';
import TodosComponent from '../components/TodosComponent.jsx';
import VisibilityFilters from '../constants/VisibilityFilters.js';

const mapStateToProps = (state) => {
	return {
		todos: state.todos.filter(todo =>  {
			switch(state.visibilityFilter) {
				default:
				case VisibilityFilters.ALL:
					return true;
				case VisibilityFilters.COMPLETE:
					return todo.complete === true;
				case VisibilityFilters.INCOMPLETE:
					return todo.complete === false;
			}
		})
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