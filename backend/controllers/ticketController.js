const asyncHandler = require('express-async-handler')

const getTickets = asyncHandler (async (req, res) => {
    res.status(200).json({message: 'get tickets'})
})


const setTicket = asyncHandler( async (req, res) => {
     
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a field')
    }
   
    res.status(200).json({message: 'create ticket'})
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