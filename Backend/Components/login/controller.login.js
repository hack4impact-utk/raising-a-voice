const brcypt = require("bcrypt");
const userSchema = mongoose.userSchema;
const mongoose = require("mongoose");
const saltRounds = 10;
const id = "idDummyData";
const password = "passwordDummyData";
const role = "Admin";

module.exports = (function () {
  if (loginCheck == false) {
    function login(req, res, next) {
      res.status(401).json({
        app: "Raising a Voice",
        version: "1.0.0",
        status: "OK",
      });
    }
  }

  if (loginCheck == true) {
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

function loginCheck() {
  var user = this;

  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(id, salt, function (err, hash) {
      if (err) return next(err);
    });
  });

  bcrypt.compare(user.id, hash, function (err, result) {
    if (result == false) {
      //return false;
    }
  });

  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(password, salt, function (err, hash) {
      if (err) return next(err);
    });
  });

  bcrypt.compare(user.password, hash, function (err, result) {});
  if (result == false) {
    //  return false;
  }

  if (role == "admin") {
    user.role == "admin";
  }
}
