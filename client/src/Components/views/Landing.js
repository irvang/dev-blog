import React from 'react';
// import { Link } from 'react-router-dom';

import { Main } from '../layout/Main';

export class Landing extends React.Component {

	constructor() {
		super()
		this.blogPostPath = "/api/blogposts";
		this.commentsPath = '/api/blogposts/1234/comments';

		this.state = {
			newContent: ''
		}
	}

	fetchThings(path) {

		return function () {
			fetch(path).then(res => {
				return res.text();
			}).then(text => {
				this.setState({ newContent: text });
			})
				.catch(err => console.error(err));
		}.bind(this);
	}

	render() {
		return (
			<div>
				<Main title='this is the new text' subtitle='Some subtext'
					newContent={this.state.newContent} >
					<h1>This is a child</h1>
					<p> This is a paragraph </p>
					<p> This is another paragraph</p>
					{/* Could be anothe component */}
				</Main>

				<button onClick={this.fetchThings(this.blogPostPath)}>Fetch things blogpost</button>
				<button onClick={this.fetchThings(this.commentsPath)}>Fetch things comment</button>
			</div>
		)
	}
}