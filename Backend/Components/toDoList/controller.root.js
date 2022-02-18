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

  

async function post(req, res, next) {
  const date = req.body;
  const con = await mysql.connection();
  try {
    const TDL = req.body;


    res.send({
      method: 'POST',
      body: TDL,
    });




  } catch (e) {
    console.log(e);
    return res.status(409).send(e);
  } finally {
    await con.release();
  }
}




async function put(req, res, next) {
  const date = req.body;
  const con = await mysql.connection();
  try {
    //const TDL = {}; //TDL == to do list

    let TDL = await con.query("select * from calendar where date = ?", date); //???

    if (TDL.length == 0) {
      return res.status(400).send("To do list does not exist");
    }

    res.send({
      method: 'PUT',
      body: TDL,
    });
  } catch (e) {
    console.log(e);
    return res.status(502).send(e);
  } finally {
    await con.release();
  }
}






async function Delete(req, res, next) {
  const date = req.body;
  const con = await mysql.connection();
  try {
    //const TDL = {}; //TDL == to do list

    let TDL = await con.query("select * from calendar where date = ?", date); //???

    if (TDL.length == 0) {
      return res.status(400).send("To do list does not exist");
    }

    res.send({
      method: 'delete',
      body: TDL,
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
  post:post,
  put:put,
  Delete: Delete,
};


})();
