// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"caD7":[function(require,module,exports) {

},{}],"Ej48":[function(require,module,exports) {
module.exports = "aiy.a4e9c36f.png";
},{}],"7QCb":[function(require,module,exports) {
"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var __importDefault = this && this.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("sanitize.css");
require("./index.scss");
var aiy_png_1 = __importDefault(require("./aiy.png"));
var COLUMNS = 6;
var ROWS = COLUMNS;
var W = 80;
var H = W;
var D = 10;
var RANGE = 400;
var range = function range(n) {
    return [].concat(_toConsumableArray(Array(n).keys()));
};
var createSvgElement = function createSvgElement(tag, attributes) {
    var e = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attributes) {
        e.setAttribute(k, attributes[k]);
    }
    return e;
};
var svg = document.getElementById('wall');
svg.setAttribute('width', (D + (W + D) * COLUMNS).toString());
svg.setAttribute('height', (D + (H + D) * ROWS).toString());
var glows = range(ROWS).map(function (row) {
    var y = D + (H + D) * row;
    return range(COLUMNS).map(function (column) {
        var x = D + (W + D) * column;
        var image = createSvgElement('image', {
            x: x,
            y: y,
            width: W,
            height: H
        });
        image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', aiy_png_1.default);
        svg.appendChild(image);
        var glow = createSvgElement('path', {
            d: "M " + x + " " + y + " m " + 0.4 * W + " " + 0.01 * H + " l " + 0.2 * W + " 0 l 0 " + 0.05 * H + " l " + -0.2 * W + " 0 z",
            fill: 'none',
            filter: 'url(#blur)'
        });
        svg.appendChild(glow);
        return glow;
    });
});
svg.addEventListener('mousemove', function (_ref) {
    var offsetX = _ref.offsetX,
        offsetY = _ref.offsetY;

    glows.forEach(function (glows, row) {
        var y = D + (H + D) * (row + 0.5);
        glows.forEach(function (glow, column) {
            var x = D + (W + D) * (column + 0.5);
            var d = Math.hypot(offsetX - x, offsetY - y);
            var a = Math.pow(Math.max(0, RANGE - d) / RANGE, 2);
            glow.setAttribute('fill', "rgba(0, 255, 255, " + a + ")");
        });
    });
});
},{"sanitize.css":"caD7","./index.scss":"caD7","./aiy.png":"Ej48"}]},{},["7QCb"], null)
//# sourceMappingURL=src.486ee053.map