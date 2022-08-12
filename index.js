const logEvents = require("./LogFile")

const eventEmitter = require("events")


class MyEmitter extends eventEmitter { };

const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) => logEvents(msg))

setTimeout(() => {
    myEmitter.emit('log', "log time emitted");
}, 2000);
