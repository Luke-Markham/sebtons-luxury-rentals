webpackHotUpdate("main",{

/***/ "./src/components/mobile-nav/mobile-nav.component.jsx":
/*!************************************************************!*\
  !*** ./src/components/mobile-nav/mobile-nav.component.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mobile_nav_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-nav.styles.scss */ "./src/components/mobile-nav/mobile-nav.styles.scss");
/* harmony import */ var _mobile_nav_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mobile_nav_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var _redux_nav_nav_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/nav/nav.actions */ "./src/redux/nav/nav.actions.js");
var _jsxFileName = "/Users/lukesHomeFolder/Desktop/sebtons/src/components/mobile-nav/mobile-nav.component.jsx";







const MobileNav = ({
  toggleMobileNav,
  displayMobileNav
}) => {
  const slideDown = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__["useTransition"])(displayMobileNav, null, {
    from: {
      transform: "translateX(+100%)"
    },
    enter: {
      transform: "translateX(0%)"
    },
    leave: {
      transform: "translateX(+100%)"
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "mobile-nav-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, slideDown.map( // props needed for reactSpring library
  ({
    item,
    key,
    props
  }) => item && // animated.div className in order to keep css grid context
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_4__["animated"].div, {
    className: "mobile-nav-container",
    key: key,
    style: props,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "mobile-nav-ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/home",
    className: "mobile-nav-item",
    onClick: toggleMobileNav,
    activeClassName: "is-current",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/properties",
    className: "mobile-nav-item",
    onClick: toggleMobileNav,
    activeClassName: "is-current",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Properties"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/services",
    className: "mobile-nav-item",
    onClick: toggleMobileNav,
    activeClassName: "is-current",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Services"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/rentalpolicy",
    className: "mobile-nav-item",
    onClick: toggleMobileNav,
    activeClassName: "is-current",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Rental Policy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/aboutus",
    className: "mobile-nav-item",
    onClick: toggleMobileNav,
    activeClassName: "is-current",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "About Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    exact: true,
    to: "/contact",
    className: "mobile-nav-item",
    onClick: toggleMobileNav,
    activeClassName: "is-current",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Contact")))));
};

const mapDispatchToProps = dispatch => ({
  toggleMobileNav: () => dispatch(Object(_redux_nav_nav_actions__WEBPACK_IMPORTED_MODULE_5__["displayMobileNav"])())
});

const mapStateToProps = state => ({
  displayMobileNav: state.nav.displayMobileNav
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(MobileNav));

/***/ })

})
//# sourceMappingURL=main.e5e26a9b142566d8f373.hot-update.js.map