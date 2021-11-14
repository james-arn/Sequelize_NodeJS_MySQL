# Sequelize_NodeJS_MySQL

api requires .env file with MYSQL_URI conneciton string.

CRUD FUNCTIONS
note: "Movie" can be replaced with "Actor" - 1st word chooses table.

---

CREATE: $ node src/app.js "Movie" "add" --title="Skyfall" --actor="daniel craig"
READ: $ node src/app.js "Movie" "list"
UPDATE: $ node src/app.js "Movie" "update" --updateField="title" --updateValue="Spiderman 2" --filterField="title" --filterValue="Skyfall"
DELETE: $ node src/app.js "delete" --title="Spiderman"
