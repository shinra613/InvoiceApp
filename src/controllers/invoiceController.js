const invoiceService = require('../services/invoiceService');

exports.getAllInvoices = async (req, res) => {
  try {
    const invoices = await invoiceService.getAllInvoices(req);
    res.json(invoices);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getInvoiceByCustomer = async (req, res) => {
  try {
    const invoices = await invoiceService.getInvoiceByCustomer(req.body.customerId);
    res.json(invoices);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createInvoice = async (req, res) => {
  try {
    const invoice = await invoiceService.createInvoice(req.body);
    res.status(201).json(invoice);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
 