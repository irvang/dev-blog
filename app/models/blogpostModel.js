const mongoose = require('mongoose');

const blogpostSchema = new mongoose.Schema({
	title: String,
	content: String,
	date: String,
	user: String,//or objectId
	comments: String, //objectId, top level comments
	//subcomments

	edited: Boolean,
	isPublished: Boolean,
	tags: [String]  //objectIds

});

const Blogpost = mongoose.model('Blogpost', blogpostSchema);

module.exports = Blogpost;
