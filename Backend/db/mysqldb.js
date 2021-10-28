const mysql = require("mysql");
require("dotenv").config();

let dbConfig = {
  connectionLimit: 10,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  typeCast: function castField( field, useDefaultTypeCasting ) {
    if ( ( field.type === "BIT" ) && ( field.length === 1 ) ) {
        var bytes = field.buffer();
        return( bytes[ 0 ] === 1 );
    }
    return( useDefaultTypeCasting() );
  }
}

if (process.env.NODE_ENV !== 'production') {
    dbConfig["host"] = process.env.development // For development database configuration
} else {
    dbConfig["socketPath"] = process.env.host // For production database configuration
}
const pool = mysql.createPool(dbConfig);

const connection = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
        if (err) reject(err);
        const query = (sql, binding) => {
            return new Promise((resolve, reject) => {
                connection.query(sql, binding, (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                });
            });
        };
        const release = () => {
            return new Promise((resolve, reject) => {
                if (err) reject(err);
                resolve(connection.release());
            });
        };
        resolve({ query, release });
    });
   });
};


module.exports = { pool, connection };