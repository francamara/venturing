const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')


// Calling routes
const movieRoutes = require('./routes/movieRoute')

// Express initial setup
const app = express()

app.use(cors())

app.use(fileUpload())
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

// Mounting routes
app.use('/api/v1/movies', movieRoutes)

module.exports = app