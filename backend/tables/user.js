const { db } = require("../helpers/database");

async function createTable() {
    let conn;
    try {
        conn = await db.pool.getConnection();
        // SQL query to create the table
        await conn.query(`
            CREATE TABLE IF NOT EXISTS user.users (
                id INT AUTO_INCREMENT PRIMARY KEY,\
                name VARCHAR(255) NOT NULL,\
                email VARCHAR(255) NOT NULL UNIQUE,\
                rollNo VARCHAR(255) NOT NULL UNIQUE,\
                program VARCHAR(255) NOT NULL,\
                year INT NOT NULL,\
                branch VARCHAR(255) NOT NULL,\
                accountNo VARCHAR(255),\
                IFSC VARCHAR(255),\
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('Table users created successfully');
    } catch (err) {
        console.error('Error creating table:', err);
    } finally {
        if (conn) conn.release(); // Release the connection back to the pool
    }
}

module.exports={createTable}
