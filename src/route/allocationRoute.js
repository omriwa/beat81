const express = require('express');
const allocationRoute = express.Router();
const statusHelper = require('../helpers/requestStatusHelper').statusHelper;
const WorkoutModel = require('../database/models/workoutModel');
const ParticipantModel = require('../database/models/paricipantModel');

allocationRoute.get('/:workout_id', (req, res, next) => {
    const params = req.params;
    const query = WorkoutModel.where({ req: params.workout_id });

    query.findOne((error, allocation) => {
        statusHelper(req, res, error, allocation);
    });
});

allocationRoute.post('/', (req, res, next) => {
    const allocation = req.body.allocation;
    const condition = { workout_id: allocation.workout_id };
    const options = { useFindAndModify: true };

    // find all participants
    ParticipantModel.find(allocation.participants, (error, participants) => {
        const change = { participants };
        // find the workout and update participants
        if (participants && !error) {
            WorkoutModel.findOne(condition, change, options, (error, foundAllocation) => {
                // update if found
                if (foundAllocation) {
                    console.log(`found and change allocation-${req.originalUrl}`);
                }
                // else create allocation
                else if (!error) {
                    WorkoutModel.create(allocations, (error) => {
                        if (error) {
                            console.log('allocation created and saved', allocation);
                        }
                        statusHelper(req, res, error);
                    });
                }
                statusHelper(req, res, error);
            });
        }
        else {
            statusHelper(req, res, !participants ? 'participants were not found' : e);
        }
    });

    
});


module.exports = allocationRoute;