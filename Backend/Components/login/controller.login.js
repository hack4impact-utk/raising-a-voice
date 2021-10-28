const brcypt = require("bcrypt"); // password hashing
const uuid = require("uuid");
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
   
 }





 const id = uuid.v4();

 if (bryptpassword(password, userLogin[0]["password"]) = false) {
   res.status(400).send("wrong password");
 }

  signToken(id,secretKey ,"5s" ); // idk what secretkey is supposed to be
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
    if (err) return next(err);
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) return next(err);
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
  return signToken(userId, "accessTokenSecretKey", "5s");
}

function signRefreshToken(userId) {
  return signToken(userId, "refreshTokenSecretKey", "1h");
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
