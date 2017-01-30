var express = require('express');
var router = express.Router();

router.get('/speakers', function (req, res){
    var info = '';
    var dataFile = req.app.get('appData');
    dataFile.speakers.forEach(function(item) {
        info += `
        <h2>${item.name}</h2>
        <img src="/images/speakers/${item.shortname}_tn.jpg" alt="background"></img>
        <p>${item.summary}</p>
        <script src='/reload/reload.js'></script>
        `;
    });
    res.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <h1>Ram Maradolla1</h1>
    ${info} `);
   // res.send(dataFile);
});
router.get('/speakers/:speakerid', function (req, res){
    var dataFile = req.app.get('appData');
    var item = dataFile.speakers[req.params.speakerid];
    res.send(`
              <link rel="stylesheet" type="text/css" href="/css/style.css">
              <img src="/images/speakers/${item.shortname}_tn.jpg" alt="background"></img>
              <h1>${item.name}</h1>
              <div>${item.summary}</div>
              <script src='/reload/reload.js'></script>
              `);
});

module.exports = router;