const express = require('express');
const sensorsRoute = express.Router();

sensorsRoute.post('/:sensor_id', (req, res, next) => {
    res.send('sensor');
});

module.exports = sensorsRoute;