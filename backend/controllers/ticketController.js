const asyncHandler = require('express-async-handler')

const Ticket = require('../models/ticketModel')

const getTickets = asyncHandler (async (req, res) => {
    const tickets = await Ticket.find({})

    res.status(200).json(tickets)
})


const setTicket = asyncHandler( async (req, res) => {
    const {status, title, content, issueType, priority, estimate} = req.body
    const ticket = new Ticket ({
        status,
        title,
        content,
        issueType,
        priority,
        estimate
    })

    const savedTicket = await ticket.save()
   
    res.status(201).json(savedTicket)
})

const updateTicket = asyncHandler( async (req, res) => {
    res.status(200).json({message: `update ticket ${req.params.id}`})
})

const deleteTicket = asyncHandler (async (req, res) => {
    res.status(200).json({message: `delete ticket ${req.params.id}`})
})



module.exports = {
    getTickets, 
    setTicket, 
    updateTicket, 
    deleteTicket
}