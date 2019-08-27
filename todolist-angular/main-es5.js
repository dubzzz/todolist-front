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
/*! exports provided: login, checkToken, readStorage, writeStorage, clearStorage, addTodoListener, removeTodoListener, addTodo, editTodo, removeTodo */
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* Helpers */
var _this = undefined;

var delay = function (ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { return resolve(); }, ms);
    });
};
var success = function (out, ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { return resolve(out); }, ms);
    });
};
var failure = function (ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { return reject(); }, ms);
    });
};
var validPassword = 'password';
var getValidToken = function () {
    var token = window.validToken || 'w€lc0Me';
    window.validToken = token;
    return token;
};
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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/login/login/login.component.ts");






var routes = [
    {
        path: 'login',
        component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: '',
        loadChildren: function () {
            return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./authenticated/authenticated.module */ "./src/app/authenticated/authenticated.module.ts")).then(function (mod) { return mod.AuthenticatedModule; });
        },
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
        data: { preload: true }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], factory: function AppComponent_Factory(t) { return new (t || AppComponent)(); }, consts: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
    return AppComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null);


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _authenticated_authenticated_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authenticated/authenticated.module */ "./src/app/authenticated/authenticated.module.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
    AppModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_5__["LoginModule"],
                _authenticated_authenticated_module__WEBPACK_IMPORTED_MODULE_6__["AuthenticatedModule"]
            ]] });
    return AppModule;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _login_login_module__WEBPACK_IMPORTED_MODULE_5__["LoginModule"],
        _authenticated_authenticated_module__WEBPACK_IMPORTED_MODULE_6__["AuthenticatedModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _login_login_module__WEBPACK_IMPORTED_MODULE_5__["LoginModule"],
                    _authenticated_authenticated_module__WEBPACK_IMPORTED_MODULE_6__["AuthenticatedModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth) {
        this.auth = auth;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (isAuth) {
            if (!isAuth) {
                _this.auth.redirectToLogin(state);
                return false;
            }
            return true;
        }));
    };
    AuthGuardService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuardService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); }, providedIn: 'root' });
    return AuthGuardService;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null);


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthStatus, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStatus", function() { return AuthStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./src/api/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");








var AuthStatus;
(function (AuthStatus) {
    AuthStatus["NonAuthenticated"] = "NonAuthenticated";
    AuthStatus["OnGoingAuthentication"] = "OnGoingAuthentication";
    AuthStatus["Authenticated"] = "Authenticated";
})(AuthStatus || (AuthStatus = {}));
var AuthService = /** @class */ (function () {
    function AuthService(router, snackBar) {
        var _this = this;
        this.router = router;
        this.snackBar = snackBar;
        var username = _api__WEBPACK_IMPORTED_MODULE_4__["readStorage"]('AuthenticationProvider', 'username');
        var token = _api__WEBPACK_IMPORTED_MODULE_4__["readStorage"]('AuthenticationProvider', 'token');
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            token: token,
            username: username,
            status: AuthStatus.NonAuthenticated
        });
        this.state$ = this.subject.asObservable();
        this.isAuthenticated$ = this.subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (s) { return s.status === AuthStatus.Authenticated; }));
        if (token.length > 0) {
            this.subject.next({
                token: token,
                username: username,
                status: AuthStatus.OnGoingAuthentication
            });
            _api__WEBPACK_IMPORTED_MODULE_4__["checkToken"](token).then(function (valid) {
                if (valid) {
                    _this.subject.next({
                        token: token,
                        username: username,
                        status: AuthStatus.Authenticated
                    });
                    _this.snackBar.open('Login successful', '', {
                        duration: 1000
                    });
                }
                else {
                    _this.subject.next({
                        token: token,
                        username: username,
                        status: AuthStatus.NonAuthenticated
                    });
                }
            });
        }
    }
    AuthService.prototype.login = function (username, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var tokens, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.subject.next({
                            token: '',
                            username: username,
                            status: AuthStatus.OnGoingAuthentication
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_4__["login"](username, password)];
                    case 2:
                        tokens = _a.sent();
                        this.subject.next({
                            token: tokens.token,
                            username: tokens.username,
                            status: AuthStatus.Authenticated
                        });
                        _api__WEBPACK_IMPORTED_MODULE_4__["writeStorage"]('AuthenticationProvider', 'username', tokens.username);
                        _api__WEBPACK_IMPORTED_MODULE_4__["writeStorage"]('AuthenticationProvider', 'token', tokens.token);
                        this.snackBar.open('Login successful', '', {
                            duration: 1000
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.subject.next({
                            token: '',
                            username: username,
                            status: AuthStatus.NonAuthenticated
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
    AuthService.prototype.logout = function (silent) {
        this.subject.next({
            token: '',
            username: '',
            status: AuthStatus.NonAuthenticated
        });
        _api__WEBPACK_IMPORTED_MODULE_4__["clearStorage"]('AuthenticationProvider', 'username');
        _api__WEBPACK_IMPORTED_MODULE_4__["clearStorage"]('AuthenticationProvider', 'token');
        if (!silent) {
            this.snackBar.open('Logout successful', '', {
                duration: 1000
            });
        }
        this.redirectToLogin(this.router.routerState.snapshot);
    };
    AuthService.prototype.redirectToLogin = function (state) {
        this.router.navigate(['/login'], {
            queryParams: {
                redirect: state.url
            }
        });
    };
    AuthService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"])); }, providedIn: 'root' });
    return AuthService;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }]; }, null);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _todolist_todolist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todolist/todolist.service */ "./src/app/authenticated/todolist/todolist.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/icon.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/badge.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");










var _c0 = ["color", "primary", "role", "header"];
var _c1 = ["mat-icon-button", "", "aria-label", "Toggle menu", 3, "click"];
var _c2 = [1, "spacer"];
var _c3 = ["mat-icon-button", "", "aria-label", "To-dos"];
var _c4 = ["matBadgeColor", "warn", 3, "matBadge"];
var _c5 = ["mat-icon-button", "", "aria-label", "Logout", 3, "click"];
var AuthenticatedHeaderComponent = /** @class */ (function () {
    function AuthenticatedHeaderComponent(authService, todolistService) {
        this.authService = authService;
        this.todolistService = todolistService;
        this.toggleMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AuthenticatedHeaderComponent.prototype.ngOnInit = function () {
        this.username$ = this.authService.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (s) { return s.username; }));
        this.numTodos$ = this.todolistService.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (s) { return String(s.todos.length); }));
        this.todolistService.addRequester(this);
    };
    AuthenticatedHeaderComponent.prototype.ngOnDestroy = function () {
        this.todolistService.removeRequester(this);
    };
    AuthenticatedHeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    AuthenticatedHeaderComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthenticatedHeaderComponent, selectors: [["app-authenticated-header"]], factory: function AuthenticatedHeaderComponent_Factory(t) { return new (t || AuthenticatedHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_todolist_todolist_service__WEBPACK_IMPORTED_MODULE_3__["TodolistService"])); }, inputs: { expandedMenu: "expandedMenu" }, outputs: { toggleMenu: "toggleMenu" }, consts: 15, vars: 6, template: function AuthenticatedHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", _c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", _c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticatedHeaderComponent_Template_button_click_1_listener($event) { return ctx.toggleMenu.emit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", _c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", _c4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "shopping_cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", _c5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticatedHeaderComponent_Template_button_click_12_listener($event) { return ctx.logout(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "power_settings_new");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx.username$), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, ctx.numTodos$));
        } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadge"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  margin: 0 14px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlZC9hdXRoZW50aWNhdGVkLWhlYWRlci9hdXRoZW50aWNhdGVkLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvYXV0aGVudGljYXRlZC1oZWFkZXIvYXV0aGVudGljYXRlZC1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwIDE0cHg7XHJcbn1cclxuIl19 */"] });
    return AuthenticatedHeaderComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticatedHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-authenticated-header',
                templateUrl: './authenticated-header.component.html',
                styleUrls: ['./authenticated-header.component.css']
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _todolist_todolist_service__WEBPACK_IMPORTED_MODULE_3__["TodolistService"] }]; }, { expandedMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], toggleMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/icon.es5.js");





