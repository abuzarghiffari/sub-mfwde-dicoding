/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([24,1,0,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/small/',
  DEFAULT_LANGUAGE: 'en-us',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurant',
  DATABASE_NAME: 'foody-database',
  CACHE_NAME: 'foody-restaurant'
};
/* harmony default export */ __webpack_exports__["a"] = (CONFIG);

/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var LikeButtonPresenter = {
  init: function init(_ref) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var likeButtonContainer, favoriteRestaurants, restaurant;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              likeButtonContainer = _ref.likeButtonContainer, favoriteRestaurants = _ref.favoriteRestaurants, restaurant = _ref.restaurant;
              _this._likeButtonContainer = likeButtonContainer;
              _this._restaurant = restaurant;
              _this._favoriteRestaurants = favoriteRestaurants;
              _context.next = 6;
              return _this._renderButton();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  _renderButton: function _renderButton() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var id;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = _this2._restaurant.id;
              _context2.next = 3;
              return _this2._restaurantExist(id);

            case 3:
              if (!_context2.sent) {
                _context2.next = 7;
                break;
              }

              _this2._renderLiked();

              _context2.next = 8;
              break;

            case 7:
              _this2._renderLike();

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  _restaurantExist: function _restaurantExist(id) {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var restaurant;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3._favoriteRestaurants.getRestaurantById(id);

            case 2:
              restaurant = _context3.sent;
              return _context3.abrupt("return", !!restaurant);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  _renderLike: function _renderLike() {
    var _this4 = this;

    this._likeButtonContainer.innerHTML = Object(_views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__[/* createLikeButtonTemplate */ "a"])();
    var likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this4._favoriteRestaurants.putRestaurant(_this4._restaurant);

            case 2:
              _this4._renderButton();

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  },
  _renderLiked: function _renderLiked() {
    var _this5 = this;

    this._likeButtonContainer.innerHTML = Object(_views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__[/* createLikedButtonTemplate */ "b"])();
    var likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _this5._favoriteRestaurants.deleteRestaurant(_this5._restaurant.id);

            case 2:
              _this5._renderButton();

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
  }
};
/* harmony default export */ __webpack_exports__["a"] = (LikeButtonPresenter);

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/scripts/globals/config.js
var config = __webpack_require__(0);

// CONCATENATED MODULE: ./src/scripts/globals/api-endpoint.js

var API_ENDPOINT = {
  LIST: "".concat(config["a" /* default */].BASE_URL, "list"),
  DETAIL: function DETAIL(id) {
    return "".concat(config["a" /* default */].BASE_URL, "detail/").concat(id);
  },
  SEARCH: function SEARCH(search) {
    return "".concat(config["a" /* default */].BASE_URL, "search?q=").concat(search);
  }
};
/* harmony default export */ var api_endpoint = (API_ENDPOINT);
// CONCATENATED MODULE: ./src/scripts/data/restaurantsdb-source.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable prefer-promise-reject-errors */


var restaurantsdb_source_RestaurantDbSource = /*#__PURE__*/function () {
  function RestaurantDbSource() {
    _classCallCheck(this, RestaurantDbSource);
  }

  _createClass(RestaurantDbSource, null, [{
    key: "listRestaurants",
    value: function () {
      var _listRestaurants = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(api_endpoint.LIST);

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                responseJson = _context.sent;
                return _context.abrupt("return", responseJson.restaurants);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function listRestaurants() {
        return _listRestaurants.apply(this, arguments);
      }

      return listRestaurants;
    }()
  }, {
    key: "restaurantsDetailById",
    value: function () {
      var _restaurantsDetailById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(api_endpoint.DETAIL(id));

              case 2:
                response = _context2.sent;
                _context2.next = 5;
                return response.json();

              case 5:
                responseJson = _context2.sent;
                return _context2.abrupt("return", responseJson.restaurant);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function restaurantsDetailById(_x) {
        return _restaurantsDetailById.apply(this, arguments);
      }

      return restaurantsDetailById;
    }()
  }, {
    key: "showRestaurant",
    value: function () {
      var _showRestaurant = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(search) {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch(search ? api_endpoint.SEARCH(search) : api_endpoint.LIST);

              case 2:
                response = _context3.sent;
                _context3.next = 5;
                return response.json();

              case 5:
                responseJson = _context3.sent;

                if (!(responseJson.restaurants.length > 0)) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return", Promise.resolve(responseJson.restaurants));

              case 8:
                return _context3.abrupt("return", Promise.reject("".concat(search, " is not found")));

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function showRestaurant(_x2) {
        return _showRestaurant.apply(this, arguments);
      }

      return showRestaurant;
    }()
  }]);

  return RestaurantDbSource;
}();

/* harmony default export */ var restaurantsdb_source = __webpack_exports__["a"] = (restaurantsdb_source_RestaurantDbSource);

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(15);

// EXTERNAL MODULE: ./src/styles/main.css
var main = __webpack_require__(16);

// EXTERNAL MODULE: ./src/scripts/views/components/rest-bar.js
var rest_bar = __webpack_require__(17);

// EXTERNAL MODULE: ./src/scripts/views/components/rest-ter.js
var rest_ter = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/aos/dist/aos.css
var aos = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/aos/dist/aos.js
var dist_aos = __webpack_require__(9);
var dist_aos_default = /*#__PURE__*/__webpack_require__.n(dist_aos);

// CONCATENATED MODULE: ./src/scripts/utils/drawer-initiator.js
var DrawerInitiator = {
  init: function init(_ref) {
    var _this = this;

    var button = _ref.button,
        drawer = _ref.drawer,
        content = _ref.content;
    button.addEventListener('click', function (event) {
      _this._toggleDrawer(event, drawer);
    });
    content.addEventListener('click', function (event) {
      _this._closeDrawer(event, drawer);
    });
  },
  _toggleDrawer: function _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },
  _closeDrawer: function _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  }
};
/* harmony default export */ var drawer_initiator = (DrawerInitiator);
// EXTERNAL MODULE: ./src/scripts/routes/url-parser.js
var url_parser = __webpack_require__(4);

// EXTERNAL MODULE: ./src/scripts/views/pages/home.js
var home = __webpack_require__(7);

// EXTERNAL MODULE: ./src/scripts/views/pages/detail.js + 1 modules
var detail = __webpack_require__(13);

// EXTERNAL MODULE: ./src/scripts/views/pages/favorite.js
var favorite = __webpack_require__(11);

// CONCATENATED MODULE: ./src/scripts/routes/routes.js



var routes = {
  '/': home["a" /* default */],
  '/home': home["a" /* default */],
  '/detail/:id': detail["a" /* default */],
  '/favorite': favorite["a" /* default */]
};
/* harmony default export */ var routes_routes = (routes);
// CONCATENATED MODULE: ./src/scripts/views/app.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var app_App = /*#__PURE__*/function () {
  function App(_ref) {
    var button = _ref.button,
        drawer = _ref.drawer,
        content = _ref.content;

    _classCallCheck(this, App);

    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _createClass(App, [{
    key: "_initialAppShell",
    value: function _initialAppShell() {
      drawer_initiator.init({
        button: this._button,
        drawer: this._drawer,
        content: this._content
      });
    }
  }, {
    key: "renderPage",
    value: function () {
      var _renderPage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var url, page, skipToContent;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = url_parser["a" /* default */].parseActiveUrlWithCombiner();
                page = routes_routes[url];
                _context.next = 4;
                return page.render();

              case 4:
                this._content.innerHTML = _context.sent;
                _context.next = 7;
                return page.afterRender();

              case 7:
                skipToContent = document.querySelector('.skip-link');
                skipToContent.addEventListener('keypress', function (event) {
                  event.preventDefault();
                  document.querySelector('#skip-area').focus();
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function renderPage() {
        return _renderPage.apply(this, arguments);
      }

      return renderPage;
    }()
  }]);

  return App;
}();

/* harmony default export */ var app = (app_App);
// EXTERNAL MODULE: ./node_modules/serviceworker-webpack-plugin/lib/runtime.js
var lib_runtime = __webpack_require__(12);
var lib_runtime_default = /*#__PURE__*/__webpack_require__.n(lib_runtime);

// CONCATENATED MODULE: ./src/scripts/utils/sw-register.js
function sw_register_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function sw_register_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { sw_register_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { sw_register_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var swRegister = /*#__PURE__*/function () {
  var _ref = sw_register_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!('serviceWorker' in navigator)) {
              _context.next = 4;
              break;
            }

            _context.next = 3;
            return lib_runtime_default.a.register();

          case 3:
            return _context.abrupt("return");

          case 4:
            console.log('Service worker not supported in this browser');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function swRegister() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var sw_register = (swRegister);
// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
var lazysizes = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js
var ls_parent_fit = __webpack_require__(23);

// CONCATENATED MODULE: ./src/scripts/index.js










dist_aos_default.a.init({
  once: true,
  duration: 1000
});
var scripts_app = new app({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent')
});
window.addEventListener('hashchange', function () {
  scripts_app.renderPage();
});
window.addEventListener('load', function () {
  scripts_app.renderPage();
  sw_register();
});

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var UrlParser = {
  parseActiveUrlWithCombiner: function parseActiveUrlWithCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();

    var splitedUrl = this._urlSplitter(url);

    return this._urlCombiner(splitedUrl);
  },
  parseActiveUrlWithoutCombiner: function parseActiveUrlWithoutCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },
  _urlSplitter: function _urlSplitter(url) {
    var urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null
    };
  },
  _urlCombiner: function _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? "/".concat(splitedUrl.resource) : '/') + (splitedUrl.id ? '/:id' : '') + (splitedUrl.verb ? "/".concat(splitedUrl.verb) : '');
  }
};
/* harmony default export */ __webpack_exports__["a"] = (UrlParser);

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _globals_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var DATABASE_NAME = _globals_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].DATABASE_NAME,
    DATABASE_VERSION = _globals_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].DATABASE_VERSION,
    OBJECT_STORE_NAME = _globals_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].OBJECT_STORE_NAME;
var dbPromise = Object(idb__WEBPACK_IMPORTED_MODULE_0__[/* openDB */ "a"])(DATABASE_NAME, DATABASE_VERSION, {
  upgrade: function upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id'
    });
  }
});
var FavoriteRestaurantIdb = {
  getRestaurantById: function getRestaurantById(id) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (id) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return dbPromise;

            case 4:
              return _context.abrupt("return", _context.sent.get(OBJECT_STORE_NAME, id));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getAllRestaurants: function getAllRestaurants() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dbPromise;

            case 2:
              return _context2.abrupt("return", _context2.sent.getAll(OBJECT_STORE_NAME));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  putRestaurant: function putRestaurant(restaurant) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (restaurant.hasOwnProperty('id')) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.next = 4;
              return dbPromise;

            case 4:
              return _context3.abrupt("return", _context3.sent.put(OBJECT_STORE_NAME, restaurant));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  deleteRestaurant: function deleteRestaurant(id) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return dbPromise;

            case 2:
              return _context4.abrupt("return", _context4.sent["delete"](OBJECT_STORE_NAME, id));

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = (FavoriteRestaurantIdb);

/***/ })

/******/ });