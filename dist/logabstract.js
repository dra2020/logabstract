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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/all.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/all.ts":
/*!********************!*\
  !*** ./lib/all.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./log */ "./lib/log.ts"));


/***/ }),

/***/ "./lib/log.ts":
/*!********************!*\
  !*** ./lib/log.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Util = __webpack_require__(/*! @dra2020/util */ "./node_modules/@dra2020/util/dist/util.js");
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

/***/ "./node_modules/@dra2020/util/dist/util.js":
/*!*************************************************!*\
  !*** ./node_modules/@dra2020/util/dist/util.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(global, function() {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/all.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/all.ts":
/*!********************!*\
  !*** ./lib/all.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./util */ "./lib/util.ts"));
__export(__webpack_require__(/*! ./countedhash */ "./lib/countedhash.ts"));
__export(__webpack_require__(/*! ./indexedarray */ "./lib/indexedarray.ts"));


/***/ }),

/***/ "./lib/countedhash.ts":
/*!****************************!*\
  !*** ./lib/countedhash.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CountedHash {
    constructor() {
        this.n = 0;
        this.val = {};
    }
    get length() { return this.n; }
    test(id) {
        return id != '' && this.val[id] !== undefined;
    }
    set(id) {
        if (id != '' && !this.test(id)) {
            this.n++;
            this.val[id] = true;
        }
    }
    clear(id) {
        if (this.test(id)) {
            this.n--;
            delete this.val[id];
        }
    }
    empty() {
        this.n = 0;
        this.val = {};
    }
    asArray() {
        let a = [];
        this.forEach(id => { a.push(id); });
        return a;
    }
    asString() {
        for (var id in this.val)
            if (this.val.hasOwnProperty(id))
                return id;
        return '';
    }
    forEach(f) {
        for (var id in this.val)
            if (this.val.hasOwnProperty(id))
                f(id);
    }
}
exports.CountedHash = CountedHash;


/***/ }),

/***/ "./lib/indexedarray.ts":
/*!*****************************!*\
  !*** ./lib/indexedarray.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class IndexedArray {
    constructor() {
        this.o = {};
        this.a = null;
    }
    ensure() {
        if (this.a === null) {
            this.a = [];
            for (let p in this.o)
                if (this.o.hasOwnProperty(p))
                    this.a.push(p);
            this.a.sort((a, b) => { a = a.toUpperCase(); b = b.toUpperCase(); return a < b ? -1 : (a > b ? 1 : 0); });
        }
    }
    get length() { this.ensure(); return this.a.length; }
    test(s) {
        return !!s && this.o[s] !== undefined;
    }
    set(s) {
        if (!!s && !this.test(s)) {
            this.o[s] = true;
            this.a = null;
        }
    }
    setAll(a) {
        if (a && a.length)
            for (let i = 0; i < a.length; i++)
                this.set(a[i]);
    }
    clear(s) {
        if (this.test(s)) {
            delete this.o[s];
            this.a = null;
        }
    }
    at(i) {
        this.ensure();
        if (i < 0 || i >= this.a.length)
            return undefined;
        return this.a[i];
    }
    empty() {
        this.o = {};
        this.a = null;
    }
    forEach(f) {
        for (var s in this.o)
            if (this.o.hasOwnProperty(s))
                f(s);
    }
}
exports.IndexedArray = IndexedArray;


/***/ }),