var _c0 = [1, "expanded-menu"];
var _c1 = ["mat-icon-button", "", "aria-label", "Todos", 3, "click"];
var _c2 = ["mat-icon-button", "", "aria-label", "Learn more", 3, "click"];
var AuthenticatedMenuComponent = /** @class */ (function () {
    function AuthenticatedMenuComponent(router) {
        this.router = router;
        this.toggleMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AuthenticatedMenuComponent.prototype.goTo = function (pageLink) {
        this.toggleMenu.emit();
        this.router.navigate([pageLink]);
    };
    AuthenticatedMenuComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthenticatedMenuComponent, selectors: [["app-authenticated-menu"]], factory: function AuthenticatedMenuComponent_Factory(t) { return new (t || AuthenticatedMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); }, outputs: { toggleMenu: "toggleMenu" }, consts: 11, vars: 0, template: function AuthenticatedMenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", _c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticatedMenuComponent_Template_button_click_2_listener($event) { return ctx.goTo("/"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Todos ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", _c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticatedMenuComponent_Template_button_click_7_listener($event) { return ctx.goTo("/learn-more"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "help");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Learn more ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".expanded-menu[_ngcontent-%COMP%] {\r\n  width: 180px;\r\n}\r\nmat-icon[_ngcontent-%COMP%] {\r\n  margin-right: 14px;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  margin: 7px 14px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlZC9hdXRoZW50aWNhdGVkLW1lbnUvYXV0aGVudGljYXRlZC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRlZC9hdXRoZW50aWNhdGVkLW1lbnUvYXV0aGVudGljYXRlZC1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwYW5kZWQtbWVudSB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG59XHJcbm1hdC1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbn1cclxuYnV0dG9uIHtcclxuICBtYXJnaW46IDdweCAxNHB4O1xyXG59XHJcbiJdfQ== */"] });
    return AuthenticatedMenuComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticatedMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-authenticated-menu',
                templateUrl: './authenticated-menu.component.html',
                styleUrls: ['./authenticated-menu.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { toggleMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
/* harmony import */ var _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authenticated/authenticated.component */ "./src/app/authenticated/authenticated/authenticated.component.ts");
/* harmony import */ var _todolist_todolist_todolist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todolist/todolist/todolist.component */ "./src/app/authenticated/todolist/todolist/todolist.component.ts");
/* harmony import */ var _learn_more_learn_more_learn_more_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./learn-more/learn-more/learn-more.component */ "./src/app/authenticated/learn-more/learn-more/learn-more.component.ts");
/* harmony import */ var _not_found_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found/not-found.component */ "./src/app/authenticated/not-found/not-found/not-found.component.ts");









