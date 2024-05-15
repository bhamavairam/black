const Client = require('../models/clientModel')

exports.checkBody = (req,res, next ) => {
    console.log( 'check client body for fields'+req.body);

/*     if ( !req.body.user || !req.body.password)
  //  return res.status(400).json( {
    //    status: 'error',
     //   message: 'user Body missing fields'
    //});
*/ 
    next(); 
};

exports.createClient = async (req,res) => {

    try 
    {
        const newClient = await Client.create( req.body  );
    
    res.status(200).json( {
        status: 'success',
        client : newClient,
        message: 'users retrieved successfully'
    });
    } catch (err) {
        console.log("Error adding :"+err)
        res.status(400).json(  {
            status: 'failed',
            message: err
        })
    }
};


exports.getAllClients = async (req,res) => {

    try{
        const clients = await Client.find();
    
        res.status(200).json( {
            status: 'success',
            length : clients.length,
            data : {
                clients} });
    }
    catch(err)
    {
        res.status(400).json( { 
            status: 'failed',
            message : err
        });
    };
}

exports.getClient = async (req,res) => {

    try{
        const client = await Client.findById(req.params.id);
    
        res.status(200).json( {
            status: 'success',
            data : {
                client} });
    }
    catch(err)
    {
        res.status(400).json( { 
            status: 'failed',
            message : err
        });
    };
}


exports.updateClient = async (req,res) => {

    try 
    {
        const updatedClient = await Project.findByIdAndUpdate( req.params.id, req.body , { new: true}  );
    
    res.status(200).json( {
        status: 'success',
        data : updatedClient
    });
    } catch (err) {
        res.status(400).json(  {
            status: 'failed',
            message: err
        })
    }
};


