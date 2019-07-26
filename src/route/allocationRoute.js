const express = require('express');
const allocationRoute = express.Router();
const statusHelper = require('../helpers/requestStatusHelper').statusHelper;
const WorkoutModel = require('../database/models/workoutModel');

allocationRoute.get('/:workout_id', (req, res, next) => {
    //const query = workoutmodel.where({ req: req.params.workout_id });

    //query.findone((error, allocation) => {
    //    statushelper(req, res, error, allocation);
    //});
});

allocationRoute.post('/', (req, res, next) => {
    statusHelper(req, res);
});


module.exports = allocationRoute;