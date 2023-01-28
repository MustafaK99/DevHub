const mongoose = require("mongoose")

const epicSchema = mongoose.Schema({

    created_by_user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    project: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Project'
    },

    status: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tickets: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Feature'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('Project', epicSchema)