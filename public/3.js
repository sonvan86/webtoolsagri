(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/react-bootstrap/esm/PageItem.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/PageItem.js ***!
  \******************************************************/
/*! exports provided: default, First, Prev, Ellipsis, Next, Last */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "First", function() { return First; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prev", function() { return Prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ellipsis", function() { return Ellipsis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Next", function() { return Next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Last", function() { return Last; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/esm/SafeAnchor.js");


var _excluded = ["active", "disabled", "className", "style", "activeLabel", "children"],
    _excluded2 = ["children"];

/* eslint-disable react/no-multi-comp */



var defaultProps = {
  active: false,
  disabled: false,
  activeLabel: '(current)'
};
var PageItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      style = _ref.style,
      activeLabel = _ref.activeLabel,
      children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  var Component = active || disabled ? 'span' : _SafeAnchor__WEBPACK_IMPORTED_MODULE_4__["default"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    ref: ref,
    style: style,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'page-item', {
      active: active,
      disabled: disabled
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "page-link",
    disabled: disabled
  }, props), children, active && activeLabel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "sr-only"
  }, activeLabel)));
});
PageItem.defaultProps = defaultProps;
PageItem.displayName = 'PageItem';
/* harmony default export */ __webpack_exports__["default"] = (PageItem);

function createButton(name, defaultValue, label) {
  if (label === void 0) {
    label = name;
  }

  function Button(_ref2) {
    var children = _ref2.children,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _excluded2);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(PageItem, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      "aria-hidden": "true"
    }, children || defaultValue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "sr-only"
    }, label));
  }

  Button.displayName = name;
  return Button;
}

var First = createButton('First', '«');
var Prev = createButton('Prev', '‹', 'Previous');
var Ellipsis = createButton('Ellipsis', '…', 'More');
var Next = createButton('Next', '›');
var Last = createButton('Last', '»');

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Pagination.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Pagination.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _PageItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PageItem */ "./node_modules/react-bootstrap/esm/PageItem.js");


var _excluded = ["bsPrefix", "className", "children", "size"];





/**
 * @property {PageItem} Item
 * @property {PageItem} First
 * @property {PageItem} Prev
 * @property {PageItem} Ellipsis
 * @property {PageItem} Next
 * @property {PageItem} Last
 */
var Pagination = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      size = _ref.size,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  var decoratedBsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'pagination');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, decoratedBsPrefix, size && decoratedBsPrefix + "-" + size)
  }), children);
});
Pagination.First = _PageItem__WEBPACK_IMPORTED_MODULE_5__["First"];
Pagination.Prev = _PageItem__WEBPACK_IMPORTED_MODULE_5__["Prev"];
Pagination.Ellipsis = _PageItem__WEBPACK_IMPORTED_MODULE_5__["Ellipsis"];
Pagination.Item = _PageItem__WEBPACK_IMPORTED_MODULE_5__["default"];
Pagination.Next = _PageItem__WEBPACK_IMPORTED_MODULE_5__["Next"];
Pagination.Last = _PageItem__WEBPACK_IMPORTED_MODULE_5__["Last"];
/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./resources/js/components/user/index.js":
/*!***********************************************!*\
  !*** ./resources/js/components/user/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal */ "./resources/js/components/user/modal.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagination */ "./resources/js/components/user/pagination.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search */ "./resources/js/components/user/search.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table */ "./resources/js/components/user/table.js");










var UserComponent = function UserComponent() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"].Header, null, "Employees"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_table__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pagination__WEBPACK_IMPORTED_MODULE_6__["default"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modal__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (UserComponent);

/***/ }),

/***/ "./resources/js/components/user/modal.js":
/*!***********************************************!*\
  !*** ./resources/js/components/user/modal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions */ "./resources/js/actions/index.js");
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Alert */ "./node_modules/react-bootstrap/esm/Alert.js");
/* harmony import */ var _services_organisation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/organisation */ "./resources/js/services/organisation.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var mapStateToProps = function mapStateToProps(state) {
  return {
    status: state.addUserModal.status,
    page: state.user.page,
    keyword: state.user.keyword
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleClose: function handleClose() {
      return dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_9__["default"].CLOSE_ADD_USER_MODAL,
        value: {}
      });
    },
    addUser: function addUser(employee) {
      return dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_9__["default"].SAGA_ADD_USER,
        value: employee
      });
    }
  };
};

