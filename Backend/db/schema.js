let mysql = require('./mysqldb')

async function run() {
    const con = await mysql.connection()

    let create_profile = 
    `create table if not exists profile(
        legal_name text,
        nickname text,
        dob date,
        marital_status text,
        sex varchar(36),
        race text,
        address text,
        city text,
        county text,
        state text,
        zip varchar(5),
        contact_number text,
        social_security text,
        driver_license text,
        employed char(1),
        disability char(1),
        insurance char(1),
        veteran char(1),
        dependents int,
        substance_use text,
        criminal_history text,
        disabilities text,
        disorders_and_health text,
        medication_boolean char(1),
        medication text,
        notes text
    );`


    try {
        let result = await con.query(create_profile)
        console.log(result)
    } catch (e) {
        console.log(e)
    } finally {
        await con.release()
    }

    
}

module.exports = run

    
    