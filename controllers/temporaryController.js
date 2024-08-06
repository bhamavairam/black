const Skills = require('../models/skills')
const Users = require('../models/userModule')
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

exports.createTemp = async (req,res) => {

    try 
    {
        console.log("Received for Temporary")
        const temp = {
            name : req.body.name,
            data : req.body.data,
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

exports.getAll = async (req,res) => {

    try{
        const temp = await Temporary.find();
        
        console.log(temp[0])
    
        res.status(200).json( {
            status: 'success',
            length : temp.length,
            data : {
                temp} });
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


exports.updateTemp = async (req,res) => {

    console.log('update Temporary')
    try 
    {
        const temp = await Temporary.findById(req.params.id);
        if ( temp.name == 'skills' ){
            console.log("Skill approved")
            const newSkill = await Skills.create( temp.data  );
            const deletedTemp = await Temporary.findByIdAndDelete( req.params.id );
        }
        if ( temp.name == 'user' ){
            console.log("User approved")
            const newSkill = await Users.create( temp.data  );
            const deletedTemp = await Temporary.findByIdAndDelete( req.params.id );
        }

//        const updatedSkill = await Skills.findByIdAndUpdate( req.params.id, req.body , { new: true}  );
    
    res.status(200).json( {
        status: 'success'
    });
    } catch (err) {
        console.log("Failed to upate Collection")
        res.status(400).json(  {
            status: 'failed',
            message: err
        })
    }
};

exports.deleteTemp = async (req,res) => {

    try 
    {
        const deletedTemp = await Temporary.findByIdAndDelete( req.params.id );
    
    res.status(200).json( {
        status: 'success',
        data : deletedTemp
    });
    } catch (err) {
        res.status(400).json(  {
            status: 'failed',
            message: err
        })
    }
};
