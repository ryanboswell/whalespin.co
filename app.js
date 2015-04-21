var express = require('express');
var app = express();

// Routes
var index = require('./routes/index');

// Setup Express app
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.use('/', index);

app.listen(app.get('port'), function() {
  console.log("whalespin is now running.");
});
