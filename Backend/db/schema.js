let mysql = require('./mysqldb')

async function run() {
    const con = await mysql.connection()

    let create_profile = 
    `create table if not exists profile(
        profile_id varchar(36) primary key,
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
    ) ENGINE = INNODB;`

    let create_users = 
    `create table if not exists users(
        user_id varchar(36) primary key,
        username varchar(36),
        password varchar(255),
        email varchar(255)
    ) ENGINE = INNODB;`

    let create_notes = 
    `create table if not exists notes(
        notes_id varchar(36) primary key,
        profile_id varchar(36),
        user_id varchar(36),
        description text,
        time time,
        duration int,
        foreign key(profile_id) references profile(profile_id),
        foreign key(user_id) references users(user_id)

    )`

    let create_calendar = 
    `create table if not exists calendar(
        profile_id varchar(36),
        notes_id varchar(36),
        user_id varchar(36),
        date date,
        month enum('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'),
        year varchar(4),
        foreign key(profile_id) references profile(profile_id),
        foreign key(notes_id) references notes(notes_id),
        foreign key(user_id) references users(user_id)
    ) ENGINE = INNODB;`

    
   


    try {
        await con.query("START TRANSACTION;");
        await con.query(create_profile)
        await con.query(create_users)
        await con.query(create_notes)
        await con.query(create_calendar)
        await con.query("COMMIT;")
        console.log(`Databases created!`)

        
    } catch (e) {
        await con.query("ROLLBACK;")
        console.log(e)
    } finally {
        await con.release()
    }

    
}

module.exports = run

    
    