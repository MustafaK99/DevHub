const mongoose = require('mongoose')

const boardSchema = mongoose.Schema({
    toDo:{},
    inProgress:{},
    review:{},
    done:{},
    sprint:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Sprint'
    }
 },{
    timestaps:true
 })