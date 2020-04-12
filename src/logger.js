const winston = require('winston')

module.exports = new winston.loggers({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({
            name: 'info-file',
            filename: 'optlog-info.log',
            level: 'info'
        }),
        new (winston.transports.File)({
            name: 'error-file',
            filename: 'optlog-error.log',
            level: error
        })
    ]
});