/**
 * Module Dependencies
 */

var toArray = require('to-array')
var Enumerable = require('enumerable')

/**
 * Create an ElementList
 *
 * @param els {String|Arrayish} Element list or selector String
 * @api public
 */

module.exports = function(els, context) {
  return new ElementList(els, context)
}

/**
 * ElementList Constructor
 *
 * @param els {String|Arrayish} Element list or selector String
 * @param context {Element} if a selector is passed use optional context
 * @api private
 */

function ElementList(els, context) {
  // handle Strings
  if (typeof els === 'string') els = (context || document).querySelectorAll(els)
  // handle Arrayish
  this.els = toArray(els)
}

Enumerable(ElementList.prototype)

/**
 * Iterator for internal element array.
 *
 * @api private
 */

ElementList.prototype.__iterate__ = function(){
  var self = this
  return {
    length: function(){ return self.els.length },
    get: function(i){ return self.els[i] }
  }
}
