(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/*! exports provided: login, checkToken, readStorage, writeStorage, clearStorage, addTodoListener, removeTodoListener, addTodo, editTodo, removeTodo, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkToken", function() { return checkToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readStorage", function() { return readStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeStorage", function() { return writeStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStorage", function() { return clearStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTodoListener", function() { return addTodoListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTodoListener", function() { return removeTodoListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTodo", function() { return addTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editTodo", function() { return editTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTodo", function() { return removeTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ4", function() { return ɵ4; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* Helpers */
var _this = undefined;

var delay = function (ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { return resolve(); }, ms);
    });
};
var ɵ0 = delay;
var success = function (out, ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { return resolve(out); }, ms);
    });
};
var ɵ1 = success;
var failure = function (ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { return reject(); }, ms);
    });
};
var ɵ2 = failure;
var validPassword = 'password';
var getValidToken = function () {
    var token = window.validToken || 'w€lc0Me';
    window.validToken = token;
    return token;
};
var ɵ3 = getValidToken;
var login = function (username, password) {
    if (password !== validPassword) {
        return failure(500);
    }
    return success({ username: username, token: getValidToken() }, 500);
};
var checkToken = function (token) {
    if (token !== getValidToken()) {
        return success(false, 500);
    }
    return success(true, 500);
};
/* Storage API */
var readStorage = function (space, keyName) {
    return localStorage.getItem(space + "::" + keyName) || '';
};
var writeStorage = function (space, keyName, value) {
    return localStorage.setItem(space + "::" + keyName, value);
};
var clearStorage = function (space, keyName) {
    return localStorage.removeItem(space + "::" + keyName);
};
var readTodos = function () {
    var raw = readStorage('Todos', 'data');
    if (!raw) {
        return [];
    }
    return JSON.parse(raw);
};
var ɵ4 = readTodos;
var addTodoListener = function (token, fn, connectionLost) {
    var handle = { _i: {} };
    var changeDetected = function (newData) {
        if (handle._i._data === undefined) {
            return true;
        }
        if (handle._i._data.length !== newData.length) {
            return true;
        }
        var sameTodo = function (t1, t2) {
            return t1.guid === t2.guid && t1.task === t2.task && t1.done === t2.done;
        };
        if (handle._i._data.some(function (p, idx) { return !sameTodo(p, newData[idx]); })) {
            return true;
        }
        return false;
    };
    var detectChanges = function () {
        if (token !== getValidToken()) {
            handle._i._handleId = undefined;
            connectionLost();
            return;
        }
        var newData = readTodos();
        if (changeDetected(newData)) {
            handle._i._data = newData;
            fn(newData);
        }
        handle._i._handleId = setTimeout(function () { return detectChanges(); }, 500);
    };
    handle._i._handleId = setTimeout(function () { return detectChanges(); }, 500);
    return handle;
};
var removeTodoListener = function (handle) {
    if (handle._i._handleId) {
        clearTimeout(handle._i._handleId);
    }
};
var addTodo = function (token, todo) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var data;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, delay(500)];
            case 1:
                _a.sent();
                if (token !== getValidToken()) {
                    return [2 /*return*/, false];
                }
                data = readTodos();
                if (data.some(function (t) { return t.guid === todo.guid; })) {
                    return [2 /*return*/, false];
                }
                writeStorage('Todos', 'data', JSON.stringify(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](data, [todo])));
                return [2 /*return*/, true];
        }
    });
}); };
var editTodo = function (token, todo) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var data;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, delay(500)];
            case 1:
                _a.sent();
                if (token !== getValidToken()) {
                    return [2 /*return*/, false];
                }
                data = readTodos();
                if (!data.some(function (t) { return t.guid === todo.guid; })) {
                    return [2 /*return*/, false];
                }
                writeStorage('Todos', 'data', JSON.stringify(data.map(function (t) { return (t.guid === todo.guid ? todo : t); })));
                return [2 /*return*/, true];
        }
    });
}); };
var removeTodo = function (token, todo) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var data;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, delay(500)];
            case 1:
                _a.sent();
                if (token !== getValidToken()) {
                    return [2 /*return*/, false];
                }
                data = readTodos();
                if (!data.some(function (t) { return t.guid === todo.guid; })) {
                    return [2 /*return*/, false];
                }
                writeStorage('Todos', 'data', JSON.stringify(data.filter(function (t) { return t.guid !== todo.guid; })));
                return [2 /*return*/, true];
        }
    });
}); };



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, ɵ0, ɵ1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/login/login/login.component.ts");



var ɵ0 = function () {
    return __webpack_require__.e(/*! import() | authenticated-authenticated-module-ngfactory */ "authenticated-authenticated-module-ngfactory").then(__webpack_require__.bind(null, /*! ./authenticated/authenticated.module.ngfactory */ "./src/app/authenticated/authenticated.module.ngfactory.js")).then(function (mod) { return mod.AuthenticatedModuleNgFactory; });
}, ɵ1 = { preload: true };
var routes = [
    {
        path: 'login',
        component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: '',
        loadChildren: ɵ0,
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
        data: ɵ1
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());




/***/ }),

/***/ "./src/app/app.component.css.shim.ngstyle.js":
/*!***************************************************!*\
  !*** ./src/app/app.component.css.shim.ngstyle.js ***!
  \***************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.css.shim.ngstyle */ "./src/app/app.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_AppComponent = [_app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_state_authentication_authentication_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/state/authentication/authentication.actions */ "./src/state/authentication/authentication.actions.ts");


