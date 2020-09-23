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

  this.jscode = function () {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var html = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var code = html;
    code = code.replace(/from/g, 'fro%m');
    var code2 = "";
    var code3 = "";

    for (var i = 0; i < html.length; i++) {
      if (code.indexOf('fro%m') != -1) {
        code2 = code.slice(code.indexOf('fro%m'));
        code = code.slice(0, code.indexOf('fro%m'));
        code = code + "</span>" + code2;
        code = code.replace('fro%m', 'from');
      }
    }

    code = code.replace(/jscode/g, 'j%scode');
    code = code.replace(/const/g, 'cons%t');

    for (var _i = 0; _i < html.length; _i++) {
      if (code.indexOf('j%scode') != -1) {
        code2 = code.slice(code.indexOf('j%scode'));
        code = code.slice(0, code.indexOf('j%scode'));
        code3 = code2.slice(code2.indexOf('div')); //code2 = code.slice(code.indexOf('j%scode'))
        //console.log(code);
        //console.log(code2);
        //console.log(code3);

        code2 = code2.slice(0, code2.indexOf('div')); //console.log(code2);

        code2 = code2.replace(/=/g, '<span class="i">=</span>');
        code2 = code2.replace(/;/g, '<span class="i">;</span>');
        code2 = code2.replace(/\(/g, '<span class="d">(</span>');
        code2 = code2.replace(/\)/g, '<span class="d">)</span>');
        code = code + code2 + code3; //code = code + code2 //+ code3
        //console.log(code + code2 + code3);

        code = code.replace('j%scode', 'jscode'); //console.log(code);
      }
    }

    for (var _i2 = 0; _i2 < html.length; _i2++) {
      if (code.indexOf('cons%t') != -1) {
        code2 = code.slice(code.indexOf('cons%t'));
        code = code.slice(0, code.indexOf('cons%t'));
        console.log(code);
        console.log(code2);
        code = code + "</span>" + code2;
        console.log(code);
        code = code.replace('cons%t', 'const');
      }
    }

    html = code;
    html = html.replace(/fro%m/g, 'from');
    html = html.replace(/j%scode/g, 'jscode');
    html = html.replace(/import/g, '<span class="i">import</span><span class="l">');
    html = html.replace(/from/g, '<span class="i">from</span><span class="f">');
    html = html.replace(/var/g, '<span class="vc">var</span><span class="l">');
    html = html.replace(/let/g, '<span class="vc">let</span><span class="l">');
    html = html.replace(/const/g, '<span class="vc">const</span><span class="l">'); //html = html.replace(/from/g, '<span class="import">from</span>')

    return document.getElementById(id).innerHTML = html;
  };
};

var Html = new html();
var _default = Html;
exports["default"] = _default;