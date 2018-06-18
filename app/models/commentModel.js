const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
	blogpostId: String, // maybe objectId
	userId: String,
	//subcomments ???
	content: String,
	datePosted: String, //date, but have to figure that out
	dateModified: String
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;