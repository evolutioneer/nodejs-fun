var winston = require('winston');
var morgan = require('morgan');

//http://stackoverflow.com/questions/27906551/node-js-logging-use-morgan-and-winston

//Configure winston to log to OS with journald
var logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: './logs/all-logs.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880,
      maxFiles: 5,
      colorize: false
    }),
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    })
  ],
  exitOnError: false
});

logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};

//Export, for consumption such as express().use()
module.exports = morgan('combined', {
  stream: logger.stream
});