var authenticatedRoutes = [
    {
        path: '',
        component: _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticatedComponent"],
        canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
        children: [
            {
                path: '',
                canActivateChild: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
                children: [
                    {
                        path: '',
                        component: _todolist_todolist_todolist_component__WEBPACK_IMPORTED_MODULE_4__["TodolistComponent"]
                    },
                    {
                        path: 'learn-more',
                        component: _learn_more_learn_more_learn_more_component__WEBPACK_IMPORTED_MODULE_5__["LearnMoreComponent"]
                    },
                    {
                        path: '**',
                        component: _not_found_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"]
                    }
                ]
            }
        ]
    }
];
var AuthenticatedRoutingModule = /** @class */ (function () {
    function AuthenticatedRoutingModule() {
    }
    AuthenticatedRoutingModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthenticatedRoutingModule });
    AuthenticatedRoutingModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthenticatedRoutingModule_Factory(t) { return new (t || AuthenticatedRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(authenticatedRoutes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AuthenticatedRoutingModule;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticatedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticatedRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(authenticatedRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authenticated/authenticated.component */ "./src/app/authenticated/authenticated/authenticated.component.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/badge.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/icon.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/toolbar.es5.js");
/* harmony import */ var _authenticated_header_authenticated_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authenticated-header/authenticated-header.component */ "./src/app/authenticated/authenticated-header/authenticated-header.component.ts");
/* harmony import */ var _authenticated_menu_authenticated_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authenticated-menu/authenticated-menu.component */ "./src/app/authenticated/authenticated-menu/authenticated-menu.component.ts");
/* harmony import */ var _learn_more_learn_more_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./learn-more/learn-more.module */ "./src/app/authenticated/learn-more/learn-more.module.ts");
/* harmony import */ var _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.module */ "./src/app/authenticated/not-found/not-found.module.ts");
/* harmony import */ var _todolist_todolist_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./todolist/todolist.module */ "./src/app/authenticated/todolist/todolist.module.ts");
/* harmony import */ var _authenticated_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./authenticated-routing.module */ "./src/app/authenticated/authenticated-routing.module.ts");















var AuthenticatedModule = /** @class */ (function () {
    function AuthenticatedModule() {
    }
    AuthenticatedModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthenticatedModule });
    AuthenticatedModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthenticatedModule_Factory(t) { return new (t || AuthenticatedModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _authenticated_routing_module__WEBPACK_IMPORTED_MODULE_13__["AuthenticatedRoutingModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _learn_more_learn_more_module__WEBPACK_IMPORTED_MODULE_10__["LearnMoreModule"],
                _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_11__["NotFoundModule"],
                _todolist_todolist_module__WEBPACK_IMPORTED_MODULE_12__["TodolistModule"]
            ]] });
    return AuthenticatedModule;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticatedModule, { declarations: [_authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_2__["AuthenticatedComponent"],
        _authenticated_header_authenticated_header_component__WEBPACK_IMPORTED_MODULE_8__["AuthenticatedHeaderComponent"],
        _authenticated_menu_authenticated_menu_component__WEBPACK_IMPORTED_MODULE_9__["AuthenticatedMenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _authenticated_routing_module__WEBPACK_IMPORTED_MODULE_13__["AuthenticatedRoutingModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        _learn_more_learn_more_module__WEBPACK_IMPORTED_MODULE_10__["LearnMoreModule"],
        _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_11__["NotFoundModule"],
        _todolist_todolist_module__WEBPACK_IMPORTED_MODULE_12__["TodolistModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticatedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_2__["AuthenticatedComponent"],
                    _authenticated_header_authenticated_header_component__WEBPACK_IMPORTED_MODULE_8__["AuthenticatedHeaderComponent"],
                    _authenticated_menu_authenticated_menu_component__WEBPACK_IMPORTED_MODULE_9__["AuthenticatedMenuComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _authenticated_routing_module__WEBPACK_IMPORTED_MODULE_13__["AuthenticatedRoutingModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                    _learn_more_learn_more_module__WEBPACK_IMPORTED_MODULE_10__["LearnMoreModule"],
                    _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_11__["NotFoundModule"],
                    _todolist_todolist_module__WEBPACK_IMPORTED_MODULE_12__["TodolistModule"]
                ]
            }]
    }], null, null);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _authenticated_header_authenticated_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authenticated-header/authenticated-header.component */ "./src/app/authenticated/authenticated-header/authenticated-header.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/sidenav.es5.js");
/* harmony import */ var _authenticated_menu_authenticated_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authenticated-menu/authenticated-menu.component */ "./src/app/authenticated/authenticated-menu/authenticated-menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");






