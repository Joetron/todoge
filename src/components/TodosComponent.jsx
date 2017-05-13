import React from 'react'
import Todo from './Todo.jsx'
import EditTodo from './EditTodo.jsx'

// TODO: create an individual TODO container for some of these (and EditTodo)
const TodosComponent = ({ todos, onUpdateTodo, onCancelUpdate, onEditTodo, onDeleteTodo, onToggleComplete }) => (
	<div className="todos" >
		{ todos.map(todo => {
		if (todo.editing === true) {
			return (
				<EditTodo 
					todo={ todo } 
					onUpdateTodo={ onUpdateTodo } 
					onCancelUpdate={ onCancelUpdate }
				/>
			)
		}
		
		return (
			<Todo 
				todo={ todo } 
				onEditTodo={ onEditTodo } 
				onDeleteTodo={ onDeleteTodo } 
				onToggleComplete={ onToggleComplete }
			/>
		)
		}) }
	</div>
);

export default TodosComponent