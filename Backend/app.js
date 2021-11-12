'use strict';

module.exports = function () {

    let xpress = require('./main/xpress');
    let routes = require('./main/routes')

    let app = xpress();
    app = routes(app)

    return app;
}();