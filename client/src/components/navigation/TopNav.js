import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './TopNav.css';


class TopNav extends Component {
	render() {
		const nav_items = this.props.navitems;
		
		return (
			<nav className="navigation">
				<section className="container">
					<span className="logo">
						<NavLink to="/"><i className="material-icons">person_pin</i> Koła Gospodyń Wiejskich</NavLink>
					</span>
					<ul className="nav-items">
						{
							nav_items.map((a, i) => (
								<NavLink to={a.path} key={'main_nav_' + i} className={a.className} activeClassName="active">{a.title}</NavLink>
							))
						}
					</ul>
				</section>
				<img className="teraz-polska corner-image"  src="/assets/terazpolska.png" />
			</nav>
		);
	}
}

export default TopNav;