var _c0 = [3, "expandedMenu", "toggleMenu"];
var _c1 = ["mode", "side", 3, "opened"];
var _c2 = [3, "toggleMenu"];
var AuthenticatedComponent = /** @class */ (function () {
    function AuthenticatedComponent() {
        this.expandedMenu = false;
    }
    AuthenticatedComponent.prototype.toggleMenu = function () {
        this.expandedMenu = !this.expandedMenu;
    };
    AuthenticatedComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthenticatedComponent, selectors: [["app-authenticated"]], factory: function AuthenticatedComponent_Factory(t) { return new (t || AuthenticatedComponent)(); }, consts: 6, vars: 2, template: function AuthenticatedComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-authenticated-header", _c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleMenu", function AuthenticatedComponent_Template_app_authenticated_header_toggleMenu_0_listener($event) { return ctx.toggleMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav", _c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-authenticated-menu", _c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleMenu", function AuthenticatedComponent_Template_app_authenticated_menu_toggleMenu_3_listener($event) { return ctx.toggleMenu(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-sidenav-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expandedMenu", ctx.expandedMenu);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", ctx.expandedMenu);
        } }, directives: [_authenticated_header_authenticated_header_component__WEBPACK_IMPORTED_MODULE_1__["AuthenticatedHeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _authenticated_menu_authenticated_menu_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticatedMenuComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["mat-sidenav-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 64px;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\nmat-sidenav-content[_ngcontent-%COMP%] {\r\n  padding: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlZC9hdXRoZW50aWNhdGVkL2F1dGhlbnRpY2F0ZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7QUFDQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvYXV0aGVudGljYXRlZC9hdXRoZW50aWNhdGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDY0cHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxubWF0LXNpZGVuYXYtY29udGVudCB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcbiJdfQ== */"] });
    return AuthenticatedComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticatedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-authenticated',
                templateUrl: './authenticated.component.html',
                styleUrls: ['./authenticated.component.css']
            }]
    }], null, null);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _learn_more_learn_more_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./learn-more/learn-more.component */ "./src/app/authenticated/learn-more/learn-more/learn-more.component.ts");




var LearnMoreModule = /** @class */ (function () {
    function LearnMoreModule() {
    }
    LearnMoreModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LearnMoreModule });
    LearnMoreModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LearnMoreModule_Factory(t) { return new (t || LearnMoreModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
    return LearnMoreModule;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LearnMoreModule, { declarations: [_learn_more_learn_more_component__WEBPACK_IMPORTED_MODULE_2__["LearnMoreComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearnMoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_learn_more_learn_more_component__WEBPACK_IMPORTED_MODULE_2__["LearnMoreComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
            }]
    }], null, null);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var _c0 = [3, "click"];
var LearnMoreComponent = /** @class */ (function () {
    function LearnMoreComponent() {
    }
    LearnMoreComponent.prototype.resetToken = function () {
        window.validToken = Math.random()
            .toString(16)
            .substr(2);
    };
    LearnMoreComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LearnMoreComponent, selectors: [["app-learn-more"]], factory: function LearnMoreComponent_Factory(t) { return new (t || LearnMoreComponent)(); }, consts: 22, vars: 0, template: function LearnMoreComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "App");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " This app makes you able to maintain your todos up-to-date. Multiple users can access and edit the todos in parallel*. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "em");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Parallel: users have to share the same local storage (be on same browser)");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "APIs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " For the sake of the demo, all the API calls are mocked. In order to be as realistic as possible they are delayed and subject to failures. Any data that needs to be persisted such as Authentication tokens or todos are stored within the local storage of the browser in use. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Revoke token");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " The token used and stored to keep the user connected to the API can be revoked by updating the value of ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "em");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "window.validToken");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " in the console or by clicking ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", _c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LearnMoreComponent_Template_button_click_19_listener($event) { return ctx.resetToken(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " here");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ". ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvbGVhcm4tbW9yZS9sZWFybi1tb3JlL2xlYXJuLW1vcmUuY29tcG9uZW50LmNzcyJ9 */"] });
    return LearnMoreComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearnMoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-learn-more',
                templateUrl: './learn-more.component.html',
                styleUrls: ['./learn-more.component.css']
            }]
    }], null, null);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/card.es5.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/authenticated/not-found/not-found/not-found.component.ts");






var NotFoundModule = /** @class */ (function () {
    function NotFoundModule() {
    }
    NotFoundModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotFoundModule });
    NotFoundModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotFoundModule_Factory(t) { return new (t || NotFoundModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]]] });
    return NotFoundModule;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NotFoundModule, { declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]]
            }]
    }], null, null);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/button.es5.js");





var _c0 = ["id", "content"];
var _c1 = ["mat-card-image", "", "src", "https://upload.wikimedia.org/wikipedia/commons/0/07/Wrong_Way_Go_Back.svg", "alt", "Back home"];
var _c2 = ["mat-button", "", 3, "click"];
var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(router) {
        this.router = router;
    }
    NotFoundComponent.prototype.backHome = function () {
        this.router.navigate(['/']);
    };
    NotFoundComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], factory: function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); }, consts: 12, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", _c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Wrong way");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "The page you are looking for does not exist");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", _c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_button_click_10_listener($event) { return ctx.backHome(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Back home ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["#content[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 1em;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  max-width: 320px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlZC9ub3QtZm91bmQvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvbm90LWZvdW5kL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcbm1hdC1jYXJkIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWF4LXdpZHRoOiAzMjBweDtcclxufVxyXG4iXX0= */"] });
    return NotFoundComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/checkbox.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/icon.es5.js");







