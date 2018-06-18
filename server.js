const express = require('express');
const app = express();
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

const { blogpostController, commentController, middlewareController,
	userController, viewsController } = require('./app/controllers/')

const port = process.env.PORT || 5000;

blogpostController(app);
commentController(app);
userController(app);
middlewareController(app);
viewsController(app);


app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
});