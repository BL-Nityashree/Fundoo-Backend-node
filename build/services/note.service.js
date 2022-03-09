"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNoteService = exports.trashNoteService = exports.getNoteService = exports.getAllNotesService = exports.deleteNoteService = exports.addNoteService = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _note = _interopRequireDefault(require("../models/note.model"));

//add a note
var addNoteService = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _note["default"].create(body);

          case 2:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addNoteService(_x) {
    return _ref.apply(this, arguments);
  };
}(); //get all notes


exports.addNoteService = addNoteService;

var getAllNotesService = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _note["default"].find();

          case 2:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAllNotesService() {
    return _ref2.apply(this, arguments);
  };
}(); //update a note


exports.getAllNotesService = getAllNotesService;

var updateNoteService = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(body) {
    var _id, bodydata, data;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _id = body.noteId;
            bodydata = {
              "title": body.title,
              "description": body.description
            };
            _context3.next = 4;
            return _note["default"].findByIdAndUpdate({
              _id: _id
            }, bodydata, {
              "new": true
            });

          case 4:
            data = _context3.sent;
            return _context3.abrupt("return", data);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateNoteService(_x2) {
    return _ref3.apply(this, arguments);
  };
}(); //get single note


exports.updateNoteService = updateNoteService;

var getNoteService = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    var data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _note["default"].findById(id);

          case 2:
            data = _context4.sent;
            console.log("response data", data, id);
            return _context4.abrupt("return", data);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getNoteService(_x3) {
    return _ref4.apply(this, arguments);
  };
}(); //trash single note


exports.getNoteService = getNoteService;

var trashNoteService = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(body) {
    var _id, bodydata, data;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _id = body.noteId;
            bodydata = {
              idDeleted: body.isDeleted
            };
            _context5.next = 4;
            return _note["default"].findByIdAndUpdate({
              _id: _id
            }, bodydata, {
              "new": true
            });

          case 4:
            data = _context5.sent;
            return _context5.abrupt("return", data);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function trashNoteService(_x4) {
    return _ref5.apply(this, arguments);
  };
}(); //delete single note


exports.trashNoteService = trashNoteService;

var deleteNoteService = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(body) {
    var data;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _note["default"].findByIdAndDelete(body.noteId);

          case 2:
            data = _context6.sent;
            return _context6.abrupt("return", data);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteNoteService(_x5) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteNoteService = deleteNoteService;