var _c0 = [3, "checked", "disabled", "click"];
var _c1 = [1, "todo-label"];
var _c2 = [4, "ngIf"];
var _c3 = ["mat-icon-button", "", "aria-label", "Delete todo", 3, "click"];
function TodolistListItemComponent_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var TodolistListItemComponent = /** @class */ (function () {
    function TodolistListItemComponent() {
        this.toggleTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TodolistListItemComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodolistListItemComponent, selectors: [["app-todolist-list-item"]], factory: function TodolistListItemComponent_Factory(t) { return new (t || TodolistListItemComponent)(); }, inputs: { state: "state", content: "content" }, outputs: { toggleTodo: "toggleTodo", removeTodo: "removeTodo" }, consts: 8, vars: 6, template: function TodolistListItemComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", _c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodolistListItemComponent_Template_mat_checkbox_click_1_listener($event) { return ctx.toggleTodo.emit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", _c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyling"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TodolistListItemComponent_mat_icon_4_Template, 2, 0, "mat-icon", _c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodolistListItemComponent_Template_button_click_5_listener($event) { return ctx.removeTodo.emit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "delete");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.content.done)("disabled", ctx.state !== "noop");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("remove", ctx.state === "remove");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("noaction", ctx.state !== "noop");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstylingApply"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content.task);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state !== "noop");
        } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: ["mat-card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.todo-label[_ngcontent-%COMP%] {\r\n  flex-grow: 1;\r\n  margin-left: 14px;\r\n}\r\n.todo-label.noaction[_ngcontent-%COMP%] {\r\n  color: #777;\r\n}\r\n.todo-label.remove[_ngcontent-%COMP%] {\r\n  text-decoration: line-through;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlZC90b2RvbGlzdC90b2RvbGlzdC1saXN0LWl0ZW0vdG9kb2xpc3QtbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvdG9kb2xpc3QvdG9kb2xpc3QtbGlzdC1pdGVtL3RvZG9saXN0LWxpc3QtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4udG9kby1sYWJlbCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG59XHJcbi50b2RvLWxhYmVsLm5vYWN0aW9uIHtcclxuICBjb2xvcjogIzc3NztcclxufVxyXG4udG9kby1sYWJlbC5yZW1vdmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcbiJdfQ== */"] });
    return TodolistListItemComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodolistListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todolist-list-item',
                templateUrl: './todolist-list-item.component.html',
                styleUrls: ['./todolist-list-item.component.css']
            }]
    }], null, { state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], toggleTodo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], removeTodo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _todolist_list_item_todolist_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todolist-list-item/todolist-list-item.component */ "./src/app/authenticated/todolist/todolist-list-item/todolist-list-item.component.ts");




var _c0 = [3, "state", "content", "toggleTodo", "removeTodo", 4, "ngFor", "ngForOf"];
var _c1 = [3, "state", "content", "toggleTodo", "removeTodo"];
function TodolistListComponent_app_todolist_list_item_1_Template(rf, ctx) { if (rf & 1) {
    var _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-todolist-list-item", _c1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleTodo", function TodolistListComponent_app_todolist_list_item_1_Template_app_todolist_list_item_toggleTodo_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121); var todo_r119 = ctx.$implicit; var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r120.toggleTodo.emit(todo_r119.data.guid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removeTodo", function TodolistListComponent_app_todolist_list_item_1_Template_app_todolist_list_item_removeTodo_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r121); var todo_r119 = ctx.$implicit; var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r122.removeTodo.emit(todo_r119.data.guid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var todo_r119 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", todo_r119.state)("content", todo_r119.data);
} }
var TodolistListComponent = /** @class */ (function () {
    function TodolistListComponent() {
        this.toggleTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TodolistListComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodolistListComponent, selectors: [["app-todolist-list"]], factory: function TodolistListComponent_Factory(t) { return new (t || TodolistListComponent)(); }, inputs: { todos: "todos" }, outputs: { toggleTodo: "toggleTodo", removeTodo: "removeTodo" }, consts: 2, vars: 1, template: function TodolistListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodolistListComponent_app_todolist_list_item_1_Template, 1, 2, "app-todolist-list-item", _c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todos);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _todolist_list_item_todolist_list_item_component__WEBPACK_IMPORTED_MODULE_2__["TodolistListItemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvdG9kb2xpc3QvdG9kb2xpc3QtbGlzdC90b2RvbGlzdC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
    return TodolistListComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodolistListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todolist-list',
                templateUrl: './todolist-list.component.html',
                styleUrls: ['./todolist-list.component.css']
            }]
    }], null, { todos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], toggleTodo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], removeTodo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/input.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/icon.es5.js");







