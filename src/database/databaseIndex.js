const mongoose = require('mongoose');
const seedDatabase = require('./seedDatabase');

const connectToDatabase = (databaseUrl) => {
    return new Promise((res, rej) => {
        mongoose.connect(databaseUrl, { useNewUrlParser: true }, e => {
            if (e) {
                console.log('can not connect to db ', e);
                rej(false);
            }
            else {
                console.log('connected to db at ', databaseUrl);
                res(true);
            }
        });
    })
        .then(connectedToDB => connectedToDB);
}

const initilizeDB = async (databaseUrl) => {
    const connectedToDB = await connectToDatabase(databaseUrl);

    if (connectedToDB) {
        seedDatabase();
    }
}

module.exports = { initilizeDB };