const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

// similar to defining schema but definign model. similar to mongodb below
// create a folder & coponenet for each table in  a different file with a different define.

const Movie = sequelize.define("Movie", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  actor: {
    type: DataTypes.STRING,
  },
});

module.exports = Movie;