var _c0 = [1, "add-todo-area"];
var _c1 = [1, "add-todo-field"];
var _c2 = ["matInput", "", "placeholder", "Add a new todo", "value", "", 3, "value", "input", "keyup.enter"];
var _c3 = ["taskNameBox", ""];
var _c4 = [4, "ngIf"];
var _c5 = ["mat-button", "", 3, "disabled", "click"];
function TodolistNewItemComponent_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var TodolistNewItemComponent = /** @class */ (function () {
    function TodolistNewItemComponent() {
        this.addTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.taskName = '';
    }
    TodolistNewItemComponent.prototype.add = function () {
        this.addTodo.emit(this.taskName);
        this.taskName = '';
    };
    TodolistNewItemComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodolistNewItemComponent, selectors: [["app-todolist-new-item"]], factory: function TodolistNewItemComponent_Factory(t) { return new (t || TodolistNewItemComponent)(); }, inputs: { ready: "ready" }, outputs: { addTodo: "addTodo" }, consts: 7, vars: 3, template: function TodolistNewItemComponent_Template(rf, ctx) { if (rf & 1) {
            var _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", _c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", _c2, _c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TodolistNewItemComponent_Template_input_input_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r117); var _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.taskName = _r115.value; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function TodolistNewItemComponent_Template_input_keyup_enter_2_listener($event) { return ctx.add(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TodolistNewItemComponent_mat_icon_4_Template, 2, 0, "mat-icon", _c4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", _c5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodolistNewItemComponent_Template_button_click_5_listener($event) { return ctx.add(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Add ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.taskName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.ready);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.taskName === "");
        } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".add-todo-area[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n.add-todo-field[_ngcontent-%COMP%] {\r\n  flex-grow: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRlZC90b2RvbGlzdC90b2RvbGlzdC1uZXctaXRlbS90b2RvbGlzdC1uZXctaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hdXRoZW50aWNhdGVkL3RvZG9saXN0L3RvZG9saXN0LW5ldy1pdGVtL3RvZG9saXN0LW5ldy1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLXRvZG8tYXJlYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uYWRkLXRvZG8tZmllbGQge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG4iXX0= */"] });
    return TodolistNewItemComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodolistNewItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todolist-new-item',
                templateUrl: './todolist-new-item.component.html',
                styleUrls: ['./todolist-new-item.component.css']
            }]
    }], null, { ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addTodo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _todolist_todolist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolist/todolist.component */ "./src/app/authenticated/todolist/todolist/todolist.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/input.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _todolist_new_item_todolist_new_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todolist-new-item/todolist-new-item.component */ "./src/app/authenticated/todolist/todolist-new-item/todolist-new-item.component.ts");
/* harmony import */ var _todolist_list_todolist_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todolist-list/todolist-list.component */ "./src/app/authenticated/todolist/todolist-list/todolist-list.component.ts");
/* harmony import */ var _todolist_list_item_todolist_list_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todolist-list-item/todolist-list-item.component */ "./src/app/authenticated/todolist/todolist-list-item/todolist-list-item.component.ts");













