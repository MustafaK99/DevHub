const mongoose = require('mongoose')

const boardSchema = mongoose.Schema({
    toDo: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket'
    }],
    inProgress: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket'
    }],
    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket'
    }],
    done: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket'
    }],
    sprint: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Sprint'
    }
}, {
    timestaps: true
})

module.exports = mongoose.model('Board', boardSchema)