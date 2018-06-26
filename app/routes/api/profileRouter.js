const express = require('express');
const router = express.Router();

const { User } = require('../../models')

const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Index
// @route 	GET api/profile
// @desc 	Tests profile route
// @access 	Public
router.get('/', (req, res) => {
	User.find({}).then(users => {
		res.send(users);
	}).catch(err => console.error(err));
});

//New
router.get('/new', (req, res) => {

});

//Create
router.post('/', (req, res) => {
	const { username, password, firstName, lastName, bio } = req.body;

	User.create({
		username: username,
		password: password,
		firstName: firstName,
		lastName: lastName,
		bio: bio
	}).then(createdUser => {
		console.log("You created a user!", createdUser);

		res.status(200).send('Profile created for '
			+ createdUser.firstName + ' ' + createdUser.lastName);
	}).catch((err) => {
		res.status(404).send(err);
	})

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