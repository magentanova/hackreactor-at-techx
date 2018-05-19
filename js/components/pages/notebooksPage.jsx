import React from 'react'

import wrap from '../supercomponents/wrapper.jsx'

const notebookItems = [
	{
		title: 'Perceptrons',
		description: 'We work through the AND, OR, and NOT cases with perceptrons.',
		url: 'https://colab.research.google.com/drive/1vFYNu1oRnzhutNuW7W-bnj36QcmvcxiA'
	}, 
	{
		title: 'Speech Tagging',
		description: 'We use perceptrons in a common real-life application: Tagging parts of speech.',
		url: 'https://colab.research.google.com/drive/1KoKs4oMlFKsI1zGeEO5Yy1JtlzExWROh'
	},
	{
		title: 'Multilayer Perceptrons',
		description: 'Connect perceptrons to each other in layers, and you have a neural network.',
		url: 'https://colab.research.google.com/drive/1Gr7SdjA9OOA9_L3UutIQyvPsRPRYfXLn'
	}, 
	{
		title: 'Symbol Classification',
		description: 'The first step toward computer vision, a key area of study in artificial intelligence.',
		url: 'https://colab.research.google.com/drive/1fv-G1_vcolXgDcLL34OY5mYLaWayr351'
	},
	{
		title: 'Generative Adversarial Networks',
		description: 'Generative Adversarial Networks (GANs) are an effective way to train computers to both create and detect authentic, human-like output.',
		url: 'https://colab.research.google.com/drive/1WxjLANSzZQnzGqdyntYp_kHgnosWG2JN'
	}
]

const NotebooksPage = props => (
	<div className="page notebooks-page container__content">
		<div className="enterprise__cta-section">
			<section className="content-section content-section--hug">
				<header className="content-section__header">
				  <h2 className="content-section__subtitle">Work during and after the course with these interactive tutorials on neural networks.</h2>
				</header>
				<section className="corporate-solutions-wrapper corporate-solutions-wrapper--full corporate-solutions--simple-list">
					<ul className="corporate-solutions__list">
					{notebookItems.map(item => 
						<NotebookLink 
							url={item.url}
							description={item.description}
							title={item.title} />
							)}
					</ul>
				</section>
			</section>
		</div>
	</div>
	)

const NotebookLink = props => (
	<li className="corporate-solutions__list-item">
		<a target="_blank" href={props.url} >
		  <article className="corporate-solutions">
		    <header className="corporate-solutions__header">
		      <span className="corporate-solutions__icon"><img src="https://static1.squarespace.com/static/ta/522a22cbe4b04681b0bff826/3140/assets/images/icons/line-chart--white.png" alt="Image of a line chart icon representation" /></span>
		      <h2 className="corporate-solutions__title">{props.title}</h2>
		      <p className="corporate-solutions__description hug">{props.description}</p>
		    </header>
		  </article> 
		</a>
	</li> 
	)

export default wrap(NotebooksPage)