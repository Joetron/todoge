import { connect } from 'react-redux';
import { addTodo } from '../actions';
import AddTodoComponent from '../components/AddTodoComponent.jsx';

const mapStateToProps = () => {
	return {};	
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddTodo: (text) => {
			dispatch(addTodo(text));
		}
	};
};

const AddTodoContainer = connect(
	mapStateToProps, 
	mapDispatchToProps
)(AddTodoComponent);

export default AddTodoContainer;