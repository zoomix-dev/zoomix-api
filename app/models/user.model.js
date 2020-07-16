module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		username: {
			type: Sequelize.STRING,
			allowNull: false
		},
		name: {
			type: Sequelize.STRING,
			allowNull: true
		},
		surname: {
			type: Sequelize.STRING,
			allowNull: true
		},
		birthdate: {
			type: Sequelize.DATE,
			allowNull: true
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		},
		coins: {
			type: Sequelize.INTEGER,
			allowNull: false
		}
	});
	return User;
};
