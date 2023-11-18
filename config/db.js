const mysql = require("mysql");

const db = mysql.createConnection ({
    host: "zsdb.cyuneuzt8qcx.ap-northeast-2.rds.amazonaws.com",
    user: "root",
    password: "System2000",
    database: "zsdb"
});

db.connect();

module.exports = db;