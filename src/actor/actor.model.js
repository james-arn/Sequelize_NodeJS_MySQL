const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Actor = sequelize.define("Actor", {
  actor_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  actor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

//export for app.js file
module.exports = Actor;
