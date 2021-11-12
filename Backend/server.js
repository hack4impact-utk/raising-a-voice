'use strict';
let database_configure = require('./db/schema')

let app = require("./app")

let port = 3000

database_configure()

app.set('port', port)

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})