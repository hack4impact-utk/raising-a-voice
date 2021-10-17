const brcypt = require("bcrypt");
const userSchema = mongoose.userSchema;
const mongoose = require("mongoose");
const saltRounds = 10;
const id = "idDummyData";
const password = "passwordDummyData";
const role = "Admin";

userSchema.pre("login", function (next) {
  var user = this;

  bcrypt.compare(user.id, hash, function (err, result) {
    if (result == false) {
      return false;
    }
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

/*
 bcrypt.genSalt(saltRounds, function(err, salt) {
    if(err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
       if(err) return next(err);
       user.password = hash;
    });
});

*/
