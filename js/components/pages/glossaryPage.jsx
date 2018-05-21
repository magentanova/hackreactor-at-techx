import React from 'react'

import wrap from '../supercomponents/wrapper.jsx'

const glossaryItems = [
	{
		term: 'foo',
		definition: 'bar'
	}
]

const GlossaryPage = props => (
	<div className="page notebooks-page container__content">
		<div className="enterprise__cta-section">
			<section className="content-section content-section--hug">
				<header className="content-section__header">
				  <h2 className="content-section__title">Glossary</h2>
				</header>
			</section>
		</div>
	</div>
	)

export default wrap(GlossaryPage)