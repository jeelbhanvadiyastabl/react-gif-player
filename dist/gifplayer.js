(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["GifPlayer"] = factory(require("prop-types"), require("react"));
	else
		root["GifPlayer"] = factory(root["PropTypes"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2016 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tclasses.push(classNames.apply(null, arg));\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack://GifPlayer/./node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/react-lifecycles-compat/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\n// Older versions of React do not support static getDerivedStateFromProps.\n// As a workaround, use cWM and cWRP to invoke the new static lifecycle.\n// Newer versions of React will ignore these methods if gDSFP exists.\nfunction componentWillMount() {\n  // Call this.constructor.gDSFP to support sub-classes.\n  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);\n  if (state !== null && state !== undefined) {\n    this.setState(state);\n  }\n}\n\nfunction componentWillReceiveProps(nextProps) {\n  // Call this.constructor.gDSFP to support sub-classes.\n  var state = this.constructor.getDerivedStateFromProps(nextProps, this.state);\n  if (state !== null && state !== undefined) {\n    this.setState(state);\n  }\n}\n\n// React may warn about cWM/cWRP/cWU methods being deprecated.\n// Add a flag to suppress these warnings for this special case.\ncomponentWillMount.__suppressDeprecationWarning = true;\ncomponentWillReceiveProps.__suppressDeprecationWarning = true;\n\nmodule.exports = function polyfill(Component) {\n  if (!Component.prototype || !Component.prototype.isReactComponent) {\n    throw new Error('Can only polyfill class components');\n  }\n\n  if (typeof Component.getDerivedStateFromProps === 'function') {\n    if (typeof Component.prototype.componentWillMount === 'function') {\n      throw new Error('Cannot polyfill if componentWillMount already exists');\n    } else if (\n      typeof Component.prototype.componentWillReceiveProps === 'function'\n    ) {\n      throw new Error(\n        'Cannot polyfill if componentWillReceiveProps already exists'\n      );\n    }\n\n    Component.prototype.componentWillMount = componentWillMount;\n    Component.prototype.componentWillReceiveProps = componentWillReceiveProps;\n  }\n\n  return Component;\n};\n\n\n//# sourceURL=webpack://GifPlayer/./node_modules/react-lifecycles-compat/index.js?");

/***/ }),

/***/ "./src/GifPlayer.js":
/*!**************************!*\
  !*** ./src/GifPlayer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _GifPlayer_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GifPlayer.scss */ \"./src/GifPlayer.scss\");\n/* harmony import */ var _GifPlayer_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_GifPlayer_scss__WEBPACK_IMPORTED_MODULE_3__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n\n\nvar GifPlayer = function GifPlayer(_ref) {\n  var gif = _ref.gif,\n      still = _ref.still,\n      playing = _ref.playing,\n      toggle = _ref.toggle,\n      rest = _objectWithoutPropertiesLoose(_ref, [\"gif\", \"still\", \"playing\", \"toggle\"]);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('gif_player', {\n      'playing': playing\n    }),\n    onClick: toggle\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"play_button\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", _extends({}, rest, {\n    src: playing ? gif || still : still || gif\n  })));\n};\n\nGifPlayer.propTypes = {\n  gif: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  still: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  playing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (GifPlayer);\n\n//# sourceURL=webpack://GifPlayer/./src/GifPlayer.js?");

/***/ }),

