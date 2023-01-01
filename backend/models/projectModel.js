const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({

    name: {
        type: String,
        required: True
    },
    description: {
        type: String,
    },
    start_time: {
        type: Date
    },
    end_time: {
        type: Date
    },
    organisation: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Organisation'
    },
    collaborators: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Project', projectSchema)