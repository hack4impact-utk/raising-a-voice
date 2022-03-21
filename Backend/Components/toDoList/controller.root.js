"use strict";
const mysql = require("../../db/mysqldb");

module.exports = (function () {
  async function root(req, res, next) {
    const date = req.body;
    const con = await mysql.connection();
    try {
      
      let TDL = await con.query("select * from calendar where date = ?", date); //???

      if (TDL.length == 0) {
        return res.status(404).send("To do list does not exist");
      }

      res.send({
        message: "To Do List",
        TDL,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send(e);
    } finally {
      await con.release();
    }
  }

  

return {
  root: root,
};


})();
