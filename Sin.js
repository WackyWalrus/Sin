/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Sin = module.exports;

Sin.cache = {};

function cache(elem) {
    var timestamp = Date.now(),
        classIndex,
        classes,
        i;
    if (elem.className.indexOf('sin-cache') === -1) {
        elem.className += 'sin-cache-' + timestamp;
        Sin.cache['sin-cache-' + timestamp] = {
            'elem': elem,
            'originDisplay': window.getComputedStyle(elem).getPropertyValue('display')
        };
        return Sin.cache['sin-cache-' + timestamp];
    }

    classes = elem.className.split(' ');
    for (i = 0; i < classes.length; i += 1) {
        if (classes[i].indexOf('sin-cache') !== -1) {
            classIndex = classes[i];
            break;
        }
    }
    if (classIndex === null ||
            classIndex === undefined) {
        return false;
    }
    if (Sin.cache.hasOwnProperty(classIndex)) {
        return Sin.cache[classIndex];
    }
}

Sin.show = function (elem) {
    elem = cache(elem);
    if (typeof elem.elem === 'object') {
        elem.elem.style.display = elem.originDisplay;
        return true;
    }
    return false;
};

Sin.hide = function (elem) {
    elem = cache(elem);
    if (typeof elem === 'object') {
        elem.elem.style.display = 'none';
    }
};

Sin.find = function (elem, find) {
    if (typeof elem !== 'object' ||
            !elem.hasOwnProperty('querySelectorAll')) {
        return false;
    }
    var search = elem.querySelectorAll(find);
    if (search !== null &&
            search !== undefined &&
            search.length !== 0) {
        return search;
    }
    return false;
};

Sin.closest = function (elem, find) {
    var found = false,
        node = elem,
        searchFor;

    function idSearch() {
        if (node.id === null ||
                node.id === undefined) {
            return false;
        }
        if (node.id === find.replace('#', '')) {
            return true;
        }
        return false;
    }

    function classSearch() {
        if (node.className === null ||
                node.className === undefined) {
            return false;
        }
        // check if we're searching for an item with one class or multiple
        var nodeClasses = node.className.split(' '),
            findClasses = find.split('.'),
            i;
        // searching for an item with one class
        if (findClasses.length === 1) {
            if (nodeClasses.indexOf(find.replace('.', '')) !== -1) {
                return true;
            }
            return false;
        }

        for (i = 1; i < findClasses.length; i += 1) {
            if (nodeClasses.indexOf(findClasses[i]) === -1) {
                return false;
            }
        }
        return true;
    }

    function tagName() {
        if (node.tagName.toLowerCase() === find.toLowerCase()) {
            return true;
        }
        return false;
    }

    searchFor = (find.indexOf('#') === 0) ? idSearch : (find.indexOf('.') !== -1) ? classSearch : tagName;

    while (found === false) {
        node = node.parentNode;
        if (node === null) {
            return false;
        }
        if (searchFor()) {
            found = true;
        }
    }

    return node;
};

Sin.html = function (elem, setTo) {
    if (typeof elem !== 'object' ||
            !elem.hasOwnProperty('innerHTML')) {
        return false;
    }

    if (setTo === undefined) {
        return elem.innerHTML;
    }

    elem.innerHTML = setTo;
    return setTo;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);