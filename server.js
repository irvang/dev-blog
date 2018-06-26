const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// const { blogpostRouter, commentController, middlewareController,
// profileController, viewsController } = require('./app/routes/api')
const { blogpostRouter, profileRouter } = require('./app/routes/api')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/blogposts', blogpostRouter);
app.use('/api/profile', profileRouter)
// app.use('/api/blogposts/:id/comments', commentRouter);



const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
});