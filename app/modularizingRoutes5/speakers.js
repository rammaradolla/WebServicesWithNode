var express = require('express');
var router = express.Router();

router.get('/speakers', function (req, res){
    var info = '';
    var dataFile = req.app.get('appData');
    dataFile.speakers.forEach(function(item) {
        info += `
        <h2>${item.name}</h2>
        <p>${item.summary}</p>
        `;
    });
    res.send(`<h1>Ram Maradolla1</h1>
    ${info} `);
   // res.send(dataFile);
});
router.get('/speakers/:speakerid', function (req, res){
    var dataFile = req.app.get('appData');
    var item = dataFile.speakers[req.params.speakerid];
    res.send(`<h1>${item.name}</h1>
              <div>${item.summary}</div>`);
});

module.exports = router;