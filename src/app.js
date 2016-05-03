var app = require('express')();
var bodyParser = require('body-parser');

//--- Configure express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//--- Configure middleware
app.use(require('./middle/log/log.js'));

//--- Build application
app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.post('/post', function(req, res) {
  res.json(req.body);
});

app.use('/birds', require('./move/move.js'));

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
