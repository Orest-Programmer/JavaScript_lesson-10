let express = require("express");
let bodyParser = require("body-parser");

let server = express();
let jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function (request, response) {
    console.log(request.body);
    // response.send("You have succesfully used method Get: " + JSON.stringify(request.body));
    response.send("<h1>Hello1</h2>");
});

server.get("/userGet", function(request, response){
    console.log(request.query);

    response.send("You have succesfully used method Get: " + JSON.stringify(request.query));
});

server.post("/userPost", function (request, response) {
    console.log(request.body);
    
    response.send("You have succesfully used method POST: " + JSON.stringify(request.body));
});

server.listen(3000);