'use strict'
const mysql = require('../../db/mysqldb')


module.exports = function () {

    /*
        GET Request
    */
    async function getCalendarWithProfiles(req, res, next) {
        const con = await mysql.connection()

        const { month, year } = req.params

        try {
            let get_all_cwp = await con.query(
            `select * from calendar
                left join profile
                    on calendar.profile_id = profile.profile_id
                left join notes
                    on calendar.notes_id = notes.notes_id
                left join users
                    on calendar.user_id = users.user_id
                where month = ? and year = ?`, [month, year]
            )

            res.status(200).send(get_all_cwp)
            

        } catch (e) {
            res.status(502).send(e)
        } finally {
            await con.release()
        }
    }


    /*
        GET Request
    */

    /*
        POST Request
    */
    async function tagProfiletoCalendar(req, res, next) {
        const con = await mysql.connection()
        
        const { profile_id } = req.params
        const { date } = req.body

        try {
            let find_profile = await con.query(
            `select * from profile where profile_id = ?`, profile_id
            )

            if (find_profile.length === 0) {
                return res.status(402).send("Profile does not exist!")
            } else if (find_profile.length > 1) {
                return res.status(402).send("There are duplicate profiles! Please contact an admin.")
            } 


            await con.query("insert into calendar(date, profile_id) values(?,?)", [date, profile_id])
            res.status(201).send("Tagged a profile ")
        } catch (e) {
            res.status(502).send(e)
        } finally {
            await con.release()
        }
    }

    return {
        getCalendarWithProfiles: getCalendarWithProfiles,
        tagProfiletoCalendar: tagProfiletoCalendar
    }
}()