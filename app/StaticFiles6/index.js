var express = require('express');
var router = express.Router();

router.get('/', function (req, res){
    var dataFile = req.app.get('appData');
    res.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <h1>Welcome Ram Maradolla9</h1>
        <img src="/images/misc/background.jpg" alt="background" style="height:300px"></img>
            <script src="/reload/reload.js"></script>
    `);

});
module.exports = router;