module.exports = (sequelize, Sequelize) => {
	const Question = sequelize.define('question', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		question: {
			type: Sequelize.STRING,
			allowNull: false
		},
		visits: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		votes: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		nvotes: {
			type: Sequelize.INTEGER,
			allowNull: true
		},
		password: {
			type: Sequelize.STRING,
			allowNull: true
		},
		approve: {
			type: Sequelize.BOOLEAN,
			allowNull: true
		},
		user_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id'
			}
		}
	});

	Question.associate = (models) => {
		Question.belongsTo(models.users);
	};

	return Question;
};
