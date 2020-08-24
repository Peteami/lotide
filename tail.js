const assertEqual = require('./assertEqual');


const tail = function(arr) {
  let newarr = arr.shift();
  return newarr;
};


module.exports = tail;