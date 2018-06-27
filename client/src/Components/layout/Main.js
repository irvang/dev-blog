import React from 'react'

export class Main extends React.Component {


	render() {
		return (
			<div>


				<main>
					<h1> {this.props.title}</h1>
					
					{this.props.children}
				</main>

			</div >
		)
	}
}

