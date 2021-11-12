# Sequelize_NodeJS_MySQL

api requires .env file with MYSQL_URI conneciton string.

CRUD FUNCTIONS

---

CREATE: $ node src/app.js "add" --title="Spiderman" --actor"andrew garfield"
READ: $ node src/app.js "list"
UPDATE: $ node src/app.js $ node src/app.js "update" --updateField="title" --updateValue="Spiderman 2" --filterField="title" --filterValue="Spiderman"
DELETE: $ node src/app.js "delete" --title="Spiderman"
