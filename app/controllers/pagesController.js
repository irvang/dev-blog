const express = require('express');
// const app = express();
module.exports = function (app) {

	//landing page
	app.get('/', (req, res) => {
		res.send('You are here, finally!')
	});

	//single
	app.get('/about', (req, res) => {
		res.send('You are in about')
	});
	//search
	app.get('/search', (req, res) => {
		res.send('You are in search')
	});


}