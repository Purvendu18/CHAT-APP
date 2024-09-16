
var logger = require('./logger');

logger('Names');
// Logger.log('Names'); // this is useful in case of multiple methods

const EventEmitter = require('events');
const emitter = new EventEmitter();
//Listner calling
emitter.on('messages' , function() {
    console.log('Message Received');
})
//Creating event
emitter.emit('messages');