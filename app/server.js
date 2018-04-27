//Dependencies:
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

<<<<<<< HEAD
//ROUTER
require('./app/routes/apiRoutes.js')(app); 
require('./app/routes/htmlRoutes.js')(app);
=======
// Different modules needed for API routes and HTML routes
require('routes/apiRoutes.js')(app); 
require('routes/htmlRoutes.js')(app);
>>>>>>> f13ff79ecbba0bc4ce100d67b801228d28b1ffe8

// Starts the server to begin listening
app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});