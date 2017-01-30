var express = require('express');
var app = express();
var dataFile = require("../data/data.json");
app.set("port", process.env.PORT || 3000);
app.set("appData", dataFile);


app.use(require('./index.js'));
app.use(require('./speakers.js'));

var server = app.listen(app.get('port'), function(){
    console.log("Listening on port "+app.get('port'));
});