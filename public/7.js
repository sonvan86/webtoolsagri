(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/js/components/auth/login/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/auth/login/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Alert */ "./node_modules/react-bootstrap/esm/Alert.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/auth */ "./resources/js/services/auth.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../actions */ "./resources/js/actions/index.js");


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
    isAuthenticated: state.global.isAuthenticated,
    username: state.global.username,
    usertype: state.global.usertype
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: function login() {
      return dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_13__["default"].GLOBAL_CHANGE_STATUS,
        value: true
      });
    },
    getAuthorizeUser: function getAuthorizeUser() {
      return dispatch({
        type: _actions__WEBPACK_IMPORTED_MODULE_13__["default"].SAGA_GLOBAL_UPDATE_USER,
        value: {}
      });
    }
  };
};

var LoginAuth = function LoginAuth(props) {
  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  var navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useNavigate"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var isAuthenticated = props.isAuthenticated,
      username = props.username,
      usertype = props.usertype,
      login = props.login,
      getAuthorizeUser = props.getAuthorizeUser;

  var loginHandler = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_services_auth__WEBPACK_IMPORTED_MODULE_12__["login"])({
                email: e.email,
                password: e.password
              });

            case 2:
              result = _context.sent;

              if (true === result) {
                login();
                getAuthorizeUser();
                navigate('/home');
              } else {
                setError('Login Fail');
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loginHandler(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    localStorage.setItem('username', username);
  }, [username]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    localStorage.setItem('usertype', usertype);
  }, [usertype]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
    md: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__["default"].Header, null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_9__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: error ? true : false,
    variant: "success",
    role: "alert"
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onSubmit: handleSubmit(loginHandler)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Group, {
    as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__["default"]
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
    defaultValue: "",
    ref: register({
      required: 'Required'
    }),
    autoComplete: "email",
    autoFocus: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "invalid-feedback",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, errors.email && errors.email.message)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Group, {
    as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    forhtml: "password",
    className: "col-md-4 col-form-label text-md-right"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Control, {
    id: "password",
    type: "password",
    className: errors.password && errors.password.message ? 'is-invalid' : '',
    name: "password",
    ref: register({
      required: 'Required'
    }),
    autoComplete: "current-password"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "invalid-feedback",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, errors.password && errors.password.message)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Group, {
    as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
    md: {
      span: 6,
      offset: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-check"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    name: "remember",
    id: "remember"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "form-check-label",
    forhtml: "remember"
  }, "Remember Me")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Group, {
    as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__["default"],
    className: "mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
    md: {
      span: 6,
      offset: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "primary",
    type: "submit"
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "btn btn-link",
    href: "/password/reset"
  }, "Forgot Your Password?")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(LoginAuth));

/***/ })

}]);