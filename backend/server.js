const express = require("express")
const dotenv = require("dotenv").config()
const port = process.env.PORT

const app = express()


app.use(express.json())

app.use('/api/tickets', require('./routes/ticketRoutes'))



app.listen(port, () => console.log(`server is listening on ${port}`))