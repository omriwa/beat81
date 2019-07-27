const express = require('express');
const sensorsRoute = express.Router();
const SensorModel = require('../database/models/sensorModel');
const statusHelper = require('../helpers/requestStatusHelper').statusHelper;

sensorsRoute.post('/:sensor_id', (req, res, next) => {
    const params = req.params;
    const sensorSocket = require('../server').sensorSocket;

    SensorModel.findOneAndUpdate({ sensor_id: params.sensor_id }, { useFindAndModify: true }, (error, sensor) => {
        let e;

        if (error) {
            e = error;
        }
        else if (!sensor) {
            e = 'sensor was not found';
        }
        else {
            SensorModel.find((error, sensors) => {
                console.log(sensors);
                if (error) {
                    sensorSocket.emit('sensorUpdate', [])
                }
                else {
                    sensorSocket.emit('sensorUpdate', sensors)
                }
            });
        }
        statusHelper(req, res, e);
    })
});

module.exports = sensorsRoute;