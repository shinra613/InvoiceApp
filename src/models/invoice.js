const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db');
const Customer = require('./customer');

const Invoice = sequelize.define('Invoice', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  customerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Customer,
      key: 'id'
    }
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

Invoice.associate = (models) => {
  Invoice.belongsTo(models.Customer, {
    foreignKey: 'customerId',
    as: 'customer'
  });
};

(async () => {
  await sequelize.sync({ force: true });
})();

module.exports = Invoice;
