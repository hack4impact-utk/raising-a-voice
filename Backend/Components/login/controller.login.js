const brcypt = require("bcrypt"); // password hashing
const uuid = require("uuid");
const mysql = require("../../db/mysqldb")
const saltRounds = 10;

module.exports = (function () {
 const {username, password, email} = req.body;
 
 const con = await mysql.connection()

 try {
  let loginProfile = await con.query("selection id from profiles")
 } catch(e){
  res.status(502).send(e)
 } finally {

 }

  if (loginCheck == false) {
    function login(req, res, next) {
      res.status(401).json({
        app: "Raising a Voice",
        version: "1.0.0",
        status: "OK",
      });
    }
  }

  // if true signToken issued and page returns 200
  if (loginCheck == true) {
    signToken();
    function login(req, res, next) {
      res.status(200).json({
        app: "Raising a Voice",
        version: "1.0.0",
        status: "OK",
      });
    }
  }

  return {
    login: login,
  };
})();

function loginCheck(id, password, role) {
  var user = this;
  //uuid?

  // hashing user's input for password
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) return next(err);
    });
  });

  // compare user's password with hashed value from the Moongoose
  bcrypt.compare(user.password, hash, function (err, result) {});
  if (result == false) {
    return false;
  }

  if (role == "admin") {
    user.role == "admin";
  } else if (role == "intern") {
    user.role == "intern";
  } else if (role == "staff") {
    user.role == "staff";
  }
}

// refresh token
function signToken(userId, secretKey, expiresIn) {
  return new Promise((resolve, reject) => {
    const options = {
      expiresIn: expiresIn,
      issuer: "rav.com",
      audience: userId,
    };

    jwt.sign({}, secretKey, options, (err, token) => {
      if (err) {
        reject({ isError: true, message: "Invalid operation!" });
      } else {
        resolve(token);
      }
    });
  });
}

function signAccessToken(userId) {
  return signToken(userId, "accessTokenSecretKey", "1h");
}

function signRefreshToken(userId) {
  return signToken(userId, "refreshTokenSecretKey", "60d");
}

async function reIssueTokens(refreshToken) {
  const payload = await verifyRefreshToken(refreshToken);
  const userId = payload.aud;

  let userToken = await UserToken.find({ user: userId })
    .sort({ createdAt: -1 })
    .limit(1);

  userToken = userToken[0];
  if (!userToken) throw { isError: true, message: "User token does not exist" };
  if (userToken.refreshToken !== refreshToken)
    throw { isError: true, message: "Old token. Not valid anymore." };

  const [accessToken, refToken] = await Promise.all([
    signAccessToken(userId),
    signRefreshToken(userId),
  ]);

  await UserToken.findOneAndUpdate(
    { _id: userToken._id },
    { $set: { refreshToken: refToken } }
  );

  return { accessToken: accessToken, refreshToken: refToken };
}
