const express = require('express');
const bodyParser = require('body-parser');
const invoiceRoutes = require('./routes/invoiceRoutes');
const logger = require('./middlewares/logger');
const app = express();

app.use(bodyParser.json());
app.use(logger);
app.use('/api/invoices', invoiceRoutes);

module.exports = app;
