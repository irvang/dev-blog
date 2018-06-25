const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({

	//subcomments ???
	content: String,
	datePosted: String, //date, but have to figure that out
	dateModified: String,
	blogpostId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Blogpost"
	}, 
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Blogpost"
	}
	//isSubcomment
	//parentCommentId
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;