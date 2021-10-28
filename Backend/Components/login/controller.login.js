const brcypt = require("bcrypt"); // password hashing
const uuid = require("uuid");
const dotenv = require('dotenv').config()
const mysql = require("../../db/mysqldb")
const saltRounds = 10;


module.exports = function () {
 const {username, password} = req.body;
 
 const con = await mysql.connection()

 try {
  const userLogin = [username, password];
  let loginId = await con.query("select * from users where username = ?", username)


  if (loginId.length == 0){
      res.status (400).send("id does not exist")
  }

 if (loginId.length > 1) {
  res.status(400).send("more than one id, please check with admin");
 }

   const idv4 = uuid.v4();

 if (bcryptpassword(password, userLogin[0]["password"]) = false) {
   res.status(400).send("wrong password");
 }

accessToken = await signAccessToken(idv4);
refreshToken = await signRefreshToken(idv4);



 res.send ({ accessToken: accessToken, refreshToken : refreshToken, message: "token generated" })

 } catch(e){
  res.status(502).send(e)
 } finally {
   await con.release()
 }



}();

function bcryptpassword(password, Sqlpassword) {
 
  // hashing user's input for password
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) console.log("error hashing");
   hashed = bcrypt.hash(password, salt, function (err, hash) {
      if (err)  console.log("error hashing");
    });
  });

  // compare user's password with hashed value from the database
  bcrypt.compare(Sqlpassword, hashed, function (err, result) { return result});
  

}

// refresh token
function signToken(userId, secretKey, expiresIn) {
  return new Promise((resolve, reject) => {
    const options = {
      expiresIn: expiresIn,
      audience: userId
    };

    jwt.sign({userId:userId}, secretKey, options, (err, token) => {
      if (err) {
        reject({ isError: true, message: "Invalid operation!" });
      } else {
        resolve(token);
      }
    });
  });
}

function signAccessToken(userId) {
  return signToken(userId, process.env.accessToken, "5s");
}

function signRefreshToken(userId) {
  return signToken(userId, process.env.refreshToken, "1h");
}
