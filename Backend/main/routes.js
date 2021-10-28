'use strict'

let rootRoutes = require('../Components/root/routes')
let calendarRoutes = require('../Components/calendar/routes')

module.exports = function (app) {
    app.use('/', rootRoutes);
    app.use('/calendar', calendarRoutes)


    app.all('/*', function (req, res) {
        return res.status(404).json({message: 'Cannot find specified URL'});
    });

    return app
};