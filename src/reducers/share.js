import ActionTypes from '../constants/ActionTypes.js';

const initialState = false;

function share(state = initialState, action) {
	var nextState;
	switch(action.type) {
		case ActionTypes.SHOW_SHARE:
			nextState = true;
			break;
		case ActionTypes.HIDE_SHARE:
			nextState = false;
			break;
		default:
			nextState = state;
			break;
	}
	
	return nextState;
}

export default share;