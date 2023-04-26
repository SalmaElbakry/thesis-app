import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Thesis.salma24",
  database: "thesis",
  port:"8000"
});
