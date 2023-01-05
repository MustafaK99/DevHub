const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, registerAdminUser, getAllUsersInOrg } = require('../controllers/userController')
const { protect, authRole } = require('../middleware/authMiddleware')

router.post('/', protect, authRole('Admin'), registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.post('/registerAdmin', registerAdminUser)
router.get('/org', protect, getAllUsersInOrg)

module.exports = router