var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.store.dispatch(src_state_authentication_authentication_actions__WEBPACK_IMPORTED_MODULE_1__["TryLoginByToken"]);
    };
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _login_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login/login.component.ngfactory */ "./src/app/login/login/login.component.ngfactory.js");
/* harmony import */ var _authenticated_authenticated_authenticated_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authenticated/authenticated/authenticated.component.ngfactory */ "./src/app/authenticated/authenticated/authenticated.component.ngfactory.js");
/* harmony import */ var _authenticated_todolist_todolist_todolist_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authenticated/todolist/todolist/todolist.component.ngfactory */ "./src/app/authenticated/todolist/todolist/todolist.component.ngfactory.js");
/* harmony import */ var _authenticated_learn_more_learn_more_learn_more_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authenticated/learn-more/learn-more/learn-more.component.ngfactory */ "./src/app/authenticated/learn-more/learn-more/learn-more.component.ngfactory.js");
/* harmony import */ var _authenticated_not_found_not_found_not_found_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authenticated/not-found/not-found/not-found.component.ngfactory */ "./src/app/authenticated/not-found/not-found/not-found.component.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../node_modules/@angular/material/snack-bar/typings/index.ngfactory */ "./node_modules/@angular/material/snack-bar/typings/index.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _ngxs_store_internals__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngxs/store/internals */ "./node_modules/@ngxs/store/fesm5/ngxs-store-internals.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _state_authentication_authentication_state__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../state/authentication/authentication.state */ "./src/state/authentication/authentication.state.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _state_todolist_todolist_state__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../state/todolist/todolist.state */ "./src/state/todolist/todolist.state.ts");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "./node_modules/@ngxs/devtools-plugin/fesm5/ngxs-devtools-plugin.js");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _authenticated_authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./authenticated/authenticated/authenticated.component */ "./src/app/authenticated/authenticated/authenticated.component.ts");
/* harmony import */ var _authenticated_todolist_todolist_todolist_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./authenticated/todolist/todolist/todolist.component */ "./src/app/authenticated/todolist/todolist/todolist.component.ts");
/* harmony import */ var _authenticated_learn_more_learn_more_learn_more_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./authenticated/learn-more/learn-more/learn-more.component */ "./src/app/authenticated/learn-more/learn-more/learn-more.component.ts");
/* harmony import */ var _authenticated_not_found_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./authenticated/not-found/not-found/not-found.component */ "./src/app/authenticated/not-found/not-found/not-found.component.ts");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _authenticated_authenticated_routing_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./authenticated/authenticated-routing.module */ "./src/app/authenticated/authenticated-routing.module.ts");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _authenticated_learn_more_learn_more_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./authenticated/learn-more/learn-more.module */ "./src/app/authenticated/learn-more/learn-more.module.ts");
/* harmony import */ var _authenticated_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./authenticated/not-found/not-found.module */ "./src/app/authenticated/not-found/not-found.module.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _authenticated_todolist_todolist_module__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./authenticated/todolist/todolist.module */ "./src/app/authenticated/todolist/todolist.module.ts");
/* harmony import */ var _authenticated_authenticated_module__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./authenticated/authenticated.module */ "./src/app/authenticated/authenticated.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






















































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _login_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["LoginComponentNgFactory"], _authenticated_authenticated_authenticated_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["AuthenticatedComponentNgFactory"], _authenticated_todolist_todolist_todolist_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["TodolistComponentNgFactory"], _authenticated_learn_more_learn_more_learn_more_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["LearnMoreComponentNgFactory"], _authenticated_not_found_not_found_not_found_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponentNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["SimpleSnackBarNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_13__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_15__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p1_0) { return [p0_0, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["NgxsModule"].appBootstrapListenerFactory(p1_0)]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_INITIALIZER"], _ngxs_store_internals__WEBPACK_IMPORTED_MODULE_17__["NgxsBootstrapper"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_18__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_19__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_19__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["Actions"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["Actions"], [_ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵc"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵt"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _state_authentication_authentication_state__WEBPACK_IMPORTED_MODULE_23__["AuthenticationState"], _state_authentication_authentication_state__WEBPACK_IMPORTED_MODULE_23__["AuthenticationState"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBar"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _state_todolist_todolist_state__WEBPACK_IMPORTED_MODULE_25__["TodolistState"], _state_todolist_todolist_state__WEBPACK_IMPORTED_MODULE_25__["TodolistState"], [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBar"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["NgxsModule"].ROOT_OPTIONS, {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵk"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["NgxsModule"].ngxsConfigFactory, [_ngxs_store__WEBPACK_IMPORTED_MODULE_16__["NgxsModule"].ROOT_OPTIONS]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵc"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵo"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵo"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["StateStream"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["StateStream"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_26__["ɵb"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_26__["NGXS_DEVTOOLS_OPTIONS"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_26__["ɵa"], [_ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_26__["ɵb"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["NGXS_PLUGINS"], function (p0_0, p0_1) { return [new _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_26__["NgxsReduxDevtoolsPlugin"](p0_0, p0_1)]; }, [_ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_26__["NGXS_DEVTOOLS_OPTIONS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵs"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵs"], [[3, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵs"]], [2, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["NGXS_PLUGINS"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵl"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵy"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵt"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵt"], [_ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵl"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵp"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵp"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵc"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵo"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵs"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["StateStream"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵt"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵi"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["NgxsModule"].isAngularInTestMode, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵh"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["NgxsModule"].isAngularDevMode, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵv"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵv"], [_ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵi"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵh"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵu"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵu"], [_ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵv"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵk"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵr"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵr"], [_ngxs_store__WEBPACK_IMPORTED_MODULE_16__["StateStream"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵp"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵk"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵq"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵq"], [_ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵr"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngxs_store_internals__WEBPACK_IMPORTED_MODULE_17__["INITIAL_STATE_TOKEN"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["NgxsModule"].getInitialState, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵn"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵn"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵk"], [3, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵn"]], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵc"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵo"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵq"], [2, _ngxs_store_internals__WEBPACK_IMPORTED_MODULE_17__["INITIAL_STATE_TOKEN"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["Store"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["Store"], [_ngxs_store__WEBPACK_IMPORTED_MODULE_16__["StateStream"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵr"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵk"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵt"], [2, _ngxs_store_internals__WEBPACK_IMPORTED_MODULE_17__["INITIAL_STATE_TOKEN"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵa"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵa"], [_ngxs_store__WEBPACK_IMPORTED_MODULE_16__["Store"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵk"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵf"], [_state_authentication_authentication_state__WEBPACK_IMPORTED_MODULE_23__["AuthenticationState"], _state_todolist_todolist_state__WEBPACK_IMPORTED_MODULE_25__["TodolistState"]], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngxs_store_internals__WEBPACK_IMPORTED_MODULE_17__["NgxsBootstrapper"], _ngxs_store_internals__WEBPACK_IMPORTED_MODULE_17__["NgxsBootstrapper"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵw"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵw"], [_ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵr"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵq"], _ngxs_store_internals__WEBPACK_IMPORTED_MODULE_17__["NgxsBootstrapper"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵm"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵm"], [_ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵn"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵr"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["Store"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵa"], [2, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵf"]], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵk"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["ɵw"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["NgxsModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_16__["NgxsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_26__["NgxsReduxDevtoolsPluginModule"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_26__["NgxsReduxDevtoolsPluginModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"], { useHash: true }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], function () { return [[{ path: "login", component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"] }, { path: "", loadChildren: _app_routing_module__WEBPACK_IMPORTED_MODULE_28__["ɵ0"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardService"]], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_28__["ɵ1"] }], [{ path: "", component: _authenticated_authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_30__["AuthenticatedComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardService"]], children: [{ path: "", canActivateChild: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardService"]], children: [{ path: "", component: _authenticated_todolist_todolist_todolist_component__WEBPACK_IMPORTED_MODULE_31__["TodolistComponent"] }, { path: "learn-more", component: _authenticated_learn_more_learn_more_learn_more_component__WEBPACK_IMPORTED_MODULE_32__["LearnMoreComponent"] }, { path: "**", component: _authenticated_not_found_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_33__["NotFoundComponent"] }] }] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_28__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_28__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_34__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_34__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_35__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_35__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_card__WEBPACK_IMPORTED_MODULE_36__["MatCardModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_36__["MatCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_37__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_37__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_19__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_19__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_38__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_38__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_39__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_39__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_40__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_40__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _login_login_module__WEBPACK_IMPORTED_MODULE_41__["LoginModule"], _login_login_module__WEBPACK_IMPORTED_MODULE_41__["LoginModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _authenticated_authenticated_routing_module__WEBPACK_IMPORTED_MODULE_42__["AuthenticatedRoutingModule"], _authenticated_authenticated_routing_module__WEBPACK_IMPORTED_MODULE_42__["AuthenticatedRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_43__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_43__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_badge__WEBPACK_IMPORTED_MODULE_44__["MatBadgeModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_44__["MatBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_46__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_46__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_47__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_47__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _authenticated_learn_more_learn_more_module__WEBPACK_IMPORTED_MODULE_48__["LearnMoreModule"], _authenticated_learn_more_learn_more_module__WEBPACK_IMPORTED_MODULE_48__["LearnMoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _authenticated_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_49__["NotFoundModule"], _authenticated_not_found_not_found_module__WEBPACK_IMPORTED_MODULE_49__["NotFoundModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_50__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_50__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_50__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_50__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_51__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_51__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _authenticated_todolist_todolist_module__WEBPACK_IMPORTED_MODULE_52__["TodolistModule"], _authenticated_todolist_todolist_module__WEBPACK_IMPORTED_MODULE_52__["TodolistModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _authenticated_authenticated_module__WEBPACK_IMPORTED_MODULE_53__["AuthenticatedModule"], _authenticated_authenticated_module__WEBPACK_IMPORTED_MODULE_53__["AuthenticatedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var src_state_authentication_authentication_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/state/authentication/authentication.state */ "./src/state/authentication/authentication.state.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (isAuth) {
            if (!isAuth) {
                _this.router.navigate(['/login'], {
                    queryParams: {
                        redirect: state.url
                    }
                });
                return false;
            }
            return true;
        }));
    };
    AuthGuardService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuardService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ factory: function AuthGuardService_Factory() { return new AuthGuardService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); }, token: AuthGuardService, providedIn: "root" });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(src_state_authentication_authentication_state__WEBPACK_IMPORTED_MODULE_3__["AuthenticationState"].isAuthenticated)
    ], AuthGuardService.prototype, "isAuthenticated$", void 0);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/authenticated/authenticated-header/authenticated-header.component.css.shim.ngstyle.js":
/*!*******************************************************************************************************!*\
  !*** ./src/app/authenticated/authenticated-header/authenticated-header.component.css.shim.ngstyle.js ***!
  \*******************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  margin: 0 14px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlZC9hdXRoZW50aWNhdGVkLWhlYWRlci9hdXRoZW50aWNhdGVkLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvYXV0aGVudGljYXRlZC1oZWFkZXIvYXV0aGVudGljYXRlZC1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwIDE0cHg7XHJcbn1cclxuIl19 */"];



/***/ }),

/***/ "./src/app/authenticated/authenticated-header/authenticated-header.component.ngfactory.js":
/*!************************************************************************************************!*\
  !*** ./src/app/authenticated/authenticated-header/authenticated-header.component.ngfactory.js ***!
  \************************************************************************************************/
/*! exports provided: RenderType_AuthenticatedHeaderComponent, View_AuthenticatedHeaderComponent_0, View_AuthenticatedHeaderComponent_Host_0, AuthenticatedHeaderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AuthenticatedHeaderComponent", function() { return RenderType_AuthenticatedHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AuthenticatedHeaderComponent_0", function() { return View_AuthenticatedHeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AuthenticatedHeaderComponent_Host_0", function() { return View_AuthenticatedHeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedHeaderComponentNgFactory", function() { return AuthenticatedHeaderComponentNgFactory; });
/* harmony import */ var _authenticated_header_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authenticated-header.component.css.shim.ngstyle */ "./src/app/authenticated/authenticated-header/authenticated-header.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/toolbar/typings/index.ngfactory */ "./node_modules/@angular/material/toolbar/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _authenticated_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./authenticated-header.component */ "./src/app/authenticated/authenticated-header/authenticated-header.component.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _todolist_todolist_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../todolist/todolist.service */ "./src/app/authenticated/todolist/todolist.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
















var styles_AuthenticatedHeaderComponent = [_authenticated_header_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AuthenticatedHeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AuthenticatedHeaderComponent, data: {} });

function View_AuthenticatedHeaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "mat-toolbar", [["class", "mat-toolbar"], ["color", "primary"], ["role", "header"]], [[2, "mat-toolbar-multiple-rows", null], [2, "mat-toolbar-single-row", null]], null, null, _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatToolbar_0"], _node_modules_angular_material_toolbar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatToolbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4243456, null, 1, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]], { color: [0, "color"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _toolbarRows: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 4, "button", [["aria-label", "Toggle menu"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggleMenu.emit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["Welcome ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 0, "span", [["class", "spacer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 6, "button", [["aria-label", "To-dos"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 4, "mat-icon", [["class", "mat-badge mat-icon notranslate"], ["matBadgeColor", "warn"], ["role", "img"]], [[2, "mat-badge-overlap", null], [2, "mat-badge-above", null], [2, "mat-badge-below", null], [2, "mat-badge-before", null], [2, "mat-badge-after", null], [2, "mat-badge-small", null], [2, "mat-badge-medium", null], [2, "mat-badge-large", null], [2, "mat-badge-hidden", null], [2, "mat-badge-disabled", null], [2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, null, 0, _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadge"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["AriaDescriber"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"], content: [1, "content"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["shopping_cart"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, 0, 4, "button", [["aria-label", "Logout"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.logout() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["power_settings_new"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "primary"; _ck(_v, 1, 0, currVal_2); _ck(_v, 6, 0); var currVal_22 = "warn"; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).transform(_co.numTodos$)); _ck(_v, 15, 0, currVal_22, currVal_23); _ck(_v, 17, 0); _ck(_v, 22, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length > 0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._toolbarRows.length === 0); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).disabled || null); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._animationMode === "NoopAnimations"); _ck(_v, 3, 0, currVal_3, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).inline; var currVal_6 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).color !== "warn")); _ck(_v, 5, 0, currVal_5, currVal_6); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).transform(_co.username$)); _ck(_v, 9, 0, currVal_7); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).disabled || null); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._animationMode === "NoopAnimations"); _ck(_v, 12, 0, currVal_8, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).overlap; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).isAbove(); var currVal_12 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).isAbove(); var currVal_13 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).isAfter(); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).isAfter(); var currVal_15 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).size === "small"); var currVal_16 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).size === "medium"); var currVal_17 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).size === "large"); var currVal_18 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).hidden || !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._hasContent); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).disabled; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).inline; var currVal_21 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).color !== "warn")); _ck(_v, 14, 1, [currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21]); var currVal_24 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).disabled || null); var currVal_25 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20)._animationMode === "NoopAnimations"); _ck(_v, 19, 0, currVal_24, currVal_25); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).inline; var currVal_27 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).color !== "warn")); _ck(_v, 21, 0, currVal_26, currVal_27); }); }
function View_AuthenticatedHeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-authenticated-header", [], null, null, null, View_AuthenticatedHeaderComponent_0, RenderType_AuthenticatedHeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _authenticated_header_component__WEBPACK_IMPORTED_MODULE_13__["AuthenticatedHeaderComponent"], [_ngxs_store__WEBPACK_IMPORTED_MODULE_14__["Store"], _todolist_todolist_service__WEBPACK_IMPORTED_MODULE_15__["TodolistService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AuthenticatedHeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-authenticated-header", _authenticated_header_component__WEBPACK_IMPORTED_MODULE_13__["AuthenticatedHeaderComponent"], View_AuthenticatedHeaderComponent_Host_0, { expandedMenu: "expandedMenu" }, { toggleMenu: "toggleMenu" }, []);



/***/ }),

/***/ "./src/app/authenticated/authenticated-header/authenticated-header.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/authenticated/authenticated-header/authenticated-header.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AuthenticatedHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedHeaderComponent", function() { return AuthenticatedHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_state_authentication_authentication_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/state/authentication/authentication.state */ "./src/state/authentication/authentication.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var src_state_authentication_authentication_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/state/authentication/authentication.actions */ "./src/state/authentication/authentication.actions.ts");
/* harmony import */ var src_state_todolist_todolist_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/state/todolist/todolist.state */ "./src/state/todolist/todolist.state.ts");






var AuthenticatedHeaderComponent = /** @class */ (function () {
    function AuthenticatedHeaderComponent(store, todolistService) {
        this.store = store;
        this.todolistService = todolistService;
        this.toggleMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AuthenticatedHeaderComponent.prototype.ngOnInit = function () {
        this.todolistService.addRequester(this);
    };
    AuthenticatedHeaderComponent.prototype.ngOnDestroy = function () {
        this.todolistService.removeRequester(this);
    };
    AuthenticatedHeaderComponent.prototype.logout = function () {
        this.store.dispatch(src_state_authentication_authentication_actions__WEBPACK_IMPORTED_MODULE_4__["TryLogout"]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(src_state_authentication_authentication_state__WEBPACK_IMPORTED_MODULE_2__["AuthenticationState"].username)
    ], AuthenticatedHeaderComponent.prototype, "username$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(src_state_todolist_todolist_state__WEBPACK_IMPORTED_MODULE_5__["TodolistState"].numTodos)
    ], AuthenticatedHeaderComponent.prototype, "numTodos$", void 0);
    return AuthenticatedHeaderComponent;
}());



/***/ }),

/***/ "./src/app/authenticated/authenticated-menu/authenticated-menu.component.css.shim.ngstyle.js":
/*!***************************************************************************************************!*\
  !*** ./src/app/authenticated/authenticated-menu/authenticated-menu.component.css.shim.ngstyle.js ***!
  \***************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".expanded-menu[_ngcontent-%COMP%] {\r\n  width: 180px;\r\n}\r\nmat-icon[_ngcontent-%COMP%] {\r\n  margin-right: 14px;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  margin: 7px 14px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlZC9hdXRoZW50aWNhdGVkLW1lbnUvYXV0aGVudGljYXRlZC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRlZC9hdXRoZW50aWNhdGVkLW1lbnUvYXV0aGVudGljYXRlZC1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwYW5kZWQtbWVudSB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG59XHJcbm1hdC1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbn1cclxuYnV0dG9uIHtcclxuICBtYXJnaW46IDdweCAxNHB4O1xyXG59XHJcbiJdfQ== */"];



/***/ }),

/***/ "./src/app/authenticated/authenticated-menu/authenticated-menu.component.ngfactory.js":
/*!********************************************************************************************!*\
  !*** ./src/app/authenticated/authenticated-menu/authenticated-menu.component.ngfactory.js ***!
  \********************************************************************************************/
/*! exports provided: RenderType_AuthenticatedMenuComponent, View_AuthenticatedMenuComponent_0, View_AuthenticatedMenuComponent_Host_0, AuthenticatedMenuComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AuthenticatedMenuComponent", function() { return RenderType_AuthenticatedMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AuthenticatedMenuComponent_0", function() { return View_AuthenticatedMenuComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AuthenticatedMenuComponent_Host_0", function() { return View_AuthenticatedMenuComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedMenuComponentNgFactory", function() { return AuthenticatedMenuComponentNgFactory; });
/* harmony import */ var _authenticated_menu_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authenticated-menu.component.css.shim.ngstyle */ "./src/app/authenticated/authenticated-menu/authenticated-menu.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _authenticated_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authenticated-menu.component */ "./src/app/authenticated/authenticated-menu/authenticated-menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_AuthenticatedMenuComponent = [_authenticated_menu_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AuthenticatedMenuComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AuthenticatedMenuComponent, data: {} });

