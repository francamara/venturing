const express = require('express')
const Movie = require('../models/Movie')

exports.getAllMovies = async (req, res) => {
    const movies = await Movie.findAll()
    res.status(200).json({ message: 'All movies', movies })
}
