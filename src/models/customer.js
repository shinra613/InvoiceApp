const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('./../utils/db'); 

const Customer = sequelize.define('Customer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    customerEmail: {
        type: DataTypes.STRING,
        allowNull: false
      },
  

  });
  
  (async () => {
    await sequelize.sync({ force: true });
  })();
  
  module.exports = Customer;