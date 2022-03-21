"use strict";
const mysql = require("../../db/mysqldb");

module.exports = (function () {
  
async function post(req, res, next) {
  const date = req.body;
  const con = await mysql.connection();
 
    let {
      TDL,
    } = req.body;

     let TODOLIST = [TDL]

  try {
      await con.query(`INSERT INTO calendar(TDL) values(?)`, TODOLIST); // Insert query
      res.status(201).send(`Insert succesfully`)
  } catch (e) {
    console.log(e);
    return res.status(409).send(e);
  } finally {
    await con.release();
  }
}

return {
  post:post,
};


})();
