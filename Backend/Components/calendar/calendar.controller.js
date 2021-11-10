'use strict'
const mysql = require('../../db/mysqldb')


module.exports = function () {

    /*
        GET Request
    */

   function getDaysInMonth(month, year) {
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    }

    async function getCalendarWithProfiles(req, res, next) {
        const con = await mysql.connection()

        const { month, year } = req.params

        try {
            const months_object = {
                "Jan": 0,
                "Feb": 1,
                "Mar": 2,
                "Apr": 3,
                "May": 4,
                "Jun": 5,
                "Jul": 6,
                "Aug": 7,
                "Sep": 8,
                "Oct": 9,
                "Nov": 10,
                "Dec": 11
            }

            let dates = getDaysInMonth(months_object[month], 2021)

            

            
            let result = []

            for (let i = 0; i < dates.length; i++) {
                let get_all_cwp = await con.query(
                    `select * from calendar
                        left join profile
                            on calendar.profile_id = profile.profile_id
                        left join notes
                            on calendar.notes_id = notes.notes_id
                        left join users
                            on calendar.user_id = users.user_id
                        where date = ? and month = ? and year = ? 
                        order by date`, [dates[i], month, year]
                )

                if (get_all_cwp.length === 0) {
                    result.push([{
                        "profile": null,
                        "date": dates[i],
                        "duration": null,
                        "author": null,
                        "time": null,
                    }])
                    continue
                }

                let each_date = []
                
                for (let j = 0; j < get_all_cwp.length; j++) {
                    let obj = {}

                    obj["profile"] = get_all_cwp[j]["legal_name"]
                    obj["date"] = dates[i]
                    obj["duration"] = get_all_cwp[j]["duration"]
                    obj["author"] = get_all_cwp[j]["username"]
                    obj["time"] = get_all_cwp[j]["time"]

                    each_date.push(obj)
                }

                result.push(each_date)

            }

            res.status(200).send(result)


            
            

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
        
        const { profile_id, notes_id, user_id, date, month, year } = req.body

        try {
            console.log(req.body)
            if (user_id !== null) {
                let find_user = await con.query("select * from users where user_id = ?", user_id)

                if (find_user.length === 0) {
                    res.status(400).send("Invalid user")
                }
            } 

            if (notes_id !== null) {
                let find_notes = await con.query("select * from users where notes_id = ?", notes_id)

                if (find_notes.length === 0) {
                    res.status(400).send("Invalid notes")
                }
            }

            let find_profile = await con.query(
            `select * from profile where profile_id = ?`, profile_id
            )

            if (find_profile.length === 0) {
                return res.status(402).send("Profile does not exist!")
            } else if (find_profile.length > 1) {
                return res.status(402).send("There are duplicate profiles! Please contact an admin.")
            } 


            await con.query("insert into calendar(profile_id, notes_id, user_id, date, month, year) values(?,?,?,?,?,?)", [profile_id, notes_id, user_id, date, month, year])

            res.status(201).send("Tagged a profile")
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