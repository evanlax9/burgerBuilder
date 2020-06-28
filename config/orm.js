var connection = require("./connection.js");

var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT*FROM " + table + ";";
        connection.query(queryString, function (error, result) {
            if (error) {
                throw (error);
            }
            else {
                cb(result);
            }
        })
    }

}

module.exports = orm;