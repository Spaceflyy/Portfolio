/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\t--headingFont: \"Playfair Display\", serif;\n\t--mainFont: \"Roboto\", sans-serif;\n\t--bgBlue: #0891b2;\n}\n* {\n\tfont-family: var(--mainFont);\n\tbox-sizing: border-box;\n}\n\nbody,\nhtml {\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100%;\n\twidth: 100%;\n}\n\nh1 {\n\tfont-size: 2.2rem;\n}\n\nh1,\nh2 {\n\tfont-family: var(--headingFont);\n\tfont-weight: 400;\n}\n\n.icon {\n\theight: 24px;\n\twidth: auto;\n}\n\n.imgContainer img {\n\theight: 400px;\n\twidth: auto;\n\tfilter: drop-shadow(0 0 0.25rem rgb(56, 56, 56));\n}\n\nfooter .imgContainer img {\n\theight: 300px;\n}\n\n.imgContainer {\n\tposition: relative;\n}\n\n.imgContainer h1 {\n\tcolor: white;\n\tposition: absolute;\n\tz-index: 2;\n\ttop: 85%;\n\tleft: 50%;\n\twidth: max-content;\n\ttransform: translate(-50%, -50%);\n}\na {\n\ttext-decoration: none;\n}\n/* CSS styles for header */\nheader {\n\tposition: relative;\n\tmin-width: 100%;\n\tmin-height: 40%;\n}\nheader .contentSection .imgContainer {\n\tanimation: fade-in-img 1000ms ease-in-out;\n}\n.headerBg {\n\tposition: absolute;\n\twidth: 100%;\n\tmin-height: 35%;\n\tbackground-color: var(--bgBlue);\n\ttransform: skewY(-6deg);\n\ttransform-origin: bottom left;\n\tfilter: drop-shadow(0 0 0.75rem rgb(56, 56, 56));\n}\n\n.aboutMeContainer {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: 500px;\n\tmin-height: 300px;\n\tbackground-color: white;\n\tpadding: 1rem;\n\tfilter: drop-shadow(0 0 0.25rem rgb(56, 56, 56));\n\tanimation: fade-in 1000ms ease-in-out;\n}\n\n.contentSection {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 2rem;\n}\n/* CSS styles for header */\n\n/* CSS styles for main content */\n\n.gridContainer {\n\tdisplay: grid;\n\tgap: 2rem;\n\tjustify-items: center;\n\tgrid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n\twidth: 100%;\n}\n.project {\n\tdisplay: flex;\n\tmax-width: 380px;\n\tflex-direction: column;\n\tbackground-color: white;\n\tfilter: drop-shadow(0 0.2rem 0.2rem rgb(56, 56, 56));\n}\n.headingContainer,\n.project p {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 0px 1rem 0px 1rem;\n}\n\n.headingContainer h3 {\n\tflex: 1;\n}\n\n.screenshot {\n\tbackground-color: rgb(85, 180, 192);\n\tmin-height: 18rem;\n}\nmain .contentSection {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: start;\n\twidth: 80%;\n}\n/* CSS styles for main content */\n\n/* CSS styles for footer */\nfooter .contentSection {\n\twidth: 76%;\n}\n\n.contact {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-right: auto;\n}\nmain,\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n}\nfooter {\n\tcolor: white;\n\tbackground-color: var(--bgBlue);\n}\n\n.links {\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgrid-template-columns: 1fr;\n\tgrid-auto-columns: max-content;\n\tgap: 1rem;\n\tjustify-items: end;\n}\n\nfooter .contentSection .links {\n\tgrid-template-columns: max-content;\n}\n/* CSS styles for footer */\n\n@keyframes fade-in {\n\tfrom {\n\t\ttransform: translateX(100%);\n\t\topacity: 0;\n\t}\n\n\tto {\n\t\ttransform: translateX(0%);\n\t}\n}\n\n@keyframes fade-in-img {\n\tfrom {\n\t\ttransform: translateX(-100%);\n\t\topacity: 0;\n\t}\n\n\tto {\n\t\ttransform: translateX(0%);\n\t}\n}\n\n@media (max-width: 995px) {\n\tmain .contentSection {\n\t\twidth: 100%;\n\t}\n}\n@media (max-width: 800px) {\n\t.gridContainer {\n\t\tgrid-template-columns: repeat(auto-fit, minmax(270px, 1fr));\n\t}\n\tfooter .contentSection {\n\t\tgap: 2rem;\n\t}\n\t.project {\n\t\tmin-width: 270px;\n\t}\n\n\tmain .contentSection {\n\t\twidth: 100%;\n\t}\n\t.contentSection {\n\t\tdisplay: table;\n\t\tmargin: 0px auto;\n\t}\n\t.aboutMeContainer {\n\t\tdisplay: block;\n\t\tmargin-top: 10%;\n\t}\n\n\t.links {\n\t\tdisplay: table;\n\t\tmargin: 60px auto auto auto;\n\t}\n\n\t.icon {\n\t\tmargin: 0px 1rem 0px 0px;\n\t}\n\n\t.imgContainer {\n\t\tfloat: left;\n\t\tz-index: 1;\n\t\ttranslate: -20px -10px;\n\t}\n\n\t.imgContainer h1 {\n\t\ttop: 0;\n\t\tleft: 130%;\n\t}\n}\n\n@media (max-width: 500px) {\n\tfooter .contentSection .links {\n\t\tgrid-template-columns: 1fr 1fr 1fr;\n\t}\n\t.contentSection {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tpadding: 1rem;\n\t}\n\n\t.aboutMeContainer {\n\t\tmargin: 0;\n\t\theight: max-content;\n\t\tfilter: none;\n\t}\n\t.imgContainer {\n\t\ttranslate: 0px 0px;\n\t}\n\n\t.imgContainer h1 {\n\t\ttop: 85%;\n\t\tleft: 50%;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap\");\n\n:root {\n\t--headingFont: \"Playfair Display\", serif;\n\t--mainFont: \"Roboto\", sans-serif;\n\t--bgBlue: #0891b2;\n}\n* {\n\tfont-family: var(--mainFont);\n\tbox-sizing: border-box;\n}\n\nbody,\nhtml {\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100%;\n\twidth: 100%;\n}\n\nh1 {\n\tfont-size: 2.2rem;\n}\n\nh1,\nh2 {\n\tfont-family: var(--headingFont);\n\tfont-weight: 400;\n}\n\n.icon {\n\theight: 24px;\n\twidth: auto;\n}\n\n.imgContainer img {\n\theight: 400px;\n\twidth: auto;\n\tfilter: drop-shadow(0 0 0.25rem rgb(56, 56, 56));\n}\n\nfooter .imgContainer img {\n\theight: 300px;\n}\n\n.imgContainer {\n\tposition: relative;\n}\n\n.imgContainer h1 {\n\tcolor: white;\n\tposition: absolute;\n\tz-index: 2;\n\ttop: 85%;\n\tleft: 50%;\n\twidth: max-content;\n\ttransform: translate(-50%, -50%);\n}\na {\n\ttext-decoration: none;\n}\n/* CSS styles for header */\nheader {\n\tposition: relative;\n\tmin-width: 100%;\n\tmin-height: 40%;\n}\nheader .contentSection .imgContainer {\n\tanimation: fade-in-img 1000ms ease-in-out;\n}\n.headerBg {\n\tposition: absolute;\n\twidth: 100%;\n\tmin-height: 35%;\n\tbackground-color: var(--bgBlue);\n\ttransform: skewY(-6deg);\n\ttransform-origin: bottom left;\n\tfilter: drop-shadow(0 0 0.75rem rgb(56, 56, 56));\n}\n\n.aboutMeContainer {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: 500px;\n\tmin-height: 300px;\n\tbackground-color: white;\n\tpadding: 1rem;\n\tfilter: drop-shadow(0 0 0.25rem rgb(56, 56, 56));\n\tanimation: fade-in 1000ms ease-in-out;\n}\n\n.contentSection {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 2rem;\n}\n/* CSS styles for header */\n\n/* CSS styles for main content */\n\n.gridContainer {\n\tdisplay: grid;\n\tgap: 2rem;\n\tjustify-items: center;\n\tgrid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n\twidth: 100%;\n}\n.project {\n\tdisplay: flex;\n\tmax-width: 380px;\n\tflex-direction: column;\n\tbackground-color: white;\n\tfilter: drop-shadow(0 0.2rem 0.2rem rgb(56, 56, 56));\n}\n.headingContainer,\n.project p {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 0px 1rem 0px 1rem;\n}\n\n.headingContainer h3 {\n\tflex: 1;\n}\n\n.screenshot {\n\tbackground-color: rgb(85, 180, 192);\n\tmin-height: 18rem;\n}\nmain .contentSection {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: start;\n\twidth: 80%;\n}\n/* CSS styles for main content */\n\n/* CSS styles for footer */\nfooter .contentSection {\n\twidth: 76%;\n}\n\n.contact {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-right: auto;\n}\nmain,\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n}\nfooter {\n\tcolor: white;\n\tbackground-color: var(--bgBlue);\n}\n\n.links {\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgrid-template-columns: 1fr;\n\tgrid-auto-columns: max-content;\n\tgap: 1rem;\n\tjustify-items: end;\n}\n\nfooter .contentSection .links {\n\tgrid-template-columns: max-content;\n}\n/* CSS styles for footer */\n\n@keyframes fade-in {\n\tfrom {\n\t\ttransform: translateX(100%);\n\t\topacity: 0;\n\t}\n\n\tto {\n\t\ttransform: translateX(0%);\n\t}\n}\n\n@keyframes fade-in-img {\n\tfrom {\n\t\ttransform: translateX(-100%);\n\t\topacity: 0;\n\t}\n\n\tto {\n\t\ttransform: translateX(0%);\n\t}\n}\n\n@media (max-width: 995px) {\n\tmain .contentSection {\n\t\twidth: 100%;\n\t}\n}\n@media (max-width: 800px) {\n\t.gridContainer {\n\t\tgrid-template-columns: repeat(auto-fit, minmax(270px, 1fr));\n\t}\n\tfooter .contentSection {\n\t\tgap: 2rem;\n\t}\n\t.project {\n\t\tmin-width: 270px;\n\t}\n\n\tmain .contentSection {\n\t\twidth: 100%;\n\t}\n\t.contentSection {\n\t\tdisplay: table;\n\t\tmargin: 0px auto;\n\t}\n\t.aboutMeContainer {\n\t\tdisplay: block;\n\t\tmargin-top: 10%;\n\t}\n\n\t.links {\n\t\tdisplay: table;\n\t\tmargin: 60px auto auto auto;\n\t}\n\n\t.icon {\n\t\tmargin: 0px 1rem 0px 0px;\n\t}\n\n\t.imgContainer {\n\t\tfloat: left;\n\t\tz-index: 1;\n\t\ttranslate: -20px -10px;\n\t}\n\n\t.imgContainer h1 {\n\t\ttop: 0;\n\t\tleft: 130%;\n\t}\n}\n\n@media (max-width: 500px) {\n\tfooter .contentSection .links {\n\t\tgrid-template-columns: 1fr 1fr 1fr;\n\t}\n\t.contentSection {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tpadding: 1rem;\n\t}\n\n\t.aboutMeContainer {\n\t\tmargin: 0;\n\t\theight: max-content;\n\t\tfilter: none;\n\t}\n\t.imgContainer {\n\t\ttranslate: 0px 0px;\n\t}\n\n\t.imgContainer h1 {\n\t\ttop: 85%;\n\t\tleft: 50%;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssYUFBYSxjQUFjLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxhQUFhLGFBQWEsTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLCtIQUErSCxXQUFX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QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0FxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXkmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuXFx0LS1oZWFkaW5nRm9udDogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXG5cXHQtLW1haW5Gb250OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG5cXHQtLWJnQmx1ZTogIzA4OTFiMjtcXG59XFxuKiB7XFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLW1haW5Gb250KTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuaDEge1xcblxcdGZvbnQtc2l6ZTogMi4ycmVtO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmdGb250KTtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaWNvbiB7XFxuXFx0aGVpZ2h0OiAyNHB4O1xcblxcdHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uaW1nQ29udGFpbmVyIGltZyB7XFxuXFx0aGVpZ2h0OiA0MDBweDtcXG5cXHR3aWR0aDogYXV0bztcXG5cXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjI1cmVtIHJnYig1NiwgNTYsIDU2KSk7XFxufVxcblxcbmZvb3RlciAuaW1nQ29udGFpbmVyIGltZyB7XFxuXFx0aGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLmltZ0NvbnRhaW5lciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW1nQ29udGFpbmVyIGgxIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHotaW5kZXg6IDI7XFxuXFx0dG9wOiA4NSU7XFxuXFx0bGVmdDogNTAlO1xcblxcdHdpZHRoOiBtYXgtY29udGVudDtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4vKiBDU1Mgc3R5bGVzIGZvciBoZWFkZXIgKi9cXG5oZWFkZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRtaW4td2lkdGg6IDEwMCU7XFxuXFx0bWluLWhlaWdodDogNDAlO1xcbn1cXG5oZWFkZXIgLmNvbnRlbnRTZWN0aW9uIC5pbWdDb250YWluZXIge1xcblxcdGFuaW1hdGlvbjogZmFkZS1pbi1pbWcgMTAwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4uaGVhZGVyQmcge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtaW4taGVpZ2h0OiAzNSU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdCbHVlKTtcXG5cXHR0cmFuc2Zvcm06IHNrZXdZKC02ZGVnKTtcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG5cXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjc1cmVtIHJnYig1NiwgNTYsIDU2KSk7XFxufVxcblxcbi5hYm91dE1lQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWF4LXdpZHRoOiA1MDBweDtcXG5cXHRtaW4taGVpZ2h0OiAzMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuMjVyZW0gcmdiKDU2LCA1NiwgNTYpKTtcXG5cXHRhbmltYXRpb246IGZhZGUtaW4gMTAwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY29udGVudFNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAycmVtO1xcbn1cXG4vKiBDU1Mgc3R5bGVzIGZvciBoZWFkZXIgKi9cXG5cXG4vKiBDU1Mgc3R5bGVzIGZvciBtYWluIGNvbnRlbnQgKi9cXG5cXG4uZ3JpZENvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6IDJyZW07XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuLnByb2plY3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWF4LXdpZHRoOiAzODBweDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwLjJyZW0gMC4ycmVtIHJnYig1NiwgNTYsIDU2KSk7XFxufVxcbi5oZWFkaW5nQ29udGFpbmVyLFxcbi5wcm9qZWN0IHAge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAwcHggMXJlbSAwcHggMXJlbTtcXG59XFxuXFxuLmhlYWRpbmdDb250YWluZXIgaDMge1xcblxcdGZsZXg6IDE7XFxufVxcblxcbi5zY3JlZW5zaG90IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODUsIDE4MCwgMTkyKTtcXG5cXHRtaW4taGVpZ2h0OiAxOHJlbTtcXG59XFxubWFpbiAuY29udGVudFNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogc3RhcnQ7XFxuXFx0d2lkdGg6IDgwJTtcXG59XFxuLyogQ1NTIHN0eWxlcyBmb3IgbWFpbiBjb250ZW50ICovXFxuXFxuLyogQ1NTIHN0eWxlcyBmb3IgZm9vdGVyICovXFxuZm9vdGVyIC5jb250ZW50U2VjdGlvbiB7XFxuXFx0d2lkdGg6IDc2JTtcXG59XFxuXFxuLmNvbnRhY3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbm1haW4sXFxuZm9vdGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5mb290ZXIge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0JsdWUpO1xcbn1cXG5cXG4ubGlua3Mge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG5cXHRncmlkLWF1dG8tY29sdW1uczogbWF4LWNvbnRlbnQ7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGp1c3RpZnktaXRlbXM6IGVuZDtcXG59XFxuXFxuZm9vdGVyIC5jb250ZW50U2VjdGlvbiAubGlua3Mge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQ7XFxufVxcbi8qIENTUyBzdHlsZXMgZm9yIGZvb3RlciAqL1xcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuXFx0ZnJvbSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0fVxcblxcblxcdHRvIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcblxcdH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLWluLWltZyB7XFxuXFx0ZnJvbSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdH1cXG5cXG5cXHR0byB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTVweCkge1xcblxcdG1haW4gLmNvbnRlbnRTZWN0aW9uIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcblxcdC5ncmlkQ29udGFpbmVyIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI3MHB4LCAxZnIpKTtcXG5cXHR9XFxuXFx0Zm9vdGVyIC5jb250ZW50U2VjdGlvbiB7XFxuXFx0XFx0Z2FwOiAycmVtO1xcblxcdH1cXG5cXHQucHJvamVjdCB7XFxuXFx0XFx0bWluLXdpZHRoOiAyNzBweDtcXG5cXHR9XFxuXFxuXFx0bWFpbiAuY29udGVudFNlY3Rpb24ge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG5cXHQuY29udGVudFNlY3Rpb24ge1xcblxcdFxcdGRpc3BsYXk6IHRhYmxlO1xcblxcdFxcdG1hcmdpbjogMHB4IGF1dG87XFxuXFx0fVxcblxcdC5hYm91dE1lQ29udGFpbmVyIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tdG9wOiAxMCU7XFxuXFx0fVxcblxcblxcdC5saW5rcyB7XFxuXFx0XFx0ZGlzcGxheTogdGFibGU7XFxuXFx0XFx0bWFyZ2luOiA2MHB4IGF1dG8gYXV0byBhdXRvO1xcblxcdH1cXG5cXG5cXHQuaWNvbiB7XFxuXFx0XFx0bWFyZ2luOiAwcHggMXJlbSAwcHggMHB4O1xcblxcdH1cXG5cXG5cXHQuaW1nQ29udGFpbmVyIHtcXG5cXHRcXHRmbG9hdDogbGVmdDtcXG5cXHRcXHR6LWluZGV4OiAxO1xcblxcdFxcdHRyYW5zbGF0ZTogLTIwcHggLTEwcHg7XFxuXFx0fVxcblxcblxcdC5pbWdDb250YWluZXIgaDEge1xcblxcdFxcdHRvcDogMDtcXG5cXHRcXHRsZWZ0OiAxMzAlO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuXFx0Zm9vdGVyIC5jb250ZW50U2VjdGlvbiAubGlua3Mge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuXFx0fVxcblxcdC5jb250ZW50U2VjdGlvbiB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdHBhZGRpbmc6IDFyZW07XFxuXFx0fVxcblxcblxcdC5hYm91dE1lQ29udGFpbmVyIHtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0XFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRcXHRmaWx0ZXI6IG5vbmU7XFxuXFx0fVxcblxcdC5pbWdDb250YWluZXIge1xcblxcdFxcdHRyYW5zbGF0ZTogMHB4IDBweDtcXG5cXHR9XFxuXFxuXFx0LmltZ0NvbnRhaW5lciBoMSB7XFxuXFx0XFx0dG9wOiA4NSU7XFxuXFx0XFx0bGVmdDogNTAlO1xcblxcdH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtDQUNDLHdDQUF3QztDQUN4QyxnQ0FBZ0M7Q0FDaEMsaUJB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Q0Q7O0FBRUE7Q0FDQztFQUNDLGtDQUFrQztDQUNuQztDQUNBO0VBQ0MsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0NBQ2Q7O0NBRUE7RUFDQyxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFlBQVk7Q0FDYjtDQUNBO0VBQ0Msa0JBQWtCO0NBQ25COztDQUVBO0VBQ0MsUUFBUTtFQUNSLFNBQVM7Q0FDVjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXkmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuXFx0LS1oZWFkaW5nRm9udDogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXG5cXHQtLW1haW5Gb250OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG5cXHQtLWJnQmx1ZTogIzA4OTFiMjtcXG59XFxuKiB7XFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLW1haW5Gb250KTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuaDEge1xcblxcdGZvbnQtc2l6ZTogMi4ycmVtO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmdGb250KTtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaWNvbiB7XFxuXFx0aGVpZ2h0OiAyNHB4O1xcblxcdHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uaW1nQ29udGFpbmVyIGltZyB7XFxuXFx0aGVpZ2h0OiA0MDBweDtcXG5cXHR3aWR0aDogYXV0bztcXG5cXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjI1cmVtIHJnYig1NiwgNTYsIDU2KSk7XFxufVxcblxcbmZvb3RlciAuaW1nQ29udGFpbmVyIGltZyB7XFxuXFx0aGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLmltZ0NvbnRhaW5lciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaW1nQ29udGFpbmVyIGgxIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHotaW5kZXg6IDI7XFxuXFx0dG9wOiA4NSU7XFxuXFx0bGVmdDogNTAlO1xcblxcdHdpZHRoOiBtYXgtY29udGVudDtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4vKiBDU1Mgc3R5bGVzIGZvciBoZWFkZXIgKi9cXG5oZWFkZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRtaW4td2lkdGg6IDEwMCU7XFxuXFx0bWluLWhlaWdodDogNDAlO1xcbn1cXG5oZWFkZXIgLmNvbnRlbnRTZWN0aW9uIC5pbWdDb250YWluZXIge1xcblxcdGFuaW1hdGlvbjogZmFkZS1pbi1pbWcgMTAwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4uaGVhZGVyQmcge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtaW4taGVpZ2h0OiAzNSU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdCbHVlKTtcXG5cXHR0cmFuc2Zvcm06IHNrZXdZKC02ZGVnKTtcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG5cXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjc1cmVtIHJnYig1NiwgNTYsIDU2KSk7XFxufVxcblxcbi5hYm91dE1lQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWF4LXdpZHRoOiA1MDBweDtcXG5cXHRtaW4taGVpZ2h0OiAzMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuMjVyZW0gcmdiKDU2LCA1NiwgNTYpKTtcXG5cXHRhbmltYXRpb246IGZhZGUtaW4gMTAwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uY29udGVudFNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAycmVtO1xcbn1cXG4vKiBDU1Mgc3R5bGVzIGZvciBoZWFkZXIgKi9cXG5cXG4vKiBDU1Mgc3R5bGVzIGZvciBtYWluIGNvbnRlbnQgKi9cXG5cXG4uZ3JpZENvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6IDJyZW07XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuLnByb2plY3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWF4LXdpZHRoOiAzODBweDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwLjJyZW0gMC4ycmVtIHJnYig1NiwgNTYsIDU2KSk7XFxufVxcbi5oZWFkaW5nQ29udGFpbmVyLFxcbi5wcm9qZWN0IHAge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAwcHggMXJlbSAwcHggMXJlbTtcXG59XFxuXFxuLmhlYWRpbmdDb250YWluZXIgaDMge1xcblxcdGZsZXg6IDE7XFxufVxcblxcbi5zY3JlZW5zaG90IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODUsIDE4MCwgMTkyKTtcXG5cXHRtaW4taGVpZ2h0OiAxOHJlbTtcXG59XFxubWFpbiAuY29udGVudFNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogc3RhcnQ7XFxuXFx0d2lkdGg6IDgwJTtcXG59XFxuLyogQ1NTIHN0eWxlcyBmb3IgbWFpbiBjb250ZW50ICovXFxuXFxuLyogQ1NTIHN0eWxlcyBmb3IgZm9vdGVyICovXFxuZm9vdGVyIC5jb250ZW50U2VjdGlvbiB7XFxuXFx0d2lkdGg6IDc2JTtcXG59XFxuXFxuLmNvbnRhY3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbm1haW4sXFxuZm9vdGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5mb290ZXIge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0JsdWUpO1xcbn1cXG5cXG4ubGlua3Mge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG5cXHRncmlkLWF1dG8tY29sdW1uczogbWF4LWNvbnRlbnQ7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGp1c3RpZnktaXRlbXM6IGVuZDtcXG59XFxuXFxuZm9vdGVyIC5jb250ZW50U2VjdGlvbiAubGlua3Mge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQ7XFxufVxcbi8qIENTUyBzdHlsZXMgZm9yIGZvb3RlciAqL1xcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuXFx0ZnJvbSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0fVxcblxcblxcdHRvIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcblxcdH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLWluLWltZyB7XFxuXFx0ZnJvbSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdH1cXG5cXG5cXHR0byB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTVweCkge1xcblxcdG1haW4gLmNvbnRlbnRTZWN0aW9uIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcblxcdC5ncmlkQ29udGFpbmVyIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI3MHB4LCAxZnIpKTtcXG5cXHR9XFxuXFx0Zm9vdGVyIC5jb250ZW50U2VjdGlvbiB7XFxuXFx0XFx0Z2FwOiAycmVtO1xcblxcdH1cXG5cXHQucHJvamVjdCB7XFxuXFx0XFx0bWluLXdpZHRoOiAyNzBweDtcXG5cXHR9XFxuXFxuXFx0bWFpbiAuY29udGVudFNlY3Rpb24ge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG5cXHQuY29udGVudFNlY3Rpb24ge1xcblxcdFxcdGRpc3BsYXk6IHRhYmxlO1xcblxcdFxcdG1hcmdpbjogMHB4IGF1dG87XFxuXFx0fVxcblxcdC5hYm91dE1lQ29udGFpbmVyIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tdG9wOiAxMCU7XFxuXFx0fVxcblxcblxcdC5saW5rcyB7XFxuXFx0XFx0ZGlzcGxheTogdGFibGU7XFxuXFx0XFx0bWFyZ2luOiA2MHB4IGF1dG8gYXV0byBhdXRvO1xcblxcdH1cXG5cXG5cXHQuaWNvbiB7XFxuXFx0XFx0bWFyZ2luOiAwcHggMXJlbSAwcHggMHB4O1xcblxcdH1cXG5cXG5cXHQuaW1nQ29udGFpbmVyIHtcXG5cXHRcXHRmbG9hdDogbGVmdDtcXG5cXHRcXHR6LWluZGV4OiAxO1xcblxcdFxcdHRyYW5zbGF0ZTogLTIwcHggLTEwcHg7XFxuXFx0fVxcblxcblxcdC5pbWdDb250YWluZXIgaDEge1xcblxcdFxcdHRvcDogMDtcXG5cXHRcXHRsZWZ0OiAxMzAlO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuXFx0Zm9vdGVyIC5jb250ZW50U2VjdGlvbiAubGlua3Mge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuXFx0fVxcblxcdC5jb250ZW50U2VjdGlvbiB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdHBhZGRpbmc6IDFyZW07XFxuXFx0fVxcblxcblxcdC5hYm91dE1lQ29udGFpbmVyIHtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0XFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRcXHRmaWx0ZXI6IG5vbmU7XFxuXFx0fVxcblxcdC5pbWdDb250YWluZXIge1xcblxcdFxcdHRyYW5zbGF0ZTogMHB4IDBweDtcXG5cXHR9XFxuXFxuXFx0LmltZ0NvbnRhaW5lciBoMSB7XFxuXFx0XFx0dG9wOiA4NSU7XFxuXFx0XFx0bGVmdDogNTAlO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=