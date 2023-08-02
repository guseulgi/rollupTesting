'use strict';

var lodash = require('lodash');

// import 용으로 사용될 더미 파일

var add = function add(a, b) {
  return a + b;
};

var sum = add(3, 4);
if (lodash.isNumber(sum) >= 7) console.log("True!");

exports.sum = sum;
