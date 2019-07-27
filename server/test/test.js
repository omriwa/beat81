const axios = require('axios');
const config = require('../config.json');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const requestStatusHelper = require('../src/helpers/requestStatusHelper');
const isModelEmpty = require('../src/database/seedDatabase').isModelEmpty;
const connectToDatabase = require('../src/database/databaseIndex').connectToDatabase;

describe('server is listening and connected to db', () => {
    it('server listen', () => {
        axios.get(`http://localhost:${config.serverPort}`)
            .then(result => expect(result.status).to.equal(200))
            .catch(e => console.log(e));
    });

    it('server is connected to db', async () => {
        const databaseUrl = `mongodb://${config.dbUsername}:${config.dbPassword}@ds153947.mlab.com:53947/beat81`
        const connected = await connectToDatabase(databaseUrl);

        expect(connected).to.be.not.false;
    });
});

describe('statusHelper works', () => {
    const statusHelper = requestStatusHelper.statusHelper;
    let status = 0;
    let data;
    const req = {
        originalUrl: 'samp',
        method: 'get'
    }
    const res = {

        status: s => { status = s },
        end: () => { },
        send: d => { data = d },
    }
    it('error works', () => {
        statusHelper(req, res, 'error');
        expect(status).to.be.equal(500)
    });

    it('sending data works', () => {
        statusHelper(req, res, null, {});
        expect(data).to.be.not.false;
    });
});

describe('seed', () => {
    it('isModelEmpty working', (done) => {
        isModelEmpty('sensors', (error) => {
            expect(error).to.be.null;
            assert(true, false);
            expect(true).to.be.false;
            done();
        },
            () => {               
                expect(true).to.be.true;
                done();
            }
        )
    })
});