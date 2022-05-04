import mysql from "mysql2";
import credentials from './credentials.js'
const connection  = mysql.createConnection({
    host: "localhost",
    database : "ForterPets",
    ...credentials
}).promise();

export default connection;