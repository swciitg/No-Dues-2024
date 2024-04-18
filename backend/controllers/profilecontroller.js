const db=require('../helpers/database');

const getUserprofile = async (req, res) => {
  try {
    const id = req.params.id;
    const sqlQuery = `SELECT * FROM users WHERE id = ${id}`;
    // Print list of contacts
    const result = await db.pool.query(sqlQuery);
    return res
      .status(200)
      .json({ message: "User profile fetched successfully", result });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const registerUser = async (req, res) => {
  try {
      const   conn = await db.pool.getConnection();
        await conn.query(`
            CREATE TABLE IF NOT EXISTS user.users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                rollNo VARCHAR(255) NOT NULL UNIQUE,
                program VARCHAR(255) NOT NULL,
                year INT NOT NULL,
                branch VARCHAR(255) NOT NULL,
                accountNo VARCHAR(255),
                IFSC VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
        `);
    const { name, email, rollNo,program,year,branch } = req.body;
//console.log("users table created.")
  const query = `
            INSERT INTO users (name, email, rollNo, program, year, branch, accountNo, IFSC) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [name, email, rollNo, program, year, branch, "1234567890", "ABCD1234"];
    const result = await db.pool.query(query, values);

    console.log(result);
    return res
      .status(200)
      .json({ result, message: "User registered successfully" });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getUserprofile,registerUser };
