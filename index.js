var toArray = require('to-array')
var Enumerable = require('enumerable')

module.exports = function(els) {
  return new ElementList(els)
}

function ElementList(els) {
  if (typeof els === 'string') els = document.querySelectorAll(els)
  this.els = toArray(els)
}

Enumerable(ElementList.prototype)

ElementList.prototype.__iterate__ = function(){
  var self = this
  return {
    length: function(){ return self.els.length },
    get: function(i){ return self.els[i] }
  }
}
