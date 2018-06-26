import React from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-md navbar-light bg-secondary text-white-50" >

					<div className='collapse navbar-collapse'>
						<span className='nav-item'> &lt; NAVBAR &gt; &nbsp;&nbsp;&nbsp;&nbsp;</span>

						<ul className="navbar-nav mr-auto">

							<li className='nav-item'><Link className='nav-link text-light' to="/">Home</Link></li>

							{/* <li className='nav-item'><Link className='nav-link text-light' to="/about">About</Link></li> */}

							<li className='nav-item'><Link className='nav-link text-light' to="/login">Login</Link></li>

							<li className='nav-item'><Link className='nav-link text-light' to="/register">Register</Link></li>

							<li className='nav-item'><Link className='nav-link text-light' to="/showUsers">Test Show Users</Link></li>
						</ul>
					</div>
				</nav>

			</div >
		)
	}
}

