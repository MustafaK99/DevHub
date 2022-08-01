const { response } = require('express')
const asyncHandler = require('express-async-handler')

const Ticket = require('../models/ticketModel')
const User = require('../models/userModel')

const getTickets = asyncHandler (async (req, res) => {
    const tickets = await Ticket.find({ user: req.user.id})

    res.status(200).json(tickets)
})

const getTicket = asyncHandler(async (req, res) => {
    const ticket = await Ticket.findById(req.params.id)

    if(ticket){
        res.json(ticket)
    }
    else{
        res.status(404).end()
    }
})


const setTicket = asyncHandler( async (req, res) => {
    const {status, title, content, issueType, priority, estimate} = req.body
    const ticket = new Ticket ({
        status,
        title,
        content,
        issueType,
        priority,
        estimate,
        user: req.user.id
    })

    const savedTicket = await ticket.save()
   
    res.status(201).json(savedTicket)
})

const updateTicket = asyncHandler( async (req, res) => {
    const givenTicket = Ticket.findById(req.params.id)

    if(!givenTicket){
        res.status(400)
        next(error)
    }

    const {status, title, content, issueType, priority, estimate} = req.body
    const ticket = {
        status,
        title,
        content,
        issueType,
        priority,
        estimate
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401).json({message: 'Not Authorized'})
    }

    if(ticket.user.toString() !== user.id){
        res.status(401).json({message: 'Not Authorized'})
    }
 
   newTicket =  await Ticket.findByIdAndUpdate(req.params.id, ticket, { new: true })
   res.status(400).json(newTicket)

})



const deleteTicket = asyncHandler (async (req, res) => {
    await Ticket.findByIdAndRemove(req.params.id)
    res.status(204).end()
})



module.exports = {
    getTickets, 
    setTicket, 
    updateTicket, 
    deleteTicket,
    getTicket
}