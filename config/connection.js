var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
    connection = mysql.createConnection({
        host: "localhost",
        port = 8889,
        user: "root",
        password: "root",
        database: "burgers_db"
    })

    connection.connect(function (error) {
        if (error) {
            console.log("error connecting" + error.stack)
            return
        }
        else {
            console.log("connected")

        }
    })
}
module.exports = connection