var logger = require('./log.js');
var morgan = require('morgan');

//Prepare stream function on logger for morgan
logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};

//Export, for consumption such as express().use()
module.exports = morgan('combined', {
  stream: logger.stream
});
