import React, { Component } from 'react'

class ShowUsers extends Component {

	constructor() {
		super();
		this.getPath = 'api/profile';
		this.state = {
			users: ''
		}
	}
	componentDidMount() {
		this.getUsers();
	}

	getUsers() {
		fetch(this.getPath)
			.then(response => {
				return response.text();
			}).then(text => {
				this.setState({ users: text });
			}).catch(err => console.error(err));
	}

	render() {
		return (
			<div>
				A div
				<p>{this.state.users}</p>
			</div>
		)
	}
}

export default ShowUsers;
