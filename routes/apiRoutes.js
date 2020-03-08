const db = require("../db/db.json");

module.exports = function(server){

    server.get("/api/notes", (req, res) => {

            res.json(db);
    });
}