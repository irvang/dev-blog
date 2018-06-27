import React from 'react';
// import { Link } from 'react-router-dom';

import { Main } from '../layout/Main';

export class Landing extends React.Component {

	render() {
		return (

			<Main title="Dev Blog">
				<article>
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
						<li>Accessibility principles</li>
					</ul>

					<p>From a personal standpoint, the challenges/achievements of this project are:</p>
					<ul>
						<li>Use of Express Router.</li>
						<li>Using React for the front-end.</li>
						<li>React router.</li>
						<li>Asynchronous javascript using promises in the front end (Fetch API) and the back end (mongoose).</li>
					</ul>
				</article>


			</Main>


		)
	}
}