var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date();
    currentTime.setTimezone("America/Toronto");
    callback(null, {
        statusCode: '200',
        body: 'The time in Toronto is: ' + currentTime.toString(),
    });
};
