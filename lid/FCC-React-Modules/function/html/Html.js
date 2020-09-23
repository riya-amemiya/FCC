"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _UTF = require("../utf/UTF");

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

  this.jscode = function () {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var html = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var code = html;
    code = code.replace(/from/g, 'fro%m');
    var test = "";

    for (var i = 0; i < html.length; i++) {
      if (code.indexOf('fro%m') != -1) {
        test = code.slice(code.indexOf('fro%m'));
        code = code.slice(0, code.indexOf('fro%m'));
        code = code + "</span>" + test;
        code = code.replace('fro%m', 'from');
      }
    }

    html = code;
    html = html.replace(/fro%m/g, 'from');
    html = html.replace(/import/g, '<span class="i">import</span><span class="l">');
    html = html.replace(/from/g, '<span class="i">from</span>'); //html = html.replace(/from/g, '<span class="import">from</span>')

    return document.getElementById(id).innerHTML = html;
  };
};

var Html = new html();
var _default = Html;
exports["default"] = _default;