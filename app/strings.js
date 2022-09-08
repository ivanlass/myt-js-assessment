exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let result = "";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
      } else {
        count = 0;
      }
      if (count < amount) {
        result += str[i];
      }
    }
    return result;


    
  }
};
