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
var _jsxFileName = "C:\\Users\\Joel Anyanti\\Documents\\Projects\\NSBE-OHQ\\ui\\components\\Forms.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
var FormExampleFieldControlId = function FormExampleFieldControlId(props) {
  return __jsx(Form, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, __jsx(Form.Group, {
    widths: "equal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx(Form.Field, {
    id: "form-input-control-first-name",
    control: Input,
    label: "First name",
    placeholder: "First name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx(Form.Field, {
    id: "form-input-control-last-name",
    control: Input,
    label: "Last name",
    placeholder: "Last name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(Form.Field, {
    control: Select,
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
      lineNumber: 16
    },
    __self: this
  })), __jsx(Form.Field, {
    id: "form-textarea-control-opinion",
    control: TextArea,
    label: "Opinion",
    placeholder: "Opinion",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(Form.Field, {
    id: "form-button-control-public",
    control: Button,
    content: "Confirm",
    label: "Label with htmlFor",
    onClick: props.handleFormSubmission,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }));
};

/***/ }),

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
/* harmony import */ var _components_Forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Forms */ "./components/Forms.js");
var _jsxFileName = "C:\\Users\\Joel Anyanti\\Documents\\Projects\\NSBE-OHQ\\ui\\pages\\about.js";
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

var clickHandler = function clickHandler() {
  console.log('Clicked!');
};

function About() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "This is the about page"), __jsx(_components_Forms__WEBPACK_IMPORTED_MODULE_4__["FormExampleFieldControlId"], {
    handleFormSubmission: clickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=about.js.7a8fdca35a0657aa833d.hot-update.js.map