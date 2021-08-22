(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_firebase_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/firebase.utils */ "./utils/firebase.utils.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ "./store/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/login */ "./store/login.ts");


var _jsxFileName = "C:\\Users\\M.S.I\\Desktop\\Incsub Task\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import firebase from "firebase";





function App({
  Component,
  pageProps
}) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)(); //check whether a user signed in or not

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    dispatch(_store_login__WEBPACK_IMPORTED_MODULE_7__.loginActions.setLoggingIn(true));
    let unsubscribeFromAuth = _utils_firebase_utils__WEBPACK_IMPORTED_MODULE_4__.auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await (0,_utils_firebase_utils__WEBPACK_IMPORTED_MODULE_4__.createUserProfileDocument)(userAuth); // console.log(userRef);

        userRef === null || userRef === void 0 ? void 0 : userRef.onSnapshot(snapShot => {
          // console.log(snapShot, snapShot.data());
          const data = snapShot.data();
          dispatch(_store_login__WEBPACK_IMPORTED_MODULE_7__.loginActions.login({
            uid: snapShot.id,
            email: data === null || data === void 0 ? void 0 : data.email,
            displayName: data === null || data === void 0 ? void 0 : data.displayName,
            picture: userAuth.photoURL ? userAuth.photoURL : ""
          }));
        });
      } else dispatch(_store_login__WEBPACK_IMPORTED_MODULE_7__.loginActions.logout());
    });
    return () => unsubscribeFromAuth();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Incsub Task"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/icon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

function IncSubTask(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_5__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (IncSubTask);

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./store/login.ts");
/* harmony import */ var _sign_up__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up */ "./store/sign-up.ts");



