const Skills = require('../models/skills')
const Temporary = require('../models/temporaryModel');

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

exports.createSkill = async (req,res) => {

    try 
    {
        console.log("Received for Temporary")
        const temp = {
            name : "skills",
            data : req.body,
            status : "new"
        };

        const newTemporary = await Temporary.create( temp  );
    
    res.status(200).json( {
        status: 'success',
        newskill : temp,
        message: 'skill set Added successfully in temporary'
    });
    } catch (err) {
        res.status(400).json(  {
            status: 'failed',
            message: err
        })
    }

    /*
    try 
    {
        const newSkill = await Skills.create( req.body  );
    
    res.status(200).json( {
        status: 'success',
        newskill : newSkill,
        message: 'skill set Added successfully'
    });
    } catch (err) {
        res.status(400).json(  {
            status: 'failed',
            message: err
        })
    }
        */
};

exports.getAllskill = async (req,res) => {

    try{
        const skills = await Skills.find();
        
        console.log(skills[0])
    
        res.status(200).json( {
            status: 'success',
            length : skills.length,
            data : {
                skills} });
    }
    catch(err)
    {
        res.status(400).json( { 
            status: 'failed',
            message : err
        });
    };
}

exports.findSkill = async (req,res) => {

    try{
        const skill = await Skills.findById(req.params.id);
    
        res.status(200).json( {
            status: 'success',
            data : {
                skill} });
    }
    catch(err)
    {
        res.status(400).json( { 
            status: 'failed',
            message : err
        });
    };
}


exports.updateSkill = async (req,res) => {

    try 
    {
        const updatedSkill = await Skills.findByIdAndUpdate( req.params.id, req.body , { new: true}  );
    
    res.status(200).json( {
        status: 'success',
        data : updatedSkill
    });
    } catch (err) {
        console.log("Failed to upate Skills Collection")
        res.status(400).json(  {
            status: 'failed',
            message: err
        })
    }
};

exports.deleteSkill = async (req,res) => {

    try 
    {
        const deletedSkill = await Skills.findByIdAndDelete( req.params.id, req.body );
    
    res.status(200).json( {
        status: 'success',
        data : deletedSkill
    });
    } catch (err) {
        res.status(400).json(  {
            status: 'failed',
            message: err
        })
    }
};
