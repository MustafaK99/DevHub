const express = require('express')
const router = express.Router()
const { getTickets, updateTicket, setTicket, deleteTicket } = require('../controllers/ticketController')

router.get('/', getTickets) 
router.post('/', setTicket) 
router.put('/:id', updateTicket)
router.delete ('/:id', deleteTicket)


module.exports = router