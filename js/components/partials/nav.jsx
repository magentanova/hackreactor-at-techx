import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = { expanded: false }
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand(e) {
    e.preventDefault();
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    let navbarClass = "navbar-menu";
    let iconClass = "nav-toggle";
    if (this.state.expanded) {
      navbarClass += " is-active";
      iconClass += " active";
    }

    return 	(
      <nav className="has-text-centered navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#home">
            <img src="./public/images/hack-reactor-logo.png" />
          </a>
          <div class="spacer"></div>
          <a href="#" class={iconClass} onClick={this.toggleExpand} aria-hidden="false">Menu</a>
        </div>
        <div className={navbarClass}>
          <div className="navbar-item main-nav__item main-nav__item--no-arrow">
            <Link className="main-nav__item-anchor" to="home">Home</Link>
          </div>
          <div className="navbar-item main-nav__item main-nav__item--no-arrow">
            <Link className="main-nav__item-anchor" to="syllabus">Syllabus</Link>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="main-nav__item-anchor">Resources</a>
            <div className="navbar-dropdown">
              <div className="navbar-item main-nav__submenu-item">
                <Link to="datasets">Datasets</Link>
              </div>
              <div className="navbar-item main-nav__submenu-item">
                <Link to="notebooks">Jupyter Notebooks</Link>
              </div>
              <div className="navbar-item main-nav__submenu-item">
                <Link to="glossary">Glossary</Link>
              </div>
              <div className="navbar-item main-nav__submenu-item">
                <Link to="slides">Slides</Link>
              </div>
            </div>
          </div>
          <div className="navbar-item">
            <a className="main-nav__item-anchor">Follow-up</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav
