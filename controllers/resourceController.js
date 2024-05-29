const Resource = require('../models/resourceModel')

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

exports.createResource = async (req,res) => {

    console.log(req.body)
    try 
    {
        const newResource = await Resource.create( req.body  );
    
    res.status(200).json( {
        status: 'success',
        resource : newResource,
        message: 'Resource Added successfully'
    });
    } catch (err) {
        console.log("Error adding :"+err)
        res.status(400).json(  {
            status: 'failed',
            message: err
        })
    }
};


exports.getResources = async (req,res) => {

    try{
        const resources = await Resource.find();
        // { 
        //    shortname: 'rajass',  
        //    skill: "BankWorld ATM Controller" 
       // }).exec();

        res.status(200).json( {
            status: 'success',
            length : resources.length,
            data : {
                resources} });
    }
    catch(err)
    {
        res.status(400).json( { 
            status: 'failed',
            message : err
        });
    };
}

exports.findResource = async (req,res) => {

    try{
        const resource = await Resource.findById(req.params.id);
    
        res.status(200).json( {
            status: 'success',
            data : {
                resource} });
    }
    catch(err)
    {
        res.status(400).json( { 
            status: 'failed',
            message : err
        });
    };
}

exports.findSkillResource = async (req,res) => {

    try{
        console.log("Seraching "+req.body.skill)
        const resource = await Resource.find({ skills: { "$in" : [req.body.skill]}});
        console.log("Found "+ resource);

        res.status(200).json( {
            status: 'success',
            data : {
                resource} });
    }
    catch(err)
    {
        res.status(400).json( { 
            status: 'failed',
            message : err
        });
    };
}

exports.updateResource = async (req,res) => {

    try 
    {
        const updatedResource = await Resource.findByIdAndUpdate( req.params.id, req.body , { new: true}  );
    
    res.status(200).json( {
        status: 'success',
        data : updatedResource
    });
    } catch (err) {
        res.status(400).json(  {
            status: 'failed',
            message: err
        })
    }
};


