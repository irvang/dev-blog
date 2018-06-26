import React, { Component } from 'react'

export class Register extends Component {
	constructor() {
		super();

		this.state = {
			userName: '',
			password: '',
			firstName: '',
			lastName: '',
			// personalWebAddress: '',
			bio: ''
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const newUser = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			bio: this.state.bio
		}

		console.log(newUser)

		fetch('/api/profile', {
			method: 'POST',
			body: JSON.stringify (newUser),
			headers: {
				'content-type': 'application/json'
			}
		})
			.then(response => response.text())
			.then(text => console.log("Response: ", text))
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<h1> Register</h1>
				<p>Ideally, I will have a user and a profile models</p>
				{/* <form action="api/profile" method='post'> */}
				<form onSubmit={this.onSubmit}>

					<input onChange={this.onChange} name="firstName" type="text"
						value={this.state.firstName} placeholder='First Name' />
					<input onChange={this.onChange} name="lastName" type="text"
						value={this.state.lastName} placeholder='Last Name' />
					<textarea onChange={this.onChange} name="bio" id="" cols="30"
						rows="3" value={this.state.bio} placeholder='bio'></textarea>
					<button type='submit'>Submit</button>

					{/* <input onChange={this.onChange} name="webUrl" type="text" value={this.state.webUrl} placeholder='Website address' /> */}
				</form>
			</div>
		)
	}
}
