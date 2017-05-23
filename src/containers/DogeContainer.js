import { connect } from 'react-redux';
import DogeComponent from '../components/DogeComponent.jsx';
import { mapToVisibilty } from '../utils/TodoFilters.js';

// export for testing
export const mapStateToProps = (state) => {
	var todoges,
		todos = mapToVisibilty(state);

	if ( todos.length > 6 ) {
		todoges = todos.slice(todos.length - 6, todos.length).map( (todo) => todo.text );
	} else {
		todoges = todos.slice().map( (todo) => todo.text );
		while (todoges.length < 6) {
			todoges.push('');
		}
	}

	return { todoges };
};

const DogeContainer = connect(
	mapStateToProps
)(DogeComponent);

export default DogeContainer;