const mongoose = require('mongoose');
const ParticipantModel = require('./models/paricipantModel');
const SensorModel = require('./models/sensorModel');
const WorkoutModel = require('./models/workoutModel');

const isModelInDb = (name,callback) => {
    const connection = mongoose.connection;

    if (connection.db) {
        connection.db.listCollections({ name }).next((e, collection) => {
            if (!collection) {
                callback();
            }
        });
    }
}

const seedDatabase = async () => {
    const participants = [
        new ParticipantModel(),
        new ParticipantModel(),
        new ParticipantModel()
    ];
    const sensors = [
        new SensorModel(),
        new SensorModel(),
        new SensorModel()
    ];
    const savedCallback = error => {
        if (error) {
            console.log('error on save', error);
        }
    };

    console.log('seeding DB');
    // seed participants
    isModelInDb('participants', () => {
        console.log('seed Participant');
        participants.forEach(participant => { participant.save(savedCallback) });
    });
    // seed sensors
    isModelInDb('sensors', () => {
        console.log('seed Sensor');
        sensors.forEach(sensor => { sensor.save(savedCallback) });
    });
    // seed workout
    isModelInDb('workouts', () => {
        console.log('seed Workout');
        WorkoutModel.create({ participants }, savedCallback);
    });
}

module.exports = seedDatabase;