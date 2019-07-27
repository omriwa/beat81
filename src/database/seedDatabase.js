const mongoose = require('mongoose');
const ParticipantModel = require('./models/paricipantModel');
const SensorModel = require('./models/sensorModel');
const WorkoutModel = require('./models/workoutModel');

const isModelEmpty = async (name, callback) => {
    const connection = mongoose.connection;

    if (connection.db) {
        await connection.db.listCollections({ name }).next((error, collection) => {
            if (!collection) {
                callback(error);
            }
        });


    }
}

const savedCallback = error => {
    if (error) {
        console.log('error on save', error);
    }
};

const seedParticipants = participants => {
    // seed participants
    console.log('seedind Participant');
        participants.forEach(async participant => { await participant.save(savedCallback) });
    console.log('seeded Participant');
};

const seedSensors = sensors => {
    // seed sensors
    console.log('seeding Sensor');
    sensors.forEach(async sensor => { await sensor.save(savedCallback) });
    console.log('seeded Sensor');
};

const seedWorkout = async (participants) => {
    // seed workout
    console.log('seeding Workout');
    await WorkoutModel.create({ participants }, savedCallback);
    console.log('seeded Workout');
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

    console.log('seeding DB');
    isModelEmpty('participants', () => seedParticipants(participants));
    isModelEmpty('sensors', () => seedSensors(sensors));
    isModelEmpty('workouts', () => seedWorkout(participants).then(() => console.log('seeding end')));
}

module.exports = seedDatabase;