const express = require('express');


//needs more planning
module.exports = function commentsController(app) {

	//Index - all
	app.get('/blogposts/:blogpostId/comments', (req, res) => {

	});

	//New - form
	app.get('/blogposts/:blogpostId/comments/new', (req, res) => {

	});

	//Show - single
	app.get('/blogposts/:blogpostId/comments/:id', (req, res) => {

	});

	//Edit - form
	app.get('/blogposts/:blogpostId/comments/:id/edit', (req, res) => {

	});

	//Create
	app.post('/blogposts/:blogpostId/comments', (req, res) => {

	});

	//Update
	app.put('/blogposts/:blogpostId/comments/:id', (req, res) => {

	});

	//Destroy
	app.delete('/blogposts/:blogpostId/comments/:id', (req, res) => {

	});
}