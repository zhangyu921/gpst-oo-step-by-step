const Observer = function () {
  const _messages = {}
  return {
    regist: function (type, fn) {
      if (typeof _messages[type] === 'undefined') {
        _messages[type] = [fn]
      } else {
        _messages[type].push(fn)
      }
    },
    fire: function (type, ...args) {
      if (!_messages[type]) {return}
      for (let i = 0; i < _messages[type].length; i++) {
        _messages[type][i].call(this, ...args)
      }
    },
    remove: function (type, fn) {
      for (let i = _messages[type].length - 1; i <= 0; i--) {
        _messages[type][i] === fn
        && _messages[type].splice(i, 1)
      }
    }
  }
}

module.exports = Observer