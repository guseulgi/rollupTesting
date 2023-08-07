"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = void 0;
var _testing = require("./testing");
var _lodash = require("lodash");
var sum = (0, _testing.add)(3, 4);
exports.sum = sum;
if ((0, _lodash.isNumber)(sum) >= 7) console.log("True!");
