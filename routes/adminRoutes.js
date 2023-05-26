const express = require('express')
const authmiddleware = require('../middlewares/authmiddleware')
const { getAllDoctorsController, getAllUsersController,changeAccountStatusController } = require('../controllers/adminCtrl')

const router = express.Router()

router.get('/getAllUsers',authmiddleware,getAllUsersController)

router.get('/getAllDoctors',authmiddleware,getAllDoctorsController)

router.post('/changeAccountStatus',authmiddleware,changeAccountStatusController)

module.exports = router