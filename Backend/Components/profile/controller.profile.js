let mysql = require('../../db/mysqldb')
module.exports = function() {
  // POST REQUEST
  async function create(req, res) {
    const con = await mysql.connection()
    let { profileData: [legal_name,
      nickname,
      dob,
      marital_status,
      sex,
      race,
      address,
      city,
      county,
      state,
      zip,
      contact_number,
      social_security,
      driver_license,
      employed,
      disability,
      insurance,
      veteran,
      dependents,
      substance_use,
      criminal_history,
      disabilities,
      disorders_and_health,
      medication_boolean,
      medication,
      notes] } = req.body

    try {

      values = Object.values(profileData)
      await con.query(`INSERT INTO profile(${...Object.keys(profileData)}) values(${...Object.keys(profileData).map(k => '?')})`, values) // Insert query
      res.status(201).send(`Insert ${} succesfully`)
    } catch(e) {
      res.status(502).send(e)
    } finally {
      await con.release()
    }
  }

  async function getAllUsernames(req, res) {
    const con = await mysql.connection()

    try {
      let allUsernames = await con.query("...") // Select goes here
      res.status(200).send(allUsernames)
    } catch(e) {
      res.status(502).send(e)
    } finally {
      await con.release()
    }
  }

  async function getAllProfiles(req, res) {
    const con = await mysql.connection()

    try {
      let allProfiles = await con.query("SELECT * FROM Profile")
      res.status(200).send(allProfiles)
    } catch(e) {
      res.status(502).send(e)
    } finally {
      await con.release()
    }
  }

  return {
    create,
    getAllUsernames,
    getAllProfiles
  }
}
