const express = require('express');
const server = express();
const allocationRoute = require('./routes/allocationRoute');
const sensorsRoute = require('./routes/sensorsRoute');
const PORT = 8080;

// ROUTES
server.use('/allocations', allocationRoute);
server.use('/sensors', sensorsRoute);

// LISTENNING

server.listen(PORT, e => {
    if (e) {
        console.log(`could not listen on ${PORT}`);
    }
    else {
        console.log(`listen on ${PORT}`);
    }
});