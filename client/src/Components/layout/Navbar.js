import React from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-md navbar-dark bg-dark" >

					<div className='collapse navbar-collapse'>
						&lt; NAVBAR &gt; &nbsp;&nbsp;&nbsp;&nbsp;
						<ul className="navbar-nav mr-auto">
							<li className='nav-item'><Link className='nav-link' to="/">Home</Link></li>
							<li className='nav-item'><Link className='nav-link' to="/about">About</Link></li>
							<li className='nav-item'><Link className='nav-link' to="/login">Login</Link></li>
							<li className='nav-item'><Link className='nav-link' to="/register">Register</Link></li>
						</ul>
					</div>
				</nav>

			</div >
		)
	}
}

