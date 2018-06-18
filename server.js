const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

require('./app/controllers/blogpostController')(app);
require('./app/controllers/commentController')(app);
// require('./app/controllers/userController')(app);



app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
});