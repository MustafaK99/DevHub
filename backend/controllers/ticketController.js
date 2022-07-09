const getTickets = (req, res) => {
    res.status(200).json({message: 'get tickets'})

}


module.exports = {
    getTickets,
}