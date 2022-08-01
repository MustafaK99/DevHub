const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    },
    organisation: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Organisation'
    }

}, {
    timestaps: true
})

module.exports = mongoose.model('User', userSchema)