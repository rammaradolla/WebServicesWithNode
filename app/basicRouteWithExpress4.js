var express = require('express');
var app = express();
var dataFile = require("./data/data.json");
app.set("port", process.env.PORT || 3000);
app.get('/', function (req, res){
    res.send(`<h1>Welcome Ram Maradolla1</h1>`);
});
app.get('/speakers', function (req, res){
    var info = '';
    dataFile.speakers.forEach(function(item) {
        info += `
        <h2>${item.name}</h2>
        <p>${item.summary}</p>
        `;
    });
    res.send(`<h1>Ram Maradolla1</h1>
    ${info} `);
});
app.get('/speakers/:speakerid', function (req, res){
    var item = dataFile.speakers[req.params.speakerid];
    res.send(`<h1>${item.name}</h1>`);
});

var server = app.listen(app.get('port'), function(){
    console.log("Listening on port "+app.get('port'));
});