//Movie Schema
module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
        name: DataTypes.STRING,
        description: DataTypes.string,
        year: DataTypes.number,
        created_at: DataTypes.datetime,
    });

    return Movie;
}