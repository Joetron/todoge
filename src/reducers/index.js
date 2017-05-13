import { combineReducers } from 'redux';
import todos from './todos.js';
import share from './share.js';
import visibilityFilter from './visibilityFilter.js';

const todoApp = combineReducers({ todos, share, visibilityFilter });

export default todoApp;