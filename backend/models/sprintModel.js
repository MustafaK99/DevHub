const mongoose = require('mongoose')

const sprintSchema = mongoose.Schema({

    sprintNumber: {
        type: Number,
        required: True
    },
    sprintActive: {
        type: Boolean,
        required: True
    }
    ,
    startTime: {
        type: Date,
        required: True
    },
    endTime: {
        type: Date,
        required: True
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Project'
    },
    tickets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket',
        required: false
    }]

}, {
    timestamps: true
})

module.exports = mongoose.Schema('Sprint', sprintSchema)