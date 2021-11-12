const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/connection");
const Actor = require("../actor/actor.model");

// similar to defining schema but definign model. similar to mongodb.
// create a folder & coponenet for each table in  a different file with a different define.
// IF YOU WANT TO EDIT AN EXISTING TABLE... ensure you have the sync below sync section below

const Movie = sequelize.define("Movie", {
  movie_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  actor: {
    //foreign key in Movie table
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Actor.hasOne(Movie);

//export for app.js file
module.exports = Movie;
