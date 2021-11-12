const Movie = require("./movie.model");
// this is where it massively differs from mongo.db. we need to create the table first and tell it to do this.

//CRUD function - then use in app.js.
//CREATE - SAME AS INSERT INTO
exports.addMovie = async (movieObj) => {
  try {
    await Movie.sync(); //sync creates the table if it doesn't exist.
    await Movie.create(movieObj); //VSC auto-suggest shows what you can have. look simialr then check docs.
    console.log("Movie added to database");
  } catch (error) {
    console.log(error);
  }
};

//READ - SAME AS SELECT * FROM ..
exports.listMovies = async () => {
  try {
    const movieList = await Movie.findAll(); //variable where funciton works
    console.log("All Movies:", JSON.stringify(movieList, null, 2)); //logs variable and JSOn turns into string with only necassary info.
  } catch (error) {
    console.log(error);
  }
};

//UPDATE
exports.updateMovie = async (
  filterField,
  filterValue,
  updateField,
  updateValue
) => {
  try {
    await Movie.update(
      { [updateField]: updateValue },
      { where: { [filterField]: filterValue } }
    );
    console.log("Movie update complete");
  } catch (error) {
    console.log(error);
  }
};

//DELETE
exports.deleteMovie = async (movieObj) => {
  try {
    await Movie.destroy({ where: { title: movieObj.title } });
    console.log("Movie removed from database");
  } catch (error) {
    console.log(error);
  }
};
