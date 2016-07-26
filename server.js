var express = require("express")
var app = express()

const port = 8080

app.get('/', function(req, res) {
    res.send("Hello World!")
})

app.listen(port, function() {
    console.log("listening on port: " + port)
})