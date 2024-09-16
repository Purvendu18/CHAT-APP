console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/log';

function log(messages)  // Here log is a method
{
    // Send HTTP request
    console.log(messages);  // Here log is a function
}

// module.exports.log = log; //this way of exporting is usefull in case we have multiple methods
module.exports = log;