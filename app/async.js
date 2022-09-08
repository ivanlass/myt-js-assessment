exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(value);
      }, 10);
    });
  }
};
