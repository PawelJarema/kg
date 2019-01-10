import React, { Component } from 'react';
import Auth from './Auth';
import Icon from '../icons/Icon';
import HintInput from '../formParts/HintInput';
import RemindPasswordLink from './RemindPasswordLink';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';

class UserInputs extends Component {
	render() {
		return (
			<span>
				<label htmlFor="email">E-mail</label>
				<input name="email" type="email" onInvalid={(e) => invalid(e, 'Wpisz poprawny adres E-mail')} onInput={valid} required />
				<label htmlFor="password">Hasło</label>
				<input name="password" type="password" required onInvalid={(e) => invalid(e, 'Wpisz hasło')} onInput={valid}/>
				<label htmlFor="password_confirm">Potwierdź hasło</label>
				<input name="password_confirm" type="password" required onInvalid={(e) => invalid(e, 'Potwierdź hasło')} onInput={valid}/>
			</span>
		);
	}
}

class RegisterUser extends Component {
	submit(e) {
		e.preventDefault();
		const formData = new FormData(this.formRef);
		this.props.registerUser(formData);
	}

	render() {
		return (
			<Auth>
				<h1 className="center">Załóż konto</h1>
				<br />
				<form ref={(e) => this.formRef = e} onSubmit={this.submit.bind(this)}>
					<div className="row">
						<div className="column column-50 column-offset-25">
							<fieldset>
								<h3><Icon>how_to_reg</Icon> Dane</h3>
								<UserInputs />
								<RemindPasswordLink formRef={this.formRef} />
								<div className="float-right">
									<input name="rodo" type="checkbox" required onInvalid={(e) => invalid(e, 'Zaznacz zgodę')} onInput={valid} />
									<label htmlFor="rodo" className="label-inline">Zgadzam się na RODO</label>
								</div>
							</fieldset>
							<div className="float-right">
								<button className="button-outline"><Icon>done</Icon> Załóż</button>
							</div>
						</div>
					</div>
				</form>
			</Auth>
		);
	}
}

class RegisterCircle extends Component {
	constructor(props) {
		super(props);
		this.state = { wcode: '' };

		this.submit = this.submit.bind(this);
	}

	submit(e) {
		e.preventDefault();
		const formData = new FormData(this.formRef);
		this.props.registerCircle(formData);
	}

	setWcode(wcode) {
		this.setState({ wcode });
	}

	render() {
		const { wcode } = this.state;

		return (
			<Auth>
				<h1 className="center">Rejestracja koła</h1>
				<br /><br />
				<form ref={(e) => this.formRef = e} onSubmit={this.submit}>
					<div className="row">
						<div className="column">
							<fieldset>
								<h3><Icon>event_seat</Icon> Założyciel</h3>
								<UserInputs />
								<RemindPasswordLink formRef={this.formRef} />
							</fieldset>
						</div>
						<div className="column">
							<fieldset>
								<h3><Icon>location_city</Icon> Lokalizacja</h3>
								<HintInput name="wojewodztwo" label="Województwo" url="/api/wojewodztwa" callback={this.setWcode.bind(this)} required onInvalid={(e) => invalid(e, 'Podaj wojewodztwo')} onInput={valid} />
								<HintInput name="gmina" label="Gmina" url="/api/gminy" params={{ wcode }} required onInvalid={(e) => invalid(e, 'Wybierz gminę')} onInput={valid} />
								<HintInput name="miejscowosc" label="Miejscowość" url="/api/miejscowosci" params={{ wcode }} required onInvalid={(e) => invalid(e, 'Wybierz miejscowość')} onInput={valid} />
								<div className="float-right">
									<input name="rodo" type="checkbox" required onInvalid={(e) => invalid(e, 'Zaznacz zgodę')} onInput={valid} />
									<label htmlFor="rodo" className="label-inline">Zgadzam się na RODO</label>
								</div>
							</fieldset>
						</div>
					</div>

					<div className="float-right">
						<button className="button-outline"><Icon>done</Icon> Zarejestruj</button>
					</div>
				</form>
			</Auth>
		)
	}
}

function invalid(e, message) { e.target.setCustomValidity(message); };
function valid(e) { e.target.setCustomValidity('') };

RegisterUser = connect(null, authActions)(RegisterUser);
RegisterCircle = connect(null, authActions)(RegisterCircle);
export { RegisterUser, RegisterCircle, invalid, valid };