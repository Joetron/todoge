import React from 'react'

const FilterButtonComponent = ({ active, children, onFilterClick }) => (
	<button disabled={ active } onClick={ onFilterClick }>
		{ children }
	</button>
)

export default FilterButtonComponent