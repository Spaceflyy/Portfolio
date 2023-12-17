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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\t--headingFont: \"Playfair Display\", serif;\n\t--mainFont: \"Roboto\", sans-serif;\n\t--bgBlue: #0891b2;\n}\n* {\n\tfont-family: var(--mainFont);\n\tbox-sizing: border-box;\n}\n\nbody,\nhtml {\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100%;\n\twidth: 100%;\n}\n\nheader {\n\tposition: relative;\n\tmin-width: 100%;\n\tmin-height: 40%;\n}\n\nh1 {\n\tfont-size: 2.2rem;\n}\n\nh1,\nh2 {\n\tfont-family: var(--headingFont);\n\tfont-weight: 400;\n}\n\n.headerBg {\n\tposition: absolute;\n\twidth: 100%;\n\tmin-height: 35%;\n\tbackground-color: var(--bgBlue);\n\ttransform: skewY(-6deg);\n\ttransform-origin: bottom left;\n\tfilter: drop-shadow(0 0 0.75rem rgb(56, 56, 56));\n}\n\n.icon {\n\theight: 24px;\n\twidth: auto;\n}\n.aboutMeContainer {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: 500px;\n\tmin-height: 300px;\n\tbackground-color: white;\n\tpadding: 1rem;\n\tfilter: drop-shadow(0 0 0.25rem rgb(56, 56, 56));\n}\n\n.imgContainer img {\n\theight: 400px;\n\twidth: auto;\n\tfilter: drop-shadow(0 0 0.25rem rgb(56, 56, 56));\n}\n.imgContainer {\n\tposition: relative;\n}\n.imgContainer h1 {\n\tcolor: white;\n\tposition: absolute;\n\tz-index: 2;\n\ttop: 85%;\n\tleft: 50%;\n\twidth: max-content;\n\ttransform: translate(-50%, -50%);\n}\n.introduction {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 2rem;\n}\nmain,\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n}\nfooter {\n\tcolor: white;\n\tbackground-color: var(--bgBlue);\n}\nmain .introduction,\nfooter .introduction {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: start;\n\twidth: 80%;\n}\n\n.links {\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgrid-template-columns: 1fr;\n\tgrid-auto-columns: max-content;\n\tgap: 1rem;\n\tjustify-items: end;\n}\n\n.gridContainer {\n\tdisplay: grid;\n\tgap: 2rem;\n\tjustify-items: center;\n\tgrid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n\twidth: 100%;\n}\n.project {\n\tdisplay: flex;\n\tmax-width: 380px;\n\tflex-direction: column;\n\tbackground-color: white;\n\tfilter: drop-shadow(0 0.2rem 0.2rem rgb(56, 56, 56));\n}\n\n.headingContainer,\n.project p {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 0px 1rem 0px 1rem;\n}\n.headingContainer .links {\n\tgap: 0.5rem;\n}\n\n.headingContainer h3 {\n\tflex: 1;\n}\n\n.screenshot {\n\tbackground-color: rgb(85, 180, 192);\n\tmin-height: 18rem;\n}\n\na {\n\ttext-decoration: none;\n}\n\n@media (max-width: 995px) {\n\tmain .introduction {\n\t\twidth: 100%;\n\t}\n}\n@media (max-width: 800px) {\n\t.gridContainer {\n\t\tgrid-template-columns: repeat(auto-fit, minmax(270px, 1fr));\n\t}\n\n\t.project {\n\t\tmin-width: 270px;\n\t}\n\n\tmain .introduction {\n\t\twidth: 100%;\n\t}\n\t.introduction {\n\t\tdisplay: table;\n\t\tmargin: 0px auto;\n\t}\n\t.aboutMeContainer {\n\t\tdisplay: block;\n\t\tmargin-top: 10%;\n\t}\n\n\t.links {\n\t\tdisplay: table;\n\t\tmargin: 60px auto auto auto;\n\t}\n\n\t.icon {\n\t\tmargin: 0px 1rem 0px 0px;\n\t}\n\n\t.imgContainer {\n\t\tfloat: left;\n\t\tz-index: 1;\n\t\ttranslate: -20px -10px;\n\t}\n\n\t.imgContainer h1 {\n\t\ttop: 0;\n\t\tleft: 130%;\n\t}\n}\n\n@media (max-width: 500px) {\n\t.introduction {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tpadding: 1rem;\n\t}\n\n\t.aboutMeContainer {\n\t\tmargin: 0;\n\t\theight: max-content;\n\t\tfilter: none;\n\t}\n\t.imgContainer {\n\t\ttranslate: 0px 0px;\n\t}\n\n\t.imgContainer h1 {\n\t\ttop: 85%;\n\t\tleft: 50%;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;CACC,wCAAwC;CACxC,gCAAgC;CAChC,iBAAiB;AAClB;AACA;CACC,4BAA4B;CAC5B,sBAAsB;AACvB;;AAEA;;CAEC,SAAS;CACT,UAAU;CACV,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,kBAAkB;CAClB,eAAe;CACf,eAAe;AAChB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;;CAEC,+BAA+B;CAC/B,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,eAAe;CACf,+BAA+B;CAC/B,uBAAuB;CACvB,6BAA6B;CAC7B,gDAAgD;AACjD;;AAEA;CACC,YAAY;CACZ,WAAW;AACZ;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,gBAAgB;CAChB,iBAAiB;CACjB,uBAAuB;CACvB,aAAa;CACb,gDAAgD;AACjD;;AAEA;CACC,aAAa;CACb,WAAW;CACX,gDAAgD;AACjD;AACA;CACC,kBAAkB;AACnB;AACA;CACC,YAAY;CACZ,kBAAkB;CAClB,UAAU;CACV,QAAQ;CACR,SAAS;CACT,kBAAkB;CAClB,gCAAgC;AACjC;AACA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,aAAa;AACd;AACA;;CAEC,aAAa;CACb,uBAAuB;AACxB;AACA;CACC,YAAY;CACZ,+BAA+B;AAChC;AACA;;CAEC,aAAa;CACb,sBAAsB;CACtB,kBAAkB;CAClB,UAAU;AACX;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,0BAA0B;CAC1B,8BAA8B;CAC9B,SAAS;CACT,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,SAAS;CACT,qBAAqB;CACrB,4DAA4D;CAC5D,WAAW;AACZ;AACA;CACC,aAAa;CACb,gBAAgB;CAChB,sBAAsB;CACtB,uBAAuB;CACvB,oDAAoD;AACrD;;AAEA;;CAEC,aAAa;CACb,mBAAmB;CACnB,0BAA0B;AAC3B;AACA;CACC,WAAW;AACZ;;AAEA;CACC,OAAO;AACR;;AAEA;CACC,mCAAmC;CACnC,iBAAiB;AAClB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC;EACC,WAAW;CACZ;AACD;AACA;CACC;EACC,2DAA2D;CAC5D;;CAEA;EACC,gBAAgB;CACjB;;CAEA;EACC,WAAW;CACZ;CACA;EACC,cAAc;EACd,gBAAgB;CACjB;CACA;EACC,cAAc;EACd,eAAe;CAChB;;CAEA;EACC,cAAc;EACd,2BAA2B;CAC5B;;CAEA;EACC,wBAAwB;CACzB;;CAEA;EACC,WAAW;EACX,UAAU;EACV,sBAAsB;CACvB;;CAEA;EACC,MAAM;EACN,UAAU;CACX;AACD;;AAEA;CACC;EACC,aAAa;EACb,sBAAsB;EACtB,aAAa;CACd;;CAEA;EACC,SAAS;EACT,mBAAmB;EACnB,YAAY;CACb;CACA;EACC,kBAAkB;CACnB;;CAEA;EACC,QAAQ;EACR,SAAS;CACV;AACD","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap\");\n\n:root {\n\t--headingFont: \"Playfair Display\", serif;\n\t--mainFont: \"Roboto\", sans-serif;\n\t--bgBlue: #0891b2;\n}\n* {\n\tfont-family: var(--mainFont);\n\tbox-sizing: border-box;\n}\n\nbody,\nhtml {\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100%;\n\twidth: 100%;\n}\n\nheader {\n\tposition: relative;\n\tmin-width: 100%;\n\tmin-height: 40%;\n}\n\nh1 {\n\tfont-size: 2.2rem;\n}\n\nh1,\nh2 {\n\tfont-family: var(--headingFont);\n\tfont-weight: 400;\n}\n\n.headerBg {\n\tposition: absolute;\n\twidth: 100%;\n\tmin-height: 35%;\n\tbackground-color: var(--bgBlue);\n\ttransform: skewY(-6deg);\n\ttransform-origin: bottom left;\n\tfilter: drop-shadow(0 0 0.75rem rgb(56, 56, 56));\n}\n\n.icon {\n\theight: 24px;\n\twidth: auto;\n}\n.aboutMeContainer {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: 500px;\n\tmin-height: 300px;\n\tbackground-color: white;\n\tpadding: 1rem;\n\tfilter: drop-shadow(0 0 0.25rem rgb(56, 56, 56));\n}\n\n.imgContainer img {\n\theight: 400px;\n\twidth: auto;\n\tfilter: drop-shadow(0 0 0.25rem rgb(56, 56, 56));\n}\n.imgContainer {\n\tposition: relative;\n}\n.imgContainer h1 {\n\tcolor: white;\n\tposition: absolute;\n\tz-index: 2;\n\ttop: 85%;\n\tleft: 50%;\n\twidth: max-content;\n\ttransform: translate(-50%, -50%);\n}\n.introduction {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 2rem;\n}\nmain,\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n}\nfooter {\n\tcolor: white;\n\tbackground-color: var(--bgBlue);\n}\nmain .introduction,\nfooter .introduction {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: start;\n\twidth: 80%;\n}\n\n.links {\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgrid-template-columns: 1fr;\n\tgrid-auto-columns: max-content;\n\tgap: 1rem;\n\tjustify-items: end;\n}\n\n.gridContainer {\n\tdisplay: grid;\n\tgap: 2rem;\n\tjustify-items: center;\n\tgrid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n\twidth: 100%;\n}\n.project {\n\tdisplay: flex;\n\tmax-width: 380px;\n\tflex-direction: column;\n\tbackground-color: white;\n\tfilter: drop-shadow(0 0.2rem 0.2rem rgb(56, 56, 56));\n}\n\n.headingContainer,\n.project p {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 0px 1rem 0px 1rem;\n}\n.headingContainer .links {\n\tgap: 0.5rem;\n}\n\n.headingContainer h3 {\n\tflex: 1;\n}\n\n.screenshot {\n\tbackground-color: rgb(85, 180, 192);\n\tmin-height: 18rem;\n}\n\na {\n\ttext-decoration: none;\n}\n\n@media (max-width: 995px) {\n\tmain .introduction {\n\t\twidth: 100%;\n\t}\n}\n@media (max-width: 800px) {\n\t.gridContainer {\n\t\tgrid-template-columns: repeat(auto-fit, minmax(270px, 1fr));\n\t}\n\n\t.project {\n\t\tmin-width: 270px;\n\t}\n\n\tmain .introduction {\n\t\twidth: 100%;\n\t}\n\t.introduction {\n\t\tdisplay: table;\n\t\tmargin: 0px auto;\n\t}\n\t.aboutMeContainer {\n\t\tdisplay: block;\n\t\tmargin-top: 10%;\n\t}\n\n\t.links {\n\t\tdisplay: table;\n\t\tmargin: 60px auto auto auto;\n\t}\n\n\t.icon {\n\t\tmargin: 0px 1rem 0px 0px;\n\t}\n\n\t.imgContainer {\n\t\tfloat: left;\n\t\tz-index: 1;\n\t\ttranslate: -20px -10px;\n\t}\n\n\t.imgContainer h1 {\n\t\ttop: 0;\n\t\tleft: 130%;\n\t}\n}\n\n@media (max-width: 500px) {\n\t.introduction {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tpadding: 1rem;\n\t}\n\n\t.aboutMeContainer {\n\t\tmargin: 0;\n\t\theight: max-content;\n\t\tfilter: none;\n\t}\n\t.imgContainer {\n\t\ttranslate: 0px 0px;\n\t}\n\n\t.imgContainer h1 {\n\t\ttop: 85%;\n\t\tleft: 50%;\n\t}\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7OztBQ0FxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXkmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuXFx0LS1oZWFkaW5nRm9udDogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXG5cXHQtLW1haW5Gb250OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG5cXHQtLWJnQmx1ZTogIzA4OTFiMjtcXG59XFxuKiB7XFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLW1haW5Gb250KTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuaGVhZGVyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bWluLXdpZHRoOiAxMDAlO1xcblxcdG1pbi1oZWlnaHQ6IDQwJTtcXG59XFxuXFxuaDEge1xcblxcdGZvbnQtc2l6ZTogMi4ycmVtO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmdGb250KTtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVhZGVyQmcge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtaW4taGVpZ2h0OiAzNSU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdCbHVlKTtcXG5cXHR0cmFuc2Zvcm06IHNrZXdZKC02ZGVnKTtcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG5cXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjc1cmVtIHJnYig1NiwgNTYsIDU2KSk7XFxufVxcblxcbi5pY29uIHtcXG5cXHRoZWlnaHQ6IDI0cHg7XFxuXFx0d2lkdGg6IGF1dG87XFxufVxcbi5hYm91dE1lQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWF4LXdpZHRoOiA1MDBweDtcXG5cXHRtaW4taGVpZ2h0OiAzMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuMjVyZW0gcmdiKDU2LCA1NiwgNTYpKTtcXG59XFxuXFxuLmltZ0NvbnRhaW5lciBpbWcge1xcblxcdGhlaWdodDogNDAwcHg7XFxuXFx0d2lkdGg6IGF1dG87XFxuXFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC4yNXJlbSByZ2IoNTYsIDU2LCA1NikpO1xcbn1cXG4uaW1nQ29udGFpbmVyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5pbWdDb250YWluZXIgaDEge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0ei1pbmRleDogMjtcXG5cXHR0b3A6IDg1JTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0d2lkdGg6IG1heC1jb250ZW50O1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4uaW50cm9kdWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMnJlbTtcXG59XFxubWFpbixcXG5mb290ZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmZvb3RlciB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQmx1ZSk7XFxufVxcbm1haW4gLmludHJvZHVjdGlvbixcXG5mb290ZXIgLmludHJvZHVjdGlvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBzdGFydDtcXG5cXHR3aWR0aDogODAlO1xcbn1cXG5cXG4ubGlua3Mge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG5cXHRncmlkLWF1dG8tY29sdW1uczogbWF4LWNvbnRlbnQ7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGp1c3RpZnktaXRlbXM6IGVuZDtcXG59XFxuXFxuLmdyaWRDb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z2FwOiAycmVtO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNTBweCwgMWZyKSk7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcbi5wcm9qZWN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1heC13aWR0aDogMzgwcHg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMC4ycmVtIDAuMnJlbSByZ2IoNTYsIDU2LCA1NikpO1xcbn1cXG5cXG4uaGVhZGluZ0NvbnRhaW5lcixcXG4ucHJvamVjdCBwIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMHB4IDFyZW0gMHB4IDFyZW07XFxufVxcbi5oZWFkaW5nQ29udGFpbmVyIC5saW5rcyB7XFxuXFx0Z2FwOiAwLjVyZW07XFxufVxcblxcbi5oZWFkaW5nQ29udGFpbmVyIGgzIHtcXG5cXHRmbGV4OiAxO1xcbn1cXG5cXG4uc2NyZWVuc2hvdCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDg1LCAxODAsIDE5Mik7XFxuXFx0bWluLWhlaWdodDogMThyZW07XFxufVxcblxcbmEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5NXB4KSB7XFxuXFx0bWFpbiAuaW50cm9kdWN0aW9uIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcblxcdC5ncmlkQ29udGFpbmVyIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI3MHB4LCAxZnIpKTtcXG5cXHR9XFxuXFxuXFx0LnByb2plY3Qge1xcblxcdFxcdG1pbi13aWR0aDogMjcwcHg7XFxuXFx0fVxcblxcblxcdG1haW4gLmludHJvZHVjdGlvbiB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcblxcdC5pbnRyb2R1Y3Rpb24ge1xcblxcdFxcdGRpc3BsYXk6IHRhYmxlO1xcblxcdFxcdG1hcmdpbjogMHB4IGF1dG87XFxuXFx0fVxcblxcdC5hYm91dE1lQ29udGFpbmVyIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tdG9wOiAxMCU7XFxuXFx0fVxcblxcblxcdC5saW5rcyB7XFxuXFx0XFx0ZGlzcGxheTogdGFibGU7XFxuXFx0XFx0bWFyZ2luOiA2MHB4IGF1dG8gYXV0byBhdXRvO1xcblxcdH1cXG5cXG5cXHQuaWNvbiB7XFxuXFx0XFx0bWFyZ2luOiAwcHggMXJlbSAwcHggMHB4O1xcblxcdH1cXG5cXG5cXHQuaW1nQ29udGFpbmVyIHtcXG5cXHRcXHRmbG9hdDogbGVmdDtcXG5cXHRcXHR6LWluZGV4OiAxO1xcblxcdFxcdHRyYW5zbGF0ZTogLTIwcHggLTEwcHg7XFxuXFx0fVxcblxcblxcdC5pbWdDb250YWluZXIgaDEge1xcblxcdFxcdHRvcDogMDtcXG5cXHRcXHRsZWZ0OiAxMzAlO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuXFx0LmludHJvZHVjdGlvbiB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdHBhZGRpbmc6IDFyZW07XFxuXFx0fVxcblxcblxcdC5hYm91dE1lQ29udGFpbmVyIHtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0XFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRcXHRmaWx0ZXI6IG5vbmU7XFxuXFx0fVxcblxcdC5pbWdDb250YWluZXIge1xcblxcdFxcdHRyYW5zbGF0ZTogMHB4IDBweDtcXG5cXHR9XFxuXFxuXFx0LmltZ0NvbnRhaW5lciBoMSB7XFxuXFx0XFx0dG9wOiA4NSU7XFxuXFx0XFx0bGVmdDogNTAlO1xcblxcdH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtDQUNDLHdDQUF3QztDQUN4QyxnQ0FBZ0M7Q0FDaEMsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyw0QkFBNEI7Q0FDNUIsc0JBQXNCO0FBQ3ZCOztBQUVBOztDQUVDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsWUFBWTtDQUNaLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTs7Q0FFQywrQkFBK0I7Q0FDL0IsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsK0JBQStCO0NBQy9CLHVCQUF1QjtDQUN2Qiw2QkFBNkI7Q0FDN0IsZ0RBQWdEO0FBQ2pEOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7QUFDWjtBQUNBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2IsZ0RBQWdEO0FBQ2pEOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFdBQVc7Q0FDWCxnREFBZ0Q7QUFDakQ7QUFDQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsUUFBUTtDQUNSLFNBQVM7Q0FDVCxrQkFBa0I7Q0FDbEIsZ0NBQWdDO0FBQ2pDO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixhQUFhO0FBQ2Q7QUFDQTs7Q0FFQyxhQUFhO0NBQ2IsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osK0JBQStCO0FBQ2hDO0FBQ0E7O0NBRUMsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsVUFBVTtBQUNYOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QiwwQkFBMEI7Q0FDMUIsOEJBQThCO0NBQzlCLFNBQVM7Q0FDVCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsU0FBUztDQUNULHFCQUFxQjtDQUNyQiw0REFBNEQ7Q0FDNUQsV0FBVztBQUNaO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsb0RBQW9EO0FBQ3JEOztBQUVBOztDQUVDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsMEJBQTBCO0FBQzNCO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxPQUFPO0FBQ1I7O0FBRUE7Q0FDQyxtQ0FBbUM7Q0FDbkMsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0M7RUFDQyxXQUFXO0NBQ1o7QUFDRDtBQUNBO0NBQ0M7RUFDQywyREFBMkQ7Q0FDNUQ7O0NBRUE7RUFDQyxnQkFBZ0I7Q0FDakI7O0NBRUE7RUFDQyxXQUFXO0NBQ1o7Q0FDQTtFQUNDLGNBQWM7RUFDZCxnQkFBZ0I7Q0FDakI7Q0FDQTtFQUNDLGNBQWM7RUFDZCxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsY0FBYztFQUNkLDJCQUEyQjtDQUM1Qjs7Q0FFQTtFQUNDLHdCQUF3QjtDQUN6Qjs7Q0FFQTtFQUNDLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysc0JBQXNCO0NBQ3ZCOztDQUVBO0VBQ0MsTUFBTTtFQUNOLFVBQVU7Q0FDWDtBQUNEOztBQUVBO0NBQ0M7RUFDQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7Q0FDZDs7Q0FFQTtFQUNDLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsWUFBWTtDQUNiO0NBQ0E7RUFDQyxrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxRQUFRO0VBQ1IsU0FBUztDQUNWO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheSZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG5cXHQtLWhlYWRpbmdGb250OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCIsIHNlcmlmO1xcblxcdC0tbWFpbkZvbnQ6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcblxcdC0tYmdCbHVlOiAjMDg5MWIyO1xcbn1cXG4qIHtcXG5cXHRmb250LWZhbWlseTogdmFyKC0tbWFpbkZvbnQpO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5oZWFkZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRtaW4td2lkdGg6IDEwMCU7XFxuXFx0bWluLWhlaWdodDogNDAlO1xcbn1cXG5cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiAyLjJyZW07XFxufVxcblxcbmgxLFxcbmgyIHtcXG5cXHRmb250LWZhbWlseTogdmFyKC0taGVhZGluZ0ZvbnQpO1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5oZWFkZXJCZyB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1pbi1oZWlnaHQ6IDM1JTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0JsdWUpO1xcblxcdHRyYW5zZm9ybTogc2tld1koLTZkZWcpO1xcblxcdHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuNzVyZW0gcmdiKDU2LCA1NiwgNTYpKTtcXG59XFxuXFxuLmljb24ge1xcblxcdGhlaWdodDogMjRweDtcXG5cXHR3aWR0aDogYXV0bztcXG59XFxuLmFib3V0TWVDb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRtYXgtd2lkdGg6IDUwMHB4O1xcblxcdG1pbi1oZWlnaHQ6IDMwMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC4yNXJlbSByZ2IoNTYsIDU2LCA1NikpO1xcbn1cXG5cXG4uaW1nQ29udGFpbmVyIGltZyB7XFxuXFx0aGVpZ2h0OiA0MDBweDtcXG5cXHR3aWR0aDogYXV0bztcXG5cXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjI1cmVtIHJnYig1NiwgNTYsIDU2KSk7XFxufVxcbi5pbWdDb250YWluZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmltZ0NvbnRhaW5lciBoMSB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR6LWluZGV4OiAyO1xcblxcdHRvcDogODUlO1xcblxcdGxlZnQ6IDUwJTtcXG5cXHR3aWR0aDogbWF4LWNvbnRlbnQ7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5pbnRyb2R1Y3Rpb24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAycmVtO1xcbn1cXG5tYWluLFxcbmZvb3RlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuZm9vdGVyIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdCbHVlKTtcXG59XFxubWFpbiAuaW50cm9kdWN0aW9uLFxcbmZvb3RlciAuaW50cm9kdWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IHN0YXJ0O1xcblxcdHdpZHRoOiA4MCU7XFxufVxcblxcbi5saW5rcyB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcblxcdGdyaWQtYXV0by1jb2x1bW5zOiBtYXgtY29udGVudDtcXG5cXHRnYXA6IDFyZW07XFxuXFx0anVzdGlmeS1pdGVtczogZW5kO1xcbn1cXG5cXG4uZ3JpZENvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6IDJyZW07XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuLnByb2plY3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWF4LXdpZHRoOiAzODBweDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwLjJyZW0gMC4ycmVtIHJnYig1NiwgNTYsIDU2KSk7XFxufVxcblxcbi5oZWFkaW5nQ29udGFpbmVyLFxcbi5wcm9qZWN0IHAge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAwcHggMXJlbSAwcHggMXJlbTtcXG59XFxuLmhlYWRpbmdDb250YWluZXIgLmxpbmtzIHtcXG5cXHRnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmhlYWRpbmdDb250YWluZXIgaDMge1xcblxcdGZsZXg6IDE7XFxufVxcblxcbi5zY3JlZW5zaG90IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODUsIDE4MCwgMTkyKTtcXG5cXHRtaW4taGVpZ2h0OiAxOHJlbTtcXG59XFxuXFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTk1cHgpIHtcXG5cXHRtYWluIC5pbnRyb2R1Y3Rpb24ge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuXFx0LmdyaWRDb250YWluZXIge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjcwcHgsIDFmcikpO1xcblxcdH1cXG5cXG5cXHQucHJvamVjdCB7XFxuXFx0XFx0bWluLXdpZHRoOiAyNzBweDtcXG5cXHR9XFxuXFxuXFx0bWFpbiAuaW50cm9kdWN0aW9uIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxuXFx0LmludHJvZHVjdGlvbiB7XFxuXFx0XFx0ZGlzcGxheTogdGFibGU7XFxuXFx0XFx0bWFyZ2luOiAwcHggYXV0bztcXG5cXHR9XFxuXFx0LmFib3V0TWVDb250YWluZXIge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdG1hcmdpbi10b3A6IDEwJTtcXG5cXHR9XFxuXFxuXFx0LmxpbmtzIHtcXG5cXHRcXHRkaXNwbGF5OiB0YWJsZTtcXG5cXHRcXHRtYXJnaW46IDYwcHggYXV0byBhdXRvIGF1dG87XFxuXFx0fVxcblxcblxcdC5pY29uIHtcXG5cXHRcXHRtYXJnaW46IDBweCAxcmVtIDBweCAwcHg7XFxuXFx0fVxcblxcblxcdC5pbWdDb250YWluZXIge1xcblxcdFxcdGZsb2F0OiBsZWZ0O1xcblxcdFxcdHotaW5kZXg6IDE7XFxuXFx0XFx0dHJhbnNsYXRlOiAtMjBweCAtMTBweDtcXG5cXHR9XFxuXFxuXFx0LmltZ0NvbnRhaW5lciBoMSB7XFxuXFx0XFx0dG9wOiAwO1xcblxcdFxcdGxlZnQ6IDEzMCU7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG5cXHQuaW50cm9kdWN0aW9uIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0cGFkZGluZzogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LmFib3V0TWVDb250YWluZXIge1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHRcXHRoZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdFxcdGZpbHRlcjogbm9uZTtcXG5cXHR9XFxuXFx0LmltZ0NvbnRhaW5lciB7XFxuXFx0XFx0dHJhbnNsYXRlOiAwcHggMHB4O1xcblxcdH1cXG5cXG5cXHQuaW1nQ29udGFpbmVyIGgxIHtcXG5cXHRcXHR0b3A6IDg1JTtcXG5cXHRcXHRsZWZ0OiA1MCU7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==