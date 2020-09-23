"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.code = exports.conversion = void 0;

var conversion = function conversion(text) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  text = text.replace(/\s+/g, '');

  if (mode == 0) {
    text = text.replace(/824F/g, '0');
    text = text.replace(/8250/g, '1');
    text = text.replace(/8251/g, '2');
    text = text.replace(/8252/g, '3');
    text = text.replace(/8253/g, '4');
    text = text.replace(/8254/g, '5');
    text = text.replace(/8255/g, '6');
    text = text.replace(/8256/g, '7');
    text = text.replace(/8257/g, '8');
    text = text.replace(/8258/g, '9');
    text = text.replace(/0/g, '824F');
    text = text.replace(/1/g, '8250');
    text = text.replace(/2/g, '8251');
    text = text.replace(/3/g, '8252');
    text = text.replace(/4/g, '8253');
    text = text.replace(/5/g, '8254');
    text = text.replace(/6/g, '8255');
    text = text.replace(/7/g, '8256');
    text = text.replace(/8/g, '8257');
    text = text.replace(/9/g, '8258');
    text = text.replace(/82A0/g, 'あ');
    text = text.replace(/82A2/g, 'い');
    text = text.replace(/82A4/g, 'う');
    text = text.replace(/82A6/g, 'え');
    text = text.replace(/82A8/g, 'お');
    text = text.replace(/8341/g, 'ア');
    text = text.replace(/8343/g, 'イ');
    text = text.replace(/8345/g, 'ウ');
    text = text.replace(/8347/g, 'エ');
    text = text.replace(/8349/g, 'オ');
    text = text.replace(/あ/g, '82A0');
    text = text.replace(/い/g, '82A2');
    text = text.replace(/う/g, '82A4');
    text = text.replace(/え/g, '82A6');
    text = text.replace(/お/g, '82A8');
    text = text.replace(/ア/g, '8341');
    text = text.replace(/イ/g, '8343');
    text = text.replace(/ウ/g, '8345');
    text = text.replace(/エ/g, '8347');
    text = text.replace(/オ/g, '8349');
    text = text.replace(/82A9/g, 'か');
    text = text.replace(/82AB/g, 'き');
    text = text.replace(/82AD/g, 'く');
    text = text.replace(/82AF/g, 'け');
    text = text.replace(/82B1/g, 'こ');
    text = text.replace(/834A/g, 'カ');
    text = text.replace(/834C/g, 'キ');
    text = text.replace(/834E/g, 'ク');
    text = text.replace(/8350/g, 'ケ');
    text = text.replace(/8352/g, 'コ');
    text = text.replace(/か/g, '82A9');
    text = text.replace(/き/g, '82AB');
    text = text.replace(/く/g, '82AD');
    text = text.replace(/け/g, '82AF');
    text = text.replace(/こ/g, '82B1');
    text = text.replace(/カ/g, '834A');
    text = text.replace(/キ/g, '834C');
    text = text.replace(/ク/g, '834E');
    text = text.replace(/ケ/g, '8350');
    text = text.replace(/コ/g, '8352');
    text = text.replace(/82B3/g, 'さ');
    text = text.replace(/82B5/g, 'し');
    text = text.replace(/82B7/g, 'す');
    text = text.replace(/82B9/g, 'せ');
    text = text.replace(/82BB/g, 'そ');
    text = text.replace(/8354/g, 'サ');
    text = text.replace(/8356/g, 'シ');
    text = text.replace(/8358/g, 'ス');
    text = text.replace(/835A/g, 'セ');
    text = text.replace(/835C/g, 'ソ');
    text = text.replace(/さ/g, '82B3');
    text = text.replace(/し/g, '82B5');
    text = text.replace(/す/g, '82B7');
    text = text.replace(/せ/g, '82B9');
    text = text.replace(/そ/g, '82BB');
    text = text.replace(/サ/g, '8354');
    text = text.replace(/シ/g, '8356');
    text = text.replace(/ス/g, '8358');
    text = text.replace(/セ/g, '835A');
    text = text.replace(/ソ/g, '835C');
  } else if (mode == 1) {
    text = text.replace(/824F/g, '0');
    text = text.replace(/8250/g, '1');
    text = text.replace(/8251/g, '2');
    text = text.replace(/8252/g, '3');
    text = text.replace(/8253/g, '4');
    text = text.replace(/8254/g, '5');
    text = text.replace(/8255/g, '6');
    text = text.replace(/8256/g, '7');
    text = text.replace(/8257/g, '8');
    text = text.replace(/8258/g, '9');
    text = text.replace(/0/g, '9F');
    text = text.replace(/1/g, 'B0');
    text = text.replace(/2/g, '51');
    text = text.replace(/3/g, '2E');
    text = text.replace(/4/g, '3F');
    text = text.replace(/5/g, '5E4');
    text = text.replace(/6/g, 'F5A');
    text = text.replace(/7/g, 'EF');
    text = text.replace(/8/g, 'AD');
    text = text.replace(/9/g, 'DAEF');
    text = text.replace(/82A0/g, 'あ');
    text = text.replace(/82A2/g, 'い');
    text = text.replace(/82A4/g, 'う');
    text = text.replace(/82A6/g, 'え');
    text = text.replace(/82A8/g, 'お');
    text = text.replace(/8341/g, 'ア');
    text = text.replace(/8343/g, 'イ');
    text = text.replace(/8345/g, 'ウ');
    text = text.replace(/8347/g, 'エ');
    text = text.replace(/8349/g, 'オ');
    text = text.replace(/あ/g, '%A%0');
    text = text.replace(/い/g, '%AB%1');
    text = text.replace(/う/g, '%BA%2E');
    text = text.replace(/え/g, '%EC%3A');
    text = text.replace(/お/g, '%EC%4');
    text = text.replace(/ア/g, '%D%A');
    text = text.replace(/イ/g, '%A%D');
    text = text.replace(/ウ/g, '%E%A');
    text = text.replace(/エ/g, '%E%A');
    text = text.replace(/オ/g, '%F%A');
    text = text.replace(/82A9/g, 'か');
    text = text.replace(/82AB/g, 'き');
    text = text.replace(/82AD/g, 'く');
    text = text.replace(/82AF/g, 'け');
    text = text.replace(/82B1/g, 'こ');
    text = text.replace(/834A/g, 'カ');
    text = text.replace(/834C/g, 'キ');
    text = text.replace(/834E/g, 'ク');
    text = text.replace(/8350/g, 'ケ');
    text = text.replace(/8352/g, 'コ');
    text = text.replace(/か/g, '%B%0');
    text = text.replace(/き/g, '%BA%1');
    text = text.replace(/く/g, '%AB%2');
    text = text.replace(/け/g, '%CB%3');
    text = text.replace(/こ/g, '%BC%4');
    text = text.replace(/カ/g, '%DB%5');
    text = text.replace(/キ/g, '%BD%6');
    text = text.replace(/ク/g, '%EB%7');
    text = text.replace(/ケ/g, '%BE%8');
    text = text.replace(/コ/g, '%FB%9');
    text = text.replace(/82B3/g, 'さ');
    text = text.replace(/82B5/g, 'し');
    text = text.replace(/82B7/g, 'す');
    text = text.replace(/82B9/g, 'せ');
    text = text.replace(/82BB/g, 'そ');
    text = text.replace(/8354/g, 'サ');
    text = text.replace(/8356/g, 'シ');
    text = text.replace(/8358/g, 'ス');
    text = text.replace(/835A/g, 'セ');
    text = text.replace(/835C/g, 'ソ');
    text = text.replace(/さ/g, '%C%0');
    text = text.replace(/し/g, '%C%1');
    text = text.replace(/す/g, '%C%2');
    text = text.replace(/せ/g, '%C%3');
    text = text.replace(/そ/g, '%C%4');
    text = text.replace(/サ/g, '%C%5');
    text = text.replace(/シ/g, '%C%6');
    text = text.replace(/ス/g, '%C%7');
    text = text.replace(/セ/g, '%C%8');
    text = text.replace(/ソ/g, '%C%9');
  }

  text = text.replace(/%/g, '');
  text = text.replace(/\s+/g, '');
  return text;
};

