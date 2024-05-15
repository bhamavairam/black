
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


exports.getAllUsers = (req,res) => {

    
        res.status(200).json( {
            status: 'success',
            message: 'users retrieved successfully'
        });
    };
    
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
    
