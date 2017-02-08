"use strict"
import debug from "debug"

let appNamespace = process.env.DH_APP_NAMESPACE

DebugHelper.debug = {
    test: new DebugHelper("test"),
    production: new DebugHelper("production"),
    development: new DebugHelper("development"),
    staging: new DebugHelper("staging"),
    error: new DebugHelper("error"),
    info: new DebugHelper("info")
}

DebugHelper.config = function (settings) {
    appNamespace = settings.appNamespace
    if (settings.force) {
        debug.enable(`${appNamespace}:*`)
    }
}

export default function DebugHelper(namespace, force) {
    namespace = "string" === typeof namespace ? namespace : namespace.definition.name
    namespace = `${appNamespace}:${namespace}`

    if (force) {
        debug.enable(namespace)
    }
    return debug(namespace)
}