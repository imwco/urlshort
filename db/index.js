const { Client } = require('pg');

const dbEnvironment = process.env.DB_ENVIRONMENT || "development";

const client = new Client(require('./dbConfig')[dbEnvironment]);

client.connect();

module.exports = {
    query: (text, params, callback) => {
        return client.query(text, params, callback);
    },
    endConnect: () => client.end()
};