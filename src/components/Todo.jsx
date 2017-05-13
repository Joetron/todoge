import React from 'react'

const Todo = ({ todo, onEditTodo, onDeleteTodo, onToggleComplete }) => (
	<div className="todo" >
		<input 
			className="todo-input"
			type="checkbox"
			checked={ todo.complete } 
			onChange={ () => onToggleComplete(todo.id) }
		/>
		<div className={ 'todo-text' + (todo.complete ? ' todo-completed' : '') } >
			{ todo.text }
		</div>
		<span className="edit" onClick={ () => onEditTodo(todo.id) } />
		<span className="remove" onClick={ () => onDeleteTodo(todo.id) } />
	</div>
)

export default Todo