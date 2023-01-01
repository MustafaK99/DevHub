const { response } = require('express')
const asyncHandler = require('express-async-handler')
const { trusted } = require('mongoose')

const Project = require('../models/projectModel')
const User = require('../models/userModel')

const getProjects = asyncHandler(async (req, res) => {

    const projects = await Project.find({ user: req.user.id })

    res.status(200).json(projects)
})

const getProject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id)

    if (project) {
        res.json(project)
    }
    else {
        res.status(404).end()
    }
})


const setProject = asyncHandler(async (req, res) => {
    const { name, description, start_time, end_time, collaborators } = req.body
    const project = new Project({
        name,
        description,
        start_time,
        end_time,
        collaborators,
        organisation: req.user.organisation
    })

    const savedProject = await project.save()

    res.status(201).json(savedProject)
})

const updateTicket = asyncHandler(async (req, res) => {
    const givenTicket = Ticket.findById(req.params.id)

    if (!givenTicket) {
        res.status(400)
        next(error)
    }

    const { status, title, content, issueType, priority, estimate } = req.body
    const ticket = {
        status,
        title,
        content,
        issueType,
        priority,
        estimate
    }


    if (!req.user) {
        res.status(401).json({ message: 'Not Authorized' })
    }

    if (ticket.user.toString() !== req.user.id) {
        res.status(401).json({ message: 'Not Authorized' })
    }

    newTicket = await Ticket.findByIdAndUpdate(req.params.id, ticket, { new: true })
    res.status(400).json(newTicket)

})



const deleteTicket = asyncHandler(async (req, res) => {
    const ticket = await Ticket.findByIdAndRemove(req.params.id)
    if (!ticket) {
        res.status(400)
    }

    if (!req.user) {
        res.status(401)
    }

    if (ticket.user.toString() !== req.user.id) {
        res.status(401)
    }

    await ticket.remove()
    res.status(200).json({ id: req.params.id })
})






module.exports = {
    getTickets,
    setTicket,
    updateTicket,
    deleteTicket,
    getTicket
}