function View_AuthenticatedMenuComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "expanded-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "button", [["aria-label", "Todos"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goTo("/") !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["dashboard"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Todos "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 5, "button", [["aria-label", "Learn more"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goTo("/learn-more") !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["help"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Learn more "]))], function (_ck, _v) { _ck(_v, 5, 0); _ck(_v, 12, 0); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._animationMode === "NoopAnimations"); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).inline; var currVal_3 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).color !== "warn")); _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).disabled || null); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._animationMode === "NoopAnimations"); _ck(_v, 9, 0, currVal_4, currVal_5); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).inline; var currVal_7 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).color !== "warn")); _ck(_v, 11, 0, currVal_6, currVal_7); }); }
function View_AuthenticatedMenuComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-authenticated-menu", [], null, null, null, View_AuthenticatedMenuComponent_0, RenderType_AuthenticatedMenuComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _authenticated_menu_component__WEBPACK_IMPORTED_MODULE_8__["AuthenticatedMenuComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]], null, null)], null, null); }
var AuthenticatedMenuComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-authenticated-menu", _authenticated_menu_component__WEBPACK_IMPORTED_MODULE_8__["AuthenticatedMenuComponent"], View_AuthenticatedMenuComponent_Host_0, {}, { toggleMenu: "toggleMenu" }, []);



/***/ }),

/***/ "./src/app/authenticated/authenticated-menu/authenticated-menu.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/authenticated/authenticated-menu/authenticated-menu.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AuthenticatedMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedMenuComponent", function() { return AuthenticatedMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var AuthenticatedMenuComponent = /** @class */ (function () {
    function AuthenticatedMenuComponent(router) {
        this.router = router;
        this.toggleMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AuthenticatedMenuComponent.prototype.goTo = function (pageLink) {
        this.toggleMenu.emit();
        this.router.navigate([pageLink]);
    };
    return AuthenticatedMenuComponent;
}());



/***/ }),

/***/ "./src/app/authenticated/authenticated-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/authenticated/authenticated-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticatedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedRoutingModule", function() { return AuthenticatedRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authenticated/authenticated.component */ "./src/app/authenticated/authenticated/authenticated.component.ts");
/* harmony import */ var _todolist_todolist_todolist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todolist/todolist/todolist.component */ "./src/app/authenticated/todolist/todolist/todolist.component.ts");
/* harmony import */ var _learn_more_learn_more_learn_more_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./learn-more/learn-more/learn-more.component */ "./src/app/authenticated/learn-more/learn-more/learn-more.component.ts");
/* harmony import */ var _not_found_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found/not-found.component */ "./src/app/authenticated/not-found/not-found/not-found.component.ts");






var authenticatedRoutes = [
    {
        path: '',
        component: _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_2__["AuthenticatedComponent"],
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
        children: [
            {
                path: '',
                canActivateChild: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]],
                children: [
                    {
                        path: '',
                        component: _todolist_todolist_todolist_component__WEBPACK_IMPORTED_MODULE_3__["TodolistComponent"]
                    },
                    {
                        path: 'learn-more',
                        component: _learn_more_learn_more_learn_more_component__WEBPACK_IMPORTED_MODULE_4__["LearnMoreComponent"]
                    },
                    {
                        path: '**',
                        component: _not_found_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"]
                    }
                ]
            }
        ]
    }
];
var AuthenticatedRoutingModule = /** @class */ (function () {
    function AuthenticatedRoutingModule() {
    }
    return AuthenticatedRoutingModule;
}());



/***/ }),

/***/ "./src/app/authenticated/authenticated.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/authenticated/authenticated.module.ts ***!
  \*******************************************************/
/*! exports provided: AuthenticatedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedModule", function() { return AuthenticatedModule; });
var AuthenticatedModule = /** @class */ (function () {
    function AuthenticatedModule() {
    }
    return AuthenticatedModule;
}());



/***/ }),

/***/ "./src/app/authenticated/authenticated/authenticated.component.css.shim.ngstyle.js":
/*!*****************************************************************************************!*\
  !*** ./src/app/authenticated/authenticated/authenticated.component.css.shim.ngstyle.js ***!
  \*****************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["mat-sidenav-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 64px;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\nmat-sidenav-content[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlZC9hdXRoZW50aWNhdGVkL2F1dGhlbnRpY2F0ZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7QUFDQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvYXV0aGVudGljYXRlZC9hdXRoZW50aWNhdGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDY0cHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxubWF0LXNpZGVuYXYtY29udGVudCB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcbiJdfQ== */"];



/***/ }),

/***/ "./src/app/authenticated/authenticated/authenticated.component.ngfactory.js":
/*!**********************************************************************************!*\
  !*** ./src/app/authenticated/authenticated/authenticated.component.ngfactory.js ***!
  \**********************************************************************************/
/*! exports provided: RenderType_AuthenticatedComponent, View_AuthenticatedComponent_0, View_AuthenticatedComponent_Host_0, AuthenticatedComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AuthenticatedComponent", function() { return RenderType_AuthenticatedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AuthenticatedComponent_0", function() { return View_AuthenticatedComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AuthenticatedComponent_Host_0", function() { return View_AuthenticatedComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedComponentNgFactory", function() { return AuthenticatedComponentNgFactory; });
/* harmony import */ var _authenticated_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authenticated.component.css.shim.ngstyle */ "./src/app/authenticated/authenticated/authenticated.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenticated_header_authenticated_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authenticated-header/authenticated-header.component.ngfactory */ "./src/app/authenticated/authenticated-header/authenticated-header.component.ngfactory.js");
/* harmony import */ var _authenticated_header_authenticated_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authenticated-header/authenticated-header.component */ "./src/app/authenticated/authenticated-header/authenticated-header.component.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _todolist_todolist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todolist/todolist.service */ "./src/app/authenticated/todolist/todolist.service.ts");
/* harmony import */ var _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/sidenav/typings/index.ngfactory */ "./node_modules/@angular/material/sidenav/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _authenticated_menu_authenticated_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../authenticated-menu/authenticated-menu.component.ngfactory */ "./src/app/authenticated/authenticated-menu/authenticated-menu.component.ngfactory.js");
/* harmony import */ var _authenticated_menu_authenticated_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../authenticated-menu/authenticated-menu.component */ "./src/app/authenticated/authenticated-menu/authenticated-menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authenticated_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./authenticated.component */ "./src/app/authenticated/authenticated/authenticated.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


















var styles_AuthenticatedComponent = [_authenticated_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AuthenticatedComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AuthenticatedComponent, data: {} });

