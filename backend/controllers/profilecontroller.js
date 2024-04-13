const db=require('../helpers/database')

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
    //const conn = await db.pool.getConnection();
    const { name, email, password } = req.body;
  //  await conn.query("CREATE TABLE IF NOT EXISTS demo_user.users ( \
    //  id INT NOT NULL AUTO_INCREMENT,\
      //name VARCHAR(255) NOT NULL,\
     // email VARCHAR(255) NOT NULL,\
     // password VARCHAR(255) NOT NULL,\
     // created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\
     // PRIMARY KEY (id))");
//console.log("users table created.")
    const sqlQuery = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;
    const result = await db.pool.query(sqlQuery)
    console.log(result);
    return res
      .status(200)
      .json({ result, message: "User registered successfully" });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getUserprofile,registerUser };
