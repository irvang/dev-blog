const express = require('express');

module.exports = function (app) {
	
	//all
	app.get ('/comment/:blogpostId' , () => {

	});

	//single
	app.get ('/comment/:blogpostId/:commentId' , () => {

	});

	app.post ('/comment/:blogpostId' , () => {

	});

	app.put ('/comment/:blogpostId/:commentId' , () => {

	});

	app.delete ('/comment/:blogpostId/:commentId' , () => {

	});
}