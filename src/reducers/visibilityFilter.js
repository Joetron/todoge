import ActionTypes from '../constants/ActionTypes.js';
import VisibilityFilters from '../constants/VisibilityFilters.js';
import { readFromSessionStorage, writeToSessionStorage } from '../utils';

const VISIBILITY_FILTER = 'VISIBILITY_FILTER';

const initialState = readFromSessionStorage(VISIBILITY_FILTER, VisibilityFilters.ALL);

function visibilityFilter(state = initialState, action) {
	var nextState;
	switch(action.type) {
		case ActionTypes.TOGGLE_VISIBILITY:
			nextState = action.payload.filter;
			break;
		default:
			nextState = state;
			break;
	}
	
	writeToSessionStorage(VISIBILITY_FILTER, nextState);
	return nextState;
}

export default visibilityFilter;