exports.conversion = conversion;

var code = function code(text) {
  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  text = conversion(text, num);
  text = text.replace(/A/g, 'a');
  text = text.replace(/B/g, 'b');
  text = text.replace(/C/g, 'c');
  text = text.replace(/D/g, 'd');
  text = text.replace(/E/g, 'e');
  text = text.replace(/F/g, 'f');
  text = text.replace(/a/g, '1945');
  text = text.replace(/b/g, '3784');
  text = text.replace(/c/g, '8912');
  text = text.replace(/d/g, '4132');
  text = text.replace(/e/g, '7234');
  text = text.replace(/f/g, '5321');
  text = text.replace(/45/g, '79');
  console.log(text);
  /*console.log(text);
  text = Number(text)
  text = text.toString(16)
  text = String(text)
  console.log(text);*/

  text = text.replace(/,/g, '9');
  text = text.replace(/_/g, '3');
  text = text.replace(/\{/g, '13');
  text = text.replace(/\$/g, '1012');
  text = text.replace(/=/g, '1');
  text = '1' + text;

  if (text.indexOf('18') != -1) {
    text = Number(text);
    text = text.toString(18);
  } else if (text.indexOf('19') != -1) {
    text = Number(text);
    text = text.toString(19);
  } else if (text.indexOf('20') != -1) {
    text = Number(text);
    text = text.toString(20);
  } else if (text.indexOf('21') != -1) {
    text = Number(text);
    text = text.toString(21);
  } else if (text.indexOf('22') != -1) {
    text = Number(text);
    text = text.toString(22);
  } else if (text.indexOf('23') != -1) {
    text = Number(text);
    text = text.toString(23);
  } else if (text.indexOf('24') != -1) {
    text = Number(text);
    text = text.toString(24);
  } else if (text.indexOf('25') != -1) {
    text = Number(text);
    text = text.toString(25);
  } else if (text.indexOf('26') != -1) {
    text = Number(text);
    text = text.toString(26);
  } else if (text.indexOf('27') != -1) {
    text = Number(text);
    text = text.toString(27);
  } else if (text.indexOf('28') != -1) {
    text = Number(text);
    text = text.toString(28);
  } else if (text.indexOf('29') != -1) {
    text = Number(text);
    text = text.toString(29);
  } else {
    text = Number(text);
    text = text.toString(36);
  }

  return text;
};

exports.code = code;