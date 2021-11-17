let mysql = require("../../db/mysqldb");

module.exports = (function () {
  async function getData(req, res, next) {
    const { username } = req.body;
    const con = await mysql.connection();
    const profileName = "a";
    try {
      nickname = "a";
      const pData = [{ username, nickname }];

      // console.log(userLogin);
      // change b to pData when database is ready
      //console.log(profileName)
      let b = await con.query(
        "select * from users where username = ?",
        username
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
