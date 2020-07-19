const db = require('../models');
const Question = db.questions;
const Op = db.Sequelize.Op;

const Sequelize = require('sequelize');
const bd_enter = {};

// Create and Save a new Question
exports.create = (req, res) => {
	// Validate request
	console.log(req.body);
	if (!req.body.question) {
		res.status(400).send({
			message: 'debe contener al menos la question!'
		});
		return;
	}

	// Create a Question
	const question = {
		question: req.body.question,
		visits: req.body.visits,
		votes: req.body.votes,
		nvotes: req.body.nvotes,
		password: req.body.password,
		approve: req.body.approve,
		user_id: req.body.user_id
	};

	Question.create(question)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Ocurrio un error al crear la question.'
			});
		});
};

// Retrieve all Questions from the database.
exports.findAll = (req, res) => {
	//const name = req.query.name;
	//var condition = name ? { title: { [Op.like]: `%${name}%` } } : null;

	Question.findAll(/*{ where: condition }*/)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Ocurrio un error al traer las Quesions.'
			});
		});
};

// Find a single Question with an id
exports.findOne = (req, res) => {
	const id = req.params.id;

	Question.findByPk(id)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error al traer la Question con id=' + id
			});
		});
};

// Update a User by the id in the request
exports.update = (req, res) => {};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
	const id = req.params.id;

	Question.destroy({
		where: { id: id }
	})
		.then((num) => {
			if (num == 1) {
				res.send({
					message: 'Question eliminada corectamente!'
				});
			} else {
				res.send({
					message: `no fue posible borrar la Question con id=${id}. Probablemente no exista!`
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: 'No se pudo borrar la question con id=' + id
			});
		});
};

// Delete all Questions from the database.
exports.deleteAll = (req, res) => {};

// Find all published Questions
exports.findAllPublished = (req, res) => {};

// get Random Question from the questions list
exports.getRandomQuestion = (req, res) => {
	Question.findOne({
		order: [ Sequelize.fn('RAND') ]
	})
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error al traer la Question Random'
			});
		});
};
