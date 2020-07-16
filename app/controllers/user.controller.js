const db = require('../models');
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
	// Validate request
	console.log(req.body);
	if (!req.body.username) {
		res.status(400).send({
			message: 'debe contener al menos el username!'
		});
		return;
	}

	// Create a User
	const user = {
		username: req.body.username,
		name: req.body.name,
		surname: req.body.surname,
		password: req.body.password,
		coins: req.body.coins
	};
 
	User.create(user)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || 'Ocurrio un error al crear el user.'
			});
		});
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    //const name = req.query.name;
    //var condition = name ? { title: { [Op.like]: `%${name}%` } } : null;

    User.findAll(/*{ where: condition }*/)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrio un error al traer los Users."
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {};

// Update a User by the id in the request
exports.update = (req, res) => {};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {};

// Find all published Users
exports.findAllPublished = (req, res) => {};
