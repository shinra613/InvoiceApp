const express = require('express');
const bodyParser = require('body-parser');
const invoiceRoutes = require('./routes/invoiceRoutes');
const customerRoutes = require('./routes/customerRoutes');
const logger = require('./middlewares/logger');

require('./setup');

const app = express();

app.use(bodyParser.json());
app.use(logger);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/customers',customerRoutes);

module.exports = app;
