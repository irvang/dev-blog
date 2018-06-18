const express = require('express');

module.exports = function (app) {

	//all
	app.get('/user/', (req, res) => {

	});

	//single
	app.get('/user/:id', (req, res) => {

	});

	//name ???
	app.get('/user/:name', (req, res) => {

	});

	//last name ???
	app.get('/user/:lastname', (req, res) => {

	});

	app.post('/user/', (req, res) => {

	});

	app.put('/user/:id', (req, res) => {

	});

	app.delete('/user/:id', (req, res) => {

	});
}