import React from 'react'
import VisibilityFilters from '../constants/VisibilityFilters.js'
import FilterButtonContainer from '../containers/FilterButtonContainer.js'

const FilterComponent = ({ visible }) => (
	<div className={ "filter-container" +  (visible === true ? "" : " hidden") } >
		<FilterButtonContainer filter={ VisibilityFilters.ALL } >
			All
		</FilterButtonContainer>
		<FilterButtonContainer filter={ VisibilityFilters.COMPLETE } >
			Complete
		</FilterButtonContainer>
		<FilterButtonContainer filter={ VisibilityFilters.INCOMPLETE } >
			Incomplete
		</FilterButtonContainer>
	</div>
)

export default FilterComponent