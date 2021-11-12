'use strict'

let rootRoutes = require('../Components/root/routes')
let calendarRoutes = require('../Components/calendar/routes')
let profileRoutes = require('../Components/profile/routes')
let loginRoutes = require('../Components/login/routes')


module.exports = function (app) {
    app.use('/', rootRoutes);
    app.use('/profile', profileRoutes);
    app.use('/calendar', calendarRoutes)
    app.use('/login', loginRoutes)

    app.all('/*', function (req, res) {
        return res.status(404).json({message: 'Cannot find specified URL'});
    });

    return app
};
