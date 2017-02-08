"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = debugBuilder;

var _debug = require("debug");

var _debug2 = _interopRequireDefault(_debug);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
    appNamespace: process.env.DH_APP_NAMESPACE,
    force: false
};

var _options = void 0;

debugBuilder.debug = {
    test: debugBuilder("test"),
    production: debugBuilder("production"),
    development: debugBuilder("development"),
    staging: debugBuilder("staging"),
    error: debugBuilder("error"),
    info: debugBuilder("info")
};

debugBuilder.config = function (options) {
    _options = _lodash2.default.defaults({}, options, defaults);
};
debugBuilder.config({});

function debugBuilder(namespace, force) {
    namespace = "string" === typeof namespace ? namespace : namespace.name || namespace.definition.name;
    namespace = _options.appNamespace + ":" + namespace;

    var deb = (0, _debug2.default)(namespace);
    if (force || _options.force) {
        deb.enabled = true;
    }
    return deb;
}
//# sourceMappingURL=index.js.map
