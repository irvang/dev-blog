import React from 'react'

export class Main extends React.Component {


	render() {
		return (
			<div>
				<h1> {this.props.title}</h1>

				<main>
					{this.props.children}
				</main>

			</div >
		)
	}
}

