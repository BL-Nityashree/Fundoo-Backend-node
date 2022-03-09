"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

// const jwt = require('jsonwebtoken'); we can either use import or require
var generateToken = function generateToken(emailMatch) {
  var token = _jsonwebtoken["default"].sign({
    "email": emailMatch.email,
    "id": emailMatch._id
  }, process.env.SECRET_KEY);

  return emailMatch, token;
};

exports.generateToken = generateToken;