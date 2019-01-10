import React, { Component } from 'react';

class Page404 extends Component {
	render() {
		return (
			<div className="center fill-height">
				<br /><br />
				<img src="/assets/404.jpg" />
				<br /><br />
				<span>
					<h1>błąd 404</h1>
					<h3>Nie znaleźliśmy tej strony</h3>
				</span>
			</div>
		);
	}
}

export default Page404;