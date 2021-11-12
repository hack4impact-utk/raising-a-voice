let mysql = require("../../db/mysqldb");

module.exports = (function () {
  async function getData(req, res, next) {
    const con = await mysql.connection();
    const profileName = "a";
    try {
      let pData = await con.query(
        "select * from profile where profileName = ?",
        profileName
      );

      res.send({
        pData: pData,
        message: "profile data provided",
      });
    } catch (e) {
      console.log(e);
      return res.status(502).send(e);
    } finally {
      await con.release();
    }
  }
  return {
    getData: getData,
  };
})();
