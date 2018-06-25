import React from 'react'

export class Navbar extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-md navbar-dark bg-dark" >
				
					<div className='collapse navbar-collapse'>
					&lt; NAVBAR &gt; &nbsp;&nbsp;&nbsp;&nbsp;
						<ul className="navbar-nav mr-auto">
							<li className='nav-item'><a className='nav-link' href="">Home</a></li>
							<li className='nav-item'><a className='nav-link' href="">About</a></li>
							<li className='nav-item'><a className='nav-link' href="">Login/Register</a></li>
						</ul>
					</div>
				</nav>

			</div >
		)
	}
}

