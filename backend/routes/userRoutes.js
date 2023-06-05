const express= require('express');

// controller functions
const {loginUser} = require('../controller/userController')
const {authUser} = require('../controller/authenticationController')


const router = express.Router();

// login route
router.post('/', loginUser)
router.post('/auth', authUser)


module.exports = router