function View_AuthenticatedComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-authenticated-header", [], null, [[null, "toggleMenu"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("toggleMenu" === en)) {
        var pd_0 = (_co.toggleMenu() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _authenticated_header_authenticated_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AuthenticatedHeaderComponent_0"], _authenticated_header_authenticated_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AuthenticatedHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _authenticated_header_authenticated_header_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticatedHeaderComponent"], [_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"], _todolist_todolist_service__WEBPACK_IMPORTED_MODULE_5__["TodolistService"]], { expandedMenu: [0, "expandedMenu"] }, { toggleMenu: "toggleMenu" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 11, "mat-sidenav-container", [["class", "mat-drawer-container mat-sidenav-container"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatSidenavContainer_0"], _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatSidenavContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 1490944, null, 2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], [[2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ViewportRuler"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MAT_DRAWER_DEFAULT_AUTOSIZE"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _drawers: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { _content: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 3, "mat-sidenav", [["class", "mat-drawer mat-sidenav"], ["mode", "side"], ["tabIndex", "-1"]], [[1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-sidenav-fixed", null], [4, "top", "px"], [4, "bottom", "px"], [40, "@transform", 0]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) { var ad = true; if (("component:@transform.start" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7)._animationStartListener($event) !== false);
        ad = (pd_0 && ad);
    } if (("component:@transform.done" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7)._animationDoneListener($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatSidenav_0"], _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatSidenav"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 3325952, [[1, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusTrapFactory"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_13__["DOCUMENT"]]], { mode: [0, "mode"], opened: [1, "opened"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 1, "app-authenticated-menu", [], null, [[null, "toggleMenu"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("toggleMenu" === en)) {
        var pd_0 = (_co.toggleMenu() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _authenticated_menu_authenticated_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_AuthenticatedMenuComponent_0"], _authenticated_menu_authenticated_menu_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_AuthenticatedMenuComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 49152, null, 0, _authenticated_menu_authenticated_menu_component__WEBPACK_IMPORTED_MODULE_15__["AuthenticatedMenuComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]], null, { toggleMenu: "toggleMenu" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 1, 3, "mat-sidenav-content", [["class", "mat-drawer-content mat-sidenav-content"]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatSidenavContent_0"], _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatSidenavContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 1294336, [[2, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 16777216, null, 0, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_16__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.expandedMenu; _ck(_v, 1, 0, currVal_0); _ck(_v, 3, 0); var currVal_11 = "side"; var currVal_12 = _co.expandedMenu; _ck(_v, 7, 0, currVal_11, currVal_12); _ck(_v, 11, 0); _ck(_v, 13, 0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._backdropOverride; _ck(_v, 2, 0, currVal_1); var currVal_2 = null; var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).position === "end"); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).mode === "over"); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).mode === "push"); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).mode === "side"); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).fixedInViewport; var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).fixedTopGap : null); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).fixedBottomGap : null); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7)._animationState; _ck(_v, 6, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._container._contentMargins.left; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._container._contentMargins.right; _ck(_v, 10, 0, currVal_13, currVal_14); }); }
function View_AuthenticatedComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-authenticated", [], null, null, null, View_AuthenticatedComponent_0, RenderType_AuthenticatedComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _authenticated_component__WEBPACK_IMPORTED_MODULE_17__["AuthenticatedComponent"], [], null, null)], null, null); }
var AuthenticatedComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-authenticated", _authenticated_component__WEBPACK_IMPORTED_MODULE_17__["AuthenticatedComponent"], View_AuthenticatedComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/authenticated/authenticated/authenticated.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/authenticated/authenticated/authenticated.component.ts ***!
  \************************************************************************/
/*! exports provided: AuthenticatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedComponent", function() { return AuthenticatedComponent; });
var AuthenticatedComponent = /** @class */ (function () {
    function AuthenticatedComponent() {
        this.expandedMenu = false;
    }
    AuthenticatedComponent.prototype.toggleMenu = function () {
        this.expandedMenu = !this.expandedMenu;
    };
    return AuthenticatedComponent;
}());



/***/ }),

/***/ "./src/app/authenticated/learn-more/learn-more.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/authenticated/learn-more/learn-more.module.ts ***!
  \***************************************************************/
/*! exports provided: LearnMoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnMoreModule", function() { return LearnMoreModule; });
var LearnMoreModule = /** @class */ (function () {
    function LearnMoreModule() {
    }
    return LearnMoreModule;
}());



/***/ }),

/***/ "./src/app/authenticated/learn-more/learn-more/learn-more.component.css.shim.ngstyle.js":
/*!**********************************************************************************************!*\
  !*** ./src/app/authenticated/learn-more/learn-more/learn-more.component.css.shim.ngstyle.js ***!
  \**********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvbGVhcm4tbW9yZS9sZWFybi1tb3JlL2xlYXJuLW1vcmUuY29tcG9uZW50LmNzcyJ9 */"];



/***/ }),

/***/ "./src/app/authenticated/learn-more/learn-more/learn-more.component.ngfactory.js":
/*!***************************************************************************************!*\
  !*** ./src/app/authenticated/learn-more/learn-more/learn-more.component.ngfactory.js ***!
  \***************************************************************************************/
/*! exports provided: RenderType_LearnMoreComponent, View_LearnMoreComponent_0, View_LearnMoreComponent_Host_0, LearnMoreComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LearnMoreComponent", function() { return RenderType_LearnMoreComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LearnMoreComponent_0", function() { return View_LearnMoreComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LearnMoreComponent_Host_0", function() { return View_LearnMoreComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnMoreComponentNgFactory", function() { return LearnMoreComponentNgFactory; });
/* harmony import */ var _learn_more_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./learn-more.component.css.shim.ngstyle */ "./src/app/authenticated/learn-more/learn-more/learn-more.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _learn_more_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./learn-more.component */ "./src/app/authenticated/learn-more/learn-more/learn-more.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_LearnMoreComponent = [_learn_more_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LearnMoreComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LearnMoreComponent, data: {} });

function View_LearnMoreComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 21, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["App"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" This app makes you able to maintain your todos up-to-date. Multiple users can access and edit the todos in parallel*. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Parallel: users have to share the same local storage (be on same browser)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["APIs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" For the sake of the demo, all the API calls are mocked. In order to be as realistic as possible they are delayed and subject to failures. Any data that needs to be persisted such as Authentication tokens or todos are stored within the local storage of the browser in use. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Revoke token"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 7, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" The token used and stored to keep the user connected to the API can be revoked by updating the value of "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "em", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["window.validToken"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" in the console or by clicking "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "button", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.resetToken() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" here"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [". "]))], null, null); }
function View_LearnMoreComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-learn-more", [], null, null, null, View_LearnMoreComponent_0, RenderType_LearnMoreComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _learn_more_component__WEBPACK_IMPORTED_MODULE_2__["LearnMoreComponent"], [], null, null)], null, null); }
var LearnMoreComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-learn-more", _learn_more_component__WEBPACK_IMPORTED_MODULE_2__["LearnMoreComponent"], View_LearnMoreComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/authenticated/learn-more/learn-more/learn-more.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/authenticated/learn-more/learn-more/learn-more.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LearnMoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnMoreComponent", function() { return LearnMoreComponent; });
var LearnMoreComponent = /** @class */ (function () {
    function LearnMoreComponent() {
    }
    LearnMoreComponent.prototype.resetToken = function () {
        window.validToken = Math.random()
            .toString(16)
            .substr(2);
    };
    return LearnMoreComponent;
}());



/***/ }),

/***/ "./src/app/authenticated/not-found/not-found.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/authenticated/not-found/not-found.module.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
var NotFoundModule = /** @class */ (function () {
    function NotFoundModule() {
    }
    return NotFoundModule;
}());



/***/ }),

/***/ "./src/app/authenticated/not-found/not-found/not-found.component.css.shim.ngstyle.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/authenticated/not-found/not-found/not-found.component.css.shim.ngstyle.js ***!
  \*******************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["#content[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 1em;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  max-width: 320px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlZC9ub3QtZm91bmQvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvbm90LWZvdW5kL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcbm1hdC1jYXJkIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxufVxyXG4iXX0= */"];



/***/ }),

/***/ "./src/app/authenticated/not-found/not-found/not-found.component.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./src/app/authenticated/not-found/not-found/not-found.component.ngfactory.js ***!
  \************************************************************************************/
/*! exports provided: RenderType_NotFoundComponent, View_NotFoundComponent_0, View_NotFoundComponent_Host_0, NotFoundComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NotFoundComponent", function() { return RenderType_NotFoundComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NotFoundComponent_0", function() { return View_NotFoundComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NotFoundComponent_Host_0", function() { return View_NotFoundComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponentNgFactory", function() { return NotFoundComponentNgFactory; });
/* harmony import */ var _not_found_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component.css.shim.ngstyle */ "./src/app/authenticated/not-found/not-found/not-found.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found.component */ "./src/app/authenticated/not-found/not-found/not-found.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_NotFoundComponent = [_not_found_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NotFoundComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NotFoundComponent, data: {} });

function View_NotFoundComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "div", [["id", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 18, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 1, "img", [["alt", "Back home"], ["class", "mat-card-image"], ["mat-card-image", ""], ["src", "https://upload.wikimedia.org/wikipedia/commons/0/07/Wrong_Way_Go_Back.svg"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 7, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 1, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Wrong way"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, 1, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["The page you are looking for does not exist"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 0, 1, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 4, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "button", [["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.backHome() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Back home "]))], null, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations"); _ck(_v, 1, 0, currVal_0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).align === "end"); _ck(_v, 15, 0, currVal_1); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).disabled || null); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._animationMode === "NoopAnimations"); _ck(_v, 17, 0, currVal_2, currVal_3); }); }
function View_NotFoundComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-not-found", [], null, null, null, View_NotFoundComponent_0, RenderType_NotFoundComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]], null, null)], null, null); }
var NotFoundComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-not-found", _not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"], View_NotFoundComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/authenticated/not-found/not-found/not-found.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/authenticated/not-found/not-found/not-found.component.ts ***!
  \**************************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(router) {
        this.router = router;
    }
    NotFoundComponent.prototype.backHome = function () {
        this.router.navigate(['/']);
    };
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/authenticated/todolist/todolist-list-item/todolist-list-item.component.css.shim.ngstyle.js":
/*!************************************************************************************************************!*\
  !*** ./src/app/authenticated/todolist/todolist-list-item/todolist-list-item.component.css.shim.ngstyle.js ***!
  \************************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["mat-card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.todo-label[_ngcontent-%COMP%] {\r\n  flex-grow: 1;\r\n  margin-left: 14px;\r\n}\r\n.todo-label.noaction[_ngcontent-%COMP%] {\r\n  color: #777;\r\n}\r\n.todo-label.remove[_ngcontent-%COMP%] {\r\n  text-decoration: line-through;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlZC90b2RvbGlzdC90b2RvbGlzdC1saXN0LWl0ZW0vdG9kb2xpc3QtbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvdG9kb2xpc3QvdG9kb2xpc3QtbGlzdC1pdGVtL3RvZG9saXN0LWxpc3QtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4udG9kby1sYWJlbCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG59XHJcbi50b2RvLWxhYmVsLm5vYWN0aW9uIHtcclxuICBjb2xvcjogIzc3NztcclxufVxyXG4udG9kby1sYWJlbC5yZW1vdmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcbiJdfQ== */"];



/***/ }),

/***/ "./src/app/authenticated/todolist/todolist-list-item/todolist-list-item.component.ngfactory.js":
/*!*****************************************************************************************************!*\
  !*** ./src/app/authenticated/todolist/todolist-list-item/todolist-list-item.component.ngfactory.js ***!
  \*****************************************************************************************************/
/*! exports provided: RenderType_TodolistListItemComponent, View_TodolistListItemComponent_0, View_TodolistListItemComponent_Host_0, TodolistListItemComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TodolistListItemComponent", function() { return RenderType_TodolistListItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TodolistListItemComponent_0", function() { return View_TodolistListItemComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TodolistListItemComponent_Host_0", function() { return View_TodolistListItemComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistListItemComponentNgFactory", function() { return TodolistListItemComponentNgFactory; });
/* harmony import */ var _todolist_list_item_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist-list-item.component.css.shim.ngstyle */ "./src/app/authenticated/todolist/todolist-list-item/todolist-list-item.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_checkbox_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/checkbox/typings/index.ngfactory */ "./node_modules/@angular/material/checkbox/typings/index.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _todolist_list_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./todolist-list-item.component */ "./src/app/authenticated/todolist/todolist-list-item/todolist-list-item.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















var styles_TodolistListItemComponent = [_todolist_list_item_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TodolistListItemComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TodolistListItemComponent, data: {} });

function View_TodolistListItemComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["refresh"]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).inline; var currVal_1 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "warn")); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_TodolistListItemComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 2, "mat-checkbox", [["class", "mat-checkbox"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.toggleTodo.emit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_checkbox_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatCheckbox_0"], _node_modules_angular_material_checkbox_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatCheckbox"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 8568832, null, 0, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [8, null], [2, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MAT_CHECKBOX_CLICK_ACTION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], { checked: [0, "checked"], disabled: [1, "disabled"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 1, "span", [["class", "todo-label"]], [[2, "remove", null], [2, "noaction", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_TodolistListItemComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 4, "button", [["aria-label", "Delete todo"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeTodo.emit() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["delete"]))], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.content.done; var currVal_9 = (_co.state !== "noop"); _ck(_v, 4, 0, currVal_8, currVal_9); var currVal_13 = (_co.state !== "noop"); _ck(_v, 8, 0, currVal_13); _ck(_v, 12, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).id; var currVal_2 = null; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).indeterminate; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).checked; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).disabled; var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).labelPosition == "before"); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._animationMode === "NoopAnimations"); _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_10 = (_co.state === "remove"); var currVal_11 = (_co.state !== "noop"); _ck(_v, 5, 0, currVal_10, currVal_11); var currVal_12 = _co.content.task; _ck(_v, 6, 0, currVal_12); var currVal_14 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).disabled || null); var currVal_15 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._animationMode === "NoopAnimations"); _ck(_v, 9, 0, currVal_14, currVal_15); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).inline; var currVal_17 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).color !== "warn")); _ck(_v, 11, 0, currVal_16, currVal_17); }); }
function View_TodolistListItemComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-todolist-list-item", [], null, null, null, View_TodolistListItemComponent_0, RenderType_TodolistListItemComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _todolist_list_item_component__WEBPACK_IMPORTED_MODULE_14__["TodolistListItemComponent"], [], null, null)], null, null); }
var TodolistListItemComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-todolist-list-item", _todolist_list_item_component__WEBPACK_IMPORTED_MODULE_14__["TodolistListItemComponent"], View_TodolistListItemComponent_Host_0, { state: "state", content: "content" }, { toggleTodo: "toggleTodo", removeTodo: "removeTodo" }, []);



