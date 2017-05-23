import React from 'react'
import AddTodoContainer from '../containers/AddTodoContainer.js'
import TodosContainer from '../containers/TodosContainer.js'
import Header from './parts/Header.jsx';
import Sidebar from './parts/Sidebar.jsx'
import DogeContainer from '../containers/DogeContainer.js'
import FilterContainer from '../containers/FilterContainer.js'
import ShareTodosContainer from '../containers/ShareTodosContainer.js'

const TodoApp = () => (
	<div className="app" >
		<Sidebar/>
		<div className="middle" >
			<div className="todo-wrapper" >
				<Header>
					<DogeContainer />
				</Header>
				<AddTodoContainer />
				<TodosContainer />
				<FilterContainer />
				<ShareTodosContainer />
			</div>
		</div>
		<Sidebar/>
	</div>
)

export default TodoApp