/***/ "./lib/util.ts":
/*!*********************!*\
  !*** ./lib/util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function Now() { return (new Date()).toJSON(); }
exports.Now = Now;
class Elapsed {
    constructor(bStart = true) {
        this.tStart = undefined;
        this.tDur = undefined;
        if (bStart)
            this.start();
    }
    start() {
        if (process)
            this.tStart = process.hrtime();
        else
            this.tStart = performance.now();
    }
    end() {
        if (this.tStart === undefined)
            this.start();
        if (process)
            this.tDur = process.hrtime(this.tStart);
        else
            this.tDur = performance.now() - this.tStart;
    }
    ms() {
        if (this.tDur === undefined)
            this.end();
        if (process)
            return Math.round((this.tDur[0] * 1000) + (this.tDur[1] / 1000000));
        else
            return this.tDur;
    }
    nano() {
        if (process)
            return (this.tDur[0] * 1000000000) + this.tDur[1];
        else
            return this.tDur * 1000000;
    }
}
exports.Elapsed = Elapsed;
class Deadline {
    constructor(msDelta) {
        this.msDelta = msDelta;
        this.elapsed = new Elapsed();
    }
    done() {
        this.elapsed.end();
        return this.elapsed.ms() > this.msDelta;
    }
}
exports.Deadline = Deadline;
function createGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
exports.createGuid = createGuid;
function _sizeof(a, loops) {
    if (a === null || a === undefined)
        return 0;
    switch (typeof a) {
        default: return 0;
        case 'number': return 8;
        case 'boolean': return 4;
        case 'string': return a.length * 2;
        case 'object':
            {
                if (loops.has(a))
                    return 0;
                else
                    loops.set(a, true);
                let t = 0;
                if (Array.isArray(a)) {
                    for (let i = 0; i < a.length; i++)
                        t += _sizeof(a[i], loops);
                    t += 8; // length
                }
                else if (Buffer.isBuffer(a)) {
                    t = a.length;
                }
                else if (a.hasOwnProperty === undefined)
                    return t;
                else {
                    for (var key in a)
                        if (a.hasOwnProperty && a.hasOwnProperty(key)) {
                            t += _sizeof(key, loops); // this is a good estimate of download size, but poor estimate of internal size
                            // because of JS object templating vs. naive hashtables
                            t += _sizeof(a[key], loops);
                        }
                }
                return t;
            }
    }
}
function sizeof(a) {
    let loops = new WeakMap();
    let n = _sizeof(a, loops);
    return n;
}
exports.sizeof = sizeof;
function depthof(a) {
    if (a === null || a === undefined)
        return 1;
    switch (typeof a) {
        default: return 1;
        case 'number': return 1;
        case 'boolean': return 1;
        case 'string': return 1;
        case 'object':
            {
                let d = 0;
                if (Array.isArray(a))
                    return a.length > 0 ? (1 + depthof(a[0])) : 2; // still return 2 for empty array
                else if (Buffer.isBuffer(a))
                    return 2;
                else if (a.hasOwnProperty === undefined)
                    return 1;
                else {
                    for (var key in a)
                        if (a.hasOwnProperty(key))
                            return 1 + depthof(a[key]);
                    return 2; // or 2 for empty object
                }
            }
    }
}
exports.depthof = depthof;
function isEmpty(o) {
    if (o === null || o === undefined)
        return true;
    for (var p in o)
        if (o.hasOwnProperty(p))
            return false;
    return true;
}
exports.isEmpty = isEmpty;
function countKeys(o) {
    if (o === undefined || typeof o !== 'object')
        return -1;
    let count = 0;
    for (let p in o)
        if (o.hasOwnProperty(p))
            count++;
    return count;
}
exports.countKeys = countKeys;
function nthProperty(o, n = 0) {
    for (let p in o)
        if (o.hasOwnProperty(p)) {
            if (n <= 0)
                return o[p];
            n--;
        }
    return undefined;
}
exports.nthProperty = nthProperty;
function partialEqual(o, subset) {
    for (let p in subset)
        if (subset.hasOwnProperty(p))
            if (o[p] !== subset[p])
                return false;
    return true;
}
exports.partialEqual = partialEqual;
function deepEqual(o1, o2) {
    if (typeof o1 !== typeof o2)
        return false;
    if (typeof o1 !== 'object')
        return o1 === o2;
    // Special case array
    if (Array.isArray(o1)) {
        if (!Array.isArray(o2))
            return false;
        if (o1.length != o2.length)
            return false;
        for (let i = 0; i < o1.length; i++)
            if (!deepEqual(o1[i], o2[i]))
                return false;
        return true;
    }
    // Special case object
    if (o1.hasOwnProperty === undefined || o2.hasOwnProperty === undefined)
        return o1 === o2;
    for (let p in o1)
        if (o1.hasOwnProperty(p)) {
            if (o2[p] === undefined)
                return false;
            if (!deepEqual(o1[p], o2[p]))
                return false;
        }
    // If any properties in o2 aren't in o1, not equal
    for (let p in o2)
        if (o2.hasOwnProperty(p))
            if (o1[p] === undefined)
                return false;
    return true;
}
exports.deepEqual = deepEqual;
const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function prettyDate(d) {
    if (d == null)
        return 'unknown';
    let mmm = Months[d.getMonth()];
    let dd = d.getDate();
    let yyyy = d.getFullYear();
    let hh = d.getHours();
    let m = d.getMinutes();
    let mm = m < 10 ? `0${m}` : String(m);
    let ampm = hh >= 12 ? 'PM' : 'AM';
    if (hh > 12)
        hh -= 12;
    return `${mmm} ${dd}, ${yyyy} at ${hh}:${mm} ${ampm}`;
}
exports.prettyDate = prettyDate;
function textToHtml(sText) {
    let lines = sText.split('\n');
    let aHtml = [];
    let inTable = false;
    aHtml.push('<body>');
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        let isRow = line.indexOf('|') === 0;
        if (inTable && !isRow) {
            aHtml.push('</tbody></table>');
            inTable = false;
        }
        if (isRow && !inTable) {
            inTable = true;
            aHtml.push('<table border="1" cellspacing="0" cellpadding="2"><tbody>');
        }
        if (isRow) {
            let cells = line.split('|');
            if (cells.length > 2) {
                aHtml.push('<tr>');
                for (let j = 1; j < cells.length - 1; j++)
                    aHtml.push(`<td>${cells[j]}</td>`);
                aHtml.push('</tr>');
            }
        }
        else
            aHtml.push(`<div>${line}&nbsp;</div>`);
    }
    if (inTable)
        aHtml.push('</tbody></table>');
    aHtml.push('</body>');
    return aHtml.join('');
}
exports.textToHtml = textToHtml;
function shallowCopy(src) {
    if (src === null || src === undefined)
        return src;
    switch (typeof src) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'symbol':
        case 'function':
        default:
            return src;
        case 'object':
            if (Array.isArray(src))
                return src.slice();
            else {
                let copy = {};
                for (var p in src)
                    if (src.hasOwnProperty(p))
                        copy[p] = src[p];
                return copy;
            }
    }
}
exports.shallowCopy = shallowCopy;
function shallowAssign(o1, o2) {
    if (o1 === null || o1 === undefined)
        o1 = {};
    if (o2 === null || o2 === undefined)
        return o1;
    if (typeof o2 !== 'object' || typeof o1 !== 'object')
        return o1;
    for (var p in o2)
        if (o2.hasOwnProperty(p))
            o1[p] = o2[p];
    return o1;
}
exports.shallowAssign = shallowAssign;
function shallowAssignImmutable(o1, o2) {
    if (o1 === null || o1 === undefined)
        o1 = {};
    if (o2 === null || o2 === undefined)
        return o1;
    if (typeof o2 !== 'object' || typeof o1 !== 'object')
        return o1;
    // First determine whether o2 changes any properties, if it has, make new instance
    let oNew = o1;
    for (let p in o2)
        if (o2.hasOwnProperty(p)) {
            if (o1[p] != o2[p]) {
                oNew = shallowCopy(o1);
                break;
            }
        }
    if (oNew !== o1)
        shallowAssign(oNew, o2);
    return oNew;
}
exports.shallowAssignImmutable = shallowAssignImmutable;
function shallowEqual(o1, o2) {
    if (o1 === undefined || o2 === undefined || typeof o1 !== 'object' || typeof o2 !== 'object')
        return o1 === o2;
    if (Array.isArray(o1) && Array.isArray(o2)) {
        if (o1.length != o2.length)
            return false;
        for (let i = 0; i < o1.length; i++)
            if (o1[i] !== o2[i])
                return false;
        return true;
    }
    else {
        let p;
        for (p in o1)
            if (o1.hasOwnProperty(p))
                if (o1[p] !== o2[p])
                    return false;
        for (p in o2)
            if (o2.hasOwnProperty(p))
                if (o1[p] === undefined)
                    return false;
        return true;
    }
}
exports.shallowEqual = shallowEqual;
function deepCopy(src) {
    // Beware typeof oddities
    if (src === null || src === undefined)
        return src;
    if (typeof src === 'object') {
        if (Array.isArray(src)) {
            let dst = [];
            for (let i = 0; i < src.length; i++)
                dst.push(deepCopy(src[i]));
            return dst;
        }
        else {
            if (src.hasOwnProperty === undefined)
                return src;
            let dst = {};
            for (var p in src)
                if (src.hasOwnProperty(p))
                    dst[p] = deepCopy(src[p]);
            return dst;
        }
    }
    else
        return src;
}
exports.deepCopy = deepCopy;
function precisionRound(n, p) {
    let f = Math.pow(10, p);
    return Math.round(n * f) / f;
}
exports.precisionRound = precisionRound;
function percentString(num, den, precision = 0) {
    if (den == 0)
        return '(-)';
    let p = precisionRound((num / den) * 100, precision);
    return String(p) + '%';
}
exports.percentString = percentString;
function hash(s) {
    let hash = 5381;
    let i = s.length;
    while (i)
        hash = (hash * 33) ^ s.charCodeAt(--i);
    /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
     * integers. Since we want the results to be always positive, convert the
     * signed int to an unsigned by doing an unsigned bitshift. */
    return hash >>> 0;
}
exports.hash = hash;
function hashObject(o) {
    return hash(o ? JSON.stringify(o) : '');
}
exports.hashObject = hashObject;
const HexTable = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
function toHex(n) {
    if (n < 0 || n > 255)
        throw ('only 0 to 255 supported now');
    n = Math.floor(n);
    return HexTable[n >> 4] + HexTable[n & 15];
}
exports.toHex = toHex;
function toRGBA(color, alpha) {
    let r;
    let g;
    let b;
    switch (color) {
        case 'white':
            r = 255;
            g = 255;
            b = 255;
            break;
        case 'black':
            r = 0;
            g = 0;
            b = 0;
            break;
        default:
            r = parseInt(color.substr(1, 2), 16);
            g = parseInt(color.substr(3, 2), 16);
            b = parseInt(color.substr(5, 2), 16);
            break;
    }
    return `rgba(${String(r)}, ${String(g)}, ${String(b)}, ${String(alpha)})`;
}
exports.toRGBA = toRGBA;
function toRGBAIntensity(color, intensity, alpha) {
    // for now assume color is black
    let g = precisionRound(255 * intensity, 0);
    return `rgba(${String(g)}, ${String(g)}, ${String(g)}, ${String(alpha)})`;
}
exports.toRGBAIntensity = toRGBAIntensity;
// Geo functions
function distance(x0, y0, x1, y1) {
    return Math.hypot(x0 - x1, y0 - y1);
}
exports.distance = distance;
function deg2rad(num) { return num * Math.PI / 180; }
exports.deg2rad = deg2rad;
function rad2deg(num) { return num / Math.PI * 180; }
exports.rad2deg = rad2deg;
// Restricts lon to range [-180..180]
function wrapLon(lon) {
    let worlds = Math.floor((lon + 180) / 360);
    return lon - (worlds * 360);
}
exports.wrapLon = wrapLon;


/***/ })

/******/ });
});


/***/ })

/******/ });
});
//# sourceMappingURL=logabstract.js.map