/***/ }),

/***/ "./src/app/authenticated/todolist/todolist-list-item/todolist-list-item.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/authenticated/todolist/todolist-list-item/todolist-list-item.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TodolistListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistListItemComponent", function() { return TodolistListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var TodolistListItemComponent = /** @class */ (function () {
    function TodolistListItemComponent() {
        this.toggleTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    return TodolistListItemComponent;
}());



/***/ }),

/***/ "./src/app/authenticated/todolist/todolist-list/todolist-list.component.css.shim.ngstyle.js":
/*!**************************************************************************************************!*\
  !*** ./src/app/authenticated/todolist/todolist-list/todolist-list.component.css.shim.ngstyle.js ***!
  \**************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvdG9kb2xpc3QvdG9kb2xpc3QtbGlzdC90b2RvbGlzdC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"];



/***/ }),

/***/ "./src/app/authenticated/todolist/todolist-list/todolist-list.component.ngfactory.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/authenticated/todolist/todolist-list/todolist-list.component.ngfactory.js ***!
  \*******************************************************************************************/
/*! exports provided: RenderType_TodolistListComponent, View_TodolistListComponent_0, View_TodolistListComponent_Host_0, TodolistListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TodolistListComponent", function() { return RenderType_TodolistListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TodolistListComponent_0", function() { return View_TodolistListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TodolistListComponent_Host_0", function() { return View_TodolistListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistListComponentNgFactory", function() { return TodolistListComponentNgFactory; });
/* harmony import */ var _todolist_list_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist-list.component.css.shim.ngstyle */ "./src/app/authenticated/todolist/todolist-list/todolist-list.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todolist_list_item_todolist_list_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todolist-list-item/todolist-list-item.component.ngfactory */ "./src/app/authenticated/todolist/todolist-list-item/todolist-list-item.component.ngfactory.js");
/* harmony import */ var _todolist_list_item_todolist_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todolist-list-item/todolist-list-item.component */ "./src/app/authenticated/todolist/todolist-list-item/todolist-list-item.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _todolist_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todolist-list.component */ "./src/app/authenticated/todolist/todolist-list/todolist-list.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_TodolistListComponent = [_todolist_list_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TodolistListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TodolistListComponent, data: {} });

function View_TodolistListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-todolist-list-item", [], null, [[null, "toggleTodo"], [null, "removeTodo"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("toggleTodo" === en)) {
        var pd_0 = (_co.toggleTodo.emit(_v.context.$implicit.data.guid) !== false);
        ad = (pd_0 && ad);
    } if (("removeTodo" === en)) {
        var pd_1 = (_co.removeTodo.emit(_v.context.$implicit.data.guid) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _todolist_list_item_todolist_list_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TodolistListItemComponent_0"], _todolist_list_item_todolist_list_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TodolistListItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _todolist_list_item_todolist_list_item_component__WEBPACK_IMPORTED_MODULE_3__["TodolistListItemComponent"], [], { state: [0, "state"], content: [1, "content"] }, { toggleTodo: "toggleTodo", removeTodo: "removeTodo" })], function (_ck, _v) { var currVal_0 = _v.context.$implicit.state; var currVal_1 = _v.context.$implicit.data; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_TodolistListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TodolistListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.todos; _ck(_v, 2, 0, currVal_0); }, null); }
function View_TodolistListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-todolist-list", [], null, null, null, View_TodolistListComponent_0, RenderType_TodolistListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _todolist_list_component__WEBPACK_IMPORTED_MODULE_5__["TodolistListComponent"], [], null, null)], null, null); }
var TodolistListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-todolist-list", _todolist_list_component__WEBPACK_IMPORTED_MODULE_5__["TodolistListComponent"], View_TodolistListComponent_Host_0, { todos: "todos" }, { toggleTodo: "toggleTodo", removeTodo: "removeTodo" }, []);



/***/ }),

/***/ "./src/app/authenticated/todolist/todolist-list/todolist-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/authenticated/todolist/todolist-list/todolist-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TodolistListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistListComponent", function() { return TodolistListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var TodolistListComponent = /** @class */ (function () {
    function TodolistListComponent() {
        this.toggleTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    return TodolistListComponent;
}());



/***/ }),

/***/ "./src/app/authenticated/todolist/todolist-new-item/todolist-new-item.component.css.shim.ngstyle.js":
/*!**********************************************************************************************************!*\
  !*** ./src/app/authenticated/todolist/todolist-new-item/todolist-new-item.component.css.shim.ngstyle.js ***!
  \**********************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".add-todo-area[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n.add-todo-field[_ngcontent-%COMP%] {\r\n  flex-grow: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlZC90b2RvbGlzdC90b2RvbGlzdC1uZXctaXRlbS90b2RvbGlzdC1uZXctaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGVkL3RvZG9saXN0L3RvZG9saXN0LW5ldy1pdGVtL3RvZG9saXN0LW5ldy1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLXRvZG8tYXJlYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uYWRkLXRvZG8tZmllbGQge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG4iXX0= */"];



/***/ }),

/***/ "./src/app/authenticated/todolist/todolist-new-item/todolist-new-item.component.ngfactory.js":
/*!***************************************************************************************************!*\
  !*** ./src/app/authenticated/todolist/todolist-new-item/todolist-new-item.component.ngfactory.js ***!
  \***************************************************************************************************/
/*! exports provided: RenderType_TodolistNewItemComponent, View_TodolistNewItemComponent_0, View_TodolistNewItemComponent_Host_0, TodolistNewItemComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TodolistNewItemComponent", function() { return RenderType_TodolistNewItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TodolistNewItemComponent_0", function() { return View_TodolistNewItemComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TodolistNewItemComponent_Host_0", function() { return View_TodolistNewItemComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistNewItemComponentNgFactory", function() { return TodolistNewItemComponentNgFactory; });
/* harmony import */ var _todolist_new_item_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist-new-item.component.css.shim.ngstyle */ "./src/app/authenticated/todolist/todolist-new-item/todolist-new-item.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/form-field/typings/index.ngfactory */ "./node_modules/@angular/material/form-field/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _todolist_new_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./todolist-new-item.component */ "./src/app/authenticated/todolist/todolist-new-item/todolist-new-item.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


















var styles_TodolistNewItemComponent = [_todolist_new_item_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TodolistNewItemComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TodolistNewItemComponent, data: {} });

function View_TodolistNewItemComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["refresh"]))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).inline; var currVal_1 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).color !== "warn")); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_TodolistNewItemComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "div", [["class", "add-todo-area"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 13, "mat-form-field", [["class", "add-todo-field mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _controlNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { _controlStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { _labelChildNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, { _labelChildStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, [["taskNameBox", 1]], 1, 2, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "Add a new todo"], ["value", ""]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "keyup.enter"], [null, "blur"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._focusChanged(false) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._focusChanged(true) !== false);
        ad = (pd_1 && ad);
    } if (("input" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._onInput() !== false);
        ad = (pd_2 && ad);
    } if (("input" === en)) {
        var pd_3 = ((_co.taskName = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).value) !== false);
        ad = (pd_3 && ad);
    } if (("keyup.enter" === en)) {
        var pd_4 = (_co.add() !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_12__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"], value: [1, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4], [2, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TodolistNewItemComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 2, "button", [["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.add() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_16__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Add "]))], function (_ck, _v) { var _co = _v.component; var currVal_31 = "Add a new todo"; var currVal_32 = _co.taskName; _ck(_v, 13, 0, currVal_31, currVal_32); var currVal_33 = !_co.ready; _ck(_v, 16, 0, currVal_33); var currVal_36 = (_co.taskName === ""); _ck(_v, 18, 0, currVal_36); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).appearance == "standard"); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).appearance == "fill"); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).appearance == "outline"); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).appearance == "legacy"); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._control.errorState; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._canLabelFloat; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._shouldLabelFloat(); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._hasFloatingLabel(); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._hideControlPlaceholder(); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._control.disabled; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._control.autofilled; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._control.focused; var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).color == "accent"); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).color == "warn"); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._shouldForward("untouched"); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._shouldForward("touched"); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._shouldForward("pristine"); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._shouldForward("dirty"); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._shouldForward("valid"); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._shouldForward("invalid"); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._shouldForward("pending"); var currVal_21 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationsEnabled; _ck(_v, 1, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21]); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._isServer; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).id; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).placeholder; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).disabled; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).required; var currVal_27 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._isNativeSelect) || null); var currVal_28 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._ariaDescribedby || null); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).errorState; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).required.toString(); _ck(_v, 12, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30); var currVal_34 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).disabled || null); var currVal_35 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._animationMode === "NoopAnimations"); _ck(_v, 17, 0, currVal_34, currVal_35); }); }
function View_TodolistNewItemComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-todolist-new-item", [], null, null, null, View_TodolistNewItemComponent_0, RenderType_TodolistNewItemComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _todolist_new_item_component__WEBPACK_IMPORTED_MODULE_17__["TodolistNewItemComponent"], [], null, null)], null, null); }
var TodolistNewItemComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-todolist-new-item", _todolist_new_item_component__WEBPACK_IMPORTED_MODULE_17__["TodolistNewItemComponent"], View_TodolistNewItemComponent_Host_0, { ready: "ready" }, { addTodo: "addTodo" }, []);



/***/ }),

/***/ "./src/app/authenticated/todolist/todolist-new-item/todolist-new-item.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/authenticated/todolist/todolist-new-item/todolist-new-item.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TodolistNewItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistNewItemComponent", function() { return TodolistNewItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var TodolistNewItemComponent = /** @class */ (function () {
    function TodolistNewItemComponent() {
        this.addTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.taskName = '';
    }
    TodolistNewItemComponent.prototype.add = function () {
        this.addTodo.emit(this.taskName);
        this.taskName = '';
    };
    return TodolistNewItemComponent;
}());



/***/ }),

/***/ "./src/app/authenticated/todolist/todolist.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/authenticated/todolist/todolist.module.ts ***!
  \***********************************************************/
/*! exports provided: TodolistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistModule", function() { return TodolistModule; });
var TodolistModule = /** @class */ (function () {
    function TodolistModule() {
    }
    return TodolistModule;
}());



/***/ }),

/***/ "./src/app/authenticated/todolist/todolist.service.ts":
/*!************************************************************!*\
  !*** ./src/app/authenticated/todolist/todolist.service.ts ***!
  \************************************************************/
/*! exports provided: TodolistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistService", function() { return TodolistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api */ "./src/api/index.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var src_state_authentication_authentication_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/state/authentication/authentication.state */ "./src/state/authentication/authentication.state.ts");
/* harmony import */ var src_state_authentication_authentication_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/state/authentication/authentication.actions */ "./src/state/authentication/authentication.actions.ts");
/* harmony import */ var src_state_todolist_todolist_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/state/todolist/todolist.actions */ "./src/state/todolist/todolist.actions.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");










