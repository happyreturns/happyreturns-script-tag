/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 19631:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

  "use strict";
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "ZP": () => (/* binding */ main)
  /* harmony export */ });
  /* unused harmony exports getReturnShoppingRequest, activateHook, getScriptURL */
  /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85005);
  /* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39817);
  /* module decorator */ module = __webpack_require__.hmd(module);
  (function () {
    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
    enterModule && enterModule(module);
  })();
  
  var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
    return a;
  };
  
  
  
  function main() {
    // if there are duplicate script tags
    // belay this script tag
    if (window.hr_rsz) {
      return;
    } // grab shopping request from URL or localStorage
  
  
    var returnShoppingRequest = getReturnShoppingRequest(); // if there's no shopping request, we skip activation of the hook
  
    if (!returnShoppingRequest) return;
    activateHook(returnShoppingRequest);
  }
  function getReturnShoppingRequest() {
    var _location$href$match;
  
    var returnShoppingRequest = (_location$href$match = location.href.match(/#hr_rsz=([^]+)$/)) === null || _location$href$match === void 0 ? void 0 : _location$href$match[1]; // if it's a URL-based return shopping request, let's strip it and persist it
  
    if (returnShoppingRequest) {
      var decodedRequest = decodeURIComponent(returnShoppingRequest); // persist the shopping request
  
      localStorage.setItem("hr_rsz", decodedRequest); // strip from the URL
  
      history.replaceState(null, document.title, window.location.pathname + window.location.search); // return the shopping request
  
      return decodedRequest;
    } // if request is not URL based
    // return stored shopping request (if none exists, will be null)
  
  
    return localStorage.getItem("hr_rsz");
  }
  function activateHook(reqStr) {
    try {
      var req = JSON.parse(reqStr); // hook shouldn't need to reparse from local storage
  
      window.hr_rsz = req;
      var scriptURL = getScriptURL(req);
      var $script = document.createElement("script"); // needed to prevent some cookie/ad blockers from removing script
  
      $script.setAttribute("data-ot-ignore", "");
      $script.src = scriptURL;
      document.body.appendChild($script);
    } catch (e) {
      (0,_shared__WEBPACK_IMPORTED_MODULE_1__/* .disableHook */ .d)();
    }
  }
  function getScriptURL(_ref) {
    var url = _ref.url;
    // use prod by default if env is unrecognized
    return "https://".concat(url, "/public/dist/returnshopping-hook.js");
  }
  ;
  
  (function () {
    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  
    if (!reactHotLoader) {
      return;
    }
  
    reactHotLoader.register(main, "main", "/Users/andfuchs/go/src/github.com/happyreturns/returns-app/webpack/returnshopping/loader/index.tsx");
    reactHotLoader.register(getReturnShoppingRequest, "getReturnShoppingRequest", "/Users/andfuchs/go/src/github.com/happyreturns/returns-app/webpack/returnshopping/loader/index.tsx");
    reactHotLoader.register(activateHook, "activateHook", "/Users/andfuchs/go/src/github.com/happyreturns/returns-app/webpack/returnshopping/loader/index.tsx");
    reactHotLoader.register(getScriptURL, "getScriptURL", "/Users/andfuchs/go/src/github.com/happyreturns/returns-app/webpack/returnshopping/loader/index.tsx");
  })();
  
  ;
  
  (function () {
    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
    leaveModule && leaveModule(module);
  })();
  
  /***/ }),
  
  /***/ 39817:
  /***/ ((module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "d": () => (/* binding */ disableHook)
  /* harmony export */ });
  /* module decorator */ module = __webpack_require__.hmd(module);
  (function () {
    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
    enterModule && enterModule(module);
  })();
  
  var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
    return a;
  };
  
  function disableHook() {
    localStorage.removeItem("hr_rsz");
  }
  ;
  
  (function () {
    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  
    if (!reactHotLoader) {
      return;
    }
  
    reactHotLoader.register(disableHook, "disableHook", "/Users/andfuchs/go/src/github.com/happyreturns/returns-app/webpack/returnshopping/shared.tsx");
  })();
  
  ;
  
  (function () {
    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
    leaveModule && leaveModule(module);
  })();
  
  /***/ }),
  
  /***/ 85005:
  /***/ (() => {
  
  var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
    return a;
  };
  
  /***/ })
  
  /******/ 	});
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {};
  /******/ 	
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/ 		// Check if module is in cache
  /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
  /******/ 		if (cachedModule !== undefined) {
  /******/ 			return cachedModule.exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			id: moduleId,
  /******/ 			loaded: false,
  /******/ 			exports: {}
  /******/ 		};
  /******/ 	
  /******/ 		// Execute the module function
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/ 	
  /******/ 		// Flag the module as loaded
  /******/ 		module.loaded = true;
  /******/ 	
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/ 	
  /************************************************************************/
  /******/ 	/* webpack/runtime/compat get default export */
  /******/ 	(() => {
  /******/ 		// getDefaultExport function for compatibility with non-harmony modules
  /******/ 		__webpack_require__.n = (module) => {
  /******/ 			var getter = module && module.__esModule ?
  /******/ 				() => (module['default']) :
  /******/ 				() => (module);
  /******/ 			__webpack_require__.d(getter, { a: getter });
  /******/ 			return getter;
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	(() => {
  /******/ 		// define getter functions for harmony exports
  /******/ 		__webpack_require__.d = (exports, definition) => {
  /******/ 			for(var key in definition) {
  /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
  /******/ 				}
  /******/ 			}
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/harmony module decorator */
  /******/ 	(() => {
  /******/ 		__webpack_require__.hmd = (module) => {
  /******/ 			module = Object.create(module);
  /******/ 			if (!module.children) module.children = [];
  /******/ 			Object.defineProperty(module, 'exports', {
  /******/ 				enumerable: true,
  /******/ 				set: () => {
  /******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
  /******/ 				}
  /******/ 			});
  /******/ 			return module;
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/ 	(() => {
  /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  /******/ 	})();
  /******/ 	
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
  "use strict";
  /* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19631);
  var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
    return a;
  };
  
  
  (0,___WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)();
  })();
  
  /******/ })()
  ;
  //# sourceMappingURL=returnshopping-loader.js.map