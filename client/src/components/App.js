import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TopNav from './navigation/TopNav';
import EntryPage from './landing/EntryPage';
import Footer from './footer/Footer';
import './App.css';

const Hello = () => <h1>Hello World!</h1>;

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<div className="wrapper">
						<TopNav />
						<Switch>
							<Route path="/" component={EntryPage} />
						</Switch>
						<Footer />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;