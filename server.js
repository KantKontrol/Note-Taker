const express = require("express");


let server = express();
const PORT = 8080;


server.use(express.json());
server.use(express.urlencoded({ extended: true }));



//Routes

require("./routes/htmlRoutes")(server);
require("./routes/apiRoutes")(server);


//Start Server
server.listen(PORT, () => {
    console.log("server is listening on port: " + PORT);
});