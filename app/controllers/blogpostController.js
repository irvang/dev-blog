const express = require('express');

module.exports = function (app) {

	//Index - all
	app.get('/blogposts', (req, res) => {

	});

	//New - form
	app.get('/blogposts/new', (req, res) => {

	});

	//Show - single
	app.get('/blogposts/:id', (req, res) => {

	});

	//Edit - form
	app.get('/blogposts/:id/edit', (req, res) => {

	});

	//Create
	app.post('/blogposts', (req, res) => {

	});

	//Update
	app.put('/blogposts/:id', (req, res) => {

	});

	//Destroy
	app.delete('/blogposts/:id', (req, res) => {

	});
}

/* https://codepen.io/urketadic/pen/oZRdRN  */