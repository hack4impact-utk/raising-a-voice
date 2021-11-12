'use strict';

module.exports = function () {

    let xpress = require('./api/xpress');
    let routes = require('./api/routes')

    let app = xpress();
    app = routes(app)

    return app;
}();