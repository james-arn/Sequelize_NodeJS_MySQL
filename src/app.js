require("./db/connection");
const yargs = require("yargs");
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
} = require("./movie/movie.methods");

const App = () => {
  let movieYargs = { title: yargs.argv.title, actor: yargs.argv.actor };
  if (process.argv[2] == "add") {
    addMovie(movieYargs);
  } else if (process.argv[2] == "list") {
    listMovies(movieYargs);
  } else if (process.argv[2] == "update") {
    updateMovie(
      yargs.argv.filterField,
      yargs.argv.filterValue,
      yargs.argv.updateField,
      yargs.argv.updateValue
    );
  } else if (process.argv[2] == "delete") {
    deleteMovie(movieYargs);
  } else {
    console.log("Incorrect command");
  }
};

App();
