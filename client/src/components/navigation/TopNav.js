import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './TopNav.css';

const nav_items = [
 	{ title: 'Zarejestruj koło', path: '/zaloz-kolo', className: '' },
 	{ title: 'Dołącz do koła', path: '/wyszukaj', className: '' }
 ];

class TopNav extends Component {
	render() {
		return (
			<nav className="navigation">
				<section className="container">
					<span className="logo">
						<i className="material-icons">person_pin</i> Koła Gospodyń Wiejskich
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