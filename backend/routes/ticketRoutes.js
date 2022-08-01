const express = require('express')
const router = express.Router()
const { getTickets,getTicket, updateTicket, setTicket, deleteTicket } = require('../controllers/ticketController')

const {protect} = require('../middleware/authMiddleware')

router.get('/', protect, getTickets) 
router.post('/', protect, setTicket) 
router.get('/:id',protect, getTicket)
router.put('/:id', protect, updateTicket)
router.delete ('/:id', protect, deleteTicket)


module.exports = router