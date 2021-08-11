// const fs = require('fs');
const dotenv = require('dotenv').config()
const { Sequelize } = require('sequelize')

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql'
    }
)

async function connect() {
    try {
        await db.authenticate();
        console.log('\x1b[36m%s\x1b[0m', `Connection to DB ${process.env.DB_NAME} established`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connect()

module.exports = db