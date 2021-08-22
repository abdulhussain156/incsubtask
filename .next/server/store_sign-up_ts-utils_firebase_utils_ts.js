exports.id = "store_sign-up_ts-utils_firebase_utils_ts";
exports.ids = ["store_sign-up_ts-utils_firebase_utils_ts"];
exports.modules = {

/***/ "./store/sign-up.ts":
/*!**************************!*\
  !*** ./store/sign-up.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signUpActions": function() { return /* binding */ signUpActions; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  formFields: {
    email: {
      touched: false,
      valid: false,
      err: ""
    },
    displayName: {
      touched: false,
      valid: false,
      err: ""
    },
    userType: {
      touched: false,
      valid: false,
      err: ""
    },
    pwd: {
      touched: false,
      valid: false,
      err: ""
    },
    confirmPwd: {
      touched: false,
      valid: false,
      err: ""
    }
  },
  isFormValid: false
};
const signUpSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "signUp",
  initialState,
  reducers: {
    setField(state, action) {
      const {
        err,
        name,
        touched,
        valid
      } = action.payload;
      state.formFields[name] = {
        touched,
        valid,
        err
      };

      if (!valid) {
        state.isFormValid = false;
      } else {
        state.isFormValid = !Object.keys(state.formFields).find(key => key !== name && !state.formFields[key].valid);
        if (!Object.keys(state.formFields).find(key => key !== "userType" && key !== name && !state.formFields[key].valid) && !state.formFields["userType"].touched) state.formFields["userType"] = {
          touched: true,
          valid: false,
          err: "Please choose a user type"
        };
      }
    }

  }
});
const signUpActions = signUpSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (signUpSlice.reducer);

/***/ }),

/***/ "./utils/firebase.utils.ts":
/*!*********************************!*\
  !*** ./utils/firebase.utils.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUserProfileDocument": function() { return /* binding */ createUserProfileDocument; },
