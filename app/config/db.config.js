
const DEV_ENV = {
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

const STAGING_ENV = {
	HOST: 'x40p5pp7n9rowyv6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	USER: 'b7re3vgibyy0ihai',
	PASSWORD: 'tam22dat6z14laby',
	DB: 'rrysdjcwr31pua1p',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
}

module.exports = STAGING_ENV;

