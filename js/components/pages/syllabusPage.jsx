import React from 'react'

import wrap from '../supercomponents/wrapper.jsx'

const syllabusData = [
	{
		title: 'Introduction and Tooling',
		description: 'We introduce you to some of the basic concepts and tooling covered in the seminar.',
		subsections: [
			{
				title: 'Intro to Jupyter Notebooks',
				description: 'This online, interactive, content-rich Python environment makes for an effective machine learning study tool.',
				resourceType: 'Tutorial',
				resource: 'https://jupyter-notebook-beginner-guide.readthedocs.io/en/latest/',
				slides: ''
			},
			{
				title: 'Intro to TensorFlow',
				description: 'This open-source machine learning platform is used internally at Google and at large by the ML community.',
				resourceType: 'Tutorial',
				resource: 'https://www.tensorflow.org/get_started/',
				slides: ''
			},
			{
				title: 'Linear Algebra: A Review',
				description: 'An understanding of vectors, and the operations that combine them, is a prerequisite to understanding machine learning.',
				resourceType: 'Tutorial',
				resource: null,
				slides: ''
			}
		]
	},
	{
		title: 'Perceptrons',
		description: 'Perceptrons are the building blocks of a neural network. Surprisingly easy to grasp, they make a great introduction to machine learning.',
		subsections: [
			{
				title: 'Intro to Perceptrons',
				description: 'By working through a commonplace application, we learn about the basic components of a perceptron: the weight vector, the decision rule, and the update rule.',
				resourceType: 'Notebook',
				resource: 'https://colab.research.google.com/drive/1vFYNu1oRnzhutNuW7W-bnj36QcmvcxiA',
				slides: ''
			},			
			{
				title: 'Multiclass Perceptrons',
				description: 'We move beyond binary classification and see how perceptrons can be used to assign a datapoint one of many possible labels.',
				resourceType: 'Notebook',
				resource: null,
				slides: ''
			},			
			{
				title: 'Solving the XOR Problem',
				description: 'We explore a use case that poses a challenge to the basic perceptron. Finding the solution will drive us to connect perceptrons and create something more sophisticated: a neural network.',
				resourceType: 'Notebook',
				resource: null,
				slides: ''
			}
		]
	},
	{
		title: 'Neural Networks',
		description: "Neural networks are the most robust machine-learning technology to date. We explore several different neural network architectures so you'll be ready to apply them to a variety of use cases.",
		subsections: [
			{
				title: 'The Backpropogation Algorithm',
				description: 'In the previous section, we began to wire together perceptrons to create a network that could detect relationships between inputs. In this section, we learn how such a network is trained.',
				resourceType: 'Notebook',
				resource: null,
				slides: ''
			},			
			{
				title: 'Convolutional Neural Networks',
				description: 'This type of network is specialized for performing object recognition in images. By repeating the same feature detectors, with the same weights, at different parts of a layer, Convolutional Neural Nets (CNNs) become robust against object translation. That means that if an object changes location within a pixel map, it will still be recognized.',
				resourceType: 'Notebook',
				resource: null,
				slides: ''
			},
			{
				title: 'Generative Adversarial Networks',
				description: 'Generative Adversarial Networks (GANs) have a fascinating architecture. The design involves two networks, each of which is training to outwit the other. Such a system is honing its skills at both simulating authentic phenomena and detecting inauthentic phenomena.',
				resourceType: 'Notebook',
				resource: 'https://colab.research.google.com/drive/1WxjLANSzZQnzGqdyntYp_kHgnosWG2JN',
				slides: ''
			}
		]
	}
]

const SyllabusPage = props => (
			<div className="page syllabus-page container__content">
				<div className="enterprise__cta-section">
					<section className="content-section content-section--hug">
						<header className="content-section__header">
						  <h1 className="content-section__title">
						  	Syllabus
						  </h1>
						</header>
						{syllabusData.map(item =>
							<SyllabusSection {...item} />
						)}
					</section>
				</div>
			</div>
)


const SyllabusSection = props => (
	<div className="syllabus-section tile is-ancestor">
		<div className="tile is-parent">
		  <article className="tile is-child notification">
		    <div className="content">
		      <p className="title">{props.title}</p>
		      <p className="subtitle">{props.description}</p>
		      <div className="content">
		      </div>
		    </div>
		  </article>
		</div>
		<div className="tile is-vertical is-8">
			{props.subsections.map(item => 
				<SyllabusSubsection {...item} />
			)}
		</div>
	</div>
)

const SyllabusSubsection = props => (
	<div className="syllabus-subsection tile is-parent">
	  <article className="tile is-child notification">
	    <p className="title">{props.title}</p>
	    <p className="subtitle">{props.description}</p>
	    <div className="content">
	    	<a href={props.resource} target="_blank">{props.resourceType}</a>
	    	<a href={props.slides} target="_blank">Slides</a>
	    </div>
	  </article>
	</div>
)

export default wrap(SyllabusPage)