/* harmony export */   "auth": function() { return /* binding */ auth; },
/* harmony export */   "firestore": function() { return /* binding */ firestore; },
/* harmony export */   "authProvider": function() { return /* binding */ authProvider; }
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const config = {
  apiKey: "AIzaSyBVnQmoRkgbc-sMKxN3hYymuWIwrrBliNg",
  authDomain: "e-clone-697c3.firebaseapp.com",
  projectId: "e-clone-697c3",
  storageBucket: "e-clone-697c3.appspot.com",
  messagingSenderId: "884066976341",
  appId: "1:884066976341:web:0a54c39663d16ee4a78adc",
  measurementId: "G-6G5T9VRV0W"
};
const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return null;
  const userRef = firestore.doc(`/users/${userAuth.uid}`); // get, set, update, delete

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {
      displayName,
      email
    } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set(_objectSpread({
        displayName,
        email,
        createdAt
      }, additionalData));
    } catch (err) {
      console.log("error creating user: ", err.message);
    }
  }

  return userRef;
};
if (!(firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(config);
const auth = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth();
const firestore = firebase_app__WEBPACK_IMPORTED_MODULE_0___default().firestore();
const authProvider = new (firebase_app__WEBPACK_IMPORTED_MODULE_0___default().auth.GoogleAuthProvider)();
/* harmony default export */ __webpack_exports__["default"] = ((firebase_app__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG90aGVzLy4vc3RvcmUvc2lnbi11cC50cyIsIndlYnBhY2s6Ly9jbG90aGVzLy4vdXRpbHMvZmlyZWJhc2UudXRpbHMudHMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiZm9ybUZpZWxkcyIsImVtYWlsIiwidG91Y2hlZCIsInZhbGlkIiwiZXJyIiwiZGlzcGxheU5hbWUiLCJ1c2VyVHlwZSIsInB3ZCIsImNvbmZpcm1Qd2QiLCJpc0Zvcm1WYWxpZCIsInNpZ25VcFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRGaWVsZCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsIk9iamVjdCIsImtleXMiLCJmaW5kIiwia2V5Iiwic2lnblVwQWN0aW9ucyIsImFjdGlvbnMiLCJyZWR1Y2VyIiwiY29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImNyZWF0ZVVzZXJQcm9maWxlRG9jdW1lbnQiLCJ1c2VyQXV0aCIsImFkZGl0aW9uYWxEYXRhIiwidXNlclJlZiIsImZpcmVzdG9yZSIsImRvYyIsInVpZCIsInNuYXBTaG90IiwiZ2V0IiwiZXhpc3RzIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInNldCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiZmlyZWJhc2UiLCJhdXRoIiwiYXV0aFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsWUFLTCxHQUFHO0FBQ0ZDLFlBQVUsRUFBRTtBQUNWQyxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFLEtBQVg7QUFBa0JDLFdBQUssRUFBRSxLQUF6QjtBQUFnQ0MsU0FBRyxFQUFFO0FBQXJDLEtBREc7QUFFVkMsZUFBVyxFQUFFO0FBQUVILGFBQU8sRUFBRSxLQUFYO0FBQWtCQyxXQUFLLEVB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LE1BQUksQ0FBQ0QsUUFBUSxDQUFDRSxNQUFkLEVBQXNCO0FBQ3BCLFVBQU07QUFBRXJDLGlCQUFGO0FBQWVKO0FBQWYsUUFBeUJpQyxRQUEvQjtBQUNBLFVBQU1TLFNBQVMsR0FBRyxJQUFJQyxJQUFKLEVBQWxCOztBQUNBLFFBQUk7QUFDRixZQUFNUixPQUFPLENBQUNTLEdBQVI7QUFBY3hDLG1CQUFkO0FBQTJCSixhQUEzQjtBQUFrQzBDO0FBQWxDLFNBQWdEUixjQUFoRCxFQUFOO0FBQ0QsS0FGRCxDQUVFLE9BQU8vQixHQUFQLEVBQVk7QUFDWjBDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaLEVBQXFDM0MsR0FBRyxDQUFDNEMsT0FBekM7QUFDRDtBQUNGOztBQUNELFNBQU9aLE9BQVA7QUFDRCxDQWxCTTtBQW9CUCxJQUFJLENBQUNhLGlFQUFMLEVBQTJCQSxpRUFBQSxDQUF1QnhCLE1BQXZCO0FBRXBCLE1BQU15QixJQUFJLEdBQUdELHdEQUFBLEVBQWI7QUFDQSxNQUFNWixTQUFTLEdBQUdZLDZEQUFBLEVBQWxCO0FBRUEsTUFBTUUsWUFBWSxHQUFHLElBQUlGLDZFQUFKLEVBQXJCO0FBRVAsK0RBQWVBLHFEQUFmLEUiLCJmaWxlIjoic3RvcmVfc2lnbi11cF90cy11dGlsc19maXJlYmFzZV91dGlsc190cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiB7XG4gIGZvcm1GaWVsZHM6IHtcbiAgICBba2V5OiBzdHJpbmddOiB7IHRvdWNoZWQ6IGJvb2xlYW47IHZhbGlkOiBib29sZWFuOyBlcnI6IHN0cmluZyB9O1xuICB9O1xuICBpc0Zvcm1WYWxpZDogYm9vbGVhbjtcbn0gPSB7XG4gIGZvcm1GaWVsZHM6IHtcbiAgICBlbWFpbDogeyB0b3VjaGVkOiBmYWxzZSwgdmFsaWQ6IGZhbHNlLCBlcnI6IFwiXCIgfSxcbiAgICBkaXNwbGF5TmFtZTogeyB0b3VjaGVkOiBmYWxzZSwgdmFsaWQ6IGZhbHNlLCBlcnI6IFwiXCIgfSxcbiAgICB1c2VyVHlwZTogeyB0b3VjaGVkOiBmYWxzZSwgdmFsaWQ6IGZhbHNlLCBlcnI6IFwiXCIgfSxcbiAgICBwd2Q6IHsgdG91Y2hlZDogZmFsc2UsIHZhbGlkOiBmYWxzZSwgZXJyOiBcIlwiIH0sXG5cbiAgICBjb25maXJtUHdkOiB7IHRvdWNoZWQ6IGZhbHNlLCB2YWxpZDogZmFsc2UsIGVycjogXCJcIiB9LFxuICB9LFxuICBpc0Zvcm1WYWxpZDogZmFsc2UsXG59O1xuXG5jb25zdCBzaWduVXBTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJzaWduVXBcIixcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldEZpZWxkKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgIGNvbnN0IHsgZXJyLCBuYW1lLCB0b3VjaGVkLCB2YWxpZCB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBzdGF0ZS5mb3JtRmllbGRzW25hbWVdID0geyB0b3VjaGVkLCB2YWxpZCwgZXJyIH07XG5cbiAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgc3RhdGUuaXNGb3JtVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLmlzRm9ybVZhbGlkID0gIU9iamVjdC5rZXlzKHN0YXRlLmZvcm1GaWVsZHMpLmZpbmQoXG4gICAgICAgICAga2V5ID0+IGtleSAhPT0gbmFtZSAmJiAhc3RhdGUuZm9ybUZpZWxkc1trZXldLnZhbGlkXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFPYmplY3Qua2V5cyhzdGF0ZS5mb3JtRmllbGRzKS5maW5kKFxuICAgICAgICAgICAga2V5ID0+XG4gICAgICAgICAgICAgIGtleSAhPT0gXCJ1c2VyVHlwZVwiICYmIGtleSAhPT0gbmFtZSAmJiAhc3RhdGUuZm9ybUZpZWxkc1trZXldLnZhbGlkXG4gICAgICAgICAgKSAmJlxuICAgICAgICAgICFzdGF0ZS5mb3JtRmllbGRzW1widXNlclR5cGVcIl0udG91Y2hlZFxuICAgICAgICApXG4gICAgICAgICAgc3RhdGUuZm9ybUZpZWxkc1tcInVzZXJUeXBlXCJdID0ge1xuICAgICAgICAgICAgdG91Y2hlZDogdHJ1ZSxcbiAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgIGVycjogXCJQbGVhc2UgY2hvb3NlIGEgdXNlciB0eXBlXCIsXG4gICAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBzaWduVXBBY3Rpb25zID0gc2lnblVwU2xpY2UuYWN0aW9ucztcblxuZXhwb3J0IGRlZmF1bHQgc2lnblVwU2xpY2UucmVkdWNlcjtcbiIsImltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcblxuY29uc3QgY29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5QlZuUW1vUmtnYmMtc01LeE4zaFl5bXVXSXdyckJsaU5nXCIsXG4gIGF1dGhEb21haW46IFwiZS1jbG9uZS02OTdjMy5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcImUtY2xvbmUtNjk3YzNcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJlLWNsb25lLTY5N2MzLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjg4NDA2Njk3NjM0MVwiLFxuICBhcHBJZDogXCIxOjg4NDA2Njk3NjM0MTp3ZWI6MGE1NGMzOTY2M2QxNmVlNGE3OGFkY1wiLFxuICBtZWFzdXJlbWVudElkOiBcIkctNkc1VDlWUlYwV1wiXG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlclByb2ZpbGVEb2N1bWVudCA9IGFzeW5jIChcbiAgdXNlckF1dGg6IGZpcmViYXNlLlVzZXIgfCBudWxsLFxuICBhZGRpdGlvbmFsRGF0YT86IGFueVxuKTogUHJvbWlzZTxmaXJlYmFzZS5maXJlc3RvcmUuRG9jdW1lbnRSZWZlcmVuY2UgfCBudWxsPiA9PiB7XG4gIGlmICghdXNlckF1dGgpIHJldHVybiBudWxsO1xuICBjb25zdCB1c2VyUmVmID0gZmlyZXN0b3JlLmRvYyhgL3VzZXJzLyR7dXNlckF1dGgudWlkfWApO1xuICAvLyBnZXQsIHNldCwgdXBkYXRlLCBkZWxldGVcbiAgY29uc3Qgc25hcFNob3QgPSBhd2FpdCB1c2VyUmVmLmdldCgpO1xuICBpZiAoIXNuYXBTaG90LmV4aXN0cykge1xuICAgIGNvbnN0IHsgZGlzcGxheU5hbWUsIGVtYWlsIH0gPSB1c2VyQXV0aDtcbiAgICBjb25zdCBjcmVhdGVkQXQgPSBuZXcgRGF0ZSgpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB1c2VyUmVmLnNldCh7IGRpc3BsYXlOYW1lLCBlbWFpbCwgY3JlYXRlZEF0LCAuLi5hZGRpdGlvbmFsRGF0YSB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgY3JlYXRpbmcgdXNlcjogXCIsIGVyci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVzZXJSZWY7XG59O1xuXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XG5cbmV4cG9ydCBjb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xuZXhwb3J0IGNvbnN0IGZpcmVzdG9yZSA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xuXG5leHBvcnQgY29uc3QgYXV0aFByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==