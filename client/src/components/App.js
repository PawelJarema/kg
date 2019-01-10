import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TopNav from './navigation/TopNav';
import EntryPage from './landing/EntryPage';
import Footer from './footer/Footer';
import { RegisterCircle, RegisterUser } from './auth/Register';
import Login from './auth/Login';
import './App.css';

import { connect } from 'react-redux';
import * as messageActions from '../actions/messageActions';

import Icon from './icons/Icon'
import Page404 from './empty/Page404';
import { MessageHelper } from '../helpers/Message';

const nav_items = [
	{ title: 'Zarejestruj koło', path: '/zarejestruj', className: '' },
	{ title: 'Dołącz', path: '/zaloz-konto', className: '' }, // szukaj ?
	{ title: 'Zaloguj się', path: '/konto/zaloguj', className: '' } // pulpit
];

class App extends Component {
	componentDidMount() {
		this.props.fetchMessage()
	}
	
	render() {
		const { message } = this.props;

		if (message && message.error.error) { MessageHelper.error(message.error.text); }
		if (message && message.message.message) { MessageHelper.message(message.message.text); }

		return (
			<div className="App">
				<BrowserRouter>
					<div className="wrapper">
						<TopNav navitems={nav_items}/>
						<Switch>
							<Route exact path="/" component={EntryPage} />
							<Route path="/zaloz-konto" component={RegisterUser} />
							<Route path="/zarejestruj" component={RegisterCircle} />
							<Route path="/konto/zaloguj" component={Login} />

							<Route component={Page404} />
						</Switch>
						<Footer />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

function mapMessageToProps({ message }) {
	return { message };
}

App = connect(mapMessageToProps, messageActions)(App);
export default App;