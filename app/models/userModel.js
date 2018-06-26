const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	userName: String,
	password: String,
	firstName: String,
	lastName: String,
	img: String, //would be a path
	bio: String
	//url, ratings, experience
});

const User = mongoose.model('User', userSchema);

module.exports = User;