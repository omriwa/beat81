const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sensorSchema = new Schema({
    sensorId: Schema.Types.ObjectId,
    is_allocatable: Boolean
});

const SensorModel = mongoose.model('Sensor', sensorSchema);

module.exports = SensorModel;