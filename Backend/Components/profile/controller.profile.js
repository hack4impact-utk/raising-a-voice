let mysql = require('../../db/mysqldb')
let uuid = require('uuid')

module.exports = function() {
  // POST REQUEST
  async function create(req, res, next) {
    const con = await mysql.connection()
    let { legal_name,
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
      notes
    } = req.body

    let profileId = uuid.v4()

    let profileData = [profileId,
      legal_name,
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
      notes]

    try {
      await con.query(`INSERT INTO profile(profile_id,legal_name,nickname,dob,marital_status,
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
      notes) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, profileData) // Insert query
      res.status(201).send(`Insert succesfully`)
    } catch(e) {
      res.status(502).send(e)
    } finally {
      await con.release()
    }
  }
  //
  // async function getAllUsernames(req, res) {
  //   const con = await mysql.connection()
  //
  //   try {
  //     let allUsernames = await con.query("...") // Select goes here
  //     res.status(200).send(allUsernames)
  //   } catch(e) {
  //     res.status(502).send(e)
  //   } finally {
  //     await con.release()
  //   }
  // }

  async function getAll(req, res) {
    const con = await mysql.connection()

    try {
      let allProfiles = await con.query("SELECT * FROM profile")
      res.status(200).send(allProfiles)
    } catch(e) {
      res.status(502).send(e)
    } finally {
      await con.release()
    }
  }

  return {
    create: create,
    // getAllUsernames,
    getAll: getAll
  }
}()



