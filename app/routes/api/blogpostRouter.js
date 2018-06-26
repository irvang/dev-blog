const express = require('express');
const router = express.Router();
const commentsRouter = require('./commentRouter');

//nested router.
// router.use('/:id/comments', commentsRouter);

//Index - all
router.get('/', (req, res) => {

	res.send('At blogpost');
});

//New - form
router.get('/new', (req, res) => {

});

//Show - single
router.get('/:id', (req, res) => {

});

//Edit - form
router.get('/:id/edit', (req, res) => {

});

//Create
router.post('/', (req, res) => {

});

//Update
router.put('/:id', (req, res) => {

});

//Destroy
router.delete('/:id', (req, res) => {

});

//Index - all
router.get('/:id/comments/', (req, res) => {
	console.log(req.url)

	res.send('In commentss route, wohoooo!!!');
});

//New - form
router.get('/:id/comments/new', (req, res) => {

});

//Show - single
router.get('/:id/comments/:commentId', (req, res) => {

});

//Edit - form
router.get('/:id/comments/:commentId/edit', (req, res) => {

});

//Create
router.post('/:id/comments', (req, res) => {

});

//Update
router.put('/:id/comments/:commentId', (req, res) => {

});

//Destroy
router.delete('/:id/comments/:commentId', (req, res) => {

});

module.exports = router;

/* https://codepen.io/urketadic/pen/oZRdRN  */