import React from 'react'

const loadify = function(component) {
	return props => 
		<div className="load-wrapper">
			<img className="loading-gif" style={{display: props.loaded ? 'none' : 'block'}} src="/asset/images/loader.gif" />
			<div style={{display: props.loaded ? 'block' : 'none'}} >
				{React.createElement(component, props)}
			</div>
		</div>
}

export default loadify