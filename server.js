const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://theboss:abcd1234@ds119171.mlab.com:19171/dev-blog')
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.error(error));

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