'use strict'

const Promise = require('bluebird');
const Trailpack = require('trailpack')
const Primus = require('primus');

const primusDefaults = {
  transformer:'engine.io'
};

module.exports = class Realtime extends Trailpack {
  validate () {
    return Promise.resolve()
  }

  configure () {
    return Promise.resolve()
  }

  initialize () {
    return new Promise((res,rej)=>{
      this.app.once('webserver:http:ready',(httpServer)=>{
        this.app.sockets = new Primus(this.server,primusDefaults)
        res()
      })
    })
  }

  constructor (app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}
