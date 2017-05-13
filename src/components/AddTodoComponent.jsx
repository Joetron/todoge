import React from 'react'

const AddTodoComponent = ({ onAddTodo }) => {
	let input;
	return (
		<div className="add-todo" >
			<form 
				onSubmit={ e => {
				e.preventDefault()
				if (!input.value.trim()) {
					return
				}
				onAddTodo(input.value)
				input.value = ''
			} }>
				<input 	
					placeholder="Enter your next todo..."
					autoFocus="true"
					ref={ node => {
						input = node
					} }
				/>
			</form>
		</div>
	);
}


export default AddTodoComponent