const { Sequelize } = require('sequelize');

async function connect() {


    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql'
    });

    try {
        await sequelize.authenticate();
        console.log(`Connection to DB ${process.env.DB_NAME} established`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connect();