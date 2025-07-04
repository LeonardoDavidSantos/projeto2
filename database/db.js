const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'usuario';

async function connect() {
    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = client.db(dbName);
    return { db, client };
}

module.exports = connect;
