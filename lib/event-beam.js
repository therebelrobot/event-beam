var extend = require('xtend')

function Beam (opts) {
  var self = this

  if (!(self instanceof Beam)) {
    return new Beam(opts)
  }
  self.opts = extend({
    _events:[]
  }, opts)

  this.emit = emitEvent.bind(self)

  this.addListener = addListener.bind(self)
  this.on = this.addListener
  this.addListenerSync = addListenerSync.bind(self)
  this.onSync = this.addListenerSync
  this.addListenerQueued = addListenerQueued.bind(self)
  this.onQueued = this.addListenerQueued
  this.addListenerQ = this.addListenerQueued
  this.onQ = this.addListenerQueued

  this.removeListener = removeListener.bind(self)
  this.off = this.removeListener
  this.removeListenerSync = removeListenerSync.bind(self)
  this.offSync = this.removeListenerSync
  this.removeListenerQueued = removeListenerQueued.bind(self)
  this.offQueued = this.removeListenerQueued
  this.removeListenerQ = this.removeListenerQueued
  this.offQ = this.removeListenerQueued

  return this
}

function emitEvent (event) {
  // ('EVENT:NAME', data1, data2, data3, etc)
  var self = this
}
function addListener (event, type, cb) {
  var self = this
  if (!cb) {
    cb = type
    type = 'async'
  }
}
function addListenerAsync (event, cb) {
  var self = this
}
function addListenerSync (event, cb) {
  var self = this
}
function addListenerQueued (event, cb) {
  var self = this
}

function removeListener (event, type, cb) {
  var self = this
  if (!cb) {
    cb = type
    type = 'async'
  }
}

function removeListenerAsync (event, cb) {
  var self = this
}
function removeListenerSync (event, cb) {
  var self = this
}
function removeListenerQueued (event, cb) {
  var self = this
}
