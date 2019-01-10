import React, { Component } from 'react';
import Auth from './Auth';
import Icon from '../icons/Icon';
import RemindPasswordLink from './RemindPasswordLink';
import { valid, invalid } from './Register';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';

class UserInputs extends Component {
	render() {
		return (
			<span>
				<label htmlFor="email">E-mail</label>
				<input name="email" type="email" onInvalid={(e) => invalid(e, 'Wpisz poprawny adres E-mail')} onInput={valid} />
				<label htmlFor="password">Hasło</label>
				<input name="password" type="password"/>
			</span>
		);
	}
}


class Login extends Component {
	submit(e) {
		e.preventDefault();
		const formData = new FormData(this.formRef);
		this.props.login(formData);
	}

	render() {
		return (
			<Auth>
				<h1 className="center">Zaloguj się</h1>
				<form ref={(e) => this.formRef = e} onSubmit={this.submit.bind(this)}>
					<div className="row">
						<div className="column column-50 column-offset-25">
							<fieldset>
								<UserInputs />
								<RemindPasswordLink formRef={this.formRef} />
							</fieldset>
							<div className="float-right">
								<button className="button-outline"><Icon>done</Icon> Zaloguj</button>
							</div>
						</div>
					</div>
				</form>
			</Auth>
		);
	}
}


Login = connect(null, authActions)(Login);
export default Login;