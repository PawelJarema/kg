import React, { Component } from 'react';

class Icon extends Component {
	render() {
		const { large } = this.props,
			  style = {
				fontSize: (large ? 36 : 24),
				marginTop: (large ? -6 : 0)
			  };

		return <i className="material-icons" style={style}>{ this.props.children }</i>
	}
}

export default Icon;