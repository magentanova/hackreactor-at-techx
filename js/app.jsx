import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,Route,Switch} from 'react-router-dom'	

import HomePage from './components/pages/homePage.jsx'
import NotebooksPage from './components/pages/notebooksPage.jsx'
import SyllabusPage from './components/pages/syllabusPage.jsx'
import GlossaryPage from './components/pages/glossaryPage.jsx'

Object.prototype.keys = function() {
	return Object.keys(this)
}

Object.prototype.values = function() {
	return Object.keys(this).map(key => this[key])
} 

ReactDOM.render((
	<HashRouter>
		<Switch>
			<Route exact path='/' component={HomePage}/>
			<Route path='/home' component={HomePage}/>
			<Route path='/notebooks' component={NotebooksPage}/>
			<Route path='/syllabus' component={SyllabusPage}/>
			<Route path='/glossary' component={GlossaryPage}/>
			<Route component={HomePage} />
		</Switch>
	</HashRouter>
	), document.querySelector('#app-container'))

