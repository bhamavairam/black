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

exports.getAllprojects = async (req,res) => {

    try{
        const projects = await Project.find();
    
        res.status(200).json( {
            status: 'success',
            length : projects.length,
            data : {
                projects} });
    }
    catch(err)
    {
        res.status(400).json( { 
            status: 'failed',
            message : err
        });
    };
}

exports.updateProject = async (req,res) => {

    try 
    {
        const updatedProject = await Project.findByIdAndUpdate( req.params.id, req.body , { new: true}  );
    
    res.status(200).json( {
        status: 'success',
        data : updatedProject
    });
    } catch (err) {
        res.status(400).json(  {
            status: 'failed',
            message: err
        })
    }
};

exports.deleteProject = async (req,res) => {

    try 
    {
        const updatedProject = await Project.findByIdAndDelete( req.params.id, req.body );
    
    res.status(200).json( {
        status: 'success',
        data : updatedProject
    });
    } catch (err) {
        res.status(400).json(  {
            status: 'failed',
            message: err
        })
    }
};
