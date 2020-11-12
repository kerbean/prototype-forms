//jshint esverion:6

const express = require("express");
const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
//app.use('/', routes)

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.get("/fpc94", function(req, res) {
    res.sendFile(__dirname + "/fpc94.html");
})

app.get("/sw.js", function(req, res) {
    res.sendFile(__dirname + "/sw.js");
})

app.listen(3000, function() {
    console.log("Server is running on port " + "3000");
})