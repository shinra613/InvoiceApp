const sequelize = require('./utils/db');
const Customer = require('./models/customer');
const Invoice = require('./models/invoice');

// Initialize models
const models = {
  Customer,
  Invoice
};

// Set up associations
Object.keys(models).forEach(modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

// Sync models with the database
(async () => {
  await sequelize.sync({ force: true }); // Set force: false in production
  console.log('Database synced');
})();
