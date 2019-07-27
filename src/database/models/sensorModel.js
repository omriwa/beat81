const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sensorSchema = new Schema({
    sensorId: Schema.Types.ObjectId,
    is_allocatable: false
});

const SensorModel = mongoose.model('Sensor', sensorSchema);

module.exports = SensorModel;