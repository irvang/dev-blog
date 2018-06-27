import React from 'react'

export class Footer extends React.Component {
	render() {
		return (

				<footer>
					<h1 className="invisibleHeader">Footer</h1>
					
					&lt;&lt; FOOTER &gt;&gt; &nbsp;&nbsp;&nbsp;&nbsp;

				{/* ©	copyright	&copy;	&#169; */}
					<p>	Copyright &copy; Irving Angulo</p>
					<p>Contact info: my@email.com</p>

					<ul>
						<li>Terms</li>
						<li>Blog</li>
						<li>About</li>
					</ul>
				</footer>

		)
	}
}
