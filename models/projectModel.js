const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    schedule: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    pso: {
        type: String,
        required: false,
    },
    estimate: {
        type: Number
    },
    client: {
        type: String,
        required: true
    },
    remarks: {
        type: String
 }
});

const Project = mongoose.model( 'Project', projectSchema);

module.exports = Project;