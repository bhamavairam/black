const mongoose = require('mongoose');
const validator= require('validator');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema( {
    name : {
        type: String,
        required: true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'please provide valid email']
    },
    password: {
        type : String,
        required: true,
        select: false
    },
    category: {
        type: String,
        required: true,
        default: 'ps-user'
    },
    photo: String
});

userSchema.pre('save', async function(next) {
    //Only run this function if password was actually modified
    if ( !this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);

    next();
})

userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword)
}

const User = mongoose.model( 'User', userSchema);

module.exports = User;