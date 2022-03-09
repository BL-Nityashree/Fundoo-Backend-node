"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = require("@hapi/joi");

var _mongoose = require("mongoose");

var noteSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  isArchived: {
    type: Boolean
  },
  isDeleted: {
    type: Boolean
  },
  UserId: {
    type: String
  },
  noteId: {
    type: String
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Note', noteSchema);

exports["default"] = _default;