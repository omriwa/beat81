const mongoose = require('mongoose');
const seedDatabase = require('./seedDatabase').seedDatabase;

const connectToDatabase = async (databaseUrl) => {
    return await mongoose.connect(databaseUrl, { useNewUrlParser: true }, e => {
        if (e) {
            console.log('can not connect to db ', e);
            return false;
        }
        else {
            console.log('connected to db at ', databaseUrl);
            return true;
        }
    })
    .then(connectedToDB => connectedToDB);
}

const initilizeDB = async (databaseUrl) => {
    const connectedToDB = await connectToDatabase(databaseUrl);

    if (connectedToDB) {
        seedDatabase();
    }
}

module.exports = { initilizeDB, connectToDatabase };