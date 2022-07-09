const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message: 'get tickets'})
})

router.post('/', (req, res) => {
    res.status(200).json({message: 'create ticket'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({message: `update ticket ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message: `delete ticket ${req.params.id}`})
})


module.exports = router