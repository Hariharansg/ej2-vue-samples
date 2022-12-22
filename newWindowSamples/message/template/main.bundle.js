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
/******/ 		"message/template/main": 0
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
/******/ 	deferredModules.push(["./Samples/message/template/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/message/template/App.vue":
/*!******************************************!*\
  !*** ./Samples/message/template/App.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_4b1db3e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=4b1db3e8& */ \"./Samples/message/template/App.vue?vue&type=template&id=4b1db3e8&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/message/template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_4b1db3e8_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=4b1db3e8&lang=css& */ \"./Samples/message/template/App.vue?vue&type=style&index=0&id=4b1db3e8&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_4b1db3e8___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_4b1db3e8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/message/template/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/message/template/App.vue?");

/***/ }),

/***/ "./Samples/message/template/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./Samples/message/template/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/message/template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/message/template/App.vue?");

/***/ }),

/***/ "./Samples/message/template/App.vue?vue&type=style&index=0&id=4b1db3e8&lang=css&":
/*!***************************************************************************************!*\
  !*** ./Samples/message/template/App.vue?vue&type=style&index=0&id=4b1db3e8&lang=css& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4b1db3e8_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=4b1db3e8&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/message/template/App.vue?vue&type=style&index=0&id=4b1db3e8&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4b1db3e8_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4b1db3e8_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4b1db3e8_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4b1db3e8_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/message/template/App.vue?");

/***/ }),

/***/ "./Samples/message/template/App.vue?vue&type=template&id=4b1db3e8&":
/*!*************************************************************************!*\
  !*** ./Samples/message/template/App.vue?vue&type=template&id=4b1db3e8& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4b1db3e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=4b1db3e8& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/message/template/App.vue?vue&type=template&id=4b1db3e8&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4b1db3e8___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4b1db3e8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/message/template/App.vue?");

/***/ }),

