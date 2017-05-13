import { connect } from 'react-redux';
import { toggleVisibility } from '../actions';
import FilterButtonComponent from '../components/FilterButtonComponent.jsx';

const mapStateToProps = (state, ownProps) => {
	return {
		active: state.visibilityFilter === ownProps.filter,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onFilterClick: () => {
			dispatch(toggleVisibility(ownProps.filter));
		}
	};
};

const FilterButtonContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterButtonComponent);

export default FilterButtonContainer;