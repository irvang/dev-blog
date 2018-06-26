import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Navbar } from './Components/layout/Navbar';
import { Footer } from './Components/layout/Footer';
import { Landing } from './Components/views/Landing';
import { Register } from './Components/auth/Register';
import { Login } from './Components/auth/Login';

import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar />

					{/* exact avoids multiple matching of the route */}
					<Route exact path='/' component={Landing} />

					<Route exact path="/register" component={Register} />

					<Route exact path="/login" component={Login} />

					<Footer />
				</div>
			</Router >
		);
	}
}

export default App;