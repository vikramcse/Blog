var express = require('express');
var app = express();
var config = require('./config.local.js');

// Use Middleware
app.use(express.static(config.staticFolder));

app.listen(config.port, function() {
    console.log('listening on port ' + config.port);
});