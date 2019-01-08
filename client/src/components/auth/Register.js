import React, { Component } from 'react';
import Icon from '../icons/Icon';
import HintInput from '../formParts/HintInput';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';

class Auth extends Component {
	render() {
		const style = {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			minHeight: '86.5vh'
		}

		return (
			<div className="Auth container" style={style}>
				{ this.props.children }
			</div>
		);
	}
}

class Register extends Component {
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
		const { wcode } = this.state,
			  invalid 	= (e, message) => { e.target.setCustomValidity(message); },
			  valid 	= (e) => { e.target.setCustomValidity('') };

		return (
			<Auth>
				<h1 className="center">Rejestracja koła</h1>
				<br /><br />
				<form ref={(e) => this.formRef = e} onSubmit={this.submit}>
					<div className="row">
						<div className="column">
							<fieldset>
								<h3><Icon>event_seat</Icon> Założyciel</h3>
								<label htmlFor="email">E-mail</label>
								<input name="email" type="email" onInvalid={(e) => invalid(e, 'Wpisz poprawny adres E-mail')} onInput={valid} required />
								<label htmlFor="password">Hasło</label>
								<input name="password" type="password" required onInvalid={(e) => invalid(e, 'Wpisz hasło')} onInput={valid}/>
								<label htmlFor="password_confirm">Potwierdź hasło</label>
								<input name="password_confirm" type="password" required onInvalid={(e) => invalid(e, 'Potwierdź hasło')} onInput={valid}/>
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
Register = connect(null, authActions)(Register);
export default Register;