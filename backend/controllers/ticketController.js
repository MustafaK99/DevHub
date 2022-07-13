
const getTickets = (req, res) => {
    res.status(200).json({message: 'get tickets'})
}


const setTicket = (req, res) => {

    if(!req.body.title){
        res.status(400)
        throw new Error('add stuff');
    }

    const {title, priority} = req.body
    console.log(title)
    console.log(priority)
    res.status(200).json({message: 'create ticket'})
}

const updateTicket = (req, res) => {
    res.status(200).json({message: `update ticket ${req.params.id}`})
}

const deleteTicket = (req, res) => {
    res.status(200).json({message: `delete ticket ${req.params.id}`})
}



module.exports = {
    getTickets, 
    setTicket, 
    updateTicket, 
    deleteTicket
}