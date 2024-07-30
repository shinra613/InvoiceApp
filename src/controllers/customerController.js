const customerService = require('./../services/customerService'); 



// function to fetch all customers
exports.getAllCustomers = async(req,res) =>{

    try{
        const Customer =  await customerService.getAllCustomers(); 
        res.json(Customer); 
    }
    catch(err){
       res.status(500).send(err);
    }



}

// function to delete a sepcific customer
exports.deleteCustomer = async(req,res)=>{
    try{
        await customerService.deleteCustomerById(req.params.id);
        res.status(201).send({message:"customer deleted successfully"});
    }
    catch(err){

        res.status(500).send(err);
    }
}


// function to create a new customer
exports.createCustomer = async(req,res) =>{

    
    try{

        const customer = await customerService.findCustomerByEmail(req.body.customerEmail);
        if(!customer){

            const Customer =  await customerService.createCustomer(req.body); 
            res.status(201).json(Customer);
        }else if(customer){

            res.status(409).send({error:"Customer Exists already"});
        }
      
    }
    catch(err){
       res.status(500).send(err);
    }


}