const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    login: _login__WEBPACK_IMPORTED_MODULE_1__.default,
    signUp: _sign_up__WEBPACK_IMPORTED_MODULE_2__.default
  }
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./store/login.ts":
/*!************************!*\
  !*** ./store/login.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginActions": function() { return /* binding */ loginActions; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  isLoggedIn: false,
  uid: "",
  email: "",
  displayName: "",
  userPicture: "",
  isLoggingIn: false
};
const loginSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const {
        email,
        displayName,
        picture,
        uid
      } = action.payload;
      state.isLoggedIn = true;
      state.displayName = displayName;
      state.email = email;
      state.userPicture = picture;
      state.uid = uid;
      state.isLoggingIn = false;
    },

    logout(state) {
      state.isLoggedIn = false;
      state.displayName = "";
      state.email = "";
      state.userPicture = "";
      state.uid = "";
      state.isLoggingIn = false;
    },

    setLoggingIn(state, action) {
      state.isLoggingIn = action.payload;
    }

  }
});
const loginActions = loginSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (loginSlice.reducer);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase/firestore");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["store_sign-up_ts-utils_firebase_utils_ts"], function() { return __webpack_exec__("./pages/_app.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG90aGVzLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vY2xvdGhlcy8uL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovL2Nsb3RoZXMvLi9zdG9yZS9sb2dpbi50cyIsIndlYnBhY2s6Ly9jbG90aGVzL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL2Nsb3RoZXMvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly9jbG90aGVzL2V4dGVybmFsIFwiZmlyZWJhc2UvYXV0aFwiIiwid2VicGFjazovL2Nsb3RoZXMvZXh0ZXJuYWwgXCJmaXJlYmFzZS9maXJlc3RvcmVcIiIsIndlYnBhY2s6Ly9jbG90aGVzL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vY2xvdGhlcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2xvdGhlcy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vY2xvdGhlcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJsb2dpbkFjdGlvbnMiLCJ1bnN1YnNjcmliZUZyb21BdXRoIiwiYXV0aCIsInVzZXJBdXRoIiwidXNlclJlZiIsImNyZWF0ZVVzZXJQcm9maWxlRG9jdW1lbnQiLCJvblNuYXBzaG90Iiwic25hcFNob3QiLCJkYXRhIiwidWlkIiwiaWQiLCJlbWFpbCIsImRpc3BsYXlOYW1lIiwicGljdHVyZSIsInBob3RvVVJMIiwiSW5jU3ViVGFzayIsInByb3BzIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJsb2dpbiIsImxvZ2luUmVkdWNlciIsInNpZ25VcCIsInNpZ25VcFJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJpc0xvZ2dlZEluIiwidXNlclBpY3R1cmUiLCJpc0xvZ2dpbmdJbiIsImxvZ2luU2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImxvZ291dCIsInNldExvZ2dpbmdJbiIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsR0FBVCxDQUFhO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFiLEVBQWlEO0FBQy9DLFFBQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUIsQ0FEK0MsQ0FHL0M7O0FBQ0FDLGtEQUFTLENBQUMsTUFBTTtBQUNkRixZQUFRLENBQUNHLG1FQUFBLENBQTBCLElBQTFCLENBQUQsQ0FBUjtBQUNBLFFBQUlDLG1CQUFtQixHQUFHQywwRUFBQSxDQUF3QixNQUFNQyxRQUFOLElBQWtCO0FBQ2xFLFVBQUlBLFFBQUosRUFBYztBQUNaLGNBQU1DLE9BQU8sR0FBRyxNQUFNQyxnRkFBeUIsQ0FBQ0YsUUFBRCxDQUEvQyxDQURZLENBRVo7O0FBQ0FDLGVBQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsWUFBQUEsT0FBTyxDQUFFRSxVQUFULENBQW9CQyxRQUFRLElBQUk7QUFDOUI7QUFDQSxnQkFBTUMsSUFBSSxHQUFHRCxRQUFRLENBQUNDLElBQVQsRUFBYjtBQUNBWCxrQkFBUSxDQUNORyw0REFBQSxDQUFtQjtBQUNqQlMsZUFBRyxFQUFFRixRQUFRLENBQUNHLEVBREc7QUFFakJDLGlCQUFLLEVBQUVILElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFRyxLQUZJO0FBR2pCQyx1QkFBVyxFQUFFSixJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRUksV0FIRjtBQUlqQkMsbUJBQU8sRUFBRVYsUUFBUSxDQUFDVyxRQUFULEdBQW9CWCxRQUFRLENBQUNXLFFBQTdCLEdBQXdDO0FBSmhDLFdB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Q0FBQ1MsT0FBaEM7QUFFUCwrREFBZVQsVUFBVSxDQUFDVCxPQUExQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0EsOEM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYXV0aCwgY3JlYXRlVXNlclByb2ZpbGVEb2N1bWVudCB9IGZyb20gXCIuLi91dGlscy9maXJlYmFzZS51dGlsc1wiO1xuXG4vLyBpbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlXCI7XG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3N0b3JlXCI7XG5pbXBvcnQgeyBQcm92aWRlciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGxvZ2luQWN0aW9ucyB9IGZyb20gXCIuLi9zdG9yZS9sb2dpblwiO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgLy9jaGVjayB3aGV0aGVyIGEgdXNlciBzaWduZWQgaW4gb3Igbm90XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2gobG9naW5BY3Rpb25zLnNldExvZ2dpbmdJbih0cnVlKSk7XG4gICAgbGV0IHVuc3Vic2NyaWJlRnJvbUF1dGggPSBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZChhc3luYyB1c2VyQXV0aCA9PiB7XG4gICAgICBpZiAodXNlckF1dGgpIHtcbiAgICAgICAgY29uc3QgdXNlclJlZiA9IGF3YWl0IGNyZWF0ZVVzZXJQcm9maWxlRG9jdW1lbnQodXNlckF1dGgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VyUmVmKTtcbiAgICAgICAgdXNlclJlZj8ub25TbmFwc2hvdChzbmFwU2hvdCA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coc25hcFNob3QsIHNuYXBTaG90LmRhdGEoKSk7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHNuYXBTaG90LmRhdGEoKTtcbiAgICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICAgIGxvZ2luQWN0aW9ucy5sb2dpbih7XG4gICAgICAgICAgICAgIHVpZDogc25hcFNob3QuaWQsXG4gICAgICAgICAgICAgIGVtYWlsOiBkYXRhPy5lbWFpbCxcbiAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGRhdGE/LmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICBwaWN0dXJlOiB1c2VyQXV0aC5waG90b1VSTCA/IHVzZXJBdXRoLnBob3RvVVJMIDogXCJcIixcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgZGlzcGF0Y2gobG9naW5BY3Rpb25zLmxvZ291dCgpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZUZyb21BdXRoKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkluY3N1YiBUYXNrPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaWNvbi5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSW5jU3ViVGFzayhwcm9wczogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxBcHAgey4uLnByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluY1N1YlRhc2s7XG4iLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmltcG9ydCBsb2dpblJlZHVjZXIgZnJvbSBcIi4vbG9naW5cIjtcbmltcG9ydCBzaWduVXBSZWR1Y2VyIGZyb20gXCIuL3NpZ24tdXBcIjtcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7XG4gICAgbG9naW46IGxvZ2luUmVkdWNlcixcbiAgICBzaWduVXA6IHNpZ25VcFJlZHVjZXIsXG4gIH0sXG59KTtcblxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xuXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaDtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIHVpZDogXCJcIixcbiAgZW1haWw6IFwiXCIsXG4gIGRpc3BsYXlOYW1lOiBcIlwiLFxuICB1c2VyUGljdHVyZTogXCJcIixcbiAgaXNMb2dnaW5nSW46IGZhbHNlLFxufTtcblxuY29uc3QgbG9naW5TbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJhdXRoXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBsb2dpbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBjb25zdCB7IGVtYWlsLCBkaXNwbGF5TmFtZSwgcGljdHVyZSwgdWlkIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHN0YXRlLmlzTG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgc3RhdGUuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICAgIHN0YXRlLmVtYWlsID0gZW1haWw7XG4gICAgICBzdGF0ZS51c2VyUGljdHVyZSA9IHBpY3R1cmU7XG4gICAgICBzdGF0ZS51aWQgPSB1aWQ7XG4gICAgICBzdGF0ZS5pc0xvZ2dpbmdJbiA9IGZhbHNlO1xuICAgIH0sXG4gICAgbG9nb3V0KHN0YXRlKSB7XG4gICAgICBzdGF0ZS5pc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgICBzdGF0ZS5kaXNwbGF5TmFtZSA9IFwiXCI7XG4gICAgICBzdGF0ZS5lbWFpbCA9IFwiXCI7XG4gICAgICBzdGF0ZS51c2VyUGljdHVyZSA9IFwiXCI7XG4gICAgICBzdGF0ZS51aWQgPSBcIlwiO1xuICAgICAgc3RhdGUuaXNMb2dnaW5nSW4gPSBmYWxzZTtcbiAgICB9LFxuICAgIHNldExvZ2dpbmdJbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICBzdGF0ZS5pc0xvZ2dpbmdJbiA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9ucyA9IGxvZ2luU2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgbG9naW5TbGljZS5yZWR1Y2VyO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9maXJlc3RvcmVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=