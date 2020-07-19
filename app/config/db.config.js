module.exports = {
	HOST: 'localhost',
	USER: 'root',
	PASSWORD: '',
	DB: 'zoomixdb',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
};

// module.exports = {
// 	HOST: 'heroku_26c19ca3343b6eb',
// 	USER: 'be39dedb32e220',
// 	PASSWORD: '97de3987',
// 	DB: 'heroku_26c19ca3343b6eb',
// 	dialect: 'mysql',
// 	pool: {
// 		max: 5,
// 		min: 0,
// 		acquire: 30000,
// 		idle: 10000
// 	}
// };
