var express = require("express");
 
var app = express();
app.get("/", function(request, response){
     
    response.send("<h1>Главная страница</h1>");
});
app.get("/2page", function(request, response){
     
    response.send("<h1>2я страница</h1>");
});
app.get("/3page", function(request, response){
     
    response.send("<h1>3я страница</h1>");
});
app.listen(3000);