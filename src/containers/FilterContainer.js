import { connect } from 'react-redux';
import FilterComponent from '../components/FilterComponent.jsx';

const mapStateToProps = (state) => {
	return {
		visible: state.todos.length > 0		
	};
};

const mapDispatchToProps = () => {
	return {};
};

const FilterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterComponent);

export default FilterContainer;







