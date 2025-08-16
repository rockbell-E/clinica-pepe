import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "localhost",   // o el host de tu servidor MySQL
  user: "root",
  password: "",
  database: "clinicapepe",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
