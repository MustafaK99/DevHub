const jsonwebtoken = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const user = require('../models/userModel')

const protect = asyncHandler(async(req, res, next) => {
    let token 

    if(req.headers.authorization && req.header.authorization.startsWIth('bearer')){
        
    }

})

module.exports = {protect}