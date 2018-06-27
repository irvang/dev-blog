import React, { Component } from 'react'

class ShowUsers extends Component {

	constructor() {
		super();
		this.getPath = 'api/profile';
		this.state = {
			users: ''
		}

		this.elementsTest = [
			<h2 key="a"> Element 1</h2>,
			<h2 key="b"> Element 2 </h2>,
			<h2 key="c"> Element 3</h2>,
			<h2 key="d"> Element4 </h2>];
	}
	componentDidMount() {
		setTimeout(this.getUsers(), 50); 
	}

	getUsers() {

		fetch(this.getPath)
			.then(response => {
				return response.text();
			}).then(text => {
				text = JSON.parse(text);//convert to object array
				let mapedUsers = text.map((user, i) => {
					return (<p key={i}>
						<strong>Name:</strong> {user.firstName}   &nbsp;
						<strong>Last name: </strong>{user.lastName}&nbsp;
						<strong>username: </strong>{user.username}&nbsp;
						<strong>bio:</strong> {user.bio}&nbsp;
					</p>)
				});
				this.setState({ users: mapedUsers });

				// this.setState({ users: text });

			}).catch(err => console.error(err));
	}

	render() {
		return (
			<div>
				A div
				{this.state.users}
				{this.elementsTest}
			</div>
		)
	}
}

export default ShowUsers;
