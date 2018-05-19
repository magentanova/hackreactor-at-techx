import React from 'react'

import wrap from '../supercomponents/wrapper.jsx'

class HomePage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
	 	return (
	<div className="page home-page container__content">
		<div className="enterprise__cta-section">
			<section className="content-section content-section--hug">
				<header className="content-section__header">
				  <h1 className="content-section__title">
				  	Welcome to HackReactor's TechX Training Page.
				  </h1>
				  <h2 className="content-section__subtitle">
				  	Here you'll find datasets, code tutorials, and other materials related to our Machine Learning seminar.
				  </h2>
				</header>
			</section>
		</div>
	</div>
	 		)
 	}
}

export default wrap(HomePage)


