const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ParticipantModel = require('./paricipantModel');

const workoutSchema = new Schema({
    workout_id: Schema.Types.ObjectId,
    participants: [{ type: Schema.Types.ObjectId, ref: 'Participant' }]
});

const workoutModel = mongoose.model('Workout', workoutSchema);

module.exports = workoutModel;