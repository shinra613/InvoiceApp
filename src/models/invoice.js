const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Invoice = sequelize.define('Invoice', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  customerName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

(async () => {
  await sequelize.sync({ force: true });
})();

module.exports = Invoice;
