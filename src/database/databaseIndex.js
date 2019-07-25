const mongoose = require('mongoose');

const connectToDatabase = (databaseUrl) => {
    mongoose.connect(databaseUrl, { useNewUrlParser: true }, e => {
        if (e) {
            console.log('can not connect to db ', e);
        }
        else {
            console.log('connected to db at ', databaseUrl);
        }
    });
}

const initilizeDB = (databaseUrl) => {
    connectToDatabase(databaseUrl);
}

module.exports = { initilizeDB };