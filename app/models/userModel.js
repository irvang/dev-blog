const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

	/* uname pass should be a different schema, 
	profile should have the rest */
	username: String,
	password: String,
	firstName: String,
	lastName: String,
	bio: String
	// img: String, //would be a path
	//url, ratings, experience 
});

const User = mongoose.model('User', userSchema);

module.exports = User; 