'use strict'
const Trailpack = require('trailpack')
const Primus = require('primus')
const _ = require('lodash')

const primusDefaults = {
  transformer: 'engine.io'
}

module.exports = class Realtime extends Trailpack {
  validate() {
    return Promise.resolve()
  }

  configure() {
    return Promise.resolve()
  }

  initialize() {
    return new Promise((res, rej) => {
      this.app.once('webserver:http:ready', (httpServer) => {
        if (Array.isArray(httpServer)) {
          httpServer = httpServer[0]
        }
        const primusConfig = _.get(this.app.config, 'realtime.primus', { options: {} })
        this.app.sockets = new Primus(httpServer, Object.assign(primusDefaults, primusConfig.options))
        res()
      })
    })
  }

  constructor(app) {
    super(app, {
      config: require('./config'),
      pkg: require('./package')
    })
  }
}
