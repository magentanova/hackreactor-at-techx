import React from 'react'

import Nav from '../partials/nav.jsx'
import Banner from '../partials/banner.jsx'

const wrap = (component) => props => <Wrapper page={component} {...props} />

// Observer should be a component that subscribes to store and updates state. there should also be a wrapper function that will wrap any other component in an observer and pass the observer's state down to that component.
class Wrapper extends React.Component {
	constructor(props) {
		super(props)
		this.state = store.getState()
	}

	componentWillMount() {
		this.unsubscribe = store.subscribe(() => {
			this.setState(store.getState())
		})
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	 render() {
	 	return (
	 		<div>
	 			<Nav history={this.props.history} />
	 			<Banner />
	 			<div className='page-content tint--gray'>
	 				<div className='container'>
	 					{React.createElement(this.props.page, {...this.state, ...this.props})}
	 				</div>
	 			</div>
	 		</div>
	 		)

 	}
}


export default wrap