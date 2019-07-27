const express = require('express');
const server = express();
const allocationRoute = require('./route/allocationRoute');
const sensorsRoute = require('./route/sensorsRoute');
const database = require('./database/databaseIndex');
const config = require('../config.json');
const cors = require('cors');

// CONFIGURATION
server.use(express.json());
server.use(cors());

// ROUTES
server.get('/', (req, res) => {
    res.status(200);
    res.end();
});
server.use('/allocations', allocationRoute);
server.use('/sensors', sensorsRoute);

// LISTENING & DATABASE
server.listen(config.serverPort, e => {
    if (e) {
        console.log(`could not listen on ${config.serverPort}`);
    }
    else {
        const databaseUrl = `mongodb://${config.dbUsername}:${config.dbPassword}@ds153947.mlab.com:53947/beat81`

        console.log(`listen on ${config.serverPort}`);
        database.initilizeDB(databaseUrl);
    }
});
