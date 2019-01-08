import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TopNav from './navigation/TopNav';
import EntryPage from './landing/EntryPage';
import Footer from './footer/Footer';
import Register from './auth/Register';
import './App.css';

import { connect } from 'react-redux';
import * as messageActions from '../actions/messageActions';

import { MessageHelper } from '../helpers/Message';

const nav_items = [
	{ title: 'Zarejestruj koło', path: '/zarejestruj', className: '' },
	{ title: 'Dołącz do koła', path: '/szukaj', className: '' }
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
							<Route path="/zarejestruj" component={Register} />
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