import React, { Component } from 'react';

class Auth extends Component {
	render() {
		const style = {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			minHeight: '87.6vh'
		}

		return (
			<div className="Auth container" style={style}>
				{ this.props.children }
			</div>
		);
	}
}

export default Auth;