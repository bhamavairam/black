const User = require('./../models/userModule')

exports.checkID = (req,res, next, val ) => {
    console.log( 'check DB for this ID '+val);

    res.status(404).json( {
        status: 'error',
        message: 'user ID not present'
    });
    next(); 
};

exports.checkBody = (req,res, next ) => {
    console.log( 'check body for fields'+req.body);

    if ( !req.body.user || !req.body.password)
    return res.status(400).json( {
        status: 'error',
        message: 'user Body missing fields'
    });

    next(); 
};


exports.getAllUsers = async (req,res) => {

    try{
        const users= await User.find();
        res.status(200).json( {
            status: 'success',
            length : users.length,
            data : {
                users} });
    }
    catch(err)
    {
        res.status(400).json( { 
            status: 'failed',
            message : err
        });
    };
}
    
    exports.getResources = async (req,res) => {

        try{
            const resources = await Resource.find().populate('skills');
            // { 
            //    shortname: 'rajass',  
            //    skill: "BankWorld ATM Controller" 
           // }).exec();
    
            res.status(200).json( {
                status: 'ressuccess',
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
    
exports.loginUser = (req,res) => {
    console.log(req.body);
    res.status(200).json( {
        status: 'success',
        message: 'user validated successfully'
    });
};
    

exports.deleteUser = (req,res) => {
    console.log(req.body);
    res.status(200).json( {
        status: 'success',
        message: 'user DELETED'
    });
};
    
