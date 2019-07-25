const express = require('express');
const server = express();
const allocationRoute = require('./routes/allocationRoute');
const sensorsRoute = require('./routes/sensorsRoute');
const PORT = 8080;
const database = require('./database/databaseIndex');

// CONFIGURATION
server.use(express.json());

// ROUTES
server.use('/allocations', allocationRoute);
server.use('/sensors', sensorsRoute);

// LISTENNING
server.listen(PORT, e => {
    if (e) {
        console.log(`could not listen on ${PORT}`);
    }
    else {
        const databaseUrl =  'mongodb://beat81:beat81@ds153947.mlab.com:53947/beat81'

        console.log(`listen on ${PORT}`);
        database.connectToDatabase(databaseUrl);
    }
});