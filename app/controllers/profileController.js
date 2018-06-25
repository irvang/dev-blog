const express = require('express');

module.exports = function (app) {

	//Index
	app.get('/profile/', (req, res) => {

	});

	//New
	app.get('/profile/new', (req, res) => {

	});

	//Create
	app.post('/profile/', (req, res) => {

	});

	//Show
	app.get('/profile/:id', (req, res) => {

	});

	//Edit
	app.get('/profile/:id/edit', (req, res) => {

	});

	//Update
	app.put('/profile/:id', (req, res) => {

	});

	//Destroy
	app.delete('/profile/:id', (req, res) => {

	});
}