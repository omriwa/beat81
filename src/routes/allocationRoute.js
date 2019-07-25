const express = require('express');
const allocationRoute = express.Router();

allocationRoute.get('/:workout_id', (req, res, next) => {
    res.send('get allocations');
});

allocationRoute.post('/',(req, res, next) => {
    res.send('post allocations');
});


module.exports = allocationRoute;