const mongoose = require('mongoose')

const sprintSchema = mongoose.Schema({

    sprintNumber:{
        type:Number,
        required: True
    },
    startTime:{
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
    }

},{
    timestamps: true
})

module.exports = mongoose.Schema('Spring', sprintSchema)