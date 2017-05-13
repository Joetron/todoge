import React from 'react'

const EditTodo = ({ todo, onUpdateTodo, onCancelUpdate }) => {
	let input
	return (
		<div className="edit-todo" >
			<form 
				onSubmit={ e => {
				e.preventDefault()
				if (!input.value.trim()) {
					return
				}
				onUpdateTodo(todo.id, input.value)
				input.value = ''
			} }>
				<input 
					type="text" 
					ref={node => { input = node }} 
					defaultValue={ todo.text }
					autoFocus="true"
					onBlur={ () => onCancelUpdate(todo.id) }
				/>
			</form>
		</div>
)};

export default EditTodo