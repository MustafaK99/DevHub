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

const updateProject = asyncHandler(async (req, res) => {
    const givenProject = Project.findById(req.params.id)

    if (!givenProject) {
        res.status(400)
        next(error)
    }

    const { name, description, start_time, end_time, collaborators } = req.body
    const project = new Project({
        name,
        description,
        start_time,
        end_time,
        collaborators,
        organisation: req.user.organisation
    })


    if (!req.user) {
        res.status(401).json({ message: 'Not Authorized' })
    }

    if (!project.find({ collaborators: 'req.user.id' })) {
        res.status(401).json({ message: 'Not Authorized' })
    }

    newProject = await Project.findByIdAndUpdate(req.params.id, project, { new: true })
    res.status(400).json(newProject)

})



const deleteProject = asyncHandler(async (req, res) => {
    const project = await Project.findByIdAndRemove(req.params.id)
    if (!project) {
        res.status(400)
    }

    if (!req.user) {
        res.status(401)
    }

    if (!project.find({ collaborators: 'req.user.id' })) {
        res.status(401)
    }

    await project.remove()
    res.status(200).json({ id: req.params.id })
})






module.exports = {
    getTickets,
    setTicket,
    updateTicket,
    deleteTicket,
    getTicket
}