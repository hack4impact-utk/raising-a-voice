"use strict";

let rootRoutes = require("../Components/root/routes");
let loginRoutes = require("../Components/login/routes");
let profileRoutes = require("../Components/profile/routes");
let toDoRoutes = require("../Components/toDoList/routes");

module.exports = function (app) {
  app.use("/", rootRoutes);
  app.use("/login", loginRoutes);
  app.use("/profile", profileRoutes);
  app.use("/toDoList", toDoRoutes);
  app.all("/*", function (req, res) {
    return res.status(404).json({ message: "Cannot find specified URL" });
  });

  return app;
};
