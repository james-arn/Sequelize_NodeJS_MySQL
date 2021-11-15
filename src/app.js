require("./db/connection");
const yargs = require("yargs");
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
} = require("./movie/movie.methods");

const App = () => {
  let identifier = process.argv[2];
  let movieYargs = { title: yargs.argv.title, rating: yargs.argv.rating };
  //identifier - movies or actor table
  if (identifier == "Actor") {
    movieYargs = { actor: yargs.argv.actor, rating: yargs.argv.rating };
  }

  //action statement on 3.
  if (process.argv[3] == "add") {
    addMovie(identifier, movieYargs);
  } else if (process.argv[3] == "list") {
    listMovies(identifier, movieYargs);
  } else if (process.argv[3] == "update") {
    updateMovie(
      identifier,
      yargs.argv.filterField,
      yargs.argv.filterValue,
      yargs.argv.updateField,
      yargs.argv.updateValue
    );
  } else if (process.argv[3] == "delete") {
    deleteMovie(identifier, movieYargs);
  } else {
    console.log("Incorrect command");
  }
};

App();
