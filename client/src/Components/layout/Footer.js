import React from 'react'

export class Footer extends React.Component {
	render() {
		return (
			<div>
				<footer>
					&lt; FOOTER &gt; &nbsp;&nbsp;&nbsp;&nbsp;

				{/* ©	copyright	&copy;	&#169; */}
					<p>	Copyright &copy; Irving Angulo</p>
					<p>Contact info: my@email.com</p>

					<ul>
						<li>Terms</li>
						<li>Blog</li>
						<li>About</li>
					</ul>
				</footer>
			</div>
		)
	}
}
