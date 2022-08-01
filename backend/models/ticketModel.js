const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    
    created_by_user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
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
    issueType: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    estimate: {
        type: Number,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('ticket', ticketSchema)