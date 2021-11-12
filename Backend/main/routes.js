"use strict";

let rootRoutes = require("../Components/root/routes");
let loginRoutes = require("../Components/login/routes");
let profileRoutes = require("../Components/profile/routes");

module.exports = function (app) {
  app.use("/", rootRoutes);
  app.use("/login", loginRoutes);
  app.use("/profile", profileRoutes);
  
  app.all("/*", function (req, res) {
    return res.status(404).json({ message: "Cannot find specified URL" });
  });

  return app;
};
