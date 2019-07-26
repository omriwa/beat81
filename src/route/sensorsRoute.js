const express = require('express');
const sensorsRoute = express.Router();
const SensorModel = require('../database/models/sensorModel');
const statusHelper = require('../helpers/requestStatusHelper').statusHelper;

sensorsRoute.post('/:sensor_id', (req, res, next) => {
    const params = req.params;

    SensorModel.findOneAndUpdate({ sensor_id: params.sensor_id }, { useFindAndModify: true }, (error, sensor) => {
        let e;

        if (error) {
            e = error;
        }
        else if (!sensor) {
            e = 'sensor was not found';
        }
        statusHelper(req, res, e);
    })
});

module.exports = sensorsRoute;