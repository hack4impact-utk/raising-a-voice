const bcrypt = require("bcrypt"); // password hashing
const { createPoolCluster } = require("mysql");
const uuid = require("uuid");
const dotenv = require("dotenv").config();
const mysql = require("../../db/mysqldb");
("use strict");
const saltRounds = 10;
//$2b$10$Zsj.r.IQSGu7zQWlv9ayK.7P5gnWpZ9Lr.kjDrLnroj6WUzNSsfEG
module.exports = (function () {
  function root(req, res, next) {
    const id = "Bob";
    const password = "Bob";
    
    console.log("oooo");

    try {
      const loginId = [0];

      console.log("1111");

       // userLogin = callUser;
      if (loginId.length == 0) {
        res.status(400).send("id does not exist");
      }

      if (loginId.length > 1) {
        res.status(400).send("more than one id, please check with admin");
      }

      if (bcryptpassword(password, userLogin[0]["password"]) == false) {
        res.status(400).send("wrong password");
      }

      const idv4 = uuid.v4();

      accessToken = signAccessToken(idv4);
      refreshToken = signRefreshToken(idv4);

      res.send({
        accessToken: accessToken,
        refreshToken: refreshToken,
        message: "token generated",
      });
    } catch (error) {
      console.log(error)
      res.status(502).send(e);
    } finally {
      //await con.release();
    }
  }

  return {
    root: root,
  };
})();

function bcryptpassword(password, Sqlpassword) {
  // compare user's password with hashed value from the database

  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) console.log("error hashing");

    bcrypt.compare(password, Sqlpassword, function (err, result) {
      // console.log(result);
      return result;
    });
  });
}

// refresh token
function signToken(userId, secretKey, expiresIn) {
  return new Promise((resolve, reject) => {
    const options = {
      expiresIn: expiresIn,
      audience: userId,
    };

    jwt.sign({ userId: userId }, secretKey, options, (err, token) => {
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

async function callUser() {
  console.log("oooo");
  const con = await mysql.connection();
  let loginID = await con.query(
    "select * from users where username = ?",
    username
  );
  return loginID;
}
