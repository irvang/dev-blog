const mongoose = require('mongoose');

const blogpostSchema = new mongoose.Schema({
	title: String,
	content: String,
	date: String,
	user: String,//or objectId
	edited: Boolean,
	isPublished: Boolean
	// tags: [String]  //objectIds?

});

const Blogpost = mongoose.model('Blogpost', blogpostSchema);

module.exports = Blogpost;
