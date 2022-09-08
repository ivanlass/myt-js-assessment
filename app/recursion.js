exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  
    let result = [];
    let getFiles = function(data, dirName) {
      if (typeof data === 'string' && (dirName != undefined ? data.includes(dirName) : true)) {
        result.push(data);
      } else if (typeof data === 'object') {
        for (let key in data) {
          if (key === 'dir') {
            if (data[key] === dirName) {
              for (let i = 0; i < data[key].length; i++) {
                getFiles(data[key][i], dirName);
              }
            }
          } else {
            getFiles(data[key], dirName);
          }
        }
      }
    }
    getFiles(data, dirName);
    return result;
  }
};
