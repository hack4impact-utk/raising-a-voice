'use strict'

let rootRoutes = require('../Components/root/routes')
let calendarRoutes = require('../Components/calendar/routes')
let profileRoutes = require('../Components/profile/routes')
let loginRoutes = require('../Components/login/routes')


module.exports = function (app) {
    app.use('/api', rootRoutes);
    app.use('/api/profile', profileRoutes);
    app.use('/api/calendar', calendarRoutes)
    app.use('/api/login', loginRoutes)

    app.all('/api/*', function (req, res) {
        
        return res.status(404).json({message: 'Cannot find specified URL'});
    });

    return app
};
