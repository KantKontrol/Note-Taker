const db = require("../db/db.json");

module.exports = function(server){

    server.get("/api/notes", (req, res) => {

            res.json(db);
    });

    server.post("/api/notes", (req, res) => {

        let incomingData = req.body;

        db.push(incomingData);

        res.json(incomingData);

    });
}