//creates connection to database
const { Sequelize } = require("sequelize"); //allows us to connect to database.
require("dotenv").config();

//uses conneciton to affect databse

const sequelize = new Sequelize(process.env.MYSQL_URI); // like the collection variable in mongodb.

//tests the connection
try {
  sequelize.authenticate();
} catch (error) {
  console.log(error);
}
//exports the connection
module.exports = sequelize;
