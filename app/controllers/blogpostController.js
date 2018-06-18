const express = require('express');

module.exports = function (app) {
	
	//all
	app.get ('/blogpost' , () => {

	});

	//single
	app.get ('/blogpost/:id' , () => {

	});

	app.post ('/blogpost' , () => {

	});

	app.put ('/blogpost/:id' , () => {

	});

	app.delete ('/blogpost/:id' , () => {

	});
}