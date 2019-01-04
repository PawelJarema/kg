import React, { Component } from 'react';
import './HeroImage.css';

class HeroImage extends Component {
	render() {
		return (
			<div className="hero-image-wrapper">
				<div className="wrapper">
					<img src="/assets/circle_05.jpg" />
					<img src="/assets/circle_03.jpg" />
					<img src="/assets/circle_02.jpg" />
					<img src="/assets/circle_01.jpg" />
					<img src="/assets/circle_04.jpg" />
					<img src="/assets/circle_06.jpg" />
				</div>
			</div>
		)
	}
}

export default HeroImage;