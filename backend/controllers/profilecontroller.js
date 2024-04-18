const db=require('../helpers/database');

const getUserprofile = async (req, res) => {
  try {
    const email = req.params.email;
    const sqlQuery = `SELECT * FROM user.users WHERE email LIKE '%${email}%'`;
    const result = await db.pool.query(sqlQuery);
    return res.status(200).json({ message: "User found successfully", result });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const registerUser = async (req, res) => {
  try {
    console.log("getting connection")
  const conn=  await db.pool.getConnection();
      //         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)
      console.log("connection established")
      
      await conn.query("CREATE TABLE IF NOT EXISTS user.users ( \
        id INT(11) unsigned NOT NULL AUTO_INCREMENT, \
        name VARCHAR(50) NOT NULL, \
        rollNo VARCHAR(50) NOT NULL, \
        email VARCHAR(75), \
        program VARCHAR(75), \
        hostel VARCHAR(75), \
        roomNo VARCHAR(75), \
        branch VARCHAR(75), \
        contactNo VARCHAR(75), \
        accountNo VARCHAR(75), \
        IFSC VARCHAR(75), \
        PRIMARY KEY (id))");
                
        console.log("users table created.")
        const { name, email, rollNo,program,hostel,roomNo,branch,contactNo,accountNo,IFSC } = req.body;
        const values = [name, email, rollNo,program,hostel,roomNo,branch,contactNo,accountNo,IFSC];
        const sqlQuery="INSERT INTO user.users (name, email, rollNo, program, hostel, roomNo, branch, contactNo, accountNo, IFSC) VALUES (?,?,?,?,?,?,?,?,?,?)"
        const result = await conn.query(sqlQuery, values);
        console.log(result);
    // const values = [name, email, rollNo, program, year, branch, "1234567890", "ABCD1234"];
    // const result = await db.pool.query("INSERT INTO users (name, email, rollNo, program, year, branch, accountNo, IFSC) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", values);

    // console.log(result);
    return res
      .status(200)
      .json({  message: "User registered successfully" });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getUserprofile,registerUser };