const { search } = require('../app');
const Invoice = require('../models/invoice');
const Customer = require('../models/customer');


exports.createInvoice = async (invoiceData) => {
  return await Invoice.create(invoiceData);
};
 
exports.getAllInvoices = async (query)=>{
  try {

    const searchParam = {};

    if(query.customerId){
    searchParam.customerId = query.customerId
    }
    

    const Invoices = await Invoice.findOne({
      where: searchParam,
      include: [{ model: Customer, as: 'customer' }]
    });
    return Invoices;
  } catch (error) {
    throw new Error(`Error finding customer: ${error.message}`);
  }
}