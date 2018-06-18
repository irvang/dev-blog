const express = require('express');

module.exports = function (app) {
	
	//all
	app.get ('/blogpost' , (req, res) => {

	});

	//single
	app.get ('/blogpost/:id' , (req, res) => {

	});

	app.post ('/blogpost' , (req, res) => {

	});

	app.put ('/blogpost/:id' , (req, res) => {

	});

	app.delete ('/blogpost/:id' , (req, res) => {

	});
}