var TodolistService = /** @class */ (function () {
    function TodolistService(store, snackBar) {
        var _this = this;
        this.store = store;
        this.snackBar = snackBar;
        this.token = '';
        this.requesters = new Set();
        this.token$.subscribe(function (token) {
            _this.token = token;
            if (_this.requesters.size !== 0) {
                _this.unregisterTodoListener();
                _this.registerTodoListener();
            }
        });
    }
    TodolistService.prototype.registerTodoListener = function () {
        var _this = this;
        this.store.dispatch(new src_state_todolist_todolist_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateRefreshStatus"](true));
        this.todoListenerHandle = _api__WEBPACK_IMPORTED_MODULE_2__["addTodoListener"](this.token, function (todos) {
            _this.store.dispatch(new src_state_todolist_todolist_actions__WEBPACK_IMPORTED_MODULE_6__["RefreshTodos"](todos));
        }, function () {
            _this.snackBar.open('Revoked token, connection lost', '', {
                duration: 1000
            });
            _this.store.dispatch(new src_state_authentication_authentication_actions__WEBPACK_IMPORTED_MODULE_5__["TryLogout"](true));
        });
    };
    TodolistService.prototype.unregisterTodoListener = function () {
        _api__WEBPACK_IMPORTED_MODULE_2__["removeTodoListener"](this.todoListenerHandle);
        this.store.dispatch(new src_state_todolist_todolist_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateRefreshStatus"](false));
    };
    TodolistService.prototype.addRequester = function (requester) {
        if (this.requesters.size === 0) {
            this.registerTodoListener();
        }
        this.requesters.add(requester);
    };
    TodolistService.prototype.removeRequester = function (requester) {
        if (!this.requesters.has(requester)) {
            return;
        }
        this.requesters.delete(requester);
        if (this.requesters.size === 0) {
            this.unregisterTodoListener();
        }
    };
    TodolistService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function TodolistService_Factory() { return new TodolistService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); }, token: TodolistService, providedIn: "root" });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(src_state_authentication_authentication_state__WEBPACK_IMPORTED_MODULE_4__["AuthenticationState"].token)
    ], TodolistService.prototype, "token$", void 0);
    return TodolistService;
}());



/***/ }),

/***/ "./src/app/authenticated/todolist/todolist/todolist.component.css.shim.ngstyle.js":
/*!****************************************************************************************!*\
  !*** ./src/app/authenticated/todolist/todolist/todolist.component.css.shim.ngstyle.js ***!
  \****************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvdG9kb2xpc3QvdG9kb2xpc3QvdG9kb2xpc3QuY29tcG9uZW50LmNzcyJ9 */"];



/***/ }),

/***/ "./src/app/authenticated/todolist/todolist/todolist.component.ngfactory.js":
/*!*********************************************************************************!*\
  !*** ./src/app/authenticated/todolist/todolist/todolist.component.ngfactory.js ***!
  \*********************************************************************************/
/*! exports provided: RenderType_TodolistComponent, View_TodolistComponent_0, View_TodolistComponent_Host_0, TodolistComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TodolistComponent", function() { return RenderType_TodolistComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TodolistComponent_0", function() { return View_TodolistComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TodolistComponent_Host_0", function() { return View_TodolistComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistComponentNgFactory", function() { return TodolistComponentNgFactory; });
/* harmony import */ var _todolist_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist.component.css.shim.ngstyle */ "./src/app/authenticated/todolist/todolist/todolist.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todolist_new_item_todolist_new_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todolist-new-item/todolist-new-item.component.ngfactory */ "./src/app/authenticated/todolist/todolist-new-item/todolist-new-item.component.ngfactory.js");
/* harmony import */ var _todolist_new_item_todolist_new_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todolist-new-item/todolist-new-item.component */ "./src/app/authenticated/todolist/todolist-new-item/todolist-new-item.component.ts");
/* harmony import */ var _todolist_list_todolist_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todolist-list/todolist-list.component.ngfactory */ "./src/app/authenticated/todolist/todolist-list/todolist-list.component.ngfactory.js");
/* harmony import */ var _todolist_list_todolist_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todolist-list/todolist-list.component */ "./src/app/authenticated/todolist/todolist-list/todolist-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _todolist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todolist.component */ "./src/app/authenticated/todolist/todolist/todolist.component.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _todolist_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../todolist.service */ "./src/app/authenticated/todolist/todolist.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_TodolistComponent = [_todolist_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TodolistComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TodolistComponent, data: {} });

function View_TodolistComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-todolist-new-item", [], null, [[null, "addTodo"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("addTodo" === en)) {
        var pd_0 = (_co.addTodo($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _todolist_new_item_todolist_new_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_TodolistNewItemComponent_0"], _todolist_new_item_todolist_new_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_TodolistNewItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _todolist_new_item_todolist_new_item_component__WEBPACK_IMPORTED_MODULE_3__["TodolistNewItemComponent"], [], { ready: [0, "ready"] }, { addTodo: "addTodo" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "app-todolist-list", [], null, [[null, "toggleTodo"], [null, "removeTodo"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("toggleTodo" === en)) {
        var pd_0 = (_co.toggleTodo($event) !== false);
        ad = (pd_0 && ad);
    } if (("removeTodo" === en)) {
        var pd_1 = (_co.removeTodo($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _todolist_list_todolist_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_TodolistListComponent_0"], _todolist_list_todolist_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_TodolistListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _todolist_list_todolist_list_component__WEBPACK_IMPORTED_MODULE_5__["TodolistListComponent"], [], { todos: [0, "todos"] }, { toggleTodo: "toggleTodo", removeTodo: "removeTodo" })], function (_ck, _v) { var currVal_0 = _v.context.ngIf.ready; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.ngIf.todos; _ck(_v, 4, 0, currVal_1); }, null); }
function View_TodolistComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Waiting for todos..."]))], null, null); }
function View_TodolistComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_TodolistComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["waitingForTodos", 2]], null, 0, null, View_TodolistComponent_2))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).transform(_co.todoState$)); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3); _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_TodolistComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-todolist", [], null, null, null, View_TodolistComponent_0, RenderType_TodolistComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _todolist_component__WEBPACK_IMPORTED_MODULE_7__["TodolistComponent"], [_ngxs_store__WEBPACK_IMPORTED_MODULE_8__["Store"], _todolist_service__WEBPACK_IMPORTED_MODULE_9__["TodolistService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TodolistComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-todolist", _todolist_component__WEBPACK_IMPORTED_MODULE_7__["TodolistComponent"], View_TodolistComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/authenticated/todolist/todolist/todolist.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/authenticated/todolist/todolist/todolist.component.ts ***!
  \***********************************************************************/
/*! exports provided: TodolistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistComponent", function() { return TodolistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_state_todolist_todolist_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/state/todolist/todolist.state */ "./src/state/todolist/todolist.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var src_state_todolist_todolist_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/state/todolist/todolist.actions */ "./src/state/todolist/todolist.actions.ts");
/* harmony import */ var src_state_authentication_authentication_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/state/authentication/authentication.state */ "./src/state/authentication/authentication.state.ts");






var TodolistComponent = /** @class */ (function () {
    function TodolistComponent(store, todolistService) {
        this.store = store;
        this.todolistService = todolistService;
    }
    TodolistComponent.prototype.ngOnInit = function () {
        this.todolistService.addRequester(this);
    };
    TodolistComponent.prototype.ngOnDestroy = function () {
        this.todolistService.removeRequester(this);
    };
    TodolistComponent.prototype.addTodo = function (taskName) {
        this.store.dispatch(new src_state_todolist_todolist_actions__WEBPACK_IMPORTED_MODULE_4__["TryAddTodo"](this.store.selectSnapshot(src_state_authentication_authentication_state__WEBPACK_IMPORTED_MODULE_5__["AuthenticationState"].token), taskName));
    };
    TodolistComponent.prototype.toggleTodo = function (guid) {
        this.store.dispatch(new src_state_todolist_todolist_actions__WEBPACK_IMPORTED_MODULE_4__["TryToggleTodo"](this.store.selectSnapshot(src_state_authentication_authentication_state__WEBPACK_IMPORTED_MODULE_5__["AuthenticationState"].token), guid));
    };
    TodolistComponent.prototype.removeTodo = function (guid) {
        this.store.dispatch(new src_state_todolist_todolist_actions__WEBPACK_IMPORTED_MODULE_4__["TryRemoveTodo"](this.store.selectSnapshot(src_state_authentication_authentication_state__WEBPACK_IMPORTED_MODULE_5__["AuthenticationState"].token), guid));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(src_state_authentication_authentication_state__WEBPACK_IMPORTED_MODULE_5__["AuthenticationState"].token)
    ], TodolistComponent.prototype, "token$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Select"])(src_state_todolist_todolist_state__WEBPACK_IMPORTED_MODULE_2__["TodolistState"])
    ], TodolistComponent.prototype, "todoState$", void 0);
    return TodolistComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login/login.component.css.shim.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/login/login/login.component.css.shim.ngstyle.js ***!
  \*****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["#content[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 1em;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  max-width: 320px;\r\n}\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxufVxyXG5tYXQtY2FyZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1heC13aWR0aDogMzIwcHg7XHJcbn1cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"];



/***/ }),

