import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import TodoApp from './components/TodoApp.jsx'
import './index.css'

let store = createStore(todoApp)

render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	document.getElementById('root')
)