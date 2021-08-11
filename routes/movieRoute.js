const express = require('express')
const movieController = require('../controllers/MovieController')

const router = express.Router()

router.route('/').get(movieController.getAllMovies)

module.exports = router