/***/ "./src/app/login/login/login.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/login/login/login.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_LoginComponent, View_LoginComponent_0, View_LoginComponent_Host_0, LoginComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LoginComponent", function() { return RenderType_LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginComponent_0", function() { return View_LoginComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginComponent_Host_0", function() { return View_LoginComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponentNgFactory", function() { return LoginComponentNgFactory; });
/* harmony import */ var _login_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.css.shim.ngstyle */ "./src/app/login/login/login.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/card/typings/index.ngfactory */ "./node_modules/@angular/material/card/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/form-field/typings/index.ngfactory */ "./node_modules/@angular/material/form-field/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






















var styles_LoginComponent = [_login_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LoginComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LoginComponent, data: {} });

function View_LoginComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 52, "mat-card", [["class", "mat-card"]], [[2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCard_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCard"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], [[2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 1, "img", [["alt", "Eiffel Tower"], ["class", "mat-card-image"], ["mat-card-image", ""], ["src", "https://upload.wikimedia.org/wikipedia/commons/f/f6/Eiffel_Tower_and_the_Trocadero%2C_Exposition_Universal%2C_1900%2C_Paris%2C_France.jpg"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 7, "mat-card-header", [["class", "mat-card-header"]], null, null, null, _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCardHeader_0"], _node_modules_angular_material_card_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCardHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 49152, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 1, 2, "mat-card-title", [["class", "mat-card-title"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Welcome to TodoList Angular NgXs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 1, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Try with password: \u201Cpassword\u201D"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 35, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 13, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { _controlNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { _controlStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { _labelChildNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, { _labelChildStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, [["usernameBox", 1]], 1, 2, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "Username"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "keyup.enter"], [null, "blur"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._focusChanged(false) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._focusChanged(true) !== false);
        ad = (pd_1 && ad);
    } if (("input" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._onInput() !== false);
        ad = (pd_2 && ad);
    } if (("input" === en)) {
        var pd_3 = ((_co.username = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).value) !== false);
        ad = (pd_3 && ad);
    } if (("keyup.enter" === en)) {
        var pd_4 = (_co.login(_v.context.ngIf) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_12__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"], value: [1, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[1, 4], [2, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 19, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatFormField_0"], _node_modules_angular_material_form_field_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatFormField"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 7520256, null, 9, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_LABEL_GLOBAL_OPTIONS"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"]], [2, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MAT_FORM_FIELD_DEFAULT_OPTIONS"]], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { _controlNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 11, { _controlStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { _labelChildNonStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 13, { _labelChildStatic: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, { _placeholderChild: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, { _errorChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, { _hintChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, { _prefixChildren: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, { _suffixChildren: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, [["passwordBox", 1]], 1, 2, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["matInput", ""], ["placeholder", "Password"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0]], [[null, "input"], [null, "keyup.enter"], [null, "blur"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("blur" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._focusChanged(false) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._focusChanged(true) !== false);
        ad = (pd_1 && ad);
    } if (("input" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._onInput() !== false);
        ad = (pd_2 && ad);
    } if (("input" === en)) {
        var pd_3 = ((_co.password = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).value) !== false);
        ad = (pd_3 && ad);
    } if (("keyup.enter" === en)) {
        var pd_4 = (_co.login(_v.context.ngIf) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 999424, null, 0, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], [8, null], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["ErrorStateMatcher"], [8, null], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_12__["AutofillMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { placeholder: [0, "placeholder"], type: [1, "type"], value: [2, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[10, 4], [11, 4]], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"], null, [_angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, 4, 5, "button", [["mat-icon-button", ""], ["matSuffix", ""]], [[1, "aria-label", 0], [1, "aria-pressed", 0], [1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.hide = !_co.hide) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, [[18, 4]], 0, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](47, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, 0, 4, "mat-card-actions", [["class", "mat-card-actions"]], [[2, "mat-card-actions-align-end", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, null, 0, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 2, "button", [["mat-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.login(_v.context.ngIf) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](52, 0, [" ", " "]))], function (_ck, _v) { var _co = _v.component; var currVal_32 = "Username"; var currVal_33 = _co.username; _ck(_v, 26, 0, currVal_32, currVal_33); var currVal_65 = "Password"; var currVal_66 = (_co.hide ? "password" : "text"); var currVal_67 = _co.password; _ck(_v, 40, 0, currVal_65, currVal_66, currVal_67); _ck(_v, 46, 0); var currVal_78 = !_co.canLogin(_v.context.ngIf); _ck(_v, 51, 0, currVal_78); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).appearance == "standard"); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).appearance == "fill"); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).appearance == "outline"); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).appearance == "legacy"); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._control.errorState; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._canLabelFloat; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldLabelFloat(); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._hasFloatingLabel(); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._hideControlPlaceholder(); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._control.disabled; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._control.autofilled; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._control.focused; var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).color == "accent"); var currVal_14 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).color == "warn"); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("untouched"); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("touched"); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("pristine"); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("dirty"); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("valid"); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("invalid"); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._shouldForward("pending"); var currVal_22 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15)._animationsEnabled; _ck(_v, 14, 1, [currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22]); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._isServer; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).id; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).placeholder; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).disabled; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).required; var currVal_28 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._isNativeSelect) || null); var currVal_29 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._ariaDescribedby || null); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).errorState; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).required.toString(); _ck(_v, 25, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31); var currVal_34 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).appearance == "standard"); var currVal_35 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).appearance == "fill"); var currVal_36 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).appearance == "outline"); var currVal_37 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).appearance == "legacy"); var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._control.errorState; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._canLabelFloat; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._shouldLabelFloat(); var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._hasFloatingLabel(); var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._hideControlPlaceholder(); var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._control.disabled; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._control.autofilled; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._control.focused; var currVal_46 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).color == "accent"); var currVal_47 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).color == "warn"); var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._shouldForward("untouched"); var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._shouldForward("touched"); var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._shouldForward("pristine"); var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._shouldForward("dirty"); var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._shouldForward("valid"); var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._shouldForward("invalid"); var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._shouldForward("pending"); var currVal_55 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29)._animationsEnabled; _ck(_v, 28, 1, [currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53, currVal_54, currVal_55]); var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._isServer; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).id; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).placeholder; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).disabled; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).required; var currVal_61 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).readonly && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._isNativeSelect) || null); var currVal_62 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._ariaDescribedby || null); var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).errorState; var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).required.toString(); _ck(_v, 39, 0, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64); var currVal_68 = "Hide password"; var currVal_69 = _co.hide; var currVal_70 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).disabled || null); var currVal_71 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43)._animationMode === "NoopAnimations"); _ck(_v, 42, 0, currVal_68, currVal_69, currVal_70, currVal_71); var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).inline; var currVal_73 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).color !== "warn")); _ck(_v, 45, 0, currVal_72, currVal_73); var currVal_74 = (_co.hide ? "visibility_off" : "visibility"); _ck(_v, 47, 0, currVal_74); var currVal_75 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).align === "end"); _ck(_v, 48, 0, currVal_75); var currVal_76 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).disabled || null); var currVal_77 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51)._animationMode === "NoopAnimations"); _ck(_v, 50, 0, currVal_76, currVal_77); var currVal_79 = (_co.onGoingLogin(_v.context.ngIf) ? "..." : "Login"); _ck(_v, 52, 0, currVal_79); }); }
function View_LoginComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["id", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_LoginComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_18__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform(_co.authStatus$)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_LoginComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-login", [], null, null, null, View_LoginComponent_0, RenderType_LoginComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], [_ngxs_store__WEBPACK_IMPORTED_MODULE_20__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_21__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LoginComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-login", _login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], View_LoginComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_state_authentication_authentication_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/state/authentication/authentication.model */ "./src/state/authentication/authentication.model.ts");
/* harmony import */ var src_state_authentication_authentication_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/state/authentication/authentication.state */ "./src/state/authentication/authentication.state.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var src_state_authentication_authentication_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/state/authentication/authentication.actions */ "./src/state/authentication/authentication.actions.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(store, router, route) {
        this.store = store;
        this.router = router;
        this.route = route;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.username = '';
        this.password = '';
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription.add(this.route.queryParams.subscribe(function (params) { return (_this.redirect = params.redirect); }));
        this.subscription.add(this.authStatus$.subscribe(function (s) {
            if (s !== src_state_authentication_authentication_model__WEBPACK_IMPORTED_MODULE_3__["AuthenticationStatus"].Authenticated) {
                return;
            }
            _this.router.navigate([_this.redirect || '/']);
        }));
    };
    LoginComponent.prototype.canLogin = function (authStatus) {
        return (authStatus === src_state_authentication_authentication_model__WEBPACK_IMPORTED_MODULE_3__["AuthenticationStatus"].NonAuthenticated &&
            this.username.length > 0 &&
            this.password.length > 0);
    };
    LoginComponent.prototype.onGoingLogin = function (authStatus) {
        return authStatus === src_state_authentication_authentication_model__WEBPACK_IMPORTED_MODULE_3__["AuthenticationStatus"].OnGoingAuthentication;
    };
    LoginComponent.prototype.login = function (authStatus) {
        if (!this.canLogin(authStatus)) {
            return;
        }
        this.store.dispatch(new src_state_authentication_authentication_actions__WEBPACK_IMPORTED_MODULE_6__["TryLoginByCreds"](this.username, this.password));
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(src_state_authentication_authentication_state__WEBPACK_IMPORTED_MODULE_4__["AuthenticationState"].status)
    ], LoginComponent.prototype, "authStatus$", void 0);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/state/authentication/authentication.actions.ts":
/*!************************************************************!*\
  !*** ./src/state/authentication/authentication.actions.ts ***!
  \************************************************************/
/*! exports provided: TryLoginByCreds, TryLoginByToken, TryLogout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryLoginByCreds", function() { return TryLoginByCreds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryLoginByToken", function() { return TryLoginByToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryLogout", function() { return TryLogout; });
var TryLoginByCreds = /** @class */ (function () {
    function TryLoginByCreds(username, password) {
        this.username = username;
        this.password = password;
    }
    TryLoginByCreds.type = '[Authentication] Try login by creds';
    return TryLoginByCreds;
}());

var TryLoginByToken = /** @class */ (function () {
    function TryLoginByToken() {
    }
    TryLoginByToken.type = '[Authentication] Try login by token';
    return TryLoginByToken;
}());

var TryLogout = /** @class */ (function () {
    function TryLogout(silent) {
        this.silent = silent;
    }
    TryLogout.type = '[Authentication] Try logout';
    return TryLogout;
}());



/***/ }),

/***/ "./src/state/authentication/authentication.model.ts":
/*!**********************************************************!*\
  !*** ./src/state/authentication/authentication.model.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationStatus", function() { return AuthenticationStatus; });
var AuthenticationStatus;
(function (AuthenticationStatus) {
    AuthenticationStatus["NonAuthenticated"] = "NonAuthenticated";
    AuthenticationStatus["OnGoingAuthentication"] = "OnGoingAuthentication";
    AuthenticationStatus["Authenticated"] = "Authenticated";
})(AuthenticationStatus || (AuthenticationStatus = {}));


/***/ }),

/***/ "./src/state/authentication/authentication.state.ts":
/*!**********************************************************!*\
  !*** ./src/state/authentication/authentication.state.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationState", function() { return AuthenticationState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _authentication_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication.model */ "./src/state/authentication/authentication.model.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var _authentication_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.actions */ "./src/state/authentication/authentication.actions.ts");





var AuthenticationState = /** @class */ (function () {
    function AuthenticationState(router, snackBar) {
        this.router = router;
        this.snackBar = snackBar;
    }
    AuthenticationState.isAuthenticated = function (state) {
        return state.status === _authentication_model__WEBPACK_IMPORTED_MODULE_2__["AuthenticationStatus"].Authenticated;
    };
    AuthenticationState.username = function (state) {
        return state.username;
    };
    AuthenticationState.token = function (state) {
        return state.token;
    };
    AuthenticationState.status = function (state) {
        return state.status;
    };
    AuthenticationState.prototype.tryLoginByCreds = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var username = _b.username, password = _b.password;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var tokens, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        patchState({
                            token: '',
                            username: username,
                            status: _authentication_model__WEBPACK_IMPORTED_MODULE_2__["AuthenticationStatus"].OnGoingAuthentication
                        });
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_3__["login"](username, password)];
                    case 2:
                        tokens = _c.sent();
                        patchState({
                            token: tokens.token,
                            username: tokens.username,
                            status: _authentication_model__WEBPACK_IMPORTED_MODULE_2__["AuthenticationStatus"].Authenticated
                        });
                        _api__WEBPACK_IMPORTED_MODULE_3__["writeStorage"]('AuthenticationProvider', 'username', tokens.username);
                        _api__WEBPACK_IMPORTED_MODULE_3__["writeStorage"]('AuthenticationProvider', 'token', tokens.token);
                        this.snackBar.open('Login successful', '', {
                            duration: 1000
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _c.sent();
                        patchState({
                            token: '',
                            username: username,
                            status: _authentication_model__WEBPACK_IMPORTED_MODULE_2__["AuthenticationStatus"].NonAuthenticated
                        });
                        this.snackBar.open('Login failure', '', {
                            duration: 1000
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthenticationState.prototype.tryLoginByToken = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _c, token, username, valid, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _c = getState(), token = _c.token, username = _c.username;
                        if (token === '') {
                            return [2 /*return*/];
                        }
                        patchState({
                            token: token,
                            username: username,
                            status: _authentication_model__WEBPACK_IMPORTED_MODULE_2__["AuthenticationStatus"].OnGoingAuthentication
                        });
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_3__["checkToken"](token)];
                    case 2:
                        valid = _d.sent();
                        if (valid) {
                            patchState({
                                token: token,
                                username: username,
                                status: _authentication_model__WEBPACK_IMPORTED_MODULE_2__["AuthenticationStatus"].Authenticated
                            });
                            this.snackBar.open('Login successful', '', {
                                duration: 1000
                            });
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _d.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        patchState({
                            token: token,
                            username: username,
                            status: _authentication_model__WEBPACK_IMPORTED_MODULE_2__["AuthenticationStatus"].NonAuthenticated
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthenticationState.prototype.tryLogout = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var silent = _b.silent;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                patchState({
                    token: '',
                    username: '',
                    status: _authentication_model__WEBPACK_IMPORTED_MODULE_2__["AuthenticationStatus"].NonAuthenticated
                });
                _api__WEBPACK_IMPORTED_MODULE_3__["clearStorage"]('AuthenticationProvider', 'username');
                _api__WEBPACK_IMPORTED_MODULE_3__["clearStorage"]('AuthenticationProvider', 'token');
                if (!silent) {
                    this.snackBar.open('Logout successful', '', {
                        duration: 1000
                    });
                }
                this.router.navigate(['/login'], {
                    queryParams: {
                        redirect: this.router.routerState.snapshot.url
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_authentication_actions__WEBPACK_IMPORTED_MODULE_4__["TryLoginByCreds"])
    ], AuthenticationState.prototype, "tryLoginByCreds", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_authentication_actions__WEBPACK_IMPORTED_MODULE_4__["TryLoginByToken"])
    ], AuthenticationState.prototype, "tryLoginByToken", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_authentication_actions__WEBPACK_IMPORTED_MODULE_4__["TryLogout"])
    ], AuthenticationState.prototype, "tryLogout", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
    ], AuthenticationState, "isAuthenticated", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
    ], AuthenticationState, "username", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
    ], AuthenticationState, "token", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
    ], AuthenticationState, "status", null);
    AuthenticationState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: 'authenticationState',
            defaults: {
                username: _api__WEBPACK_IMPORTED_MODULE_3__["readStorage"]('AuthenticationProvider', 'username'),
                token: _api__WEBPACK_IMPORTED_MODULE_3__["readStorage"]('AuthenticationProvider', 'token'),
                status: _authentication_model__WEBPACK_IMPORTED_MODULE_2__["AuthenticationStatus"].NonAuthenticated
            }
        })
    ], AuthenticationState);
    return AuthenticationState;
}());



/***/ }),

