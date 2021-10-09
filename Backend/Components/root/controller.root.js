'use strict';

module.exports = function () {

    function root(req, res, next) {

        res.status(200).json({
            'app': "Raising a Voice",
            'version': "1.0.0",
            'status': 'OK',
        });
    }

    return {
        root: root
    }

}();
