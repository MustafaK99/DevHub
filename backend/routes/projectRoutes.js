const express = require('express')
const router = express.Router()
const { getProjects, getProject, updateProject, setProject, deleteProject } = require('../controllers/projectController')

const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getProjects)
router.post('/', protect, setProject)
router.get('/:id', protect, getProject)
router.put('/:id', protect, updateProject)
router.delete('/:id', protect, deleteProject)


module.exports = router