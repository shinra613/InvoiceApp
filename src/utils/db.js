const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: 'sqlite',
//   logging: false
// });

const sequelize = new Sequelize('test-db','user','pass',{
  dialect : "sqlite",
  host:"./dev.sqlite"
})

module.exports = sequelize;
