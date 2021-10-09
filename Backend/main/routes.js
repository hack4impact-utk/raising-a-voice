'use strict'

let rootRoutes = require('../Components/root/routes')

module.exports = function (app) {
    app.use('/', rootRoutes);

    app.all('/*', function (req, res) {
        return res.status(404).json({message: 'Cannot find specified URL'});
    });

    return app
};