var UserModalComponent = function UserModalComponent(props) {
  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  var status = props.status,
      page = props.page,
      keyword = props.keyword,
      handleClose = props.handleClose,
      addUser = props.addUser;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      organisations = _useState4[0],
      setOrganisations = _useState4[1];

  var submitUserHandler = function submitUserHandler(e) {
    try {
      if (status) {
        addUser({
          name: e.name,
          email: e.email,
          organisation: e.organisation,
          contract_start: e.contract_start,
          type: e.type,
          page: page,
          keyword: keyword
        });
        handleClose();
      }
    } catch (error) {
      setError('Update Fail');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var initial = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_services_organisation__WEBPACK_IMPORTED_MODULE_11__["getOrganisations"])();

              case 2:
                result = _context.sent;
                setOrganisations(result);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function initial() {
        return _ref.apply(this, arguments);
      };
    }();

    initial();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    show: status ? true : false,
    onHide: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onSubmit: handleSubmit(submitUserHandler)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__["default"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__["default"].Title, null, "Add User")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: error ? true : false,
    variant: "success",
    role: "alert"
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Group, {
    as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    forhtml: "name",
    className: "col-md-4 col-form-label text-md-right"
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__["default"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Control, {
    id: "name",
    type: "text",
    className: errors.name && errors.name.message ? 'is-invalid' : '',
    name: "name",
    ref: register({
      required: 'Required'
    }),
    autoComplete: "name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "invalid-feedback",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, errors.name && errors.name.message)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Group, {
    as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    forhtml: "email",
    className: "col-md-4 col-form-label text-md-right"
  }, "E-Mail Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Control, {
    id: "email",
    type: "email",
    className: errors.email && errors.email.message ? 'is-invalid' : '',
    name: "email",
    ref: register({
      required: 'Required'
    }),
    autoComplete: "email",
    autoFocus: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "invalid-feedback",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, errors.email && errors.email.message)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Group, {
    as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    forhtml: "organisation",
    className: "col-md-4 col-form-label text-md-right"
  }, "Organisation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Control, {
    as: "select",
    id: "organisation",
    name: "organisation",
    className: errors.organisation && errors.organisation.message ? 'is-invalid' : '',
    ref: register({
      required: 'Required'
    })
  }, organisations.map(function (element) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      key: element.id,
      value: element.name
    }, element.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "invalid-feedback",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, errors.organisation && errors.organisation.message)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Group, {
    as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    forhtml: "type",
    className: "col-md-4 col-form-label text-md-right"
  }, "Permission"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Control, {
    as: "select",
    id: "type",
    name: "type",
    className: errors.type && errors.type.message ? 'is-invalid' : '',
    ref: register({
      required: 'Required'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    key: "employee",
    value: "employee"
  }, "Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    key: "admin",
    value: "admin"
  }, "Administrator")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "invalid-feedback",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, errors.type && errors.type.message)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Group, {
    as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    forhtml: "contract_start",
    className: "col-md-4 col-form-label text-md-right"
  }, "Contract Start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Control, {
    type: "date",
    id: "contract_start",
    name: "contract_start",
    className: errors.contract_start && errors.contract_start.message ? 'is-invalid' : '',
    ref: register({
      required: 'Required'
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "invalid-feedback",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, errors.contract_start && errors.contract_start.message))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__["default"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "secondary",
    onClick: handleClose
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "primary",
    type: "submit"
  }, "Save Changes"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(UserModalComponent));

/***/ }),

/***/ "./resources/js/components/user/pagination.js":
/*!****************************************************!*\
  !*** ./resources/js/components/user/pagination.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Pagination */ "./node_modules/react-bootstrap/esm/Pagination.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./resources/js/actions/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var paginationStyle = {
  justifyContent: 'center'
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    page: state.user.page,
    keyword: state.user.keyword,
    totalPage: state.user.totalPage
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    searchUser: function searchUser(params) {
      return dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_3__["default"].SAGA_USER_GET_LIST,
        value: params
      });
    }
  };
};

var UserPaginationComponent = function UserPaginationComponent(props) {
  var page = props.page,
      keyword = props.keyword,
      totalPage = props.totalPage,
      searchUser = props.searchUser;

  var changePageHandler = function changePageHandler(e) {
    searchUser({
      page: e.target.getAttribute('value'),
      keyword: keyword
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: paginationStyle
  }, _toConsumableArray(Array(totalPage)).map(function (x, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
      key: i,
      value: i + 1,
      active: page === i + 1 ? true : false,
      onClick: changePageHandler
    }, ' ', i + 1, ' ');
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(UserPaginationComponent));

/***/ }),

/***/ "./resources/js/components/user/search.js":
/*!************************************************!*\
  !*** ./resources/js/components/user/search.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions */ "./resources/js/actions/index.js");








var mapStateToProps = function mapStateToProps(state) {
  return {
    page: state.user.page,
    keyword: state.user.keyword
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    searchUser: function searchUser(params) {
      return dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_6__["default"].SAGA_USER_GET_LIST,
        value: params
      });
    },
    openAddUserModal: function openAddUserModal() {
      return dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_6__["default"].OPEN_ADD_USER_MODAL,
        value: ''
      });
    }
  };
};

var UserSearchComponent = function UserSearchComponent(props) {
  var page = props.page,
      keyword = props.keyword,
      searchUser = props.searchUser,
      openAddUserModal = props.openAddUserModal;
  var newKeyword = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(keyword);

  var searchHandler = function searchHandler() {
    searchUser({
      page: page,
      keyword: newKeyword.current.value
    });
  };

  var addUserHandler = function addUserHandler() {
    openAddUserModal();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__["default"].Group, {
    as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sm: {
      span: 6,
      offset: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__["default"].Control, {
    ref: newKeyword,
    placeholder: "Search employee name",
    defaultValue: keyword
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sm: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "button",
    onClick: searchHandler
  }, "Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sm: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "button",
    onClick: addUserHandler
  }, "Add")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(UserSearchComponent));

/***/ }),

/***/ "./resources/js/components/user/table.js":
/*!***********************************************!*\
  !*** ./resources/js/components/user/table.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./resources/js/actions/index.js");





var mapStateToProps = function mapStateToProps(state) {
  return {
    employees: state.user.data
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getUserList: function getUserList(params) {
      return dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_3__["default"].SAGA_USER_GET_LIST,
        value: params
      });
    }
  };
};

var UserTableComponent = function UserTableComponent(props) {
  var employees = props.employees,
      getUserList = props.getUserList;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getUserList({
      page: 1,
      keyword: ''
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "mt-4",
    striped: true,
    bordered: true,
    hover: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Permission"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Organisation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Contract Start"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, employees.map(function (employee) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: employee.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, employee.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, employee.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, employee.type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, employee.organisation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, employee.contract_started_at));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(UserTableComponent));

/***/ })

}]);