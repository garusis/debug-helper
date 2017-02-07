"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = DebugHelper;

var _debug = require("debug");

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appNamespace = process.env.DH_APP_NAMESPACE;

DebugHelper.debug = {
    test: new DebugHelper("test"),
    production: new DebugHelper("production"),
    development: new DebugHelper("development"),
    staging: new DebugHelper("staging"),
    error: new DebugHelper("error"),
    info: new DebugHelper("info")
};

DebugHelper.config = function (settings) {
    appNamespace;
};

function DebugHelper(namespace) {
    namespace = "string" === typeof namespace ? namespace : namespace.definition.name;
    return (0, _debug2.default)(appNamespace + ":" + namespace);
}
//# sourceMappingURL=index.js.map
