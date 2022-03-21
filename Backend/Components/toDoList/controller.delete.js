"use strict";
const mysql = require("../../db/mysqldb");

module.exports = (function () {
  async function Delete(req, res, next) {
    const date = req.body;
    const con = await mysql.connection();

    let { TDL } = req.body;
    let TODOLIST = [TDL];


    try {
      //const TDL = {}; //TDL == to do list

      let tdl = await con.query("select * from calendar where date = ?", date); //???

      if (TDL.length == 0) {
        return res.status(400).send("To do list does not exist");
      }

      res.send({
        method: "delete",
        body: TODOLIST,
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send(e);
    } finally {
      await con.release();
    }
  }

  return {
    Delete: Delete,
  };
})();
