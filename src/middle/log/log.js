var winston = require('winston');

//http://stackoverflow.com/questions/27906551/node-js-logging-use-morgan-and-winston

//Configure and export winston to log to my local log file and optionally to console
module.exports = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: './logs/all-logs.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880,
      maxFiles: 5,
      colorize: false
    })/*,
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    })*/
  ],
  exitOnError: false
});
