const jwt = require('jsonwebtoken')
const User = require('./../models/userModule')
const AppError = require('./../utils/appError')
const temp = require('./../models/temporaryModel')
const Temporary = require('./../models/temporaryModel')

const signToken = function(id, category){

    return jwt.sign( { id, category }, 'secret' , { expiresIn: '10d'})

}
exports.signup = async (req, res, next) => {
    console.log(req.body)

    try
    {
      const signedUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }

      const newTemp = await Temporary.create({
            name : 'user',
            data : signedUser,
            status : 'new'
      })
/*    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
*/
    res.status(201).json( {
        status : 'success',
        data: {
            user: newTemp
        }
    })
    }
    catch (err) {
        console.log("Error adding :"+err)
        res.status(400).json(  {
            status: 'failed',
            message: err
        })
    }
}

exports.login =async (req, res, next) => {
    const { email, password } = req.body;

    if ( !email || !password ) {
        res.status(400).json( {
            status: 'failed',
            message: 'mandatory fields missing'
        })
    }

   const user = await User.findOne( {email }).select('+password');

   if( !user || !(await user.correctPassword(password, user.password))) {
    res.status(400).json( {
        status: 'failed',
        message: 'Invalid Credentials'
    })
    next()
   }

   const token = signToken(user._id, user.category);

    res.status(200).json({
        token : token
    })
}