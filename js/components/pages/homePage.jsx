import React from 'react'

import wrap from '../supercomponents/wrapper.jsx'

class HomePage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
	 	return (
	 		<div className="home-page page">
	 		  <div className="container">
	 		    <h1 className="title">Welcome to HackReactor's TechX Training Page}</h1>
	 		    <h2 className="subtitle">
	 		      Wow!
	 		    </h2>
	 		  </div>
	 		</div>
	 		)
 	}
}

export default wrap(HomePage)


