var express = require('express');
var router = express.Router();

router.get('/', function (req, res){
    var dataFile = req.app.get('appData');
    res.send(dataFile);
});
module.exports = router;