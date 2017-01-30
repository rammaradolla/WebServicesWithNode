var express = require('express');
var reload = require('reload');
var app = express();
var dataFile = require("../data/data.json");
app.set("port", process.env.PORT || 3000);
app.set("appData", dataFile);

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.header('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.header('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.static('app/public'));
app.use(require('./index.js'));
app.use(require('./speakers.js'));

var server = app.listen(app.get('port'), function(){
    console.log("Listening on port "+app.get('port'));
});

reload(server, app);