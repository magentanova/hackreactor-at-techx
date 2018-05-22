import React from 'react'

import wrap from '../supercomponents/wrapper.jsx'


const instructorData = [
	{
		name: 'Justin Richards',
		bio: 'Justin holds an MA in computational linguistics from the Graduate Center at the City University of New York, where he published several papers in natural language processing, the subdomain of machine learning that concerns the production and understanding of human language. He has spent two years teaching full-stack web development at a software development school, and he currently works as a data engineer at Samsung Research America.',
		pic: 'public/images/jr_headshot2.jpg'
	},
	{
		name: 'Curtis Schlak',
		bio: 'Curtis\' graduate work is in information retrieval at the University of Houston for text and computer vision based systems. He has published papers on the application of fuzzy logic reasoning encoded in neural networks as well as papers on the use of Fourier transforms and wavelets for conformal cameras. He has over 20 years in software development and acts as the Lead Enterprise Learning Instructor at Hack Reactor.',
		pic: 'public/images/curtis-headshot.jpeg'
	}
]

class HomePage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
	 	return (
	<div className="page home-page container__content">
		<section className="content-section content-section--hug">
			<header className="content-section__header">
			  <h2 className="content-section__title">
			  	What You'll Learn
			  </h2>
		    </header>
			  <p className="subtitle">
			  	The training will start by covering AI/ML concepts at the 101 level but will quickly move to hands-on exercises that begin with perceptrons, the building blocks of neural networks, progress to neural networks, and eventually cover three advanced forms of neural-network architecture: CNNs, RNNs, and GANs.
			  	<br/><br/>
			  	After finishing the training, you will have a good understanding of ML techniques, where and how to apply them, and how to create a network on your own. Having learned a diversity of network architectures, you'll also know which design is most appropriate for solving a given problem.
			  	</p>
		</section>
		<section className="content-section content-section--hug">
			<header className="content-section__header">
			  <h2 className="content-section__title">
			  	Your Instructors
			  </h2>
		    </header>
			<div className="bios">
				  {instructorData.map(instructor =>
				  	<InstructorBio {...instructor} /> )}
			</div>
		</section>
	</div>
	 )
 	}
}


const InstructorBio = props => (
	<div className="bio card">
	  <div className="card-image">
	    <figure className="image">
	      <img src={props.pic} alt="Placeholder image" />
	    </figure>
	  </div>
	  <div className="card-content">
	    <div className="media">
	      <div className="media-content">
	        <p className="title is-4">{props.name}</p>
{/*	        <p className="subtitle is-6">@johnsmith</p>
*/}	      </div>
	    </div>

	    <div className="content">
	      {props.bio}
	    </div>
	  </div>
	</div>
	)

export default wrap(HomePage)
