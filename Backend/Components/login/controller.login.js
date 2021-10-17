const brcypt = require("bcrypt");
const userSchema = mongoose.userSchema;
const mongoose = require("mongoose");
const saltRounds = 10;
const id = "idDummyData";
const password = "passwordDummyData";
const role = "Admin";

userSchema.pre("login", function (next) {
  var user = this;


  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(id, salt, function (err, hash) {
      if (err) return next(err);
      
    });
  });

  bcrypt.compare(user.id, hash, function (err, result) {
    if (result == false) {
      return false;
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
    return false;
  }

  if (role == "admin") {
    user.role == "admin";
  }
  return true;
});
