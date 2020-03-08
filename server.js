const express = require("express");


let server = express();
const PORT = process.env.PORT || 8080;


//For Handling data and sending html
server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


//Routes
require("./routes/apiRoutes")(server);
require("./routes/htmlRoutes")(server);


//Start Server
server.listen(PORT, () => {
    console.log("server is listening on port: " + PORT);
});