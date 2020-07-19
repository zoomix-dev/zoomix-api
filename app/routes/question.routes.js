module.exports = (app) => {
	const questions = require('../controllers/question.controller.js');

	var router = require('express').Router();

	// Create a new question
	router.post('/', questions.create);

	// get Random Question from the questions list
	router.get('/getRandomQuestion', questions.getRandomQuestion);

	// Retrieve all question
	router.get('/', questions.findAll);

	// // Retrieve all published users
	// router.get('/published', users.findAllPublished);

	// Retrieve a single Question with id
	router.get('/:id', questions.findOne);

	// // Update a Tutorial with id
	// router.put('/:id', users.update);

	// // Delete a Tutorial with id
	// router.delete('/:id', users.delete);

	// // Create a new Tutorial
	// router.delete('/', users.deleteAll);

	app.use('/api/questions', router);
};
