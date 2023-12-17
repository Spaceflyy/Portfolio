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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\t--headingFont: \"Playfair Display\", serif;\n\t--mainFont: \"Roboto\", sans-serif;\n\t--bgBlue: #0891b2;\n}\n* {\n\tfont-family: var(--mainFont);\n\tbox-sizing: border-box;\n}\n\nbody,\nhtml {\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100%;\n\twidth: 100%;\n}\n\nheader {\n\tposition: relative;\n\tmin-width: 100%;\n\tmin-height: 40%;\n}\n\nh1 {\n\tfont-size: 2.2rem;\n}\n\nh1,\nh2 {\n\tfont-family: var(--headingFont);\n\tfont-weight: 400;\n}\n\n.headerBg {\n\tposition: absolute;\n\twidth: 100%;\n\tmin-height: 35%;\n\tbackground-color: var(--bgBlue);\n\ttransform: skewY(-6deg);\n\ttransform-origin: bottom left;\n\tfilter: drop-shadow(0 0 0.75rem rgb(56, 56, 56));\n}\n\n.icon {\n\theight: 24px;\n\twidth: auto;\n}\n.aboutMeContainer {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: 500px;\n\tmin-height: 300px;\n\tbackground-color: white;\n\tpadding: 1rem;\n\tfilter: drop-shadow(0 0 0.25rem rgb(56, 56, 56));\n}\n\n.imgContainer img {\n\theight: 400px;\n\twidth: auto;\n\tfilter: drop-shadow(0 0 0.25rem rgb(56, 56, 56));\n}\n\nfooter .imgContainer img {\n\theight: 300px;\n}\n\n.imgContainer {\n\tposition: relative;\n}\n.imgContainer h1 {\n\tcolor: white;\n\tposition: absolute;\n\tz-index: 2;\n\ttop: 85%;\n\tleft: 50%;\n\twidth: max-content;\n\ttransform: translate(-50%, -50%);\n}\n.introduction,\nfooter .introduction {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 2rem;\n}\nfooter .introduction {\n\tjustify-content: flex-start;\n\tgap: 2rem;\n\twidth: 80%;\n}\n\n.contact {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-right: auto;\n}\nmain,\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n}\nfooter {\n\tcolor: white;\n\tbackground-color: var(--bgBlue);\n}\nmain .introduction {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: start;\n\twidth: 80%;\n}\n\n.links {\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgrid-template-columns: 1fr;\n\tgrid-auto-columns: max-content;\n\tgap: 1rem;\n\tjustify-items: end;\n}\n\nfooter .introduction .links {\n\tgrid-template-columns: max-content;\n}\n\n.gridContainer {\n\tdisplay: grid;\n\tgap: 2rem;\n\tjustify-items: center;\n\tgrid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n\twidth: 100%;\n}\n.project {\n\tdisplay: flex;\n\tmax-width: 380px;\n\tflex-direction: column;\n\tbackground-color: white;\n\tfilter: drop-shadow(0 0.2rem 0.2rem rgb(56, 56, 56));\n}\n\n.headingContainer,\n.project p {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 0px 1rem 0px 1rem;\n}\n\n.headingContainer h3 {\n\tflex: 1;\n}\n\n.screenshot {\n\tbackground-color: rgb(85, 180, 192);\n\tmin-height: 18rem;\n}\n\na {\n\ttext-decoration: none;\n}\n\n@media (max-width: 995px) {\n\tmain .introduction {\n\t\twidth: 100%;\n\t}\n}\n@media (max-width: 800px) {\n\t.gridContainer {\n\t\tgrid-template-columns: repeat(auto-fit, minmax(270px, 1fr));\n\t}\n\tfooter .introduction {\n\t\tgap: 2rem;\n\t}\n\t.project {\n\t\tmin-width: 270px;\n\t}\n\n\tmain .introduction {\n\t\twidth: 100%;\n\t}\n\t.introduction {\n\t\tdisplay: table;\n\t\tmargin: 0px auto;\n\t}\n\t.aboutMeContainer {\n\t\tdisplay: block;\n\t\tmargin-top: 10%;\n\t}\n\n\t.links {\n\t\tdisplay: table;\n\t\tmargin: 60px auto auto auto;\n\t}\n\n\t.icon {\n\t\tmargin: 0px 1rem 0px 0px;\n\t}\n\n\t.imgContainer {\n\t\tfloat: left;\n\t\tz-index: 1;\n\t\ttranslate: -20px -10px;\n\t}\n\n\t.imgContainer h1 {\n\t\ttop: 0;\n\t\tleft: 130%;\n\t}\n}\n\n@media (max-width: 500px) {\n\tfooter .introduction .links {\n\t\tgrid-template-columns: 1fr 1fr 1fr;\n\t}\n\t.introduction {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tpadding: 1rem;\n\t}\n\n\t.aboutMeContainer {\n\t\tmargin: 0;\n\t\theight: max-content;\n\t\tfilter: none;\n\t}\n\t.imgContainer {\n\t\ttranslate: 0px 0px;\n\t}\n\n\t.imgContainer h1 {\n\t\ttop: 85%;\n\t\tleft: 50%;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;CACC,wCAAwC;CACxC,gCAAgC;CAChC,iBAAiB;AAClB;AACA;CACC,4BAA4B;CAC5B,sBAAsB;AACvB;;AAEA;;CAEC,SAAS;CACT,UAAU;CACV,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,kBAAkB;CAClB,eAAe;CACf,eAAe;AAChB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;;CAEC,+BAA+B;CAC/B,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,eAAe;CACf,+BAA+B;CAC/B,uBAAuB;CACvB,6BAA6B;CAC7B,gDAAgD;AACjD;;AAEA;CACC,YAAY;CACZ,WAAW;AACZ;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,gBAAgB;CAChB,iBAAiB;CACjB,uBAAuB;CACvB,aAAa;CACb,gDAAgD;AACjD;;AAEA;CACC,aAAa;CACb,WAAW;CACX,gDAAgD;AACjD;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,kBAAkB;AACnB;AACA;CACC,YAAY;CACZ,kBAAkB;CAClB,UAAU;CACV,QAAQ;CACR,SAAS;CACT,kBAAkB;CAClB,gCAAgC;AACjC;AACA;;CAEC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,aAAa;AACd;AACA;CACC,2BAA2B;CAC3B,SAAS;CACT,UAAU;AACX;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,kBAAkB;AACnB;AACA;;CAEC,aAAa;CACb,uBAAuB;AACxB;AACA;CACC,YAAY;CACZ,+BAA+B;AAChC;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,kBAAkB;CAClB,UAAU;AACX;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,0BAA0B;CAC1B,8BAA8B;CAC9B,SAAS;CACT,kBAAkB;AACnB;;AAEA;CACC,kCAAkC;AACnC;;AAEA;CACC,aAAa;CACb,SAAS;CACT,qBAAqB;CACrB,4DAA4D;CAC5D,WAAW;AACZ;AACA;CACC,aAAa;CACb,gBAAgB;CAChB,sBAAsB;CACtB,uBAAuB;CACvB,oDAAoD;AACrD;;AAEA;;CAEC,aAAa;CACb,mBAAmB;CACnB,0BAA0B;AAC3B;;AAEA;CACC,OAAO;AACR;;AAEA;CACC,mCAAmC;CACnC,iBAAiB;AAClB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC;EACC,WAAW;CACZ;AACD;AACA;CACC;EACC,2DAA2D;CAC5D;CACA;EACC,SAAS;CACV;CACA;EACC,gBAAgB;CACjB;;CAEA;EACC,WAAW;CACZ;CACA;EACC,cAAc;EACd,gBAAgB;CACjB;CACA;EACC,cAAc;EACd,eAAe;CAChB;;CAEA;EACC,cAAc;EACd,2BAA2B;CAC5B;;CAEA;EACC,wBAAwB;CACzB;;CAEA;EACC,WAAW;EACX,UAAU;EACV,sBAAsB;CACvB;;CAEA;EACC,MAAM;EACN,UAAU;CACX;AACD;;AAEA;CACC;EACC,kCAAkC;CACnC;CACA;EACC,aAAa;EACb,sBAAsB;EACtB,aAAa;CACd;;CAEA;EACC,SAAS;EACT,mBAAmB;EACnB,YAAY;CACb;CACA;EACC,kBAAkB;CACnB;;CAEA;EACC,QAAQ;EACR,SAAS;CACV;AACD","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap\");\n\n:root {\n\t--headingFont: \"Playfair Display\", serif;\n\t--mainFont: \"Roboto\", sans-serif;\n\t--bgBlue: #0891b2;\n}\n* {\n\tfont-family: var(--mainFont);\n\tbox-sizing: border-box;\n}\n\nbody,\nhtml {\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100%;\n\twidth: 100%;\n}\n\nheader {\n\tposition: relative;\n\tmin-width: 100%;\n\tmin-height: 40%;\n}\n\nh1 {\n\tfont-size: 2.2rem;\n}\n\nh1,\nh2 {\n\tfont-family: var(--headingFont);\n\tfont-weight: 400;\n}\n\n.headerBg {\n\tposition: absolute;\n\twidth: 100%;\n\tmin-height: 35%;\n\tbackground-color: var(--bgBlue);\n\ttransform: skewY(-6deg);\n\ttransform-origin: bottom left;\n\tfilter: drop-shadow(0 0 0.75rem rgb(56, 56, 56));\n}\n\n.icon {\n\theight: 24px;\n\twidth: auto;\n}\n.aboutMeContainer {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: 500px;\n\tmin-height: 300px;\n\tbackground-color: white;\n\tpadding: 1rem;\n\tfilter: drop-shadow(0 0 0.25rem rgb(56, 56, 56));\n}\n\n.imgContainer img {\n\theight: 400px;\n\twidth: auto;\n\tfilter: drop-shadow(0 0 0.25rem rgb(56, 56, 56));\n}\n\nfooter .imgContainer img {\n\theight: 300px;\n}\n\n.imgContainer {\n\tposition: relative;\n}\n.imgContainer h1 {\n\tcolor: white;\n\tposition: absolute;\n\tz-index: 2;\n\ttop: 85%;\n\tleft: 50%;\n\twidth: max-content;\n\ttransform: translate(-50%, -50%);\n}\n.introduction,\nfooter .introduction {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 2rem;\n}\nfooter .introduction {\n\tjustify-content: flex-start;\n\tgap: 2rem;\n\twidth: 80%;\n}\n\n.contact {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-right: auto;\n}\nmain,\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n}\nfooter {\n\tcolor: white;\n\tbackground-color: var(--bgBlue);\n}\nmain .introduction {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: start;\n\twidth: 80%;\n}\n\n.links {\n\tdisplay: grid;\n\tgrid-auto-flow: column;\n\tgrid-template-columns: 1fr;\n\tgrid-auto-columns: max-content;\n\tgap: 1rem;\n\tjustify-items: end;\n}\n\nfooter .introduction .links {\n\tgrid-template-columns: max-content;\n}\n\n.gridContainer {\n\tdisplay: grid;\n\tgap: 2rem;\n\tjustify-items: center;\n\tgrid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n\twidth: 100%;\n}\n.project {\n\tdisplay: flex;\n\tmax-width: 380px;\n\tflex-direction: column;\n\tbackground-color: white;\n\tfilter: drop-shadow(0 0.2rem 0.2rem rgb(56, 56, 56));\n}\n\n.headingContainer,\n.project p {\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 0px 1rem 0px 1rem;\n}\n\n.headingContainer h3 {\n\tflex: 1;\n}\n\n.screenshot {\n\tbackground-color: rgb(85, 180, 192);\n\tmin-height: 18rem;\n}\n\na {\n\ttext-decoration: none;\n}\n\n@media (max-width: 995px) {\n\tmain .introduction {\n\t\twidth: 100%;\n\t}\n}\n@media (max-width: 800px) {\n\t.gridContainer {\n\t\tgrid-template-columns: repeat(auto-fit, minmax(270px, 1fr));\n\t}\n\tfooter .introduction {\n\t\tgap: 2rem;\n\t}\n\t.project {\n\t\tmin-width: 270px;\n\t}\n\n\tmain .introduction {\n\t\twidth: 100%;\n\t}\n\t.introduction {\n\t\tdisplay: table;\n\t\tmargin: 0px auto;\n\t}\n\t.aboutMeContainer {\n\t\tdisplay: block;\n\t\tmargin-top: 10%;\n\t}\n\n\t.links {\n\t\tdisplay: table;\n\t\tmargin: 60px auto auto auto;\n\t}\n\n\t.icon {\n\t\tmargin: 0px 1rem 0px 0px;\n\t}\n\n\t.imgContainer {\n\t\tfloat: left;\n\t\tz-index: 1;\n\t\ttranslate: -20px -10px;\n\t}\n\n\t.imgContainer h1 {\n\t\ttop: 0;\n\t\tleft: 130%;\n\t}\n}\n\n@media (max-width: 500px) {\n\tfooter .introduction .links {\n\t\tgrid-template-columns: 1fr 1fr 1fr;\n\t}\n\t.introduction {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tpadding: 1rem;\n\t}\n\n\t.aboutMeContainer {\n\t\tmargin: 0;\n\t\theight: max-content;\n\t\tfilter: none;\n\t}\n\t.imgContainer {\n\t\ttranslate: 0px 0px;\n\t}\n\n\t.imgContainer h1 {\n\t\ttop: 85%;\n\t\tleft: 50%;\n\t}\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7QUNBcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5JmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcblxcdC0taGVhZGluZ0ZvbnQ6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxuXFx0LS1tYWluRm9udDogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuXFx0LS1iZ0JsdWU6ICMwODkxYjI7XFxufVxcbioge1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluRm9udCk7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSxcXG5odG1sIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbmhlYWRlciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG1pbi13aWR0aDogMTAwJTtcXG5cXHRtaW4taGVpZ2h0OiA0MCU7XFxufVxcblxcbmgxIHtcXG5cXHRmb250LXNpemU6IDIuMnJlbTtcXG59XFxuXFxuaDEsXFxuaDIge1xcblxcdGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5nRm9udCk7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlYWRlckJnIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWluLWhlaWdodDogMzUlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQmx1ZSk7XFxuXFx0dHJhbnNmb3JtOiBza2V3WSgtNmRlZyk7XFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxuXFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC43NXJlbSByZ2IoNTYsIDU2LCA1NikpO1xcbn1cXG5cXG4uaWNvbiB7XFxuXFx0aGVpZ2h0OiAyNHB4O1xcblxcdHdpZHRoOiBhdXRvO1xcbn1cXG4uYWJvdXRNZUNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG1heC13aWR0aDogNTAwcHg7XFxuXFx0bWluLWhlaWdodDogMzAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjI1cmVtIHJnYig1NiwgNTYsIDU2KSk7XFxufVxcblxcbi5pbWdDb250YWluZXIgaW1nIHtcXG5cXHRoZWlnaHQ6IDQwMHB4O1xcblxcdHdpZHRoOiBhdXRvO1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuMjVyZW0gcmdiKDU2LCA1NiwgNTYpKTtcXG59XFxuXFxuZm9vdGVyIC5pbWdDb250YWluZXIgaW1nIHtcXG5cXHRoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4uaW1nQ29udGFpbmVyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5pbWdDb250YWluZXIgaDEge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0ei1pbmRleDogMjtcXG5cXHR0b3A6IDg1JTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0d2lkdGg6IG1heC1jb250ZW50O1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4uaW50cm9kdWN0aW9uLFxcbmZvb3RlciAuaW50cm9kdWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMnJlbTtcXG59XFxuZm9vdGVyIC5pbnRyb2R1Y3Rpb24ge1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRnYXA6IDJyZW07XFxuXFx0d2lkdGg6IDgwJTtcXG59XFxuXFxuLmNvbnRhY3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbm1haW4sXFxuZm9vdGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5mb290ZXIge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0JsdWUpO1xcbn1cXG5tYWluIC5pbnRyb2R1Y3Rpb24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogc3RhcnQ7XFxuXFx0d2lkdGg6IDgwJTtcXG59XFxuXFxuLmxpbmtzIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuXFx0Z3JpZC1hdXRvLWNvbHVtbnM6IG1heC1jb250ZW50O1xcblxcdGdhcDogMXJlbTtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBlbmQ7XFxufVxcblxcbmZvb3RlciAuaW50cm9kdWN0aW9uIC5saW5rcyB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudDtcXG59XFxuXFxuLmdyaWRDb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z2FwOiAycmVtO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNTBweCwgMWZyKSk7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcbi5wcm9qZWN0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1heC13aWR0aDogMzgwcHg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMC4ycmVtIDAuMnJlbSByZ2IoNTYsIDU2LCA1NikpO1xcbn1cXG5cXG4uaGVhZGluZ0NvbnRhaW5lcixcXG4ucHJvamVjdCBwIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMHB4IDFyZW0gMHB4IDFyZW07XFxufVxcblxcbi5oZWFkaW5nQ29udGFpbmVyIGgzIHtcXG5cXHRmbGV4OiAxO1xcbn1cXG5cXG4uc2NyZWVuc2hvdCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDg1LCAxODAsIDE5Mik7XFxuXFx0bWluLWhlaWdodDogMThyZW07XFxufVxcblxcbmEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5NXB4KSB7XFxuXFx0bWFpbiAuaW50cm9kdWN0aW9uIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcblxcdC5ncmlkQ29udGFpbmVyIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI3MHB4LCAxZnIpKTtcXG5cXHR9XFxuXFx0Zm9vdGVyIC5pbnRyb2R1Y3Rpb24ge1xcblxcdFxcdGdhcDogMnJlbTtcXG5cXHR9XFxuXFx0LnByb2plY3Qge1xcblxcdFxcdG1pbi13aWR0aDogMjcwcHg7XFxuXFx0fVxcblxcblxcdG1haW4gLmludHJvZHVjdGlvbiB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcblxcdC5pbnRyb2R1Y3Rpb24ge1xcblxcdFxcdGRpc3BsYXk6IHRhYmxlO1xcblxcdFxcdG1hcmdpbjogMHB4IGF1dG87XFxuXFx0fVxcblxcdC5hYm91dE1lQ29udGFpbmVyIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHRcXHRtYXJnaW4tdG9wOiAxMCU7XFxuXFx0fVxcblxcblxcdC5saW5rcyB7XFxuXFx0XFx0ZGlzcGxheTogdGFibGU7XFxuXFx0XFx0bWFyZ2luOiA2MHB4IGF1dG8gYXV0byBhdXRvO1xcblxcdH1cXG5cXG5cXHQuaWNvbiB7XFxuXFx0XFx0bWFyZ2luOiAwcHggMXJlbSAwcHggMHB4O1xcblxcdH1cXG5cXG5cXHQuaW1nQ29udGFpbmVyIHtcXG5cXHRcXHRmbG9hdDogbGVmdDtcXG5cXHRcXHR6LWluZGV4OiAxO1xcblxcdFxcdHRyYW5zbGF0ZTogLTIwcHggLTEwcHg7XFxuXFx0fVxcblxcblxcdC5pbWdDb250YWluZXIgaDEge1xcblxcdFxcdHRvcDogMDtcXG5cXHRcXHRsZWZ0OiAxMzAlO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuXFx0Zm9vdGVyIC5pbnRyb2R1Y3Rpb24gLmxpbmtzIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcblxcdH1cXG5cXHQuaW50cm9kdWN0aW9uIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0cGFkZGluZzogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LmFib3V0TWVDb250YWluZXIge1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHRcXHRoZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdFxcdGZpbHRlcjogbm9uZTtcXG5cXHR9XFxuXFx0LmltZ0NvbnRhaW5lciB7XFxuXFx0XFx0dHJhbnNsYXRlOiAwcHggMHB4O1xcblxcdH1cXG5cXG5cXHQuaW1nQ29udGFpbmVyIGgxIHtcXG5cXHRcXHR0b3A6IDg1JTtcXG5cXHRcXHRsZWZ0OiA1MCU7XFxuXFx0fVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0NBQ0Msd0NBQXdDO0NBQ3hDLGdDQUFnQztDQUNoQyxpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLDRCQUE0QjtDQUM1QixzQkFBc0I7QUFDdkI7O0FBRUE7O0NBRUMsU0FBUztDQUNULFVBQVU7Q0FDVixZQUFZO0NBQ1osV0FBVztBQUNaOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBOztDQUVDLCtCQUErQjtDQUMvQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLGVBQWU7Q0FDZiwrQkFBK0I7Q0FDL0IsdUJBQXVCO0NBQ3ZCLDZCQUE2QjtDQUM3QixnREFBZ0Q7QUFDakQ7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztBQUNaO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsdUJBQXVCO0NBQ3ZCLGFBQWE7Q0FDYixnREFBZ0Q7QUFDakQ7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsV0FBVztDQUNYLGdEQUFnRDtBQUNqRDs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsUUFBUTtDQUNSLFNBQVM7Q0FDVCxrQkFBa0I7Q0FDbEIsZ0NBQWdDO0FBQ2pDO0FBQ0E7O0NBRUMsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsYUFBYTtBQUNkO0FBQ0E7Q0FDQywyQkFBMkI7Q0FDM0IsU0FBUztDQUNULFVBQVU7QUFDWDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25CO0FBQ0E7O0NBRUMsYUFBYTtDQUNiLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0MsWUFBWTtDQUNaLCtCQUErQjtBQUNoQztBQUNBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsVUFBVTtBQUNYOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QiwwQkFBMEI7Q0FDMUIsOEJBQThCO0NBQzlCLFNBQVM7Q0FDVCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsU0FBUztDQUNULHFCQUFxQjtDQUNyQiw0REFBNEQ7Q0FDNUQsV0FBVztBQUNaO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsb0RBQW9EO0FBQ3JEOztBQUVBOztDQUVDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsT0FBTztBQUNSOztBQUVBO0NBQ0MsbUNBQW1DO0NBQ25DLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDO0VBQ0MsV0FBVztDQUNaO0FBQ0Q7QUFDQTtDQUNDO0VBQ0MsMkRBQTJEO0NBQzVEO0NBQ0E7RUFDQyxTQUFTO0NBQ1Y7Q0FDQTtFQUNDLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLFdBQVc7Q0FDWjtDQUNBO0VBQ0MsY0FBYztFQUNkLGdCQUFnQjtDQUNqQjtDQUNBO0VBQ0MsY0FBYztFQUNkLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxjQUFjO0VBQ2QsMkJBQTJCO0NBQzVCOztDQUVBO0VBQ0Msd0JBQXdCO0NBQ3pCOztDQUVBO0VBQ0MsV0FBVztFQUNYLFVBQVU7RUFDVixzQkFBc0I7Q0FDdkI7O0NBRUE7RUFDQyxNQUFNO0VBQ04sVUFBVTtDQUNYO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLGtDQUFrQztDQUNuQztDQUNBO0VBQ0MsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0NBQ2Q7O0NBRUE7RUFDQyxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFlBQVk7Q0FDYjtDQUNBO0VBQ0Msa0JBQWtCO0NBQ25COztDQUVBO0VBQ0MsUUFBUTtFQUNSLFNBQVM7Q0FDVjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXkmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuXFx0LS1oZWFkaW5nRm9udDogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXG5cXHQtLW1haW5Gb250OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG5cXHQtLWJnQmx1ZTogIzA4OTFiMjtcXG59XFxuKiB7XFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLW1haW5Gb250KTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuaGVhZGVyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bWluLXdpZHRoOiAxMDAlO1xcblxcdG1pbi1oZWlnaHQ6IDQwJTtcXG59XFxuXFxuaDEge1xcblxcdGZvbnQtc2l6ZTogMi4ycmVtO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuXFx0Zm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmdGb250KTtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVhZGVyQmcge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtaW4taGVpZ2h0OiAzNSU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdCbHVlKTtcXG5cXHR0cmFuc2Zvcm06IHNrZXdZKC02ZGVnKTtcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG5cXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwLjc1cmVtIHJnYig1NiwgNTYsIDU2KSk7XFxufVxcblxcbi5pY29uIHtcXG5cXHRoZWlnaHQ6IDI0cHg7XFxuXFx0d2lkdGg6IGF1dG87XFxufVxcbi5hYm91dE1lQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWF4LXdpZHRoOiA1MDBweDtcXG5cXHRtaW4taGVpZ2h0OiAzMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDAuMjVyZW0gcmdiKDU2LCA1NiwgNTYpKTtcXG59XFxuXFxuLmltZ0NvbnRhaW5lciBpbWcge1xcblxcdGhlaWdodDogNDAwcHg7XFxuXFx0d2lkdGg6IGF1dG87XFxuXFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMC4yNXJlbSByZ2IoNTYsIDU2LCA1NikpO1xcbn1cXG5cXG5mb290ZXIgLmltZ0NvbnRhaW5lciBpbWcge1xcblxcdGhlaWdodDogMzAwcHg7XFxufVxcblxcbi5pbWdDb250YWluZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmltZ0NvbnRhaW5lciBoMSB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR6LWluZGV4OiAyO1xcblxcdHRvcDogODUlO1xcblxcdGxlZnQ6IDUwJTtcXG5cXHR3aWR0aDogbWF4LWNvbnRlbnQ7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcbi5pbnRyb2R1Y3Rpb24sXFxuZm9vdGVyIC5pbnRyb2R1Y3Rpb24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAycmVtO1xcbn1cXG5mb290ZXIgLmludHJvZHVjdGlvbiB7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdGdhcDogMnJlbTtcXG5cXHR3aWR0aDogODAlO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxubWFpbixcXG5mb290ZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmZvb3RlciB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnQmx1ZSk7XFxufVxcbm1haW4gLmludHJvZHVjdGlvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBzdGFydDtcXG5cXHR3aWR0aDogODAlO1xcbn1cXG5cXG4ubGlua3Mge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG5cXHRncmlkLWF1dG8tY29sdW1uczogbWF4LWNvbnRlbnQ7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGp1c3RpZnktaXRlbXM6IGVuZDtcXG59XFxuXFxuZm9vdGVyIC5pbnRyb2R1Y3Rpb24gLmxpbmtzIHtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50O1xcbn1cXG5cXG4uZ3JpZENvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRnYXA6IDJyZW07XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuLnByb2plY3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWF4LXdpZHRoOiAzODBweDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwLjJyZW0gMC4ycmVtIHJnYig1NiwgNTYsIDU2KSk7XFxufVxcblxcbi5oZWFkaW5nQ29udGFpbmVyLFxcbi5wcm9qZWN0IHAge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAwcHggMXJlbSAwcHggMXJlbTtcXG59XFxuXFxuLmhlYWRpbmdDb250YWluZXIgaDMge1xcblxcdGZsZXg6IDE7XFxufVxcblxcbi5zY3JlZW5zaG90IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODUsIDE4MCwgMTkyKTtcXG5cXHRtaW4taGVpZ2h0OiAxOHJlbTtcXG59XFxuXFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTk1cHgpIHtcXG5cXHRtYWluIC5pbnRyb2R1Y3Rpb24ge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuXFx0LmdyaWRDb250YWluZXIge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjcwcHgsIDFmcikpO1xcblxcdH1cXG5cXHRmb290ZXIgLmludHJvZHVjdGlvbiB7XFxuXFx0XFx0Z2FwOiAycmVtO1xcblxcdH1cXG5cXHQucHJvamVjdCB7XFxuXFx0XFx0bWluLXdpZHRoOiAyNzBweDtcXG5cXHR9XFxuXFxuXFx0bWFpbiAuaW50cm9kdWN0aW9uIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxuXFx0LmludHJvZHVjdGlvbiB7XFxuXFx0XFx0ZGlzcGxheTogdGFibGU7XFxuXFx0XFx0bWFyZ2luOiAwcHggYXV0bztcXG5cXHR9XFxuXFx0LmFib3V0TWVDb250YWluZXIge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdFxcdG1hcmdpbi10b3A6IDEwJTtcXG5cXHR9XFxuXFxuXFx0LmxpbmtzIHtcXG5cXHRcXHRkaXNwbGF5OiB0YWJsZTtcXG5cXHRcXHRtYXJnaW46IDYwcHggYXV0byBhdXRvIGF1dG87XFxuXFx0fVxcblxcblxcdC5pY29uIHtcXG5cXHRcXHRtYXJnaW46IDBweCAxcmVtIDBweCAwcHg7XFxuXFx0fVxcblxcblxcdC5pbWdDb250YWluZXIge1xcblxcdFxcdGZsb2F0OiBsZWZ0O1xcblxcdFxcdHotaW5kZXg6IDE7XFxuXFx0XFx0dHJhbnNsYXRlOiAtMjBweCAtMTBweDtcXG5cXHR9XFxuXFxuXFx0LmltZ0NvbnRhaW5lciBoMSB7XFxuXFx0XFx0dG9wOiAwO1xcblxcdFxcdGxlZnQ6IDEzMCU7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG5cXHRmb290ZXIgLmludHJvZHVjdGlvbiAubGlua3Mge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuXFx0fVxcblxcdC5pbnRyb2R1Y3Rpb24ge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRwYWRkaW5nOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQuYWJvdXRNZUNvbnRhaW5lciB7XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdFxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0XFx0ZmlsdGVyOiBub25lO1xcblxcdH1cXG5cXHQuaW1nQ29udGFpbmVyIHtcXG5cXHRcXHR0cmFuc2xhdGU6IDBweCAwcHg7XFxuXFx0fVxcblxcblxcdC5pbWdDb250YWluZXIgaDEge1xcblxcdFxcdHRvcDogODUlO1xcblxcdFxcdGxlZnQ6IDUwJTtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9