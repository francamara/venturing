const express = require('express')

// Calling routes
const movieRoutes = require('./routes/movieRoute')

// Express initial setup
const app = express()

// Mounting routes
app.use('/api/v1/movies', movieRoutes)

module.exports = app