/***/ "./src/GifPlayer.scss":
/*!****************************!*\
  !*** ./src/GifPlayer.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://GifPlayer/./src/GifPlayer.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lifecycles-compat */ \"./node_modules/react-lifecycles-compat/index.js\");\n/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _GifPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GifPlayer */ \"./src/GifPlayer.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }\n\n\n\n\n\n\nvar preload = function preload(src, callback) {\n  var img = new Image();\n\n  if (typeof callback === 'function') {\n    img.onload = function () {\n      return callback(img);\n    };\n\n    img.setAttribute('crossOrigin', 'anonymous');\n  }\n\n  img.src = src;\n};\n\nvar firstGifFrameUrl = function firstGifFrameUrl(img) {\n  var canvas = document.createElement('canvas');\n\n  if (typeof canvas.getContext !== 'function') {\n    return null;\n  }\n\n  canvas.width = img.width;\n  canvas.height = img.height;\n  var ctx = canvas.getContext('2d');\n  ctx.drawImage(img, 0, 0);\n  return canvas.toDataURL();\n};\n\nvar GifPlayerContainer =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inheritsLoose(GifPlayerContainer, _React$Component);\n\n  GifPlayerContainer.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {\n    var prevGif = prevState.providedGif;\n    var nextGif = nextProps.gif;\n    var prevStill = prevState.providedStill;\n    var nextStill = nextProps.still;\n\n    if (prevGif === nextGif && prevStill === nextStill) {\n      return null;\n    }\n\n    return {\n      playing: nextGif && nextProps.autoplay && prevGif !== nextGif ? true : prevState.playing,\n      providedGif: nextGif,\n      providedStill: nextStill,\n      actualGif: nextGif,\n      actualStill: nextStill || prevGif !== nextGif ? nextStill : prevState.actualStill\n    };\n  };\n\n  function GifPlayerContainer(props) {\n    var _this;\n\n    _this = _React$Component.call(this, props) || this;\n    _this.state = {\n      playing: Boolean(props.autoplay),\n      providedGif: props.gif,\n      providedStill: props.still,\n      actualGif: props.gif,\n      actualStill: props.still\n    };\n    _this.updateId = -1;\n    return _this;\n  }\n\n  var _proto = GifPlayerContainer.prototype;\n\n  _proto.componentDidMount = function componentDidMount() {\n    var _this2 = this;\n\n    if (typeof this.props.pauseRef === 'function') {\n      this.props.pauseRef(function () {\n        return _this2.setState({\n          playing: false\n        });\n      });\n    }\n\n    this.updateImages();\n  };\n\n  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {\n    this.updateImages(prevState);\n    var onTogglePlay = this.props.onTogglePlay;\n\n    if (prevState.playing !== this.state.playing && typeof onTogglePlay === 'function') {\n      onTogglePlay(this.state.playing);\n    }\n  };\n\n  _proto.updateImages = function updateImages(prevState) {\n    var _this3 = this;\n\n    if (prevState === void 0) {\n      prevState = {};\n    }\n\n    var _this$state = this.state,\n        providedGif = _this$state.providedGif,\n        providedStill = _this$state.providedStill;\n\n    if (providedGif && !providedStill && providedGif !== prevState.providedGif) {\n      var updateId = ++this.updateId;\n      preload(providedGif, function (img) {\n        if (_this3.updateId === updateId) {\n          var actualStill = firstGifFrameUrl(img);\n\n          if (actualStill) {\n            _this3.setState({\n              actualStill: actualStill\n            });\n          }\n        }\n      });\n    }\n  };\n\n  _proto.toggle = function toggle() {\n    this.setState({\n      playing: !this.state.playing\n    });\n  };\n\n  _proto.render = function render() {\n    var _this4 = this;\n\n    // extract these props but pass down the rest\n    var _this$props = this.props,\n        autoplay = _this$props.autoplay,\n        pauseRef = _this$props.pauseRef,\n        onTogglePlay = _this$props.onTogglePlay,\n        rest = _objectWithoutPropertiesLoose(_this$props, [\"autoplay\", \"pauseRef\", \"onTogglePlay\"]);\n\n    var _this$state2 = this.state,\n        actualGif = _this$state2.actualGif,\n        actualStill = _this$state2.actualStill,\n        playing = _this$state2.playing;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GifPlayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _extends({}, rest, {\n      gif: actualGif,\n      still: actualStill,\n      playing: playing,\n      toggle: function toggle() {\n        return _this4.toggle();\n      }\n    }));\n  };\n\n  return GifPlayerContainer;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nreact_lifecycles_compat__WEBPACK_IMPORTED_MODULE_2___default()(GifPlayerContainer);\nGifPlayerContainer.propTypes = {\n  gif: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  still: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  autoplay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  pauseRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  onTogglePlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (GifPlayerContainer);\n\n//# sourceURL=webpack://GifPlayer/./src/index.js?");

/***/ }),

/***/ "prop-types":
/*!*********************************************************************************************************!*\
  !*** external {"root":"PropTypes","commonjs":"prop-types","commonjs2":"prop-types","amd":"prop-types"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;\n\n//# sourceURL=webpack://GifPlayer/external_%7B%22root%22:%22PropTypes%22,%22commonjs%22:%22prop-types%22,%22commonjs2%22:%22prop-types%22,%22amd%22:%22prop-types%22%7D?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://GifPlayer/external_%7B%22root%22:%22React%22,%22commonjs%22:%22react%22,%22commonjs2%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ })

/******/ })["default"];
});