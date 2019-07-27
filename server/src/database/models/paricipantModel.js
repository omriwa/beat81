const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const participantSchema = new Schema({
    paricipant_id: Schema.Types.ObjectId
});

const participantModel = mongoose.model('Participant', participantSchema);

module.exports = participantModel;