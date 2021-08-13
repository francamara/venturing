const express = require('express')
const MovieController = require('../controllers/MovieController')

const router = express.Router()

router.route('/').get(MovieController.getAllMovies)
router.route('/csv').post(MovieController.createMovieCSV)
router.route('/manual').post(MovieController.createMovieManual)

module.exports = router
