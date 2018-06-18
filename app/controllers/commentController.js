const express = require('express');

module.exports = function commentController (app) {
	
	//all for a blogpost
	app.get ('/comment/:blogpostId' , (req, res) => {

	});

	//single
	app.get ('/comment/:blogpostId/:commentId' , (req, res) => {

	});

	app.post ('/comment/:blogpostId' , (req, res) => {

	});

	app.put ('/comment/:blogpostId/:commentId' , (req, res) => {

	});

	app.delete ('/comment/:blogpostId/:commentId' , (req, res) => {

	});
}