/***/ "./Samples/message/template/main.js":
/*!******************************************!*\
  !*** ./Samples/message/template/main.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/message/template/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/message/template/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/message/template/App.vue?vue&type=style&index=0&id=4b1db3e8&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/message/template/App.vue?vue&type=style&index=0&id=4b1db3e8&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.msg-template-section .content-section {\\n  margin: 0 auto;\\n  max-width: 450px;\\n  padding-top: 20px;\\n}\\n.msg-template-section .e-btn.msg-hidden {\\n  display: none;\\n}\\n.msg-template-section .e-message h1 {\\n  margin: 0;\\n  font-size: 16px;\\n  font-weight: 600;\\n  line-height: 1.25;\\n}\\n.msg-template-section .e-message .e-msg-icon {\\n  padding: 0 4px;\\n  margin-top: 3px;\\n}\\n.msg-template-section .e-message p {\\n  margin: 8px 0 4px;\\n}\\n.msg-template-section .e-message .e-btn {\\n  padding: 0 5px 0 0;\\n}\\n.e-bigger .msg-template-section .e-message h1 {\\n  font-size: 20px;\\n}\\n.e-bigger .msg-template-section .e-message .e-msg-icon {\\n  padding: 4px;\\n  font-size: 20px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ons-vue-samples_release_20.4.0.1/Samples/message/template/App.vue?vue&type=style&index=0&id=4b1db3e8&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,cAAc;CACf;AACD;EACE,UAAU;EACV,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,aAAa;EACb,gBAAgB;CACjB\",\"file\":\"App.vue?vue&type=style&index=0&id=4b1db3e8&lang=css&\",\"sourcesContent\":[\"\\n.msg-template-section .content-section {\\n  margin: 0 auto;\\n  max-width: 450px;\\n  padding-top: 20px;\\n}\\n.msg-template-section .e-btn.msg-hidden {\\n  display: none;\\n}\\n.msg-template-section .e-message h1 {\\n  margin: 0;\\n  font-size: 16px;\\n  font-weight: 600;\\n  line-height: 1.25;\\n}\\n.msg-template-section .e-message .e-msg-icon {\\n  padding: 0 4px;\\n  margin-top: 3px;\\n}\\n.msg-template-section .e-message p {\\n  margin: 8px 0 4px;\\n}\\n.msg-template-section .e-message .e-btn {\\n  padding: 0 5px 0 0;\\n}\\n.e-bigger .msg-template-section .e-message h1 {\\n  font-size: 20px;\\n}\\n.e-bigger .msg-template-section .e-message .e-msg-icon {\\n  padding: 4px;\\n  font-size: 20px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/message/template/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/message/template/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/message/template/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-notifications */ \"./node_modules/@syncfusion/ej2-vue-notifications/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"ButtonPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"CheckBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_notifications__WEBPACK_IMPORTED_MODULE_1__[\"MessagePlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function () {\n    return {};\n  },\n  methods: {\n    showClick: function () {\n      this.$refs.msgTemplate.ej2Instances.visible = true;\n      this.$refs.showBtn.ej2Instances.element.classList.add(\"msg-hidden\");\n    },\n    dismissClick: function () {\n      this.$refs.msgTemplate.ej2Instances.visible = false;\n    },\n    closed: function () {\n      this.$refs.showBtn.ej2Instances.element.classList.remove(\"msg-hidden\");\n    },\n  },\n}));\n\n\n//# sourceURL=webpack:///./Samples/message/template/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/message/template/App.vue?vue&type=template&id=4b1db3e8&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/message/template/App.vue?vue&type=template&id=4b1db3e8& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"col-lg-12 control-section msg-template-section\" },\n    [\n      _c(\n        \"div\",\n        { staticClass: \"content-section\" },\n        [\n          _c(\"ejs-button\", {\n            ref: \"showBtn\",\n            attrs: {\n              id: \"showBtn\",\n              content: \"Show pull request\",\n              cssClass: \"e-outline e-primary e-success msg-hidden\",\n            },\n            nativeOn: {\n              click: function ($event) {\n                return _vm.showClick.apply(null, arguments)\n              },\n            },\n          }),\n          _vm._v(\" \"),\n          _c(\"ejs-message\", {\n            ref: \"msgTemplate\",\n            attrs: {\n              id: \"msg_template\",\n              severity: \"Success\",\n              content: \"contentTemplate\",\n              closed: _vm.closed,\n            },\n            scopedSlots: _vm._u([\n              {\n                key: \"contentTemplate\",\n                fn: function () {\n                  return [\n                    _c(\n                      \"div\",\n                      [\n                        _c(\"h1\", [_vm._v(\"Merged pull request\")]),\n                        _vm._v(\" \"),\n                        _c(\"p\", [\n                          _vm._v(\n                            \"Pull request #41 merged after a successful build\"\n                          ),\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"ejs-button\", {\n                          attrs: {\n                            id: \"commitBtn\",\n                            cssClass: \"e-link\",\n                            content: \"View commit\",\n                          },\n                        }),\n                        _vm._v(\" \"),\n                        _c(\"ejs-button\", {\n                          attrs: {\n                            id: \"closeBtn\",\n                            cssClass: \"e-link\",\n                            content: \"Dismiss\",\n                          },\n                          nativeOn: {\n                            click: function ($event) {\n                              return _vm.dismissClick.apply(null, arguments)\n                            },\n                          },\n                        }),\n                      ],\n                      1\n                    ),\n                  ]\n                },\n                proxy: true,\n              },\n            ]),\n          }),\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _vm._m(0),\n      _vm._v(\" \"),\n      _vm._m(1),\n    ]\n  )\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the template functionality of the Vue Message component. Click the \"\n        ),\n        _c(\"b\", [_vm._v(\"dismiss\")]),\n        _vm._v(\" button to hide the message. Click the \"),\n        _c(\"b\", [_vm._v(\"Show pull request\")]),\n        _vm._v(\" button to restore the hidden message.\"),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"The Message component has an option to customize the content with a custom structure. The content can be a string, paragraph, or any other HTML element.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"In this sample, the Message component content is customized with HTML elements and Vue Button components.\"\n        ),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/message/template/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });