import React, { Component } from 'react';
import { Business } from '../../helpers/Business.js';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<footer>
				<section className="container">
					{ Business.copyright }
				</section>
			</footer>
		)
	}
}

export default Footer;
