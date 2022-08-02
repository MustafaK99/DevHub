const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async(req, res, next) => {
    let token 

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token  = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select('-password')
            next()

        } catch (error) {
            return res.status(401).json({message: 'Not Authorized'})
        }
    }

    if(!token){
        return res.status(401).json({message: 'Not Authorized'})
    }

})

function authRole(role){
    return(req, res, next) => {
        if(req.user.role !== role){
            return res.status(401).json({message: 'Not Admin'})
        }

      next()
    }
}

module.exports = {protect, authRole}