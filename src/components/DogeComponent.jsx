import React from 'react';

const DogeComponent = ( { todoges } ) => (
	<div className="doge-image" >
		<div className="doge-row-top" >
			<div className="doge-row-top-left" >
				<span className="doge-row-top-text doge-text-one">{ todoges[0] }</span>
				<span className="doge-row-top-text doge-text-two">{ todoges[1] }</span>
			</div>
			<div className="doge-row-top-right">
				<div className="doge-row-top-right-left">
					<span className="doge-row-bottom-text doge-text-five">{ todoges[4] }</span>
				</div>
				<div className="doge-row-top-right-right">
					<span className="doge-row-bottom-text doge-text-six">{ todoges[5] }</span>
				</div>
			</div>
		</div>
		<div className="doge-row-bottom" >
			<span className="doge-row-bottom-text doge-text-three">{ todoges[2] }</span>
			<span className="doge-row-bottom-text doge-text-four">{ todoges[3] }</span>
		</div>
	</div>
);

export default DogeComponent;