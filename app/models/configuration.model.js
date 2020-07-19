module.exports = (sequelize, Sequelize) => {
	const Configuration = sequelize.define('configuration', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
		enabled: {
			type: Sequelize.BOOLEAN,
			allowNull: true
		}
	});

	// MANY TO MANY QUESTIONS-CONFIGURATION
	Configuration.associate = (models) =>{
		//Configuration.belongsToMany(models.questions, { through: models.questions_users });
	};

	return Configuration;
};
