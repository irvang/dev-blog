import React, { Component } from 'react';

import { Navbar } from './Components/layout/Navbar';
import { Footer } from './Components/layout/Footer';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<h1> My React App </h1>

				<Footer />
			</div>
		);
	}
}

export default App;