const express = require('express');

module.exports = function (app) {

	//all
	app.get('/user/', () => {

	});

	//single
	app.get('/user/:id', () => {

	});

	//name ???
	app.get('/user/:name', () => {

	});

	//last name ???
	app.get('/user/:lastname', () => {

	});

	app.post('/user/', () => {

	});

	app.put('/user/:id', () => {

	});

	app.delete('/user/:id', () => {

	});
}