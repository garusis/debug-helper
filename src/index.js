"use strict"
import debug from "debug"
import _ from "lodash"

const defaults = {
    appNamespace: process.env.DH_APP_NAMESPACE,
    force: false
}

let _options

debugBuilder.debug = {
    test: debugBuilder("test"),
    production: debugBuilder("production"),
    development: debugBuilder("development"),
    staging: debugBuilder("staging"),
    error: debugBuilder("error"),
    info: debugBuilder("info")
}

debugBuilder.config = function (options) {
    _options = _.defaults({}, options, defaults)
}
debugBuilder.config({})

export default function debugBuilder(namespace, force) {
    namespace = "string" === typeof namespace ? namespace : (namespace.name || namespace.definition.name)
    namespace = `${_options.appNamespace}:${namespace}`

    let deb = debug(namespace)
    if (force || _options.force) {
        deb.enabled = true
    }
    return deb
}