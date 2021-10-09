'use strict';

let app = require("./app")

let port = 3000


app.set('port', port)

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})