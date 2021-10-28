const brcypt = require("bcrypt"); // password hashing
const uuid = require("uuid");
const dotenv = require('dotenv').config()
const mysql = require("../../db/mysqldb")
const saltRounds = 10;

module.exports = (function () {
 const {username, password} = req.body;
 
 const con = await mysql.connection()

 try {
  const userLogin = [username, password];
  let loginId = await con.query("select * from users where username = ?", username)


   if (loginId.length = 0){
  res.status (400).send(e)
 }

 if (loginId.length > 1) {
  res.status(400).send(e);
 }


 } catch(e){
  res.status(502).send(e)
 } finally {
   await con.release
 }





 const idv4 = uuid.v4();

 if (bryptpassword(password, userLogin[0]["password"]) = false) {
   res.status(400).send("wrong password");
 }

 await signAccessToken(idv4);


    function login(req, res, next) {
      res.status(200).json({
        app: "Raising a Voice",
        version: "1.0.0",
        status: "OK",
      });}

  return {
    login: login,
  };


})();

function bryptpassword(password, Sqlpassword) {
 
  // hashing user's input for password
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) console.log("error hashing");
    bcrypt.hash(password, salt, function (err, hash) {
      if (err)  console.log("error hashing");
    });
  });

  // compare user's password with hashed value from the database
  bcrypt.compare(Sqlpassword, hash, function (err, result) {});
  if (result == false) {
    return false;
  } else {
   return true;
  }

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
