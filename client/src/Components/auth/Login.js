import React, { Component } from 'react'

export class Login extends Component {

	constructor() {
		super();

		this.state = {
			username: '',
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
				<h1 className="centerForm"> Login</h1>
				<form onSubmit={this.onSubmit} className="centerForm">

					<input onChange={this.onChange} className=' form-control form-control-sm mb-2' name="username" type="text"
						value={this.state.firstName} placeholder='username' />

					<input onChange={this.onChange} className=' form-control form-control-sm mb-2' name="password" type="text"
						value={this.state.lastName} placeholder='password *NOT SECURE*' />

					<button type='submit' className=' btn btn-primary mb-2'>Submit</button>

					{/* <input onChange={this.onChange} name="webUrl" type="text" value={this.state.webUrl} placeholder='Website address' /> */}
				</form>
			</div>
		)
	}
}
