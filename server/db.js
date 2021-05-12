const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'copper12',
    host: 'localhost',
    port: 5421,
    database: 'admin_panel',
});

module.exports = pool;
