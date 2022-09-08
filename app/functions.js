exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj, [obj.name]);
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ', ' + str2;
    }
  },

  makeClosures : function(arr, fn) {
    let result = [];
    for (var i = 0; i < arr.length; i++) {
      result.push(function() {
        return fn(arr[i]);
      }());
    }
    return result;

  },

  useArguments : function(...args) {
    // sum all arguments
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      sum += args[i];
    }
    return sum;
  }
};
