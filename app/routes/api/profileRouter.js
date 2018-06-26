const express = require('express');
const router = express.Router();

//Index
router.get('/', (req, res) => {
	res.send('you b in profile')
});

//New
router.get('/new', (req, res) => {

});

//Create
router.post('/', (req, res) => {

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