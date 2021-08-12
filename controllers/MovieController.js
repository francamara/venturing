const express = require('express')
const Movie = require('../models/Movie')
const StatusCodes = require('http-status-codes')
const csv = require('csvtojson')
const path = require('path')
const fs = require('fs')

exports.createMovie = async (req, res) => {

    // 1. check for file 
    if (!req.files) {
        return res.status(StatusCodes.NOT_ACCEPTABLE).json({ message: 'Please provide a valid csv file. No files were uploaded.' })
    }

    // 2. file name and file path
    let file = req.files.movieList
    let uploadPath = path.join('uploads/', file.name)

    // 3. uploads the file to the server
    await file.mv(uploadPath, (err) => {
        if (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err })
        }
    })

    // 4. convert to json & moviesList is an Array
    const moviesList = await csv().fromFile(uploadPath)

    // 5. save in database
    moviesList.forEach(async movie => {
        const movieName = movie.Name
        const movieDescription = movie.Description
        const movieYear = movie.Year

        const movieExists = await Movie.findOne({ where: { name: movieName } })

        if (movieExists) return

        if (!movieExists) {
            try {
                await Movie.create({
                    name: movieName,
                    description: movieDescription,
                    year: movieYear
                })
            } catch (err) {
                return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: 'Cant process entity' })
            }
        }
    })

    fs.unlink(uploadPath, function (err) {
        if (err) throw err
        res.status(StatusCodes.CREATED).json({ message: 'Movie DB updated successfully' })
    })

}


exports.getAllMovies = async (req, res) => {
    const movies = await Movie.findAll()
    res.status(200).json({ message: 'All movies', movies })
}