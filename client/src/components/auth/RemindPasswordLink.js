import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';
import './RemindPasswordLink.css';

class RemindPasswordLink extends Component {
	submit() {
		const { formRef } = this.props;
		if (formRef) {
			const formData = new FormData(formRef);
			this.props.remindPassword(formData);
		}
	}

	render() {
		return (
			<div className="float-left">
				<a href="#" className="remind-password-link" onClick={this.submit.bind(this)}>Nie pamiętam hasła</a>
			</div>
		);
	}
}

RemindPasswordLink = connect(null, authActions)(RemindPasswordLink);
export default RemindPasswordLink;