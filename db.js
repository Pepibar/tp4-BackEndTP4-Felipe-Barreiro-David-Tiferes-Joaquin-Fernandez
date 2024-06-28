import mysql from "mysql2/promise";

export const conn = await mysql.createConnection({
    // Completar con los datos de la conexión a la base de datos
    user: "FELIPE",
    password: "123",
    host: "localhost",
    database: "tp4",
});