const express = require('express')
const MovieController = require('../controllers/MovieController')

const router = express.Router()

router.route('/').get(MovieController.getAllMovies)
router.route('/').post(MovieController.createMovie)

module.exports = router