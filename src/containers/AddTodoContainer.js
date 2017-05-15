import { connect } from 'react-redux';
import { addTodo } from '../actions';
import AddTodoComponent from '../components/AddTodoComponent.jsx';
import uuidV1 from 'uuid/v1';

const mapStateToProps = () => {
	return {};	
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddTodo: (text) => {
			dispatch(addTodo(uuidV1(), text));
		}
	};
};

const AddTodoContainer = connect(
	mapStateToProps, 
	mapDispatchToProps
)(AddTodoComponent);

export default AddTodoContainer;