(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["logabstract"] = factory();
	else
		root["logabstract"] = factory();
})(global, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/all.ts":
/*!********************!*\
  !*** ./lib/all.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./log */ "./lib/log.ts"), exports);


/***/ }),

/***/ "./lib/log.ts":
/*!********************!*\
  !*** ./lib/log.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SyncTimer = exports.AsyncTimer = exports.Timer = void 0;
const Util = __webpack_require__(/*! @dra2020/util */ "@dra2020/util");
class Timer {
    constructor(ilog, kind, o, verbosity = 0) {
        this.ilog = ilog;
        if (typeof o === 'string')
            o = { event: o };
        this.o = o;
        this.o.kind = kind;
        this.verbosity = verbosity;
        this.elapsed = new Util.Elapsed();
    }
    log() {
        this.elapsed.end();
        this.o.ms = this.elapsed.ms();
        this.ilog.log(this.o, this.verbosity);
    }
}
exports.Timer = Timer;
class AsyncTimer extends Timer {
    constructor(ilog, o, verbosity = 0) {
        super(ilog, 'async', o, verbosity);
    }
}
exports.AsyncTimer = AsyncTimer;
class SyncTimer extends Timer {
    constructor(ilog, o, verbosity = 0) {
        super(ilog, 'sync', o, verbosity);
    }
}
exports.SyncTimer = SyncTimer;


/***/ }),

/***/ "@dra2020/util":
/*!********************************!*\
  !*** external "@dra2020/util" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@dra2020/util");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./lib/all.ts");
/******/ })()
;
});
//# sourceMappingURL=logabstract.js.map