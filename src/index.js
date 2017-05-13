// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

//ReactDOM.render(
 // <App />,
 // document.getElementById('root')
//);

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import TodoApp from './components/TodoApp.jsx'

let store = createStore(todoApp)

render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	document.getElementById('root')
)