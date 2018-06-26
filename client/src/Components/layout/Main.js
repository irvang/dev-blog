import React from 'react'

export class Main extends React.Component {


	render() {
		return (
			<div>
				<h1> {this.props.title}</h1>


				<main>
					<h4> {this.props.subtitle}</h4>
					<p>New content: <strong>{this.props.newContent} </strong></p>
					
					 {this.props.children} 

					<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, maiores molestias, illum quasi facilis quo nam, atque voluptatibus nihil necessitatibus provident quia nisi sed ipsa voluptas unde ipsam at amet!  </p>
				</main>

			</div >
		)
	}
}

