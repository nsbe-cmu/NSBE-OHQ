webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Joel Anyanti\\Documents\\Projects\\NSBE-OHQ\\ui\\pages\\about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// pages/about.js



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
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
    id: "form-input-control-first-name",
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"],
    label: "First name",
    placeholder: "First name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
    id: "form-input-control-last-name",
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"],
    label: "Last name",
    placeholder: "Last name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Select"],
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
      lineNumber: 28
    },
    __self: this
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
    id: "form-textarea-control-opinion",
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["TextArea"],
    label: "Opinion",
    placeholder: "Opinion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
    id: "form-button-control-public",
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"],
    content: "Confirm",
    label: "Label with htmlFor",
    onClick: _this.props.handleFormSubmission,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
};

function About() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "This is the about page"), __jsx(FormExampleFieldControlId, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=about.js.0f287b19f1352874821d.hot-update.js.map