const mongoose = require('mongoose')

const productBacklogSchema = mongoose.Schema({
    tickets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ticket'
    }]

})

module.exports = mongoose.Schema('ProductBacklog', productBacklogSchema)