var TodolistModule = /** @class */ (function () {
    function TodolistModule() {
    }
    TodolistModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TodolistModule });
    TodolistModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TodolistModule_Factory(t) { return new (t || TodolistModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]
            ]] });
    return TodolistModule;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TodolistModule, { declarations: [_todolist_todolist_component__WEBPACK_IMPORTED_MODULE_2__["TodolistComponent"],
        _todolist_new_item_todolist_new_item_component__WEBPACK_IMPORTED_MODULE_9__["TodolistNewItemComponent"],
        _todolist_list_todolist_list_component__WEBPACK_IMPORTED_MODULE_10__["TodolistListComponent"],
        _todolist_list_item_todolist_list_item_component__WEBPACK_IMPORTED_MODULE_11__["TodolistListItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodolistModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _todolist_todolist_component__WEBPACK_IMPORTED_MODULE_2__["TodolistComponent"],
                    _todolist_new_item_todolist_new_item_component__WEBPACK_IMPORTED_MODULE_9__["TodolistNewItemComponent"],
                    _todolist_list_todolist_list_component__WEBPACK_IMPORTED_MODULE_10__["TodolistListComponent"],
                    _todolist_list_item_todolist_list_item_component__WEBPACK_IMPORTED_MODULE_11__["TodolistListItemComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"]
                ]
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/authenticated/todolist/todolist.service.ts":
/*!************************************************************!*\
  !*** ./src/app/authenticated/todolist/todolist.service.ts ***!
  \************************************************************/
/*! exports provided: TodoSyncState, TodolistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoSyncState", function() { return TodoSyncState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistService", function() { return TodolistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api */ "./src/api/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");







var TodoSyncState;
(function (TodoSyncState) {
    TodoSyncState["Noop"] = "noop";
    TodoSyncState["Add"] = "add";
    TodoSyncState["Edit"] = "edit";
    TodoSyncState["Remove"] = "remove";
})(TodoSyncState || (TodoSyncState = {}));
var TodolistService = /** @class */ (function () {
    function TodolistService(authService, snackBar) {
        var _this = this;
        this.authService = authService;
        this.snackBar = snackBar;
        this.token = '';
        this.requesters = new Set();
        this.todos = [];
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({ ready: false, todos: this.todos });
        this.state$ = this.subject.asObservable();
        this.authService.state$.subscribe(function (s) {
            _this.token = s.token;
            if (_this.requesters.size !== 0) {
                _this.unregisterTodoListener();
                _this.registerTodoListener();
            }
        });
    }
    TodolistService.prototype.updateTodos = function (todos) {
        this.todos = todos;
        this.subject.next({ ready: true, todos: todos });
    };
    TodolistService.prototype.addTodo = function (task) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var todo, r;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        todo = {
                            guid: Math.random()
                                .toString(16)
                                .substr(2),
                            task: task,
                            done: false
                        };
                        this.updateTodos(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.todos, [{ state: TodoSyncState.Add, data: todo }]));
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_2__["addTodo"](this.token, todo)];
                    case 1:
                        r = _a.sent();
                        if (r) {
                            this.updateTodos(this.todos.map(function (t) {
                                return t.data.guid === todo.guid
                                    ? { state: TodoSyncState.Noop, data: todo }
                                    : t;
                            }));
                        }
                        else {
                            this.updateTodos(this.todos.filter(function (t) { return t.data.guid !== todo.guid; }));
                            this.snackBar.open("Failed to add todo: " + todo.task, '', {
                                duration: 1000
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TodolistService.prototype.toggleTodo = function (guid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var todo, newData, r;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        todo = this.todos.find(function (t) { return t.data.guid === guid && t.state === TodoSyncState.Noop; });
                        if (!todo) {
                            this.snackBar.open("No todo available for modification given guid " + guid, '', {
                                duration: 1000
                            });
                            return [2 /*return*/];
                        }
                        newData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, todo.data, { done: !todo.data.done });
                        this.updateTodos(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.todos.map(function (t) {
                            return t.data.guid === guid
                                ? {
                                    state: TodoSyncState.Edit,
                                    data: newData
                                }
                                : t;
                        })));
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_2__["editTodo"](this.token, newData)];
                    case 1:
                        r = _a.sent();
                        if (r) {
                            this.updateTodos(this.todos.map(function (t) {
                                return t.data.guid === guid
                                    ? {
                                        state: TodoSyncState.Noop,
                                        data: newData
                                    }
                                    : t;
                            }));
                        }
                        else {
                            this.updateTodos(this.todos.map(function (t) {
                                return t.data.guid === guid
                                    ? { state: TodoSyncState.Noop, data: todo.data }
                                    : t;
                            }));
                            this.snackBar.open("Failed to edit todo: " + todo.data.task, '', {
                                duration: 1000
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TodolistService.prototype.removeTodo = function (guid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var todo, r;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        todo = this.todos.find(function (t) { return t.data.guid === guid && t.state === TodoSyncState.Noop; });
                        if (!todo) {
                            this.snackBar.open("No todo available for modification given guid " + guid, '', {
                                duration: 1000
                            });
                            return [2 /*return*/];
                        }
                        this.updateTodos(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.todos.map(function (t) {
                            return t.data.guid === guid
                                ? {
                                    state: TodoSyncState.Remove,
                                    data: todo.data
                                }
                                : t;
                        })));
                        return [4 /*yield*/, _api__WEBPACK_IMPORTED_MODULE_2__["removeTodo"](this.token, todo.data)];
                    case 1:
                        r = _a.sent();
                        if (r) {
                            this.updateTodos(this.todos.filter(function (t) { return t.data.guid !== guid; }));
                        }
                        else {
                            this.updateTodos(this.todos.map(function (t) {
                                return t.data.guid === guid
                                    ? { state: TodoSyncState.Noop, data: todo.data }
                                    : t;
                            }));
                            this.snackBar.open("Failed to remove todo: " + todo.data.task, '', {
                                duration: 1000
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TodolistService.prototype.registerTodoListener = function () {
        var _this = this;
        this.todoListenerHandle = _api__WEBPACK_IMPORTED_MODULE_2__["addTodoListener"](this.token, function (todos) {
            var todosBeingAdded = _this.todos
                .filter(function (t) { return t.state === TodoSyncState.Add; })
                .reduce(function (acc, t) {
                var _a;
                return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, acc, (_a = {}, _a[t.data.guid] = t.data, _a)));
            }, {});
            var todosBeingEdited = _this.todos
                .filter(function (t) { return t.state === TodoSyncState.Edit; })
                .reduce(function (acc, t) {
                var _a;
                return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, acc, (_a = {}, _a[t.data.guid] = t.data, _a)));
            }, {});
            var todosBeingRemoved = _this.todos
                .filter(function (t) { return t.state === TodoSyncState.Remove; })
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
                        state: TodoSyncState.Edit,
                        data: todosBeingEdited[t.guid]
                    };
                }
                if (todosBeingRemoved[t.guid]) {
                    return {
                        state: TodoSyncState.Remove,
                        data: todosBeingRemoved[t.guid]
                    };
                }
                return { state: TodoSyncState.Noop, data: t };
            })
                .concat(_this.todos.filter(function (t) { return t.state === TodoSyncState.Add; })); // Add
            _this.updateTodos(updatedTodos);
        }, function () {
            _this.snackBar.open('Revoked token, connection lost', '', {
                duration: 1000
            });
            _this.authService.logout(true);
        });
    };
    TodolistService.prototype.unregisterTodoListener = function () {
        _api__WEBPACK_IMPORTED_MODULE_2__["removeTodoListener"](this.todoListenerHandle);
        this.subject.next({ ready: false, todos: this.todos });
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
    TodolistService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TodolistService, factory: function TodolistService_Factory(t) { return new (t || TodolistService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); }, providedIn: 'root' });
    return TodolistService;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TodolistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }]; }, null);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _todolist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todolist.service */ "./src/app/authenticated/todolist/todolist.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _todolist_new_item_todolist_new_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../todolist-new-item/todolist-new-item.component */ "./src/app/authenticated/todolist/todolist-new-item/todolist-new-item.component.ts");
/* harmony import */ var _todolist_list_todolist_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../todolist-list/todolist-list.component */ "./src/app/authenticated/todolist/todolist-list/todolist-list.component.ts");







