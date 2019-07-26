const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const allocationSchema = new Schema({
    user_id: Schema.Types.ObjectId,
    sensor_id: { type: Schema.Types.ObjectId, ref: 'Sensor'},
    sensor_is_user_property: Boolean,
    created_at: Date,
    updated_at: Date
});

const AllocationModel = mongoose.model('Allocation', allocationSchema);

module.exports = AllocationModel;