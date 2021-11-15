const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

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
  rating: {
    //foreign key in Movie table
    type: DataTypes.INTEGER,
  },
});

const Actor = sequelize.define("Actor", {
  Actor_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  actor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    //foreign key in Movie table
    type: DataTypes.INTEGER,
  },
});

// Actor.belongsTo(Movie);

//export for app.js file
module.exports = { Movie, Actor };
