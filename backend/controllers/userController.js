
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Organisation = require('../models/organisationModel')
const { error } = require('../middleware/logger')


const registerAdminUser = asyncHandler(async(req, res) => {
    const {organisation, organisationEmail, name, email, password } = req.body

    if(!name || !email || !password  || !organisation || !organisationEmail){
        res.status(400)
        next(error)
    }

    const organisationExists = await Organisation.findOne({organisationEmail})

    if(organisationExists){
        res.status(400)
        next(error)
    }

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        next(error)
    }

    const organisationCreated = await Organisation.create({
        organisation,
        organisationEmail
    })


    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)


    const user = await User.create({
        name, 
        email,
        password: hashedPassword,
        role: 'Admin',
        organisation: organisationCreated.id
    })


    if(user && organisationCreated){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
            org: organisationCreated.organisation
        })

    } else {
        res.status(400),
        next(error)
    }

})

const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password, role} = req.body

    if(!name || !email || !password || !role){
        res.status(400)
        next(error)
    }

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        next(error)
    }



    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name, 
        email,
        password: hashedPassword,
        role,
        organisation: req.user.organisation
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            org: user.organisation,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        next(error)
    }


})

const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } 
    else{
        res.status(400)
    }

})


const getMe = asyncHandler(async(req, res) => {
    res.status(200).json(req.user)
})


const generateToken = (id) => {
    return jwt.sign( { id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
    registerAdminUser
}