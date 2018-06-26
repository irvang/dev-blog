import React, { Component } from 'react'

export class Login extends Component {

	constructor() {
		super();

		this.state = {
			userName: '',
			password: ''
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
		}

		console.log(newUser)
	}

	render() {
		return (
			<div>
				<h1> Login</h1>
				{/* <form action="api/profile" method='post'> */}
				<form onSubmit={this.onSubmit}>

					<input onChange={this.onChange} name="userName" type="text"
						value={this.state.firstName} placeholder='userName' />

					<input onChange={this.onChange} name="password" type="text"
						value={this.state.lastName} placeholder='password' />

					<button type='submit'>Submit</button>

					{/* <input onChange={this.onChange} name="webUrl" type="text" value={this.state.webUrl} placeholder='Website address' /> */}
				</form>
			</div>
		)
	}
}
