import VisibilityFilters from '../constants/VisibilityFilters.js';

const mapToVisibilty = (state) => {
	return state.todos.filter(todo =>  {
		switch(state.visibilityFilter) {
			default:
			case VisibilityFilters.ALL:
				return true;
			case VisibilityFilters.COMPLETE:
				return todo.complete === true;
			case VisibilityFilters.INCOMPLETE:
				return todo.complete === false;
		}
	});
}

export { mapToVisibilty };
