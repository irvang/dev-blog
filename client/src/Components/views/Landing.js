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

			<Main title="Dev Blog">
				<h4> Welcome to Dev-Blog by Irving</h4>

				<p>
					The idea of this project is to create a blog using the MERN stack, and learn from the challenges that such a project entails.
					</p>
				<p>
					In terms of development, the project presents real world challenges like the following:
					</p>

				<ul>
					<li>Separating front and back end functionality.</li>
					<li>Association of different models: blogpost, user, and comments.</li>
					<li>Authentication (not present yet).</li>
				</ul>

				<p>From a personal standpoint, the challenges/achievements of this project are:</p>
				<ul>
					<li>Use of Express Router.</li>
					<li>Using React for the front-end.</li>
					<li>React router.</li>
					<li>Promises used in the back end and the front end (Fetch API).</li>
				</ul>

			</Main>


		)
	}
}