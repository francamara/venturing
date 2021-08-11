const dotenv = require('dotenv').config()
const { Sequelize } = require('sequelize')
const db = require('./database/db')
const app = require('./index')

const port = process.env.APP_PORT || 5000


app.listen(port, () => {
    console.log('\x1b[36m%s\x1b[0m', `App listening at http://localhost:${port}`)
})

