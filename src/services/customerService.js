const Customer = require('./../models/customer');

exports.getAllCustomers = async()=>{

   return await Customer.findAll(); 

}


exports.findCustomerByEmail = async (email) => {
    try {
      const customer = await Customer.findOne({
        where: {
          customerEmail: email
        }
      });
      return customer;
    } catch (error) {
      throw new Error(`Error finding customer: ${error.message}`);
    }
  };

  exports.deleteCustomerById = async (customerId) => {
    try {
      const result = await Customer.destroy({
        where: {
          id: customerId
        }
      });
  
      if (result === 0) {
        const error = new Error('Customer not found');
        error.statusCode = 404; // Not Found
        throw error;
      }
  
      return result;
    } catch (error) {
      throw new Error(`Error deleting customer: ${error.message}`);
    }
  };

exports.createCustomer = async(customerData) =>{
    return await Customer.create(customerData);
}