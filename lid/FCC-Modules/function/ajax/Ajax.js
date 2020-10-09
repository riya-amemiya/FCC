"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var ajax = function ajax() {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (req) {};
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
  var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var req = new XMLHttpRequest();

  if (type = "GET") {
    req.open(type, url);
  }

  req.send();

  req.onreadystatechange = function () {
    if (req.readyState == 4) {
      if (req.status == 200) {
        callback(req);
      }
    }
  };
};

var _default = ajax;
exports["default"] = _default;