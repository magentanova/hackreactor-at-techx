import React from 'react'
import {Link} from 'react-router-dom'
import {handleLogout} from '../../utils.js'

const Nav = props =>
	(
		<nav className="has-text-centered navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href="#home">
					<img src="./public/images/hack-reactor-logo.png" />
				</a>
			</div>
			<div className="navbar-menu is-active">
				<div className="navbar-item">
					<Link to="home" className="main-nav__item-anchor">Home</Link>
				</div>
				<div className="navbar-item has-dropdown is-hoverable">
					<a className="main-nav__item-anchor">Resources</a>
					<div className="navbar-dropdown">
						<div className="navbar-item">
							<Link to="datasets" className="main-nav__item-anchor">Datasets</Link>
						</div>
						<div className="navbar-item">
							<Link to="notebooks" className="main-nav__item-anchor">Jupyter Notebooks</Link>
						</div>
						<div className="navbar-item">
							<Link to="slides" className="main-nav__item-anchor">Slides</Link>
						</div>
					</div>
				</div>
				<div className="navbar-item">
					<a className="main-nav__item-anchor">Syllabus</a>
				</div>
				<div className="navbar-item">
					<a className="main-nav__item-anchor">Follow-up</a>
				</div>
			</div>
		</nav>

	)

export default Nav
