"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var html = function html() {
  _classCallCheck(this, html);

  this.getid = function (id) {
    return document.getElementById(id);
  };

  this.html = function () {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var html = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return document.getElementById(id).innerHTML = html;
  };
};

var Html = new html();
var _default = Html;
exports["default"] = _default;