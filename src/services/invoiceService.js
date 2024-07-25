const Invoice = require('../models/invoice');

exports.getAllInvoices = async () => {
  return await Invoice.findAll();
};

exports.createInvoice = async (invoiceData) => {
  return await Invoice.create(invoiceData);
};
 