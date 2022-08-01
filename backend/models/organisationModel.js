const mongoose = require('mongoose')

const organisationSchema = mongoose.Schema({

    organisation:{
        type: String,
        required: true
    },
    organisationEmail:{
        type: String,
        required: true,
        unique: true
    },
},  {
    timestaps: true
})

module.exports = mongoose.model('Organisation', organisationSchema)