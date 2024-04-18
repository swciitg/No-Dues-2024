
const mariadb = require('mariadb');

// Expose the Pool object within this module
module.exports = Object.freeze({
    pool: mariadb.createPool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,

    })
});