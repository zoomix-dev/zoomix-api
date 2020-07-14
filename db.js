const Sequelize = require('sequelize');

const userModel = require('./app/models/user.model.js');

const sequelize = new Sequelize('zoomixdb','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

const User = userModel(sequelize,Sequelize);

sequelize.sync({force:false}).then(() => {
    console.log("Tablas sincronizadas");
});

module.exports = {
    User
}