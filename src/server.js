const express = require('express');
const app = express();
const server = require('http').Server(app);
const allocationRoute = require('./route/allocationRoute');
const sensorsRoute = require('./route/sensorsRoute');
const database = require('./database/databaseIndex');
const config = require('../config.json');
const cors = require('cors');
const sensorSocket = require('./socket/sensorsSocket').initSensorSocket(server);

// CONFIGURATION
app.use(express.json());
app.use(cors());

// ROUTES
app.get('/', (req, res) => {
    res.status(200);
    res.end();
});
app.use('/allocations', allocationRoute);
app.use('/sensors', sensorsRoute);

// LISTENING & DATABASE
app.listen(config.serverPort, e => {
    if (e) {
        console.log(`could not listen on ${config.serverPort}`);
    }
    else {
        const databaseUrl = `mongodb://${config.dbUsername}:${config.dbPassword}@ds153947.mlab.com:53947/beat81`

        console.log(`listen on ${config.serverPort}`);
        database.initilizeDB(databaseUrl);
    }
});

module.exports = { sensorSocket };