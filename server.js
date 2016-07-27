var express = require("express")
var path = require("path")
var app = express()

const port = 8080
const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

app.get('/', function(req, res) {
    var guidePath = path.join(__dirname, "index.html")
    res.sendFile(guidePath, function (err) {
        if (err) {
            throw err
        }
        else {
            console.log("Guide sent")
        }
    })
})

app.get('/:date', function(req, res) {
    if (parseInt(req.params.date).toString() == req.params.date) {
       var date = new Date(parseInt(req.params.date) * 1000)
    }
    else {
       var date = new Date(req.params.date)
    }
    var unixDate = Math.floor(date.getTime()/1000)
    var naturalDate = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
    res.json({
        unix: unixDate,
        natural: naturalDate
    })
})


app.listen(port, function() {
    console.log("Listening on port " + port)
})