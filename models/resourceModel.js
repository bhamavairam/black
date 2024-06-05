const mongoose = require('mongoose');


const resourceSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    joined: 
    { 
        type: Date, 
        required: true
    },
    shortname: {
        type: String,
        required: true,
        unique: true
    },
    title:
    {
        type: String,
        required: true
    },
    contact:
    {
        type: [String],
    },
    remarks: {
        type: String,
        required: true
    },
    skills: [ {
        type: mongoose.Schema.ObjectId,
        ref: 'Skill'
    }],
    scores : [String]
});

mongoose.models = {};
const Resources = mongoose.model( 'Resource', resourceSchema);

module.exports = Resources;