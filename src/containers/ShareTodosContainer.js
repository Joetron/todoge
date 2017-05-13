import { connect } from 'react-redux';
import ShareTodosComponent from '../components/ShareTodosComponent.jsx';
import { shareLink, hideLink } from '../actions';
import { createLinkFromTodos } from '../utils';

const mapStateToProps = (state) => {
	return {
		visible: state.todos.length > 0,
		link: createLinkFromTodos(state.todos),
		share: state.share
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onShowLink: () => {
			dispatch(shareLink());
		},
		onHideLink: () => {
			dispatch(hideLink());
		}
	};
};


const ShareTodosContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ShareTodosComponent);

export default ShareTodosContainer;