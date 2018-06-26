const express = require('express');
const router = express.Router();


const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
// Index
// @route 	GET api/profile
// @desc 	Tests profile route
// @access 	Public
router.get('/', (req, res) => {
	res.send('you b in profile')
});

//New
router.get('/new', (req, res) => {

});

//Create
router.post('/', (req, res) => {
	const { firstName, lastName } = req.body;
	console.log(req.body)
	res.status(200).send('You submitted a profile for: ' + firstName + ' ' + lastName);
});

//Show
router.get('/:id', (req, res) => {

});

//Edit
router.get('/:id/edit', (req, res) => {

});

//Update
router.put('/:id', (req, res) => {

});

//Destroy
router.delete('/:id', (req, res) => {

});

module.exports = router;