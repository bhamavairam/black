const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema( {
    name : {
        type: String,
        required: true,
        unique: true
    },
    type : {
        type: String,
        required: false
    }
});
/*
const resourceSchema = new mongoose.Schema( {
    name : {
        type: String,
        required: true
    },
    shortname : {
        type: String,
        unique: true,
        required: true
    },
    type : {
        type: Date,
        required: false
    }
});

const Resources = mongoose.model( 'Resource', resourceSchema);
*/

const Skills = mongoose.model( 'Skill', skillSchema);

module.exports = Skills;