/***/ "./src/state/todolist/todolist.actions.ts":
/*!************************************************!*\
  !*** ./src/state/todolist/todolist.actions.ts ***!
  \************************************************/
/*! exports provided: RefreshTodos, UpdateRefreshStatus, TryAddTodo, TryToggleTodo, TryRemoveTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshTodos", function() { return RefreshTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRefreshStatus", function() { return UpdateRefreshStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryAddTodo", function() { return TryAddTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryToggleTodo", function() { return TryToggleTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryRemoveTodo", function() { return TryRemoveTodo; });
var RefreshTodos = /** @class */ (function () {
    function RefreshTodos(todos) {
        this.todos = todos;
    }
    RefreshTodos.type = '[Todolist] Refresh todos';
    return RefreshTodos;
}());

var UpdateRefreshStatus = /** @class */ (function () {
    function UpdateRefreshStatus(status) {
        this.status = status;
    }
    UpdateRefreshStatus.type = '[Todolist] Update refresh status';
    return UpdateRefreshStatus;
}());

var TryAddTodo = /** @class */ (function () {
    function TryAddTodo(token, task) {
        this.token = token;
        this.task = task;
    }
    TryAddTodo.type = '[Todolist] Try add todo';
    return TryAddTodo;
}());

var TryToggleTodo = /** @class */ (function () {
    function TryToggleTodo(token, guid) {
        this.token = token;
        this.guid = guid;
    }
    TryToggleTodo.type = '[Todolist] Try toggle todo';
    return TryToggleTodo;
}());

var TryRemoveTodo = /** @class */ (function () {
    function TryRemoveTodo(token, guid) {
        this.token = token;
        this.guid = guid;
    }
    TryRemoveTodo.type = '[Todolist] Try remove todo';
    return TryRemoveTodo;
}());



/***/ }),

/***/ "./src/state/todolist/todolist.model.ts":
/*!**********************************************!*\
  !*** ./src/state/todolist/todolist.model.ts ***!
  \**********************************************/
/*! exports provided: TodoSyncState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoSyncState", function() { return TodoSyncState; });
var TodoSyncState;
(function (TodoSyncState) {
    TodoSyncState["Noop"] = "noop";
    TodoSyncState["Add"] = "add";
    TodoSyncState["Edit"] = "edit";
    TodoSyncState["Remove"] = "remove";
})(TodoSyncState || (TodoSyncState = {}));


/***/ }),

/***/ "./src/state/todolist/todolist.state.ts":
/*!**********************************************!*\
  !*** ./src/state/todolist/todolist.state.ts ***!
  \**********************************************/
/*! exports provided: TodolistState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistState", function() { return TodolistState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _todolist_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolist.model */ "./src/state/todolist/todolist.model.ts");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _todolist_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todolist.actions */ "./src/state/todolist/todolist.actions.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");





var TodolistState = /** @class */ (function () {
    function TodolistState(snackBar) {
        this.snackBar = snackBar;
    }
    TodolistState.numTodos = function (state) {
        return state.todos.length;
    };
    TodolistState.prototype.refreshTodos = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var todos = _b.todos;
        var state = getState();
        var todosBeingAdded = state.todos
            .filter(function (t) { return t.state === _todolist_model__WEBPACK_IMPORTED_MODULE_1__["TodoSyncState"].Add; })
            .reduce(function (acc, t) {
            var _a;
            return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, acc, (_a = {}, _a[t.data.guid] = t.data, _a)));
        }, {});
        var todosBeingEdited = state.todos
            .filter(function (t) { return t.state === _todolist_model__WEBPACK_IMPORTED_MODULE_1__["TodoSyncState"].Edit; })
            .reduce(function (acc, t) {
            var _a;
            return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, acc, (_a = {}, _a[t.data.guid] = t.data, _a)));
        }, {});
        var todosBeingRemoved = state.todos
            .filter(function (t) { return t.state === _todolist_model__WEBPACK_IMPORTED_MODULE_1__["TodoSyncState"].Remove; })
            .reduce(function (acc, t) {
            var _a;
            return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, acc, (_a = {}, _a[t.data.guid] = t.data, _a)));
        }, {});
        var updatedTodos = todos
            .filter(function (t) { return todosBeingAdded[t.guid] === undefined; })
            .map(function (t) {
            // Remove, Edit and Noop
            if (todosBeingEdited[t.guid]) {
                return {
                    state: _todolist_model__WEBPACK_IMPORTED_MODULE_1__["TodoSyncState"].Edit,
                    data: todosBeingEdited[t.guid]
                };
            }
            if (todosBeingRemoved[t.guid]) {
                return {
                    state: _todolist_model__WEBPACK_IMPORTED_MODULE_1__["TodoSyncState"].Remove,
                    data: todosBeingRemoved[t.guid]
                };
            }
            return { state: _todolist_model__WEBPACK_IMPORTED_MODULE_1__["TodoSyncState"].Noop, data: t };
        })
            .concat(state.todos.filter(function (t) { return t.state === _todolist_model__WEBPACK_IMPORTED_MODULE_1__["TodoSyncState"].Add; })); // Add
        patchState({ todos: updatedTodos });
    };
    TodolistState.prototype.updateRefreshStatus = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var status = _b.status;
        patchState({ ready: status });
    };
    TodolistState.prototype.tryAddTodo = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var token = _b.token, task = _b.task;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var todo, r;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        todo = {
                            guid: Math.random()
                                .toString(16)
                                .substr(2),
                            task: task,
                            done: false
                        };
                        patchState({
                            todos: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](getState().todos, [{ state: _todolist_model__WEBPACK_IMPORTED_MODULE_1__["TodoSyncState"].Add, data: todo }])
                        });
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_4__["addTodo"](token, todo)];
                    case 1:
                        r = _c.sent();
                        if (r) {
                            patchState({
                                todos: getState().todos.map(function (t) {
                                    return t.data.guid === todo.guid
                                        ? { state: _todolist_model__WEBPACK_IMPORTED_MODULE_1__["TodoSyncState"].Noop, data: todo }
                                        : t;
                                })
                            });
                        }
                        else {
                            patchState({
                                todos: getState().todos.filter(function (t) { return t.data.guid !== todo.guid; })
                            });
                            this.snackBar.open("Failed to add todo: " + todo.task, '', {
                                duration: 1000
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TodolistState.prototype.tryToggleTodo = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var token = _b.token, guid = _b.guid;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var todo, newData, r;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        todo = getState().todos.find(function (t) { return t.data.guid === guid && t.state === _todolist_model__WEBPACK_IMPORTED_MODULE_1__["TodoSyncState"].Noop; });
                        if (!todo) {
                            this.snackBar.open("No todo available for modification given guid " + guid, '', {
                                duration: 1000
                            });
                            return [2 /*return*/];
                        }
                        newData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, todo.data, { done: !todo.data.done });
                        patchState({
                            todos: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](getState().todos.map(function (t) {
                                return t.data.guid === guid
                                    ? {
                                        state: _todolist_model__WEBPACK_IMPORTED_MODULE_1__["TodoSyncState"].Edit,
                                        data: newData
                                    }
                                    : t;
                            }))
                        });
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_4__["editTodo"](token, newData)];
                    case 1:
                        r = _c.sent();
                        if (r) {
                            patchState({
                                todos: getState().todos.map(function (t) {
                                    return t.data.guid === guid
                                        ? {
                                            state: _todolist_model__WEBPACK_IMPORTED_MODULE_1__["TodoSyncState"].Noop,
                                            data: newData
                                        }
                                        : t;
                                })
                            });
                        }
                        else {
                            patchState({
                                todos: getState().todos.map(function (t) {
                                    return t.data.guid === guid
                                        ? { state: _todolist_model__WEBPACK_IMPORTED_MODULE_1__["TodoSyncState"].Noop, data: todo.data }
                                        : t;
                                })
                            });
                            this.snackBar.open("Failed to edit todo: " + todo.data.task, '', {
                                duration: 1000
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TodolistState.prototype.tryRemoveTodo = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var token = _b.token, guid = _b.guid;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var todo, r;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        todo = getState().todos.find(function (t) { return t.data.guid === guid && t.state === _todolist_model__WEBPACK_IMPORTED_MODULE_1__["TodoSyncState"].Noop; });
                        if (!todo) {
                            this.snackBar.open("No todo available for modification given guid " + guid, '', {
                                duration: 1000
                            });
                            return [2 /*return*/];
                        }
                        patchState({
                            todos: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](getState().todos.map(function (t) {
                                return t.data.guid === guid
                                    ? {
                                        state: _todolist_model__WEBPACK_IMPORTED_MODULE_1__["TodoSyncState"].Remove,
                                        data: todo.data
                                    }
                                    : t;
                            }))
                        });
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_4__["removeTodo"](token, todo.data)];
                    case 1:
                        r = _c.sent();
                        if (r) {
                            patchState({ todos: getState().todos.filter(function (t) { return t.data.guid !== guid; }) });
                        }
                        else {
                            patchState({
                                todos: getState().todos.map(function (t) {
                                    return t.data.guid === guid
                                        ? { state: _todolist_model__WEBPACK_IMPORTED_MODULE_1__["TodoSyncState"].Noop, data: todo.data }
                                        : t;
                                })
                            });
                            this.snackBar.open("Failed to remove todo: " + todo.data.task, '', {
                                duration: 1000
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_todolist_actions__WEBPACK_IMPORTED_MODULE_3__["RefreshTodos"])
    ], TodolistState.prototype, "refreshTodos", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_todolist_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateRefreshStatus"])
    ], TodolistState.prototype, "updateRefreshStatus", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_todolist_actions__WEBPACK_IMPORTED_MODULE_3__["TryAddTodo"])
    ], TodolistState.prototype, "tryAddTodo", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_todolist_actions__WEBPACK_IMPORTED_MODULE_3__["TryToggleTodo"])
    ], TodolistState.prototype, "tryToggleTodo", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_todolist_actions__WEBPACK_IMPORTED_MODULE_3__["TryRemoveTodo"])
    ], TodolistState.prototype, "tryRemoveTodo", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()
    ], TodolistState, "numTodos", null);
    TodolistState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
            name: 'todolistState',
            defaults: { ready: false, todos: [] }
        })
    ], TodolistState);
    return TodolistState;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/dubzzz/todolist-front/todolist-angular-ngxs/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map