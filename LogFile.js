const { format } = require("date-fns")
const { v4:uuid } = require("uuid")

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
const { builtinModules } = require("module");
const logPath = path.join(__dirname, "logs", "events.txt")

const eventLog = async (message) => {
    const datatime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
    const logItem = `${datatime}\t${uuid()}\t${message}\n`;
    console.log(logItem);

    try{
        if (!fs.existsSync(path.join(__dirname, "logs"))){
            await fsPromises.mkdir(path.join(__dirname, "logs"))
        }
        await fsPromises.appendFile(logPath, logItem);
    }catch (err) {
        console.log(err);
    }
}

module.exports = eventLog;