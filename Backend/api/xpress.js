let cors = require('cors');
let express = require('express');

module.exports = function () {
    let app = express();

    app.use(express.json());

    app.use(cors({
        methods: ['GET', 'PUT', 'POST', 'DELETE'],
        allowedHeaders: ['X-Requested-With', 'X-File-Name', 'Content-Type', 'Authorization', 'Location', 'Language', 'Device-ID', 'Timestamp', 'Key', 'Encrypted-Content-Type'],
        exposedHeaders: ['File-Type', 'File-Length', 'Content-Type', 'Content-Length', 'Last-Modified', 'Last-Created']
    }));


    return app;
};


