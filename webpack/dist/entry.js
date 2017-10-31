/*! 翻版必究 */
webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

var _common = __webpack_require__(3);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import $ from 'jquery';
var oDiv = document.createElement("div");
oDiv.innerHTML = 'hello world123！';
document.body.appendChild(oDiv);
var a = 5;
var foo = function foo(x, y) {
    return x + y;
};
var b = 10;
// $('#div4').html('test jquery');

var json = __webpack_require__(4);
$('#json').html('\u4F5C\u8005\u662F' + json.name + ',\u5E74\u9F84\u662F' + json.age);

var Idol = function () {
    function Idol(name, age) {
        _classCallCheck(this, Idol);

        this.name = name;
        this.age = age;
    }

    _createClass(Idol, [{
        key: 'show',
        value: function show() {
            return [this.name, this.age];
        }
    }]);

    return Idol;
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {"name":"lixue","age":20}

/***/ })
],[1]);