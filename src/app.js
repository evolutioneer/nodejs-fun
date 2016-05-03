var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.post('/post', function(req, res) {
  res.json(req.body);
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
