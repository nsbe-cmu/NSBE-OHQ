webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/Forms.js":
/*!*****************************!*\
  !*** ./components/Forms.js ***!
  \*****************************/
/*! exports provided: FormExampleFieldControlId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormExampleFieldControlId", function() { return FormExampleFieldControlId; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "C:\\Users\\Joel Anyanti\\Documents\\Projects\\NSBE-OHQ\\ui\\components\\Forms.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var genderOptions = [{
  key: 'm',
  text: 'Male',
  value: 'male'
}, {
  key: 'f',
  text: 'Female',
  value: 'female'
}, {
  key: 'o',
  text: 'Other',
  value: 'other'
}];
var FormExampleFieldControlId = function FormExampleFieldControlId(props) {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    id: "form-input-control-first-name",
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"],
    label: "First name",
    placeholder: "First name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    id: "form-input-control-last-name",
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"],
    label: "Last name",
    placeholder: "Last name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Select"],
    options: genderOptions,
    label: {
      children: 'Gender',
      htmlFor: 'form-select-control-gender'
    },
    placeholder: "Gender",
    search: true,
    searchInput: {
      id: 'form-select-control-gender'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    id: "form-textarea-control-opinion",
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["TextArea"],
    label: "Opinion",
    placeholder: "Opinion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Field, {
    id: "form-button-control-public",
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"],
    content: "Confirm",
    label: "Label with htmlFor",
    onClick: props.handleFormSubmission,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=about.js.67c6e908fa11da315421.hot-update.js.map