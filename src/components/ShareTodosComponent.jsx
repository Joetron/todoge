import React from 'react'

const ShareTodosComponent = ({ visible, link, share, onShowLink, onHideLink }) => (
	<div className={ (visible ? 'share-todos' : 'collapse') } >
		<button 
			disabled={ share }
			onClick={ onShowLink }
		>
			Share Todos
		</button>
		<span 
			className={ (share ? 'close-link' : 'collapse') } 
			onClick={ onHideLink }
		/>
		<input 
			className={ (share ? '' : 'collapse') }
			value={ link }
			onFocus={ (e) => e.target.select() }
		/>
	</div>
)

export default ShareTodosComponent