var _c0 = [4, "ngIf", "ngIfElse"];
var _c1 = ["waitingForTodos", ""];
var _c2 = [3, "ready", "addTodo"];
var _c3 = [3, "todos", "toggleTodo", "removeTodo"];
function TodolistComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-todolist-new-item", _c2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addTodo", function TodolistComponent_div_0_Template_app_todolist_new_item_addTodo_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r111.addTodo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-todolist-list", _c3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleTodo", function TodolistComponent_div_0_Template_app_todolist_list_toggleTodo_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r113.toggleTodo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removeTodo", function TodolistComponent_div_0_Template_app_todolist_list_removeTodo_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r112); var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r114.removeTodo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var todoState_r110 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ready", todoState_r110.ready);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todos", todoState_r110.todos);
} }
function TodolistComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Waiting for todos...");
} }
var TodolistComponent = /** @class */ (function () {
    function TodolistComponent(authService, todolistService) {
        this.authService = authService;
        this.todolistService = todolistService;
    }
    TodolistComponent.prototype.ngOnInit = function () {
        this.todoState$ = this.todolistService.state$;
        this.todolistService.addRequester(this);
    };
    TodolistComponent.prototype.ngOnDestroy = function () {
        this.todolistService.removeRequester(this);
    };
    TodolistComponent.prototype.addTodo = function (taskName) {
        this.todolistService.addTodo(taskName);
    };
    TodolistComponent.prototype.toggleTodo = function (guid) {
        this.todolistService.toggleTodo(guid);
    };
    TodolistComponent.prototype.removeTodo = function (guid) {
        this.todolistService.removeTodo(guid);
    };
    TodolistComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodolistComponent, selectors: [["app-todolist"]], factory: function TodolistComponent_Factory(t) { return new (t || TodolistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_todolist_service__WEBPACK_IMPORTED_MODULE_2__["TodolistService"])); }, consts: 4, vars: 4, template: function TodolistComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TodolistComponent_div_0_Template, 3, 2, "div", _c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TodolistComponent_ng_template_2_Template, 1, 0, "ng-template", null, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            var _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.todoState$))("ngIfElse", _r108);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _todolist_new_item_todolist_new_item_component__WEBPACK_IMPORTED_MODULE_4__["TodolistNewItemComponent"], _todolist_list_todolist_list_component__WEBPACK_IMPORTED_MODULE_5__["TodolistListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvdG9kb2xpc3QvdG9kb2xpc3QvdG9kb2xpc3QuY29tcG9uZW50LmNzcyJ9 */"] });
    return TodolistComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodolistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todolist',
                templateUrl: './todolist.component.html',
                styleUrls: ['./todolist.component.css']
            }]
    }], function () { return [{ type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _todolist_service__WEBPACK_IMPORTED_MODULE_2__["TodolistService"] }]; }, null);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/form-field.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login/login.component.ts");









var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
    LoginModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]
            ]] });
    return LoginModule;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]
                ]
            }]
    }], null, null);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/card.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/icon.es5.js");













var _c0 = ["id", "content"];
var _c1 = [4, "ngIf"];
var _c2 = ["mat-card-image", "", "src", "https://upload.wikimedia.org/wikipedia/commons/f/f6/Eiffel_Tower_and_the_Trocadero%2C_Exposition_Universal%2C_1900%2C_Paris%2C_France.jpg", "alt", "Eiffel Tower"];
var _c3 = ["matInput", "", "placeholder", "Username", 3, "value", "input", "keyup.enter"];
var _c4 = ["usernameBox", ""];
var _c5 = ["matInput", "", "placeholder", "Password", 3, "type", "value", "input", "keyup.enter"];
var _c6 = ["passwordBox", ""];
var _c7 = ["mat-icon-button", "", "matSuffix", "", 3, "click"];
var _c8 = ["mat-button", "", 3, "disabled", "click"];
function LoginComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", _c2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to TodoList Angular");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Try with password: \u201Cpassword\u201D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", _c3, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function LoginComponent_mat_card_1_Template_input_input_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r100.username = _r98.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function LoginComponent_mat_card_1_Template_input_keyup_enter_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); var authStatus_r97 = ctx.ngIf; var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r102.login(authStatus_r97); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", _c5, _c6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function LoginComponent_mat_card_1_Template_input_input_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r103.password = _r99.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function LoginComponent_mat_card_1_Template_input_keyup_enter_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); var authStatus_r97 = ctx.ngIf; var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r104.login(authStatus_r97); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_mat_card_1_Template_button_click_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.hide = !ctx_r105.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", _c8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_mat_card_1_Template_button_click_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101); var authStatus_r97 = ctx.ngIf; var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r106.login(authStatus_r97); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var authStatus_r97 = ctx.ngIf;
    var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r96.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r96.hide ? "password" : "text")("value", ctx_r96.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx_r96.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r96.hide ? "visibility_off" : "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r96.canLogin(authStatus_r97));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r96.onGoingLogin(authStatus_r97) ? "..." : "Login", " ");
} }
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, route, authService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.username = '';
        this.password = '';
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStatus$ = this.authService.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (s) { return s.status; }));
        this.subscription.add(this.route.queryParams.subscribe(function (params) { return (_this.redirect = params.redirect); }));
        this.subscription.add(this.authService.state$.subscribe(function (s) {
            if (s.status !== _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthStatus"].Authenticated) {
                return;
            }
            _this.router.navigate([_this.redirect || '/']);
        }));
    };
    LoginComponent.prototype.canLogin = function (authStatus) {
        return (authStatus === _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthStatus"].NonAuthenticated &&
            this.username.length > 0 &&
            this.password.length > 0);
    };
    LoginComponent.prototype.onGoingLogin = function (authStatus) {
        return authStatus === _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthStatus"].OnGoingAuthentication;
    };
    LoginComponent.prototype.login = function (authStatus) {
        if (!this.canLogin(authStatus)) {
            return;
        }
        this.authService.login(this.username, this.password);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    LoginComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], factory: function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); }, consts: 3, vars: 3, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", _c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_mat_card_1_Template, 20, 8, "mat-card", _c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵselect"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.authStatus$));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["#content[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 1em;\r\n}\r\nmat-card[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  max-width: 320px;\r\n}\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxufVxyXG5tYXQtY2FyZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1heC13aWR0aDogMzIwcHg7XHJcbn1cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
    return LoginComponent;
}());

/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/dubzzz/todolist-front/todolist-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map