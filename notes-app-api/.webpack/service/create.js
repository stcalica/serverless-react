(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./create.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./create.js":
/*!*******************!*\
  !*** ./create.js ***!
  \*******************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"main\", function() { return main; });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_dyanmodb_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/dyanmodb-lib */ \"./libs/dyanmodb-lib.js\");\n/* harmony import */ var _libs_lib_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/lib-response */ \"./libs/lib-response.js\");\n\n\n\n\nasync function main(event, context, callback) {\n  const data = JSON.parse(event.body);\n  const params = {\n    TableName: \"notes\",\n    Item: {\n      userId: event.requestContext.identity.cognitoIdentityId,\n      noteId: uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v1(),\n      content: data.content,\n      attachment: data.attachment,\n      createdAt: new Date().getTime()\n    }\n  };\n\n  try {\n    await _libs_dyanmodb_lib__WEBPACK_IMPORTED_MODULE_1__[\"call\"](\"put\", params);\n    callback(null, Object(_libs_lib_response__WEBPACK_IMPORTED_MODULE_2__[\"success\"])(params.Item));\n  } catch (e) {\n    callback(null, Object(_libs_lib_response__WEBPACK_IMPORTED_MODULE_2__[\"failure\"])({ status: false }));\n  }\n}\n\n//# sourceURL=webpack:///./create.js?");

/***/ }),

/***/ "./libs/dyanmodb-lib.js":
/*!******************************!*\
  !*** ./libs/dyanmodb-lib.js ***!
  \******************************/
/*! exports provided: call */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"call\", function() { return call; });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\n\naws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.config.update({ region: \"us-east-2\" });\n\nfunction call(action, params) {\n  const dynamoDb = new aws_sdk__WEBPACK_IMPORTED_MODULE_0___default.a.DynamoDB.DocumentClient();\n\n  return dynamoDb[action](params).promise();\n}\n\n//# sourceURL=webpack:///./libs/dyanmodb-lib.js?");

/***/ }),

/***/ "./libs/lib-response.js":
/*!******************************!*\
  !*** ./libs/lib-response.js ***!
  \******************************/
/*! exports provided: success, failure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"success\", function() { return success; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"failure\", function() { return failure; });\nfunction success(body) {\n  return buildResponse(200, body);\n}\n\nfunction failure(body) {\n  return buildResponse(500, body);\n}\n\nfunction buildResponse(statusCode, body) {\n  return {\n    statusCode: statusCode,\n    headers: {\n      \"Access-Control-Allow-Origin\": \"*\",\n      \"Access-Control-Allow-Credentials\": true\n    },\n    body: JSON.stringify(body)\n  };\n}\n\n//# sourceURL=webpack:///./libs/lib-response.js?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");\n\n//# sourceURL=webpack:///external_%22aws-sdk%22?");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");\n\n//# sourceURL=webpack:///external_%22uuid%22?");

/***/ })

/******/ })));