const Project = require('./../models/projectModel')

exports.checkBody = (req,res, next ) => {
    console.log( 'check body for fields'+req.body);

/*     if ( !req.body.user || !req.body.password)
  //  return res.status(400).json( {
    //    status: 'error',
     //   message: 'user Body missing fields'
    //});
*/ 
    next(); 
};

exports.createProject = async (req,res) => {

    try 
    {
        const newProject = await Project.create( req.body  );
    
    res.status(200).json( {
        status: 'success',
        project : newProject,
        message: 'users retrieved successfully'
    });
    } catch (err) {
        res.status(400).json(  {
            status: 'failed',
            message: err
        })
    }
};


exports.getAllProjects = (req,res) => {

    
        res.status(200).json( {
            status: 'success',
            message: 'users retrieved successfully'
        });
    };
    
