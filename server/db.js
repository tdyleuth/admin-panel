const { Client } = require('pg');
const DATABASE_URL =
    process.env.DATABASE_URL || 'postgres://localhost:5432/admin_panel';
const client = new Client(DATABASE_URL);
client.connect();

module.exports = client;
