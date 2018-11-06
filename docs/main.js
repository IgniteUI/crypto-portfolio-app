(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _block_grid_block_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block-grid/block-grid.component */ "./src/app/block-grid/block-grid.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email/email.component */ "./src/app/email/email.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./block-list/block-list.component */ "./src/app/block-list/block-list.component.ts");










var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"], data: { text: 'My portfolio', iconName: 'account_box' },
        canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], data: { text: 'Top 100 Crypto`s', iconName: 'call_made' } },
    { path: 'block-grid', component: _block_grid_block_grid_component__WEBPACK_IMPORTED_MODULE_3__["BlockGridComponent"], data: { text: 'Grid view', iconName: 'grid_on', subItem: true } },
    { path: 'block-list', component: _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_9__["BlockListComponent"], data: { text: 'List view', iconName: 'list_alt', subItem: true } },
    { path: 'statistics', component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_2__["StatisticsComponent"],
        data: { text: 'Volatility', iconName: 'insert_chart_outlined', cryptoName: 'BTC', daysCount: 100 } },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'email', component: _email_email_component__WEBPACK_IMPORTED_MODULE_6__["EmailComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



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
/* harmony import */ var _app_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.ngstyle */ "./src/app/app.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../node_modules/igniteui-angular/igniteui-angular.ngfactory */ "./node_modules/igniteui-angular/igniteui-angular.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_AppComponent = [_app_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_AppComponent, data: {} });

function View_AppComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0\u00A0\u00A0\u00A0"]))], null, null); }
function View_AppComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "span", [["igxDrawerItem", ""], ["igxRipple", ""], ["routerLinkActive", "igx-nav-drawer__item--active"]], [[2, "igx-nav-drawer__item", null], [2, "igx-nav-drawer__item--active", null], [2, "igx-nav-drawer__item--header", null]], [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("mousedown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onMouseDown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, [[4, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxNavDrawerItemDirective"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxRippleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { rippleColor: [0, "rippleColor"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "igx-icon", [["fontSet", "material"]], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxIconService"]], { font: [0, "font"], iconName: [1, "iconName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""]))], function (_ck, _v) { var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.path, ""); _ck(_v, 1, 0, currVal_3); var currVal_4 = "igx-nav-drawer__item--active"; _ck(_v, 2, 0, currVal_4); var currVal_5 = ""; _ck(_v, 6, 0, currVal_5); var currVal_6 = _v.context.$implicit.subItem; _ck(_v, 8, 0, currVal_6); var currVal_12 = "material"; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.icon, ""); _ck(_v, 10, 0, currVal_12, currVal_13); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).defaultCSS; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).currentCSS; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).headerCSS; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).cssClass; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ariaHidden; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).id; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).getInactive; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).getIconColor; _ck(_v, 9, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_14 = _v.context.$implicit.name; _ck(_v, 12, 0, currVal_14); }); }
function View_AppComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["igxDrawerItem", ""]], [[2, "igx-nav-drawer__item", null], [2, "igx-nav-drawer__item--active", null], [2, "igx-nav-drawer__item--header", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxNavDrawerItemDirective"], [], { isHeader: [0, "isHeader"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_3 = true; _ck(_v, 1, 0, currVal_3); var currVal_4 = _co.topNavLinks; _ck(_v, 4, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).defaultCSS; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).currentCSS; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).headerCSS; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_AppComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "theme-chooser__item--light"], ["title", "Light Theme"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.changeTheme() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_AppComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "theme-chooser__item--dark"], ["title", "Dark Theme"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.changeTheme(true) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], null, null); }
function View_AppComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["Hey ", "!"]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.ngIf.displayName; _ck(_v, 1, 0, currVal_0); }); }
function View_AppComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["Hey ", "!"]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.ngIf.displayName.split(" ")[0]; _ck(_v, 1, 0, currVal_0); }); }
function View_AppComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "account-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "button", [["igxButton", "raised"], ["igxRipple", ""]], [[1, "role", 0]], [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onMouseDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.logout() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxRippleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { rippleColor: [0, "rippleColor"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Logout"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.innerWidth > 650); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.innerWidth < 650); _ck(_v, 4, 0, currVal_1); var currVal_3 = ""; _ck(_v, 6, 0, currVal_3); var currVal_4 = "raised"; _ck(_v, 7, 0, currVal_4); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).role; _ck(_v, 5, 0, currVal_2); }); }
function View_AppComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "button", [["igxButton", "raised"], ["igxRipple", ""]], [[1, "role", 0]], [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onMouseDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.login() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxRippleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { rippleColor: [0, "rippleColor"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Login"]))], function (_ck, _v) { var currVal_1 = ""; _ck(_v, 2, 0, currVal_1); var currVal_2 = "raised"; _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).role; _ck(_v, 1, 0, currVal_0); }); }
function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { navdrawer: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 27, "div", [["class", "main"], ["igxLayout", ""]], [[4, "display", null], [4, "flex-wrap", null], [4, "justify-content", null], [4, "align-items", null], [4, "flex-direction", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxLayoutDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "igx-nav-drawer", [["id", "project-menu"], ["pinThreshold", "5000"], ["width", "280px"]], [[8, "className", 0], [1, "id", 0], [4, "flexBasis", null], [4, "order", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IgxNavigationDrawerComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IgxNavigationDrawerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcg"], igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcg"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 1818624, [[1, 4], ["nav", 4]], 2, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxNavigationDrawerComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxNavigationService"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"], igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["ɵcg"]], { id: [0, "id"], enableGestures: [1, "enableGestures"], pin: [2, "pin"], pinThreshold: [3, "pinThreshold"], width: [4, "width"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { miniTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { contentTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_AppComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, [[3, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxNavDrawerTemplateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 18, "div", [["igxFlex", ""]], [[4, "flex", null], [4, "order", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxFlexDirective"], [], { flex: [0, "flex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 12, "igx-navbar", [["actionButtonIcon", "menu"], ["igxFlex", ""], ["title", "Crypto Blockfolio App"]], [[1, "id", 0], [4, "flex", null], [4, "order", null]], [[null, "onAction"]], function (_v, en, $event) { var ad = true; if (("onAction" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IgxNavbarComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IgxNavbarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 49152, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxNavbarComponent"], [], { actionButtonIcon: [0, "actionButtonIcon"], title: [1, "title"] }, { onAction: "onAction" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxFlexDirective"], [], { flex: [0, "flex"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 4, "div", [["class", "theme-chooser"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 4, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_AppComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["showLogin", 2]], null, 0, null, View_AppComponent_9)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 3, "div", [["class", "content"], ["igxLayout", ""], ["igxLayoutJustify", "center"]], [[4, "display", null], [4, "flex-wrap", null], [4, "justify-content", null], [4, "align-items", null], [4, "flex-direction", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxLayoutDirective"], [], { justify: [0, "justify"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_9 = "project-menu"; var currVal_10 = "true"; var currVal_11 = "false"; var currVal_12 = "5000"; var currVal_13 = "280px"; _ck(_v, 5, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_16 = ""; _ck(_v, 11, 0, currVal_16); var currVal_20 = "menu"; var currVal_21 = "Crypto Blockfolio App"; _ck(_v, 13, 0, currVal_20, currVal_21); var currVal_22 = ""; _ck(_v, 14, 0, currVal_22); var currVal_23 = _co.darkTheme; _ck(_v, 17, 0, currVal_23); var currVal_24 = !_co.darkTheme; _ck(_v, 19, 0, currVal_24); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 22, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).transform(_co.afAuth.authState)); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24); _ck(_v, 22, 0, currVal_25, currVal_26); var currVal_32 = "center"; _ck(_v, 26, 0, currVal_32); _ck(_v, 28, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).display; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).flexwrap; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).justifycontent; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).align; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).direction; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).cssClass; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).id; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).flexWidth; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).isPinnedRight; _ck(_v, 3, 0, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).style; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).itemorder; _ck(_v, 10, 0, currVal_14, currVal_15); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).id; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).style; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).itemorder; _ck(_v, 12, 0, currVal_17, currVal_18, currVal_19); var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).display; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).flexwrap; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).justifycontent; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).align; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).direction; _ck(_v, 25, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31); }); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onResize($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.ngstyle.js":
/*!***********************************************!*\
  !*** ./src/app/app.component.scss.ngstyle.js ***!
  \***********************************************/
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
var styles = [".theme-chooser {\n  display: flex; }\n  .theme-chooser__item--light {\n    position: relative;\n    width: 34px;\n    height: 34px;\n    border-radius: 17px;\n    overflow: hidden;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    border: 2px solid white;\n    cursor: pointer;\n    transition: box-shadow .25s ease-out; }\n  .theme-chooser__item--light::before, .theme-chooser__item--light::after {\n      position: absolute;\n      content: '';\n      width: 50%;\n      top: 0;\n      bottom: 0; }\n  .theme-chooser__item--light::before {\n      left: 0;\n      background: #8049ff; }\n  .theme-chooser__item--light::after {\n      right: 0;\n      background: #E29C45; }\n  .theme-chooser__item--light:hover {\n      box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.24); }\n  .theme-chooser__item--dark {\n    position: relative;\n    width: 34px;\n    height: 34px;\n    border-radius: 17px;\n    overflow: hidden;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    border: 2px solid white;\n    cursor: pointer;\n    transition: box-shadow .25s ease-out; }\n  .theme-chooser__item--dark::before, .theme-chooser__item--dark::after {\n      position: absolute;\n      content: '';\n      width: 50%;\n      top: 0;\n      bottom: 0; }\n  .theme-chooser__item--dark::before {\n      left: 0;\n      background: #000; }\n  .theme-chooser__item--dark::after {\n      right: 0;\n      background: #72da67; }\n  .theme-chooser__item--dark:hover {\n      box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.24); }\n  .main {\n  width: 100%; }\n  .content {\n  flex: 1 1 100%; }\n  .temp {\n  vertical-align: top; }\n  .igx-nav-drawer__overlay {\n  position: fixed; }\n  igx-navbar {\n  height: 56px;\n  display: block; }\n  .igx-navbar {\n  position: fixed; }\n  .account-container span {\n  margin-right: 13px; }\n"];



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(router, afAuth) {
        var _this = this;
        this.router = router;
        this.afAuth = afAuth;
        this.darkTheme = false;
        this.topNavLinks = [];
        for (var _i = 0, routes_1 = _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routes"]; _i < routes_1.length; _i++) {
            var route = routes_1[_i];
            if (route.path && route.data && route.path.indexOf('*') === -1) {
                this.topNavLinks.push({
                    name: route.data.text,
                    path: '/' + route.path,
                    icon: route.data.iconName,
                    subItem: route.data.subItem
                });
            }
        }
        this.afAuth.authState.subscribe(function (auth) {
            if (auth) {
                _this.name = auth;
            }
        });
    }
    AppComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.body.classList.add('light-theme');
        document.body.style.background = '#eee';
        this.router.events
            .filter(function (x) { return x instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]; })
            .subscribe(function (event) {
            if (event.url !== '/' && !_this.navdrawer.pin) {
                // Close drawer when selecting a view on mobile (unpinned)
                _this.navdrawer.close();
            }
        });
        this.innerWidth = window.innerWidth;
    };
    AppComponent.prototype.changeTheme = function (dark) {
        if (dark) {
            this.darkTheme = true;
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            document.body.style.background = '#414141';
        }
        else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            document.body.style.background = '#eee';
            this.darkTheme = false;
        }
    };
    AppComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.router.navigateByUrl('/home');
    };
    AppComponent.prototype.login = function () {
        this.router.navigate(['/login']);
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
/* harmony import */ var _portfolio_portfolio_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio.component.ngfactory */ "./src/app/portfolio/portfolio.component.ngfactory.js");
/* harmony import */ var _home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component.ngfactory */ "./src/app/home/home.component.ngfactory.js");
/* harmony import */ var _block_grid_block_grid_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block-grid/block-grid.component.ngfactory */ "./src/app/block-grid/block-grid.component.ngfactory.js");
/* harmony import */ var _block_list_block_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block-list/block-list.component.ngfactory */ "./src/app/block-list/block-list.component.ngfactory.js");
/* harmony import */ var _statistics_statistics_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./statistics/statistics.component.ngfactory */ "./src/app/statistics/statistics.component.ngfactory.js");
/* harmony import */ var _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component.ngfactory */ "./src/app/login/login.component.ngfactory.js");
/* harmony import */ var _email_email_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./email/email.component.ngfactory */ "./src/app/email/email.component.ngfactory.js");
/* harmony import */ var _signup_signup_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signup/signup.component.ngfactory */ "./src/app/signup/signup.component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_core_ES5_igx_template_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-core/ES5/igx-template-content-component.ngfactory */ "./node_modules/igniteui-angular-core/ES5/igx-template-content-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_line_series_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-line-series-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-line-series-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_area_series_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-area-series-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-area-series-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_column_series_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-column-series-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-column-series-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_numeric_y_axis_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-numeric-y-axis-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-numeric-y-axis-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_time_x_axis_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-time-x-axis-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-time-x-axis-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_category_x_axis_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-category-x-axis-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-category-x-axis-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_ordinal_time_x_axis_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-ordinal-time-x-axis-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-ordinal-time-x-axis-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_percent_change_y_axis_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-percent-change-y-axis-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-percent-change-y-axis-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_financial_price_series_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-financial-price-series-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-financial-price-series-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_absolute_volume_oscillator_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-absolute-volume-oscillator-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-absolute-volume-oscillator-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_accumulation_distribution_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-accumulation-distribution-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-accumulation-distribution-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_average_directional_index_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-average-directional-index-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-average-directional-index-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_average_true_range_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-average-true-range-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-average-true-range-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_bollinger_band_width_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-bollinger-band-width-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-bollinger-band-width-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_chaikin_oscillator_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-chaikin-oscillator-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-chaikin-oscillator-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_chaikin_volatility_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-chaikin-volatility-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-chaikin-volatility-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_commodity_channel_index_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-commodity-channel-index-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-commodity-channel-index-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_detrended_price_oscillator_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-detrended-price-oscillator-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-detrended-price-oscillator-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_force_index_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-force-index-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-force-index-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_full_stochastic_oscillator_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-full-stochastic-oscillator-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-full-stochastic-oscillator-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_market_facilitation_index_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-market-facilitation-index-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-market-facilitation-index-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_mass_index_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-mass-index-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-mass-index-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_median_price_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-median-price-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-median-price-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_money_flow_index_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-money-flow-index-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-money-flow-index-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_moving_average_convergence_divergence_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-moving-average-convergence-divergence-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-moving-average-convergence-divergence-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_negative_volume_index_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-negative-volume-index-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-negative-volume-index-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_on_balance_volume_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-on-balance-volume-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-on-balance-volume-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_percentage_price_oscillator_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-percentage-price-oscillator-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-percentage-price-oscillator-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_percentage_volume_oscillator_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-percentage-volume-oscillator-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-percentage-volume-oscillator-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_positive_volume_index_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-positive-volume-index-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-positive-volume-index-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_price_volume_trend_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-price-volume-trend-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-price-volume-trend-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_rate_of_change_and_momentum_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-rate-of-change-and-momentum-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-rate-of-change-and-momentum-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_relative_strength_index_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-relative-strength-index-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-relative-strength-index-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_slow_stochastic_oscillator_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-slow-stochastic-oscillator-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-slow-stochastic-oscillator-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_standard_deviation_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-standard-deviation-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-standard-deviation-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_stoch_rsi_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-stoch-rsi-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-stoch-rsi-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_trix_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-trix-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-trix-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_typical_price_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-typical-price-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-typical-price-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_ultimate_oscillator_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-ultimate-oscillator-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-ultimate-oscillator-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_weighted_close_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-weighted-close-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-weighted-close-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_williams_percent_r_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-williams-percent-r-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-williams-percent-r-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_custom_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-custom-indicator-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-custom-indicator-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_price_channel_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-price-channel-overlay-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-price-channel-overlay-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_bollinger_bands_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-bollinger-bands-overlay-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-bollinger-bands-overlay-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_zoom_slider_component_ngfactory__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-zoom-slider-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-zoom-slider-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_core_ES5_igx_tooltip_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-core/ES5/igx-tooltip-container-component.ngfactory */ "./node_modules/igniteui-angular-core/ES5/igx-tooltip-container-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_core_ES5_igx_simple_default_tooltip_component_ngfactory__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-core/ES5/igx-simple-default-tooltip-component.ngfactory */ "./node_modules/igniteui-angular-core/ES5/igx-simple-default-tooltip-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_data_chart_default_tooltips_component_ngfactory__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-data-chart-default-tooltips-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-data-chart-default-tooltips-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_crosshair_layer_component_ngfactory__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-crosshair-layer-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-crosshair-layer-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_callout_layer_component_ngfactory__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-callout-layer-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-callout-layer-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_item_tool_tip_layer_component_ngfactory__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-item-tool-tip-layer-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-item-tool-tip-layer-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_category_tool_tip_layer_component_ngfactory__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-category-tool-tip-layer-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-category-tool-tip-layer-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_category_highlight_layer_component_ngfactory__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-category-highlight-layer-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-category-highlight-layer-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_category_item_highlight_layer_component_ngfactory__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-category-item-highlight-layer-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-category-item-highlight-layer-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_final_value_layer_component_ngfactory__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../../node_modules/igniteui-angular-charts/ES5/igx-final-value-layer-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-final-value-layer-component.ngfactory.js");
/* harmony import */ var _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../../node_modules/igniteui-angular/igniteui-angular.ngfactory */ "./node_modules/igniteui-angular/igniteui-angular.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _block_item_service__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./block-item.service */ "./src/app/block-item.service.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _block_grid_block_grid_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./block-grid/block-grid.component */ "./src/app/block-grid/block-grid.component.ts");
/* harmony import */ var _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./block-list/block-list.component */ "./src/app/block-list/block-list.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./email/email.component */ "./src/app/email/email.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var igniteui_angular_core_ES5_igx_template_content_module__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! igniteui-angular-core/ES5/igx-template-content-module */ "./node_modules/igniteui-angular-core/ES5/igx-template-content-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_financial_chart_core_module__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-financial-chart-core-module */ "./node_modules/igniteui-angular-charts/ES5/igx-financial-chart-core-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_horizontal_anchored_category_series_proxy_module__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-horizontal-anchored-category-series-proxy-module */ "./node_modules/igniteui-angular-charts/ES5/igx-horizontal-anchored-category-series-proxy-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_line_series_module__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-line-series-module */ "./node_modules/igniteui-angular-charts/ES5/igx-line-series-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_line_series_dynamic_module__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-line-series-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-line-series-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_area_series_module__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-area-series-module */ "./node_modules/igniteui-angular-charts/ES5/igx-area-series-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_area_series_dynamic_module__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-area-series-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-area-series-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_column_series_module__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-column-series-module */ "./node_modules/igniteui-angular-charts/ES5/igx-column-series-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_column_series_dynamic_module__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-column-series-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-column-series-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_numeric_y_axis_module__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-numeric-y-axis-module */ "./node_modules/igniteui-angular-charts/ES5/igx-numeric-y-axis-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_numeric_y_axis_dynamic_module__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-numeric-y-axis-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-numeric-y-axis-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_time_x_axis_module__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-time-x-axis-module */ "./node_modules/igniteui-angular-charts/ES5/igx-time-x-axis-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_time_x_axis_dynamic_module__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-time-x-axis-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-time-x-axis-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_category_x_axis_module__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-category-x-axis-module */ "./node_modules/igniteui-angular-charts/ES5/igx-category-x-axis-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_category_x_axis_dynamic_module__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-category-x-axis-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-category-x-axis-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_ordinal_time_x_axis_module__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-ordinal-time-x-axis-module */ "./node_modules/igniteui-angular-charts/ES5/igx-ordinal-time-x-axis-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_ordinal_time_x_axis_dynamic_module__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-ordinal-time-x-axis-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-ordinal-time-x-axis-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_percent_change_y_axis_module__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-percent-change-y-axis-module */ "./node_modules/igniteui-angular-charts/ES5/igx-percent-change-y-axis-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_percent_change_y_axis_dynamic_module__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-percent-change-y-axis-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-percent-change-y-axis-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_financial_price_series_proxy_module__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-financial-price-series-proxy-module */ "./node_modules/igniteui-angular-charts/ES5/igx-financial-price-series-proxy-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_financial_price_series_module__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-financial-price-series-module */ "./node_modules/igniteui-angular-charts/ES5/igx-financial-price-series-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_financial_price_series_dynamic_module__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-financial-price-series-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-financial-price-series-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_data_chart_category_trendline_module__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-data-chart-category-trendline-module */ "./node_modules/igniteui-angular-charts/ES5/igx-data-chart-category-trendline-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_indicator_proxy_module__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-indicator-proxy-module */ "./node_modules/igniteui-angular-charts/ES5/igx-indicator-proxy-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_absolute_volume_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-absolute-volume-oscillator-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-absolute-volume-oscillator-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_accumulation_distribution_indicator_module__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-accumulation-distribution-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-accumulation-distribution-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_average_directional_index_indicator_module__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-average-directional-index-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-average-directional-index-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_average_true_range_indicator_module__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-average-true-range-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-average-true-range-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_bollinger_band_width_indicator_module__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-bollinger-band-width-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-bollinger-band-width-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_chaikin_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-chaikin-oscillator-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-chaikin-oscillator-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_chaikin_volatility_indicator_module__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-chaikin-volatility-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-chaikin-volatility-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_commodity_channel_index_indicator_module__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-commodity-channel-index-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-commodity-channel-index-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_detrended_price_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-detrended-price-oscillator-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-detrended-price-oscillator-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_force_index_indicator_module__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-force-index-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-force-index-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_full_stochastic_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-full-stochastic-oscillator-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-full-stochastic-oscillator-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_market_facilitation_index_indicator_module__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-market-facilitation-index-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-market-facilitation-index-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_mass_index_indicator_module__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-mass-index-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-mass-index-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_median_price_indicator_module__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-median-price-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-median-price-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_money_flow_index_indicator_module__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-money-flow-index-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-money-flow-index-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_moving_average_convergence_divergence_indicator_module__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-moving-average-convergence-divergence-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-moving-average-convergence-divergence-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_negative_volume_index_indicator_module__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-negative-volume-index-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-negative-volume-index-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_on_balance_volume_indicator_module__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-on-balance-volume-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-on-balance-volume-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_percentage_price_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-percentage-price-oscillator-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-percentage-price-oscillator-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_percentage_volume_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-percentage-volume-oscillator-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-percentage-volume-oscillator-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_positive_volume_index_indicator_module__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-positive-volume-index-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-positive-volume-index-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_price_volume_trend_indicator_module__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-price-volume-trend-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-price-volume-trend-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_rate_of_change_and_momentum_indicator_module__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-rate-of-change-and-momentum-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-rate-of-change-and-momentum-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_relative_strength_index_indicator_module__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-relative-strength-index-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-relative-strength-index-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_slow_stochastic_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-slow-stochastic-oscillator-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-slow-stochastic-oscillator-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_standard_deviation_indicator_module__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-standard-deviation-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-standard-deviation-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_stoch_rsi_indicator_module__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-stoch-rsi-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-stoch-rsi-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_trix_indicator_module__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-trix-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-trix-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_typical_price_indicator_module__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-typical-price-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-typical-price-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_ultimate_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-ultimate-oscillator-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-ultimate-oscillator-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_weighted_close_indicator_module__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-weighted-close-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-weighted-close-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_williams_percent_r_indicator_module__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-williams-percent-r-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-williams-percent-r-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_custom_indicator_module__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-custom-indicator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-custom-indicator-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_indicators_module__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-indicators-module */ "./node_modules/igniteui-angular-charts/ES5/igx-indicators-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_absolute_volume_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-absolute-volume-oscillator-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-absolute-volume-oscillator-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_accumulation_distribution_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-accumulation-distribution-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-accumulation-distribution-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_average_directional_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-average-directional-index-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-average-directional-index-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_average_true_range_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-average-true-range-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-average-true-range-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_bollinger_band_width_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-bollinger-band-width-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-bollinger-band-width-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_chaikin_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-chaikin-oscillator-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-chaikin-oscillator-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_chaikin_volatility_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-chaikin-volatility-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-chaikin-volatility-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_commodity_channel_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-commodity-channel-index-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-commodity-channel-index-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_detrended_price_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-detrended-price-oscillator-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-detrended-price-oscillator-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_force_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-force-index-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-force-index-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_full_stochastic_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-full-stochastic-oscillator-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-full-stochastic-oscillator-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_market_facilitation_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-market-facilitation-index-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-market-facilitation-index-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_mass_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-mass-index-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-mass-index-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_median_price_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-median-price-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-median-price-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_money_flow_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-money-flow-index-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-money-flow-index-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_moving_average_convergence_divergence_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-moving-average-convergence-divergence-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-moving-average-convergence-divergence-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_negative_volume_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-negative-volume-index-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-negative-volume-index-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_on_balance_volume_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-on-balance-volume-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-on-balance-volume-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_percentage_price_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-percentage-price-oscillator-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-percentage-price-oscillator-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_percentage_volume_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-percentage-volume-oscillator-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-percentage-volume-oscillator-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_positive_volume_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-positive-volume-index-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-positive-volume-index-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_price_volume_trend_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-price-volume-trend-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-price-volume-trend-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_rate_of_change_and_momentum_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-rate-of-change-and-momentum-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-rate-of-change-and-momentum-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_relative_strength_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-relative-strength-index-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-relative-strength-index-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_slow_stochastic_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-slow-stochastic-oscillator-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-slow-stochastic-oscillator-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_standard_deviation_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-standard-deviation-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-standard-deviation-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_stoch_rsi_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-stoch-rsi-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-stoch-rsi-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_trix_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-trix-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-trix-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_typical_price_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-typical-price-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-typical-price-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_ultimate_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-ultimate-oscillator-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-ultimate-oscillator-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_weighted_close_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-weighted-close-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-weighted-close-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_williams_percent_r_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-williams-percent-r-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-williams-percent-r-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_custom_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-custom-indicator-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-custom-indicator-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_indicators_dynamic_module__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-indicators-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-indicators-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_overlay_proxy_module__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-overlay-proxy-module */ "./node_modules/igniteui-angular-charts/ES5/igx-overlay-proxy-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_price_channel_overlay_module__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-price-channel-overlay-module */ "./node_modules/igniteui-angular-charts/ES5/igx-price-channel-overlay-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_bollinger_bands_overlay_module__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-bollinger-bands-overlay-module */ "./node_modules/igniteui-angular-charts/ES5/igx-bollinger-bands-overlay-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_overlays_module__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-overlays-module */ "./node_modules/igniteui-angular-charts/ES5/igx-overlays-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_price_channel_overlay_dynamic_module__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-price-channel-overlay-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-price-channel-overlay-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_bollinger_bands_overlay_dynamic_module__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-bollinger-bands-overlay-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-bollinger-bands-overlay-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_overlays_dynamic_module__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-overlays-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-overlays-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_zoom_slider_module__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-zoom-slider-module */ "./node_modules/igniteui-angular-charts/ES5/igx-zoom-slider-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_zoom_slider_dynamic_module__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-zoom-slider-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-zoom-slider-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_number_abbreviator_module__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-number-abbreviator-module */ "./node_modules/igniteui-angular-charts/ES5/igx-number-abbreviator-module.js");
/* harmony import */ var igniteui_angular_core_ES5_igx_tooltip_container_module__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! igniteui-angular-core/ES5/igx-tooltip-container-module */ "./node_modules/igniteui-angular-core/ES5/igx-tooltip-container-module.js");
/* harmony import */ var igniteui_angular_core_ES5_igx_dv_interactivity_module__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(/*! igniteui-angular-core/ES5/igx-dv-interactivity-module */ "./node_modules/igniteui-angular-core/ES5/igx-dv-interactivity-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_data_chart_interactivity_module__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-data-chart-interactivity-module */ "./node_modules/igniteui-angular-charts/ES5/igx-data-chart-interactivity-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_annotation_layer_proxy_module__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-annotation-layer-proxy-module */ "./node_modules/igniteui-angular-charts/ES5/igx-annotation-layer-proxy-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_crosshair_layer_module__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-crosshair-layer-module */ "./node_modules/igniteui-angular-charts/ES5/igx-crosshair-layer-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_crosshair_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-crosshair-layer-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-crosshair-layer-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_callout_layer_module__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-callout-layer-module */ "./node_modules/igniteui-angular-charts/ES5/igx-callout-layer-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_callout_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-callout-layer-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-callout-layer-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_item_tool_tip_layer_module__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-item-tool-tip-layer-module */ "./node_modules/igniteui-angular-charts/ES5/igx-item-tool-tip-layer-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_item_tool_tip_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-item-tool-tip-layer-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-item-tool-tip-layer-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_category_tool_tip_layer_module__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-category-tool-tip-layer-module */ "./node_modules/igniteui-angular-charts/ES5/igx-category-tool-tip-layer-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_category_tool_tip_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-category-tool-tip-layer-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-category-tool-tip-layer-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_category_highlight_layer_module__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-category-highlight-layer-module */ "./node_modules/igniteui-angular-charts/ES5/igx-category-highlight-layer-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_category_highlight_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-category-highlight-layer-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-category-highlight-layer-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_category_item_highlight_layer_module__WEBPACK_IMPORTED_MODULE_212__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-category-item-highlight-layer-module */ "./node_modules/igniteui-angular-charts/ES5/igx-category-item-highlight-layer-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_category_item_highlight_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_213__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-category-item-highlight-layer-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-category-item-highlight-layer-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_final_value_layer_module__WEBPACK_IMPORTED_MODULE_214__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-final-value-layer-module */ "./node_modules/igniteui-angular-charts/ES5/igx-final-value-layer-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_final_value_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_215__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-final-value-layer-dynamic-module */ "./node_modules/igniteui-angular-charts/ES5/igx-final-value-layer-dynamic-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_data_chart_annotation_module__WEBPACK_IMPORTED_MODULE_216__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-data-chart-annotation-module */ "./node_modules/igniteui-angular-charts/ES5/igx-data-chart-annotation-module.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_financial_chart_module__WEBPACK_IMPORTED_MODULE_217__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-financial-chart-module */ "./node_modules/igniteui-angular-charts/ES5/igx-financial-chart-module.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


























































































































































































































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵEmptyOutletComponentNgFactory"], _portfolio_portfolio_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponentNgFactory"], _home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["HomeComponentNgFactory"], _block_grid_block_grid_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["BlockGridComponentNgFactory"], _block_list_block_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["BlockListComponentNgFactory"], _statistics_statistics_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["StatisticsComponentNgFactory"], _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["LoginComponentNgFactory"], _email_email_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["EmailComponentNgFactory"], _signup_signup_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["SignupComponentNgFactory"], _node_modules_igniteui_angular_core_ES5_igx_template_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["IgxTemplateContentComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_line_series_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["IgxLineSeriesComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_area_series_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["IgxAreaSeriesComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_column_series_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["IgxColumnSeriesComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_numeric_y_axis_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["IgxNumericYAxisComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_time_x_axis_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["IgxTimeXAxisComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_category_x_axis_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["IgxCategoryXAxisComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_ordinal_time_x_axis_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["IgxOrdinalTimeXAxisComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_percent_change_y_axis_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["IgxPercentChangeYAxisComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_financial_price_series_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["IgxFinancialPriceSeriesComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_absolute_volume_oscillator_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["IgxAbsoluteVolumeOscillatorIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_accumulation_distribution_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["IgxAccumulationDistributionIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_average_directional_index_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["IgxAverageDirectionalIndexIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_average_true_range_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["IgxAverageTrueRangeIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_bollinger_band_width_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["IgxBollingerBandWidthIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_chaikin_oscillator_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_27__["IgxChaikinOscillatorIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_chaikin_volatility_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_28__["IgxChaikinVolatilityIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_commodity_channel_index_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_29__["IgxCommodityChannelIndexIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_detrended_price_oscillator_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__["IgxDetrendedPriceOscillatorIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_force_index_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_31__["IgxForceIndexIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_full_stochastic_oscillator_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_32__["IgxFullStochasticOscillatorIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_market_facilitation_index_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_33__["IgxMarketFacilitationIndexIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_mass_index_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_34__["IgxMassIndexIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_median_price_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_35__["IgxMedianPriceIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_money_flow_index_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_36__["IgxMoneyFlowIndexIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_moving_average_convergence_divergence_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_37__["IgxMovingAverageConvergenceDivergenceIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_negative_volume_index_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_38__["IgxNegativeVolumeIndexIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_on_balance_volume_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_39__["IgxOnBalanceVolumeIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_percentage_price_oscillator_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_40__["IgxPercentagePriceOscillatorIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_percentage_volume_oscillator_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_41__["IgxPercentageVolumeOscillatorIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_positive_volume_index_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_42__["IgxPositiveVolumeIndexIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_price_volume_trend_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_43__["IgxPriceVolumeTrendIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_rate_of_change_and_momentum_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_44__["IgxRateOfChangeAndMomentumIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_relative_strength_index_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_45__["IgxRelativeStrengthIndexIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_slow_stochastic_oscillator_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_46__["IgxSlowStochasticOscillatorIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_standard_deviation_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_47__["IgxStandardDeviationIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_stoch_rsi_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_48__["IgxStochRSIIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_trix_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_49__["IgxTRIXIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_typical_price_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_50__["IgxTypicalPriceIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_ultimate_oscillator_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_51__["IgxUltimateOscillatorIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_weighted_close_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_52__["IgxWeightedCloseIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_williams_percent_r_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_53__["IgxWilliamsPercentRIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_custom_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_54__["IgxCustomIndicatorComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_price_channel_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_55__["IgxPriceChannelOverlayComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_bollinger_bands_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_56__["IgxBollingerBandsOverlayComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_zoom_slider_component_ngfactory__WEBPACK_IMPORTED_MODULE_57__["IgxZoomSliderComponentNgFactory"], _node_modules_igniteui_angular_core_ES5_igx_tooltip_container_component_ngfactory__WEBPACK_IMPORTED_MODULE_58__["IgxTooltipContainerComponentNgFactory"], _node_modules_igniteui_angular_core_ES5_igx_simple_default_tooltip_component_ngfactory__WEBPACK_IMPORTED_MODULE_59__["IgxSimpleDefaultTooltipComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_data_chart_default_tooltips_component_ngfactory__WEBPACK_IMPORTED_MODULE_60__["IgxDataChartDefaultTooltipsComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_crosshair_layer_component_ngfactory__WEBPACK_IMPORTED_MODULE_61__["IgxCrosshairLayerComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_callout_layer_component_ngfactory__WEBPACK_IMPORTED_MODULE_62__["IgxCalloutLayerComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_item_tool_tip_layer_component_ngfactory__WEBPACK_IMPORTED_MODULE_63__["IgxItemToolTipLayerComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_category_tool_tip_layer_component_ngfactory__WEBPACK_IMPORTED_MODULE_64__["IgxCategoryToolTipLayerComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_category_highlight_layer_component_ngfactory__WEBPACK_IMPORTED_MODULE_65__["IgxCategoryHighlightLayerComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_category_item_highlight_layer_component_ngfactory__WEBPACK_IMPORTED_MODULE_66__["IgxCategoryItemHighlightLayerComponentNgFactory"], _node_modules_igniteui_angular_charts_ES5_igx_final_value_layer_component_ngfactory__WEBPACK_IMPORTED_MODULE_67__["IgxFinalValueLayerComponentNgFactory"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_68__["IgxCalendarComponentNgFactory"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_68__["ɵeNgFactory"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_68__["ɵfNgFactory"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_68__["ɵgNgFactory"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_68__["IgxColumnComponentNgFactory"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_68__["IgxColumnGroupComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_69__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_70__["ɵangular_packages_forms_forms_i"], _angular_forms__WEBPACK_IMPORTED_MODULE_70__["ɵangular_packages_forms_forms_i"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_k"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_71__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_71__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_71__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_i"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_71__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_71__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_71__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_71__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_71__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_73__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_74__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_73__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_74__["ɵangular_packages_platform_browser_animations_animations_c"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_73__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_74__["ɵangular_packages_platform_browser_animations_animations_a"], [_angular_common__WEBPACK_IMPORTED_MODULE_71__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_73__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_73__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_74__["ɵangular_packages_platform_browser_animations_animations_d"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_73__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_75__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_74__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_76__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_76__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_76__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_76__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_76__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_76__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_76__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_76__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_76__["ɵangular_packages_router_router_n"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_76__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_71__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_76__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_76__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_76__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_71__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_77__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_77__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_77__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_77__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_77__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_77__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_77__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxIconService"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxIconService"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["DomSanitizer"], _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_71__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxNavigationService"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxNavigationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["ɵl"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["ɵl"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxColumnMovingService"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxColumnMovingService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["ɵbf"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["ɵbf"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxGridTransaction"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxBaseTransactionService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_fire__WEBPACK_IMPORTED_MODULE_79__["FirebaseApp"], _angular_fire__WEBPACK_IMPORTED_MODULE_79__["_firebaseAppFactory"], [_angular_fire__WEBPACK_IMPORTED_MODULE_79__["FirebaseOptionsToken"], [2, _angular_fire__WEBPACK_IMPORTED_MODULE_79__["FirebaseNameOrConfigToken"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_80__["AngularFirestore"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_80__["AngularFirestore"], [_angular_fire__WEBPACK_IMPORTED_MODULE_79__["FirebaseOptionsToken"], [2, _angular_fire__WEBPACK_IMPORTED_MODULE_79__["FirebaseNameOrConfigToken"]], [2, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_80__["EnablePersistenceToken"]], [2, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_80__["FirestoreSettingsToken"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_80__["PersistenceSettingsToken"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_81__["AngularFireAuth"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_81__["AngularFireAuth"], [_angular_fire__WEBPACK_IMPORTED_MODULE_79__["FirebaseOptionsToken"], [2, _angular_fire__WEBPACK_IMPORTED_MODULE_79__["FirebaseNameOrConfigToken"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_82__["AngularFireStorage"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_82__["AngularFireStorage"], [_angular_fire__WEBPACK_IMPORTED_MODULE_79__["FirebaseOptionsToken"], [2, _angular_fire__WEBPACK_IMPORTED_MODULE_79__["FirebaseNameOrConfigToken"]], [2, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_82__["StorageBucket"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_fire_database__WEBPACK_IMPORTED_MODULE_83__["AngularFireDatabase"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_83__["AngularFireDatabase"], [_angular_fire__WEBPACK_IMPORTED_MODULE_79__["FirebaseOptionsToken"], [2, _angular_fire__WEBPACK_IMPORTED_MODULE_79__["FirebaseNameOrConfigToken"]], [2, _angular_fire__WEBPACK_IMPORTED_MODULE_79__["RealtimeDatabaseURL"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _data_service__WEBPACK_IMPORTED_MODULE_84__["DataService"], _data_service__WEBPACK_IMPORTED_MODULE_84__["DataService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_77__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _auth_service__WEBPACK_IMPORTED_MODULE_85__["AuthGuard"], _auth_service__WEBPACK_IMPORTED_MODULE_85__["AuthGuard"], [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_81__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["ActivatedRoute"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _block_item_service__WEBPACK_IMPORTED_MODULE_86__["ItemService"], _block_item_service__WEBPACK_IMPORTED_MODULE_86__["ItemService"], [_angular_fire_database__WEBPACK_IMPORTED_MODULE_83__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_81__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_80__["AngularFirestore"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_70__["ɵangular_packages_forms_forms_bb"], _angular_forms__WEBPACK_IMPORTED_MODULE_70__["ɵangular_packages_forms_forms_bb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_70__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_70__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_71__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_71__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_76__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_76__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_76__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_76__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_72__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_74__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_74__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_76__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_76__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_76__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_76__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_76__["ROUTER_CONFIGURATION"], { useHash: true }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_71__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_71__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_71__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_76__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_71__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_71__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_71__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_76__["ROUTES"], function () { return [[{ path: "", redirectTo: "/home", pathMatch: "full" }, { path: "portfolio", component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_87__["PortfolioComponent"], data: { text: "My portfolio", iconName: "account_box" }, canActivate: [_auth_service__WEBPACK_IMPORTED_MODULE_85__["AuthGuard"]] }, { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_88__["HomeComponent"], data: { text: "Top 100 Crypto`s", iconName: "call_made" } }, { path: "block-grid", component: _block_grid_block_grid_component__WEBPACK_IMPORTED_MODULE_89__["BlockGridComponent"], data: { text: "Grid view", iconName: "grid_on", subItem: true } }, { path: "block-list", component: _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_90__["BlockListComponent"], data: { text: "List view", iconName: "list_alt", subItem: true } }, { path: "statistics", component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_91__["StatisticsComponent"], data: { text: "Volatility", iconName: "insert_chart_outlined", cryptoName: "BTC", daysCount: 100 } }, { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_92__["LoginComponent"] }, { path: "email", component: _email_email_component__WEBPACK_IMPORTED_MODULE_93__["EmailComponent"] }, { path: "signup", component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_94__["SignupComponent"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_76__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_71__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_76__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_76__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_76__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_76__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_76__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_76__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_95__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_95__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxNavigationDrawerModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxNavigationDrawerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxButtonModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxIconModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxNavbarModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxNavbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxLayoutModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxRippleModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_core_ES5_igx_template_content_module__WEBPACK_IMPORTED_MODULE_96__["IgxTemplateContentModule"], igniteui_angular_core_ES5_igx_template_content_module__WEBPACK_IMPORTED_MODULE_96__["IgxTemplateContentModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_financial_chart_core_module__WEBPACK_IMPORTED_MODULE_97__["IgxFinancialChartCoreModule"], igniteui_angular_charts_ES5_igx_financial_chart_core_module__WEBPACK_IMPORTED_MODULE_97__["IgxFinancialChartCoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_horizontal_anchored_category_series_proxy_module__WEBPACK_IMPORTED_MODULE_98__["IgxHorizontalAnchoredCategorySeriesProxyModule"], igniteui_angular_charts_ES5_igx_horizontal_anchored_category_series_proxy_module__WEBPACK_IMPORTED_MODULE_98__["IgxHorizontalAnchoredCategorySeriesProxyModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_line_series_module__WEBPACK_IMPORTED_MODULE_99__["IgxLineSeriesModule"], igniteui_angular_charts_ES5_igx_line_series_module__WEBPACK_IMPORTED_MODULE_99__["IgxLineSeriesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_line_series_dynamic_module__WEBPACK_IMPORTED_MODULE_100__["IgxLineSeriesDynamicModule"], igniteui_angular_charts_ES5_igx_line_series_dynamic_module__WEBPACK_IMPORTED_MODULE_100__["IgxLineSeriesDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_area_series_module__WEBPACK_IMPORTED_MODULE_101__["IgxAreaSeriesModule"], igniteui_angular_charts_ES5_igx_area_series_module__WEBPACK_IMPORTED_MODULE_101__["IgxAreaSeriesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_area_series_dynamic_module__WEBPACK_IMPORTED_MODULE_102__["IgxAreaSeriesDynamicModule"], igniteui_angular_charts_ES5_igx_area_series_dynamic_module__WEBPACK_IMPORTED_MODULE_102__["IgxAreaSeriesDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_column_series_module__WEBPACK_IMPORTED_MODULE_103__["IgxColumnSeriesModule"], igniteui_angular_charts_ES5_igx_column_series_module__WEBPACK_IMPORTED_MODULE_103__["IgxColumnSeriesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_column_series_dynamic_module__WEBPACK_IMPORTED_MODULE_104__["IgxColumnSeriesDynamicModule"], igniteui_angular_charts_ES5_igx_column_series_dynamic_module__WEBPACK_IMPORTED_MODULE_104__["IgxColumnSeriesDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_numeric_y_axis_module__WEBPACK_IMPORTED_MODULE_105__["IgxNumericYAxisModule"], igniteui_angular_charts_ES5_igx_numeric_y_axis_module__WEBPACK_IMPORTED_MODULE_105__["IgxNumericYAxisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_numeric_y_axis_dynamic_module__WEBPACK_IMPORTED_MODULE_106__["IgxNumericYAxisDynamicModule"], igniteui_angular_charts_ES5_igx_numeric_y_axis_dynamic_module__WEBPACK_IMPORTED_MODULE_106__["IgxNumericYAxisDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_time_x_axis_module__WEBPACK_IMPORTED_MODULE_107__["IgxTimeXAxisModule"], igniteui_angular_charts_ES5_igx_time_x_axis_module__WEBPACK_IMPORTED_MODULE_107__["IgxTimeXAxisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_time_x_axis_dynamic_module__WEBPACK_IMPORTED_MODULE_108__["IgxTimeXAxisDynamicModule"], igniteui_angular_charts_ES5_igx_time_x_axis_dynamic_module__WEBPACK_IMPORTED_MODULE_108__["IgxTimeXAxisDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_category_x_axis_module__WEBPACK_IMPORTED_MODULE_109__["IgxCategoryXAxisModule"], igniteui_angular_charts_ES5_igx_category_x_axis_module__WEBPACK_IMPORTED_MODULE_109__["IgxCategoryXAxisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_category_x_axis_dynamic_module__WEBPACK_IMPORTED_MODULE_110__["IgxCategoryXAxisDynamicModule"], igniteui_angular_charts_ES5_igx_category_x_axis_dynamic_module__WEBPACK_IMPORTED_MODULE_110__["IgxCategoryXAxisDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_ordinal_time_x_axis_module__WEBPACK_IMPORTED_MODULE_111__["IgxOrdinalTimeXAxisModule"], igniteui_angular_charts_ES5_igx_ordinal_time_x_axis_module__WEBPACK_IMPORTED_MODULE_111__["IgxOrdinalTimeXAxisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_ordinal_time_x_axis_dynamic_module__WEBPACK_IMPORTED_MODULE_112__["IgxOrdinalTimeXAxisDynamicModule"], igniteui_angular_charts_ES5_igx_ordinal_time_x_axis_dynamic_module__WEBPACK_IMPORTED_MODULE_112__["IgxOrdinalTimeXAxisDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_percent_change_y_axis_module__WEBPACK_IMPORTED_MODULE_113__["IgxPercentChangeYAxisModule"], igniteui_angular_charts_ES5_igx_percent_change_y_axis_module__WEBPACK_IMPORTED_MODULE_113__["IgxPercentChangeYAxisModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_percent_change_y_axis_dynamic_module__WEBPACK_IMPORTED_MODULE_114__["IgxPercentChangeYAxisDynamicModule"], igniteui_angular_charts_ES5_igx_percent_change_y_axis_dynamic_module__WEBPACK_IMPORTED_MODULE_114__["IgxPercentChangeYAxisDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_financial_price_series_proxy_module__WEBPACK_IMPORTED_MODULE_115__["IgxFinancialPriceSeriesProxyModule"], igniteui_angular_charts_ES5_igx_financial_price_series_proxy_module__WEBPACK_IMPORTED_MODULE_115__["IgxFinancialPriceSeriesProxyModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_financial_price_series_module__WEBPACK_IMPORTED_MODULE_116__["IgxFinancialPriceSeriesModule"], igniteui_angular_charts_ES5_igx_financial_price_series_module__WEBPACK_IMPORTED_MODULE_116__["IgxFinancialPriceSeriesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_financial_price_series_dynamic_module__WEBPACK_IMPORTED_MODULE_117__["IgxFinancialPriceSeriesDynamicModule"], igniteui_angular_charts_ES5_igx_financial_price_series_dynamic_module__WEBPACK_IMPORTED_MODULE_117__["IgxFinancialPriceSeriesDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_data_chart_category_trendline_module__WEBPACK_IMPORTED_MODULE_118__["IgxDataChartCategoryTrendLineModule"], igniteui_angular_charts_ES5_igx_data_chart_category_trendline_module__WEBPACK_IMPORTED_MODULE_118__["IgxDataChartCategoryTrendLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_indicator_proxy_module__WEBPACK_IMPORTED_MODULE_119__["IgxIndicatorProxyModule"], igniteui_angular_charts_ES5_igx_indicator_proxy_module__WEBPACK_IMPORTED_MODULE_119__["IgxIndicatorProxyModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_absolute_volume_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_120__["IgxAbsoluteVolumeOscillatorIndicatorModule"], igniteui_angular_charts_ES5_igx_absolute_volume_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_120__["IgxAbsoluteVolumeOscillatorIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_accumulation_distribution_indicator_module__WEBPACK_IMPORTED_MODULE_121__["IgxAccumulationDistributionIndicatorModule"], igniteui_angular_charts_ES5_igx_accumulation_distribution_indicator_module__WEBPACK_IMPORTED_MODULE_121__["IgxAccumulationDistributionIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_average_directional_index_indicator_module__WEBPACK_IMPORTED_MODULE_122__["IgxAverageDirectionalIndexIndicatorModule"], igniteui_angular_charts_ES5_igx_average_directional_index_indicator_module__WEBPACK_IMPORTED_MODULE_122__["IgxAverageDirectionalIndexIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_average_true_range_indicator_module__WEBPACK_IMPORTED_MODULE_123__["IgxAverageTrueRangeIndicatorModule"], igniteui_angular_charts_ES5_igx_average_true_range_indicator_module__WEBPACK_IMPORTED_MODULE_123__["IgxAverageTrueRangeIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_bollinger_band_width_indicator_module__WEBPACK_IMPORTED_MODULE_124__["IgxBollingerBandWidthIndicatorModule"], igniteui_angular_charts_ES5_igx_bollinger_band_width_indicator_module__WEBPACK_IMPORTED_MODULE_124__["IgxBollingerBandWidthIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_chaikin_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_125__["IgxChaikinOscillatorIndicatorModule"], igniteui_angular_charts_ES5_igx_chaikin_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_125__["IgxChaikinOscillatorIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_chaikin_volatility_indicator_module__WEBPACK_IMPORTED_MODULE_126__["IgxChaikinVolatilityIndicatorModule"], igniteui_angular_charts_ES5_igx_chaikin_volatility_indicator_module__WEBPACK_IMPORTED_MODULE_126__["IgxChaikinVolatilityIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_commodity_channel_index_indicator_module__WEBPACK_IMPORTED_MODULE_127__["IgxCommodityChannelIndexIndicatorModule"], igniteui_angular_charts_ES5_igx_commodity_channel_index_indicator_module__WEBPACK_IMPORTED_MODULE_127__["IgxCommodityChannelIndexIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_detrended_price_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_128__["IgxDetrendedPriceOscillatorIndicatorModule"], igniteui_angular_charts_ES5_igx_detrended_price_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_128__["IgxDetrendedPriceOscillatorIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_force_index_indicator_module__WEBPACK_IMPORTED_MODULE_129__["IgxForceIndexIndicatorModule"], igniteui_angular_charts_ES5_igx_force_index_indicator_module__WEBPACK_IMPORTED_MODULE_129__["IgxForceIndexIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_full_stochastic_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_130__["IgxFullStochasticOscillatorIndicatorModule"], igniteui_angular_charts_ES5_igx_full_stochastic_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_130__["IgxFullStochasticOscillatorIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_market_facilitation_index_indicator_module__WEBPACK_IMPORTED_MODULE_131__["IgxMarketFacilitationIndexIndicatorModule"], igniteui_angular_charts_ES5_igx_market_facilitation_index_indicator_module__WEBPACK_IMPORTED_MODULE_131__["IgxMarketFacilitationIndexIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_mass_index_indicator_module__WEBPACK_IMPORTED_MODULE_132__["IgxMassIndexIndicatorModule"], igniteui_angular_charts_ES5_igx_mass_index_indicator_module__WEBPACK_IMPORTED_MODULE_132__["IgxMassIndexIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_median_price_indicator_module__WEBPACK_IMPORTED_MODULE_133__["IgxMedianPriceIndicatorModule"], igniteui_angular_charts_ES5_igx_median_price_indicator_module__WEBPACK_IMPORTED_MODULE_133__["IgxMedianPriceIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_money_flow_index_indicator_module__WEBPACK_IMPORTED_MODULE_134__["IgxMoneyFlowIndexIndicatorModule"], igniteui_angular_charts_ES5_igx_money_flow_index_indicator_module__WEBPACK_IMPORTED_MODULE_134__["IgxMoneyFlowIndexIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_moving_average_convergence_divergence_indicator_module__WEBPACK_IMPORTED_MODULE_135__["IgxMovingAverageConvergenceDivergenceIndicatorModule"], igniteui_angular_charts_ES5_igx_moving_average_convergence_divergence_indicator_module__WEBPACK_IMPORTED_MODULE_135__["IgxMovingAverageConvergenceDivergenceIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_negative_volume_index_indicator_module__WEBPACK_IMPORTED_MODULE_136__["IgxNegativeVolumeIndexIndicatorModule"], igniteui_angular_charts_ES5_igx_negative_volume_index_indicator_module__WEBPACK_IMPORTED_MODULE_136__["IgxNegativeVolumeIndexIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_on_balance_volume_indicator_module__WEBPACK_IMPORTED_MODULE_137__["IgxOnBalanceVolumeIndicatorModule"], igniteui_angular_charts_ES5_igx_on_balance_volume_indicator_module__WEBPACK_IMPORTED_MODULE_137__["IgxOnBalanceVolumeIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_percentage_price_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_138__["IgxPercentagePriceOscillatorIndicatorModule"], igniteui_angular_charts_ES5_igx_percentage_price_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_138__["IgxPercentagePriceOscillatorIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_percentage_volume_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_139__["IgxPercentageVolumeOscillatorIndicatorModule"], igniteui_angular_charts_ES5_igx_percentage_volume_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_139__["IgxPercentageVolumeOscillatorIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_positive_volume_index_indicator_module__WEBPACK_IMPORTED_MODULE_140__["IgxPositiveVolumeIndexIndicatorModule"], igniteui_angular_charts_ES5_igx_positive_volume_index_indicator_module__WEBPACK_IMPORTED_MODULE_140__["IgxPositiveVolumeIndexIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_price_volume_trend_indicator_module__WEBPACK_IMPORTED_MODULE_141__["IgxPriceVolumeTrendIndicatorModule"], igniteui_angular_charts_ES5_igx_price_volume_trend_indicator_module__WEBPACK_IMPORTED_MODULE_141__["IgxPriceVolumeTrendIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_rate_of_change_and_momentum_indicator_module__WEBPACK_IMPORTED_MODULE_142__["IgxRateOfChangeAndMomentumIndicatorModule"], igniteui_angular_charts_ES5_igx_rate_of_change_and_momentum_indicator_module__WEBPACK_IMPORTED_MODULE_142__["IgxRateOfChangeAndMomentumIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_relative_strength_index_indicator_module__WEBPACK_IMPORTED_MODULE_143__["IgxRelativeStrengthIndexIndicatorModule"], igniteui_angular_charts_ES5_igx_relative_strength_index_indicator_module__WEBPACK_IMPORTED_MODULE_143__["IgxRelativeStrengthIndexIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_slow_stochastic_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_144__["IgxSlowStochasticOscillatorIndicatorModule"], igniteui_angular_charts_ES5_igx_slow_stochastic_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_144__["IgxSlowStochasticOscillatorIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_standard_deviation_indicator_module__WEBPACK_IMPORTED_MODULE_145__["IgxStandardDeviationIndicatorModule"], igniteui_angular_charts_ES5_igx_standard_deviation_indicator_module__WEBPACK_IMPORTED_MODULE_145__["IgxStandardDeviationIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_stoch_rsi_indicator_module__WEBPACK_IMPORTED_MODULE_146__["IgxStochRSIIndicatorModule"], igniteui_angular_charts_ES5_igx_stoch_rsi_indicator_module__WEBPACK_IMPORTED_MODULE_146__["IgxStochRSIIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_trix_indicator_module__WEBPACK_IMPORTED_MODULE_147__["IgxTRIXIndicatorModule"], igniteui_angular_charts_ES5_igx_trix_indicator_module__WEBPACK_IMPORTED_MODULE_147__["IgxTRIXIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_typical_price_indicator_module__WEBPACK_IMPORTED_MODULE_148__["IgxTypicalPriceIndicatorModule"], igniteui_angular_charts_ES5_igx_typical_price_indicator_module__WEBPACK_IMPORTED_MODULE_148__["IgxTypicalPriceIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_ultimate_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_149__["IgxUltimateOscillatorIndicatorModule"], igniteui_angular_charts_ES5_igx_ultimate_oscillator_indicator_module__WEBPACK_IMPORTED_MODULE_149__["IgxUltimateOscillatorIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_weighted_close_indicator_module__WEBPACK_IMPORTED_MODULE_150__["IgxWeightedCloseIndicatorModule"], igniteui_angular_charts_ES5_igx_weighted_close_indicator_module__WEBPACK_IMPORTED_MODULE_150__["IgxWeightedCloseIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_williams_percent_r_indicator_module__WEBPACK_IMPORTED_MODULE_151__["IgxWilliamsPercentRIndicatorModule"], igniteui_angular_charts_ES5_igx_williams_percent_r_indicator_module__WEBPACK_IMPORTED_MODULE_151__["IgxWilliamsPercentRIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_custom_indicator_module__WEBPACK_IMPORTED_MODULE_152__["IgxCustomIndicatorModule"], igniteui_angular_charts_ES5_igx_custom_indicator_module__WEBPACK_IMPORTED_MODULE_152__["IgxCustomIndicatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_indicators_module__WEBPACK_IMPORTED_MODULE_153__["IgxIndicatorsModule"], igniteui_angular_charts_ES5_igx_indicators_module__WEBPACK_IMPORTED_MODULE_153__["IgxIndicatorsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_absolute_volume_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_154__["IgxAbsoluteVolumeOscillatorIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_absolute_volume_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_154__["IgxAbsoluteVolumeOscillatorIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_accumulation_distribution_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_155__["IgxAccumulationDistributionIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_accumulation_distribution_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_155__["IgxAccumulationDistributionIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_average_directional_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_156__["IgxAverageDirectionalIndexIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_average_directional_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_156__["IgxAverageDirectionalIndexIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_average_true_range_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_157__["IgxAverageTrueRangeIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_average_true_range_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_157__["IgxAverageTrueRangeIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_bollinger_band_width_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_158__["IgxBollingerBandWidthIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_bollinger_band_width_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_158__["IgxBollingerBandWidthIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_chaikin_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_159__["IgxChaikinOscillatorIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_chaikin_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_159__["IgxChaikinOscillatorIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_chaikin_volatility_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_160__["IgxChaikinVolatilityIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_chaikin_volatility_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_160__["IgxChaikinVolatilityIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_commodity_channel_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_161__["IgxCommodityChannelIndexIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_commodity_channel_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_161__["IgxCommodityChannelIndexIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_detrended_price_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_162__["IgxDetrendedPriceOscillatorIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_detrended_price_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_162__["IgxDetrendedPriceOscillatorIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_force_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_163__["IgxForceIndexIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_force_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_163__["IgxForceIndexIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_full_stochastic_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_164__["IgxFullStochasticOscillatorIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_full_stochastic_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_164__["IgxFullStochasticOscillatorIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_market_facilitation_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_165__["IgxMarketFacilitationIndexIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_market_facilitation_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_165__["IgxMarketFacilitationIndexIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_mass_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_166__["IgxMassIndexIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_mass_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_166__["IgxMassIndexIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_median_price_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_167__["IgxMedianPriceIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_median_price_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_167__["IgxMedianPriceIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_money_flow_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_168__["IgxMoneyFlowIndexIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_money_flow_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_168__["IgxMoneyFlowIndexIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_moving_average_convergence_divergence_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_169__["IgxMovingAverageConvergenceDivergenceIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_moving_average_convergence_divergence_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_169__["IgxMovingAverageConvergenceDivergenceIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_negative_volume_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_170__["IgxNegativeVolumeIndexIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_negative_volume_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_170__["IgxNegativeVolumeIndexIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_on_balance_volume_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_171__["IgxOnBalanceVolumeIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_on_balance_volume_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_171__["IgxOnBalanceVolumeIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_percentage_price_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_172__["IgxPercentagePriceOscillatorIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_percentage_price_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_172__["IgxPercentagePriceOscillatorIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_percentage_volume_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_173__["IgxPercentageVolumeOscillatorIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_percentage_volume_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_173__["IgxPercentageVolumeOscillatorIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_positive_volume_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_174__["IgxPositiveVolumeIndexIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_positive_volume_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_174__["IgxPositiveVolumeIndexIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_price_volume_trend_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_175__["IgxPriceVolumeTrendIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_price_volume_trend_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_175__["IgxPriceVolumeTrendIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_rate_of_change_and_momentum_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_176__["IgxRateOfChangeAndMomentumIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_rate_of_change_and_momentum_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_176__["IgxRateOfChangeAndMomentumIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_relative_strength_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_177__["IgxRelativeStrengthIndexIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_relative_strength_index_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_177__["IgxRelativeStrengthIndexIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_slow_stochastic_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_178__["IgxSlowStochasticOscillatorIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_slow_stochastic_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_178__["IgxSlowStochasticOscillatorIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_standard_deviation_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_179__["IgxStandardDeviationIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_standard_deviation_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_179__["IgxStandardDeviationIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_stoch_rsi_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_180__["IgxStochRSIIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_stoch_rsi_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_180__["IgxStochRSIIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_trix_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_181__["IgxTRIXIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_trix_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_181__["IgxTRIXIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_typical_price_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_182__["IgxTypicalPriceIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_typical_price_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_182__["IgxTypicalPriceIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_ultimate_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_183__["IgxUltimateOscillatorIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_ultimate_oscillator_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_183__["IgxUltimateOscillatorIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_weighted_close_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_184__["IgxWeightedCloseIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_weighted_close_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_184__["IgxWeightedCloseIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_williams_percent_r_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_185__["IgxWilliamsPercentRIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_williams_percent_r_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_185__["IgxWilliamsPercentRIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_custom_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_186__["IgxCustomIndicatorDynamicModule"], igniteui_angular_charts_ES5_igx_custom_indicator_dynamic_module__WEBPACK_IMPORTED_MODULE_186__["IgxCustomIndicatorDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_indicators_dynamic_module__WEBPACK_IMPORTED_MODULE_187__["IgxIndicatorsDynamicModule"], igniteui_angular_charts_ES5_igx_indicators_dynamic_module__WEBPACK_IMPORTED_MODULE_187__["IgxIndicatorsDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_overlay_proxy_module__WEBPACK_IMPORTED_MODULE_188__["IgxOverlayProxyModule"], igniteui_angular_charts_ES5_igx_overlay_proxy_module__WEBPACK_IMPORTED_MODULE_188__["IgxOverlayProxyModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_price_channel_overlay_module__WEBPACK_IMPORTED_MODULE_189__["IgxPriceChannelOverlayModule"], igniteui_angular_charts_ES5_igx_price_channel_overlay_module__WEBPACK_IMPORTED_MODULE_189__["IgxPriceChannelOverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_bollinger_bands_overlay_module__WEBPACK_IMPORTED_MODULE_190__["IgxBollingerBandsOverlayModule"], igniteui_angular_charts_ES5_igx_bollinger_bands_overlay_module__WEBPACK_IMPORTED_MODULE_190__["IgxBollingerBandsOverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_overlays_module__WEBPACK_IMPORTED_MODULE_191__["IgxOverlaysModule"], igniteui_angular_charts_ES5_igx_overlays_module__WEBPACK_IMPORTED_MODULE_191__["IgxOverlaysModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_price_channel_overlay_dynamic_module__WEBPACK_IMPORTED_MODULE_192__["IgxPriceChannelOverlayDynamicModule"], igniteui_angular_charts_ES5_igx_price_channel_overlay_dynamic_module__WEBPACK_IMPORTED_MODULE_192__["IgxPriceChannelOverlayDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_bollinger_bands_overlay_dynamic_module__WEBPACK_IMPORTED_MODULE_193__["IgxBollingerBandsOverlayDynamicModule"], igniteui_angular_charts_ES5_igx_bollinger_bands_overlay_dynamic_module__WEBPACK_IMPORTED_MODULE_193__["IgxBollingerBandsOverlayDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_overlays_dynamic_module__WEBPACK_IMPORTED_MODULE_194__["IgxOverlaysDynamicModule"], igniteui_angular_charts_ES5_igx_overlays_dynamic_module__WEBPACK_IMPORTED_MODULE_194__["IgxOverlaysDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_zoom_slider_module__WEBPACK_IMPORTED_MODULE_195__["IgxZoomSliderModule"], igniteui_angular_charts_ES5_igx_zoom_slider_module__WEBPACK_IMPORTED_MODULE_195__["IgxZoomSliderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_zoom_slider_dynamic_module__WEBPACK_IMPORTED_MODULE_196__["IgxZoomSliderDynamicModule"], igniteui_angular_charts_ES5_igx_zoom_slider_dynamic_module__WEBPACK_IMPORTED_MODULE_196__["IgxZoomSliderDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_number_abbreviator_module__WEBPACK_IMPORTED_MODULE_197__["IgxNumberAbbreviatorModule"], igniteui_angular_charts_ES5_igx_number_abbreviator_module__WEBPACK_IMPORTED_MODULE_197__["IgxNumberAbbreviatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_core_ES5_igx_tooltip_container_module__WEBPACK_IMPORTED_MODULE_198__["IgxTooltipContainerModule"], igniteui_angular_core_ES5_igx_tooltip_container_module__WEBPACK_IMPORTED_MODULE_198__["IgxTooltipContainerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_core_ES5_igx_dv_interactivity_module__WEBPACK_IMPORTED_MODULE_199__["IgxDVInteractivityModule"], igniteui_angular_core_ES5_igx_dv_interactivity_module__WEBPACK_IMPORTED_MODULE_199__["IgxDVInteractivityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_data_chart_interactivity_module__WEBPACK_IMPORTED_MODULE_200__["IgxDataChartInteractivityModule"], igniteui_angular_charts_ES5_igx_data_chart_interactivity_module__WEBPACK_IMPORTED_MODULE_200__["IgxDataChartInteractivityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_annotation_layer_proxy_module__WEBPACK_IMPORTED_MODULE_201__["IgxAnnotationLayerProxyModule"], igniteui_angular_charts_ES5_igx_annotation_layer_proxy_module__WEBPACK_IMPORTED_MODULE_201__["IgxAnnotationLayerProxyModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_crosshair_layer_module__WEBPACK_IMPORTED_MODULE_202__["IgxCrosshairLayerModule"], igniteui_angular_charts_ES5_igx_crosshair_layer_module__WEBPACK_IMPORTED_MODULE_202__["IgxCrosshairLayerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_crosshair_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_203__["IgxCrosshairLayerDynamicModule"], igniteui_angular_charts_ES5_igx_crosshair_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_203__["IgxCrosshairLayerDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_callout_layer_module__WEBPACK_IMPORTED_MODULE_204__["IgxCalloutLayerModule"], igniteui_angular_charts_ES5_igx_callout_layer_module__WEBPACK_IMPORTED_MODULE_204__["IgxCalloutLayerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_callout_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_205__["IgxCalloutLayerDynamicModule"], igniteui_angular_charts_ES5_igx_callout_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_205__["IgxCalloutLayerDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_item_tool_tip_layer_module__WEBPACK_IMPORTED_MODULE_206__["IgxItemToolTipLayerModule"], igniteui_angular_charts_ES5_igx_item_tool_tip_layer_module__WEBPACK_IMPORTED_MODULE_206__["IgxItemToolTipLayerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_item_tool_tip_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_207__["IgxItemToolTipLayerDynamicModule"], igniteui_angular_charts_ES5_igx_item_tool_tip_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_207__["IgxItemToolTipLayerDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_category_tool_tip_layer_module__WEBPACK_IMPORTED_MODULE_208__["IgxCategoryToolTipLayerModule"], igniteui_angular_charts_ES5_igx_category_tool_tip_layer_module__WEBPACK_IMPORTED_MODULE_208__["IgxCategoryToolTipLayerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_category_tool_tip_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_209__["IgxCategoryToolTipLayerDynamicModule"], igniteui_angular_charts_ES5_igx_category_tool_tip_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_209__["IgxCategoryToolTipLayerDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_category_highlight_layer_module__WEBPACK_IMPORTED_MODULE_210__["IgxCategoryHighlightLayerModule"], igniteui_angular_charts_ES5_igx_category_highlight_layer_module__WEBPACK_IMPORTED_MODULE_210__["IgxCategoryHighlightLayerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_category_highlight_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_211__["IgxCategoryHighlightLayerDynamicModule"], igniteui_angular_charts_ES5_igx_category_highlight_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_211__["IgxCategoryHighlightLayerDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_category_item_highlight_layer_module__WEBPACK_IMPORTED_MODULE_212__["IgxCategoryItemHighlightLayerModule"], igniteui_angular_charts_ES5_igx_category_item_highlight_layer_module__WEBPACK_IMPORTED_MODULE_212__["IgxCategoryItemHighlightLayerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_category_item_highlight_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_213__["IgxCategoryItemHighlightLayerDynamicModule"], igniteui_angular_charts_ES5_igx_category_item_highlight_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_213__["IgxCategoryItemHighlightLayerDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_final_value_layer_module__WEBPACK_IMPORTED_MODULE_214__["IgxFinalValueLayerModule"], igniteui_angular_charts_ES5_igx_final_value_layer_module__WEBPACK_IMPORTED_MODULE_214__["IgxFinalValueLayerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_final_value_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_215__["IgxFinalValueLayerDynamicModule"], igniteui_angular_charts_ES5_igx_final_value_layer_dynamic_module__WEBPACK_IMPORTED_MODULE_215__["IgxFinalValueLayerDynamicModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_data_chart_annotation_module__WEBPACK_IMPORTED_MODULE_216__["IgxDataChartAnnotationModule"], igniteui_angular_charts_ES5_igx_data_chart_annotation_module__WEBPACK_IMPORTED_MODULE_216__["IgxDataChartAnnotationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular_charts_ES5_igx_financial_chart_module__WEBPACK_IMPORTED_MODULE_217__["IgxFinancialChartModule"], igniteui_angular_charts_ES5_igx_financial_chart_module__WEBPACK_IMPORTED_MODULE_217__["IgxFinancialChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxAvatarModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxAvatarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxCardModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxPrefixModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxPrefixModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxSuffixModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxSuffixModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxInputGroupModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxInputGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxListModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxFilterModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxFilterModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxBadgeModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxBadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxTabsModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxSnackbarModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxSnackbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxToggleModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxDialogModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxDragDropModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxDragDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxChipsModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxCalendarModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxCalendarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxDatePickerModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxDatePickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["ɵi"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["ɵi"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxForOfModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxForOfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["ɵbr"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["ɵbr"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxFocusModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxFocusModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxTextHighlightModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxTextHighlightModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxTextSelectionModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxTextSelectionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxCheckboxModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxColumnHidingModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxColumnHidingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxDropDownModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxDropDownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxButtonGroupModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxButtonGroupModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxColumnPinningModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxColumnPinningModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxGridCommonModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxGridCommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxGridModule"], igniteui_angular__WEBPACK_IMPORTED_MODULE_78__["IgxGridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_fire__WEBPACK_IMPORTED_MODULE_79__["AngularFireModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_79__["AngularFireModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_80__["AngularFirestoreModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_80__["AngularFirestoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_81__["AngularFireAuthModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_81__["AngularFireAuthModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_82__["AngularFireStorageModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_82__["AngularFireStorageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_fire_database__WEBPACK_IMPORTED_MODULE_83__["AngularFireDatabaseModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_83__["AngularFireDatabaseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_74__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_77__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_fire__WEBPACK_IMPORTED_MODULE_79__["FirebaseOptionsToken"], { apiKey: "AIzaSyASqXec1QsPpOZ6Pbgk5YuYOnmiewOOvhc", authDomain: "crypto-portfolio-tracker.firebaseapp.com", databaseURL: "https://crypto-portfolio-tracker.firebaseio.com", projectId: "crypto-portfolio-tracker", storageBucket: "crypto-portfolio-tracker.appspot.com", messagingSenderId: "1078645280256" }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_fire__WEBPACK_IMPORTED_MODULE_79__["FirebaseNameOrConfigToken"], undefined, [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: firebaseConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
var firebaseConfig = {
    apiKey: 'AIzaSyASqXec1QsPpOZ6Pbgk5YuYOnmiewOOvhc',
    authDomain: 'crypto-portfolio-tracker.firebaseapp.com',
    databaseURL: 'https://crypto-portfolio-tracker.firebaseio.com',
    projectId: 'crypto-portfolio-tracker',
    storageBucket: 'crypto-portfolio-tracker.appspot.com',
    messagingSenderId: '1078645280256'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
    }
    AuthGuard.prototype.canActivate = function (route, routerState) {
        var _this = this;
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].from(this.auth.authState)
            .take(1)
            .map(function (state) { return !!state; })
            .do(function (authenticated) {
            if (!authenticated) {
                _this.router.navigate(['/login'], {
                    queryParams: {
                        return: routerState.url
                    }
                });
            }
        });
    };
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/block-grid/block-grid.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/block-grid/block-grid.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_BlockGridComponent, View_BlockGridComponent_0, View_BlockGridComponent_Host_0, BlockGridComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BlockGridComponent", function() { return RenderType_BlockGridComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BlockGridComponent_0", function() { return View_BlockGridComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BlockGridComponent_Host_0", function() { return View_BlockGridComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockGridComponentNgFactory", function() { return BlockGridComponentNgFactory; });
/* harmony import */ var _block_grid_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-grid.component.scss.shim.ngstyle */ "./src/app/block-grid/block-grid.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/igniteui-angular/igniteui-angular.ngfactory */ "./node_modules/igniteui-angular/igniteui-angular.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _block_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block-grid.component */ "./src/app/block-grid/block-grid.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_BlockGridComponent = [_block_grid_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BlockGridComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BlockGridComponent, data: {} });

function View_BlockGridComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "button", [["id", "refreshBtn"], ["igxButton", "raised"], ["igxRipple", ""]], [[1, "role", 0]], [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onMouseDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.refreshGrid() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxRippleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { rippleColor: [0, "rippleColor"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "igx-icon", [], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["refresh"]))], function (_ck, _v) { var currVal_1 = ""; _ck(_v, 2, 0, currVal_1); var currVal_2 = "raised"; _ck(_v, 3, 0, currVal_2); _ck(_v, 5, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).role; _ck(_v, 1, 0, currVal_0); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).cssClass; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).ariaHidden; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).id; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).getInactive; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).getIconColor; _ck(_v, 4, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
function View_BlockGridComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "button", [["id", "refreshFabBtn"], ["igxButton", "fab"], ["igxRipple", ""]], [[1, "role", 0]], [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onMouseDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.refreshGrid() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxRippleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { rippleColor: [0, "rippleColor"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "igx-icon", [], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["refresh"]))], function (_ck, _v) { var currVal_1 = ""; _ck(_v, 1, 0, currVal_1); var currVal_2 = "fab"; _ck(_v, 2, 0, currVal_2); _ck(_v, 4, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).role; _ck(_v, 0, 0, currVal_0); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).cssClass; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaHidden; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).id; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).getInactive; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).getIconColor; _ck(_v, 3, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
function View_BlockGridComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "igx-group-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "igx-icon", [["class", "igx-group-label__icon"], ["fontSet", "material"]], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconService"]], { font: [0, "font"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["group_work"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [["class", "igx-group-label__column-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", ": "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "igx-badge", [["class", "igx-group-label__count-badge"]], [[1, "id", 0], [1, "role", 0], [2, "igx-badge", null], [1, "aria-label", 0]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxBadgeComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxBadgeComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 49152, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxBadgeComponent"], [], { value: [0, "value"] }, null)], function (_ck, _v) { var currVal_5 = "material"; _ck(_v, 2, 0, currVal_5); var currVal_11 = (_v.context.$implicit.records ? _v.context.$implicit.records.length : 0); _ck(_v, 7, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).cssClass; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).ariaHidden; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).getInactive; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).getIconColor; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_6 = (_v.context.$implicit.value ? "Positive Daily Scale" : "Negative Daily Scale"); _ck(_v, 5, 0, currVal_6); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).id; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).role; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).cssClass; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).label; _ck(_v, 6, 0, currVal_7, currVal_8, currVal_9, currVal_10); }); }
function View_BlockGridComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "coin-logo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["class", "coin-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "https://s2.coinmarketcap.com/static/img/coins/16x16/", _v.context.cell.row.rowData.id, ".png"); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 3, 0, currVal_1); }); }
function View_BlockGridComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Price "]))], null, null); }
function View_BlockGridComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](0, null, [" $ ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](1, 2)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 0, 0, _ck(_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit, "0.0-2")); _ck(_v, 0, 0, currVal_0); }); }
function View_BlockGridComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Total supply "]))], null, null); }
function View_BlockGridComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" $ ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit, "3.0-5")); _ck(_v, 1, 0, currVal_0); }); }
function View_BlockGridComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" (1 h) % "]))], null, null); }
function View_BlockGridComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " %"]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "percent-style-", ((_v.context.$implicit >= 0) ? "up" : "down"), ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 1, 0, currVal_1); }); }
function View_BlockGridComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" (24 h) % "]))], null, null); }
function View_BlockGridComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " %"]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "percent-style-", ((_v.context.$implicit >= 0) ? "up" : "down"), ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 1, 0, currVal_1); }); }
function View_BlockGridComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" (7d) % "]))], null, null); }
function View_BlockGridComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " %"]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "percent-style-", ((_v.context.$implicit >= 0) ? "up" : "down"), ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 1, 0, currVal_1); }); }
function View_BlockGridComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { grid1: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 75, "div", [["class", "sample-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 74, "div", [["class", "sample-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BlockGridComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["elseBlock", 2]], null, 0, null, View_BlockGridComponent_2)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 16777216, null, null, 70, "igx-grid", [["height", "555px"], ["width", "100%"]], [[4, "height", null], [4, "width", null], [1, "tabindex", 0], [1, "class", 0], [1, "role", 0], [1, "id", 0]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxGridComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxGridComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxGridBaseComponent"], null, [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxGridComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["GridBaseAPIService"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxGridAPIService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbf"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbf"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbb"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbb"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["GridBaseAPIService"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 5750784, [[1, 4], ["grid1", 4]], 6, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxGridComponent"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["GridBaseAPIService"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["ɵl"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxGridTransaction"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbf"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbb"]], { data: [0, "data"], height: [1, "height"], width: [2, "width"], allowFiltering: [3, "allowFiltering"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { columnList: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 3, { rowEditCustom: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, { rowEditText: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, { rowEditActions: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { rowEditTabsCUSTOM: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 7, { groupTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_BlockGridComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, [[7, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxGroupByRowTemplateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 6, "igx-column", [["field", "name"], ["header", "Name"]], null, null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxColumnComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 1097728, [[2, 4]], 3, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxColumnComponent"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["GridBaseAPIService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { field: [0, "field"], header: [1, "header"], filterable: [2, "filterable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 8, { cellTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 9, { headTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 10, { editorTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_BlockGridComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, [[8, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCellTemplateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 8, "igx-column", [["dataType", "number"], ["field", "quotes.USD.price"], ["filterable", "true"]], null, null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxColumnComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 1097728, [[2, 4]], 3, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxColumnComponent"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["GridBaseAPIService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { field: [0, "field"], filterable: [1, "filterable"], dataType: [2, "dataType"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 11, { cellTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 12, { headTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 13, { editorTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_BlockGridComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, [[12, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCellHeaderTemplateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_BlockGridComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, [[11, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCellTemplateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 8, "igx-column", [["dataType", "number"], ["field", "total_supply"], ["filterable", "true"], ["sortable", "true"]], null, null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxColumnComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 1097728, [[2, 4]], 3, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxColumnComponent"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["GridBaseAPIService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { field: [0, "field"], sortable: [1, "sortable"], filterable: [2, "filterable"], hidden: [3, "hidden"], dataType: [4, "dataType"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 14, { cellTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 15, { headTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 16, { editorTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_BlockGridComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, [[15, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCellHeaderTemplateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_BlockGridComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, [[14, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCellTemplateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 8, "igx-column", [["dataType", "number"], ["field", "quotes.USD.percent_change_1h"], ["sortable", "true"], ["width", "160"]], null, null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxColumnComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 1097728, [[2, 4]], 3, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxColumnComponent"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["GridBaseAPIService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { field: [0, "field"], sortable: [1, "sortable"], hidden: [2, "hidden"], width: [3, "width"], cellClasses: [4, "cellClasses"], dataType: [5, "dataType"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 17, { cellTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 18, { headTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 19, { editorTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_BlockGridComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 16384, [[18, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCellHeaderTemplateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_BlockGridComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, [[17, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCellTemplateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 8, "igx-column", [["dataType", "number"], ["field", "quotes.USD.percent_change_24h"], ["sortable", "true"]], null, null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxColumnComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 1097728, [[2, 4]], 3, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxColumnComponent"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["GridBaseAPIService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { field: [0, "field"], sortable: [1, "sortable"], groupable: [2, "groupable"], hidden: [3, "hidden"], cellClasses: [4, "cellClasses"], dataType: [5, "dataType"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 20, { cellTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 21, { headTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 22, { editorTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_BlockGridComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 16384, [[21, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCellHeaderTemplateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_BlockGridComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 16384, [[20, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCellTemplateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 8, "igx-column", [["dataType", "number"], ["field", "quotes.USD.percent_change_7d"], ["sortable", "true"]], null, null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxColumnComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 1097728, [[2, 4]], 3, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxColumnComponent"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["GridBaseAPIService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { field: [0, "field"], sortable: [1, "sortable"], cellClasses: [2, "cellClasses"], dataType: [3, "dataType"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 23, { cellTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 24, { headTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 25, { editorTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_BlockGridComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 16384, [[24, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCellHeaderTemplateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_BlockGridComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 16384, [[23, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCellTemplateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 4, "igx-column", [["dataType", "boolean"], ["field", "daily_scale"], ["header", "Daily Scale"]], null, null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxColumnComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 1097728, [[2, 4]], 3, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxColumnComponent"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["GridBaseAPIService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { field: [0, "field"], header: [1, "header"], groupable: [2, "groupable"], hidden: [3, "hidden"], dataType: [4, "dataType"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 26, { cellTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 27, { headTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 28, { editorTemplate: 0 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.hideColumn; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6); _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_8 = _co.remoteData; var currVal_9 = "555px"; var currVal_10 = "100%"; var currVal_11 = true; _ck(_v, 12, 0, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = "name"; var currVal_13 = "Name"; var currVal_14 = true; _ck(_v, 22, 0, currVal_12, currVal_13, currVal_14); var currVal_15 = "quotes.USD.price"; var currVal_16 = "true"; var currVal_17 = "number"; _ck(_v, 29, 0, currVal_15, currVal_16, currVal_17); var currVal_18 = "total_supply"; var currVal_19 = "true"; var currVal_20 = "true"; var currVal_21 = _co.hideColumn; var currVal_22 = "number"; _ck(_v, 38, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_23 = "quotes.USD.percent_change_1h"; var currVal_24 = "true"; var currVal_25 = _co.hideColumn; var currVal_26 = "160"; var currVal_27 = _co.changes1h; var currVal_28 = "number"; _ck(_v, 47, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28); var currVal_29 = "quotes.USD.percent_change_24h"; var currVal_30 = "true"; var currVal_31 = true; var currVal_32 = _co.hideColumn; var currVal_33 = _co.changes24h; var currVal_34 = "number"; _ck(_v, 56, 0, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34); var currVal_35 = "quotes.USD.percent_change_7d"; var currVal_36 = "true"; var currVal_37 = _co.changes7d; var currVal_38 = "number"; _ck(_v, 65, 0, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_39 = "daily_scale"; var currVal_40 = "Daily Scale"; var currVal_41 = true; var currVal_42 = true; var currVal_43 = "boolean"; _ck(_v, 74, 0, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).height; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).width; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).tabindex; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).hostClass; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).hostRole; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).id; _ck(_v, 7, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
function View_BlockGridComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-block-grid", [], null, [["window", "resize"]], function (_v, en, $event) { var ad = true; if (("window:resize" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onResize($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, View_BlockGridComponent_0, RenderType_BlockGridComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _block_grid_component__WEBPACK_IMPORTED_MODULE_5__["BlockGridComponent"], [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BlockGridComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-block-grid", _block_grid_component__WEBPACK_IMPORTED_MODULE_5__["BlockGridComponent"], View_BlockGridComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/block-grid/block-grid.component.scss.shim.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/block-grid/block-grid.component.scss.shim.ngstyle.js ***!
  \**********************************************************************/
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
var styles = ["#refreshBtn[_ngcontent-%COMP%] {\n  margin-bottom: 20px; }\n\n#refreshFabBtn[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 33px;\n  z-index: 998;\n  bottom: 33px; }\n\n.coin-title[_ngcontent-%COMP%] {\n  font-size: 16px; }\n\n.coin-logo[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: 24px;\n  height: 24px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.9); }"];



/***/ }),

/***/ "./src/app/block-grid/block-grid.component.ts":
/*!****************************************************!*\
  !*** ./src/app/block-grid/block-grid.component.ts ***!
  \****************************************************/
/*! exports provided: BlockGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockGridComponent", function() { return BlockGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BlockGridComponent = /** @class */ (function () {
    function BlockGridComponent(data, router) {
        this.data = data;
        this.router = router;
        this.positive1h = function (rowData) {
            return rowData['quotes.USD.percent_change_1h'] > 0;
        };
        this.negative1h = function (rowData) {
            return rowData['quotes.USD.percent_change_1h'] < 0;
        };
        this.positive24h = function (rowData) {
            return rowData['quotes.USD.percent_change_24h'] > 0;
        };
        this.negative24h = function (rowData) {
            return rowData['quotes.USD.percent_change_24h'] < 0;
        };
        this.positive7d = function (rowData) {
            return rowData['quotes.USD.percent_change_7d'] > 0;
        };
        this.negative7d = function (rowData) {
            return rowData['quotes.USD.percent_change_7d'] < 0;
        };
        // tslint:disable-next-line:member-ordering
        this.changes1h = {
            positive: this.positive1h,
            negative: this.negative1h
        };
        // tslint:disable-next-line:member-ordering
        this.changes24h = {
            positive: this.positive24h,
            negative: this.negative24h
        };
        // tslint:disable-next-line:member-ordering
        this.changes7d = {
            positive: this.positive7d,
            negative: this.negative7d
        };
        this.remoteData = [];
    }
    BlockGridComponent.prototype.onResize = function (event) {
        this.windowWidth = event.target.innerWidth;
    };
    BlockGridComponent.prototype.ngOnInit = function () {
        this.loadData();
        this.windowWidth = window.innerWidth;
    };
    // tslint:disable-next-line:use-life-cycle-interface
    BlockGridComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.grid1.groupBy({ fieldName: 'daily_scale', dir: 2 });
        this.grid1.onGroupingDone.subscribe(function (value) {
            if (value.expressions.length === 0) {
                return;
            }
            _this.grid1.clearGrouping('quotes.USD.percent_change_24h');
            _this.grid1.groupBy({ fieldName: 'daily_scale', dir: 2 });
        });
        setTimeout(function () {
            _this.refreshGrid();
        }, 100);
    };
    Object.defineProperty(BlockGridComponent.prototype, "hideColumn", {
        get: function () {
            return this.windowWidth && this.windowWidth < 800;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlockGridComponent.prototype, "columnPercent", {
        get: function () {
            if (this.windowWidth && this.windowWidth < 800) {
                return '33.3%';
            }
            else {
                return '16%';
            }
        },
        enumerable: true,
        configurable: true
    });
    BlockGridComponent.prototype.loadData = function () {
        var _this = this;
        this.data.getData().subscribe(function (res) {
            _this.remoteData = _this.data.sortDataByKey(res, 'rank');
        });
    };
    BlockGridComponent.prototype.refreshGrid = function () {
        this.grid1.reflow();
        this.loadData();
    };
    return BlockGridComponent;
}());



/***/ }),

/***/ "./src/app/block-item.service.ts":
/*!***************************************!*\
  !*** ./src/app/block-item.service.ts ***!
  \***************************************/
/*! exports provided: ItemService, BlockItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockItem", function() { return BlockItem; });
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");






var ItemService = /** @class */ (function () {
    function ItemService(db, auth, afs) {
        var _this = this;
        this.db = db;
        this.auth = auth;
        this.afs = afs;
        this.items = null; //  list of objects
        this.auth.authState.subscribe(function (user) {
            if (user) {
                _this.userId = user.uid;
            }
        });
    }
    // Return an observable list with optional query
    // You will usually call this from OnInit in a component
    ItemService.prototype.getItemsList = function () {
        if (!this.userId) {
            return;
        }
        this.items = this.db.list("items/" + this.userId);
        return this.items;
    };
    ItemService.prototype.createItem = function (item) {
        this.items = this.getItemsList();
        this.items.push(item);
        var listObservable = this.items.snapshotChanges();
        listObservable.subscribe();
    };
    ItemService.prototype.updateItem = function (key, item) {
        this.items.update(key, item).catch(function (error) { return console.log(error); });
    };
    ItemService.prototype.deleteItem = function (key) {
        this.items.remove(key).catch(function (error) { return console.log(error); });
    };
    return ItemService;
}());

var BlockItem = /** @class */ (function () {
    function BlockItem() {
    }
    return BlockItem;
}());



/***/ }),

/***/ "./src/app/block-list/block-list.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/block-list/block-list.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_BlockListComponent, View_BlockListComponent_0, View_BlockListComponent_Host_0, BlockListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BlockListComponent", function() { return RenderType_BlockListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BlockListComponent_0", function() { return View_BlockListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BlockListComponent_Host_0", function() { return View_BlockListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockListComponentNgFactory", function() { return BlockListComponentNgFactory; });
/* harmony import */ var _block_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-list.component.scss.shim.ngstyle */ "./src/app/block-list/block-list.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/igniteui-angular/igniteui-angular.ngfactory */ "./node_modules/igniteui-angular/igniteui-angular.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _block_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block-list.component */ "./src/app/block-list/block-list.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_BlockListComponent = [_block_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BlockListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BlockListComponent, data: { "animation": [{ type: 7, name: "listAnimation", definitions: [{ type: 1, expr: "* <=> *", animation: [{ type: 11, selector: ":enter", animation: [{ type: 6, styles: { opacity: 0, transform: "translateY(-15px)" }, offset: null }, { type: 12, timings: "50ms", animation: { type: 4, styles: { type: 6, styles: { opacity: 1, transform: "translateY(0px)" }, offset: null }, timings: "550ms ease-out" } }], options: { optional: true } }, { type: 11, selector: ":leave", animation: { type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null }, timings: "50ms" }, options: { optional: true } }], options: null }], options: {} }] } });

function View_BlockListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "igx-suffix", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.searchCrypto = null) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxSuffixDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "igx-icon", [], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["clear"]))], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).cssClass; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ariaHidden; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).id; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).getInactive; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).getIconColor; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
function View_BlockListComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "igx-list-item", [], [[1, "role", 0], [1, "aria-label", 0], [4, "touch-action", null], [2, "igx-list__header", null], [2, "igx-list__item-base", null], [4, "display", null]], [[null, "click"], [null, "panstart"], [null, "panmove"], [null, "panend"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).clicked($event) !== false);
        ad = (pd_0 && ad);
    } if (("panstart" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).panStart($event) !== false);
        ad = (pd_1 && ad);
    } if (("panmove" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).panMove($event) !== false);
        ad = (pd_2 && ad);
    } if (("panend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).panEnd($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxListItemComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxListItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcg"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcg"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, [[3, 4], ["item", 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxListItemComponent"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxListComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 17, "div", [["class", "crypto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 16, "div", [["class", "crypto__info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 15, "span", [["class", "crypto__item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "div", [["class", "crypto__name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "igx-avatar", [["class", "crypto__avatar"], ["roundShape", "true"], ["size", "small"]], [[1, "aria-label", 0], [1, "role", 0], [2, "igx-avatar", null], [1, "id", 0], [2, "igx-avatar--rounded", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxAvatarComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxAvatarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4308992, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxAvatarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { roundShape: [0, "roundShape"], src: [1, "src"], size: [2, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 9, "div", [["class", "crypto__details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "span", [["class", "crypto__price"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, ["$", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "span", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, [" ", " % "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "igx-icon", [], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconService"]], { iconColor: [0, "iconColor"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, 0, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "span", [["class", "li_item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["(7d)"]))], function (_ck, _v) { var currVal_11 = "true"; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "https://s2.coinmarketcap.com/static/img/coins/32x32/", _v.context.$implicit["id"], ".png"); var currVal_13 = "small"; _ck(_v, 8, 0, currVal_11, currVal_12, currVal_13); var currVal_23 = ((_v.context.$implicit["quotes.USD.percent_change_7d"] >= 0) ? "green" : "red"); _ck(_v, 17, 0, currVal_23); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).role; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).ariaLabel; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).touchAction; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).headerStyle; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).innerStyle; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).display; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ariaLabel; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).role; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).cssClass; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).id; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).roundShape; _ck(_v, 7, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_14 = _v.context.$implicit.name; _ck(_v, 10, 0, currVal_14); var currVal_15 = _v.context.$implicit["quotes.USD.price"]; _ck(_v, 13, 0, currVal_15); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "percent-style-", ((_v.context.$implicit["quotes.USD.percent_change_7d"] >= 0) ? "up" : "down"), ""); _ck(_v, 14, 0, currVal_16); var currVal_17 = _v.context.$implicit["quotes.USD.percent_change_7d"]; _ck(_v, 15, 0, currVal_17); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).cssClass; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ariaHidden; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).id; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).getInactive; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).getIconColor; _ck(_v, 16, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_24 = ((_v.context.$implicit["quotes.USD.percent_change_7d"] >= 0) ? "arrow_drop_up" : "arrow_drop_down"); _ck(_v, 18, 0, currVal_24); }); }
function View_BlockListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 33, "div", [["class", "sample-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 17, "igx-input-group", [["class", "search"], ["type", "search"]], [[1, "id", 0], [2, "igx-input-group", null], [2, "igx-input-group--placeholder", null], [2, "igx-input-group--required", null], [2, "igx-input-group--focused", null], [2, "igx-input-group--box", null], [2, "igx-input-group--border", null], [2, "igx-input-group--search", null], [2, "igx-input-group--disabled", null], [2, "igx-input-group--valid", null], [2, "igx-input-group--invalid", null], [2, "igx-input-group--warning", null], [2, "igx-input-group--filled", null], [2, "igx-input-group--cosy", null], [2, "igx-input-group--comfortable", null], [2, "igx-input-group--compact", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxInputGroupComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxInputGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 2, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxInputGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["DisplayDensityToken"]]], { type: [0, "type"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { hints: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { input: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 1, 4, "igx-prefix", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxPrefixDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "igx-icon", [], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["search"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, [["search", 1]], 3, 6, "input", [["igxInput", ""], ["placeholder", "Search by name"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "igx-input-group__input", null], [2, "igx-input-group__textarea", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("focus" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onFocus($event) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onBlur($event) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.searchCrypto = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 4341760, [[2, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxInputDirective"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxInputGroupComponent"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 4, 1, null, View_BlockListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 14, "div", [["class", "list-sample"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 13, "igx-list", [], [[24, "@listAnimation", 0], [1, "id", 0], [1, "role", 0], [2, "igx-list-empty", null], [2, "igx-list", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxListComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 49152, null, 5, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxListComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { children: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, { emptyListTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 5, { dataLoadingTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 6, { listItemLeftPanningTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 7, { listItemRightPanningTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 3, "igx-list-item", [["isHeader", "true"]], [[1, "role", 0], [1, "aria-label", 0], [4, "touch-action", null], [2, "igx-list__header", null], [2, "igx-list__item-base", null], [4, "display", null]], [[null, "click"], [null, "panstart"], [null, "panmove"], [null, "panend"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).clicked($event) !== false);
        ad = (pd_0 && ad);
    } if (("panstart" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).panStart($event) !== false);
        ad = (pd_1 && ad);
    } if (("panmove" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).panMove($event) !== false);
        ad = (pd_2 && ad);
    } if (("panend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).panEnd($event) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxListItemComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxListItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](4608, null, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcg"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["ɵcg"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 49152, [[3, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxListItemComponent"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxListComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { isHeader: [0, "isHeader"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Cryptocurrencies"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_BlockListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxFilterPipe"], [])], function (_ck, _v) { var _co = _v.component; var currVal_16 = "search"; _ck(_v, 2, 0, currVal_16); _ck(_v, 8, 0); var currVal_31 = _co.searchCrypto; _ck(_v, 13, 0, currVal_31); var currVal_32 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).value.length > 0); _ck(_v, 18, 0, currVal_32); var currVal_44 = "true"; _ck(_v, 29, 0, currVal_44); var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 32, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).transform(_co.remoteData, _co.filterCryptos)); _ck(_v, 32, 0, currVal_45); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).defaultClass; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).hasPlaceholder; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isRequired; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isFocused; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isBox; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isBorder; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isSearch; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).validClass; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).invalidClass; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).hasWarning; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isFilled; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isDisplayDensityCosy; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isDisplayDensityComfortable; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).isDisplayDensityCompact; _ck(_v, 1, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15]); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).cssClass; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).ariaHidden; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).id; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).getInactive; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).getIconColor; _ck(_v, 7, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).isInput; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).isTextArea; _ck(_v, 10, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30); var currVal_33 = _co.remoteData.length; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).id; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).role; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).isListEmpty; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).cssClass; _ck(_v, 20, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37); var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).role; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).ariaLabel; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).touchAction; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).headerStyle; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).innerStyle; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).display; _ck(_v, 27, 0, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43); }); }
function View_BlockListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-block-list", [], null, null, null, View_BlockListComponent_0, RenderType_BlockListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _block_list_component__WEBPACK_IMPORTED_MODULE_7__["BlockListComponent"], [_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BlockListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-block-list", _block_list_component__WEBPACK_IMPORTED_MODULE_7__["BlockListComponent"], View_BlockListComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/block-list/block-list.component.scss.shim.ngstyle.js":
/*!**********************************************************************!*\
  !*** ./src/app/block-list/block-list.component.scss.shim.ngstyle.js ***!
  \**********************************************************************/
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
var styles = ["[_nghost-%COMP%] {\n  display: block;\n  flex: initial; }\n\n@media only screen and (max-width: 786px) {\n  [_nghost-%COMP%] {\n    flex: 1 0 0%; } }\n\n.list-sample[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  min-width: 500px;\n  overflow-y: auto;\n  max-height: calc(100vh - 154px);\n  min-height: 200px;\n  border-radius: 5px;\n  margin-top: 8px; }\n\n@media only screen and (max-width: 786px) {\n    .list-sample[_ngcontent-%COMP%] {\n      min-width: auto; } }\n\n.crypto[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center; }\n\n.crypto__info[_ngcontent-%COMP%] {\n  flex: 1 0 0%; }\n\n.crypto__item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center; }\n\n@media only screen and (max-width: 639px) {\n    .crypto__item[_ngcontent-%COMP%] {\n      flex-direction: column;\n      align-items: flex-start; } }\n\n.crypto__avatar[_ngcontent-%COMP%] {\n  margin-right: 8px; }\n\n.crypto__name[_ngcontent-%COMP%], .crypto__details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 1 0 0%; }\n\n.crypto__details[_ngcontent-%COMP%] {\n  justify-content: space-between; }\n\n.crypto__details[_ngcontent-%COMP%]   .crypto__price[_ngcontent-%COMP%] {\n    margin-right: 16px; }\n\n.percent-style-down[_ngcontent-%COMP%] {\n  white-space: nowrap; }\n\n@media only screen and (max-width: 639px) {\n  .crypto__details[_ngcontent-%COMP%] {\n    min-width: 100%; }\n  .igx-navbar__title[_ngcontent-%COMP%] {\n    max-width: 144px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; } }"];



/***/ }),

/***/ "./src/app/block-list/block-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/block-list/block-list.component.ts ***!
  \****************************************************/
/*! exports provided: BlockListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockListComponent", function() { return BlockListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");



var BlockListComponent = /** @class */ (function () {
    function BlockListComponent(data) {
        this.data = data;
        this.remoteData = [];
    }
    BlockListComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    BlockListComponent.prototype.loadData = function () {
        var _this = this;
        this.data.getData()
            .subscribe(function (res) {
            _this.remoteData = _this.data.sortDataByKey(res, 'rank');
        });
    };
    Object.defineProperty(BlockListComponent.prototype, "filterCryptos", {
        get: function () {
            var fo = new igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxFilterOptions"]();
            fo.key = 'name';
            fo.inputValue = this.searchCrypto;
            return fo;
        },
        enumerable: true,
        configurable: true
    });
    BlockListComponent.prototype.toggleFavorite = function (crypto) {
        crypto.isFavorite = !crypto.isFavorite;
    };
    return BlockListComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _assets_offlineData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/offlineData */ "./src/assets/offlineData.ts");



var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
        this.flattenObject = function (ob) {
            var toReturn = {};
            for (var i in ob) {
                if (!ob.hasOwnProperty(i)) {
                    continue;
                }
                if ((typeof ob[i]) === 'object') {
                    var flatObject = this.flattenObject(ob[i]);
                    for (var x in flatObject) {
                        if (!flatObject.hasOwnProperty(x)) {
                            continue;
                        }
                        toReturn[i + '.' + x] = flatObject[x];
                    }
                }
                else {
                    toReturn[i] = ob[i];
                }
            }
            return toReturn;
        };
    }
    DataService.prototype.getData = function () {
        var _this = this;
        if (!this.cachedData) {
            // return this._http.get('https://api.coinmarketcap.com/v1/ticker/')
            this.cachedData = this._http.get('https://api.coinmarketcap.com/v2/ticker/?convert=BTC&limit=1000')
                .map(function (result) {
                var newData = [];
                if (result['metadata'].error === null) {
                    var fetchedData = Object.keys(result['data']);
                    for (var _i = 0, fetchedData_1 = fetchedData; _i < fetchedData_1.length; _i++) {
                        var key = fetchedData_1[_i];
                        if (result['data'][key].quotes['USD']['percent_change_24h'] >= 0) {
                            result['data'][key]['daily_scale'] = true;
                        }
                        else {
                            result['data'][key]['daily_scale'] = false;
                        }
                        newData.push(_this.flattenObject(result['data'][key]));
                    }
                }
                else {
                    newData = _assets_offlineData__WEBPACK_IMPORTED_MODULE_2__["offlineData"];
                }
                return newData;
            });
        }
        return this.cachedData;
    };
    DataService.prototype.getLastSevenDaysPrices = function (name, forDays) {
        return this._http.get('https://min-api.cryptocompare.com/data/histoday?fsym=' + name.toUpperCase() +
            '&tsym=USD&limit=' + forDays).map(function (result) {
            return result;
        });
    };
    DataService.prototype.getSpecificCoinData = function (cryptoId) {
        var _this = this;
        return this._http.get('https://api.coinmarketcap.com/v2/ticker/' + cryptoId + '/?structure=array').map(function (result) {
            return _this.flattenObject(result['data'][0]);
        });
    };
    DataService.prototype.getCryptoIdFromSymbol = function (symbol) {
        return this._http.get('https://api.coinmarketcap.com/v2/listings/').map(function (result) {
            var crypto = result['data'].filter(function (item) { return item.symbol === symbol; });
            return crypto[0];
        });
    };
    DataService.prototype.sortDataByKey = function (array, keyToSortBy) {
        function sortByKey(a, b) {
            var x = a[keyToSortBy];
            var y = b[keyToSortBy];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }
        return array.sort(sortByKey);
    };
    return DataService;
}());



/***/ }),

/***/ "./src/app/email/email.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/email/email.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_EmailComponent, View_EmailComponent_0, View_EmailComponent_Host_0, EmailComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EmailComponent", function() { return RenderType_EmailComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmailComponent_0", function() { return View_EmailComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmailComponent_Host_0", function() { return View_EmailComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponentNgFactory", function() { return EmailComponentNgFactory; });
/* harmony import */ var _email_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.component.scss.shim.ngstyle */ "./src/app/email/email.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/igniteui-angular/igniteui-angular.ngfactory */ "./node_modules/igniteui-angular/igniteui-angular.ngfactory.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _email_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email.component */ "./src/app/email/email.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_EmailComponent = [_email_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_EmailComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_EmailComponent, data: { "animation": [{ type: 7, name: "moveIn", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 0, name: "*", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 1, expr: ":enter", animation: [{ type: 6, styles: { opacity: "0", transform: "translateX(100px)" }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: "1", transform: "translateX(0)" }, offset: null }, timings: "0.8s ease-in-out" }], options: null }], options: {} }, { type: 7, name: "fallIn", definitions: [{ type: 1, expr: ":enter", animation: [{ type: 6, styles: { opacity: "0", transform: "translateY(40px)" }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: "1", transform: "translateY(0)" }, offset: null }, timings: ".4s .2s ease-in-out" }], options: null }, { type: 1, expr: ":leave", animation: [{ type: 6, styles: { opacity: "1", transform: "translateX(0)" }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: "0", transform: "translateX(-200px)" }, offset: null }, timings: ".3s ease-in-out" }], options: null }], options: {} }] } });

function View_EmailComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error"]], [[24, "@fallIn", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.state; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.error; _ck(_v, 1, 0, currVal_1); }); }
function View_EmailComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 63, "div", [["class", "form-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 62, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "igx-icon", [["id", "lockIcon"], ["name", "email"]], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxIconService"]], { id: [0, "id"], iconName: [1, "iconName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_EmailComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 54, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4210688, [["formData", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 19, "igx-input-group", [], [[1, "id", 0], [2, "igx-input-group", null], [2, "igx-input-group--placeholder", null], [2, "igx-input-group--required", null], [2, "igx-input-group--focused", null], [2, "igx-input-group--box", null], [2, "igx-input-group--border", null], [2, "igx-input-group--search", null], [2, "igx-input-group--disabled", null], [2, "igx-input-group--valid", null], [2, "igx-input-group--invalid", null], [2, "igx-input-group--warning", null], [2, "igx-input-group--filled", null], [2, "igx-input-group--cosy", null], [2, "igx-input-group--comfortable", null], [2, "igx-input-group--compact", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IgxInputGroupComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IgxInputGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 49152, null, 2, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxInputGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["DisplayDensityToken"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { hints: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { input: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 2, 2, "label", [["for", "email"], ["igxLabel", ""]], [[2, "igx-input-group__label", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxLabelDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Email address"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 3, 8, "input", [["igxInput", ""], ["name", "email"], ["required", ""], ["type", "email"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "igx-input-group__input", null], [2, "igx-input-group__textarea", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("focus" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onFocus($event) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onBlur($event) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.email = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 4341760, [[2, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxInputDirective"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxInputGroupComponent"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 4, 3, "igx-suffix", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxSuffixDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "igx-icon", [["name", "email"]], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxIconService"]], { iconName: [0, "iconName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 19, "igx-input-group", [], [[1, "id", 0], [2, "igx-input-group", null], [2, "igx-input-group--placeholder", null], [2, "igx-input-group--required", null], [2, "igx-input-group--focused", null], [2, "igx-input-group--box", null], [2, "igx-input-group--border", null], [2, "igx-input-group--search", null], [2, "igx-input-group--disabled", null], [2, "igx-input-group--valid", null], [2, "igx-input-group--invalid", null], [2, "igx-input-group--warning", null], [2, "igx-input-group--filled", null], [2, "igx-input-group--cosy", null], [2, "igx-input-group--comfortable", null], [2, "igx-input-group--compact", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IgxInputGroupComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IgxInputGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 49152, null, 2, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxInputGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["DisplayDensityToken"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { hints: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, { input: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, 2, 2, "label", [["for", "password"], ["igxLabel", ""]], [[2, "igx-input-group__label", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxLabelDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, 3, 8, "input", [["igxInput", ""], ["name", "password"], ["required", ""], ["type", "password"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "igx-input-group__input", null], [2, "igx-input-group__textarea", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("focus" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).onFocus($event) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).onBlur($event) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.password = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 4341760, [[4, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxInputDirective"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxInputGroupComponent"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, 4, 3, "igx-suffix", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxSuffixDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 1, "igx-icon", [["name", "lock"]], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxIconService"]], { iconName: [0, "iconName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 9, "div", [["class", "signup-form-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 4, "a", [["id", "goback"], ["igxButton", "flat"], ["igxRipple", ""], ["routerLink", "/login"]], [[1, "target", 0], [8, "href", 4], [1, "role", 0]], [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("mousedown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).onMouseDown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).onClick($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxRippleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { rippleColor: [0, "rippleColor"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Go back"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 3, "button", [["class", "basic-btn"], ["id", "loginBtn"], ["igxButton", "raised"], ["igxRipple", ""], ["type", "submit"]], [[1, "role", 0]], [[null, "mousedown"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).onMouseDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).onClick($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxRippleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { rippleColor: [0, "rippleColor"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { type: [0, "type"], disabled: [1, "disabled"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Log in"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 2, "a", [["class", "alc"], ["routerLink", "/signup"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Don't have an account?"]))], function (_ck, _v) { var _co = _v.component; var currVal_5 = "lockIcon"; var currVal_6 = "email"; _ck(_v, 3, 0, currVal_5, currVal_6); var currVal_7 = _co.error; _ck(_v, 5, 0, currVal_7); var currVal_42 = ""; _ck(_v, 20, 0, currVal_42); var currVal_43 = "email"; var currVal_44 = _co.email; _ck(_v, 23, 0, currVal_43, currVal_44); var currVal_50 = "email"; _ck(_v, 30, 0, currVal_50); var currVal_78 = ""; _ck(_v, 40, 0, currVal_78); var currVal_79 = "password"; var currVal_80 = _co.password; _ck(_v, 43, 0, currVal_79, currVal_80); var currVal_86 = "lock"; _ck(_v, 50, 0, currVal_86); var currVal_90 = "/login"; _ck(_v, 53, 0, currVal_90); var currVal_91 = ""; _ck(_v, 54, 0, currVal_91); var currVal_92 = "flat"; _ck(_v, 55, 0, currVal_92); var currVal_94 = ""; _ck(_v, 58, 0, currVal_94); var currVal_95 = "raised"; var currVal_96 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).valid; _ck(_v, 59, 0, currVal_95, currVal_96); var currVal_99 = "/signup"; _ck(_v, 62, 0, currVal_99); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).cssClass; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ariaHidden; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).id; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).getInactive; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).getIconColor; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).id; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).defaultClass; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).hasPlaceholder; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isRequired; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isFocused; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isBox; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isBorder; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isSearch; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabled; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).validClass; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).invalidClass; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).hasWarning; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isFilled; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isDisplayDensityCosy; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isDisplayDensityComfortable; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isDisplayDensityCompact; _ck(_v, 11, 1, [currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30]); var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).defaultClass; _ck(_v, 15, 0, currVal_31); var currVal_32 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).required ? "" : null); var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassUntouched; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassTouched; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPristine; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassDirty; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassValid; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassInvalid; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPending; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).isInput; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).isTextArea; _ck(_v, 18, 0, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41); var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).cssClass; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ariaHidden; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).id; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).getInactive; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).getIconColor; _ck(_v, 29, 0, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49); var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).id; var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).defaultClass; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).hasPlaceholder; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).isRequired; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).isFocused; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).isBox; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).isBorder; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).isSearch; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).disabled; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).validClass; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).invalidClass; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).hasWarning; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).isFilled; var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).isDisplayDensityCosy; var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).isDisplayDensityComfortable; var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).isDisplayDensityCompact; _ck(_v, 31, 1, [currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66]); var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).defaultClass; _ck(_v, 35, 0, currVal_67); var currVal_68 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).required ? "" : null); var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassUntouched; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassTouched; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassPristine; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassDirty; var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassValid; var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassInvalid; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassPending; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).isInput; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).isTextArea; _ck(_v, 38, 0, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77); var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).cssClass; var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ariaHidden; var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).id; var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).getInactive; var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).getIconColor; _ck(_v, 49, 0, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85); var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).target; var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).href; var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).role; _ck(_v, 52, 0, currVal_87, currVal_88, currVal_89); var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).role; _ck(_v, 57, 0, currVal_93); var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).target; var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).href; _ck(_v, 61, 0, currVal_97, currVal_98); }); }
function View_EmailComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-email", [], [[40, "@moveIn", 0]], null, null, View_EmailComponent_0, RenderType_EmailComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _email_component__WEBPACK_IMPORTED_MODULE_7__["EmailComponent"], [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
var EmailComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-email", _email_component__WEBPACK_IMPORTED_MODULE_7__["EmailComponent"], View_EmailComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/email/email.component.scss.shim.ngstyle.js":
/*!************************************************************!*\
  !*** ./src/app/email/email.component.scss.shim.ngstyle.js ***!
  \************************************************************/
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
var styles = [""];



/***/ }),

/***/ "./src/app/email/email.component.ts":
/*!******************************************!*\
  !*** ./src/app/email/email.component.ts ***!
  \******************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var EmailComponent = /** @class */ (function () {
    function EmailComponent(afAuth, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.state = '';
        this.afAuth.authState.subscribe(function (auth) {
            if (auth) {
                _this.router.navigateByUrl('/statistics');
            }
        });
    }
    EmailComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password).then(function (success) {
                console.log(success);
                _this.router.navigate(['/statistics']);
            }).catch(function (err) {
                console.log(err);
                _this.error = err;
            });
        }
    };
    EmailComponent.prototype.ngOnInit = function () {
    };
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/home/home.component.ngfactory.js ***!
  \**************************************************/
/*! exports provided: RenderType_HomeComponent, View_HomeComponent_0, View_HomeComponent_Host_0, HomeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HomeComponent", function() { return RenderType_HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_0", function() { return View_HomeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_Host_0", function() { return View_HomeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponentNgFactory", function() { return HomeComponentNgFactory; });
/* harmony import */ var _home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.scss.shim.ngstyle */ "./src/app/home/home.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/igniteui-angular/igniteui-angular.ngfactory */ "./node_modules/igniteui-angular/igniteui-angular.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_HomeComponent = [_home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HomeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HomeComponent, data: { "animation": [{ type: 7, name: "flyInOut", definitions: [{ type: 0, name: "in", styles: { type: 6, styles: { width: 120, transform: "translateX(0)", opacity: 1 }, offset: null }, options: undefined }, { type: 1, expr: "void => *", animation: [{ type: 6, styles: { width: 10, transform: "translateX(50px)", opacity: 0 }, offset: null }, { type: 3, steps: [{ type: 4, styles: { type: 6, styles: { transform: "translateX(0)", width: 140 }, offset: null }, timings: "0.5s 0.3s ease" }, { type: 4, styles: { type: 6, styles: { opacity: 1 }, offset: null }, timings: "0.5s ease" }], options: null }], options: null }, { type: 1, expr: "* => void", animation: [{ type: 3, steps: [{ type: 4, styles: { type: 6, styles: { transform: "translateX(50px)", width: 20 }, offset: null }, timings: "0.5s ease" }, { type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null }, timings: "0.5s 0.4s ease" }], options: null }], options: null }], options: {} }] } });

function View_HomeComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "igx-suffix", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clear(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 6)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxSuffixDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "igx-icon", [], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["clear"]))], function (_ck, _v) { _ck(_v, 3, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).cssClass; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ariaHidden; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).id; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).getInactive; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).getIconColor; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
function View_HomeComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 39, "article", [["class", "sample-column card-wrapper"]], [[24, "@flyInOut", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 38, "igx-card", [], [[1, "id", 0]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxCardComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCardComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 11, "igx-card-header", [["class", "igx-card-header"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCardHeaderDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 9, "h3", [["class", "igx-card-header__title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", " (", ")"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 5, "button", [["igxButton", "icon"], ["igxRipple", ""]], [[1, "role", 0]], [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onMouseDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.openChart($event, _v.context.$implicit.symbol) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxRippleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { rippleColor: [0, "rippleColor"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "igx-icon", [["fontSet", "material"]], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconService"]], { font: [0, "font"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["trending_up"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 24, "igx-card-content", [["class", "igx-card-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCardContentDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 7, "p", [["class", "igx-card-content__text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" USD "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 3, "span", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](23, null, ["(", ")"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 3, "p", [["class", "igx-card-content__text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Rank: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](28, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 4, "p", [["class", "igx-card-content__text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Market Cap: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 2, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](32, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](33, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 5, "p", [["class", "igx-card-content__text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["7d change: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 3, "span", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](38, null, ["(", ")"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["%"]))], function (_ck, _v) { var currVal_6 = ""; _ck(_v, 10, 0, currVal_6); var currVal_7 = "icon"; _ck(_v, 11, 0, currVal_7); var currVal_13 = "material"; _ck(_v, 13, 0, currVal_13); }, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id; _ck(_v, 1, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "https://s2.coinmarketcap.com/static/img/coins/32x32/", _v.context.$implicit.id, ".png"); _ck(_v, 6, 0, currVal_2); var currVal_3 = _v.context.$implicit.name; var currVal_4 = _v.context.$implicit.symbol; _ck(_v, 8, 0, currVal_3, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).role; _ck(_v, 9, 0, currVal_5); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).cssClass; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ariaHidden; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).id; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).getInactive; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).getIconColor; _ck(_v, 12, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_14 = _v.context.$implicit["quotes.USD.price"]; _ck(_v, 19, 0, currVal_14); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "percent-style-", ((_v.context.$implicit["quotes.USD.percent_change_24h"] >= 0) ? "up" : "down"), ""); _ck(_v, 21, 0, currVal_15); var currVal_16 = _v.context.$implicit["quotes.USD.percent_change_24h"]; _ck(_v, 23, 0, currVal_16); var currVal_17 = _v.context.$implicit.rank; _ck(_v, 28, 0, currVal_17); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 32, 0, _ck(_v, 33, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit["quotes.USD.market_cap"], "3.0-5")); _ck(_v, 32, 0, currVal_18); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "percent-style-", ((_v.context.$implicit["quotes.USD.percent_change_7d"] >= 0) ? "up" : "down"), ""); _ck(_v, 36, 0, currVal_19); var currVal_20 = _v.context.$implicit["quotes.USD.percent_change_7d"]; _ck(_v, 38, 0, currVal_20); }); }
function View_HomeComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 23, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 22, "div", [["class", "sample-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 17, "igx-input-group", [["class", "searchBox"], ["type", "search"]], [[1, "id", 0], [2, "igx-input-group", null], [2, "igx-input-group--placeholder", null], [2, "igx-input-group--required", null], [2, "igx-input-group--focused", null], [2, "igx-input-group--box", null], [2, "igx-input-group--border", null], [2, "igx-input-group--search", null], [2, "igx-input-group--disabled", null], [2, "igx-input-group--valid", null], [2, "igx-input-group--invalid", null], [2, "igx-input-group--warning", null], [2, "igx-input-group--filled", null], [2, "igx-input-group--cosy", null], [2, "igx-input-group--comfortable", null], [2, "igx-input-group--compact", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxInputGroupComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxInputGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 49152, null, 2, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxInputGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["DisplayDensityToken"]]], { type: [0, "type"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { hints: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { input: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, [["input1", 1]], 3, 6, "input", [["igxInput", ""], ["placeholder", "Search by name"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "igx-input-group__input", null], [2, "igx-input-group__textarea", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("focus" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onFocus($event) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onBlur($event) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.search1 = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 4341760, [[2, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxInputDirective"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxInputGroupComponent"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, 1, 4, "igx-prefix", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxPrefixDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "igx-icon", [], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["search"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 4, 1, null, View_HomeComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 3, "div", [["class", "sample-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_HomeComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxFilterPipe"], [])], function (_ck, _v) { var _co = _v.component; var currVal_16 = "search"; _ck(_v, 3, 0, currVal_16); var currVal_26 = _co.search1; _ck(_v, 9, 0, currVal_26); _ck(_v, 16, 0); var currVal_32 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).value.length > 0); _ck(_v, 19, 0, currVal_32); var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 22, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).transform(_co.cryptos, _co.filterOptions)); _ck(_v, 22, 0, currVal_33); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).id; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).defaultClass; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).hasPlaceholder; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).isRequired; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).isFocused; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).isBox; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).isBorder; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).isSearch; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).validClass; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).invalidClass; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).hasWarning; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).isFilled; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).isDisplayDensityCosy; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).isDisplayDensityComfortable; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).isDisplayDensityCompact; _ck(_v, 2, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15]); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassUntouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassTouched; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPristine; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassDirty; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassValid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassInvalid; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPending; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isInput; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isTextArea; _ck(_v, 6, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25); var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).cssClass; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).ariaHidden; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).id; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).getInactive; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).getIconColor; _ck(_v, 15, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31); }); }
function View_HomeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_HomeComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.cryptos; _ck(_v, 2, 0, currVal_0); }, null); }
function View_HomeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], [_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HomeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-home", _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], View_HomeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/home/home.component.scss.shim.ngstyle.js":
/*!**********************************************************!*\
  !*** ./src/app/home/home.component.scss.shim.ngstyle.js ***!
  \**********************************************************/
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
var styles = ["a[_ngcontent-%COMP%] {\n  color: #731963; }\n\n.links[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0 35px; }\n\n#linksContainer[_ngcontent-%COMP%] {\n  flex-flow: row wrap;\n  display: flex;\n  justify-content: center; }\n\n.card-wrapper[_ngcontent-%COMP%] {\n  max-width: 279px;\n  min-width: 260px; }\n\n.searchBox[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.sample-content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 auto;\n  justify-content: flex-start; }\n\n.igx-card-header[_ngcontent-%COMP%], .igx-card-header__title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.igx-card-content[_ngcontent-%COMP%] {\n  text-align: left; }\n\n.igx-card-header[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important; }\n\n.igx-card-header__title[_ngcontent-%COMP%] {\n  font-size: 18px; }\n\n.igx-card-header__title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    margin-bottom: 8px; }"];



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(data, router) {
        this.data = data;
        this.router = router;
        this.objectKeys = Object.keys;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    Object.defineProperty(HomeComponent.prototype, "filterOptions", {
        get: function () {
            var fo = new igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxFilterOptions"]();
            fo.key = 'name';
            fo.inputValue = this.search1 ? this.search1 : '';
            return fo;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.getData = function () {
        var _this = this;
        this.data.getData()
            .subscribe(function (res) {
            _this.cryptos = _this.data.sortDataByKey(res, 'rank');
        });
    };
    HomeComponent.prototype.clear = function (input) {
        input.value = '';
        this.getData();
    };
    HomeComponent.prototype.openChart = function (evt, symbol) {
        this.router.navigate(['/statistics', { text: 'Volatility', iconName: 'show_chart', cryptoName: symbol, daysCount: 100 }]);
    };
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/loading-spinner/loading-spinner.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/loading-spinner/loading-spinner.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_LoadingSpinnerComponent, View_LoadingSpinnerComponent_0, View_LoadingSpinnerComponent_Host_0, LoadingSpinnerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LoadingSpinnerComponent", function() { return RenderType_LoadingSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoadingSpinnerComponent_0", function() { return View_LoadingSpinnerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoadingSpinnerComponent_Host_0", function() { return View_LoadingSpinnerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponentNgFactory", function() { return LoadingSpinnerComponentNgFactory; });
/* harmony import */ var _loading_spinner_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-spinner.component.scss.shim.ngstyle */ "./src/app/loading-spinner/loading-spinner.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading-spinner.component */ "./src/app/loading-spinner/loading-spinner.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_LoadingSpinnerComponent = [_loading_spinner_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LoadingSpinnerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LoadingSpinnerComponent, data: {} });

function View_LoadingSpinnerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "div", [["class", "double-bounce1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "div", [["class", "double-bounce2"]], null, null, null, null, null))], null, null); }
function View_LoadingSpinnerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loading-spinner", [], null, null, null, View_LoadingSpinnerComponent_0, RenderType_LoadingSpinnerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinnerComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LoadingSpinnerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-loading-spinner", _loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__["LoadingSpinnerComponent"], View_LoadingSpinnerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/loading-spinner/loading-spinner.component.scss.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/loading-spinner/loading-spinner.component.scss.shim.ngstyle.js ***!
  \********************************************************************************/
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
var styles = [".spinner[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  position: relative;\n  margin: 100px auto; }\n\n.double-bounce1[_ngcontent-%COMP%], .double-bounce2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out; }\n\n.double-bounce2[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }"];



/***/ }),

/***/ "./src/app/loading-spinner/loading-spinner.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/loading-spinner/loading-spinner.component.ts ***!
  \**************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var LoadingSpinnerComponent = /** @class */ (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    return LoadingSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/login/login.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_LoginComponent, View_LoginComponent_0, View_LoginComponent_Host_0, LoginComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LoginComponent", function() { return RenderType_LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginComponent_0", function() { return View_LoginComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LoginComponent_Host_0", function() { return View_LoginComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponentNgFactory", function() { return LoginComponentNgFactory; });
/* harmony import */ var _login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.scss.shim.ngstyle */ "./src/app/login/login.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/igniteui-angular/igniteui-angular.ngfactory */ "./node_modules/igniteui-angular/igniteui-angular.ngfactory.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loading_spinner_loading_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../loading-spinner/loading-spinner.component.ngfactory */ "./src/app/loading-spinner/loading-spinner.component.ngfactory.js");
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loading-spinner/loading-spinner.component */ "./src/app/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_LoginComponent = [_login_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LoginComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LoginComponent, data: { "animation": [{ type: 7, name: "moveIn", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 0, name: "*", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 1, expr: ":enter", animation: [{ type: 6, styles: { opacity: "0", transform: "translateX(100px)" }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: "1", transform: "translateX(0)" }, offset: null }, timings: "0.8s ease-in-out" }], options: null }], options: {} }] } });

function View_LoginComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.error; _ck(_v, 1, 0, currVal_0); }); }
function View_LoginComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 33, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "igx-icon", [["id", "lockIcon"], ["name", "lock_open"]], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxIconService"]], { id: [0, "id"], iconName: [1, "iconName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "button", [["class", "button"], ["id", "fb"], ["igxButton", "raised"], ["igxRipple", ""]], [[1, "role", 0]], [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onMouseDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).onClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.loginFb() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxRippleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { rippleColor: [0, "rippleColor"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "img", [["alt", ""], ["class", "s-logo"], ["src", "../../assets/images/facebook.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Login With Facebook"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 5, "button", [["class", "button"], ["id", "google"], ["igxButton", "raised"], ["igxRipple", ""]], [[1, "role", 0]], [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onMouseDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.loginGoogle() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxRippleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { rippleColor: [0, "rippleColor"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "img", [["alt", ""], ["class", "s-logo"], ["src", "../../assets/images/google.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Login With Google"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 8, "button", [["class", "button"], ["id", "email"], ["igxButton", "raised"], ["igxRipple", ""], ["routerLink", "/email"]], [[1, "role", 0]], [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("mousedown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onMouseDown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onClick($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxRippleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { rippleColor: [0, "rippleColor"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 2, "igx-icon", [["class", "s-logo"]], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxIconService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["email"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Email"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 7, "a", [["class", "alc"], ["routerLink", "/signup"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sign up for an "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "strong", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Account"]))], function (_ck, _v) { var _co = _v.component; var currVal_5 = "lockIcon"; var currVal_6 = "lock_open"; _ck(_v, 2, 0, currVal_5, currVal_6); var currVal_7 = _co.error; _ck(_v, 4, 0, currVal_7); var currVal_9 = ""; _ck(_v, 6, 0, currVal_9); var currVal_10 = "raised"; _ck(_v, 7, 0, currVal_10); var currVal_12 = ""; _ck(_v, 12, 0, currVal_12); var currVal_13 = "raised"; _ck(_v, 13, 0, currVal_13); var currVal_15 = "/email"; _ck(_v, 18, 0, currVal_15); var currVal_16 = ""; _ck(_v, 19, 0, currVal_16); var currVal_17 = "raised"; _ck(_v, 20, 0, currVal_17); _ck(_v, 22, 0); var currVal_25 = "/signup"; _ck(_v, 27, 0, currVal_25); var currVal_26 = "active"; _ck(_v, 28, 0, currVal_26); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).cssClass; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).ariaHidden; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).getInactive; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).getIconColor; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).role; _ck(_v, 5, 0, currVal_8); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).role; _ck(_v, 11, 0, currVal_11); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).role; _ck(_v, 17, 0, currVal_14); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).cssClass; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).ariaHidden; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).id; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).getInactive; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).getIconColor; _ck(_v, 21, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).target; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).href; _ck(_v, 26, 0, currVal_23, currVal_24); }); }
function View_LoginComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-loading-spinner", [], null, null, null, _loading_spinner_loading_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_LoadingSpinnerComponent_0"], _loading_spinner_loading_spinner_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_LoadingSpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__["LoadingSpinnerComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_LoginComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showSpinner; _ck(_v, 1, 0, currVal_0); }, null); }
function View_LoginComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "form-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["elseBlock", 2]], null, 0, null, View_LoginComponent_3))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.showSpinner; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_LoginComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-login", [], [[40, "@moveIn", 0]], null, null, View_LoginComponent_0, RenderType_LoginComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
var LoginComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-login", _login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], View_LoginComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/login/login.component.scss.shim.ngstyle.js":
/*!************************************************************!*\
  !*** ./src/app/login/login.component.scss.shim.ngstyle.js ***!
  \************************************************************/
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
var styles = ["#lock[_ngcontent-%COMP%] {\n  width: 40%;\n  margin: 1.5em auto 4em auto;\n  display: block; }\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 0 0 16px 0; }\n\n.button[_ngcontent-%COMP%]:last-of-type {\n    margin-bottom: 0; }\n\n#fb[_ngcontent-%COMP%] {\n  background: #3B5998;\n  color: #fff;\n  margin-top: 10px; }\n\n#google[_ngcontent-%COMP%] {\n  border: 1px solid #95989A;\n  background: #fff; }\n\n.s-logo[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  margin-right: 8px; }\n\n#email[_ngcontent-%COMP%] {\n  background: #ECECEC; }\n\n.error[_ngcontent-%COMP%] {\n  background: #f1f0ef;\n  padding: 1em;\n  width: 100%;\n  display: block;\n  margin-bottom: 20px; }"];



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);

// import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';



var LoginComponent = /** @class */ (function () {
    function LoginComponent(afAuth, router, route) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.route = route;
        this.return = '';
        this.googleAuthProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
        this.facebookAuthProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider();
        this.showSpinner = localStorage.getItem('showSpinner') === 'true' ? true : false;
        this.afAuth.authState.subscribe(function (auth) {
            localStorage.setItem('showSpinner', 'false');
            if (auth) {
                _this.router.navigateByUrl(_this.return);
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the query params
        this.route.queryParams
            .subscribe(function (params) { return _this.return = params['return'] || '/home'; });
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
    };
    LoginComponent.prototype.loginFb = function () {
        var _this = this;
        this.showSpinner = true;
        localStorage.setItem('showSpinner', 'true');
        this.afAuth.auth.signInWithRedirect(this.facebookAuthProvider);
        this.afAuth.auth.getRedirectResult().then(function (result) {
            if (result.user) {
                _this.showSpinner = true;
                localStorage.setItem('showSpinner', 'true');
                _this.router.navigate([_this.return]);
            }
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            this.error = errorMessage;
        });
    };
    LoginComponent.prototype.loginGoogle = function () {
        var _this = this;
        this.afAuth.auth.signInWithRedirect(this.googleAuthProvider).then(function (success) {
            _this.router.navigate([_this.return]);
        }).catch(function (err) {
            _this.error = err;
        });
    };
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_PortfolioComponent, View_PortfolioComponent_0, View_PortfolioComponent_Host_0, PortfolioComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PortfolioComponent", function() { return RenderType_PortfolioComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PortfolioComponent_0", function() { return View_PortfolioComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PortfolioComponent_Host_0", function() { return View_PortfolioComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponentNgFactory", function() { return PortfolioComponentNgFactory; });
/* harmony import */ var _portfolio_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio.component.scss.ngstyle */ "./src/app/portfolio/portfolio.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/igniteui-angular/igniteui-angular.ngfactory */ "./node_modules/igniteui-angular/igniteui-angular.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _block_item_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../block-item.service */ "./src/app/block-item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_PortfolioComponent = [_portfolio_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PortfolioComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_PortfolioComponent, data: {} });

function View_PortfolioComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "a", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openChart($event, _v.context.cell.row.rowData.coinSymbol) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "positionTop"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "symbolPosition"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "https://s2.coinmarketcap.com/static/img/coins/32x32/", _v.context.cell.row.rowData.cryptoId, ".png"); _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.cell.row.rowData.coinSymbol; _ck(_v, 4, 0, currVal_1); }); }
function View_PortfolioComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "positionTop"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" $", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.calculateHoldings(_v.context.cell.row.rowData.holdings, _v.context.cell.row.rowData.usdPrice), "0.2-2")); _ck(_v, 1, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.cell.row.rowData.holdings, "1.0-5")); _ck(_v, 5, 0, currVal_1); }); }
function View_PortfolioComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "positionTop"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" $", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " % "]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.cell.row.rowData.usdPrice, "0.2-2")); _ck(_v, 1, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "percent-style-", ((_v.context.cell.row.rowData.oneDayPercentChange >= 0) ? "up" : "down"), ""); _ck(_v, 4, 0, currVal_1); var currVal_2 = _v.context.cell.row.rowData.oneDayPercentChange; _ck(_v, 5, 0, currVal_2); }); }
function View_PortfolioComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "span", [["igxButton", "icon"], ["igxRipple", ""], ["style", "margin-top: -9px;"]], [[1, "role", 0]], [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onMouseDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.deleteRow(_v.context.$implicit) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxRippleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { rippleColor: [0, "rippleColor"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "igx-icon", [["name", "highlight_off"]], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconService"]], { iconName: [0, "iconName"] }, null)], function (_ck, _v) { var currVal_1 = ""; _ck(_v, 1, 0, currVal_1); var currVal_2 = "icon"; _ck(_v, 2, 0, currVal_2); var currVal_8 = "highlight_off"; _ck(_v, 4, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).role; _ck(_v, 0, 0, currVal_0); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).cssClass; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).ariaHidden; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).id; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).getInactive; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).getIconColor; _ck(_v, 3, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }); }
function View_PortfolioComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { outlet: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 2, { snack: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 3, { snackExists: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 4, { grid1: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 5, { dialog: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 100, "div", [["class", "sample-wrapper"], ["igxOverlayOutlet", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, [[1, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxOverlayOutletDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 61, "div", [["class", "sample-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 7, "button", [["id", "refreshBtn"], ["igxButton", "raised"], ["igxRipple", ""]], [[1, "role", 0]], [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onMouseDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.updatePortfolio() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxRippleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { rippleColor: [0, "rippleColor"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "igx-icon", [], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["refresh"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, [" Total Portfolio Value: ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](16, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 6, "button", [["id", "addBtn"], ["igxButton", "raised"], ["igxRipple", ""]], [[1, "role", 0]], [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onMouseDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onClick($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.openDialog() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxRippleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { rippleColor: [0, "rippleColor"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 2, "igx-icon", [], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["playlist_add"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Add coin "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 16777216, null, null, 39, "igx-grid", [["height", "500px"], ["toolbarTitle", "My portfolio"], ["width", "100%"]], [[4, "height", null], [4, "width", null], [1, "tabindex", 0], [1, "class", 0], [1, "role", 0], [1, "id", 0]], [[null, "onEditDone"], [null, "onSelection"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onEditDone" === en)) {
        var pd_0 = (_co.updateRow($event) !== false);
        ad = (pd_0 && ad);
    } if (("onSelection" === en)) {
        var pd_1 = (_co.selectCell($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxGridComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxGridComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxGridBaseComponent"], null, [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxGridComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["GridBaseAPIService"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxGridAPIService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbf"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbf"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](131584, null, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbb"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbb"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["GridBaseAPIService"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxIconService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 5750784, [[4, 4], ["grid1", 4]], 6, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxGridComponent"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["GridBaseAPIService"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["ɵl"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxGridTransaction"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbf"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["ɵbb"]], { data: [0, "data"], columnHiding: [1, "columnHiding"], height: [2, "height"], width: [3, "width"], columnPinning: [4, "columnPinning"], showToolbar: [5, "showToolbar"], toolbarTitle: [6, "toolbarTitle"] }, { onSelection: "onSelection" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { columnList: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 7, { rowEditCustom: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 8, { rowEditText: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 9, { rowEditActions: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, { rowEditTabsCUSTOM: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 11, { groupTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 6, "igx-column", [["field", "coinSymbol"], ["header", "Coin symbol"], ["sortable", "true"]], null, null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxColumnComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 1097728, [[6, 4]], 3, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxColumnComponent"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["GridBaseAPIService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { field: [0, "field"], header: [1, "header"], sortable: [2, "sortable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 12, { cellTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 13, { headTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 14, { editorTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 16384, [[12, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCellTemplateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 6, "igx-column", [["editable", "true"], ["field", "holdings"], ["header", "Holdings"], ["sortable", "true"]], null, null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxColumnComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 1097728, [[6, 4]], 3, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxColumnComponent"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["GridBaseAPIService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { field: [0, "field"], header: [1, "header"], sortable: [2, "sortable"], editable: [3, "editable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 15, { cellTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 16, { headTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 17, { editorTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 16384, [[15, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCellTemplateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 6, "igx-column", [["field", "usdPrice"], ["header", "Price"], ["sortable", "true"]], null, null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxColumnComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 1097728, [[6, 4]], 3, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxColumnComponent"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["GridBaseAPIService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { field: [0, "field"], header: [1, "header"], sortable: [2, "sortable"], cellClasses: [3, "cellClasses"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 18, { cellTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 19, { headTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 20, { editorTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 16384, [[18, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCellTemplateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 6, "igx-column", [["header", "Actions"]], null, null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxColumnComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxColumnComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 1097728, [[6, 4]], 3, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxColumnComponent"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["GridBaseAPIService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { header: [0, "header"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 21, { cellTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 22, { headTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 23, { editorTemplate: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 1, null, View_PortfolioComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 16384, [[21, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxCellTemplateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 2, "div", [["class", "sbPosition"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 1, "igx-snackbar", [["actionText", "Undo"], ["message", "Record was deleted"]], [[1, "id", 0]], [[null, "onAction"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onAction" === en)) {
        var pd_0 = (_co.restore() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxSnackbarComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxSnackbarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 49152, [[2, 4], ["snack", 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxSnackbarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { message: [0, "message"], autoHide: [1, "autoHide"], actionText: [2, "actionText"] }, { onAction: "onAction" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 2, "div", [["class", "sbPosition"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 1, "igx-snackbar", [], [[1, "id", 0]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxSnackbarComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxSnackbarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 49152, [[3, 4], ["snackExists", 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxSnackbarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { autoHide: [0, "autoHide"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 36, "igx-dialog", [["leftButtonLabel", "Cancel"], ["rightButtonLabel", "Add coin"], ["title", "Add coin"]], [[1, "id", 0], [1, "tabindex", 0], [2, "igx-dialog--hidden", null]], [[null, "onLeftButtonSelect"], [null, "onRightButtonSelect"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onLeftButtonSelect" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).close() !== false);
        ad = (pd_0 && ad);
    } if (("onRightButtonSelect" === en)) {
        var pd_1 = (_co.addItem($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxDialogComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxDialogComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 1294336, [[5, 4], ["form", 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxDialogComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxNavigationService"]]], { title: [0, "title"], leftButtonLabel: [1, "leftButtonLabel"], rightButtonLabel: [2, "rightButtonLabel"], closeOnOutsideSelect: [3, "closeOnOutsideSelect"] }, { onLeftButtonSelect: "onLeftButtonSelect", onRightButtonSelect: "onRightButtonSelect" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, 1, 34, "form", [["class", "addCoinForm"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 13, "igx-input-group", [["type", "border"]], [[1, "id", 0], [2, "igx-input-group", null], [2, "igx-input-group--placeholder", null], [2, "igx-input-group--required", null], [2, "igx-input-group--focused", null], [2, "igx-input-group--box", null], [2, "igx-input-group--border", null], [2, "igx-input-group--search", null], [2, "igx-input-group--disabled", null], [2, "igx-input-group--valid", null], [2, "igx-input-group--invalid", null], [2, "igx-input-group--warning", null], [2, "igx-input-group--filled", null], [2, "igx-input-group--cosy", null], [2, "igx-input-group--comfortable", null], [2, "igx-input-group--compact", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxInputGroupComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxInputGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 49152, null, 2, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxInputGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["DisplayDensityToken"]]], { type: [0, "type"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, { hints: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 25, { input: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, 2, 2, "label", [["for", "coin"], ["igxLabel", ""]], [[2, "igx-input-group__label", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](82, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxLabelDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Coin name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, 3, 6, "input", [["id", "coin"], ["igxInput", ""], ["name", "coin"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "igx-input-group__input", null], [2, "igx-input-group__textarea", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 85)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("focus" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).onFocus($event) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).onBlur($event) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.newItem.coinSymbol = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](85, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](90, 4341760, [[25, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxInputDirective"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxInputGroupComponent"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 14, "igx-input-group", [["type", "border"]], [[1, "id", 0], [2, "igx-input-group", null], [2, "igx-input-group--placeholder", null], [2, "igx-input-group--required", null], [2, "igx-input-group--focused", null], [2, "igx-input-group--box", null], [2, "igx-input-group--border", null], [2, "igx-input-group--search", null], [2, "igx-input-group--disabled", null], [2, "igx-input-group--valid", null], [2, "igx-input-group--invalid", null], [2, "igx-input-group--warning", null], [2, "igx-input-group--filled", null], [2, "igx-input-group--cosy", null], [2, "igx-input-group--comfortable", null], [2, "igx-input-group--compact", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_IgxInputGroupComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_IgxInputGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](93, 49152, null, 2, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxInputGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["DisplayDensityToken"]]], { type: [0, "type"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 26, { hints: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 27, { input: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, 2, 2, "label", [["for", "holdings"], ["igxLabel", ""]], [[2, "igx-input-group__label", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](97, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxLabelDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Holdings"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, 3, 7, "input", [["igxInput", ""], ["name", "holdings"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "igx-input-group__input", null], [2, "igx-input-group__textarea", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 100)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("focus" === en)) {
        var pd_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).onFocus($event) !== false);
        ad = (pd_7 && ad);
    } if (("blur" === en)) {
        var pd_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).onBlur($event) !== false);
        ad = (pd_8 && ad);
    } if (("input" === en)) {
        var pd_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).onInput() !== false);
        ad = (pd_9 && ad);
    } if (("ngModelChange" === en)) {
        var pd_10 = ((_co.newItem.holdings = $event) !== false);
        ad = (pd_10 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](100, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](101, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_bd"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_bd"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](103, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](105, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](106, 4341760, [[27, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxInputDirective"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxInputGroupComponent"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = ""; _ck(_v, 10, 0, currVal_1); var currVal_2 = "raised"; _ck(_v, 11, 0, currVal_2); _ck(_v, 13, 0); var currVal_10 = ""; _ck(_v, 18, 0, currVal_10); var currVal_11 = "raised"; _ck(_v, 19, 0, currVal_11); _ck(_v, 21, 0); var currVal_23 = _co.blockItems; var currVal_24 = true; var currVal_25 = "500px"; var currVal_26 = "100%"; var currVal_27 = true; var currVal_28 = true; var currVal_29 = "My portfolio"; _ck(_v, 29, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29); var currVal_30 = "coinSymbol"; var currVal_31 = "Coin symbol"; var currVal_32 = "true"; _ck(_v, 37, 0, currVal_30, currVal_31, currVal_32); var currVal_33 = "holdings"; var currVal_34 = "Holdings"; var currVal_35 = "true"; var currVal_36 = "true"; _ck(_v, 44, 0, currVal_33, currVal_34, currVal_35, currVal_36); var currVal_37 = "usdPrice"; var currVal_38 = "Price"; var currVal_39 = "true"; var currVal_40 = _co.dailyChanges; _ck(_v, 51, 0, currVal_37, currVal_38, currVal_39, currVal_40); var currVal_41 = "Actions"; _ck(_v, 58, 0, currVal_41); var currVal_43 = "Record was deleted"; var currVal_44 = true; var currVal_45 = "Undo"; _ck(_v, 66, 0, currVal_43, currVal_44, currVal_45); var currVal_47 = true; _ck(_v, 69, 0, currVal_47); var currVal_51 = "Add coin"; var currVal_52 = "Cancel"; var currVal_53 = "Add coin"; var currVal_54 = true; _ck(_v, 71, 0, currVal_51, currVal_52, currVal_53, currVal_54); var currVal_78 = "border"; _ck(_v, 78, 0, currVal_78); var currVal_89 = "coin"; var currVal_90 = _co.newItem.coinSymbol; _ck(_v, 87, 0, currVal_89, currVal_90); var currVal_107 = "border"; _ck(_v, 93, 0, currVal_107); var currVal_118 = "holdings"; var currVal_119 = _co.newItem.holdings; _ck(_v, 103, 0, currVal_118, currVal_119); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).role; _ck(_v, 9, 0, currVal_0); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).cssClass; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ariaHidden; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).id; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).getInactive; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).getIconColor; _ck(_v, 12, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _ck(_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.calculateTotalPortfolio(), "0.2-2")); _ck(_v, 15, 0, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).role; _ck(_v, 17, 0, currVal_9); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).cssClass; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ariaHidden; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).id; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).getInactive; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).getIconColor; _ck(_v, 20, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).height; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).width; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).tabindex; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).hostClass; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).hostRole; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).id; _ck(_v, 24, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).id; _ck(_v, 65, 0, currVal_42); var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 69).id; _ck(_v, 68, 0, currVal_46); var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).id; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).tabindex; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).isCollapsed; _ck(_v, 70, 0, currVal_48, currVal_49, currVal_50); var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).ngClassUntouched; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).ngClassTouched; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).ngClassPristine; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).ngClassDirty; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).ngClassValid; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).ngClassInvalid; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).ngClassPending; _ck(_v, 72, 0, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61); var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).id; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).defaultClass; var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).hasPlaceholder; var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).isRequired; var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).isFocused; var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).isBox; var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).isBorder; var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).isSearch; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).disabled; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).validClass; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).invalidClass; var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).hasWarning; var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).isFilled; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).isDisplayDensityCosy; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).isDisplayDensityComfortable; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 78).isDisplayDensityCompact; _ck(_v, 77, 1, [currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77]); var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 82).defaultClass; _ck(_v, 81, 0, currVal_79); var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassUntouched; var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassTouched; var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassPristine; var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassDirty; var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassValid; var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassInvalid; var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassPending; var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).isInput; var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).isTextArea; _ck(_v, 84, 0, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88); var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).id; var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).defaultClass; var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).hasPlaceholder; var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).isRequired; var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).isFocused; var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).isBox; var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).isBorder; var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).isSearch; var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).disabled; var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).validClass; var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).invalidClass; var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).hasWarning; var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).isFilled; var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).isDisplayDensityCosy; var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).isDisplayDensityComfortable; var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 93).isDisplayDensityCompact; _ck(_v, 92, 1, [currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104, currVal_105, currVal_106]); var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 97).defaultClass; _ck(_v, 96, 0, currVal_108); var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105).ngClassUntouched; var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105).ngClassTouched; var currVal_111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105).ngClassPristine; var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105).ngClassDirty; var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105).ngClassValid; var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105).ngClassInvalid; var currVal_115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 105).ngClassPending; var currVal_116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).isInput; var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 106).isTextArea; _ck(_v, 99, 0, currVal_109, currVal_110, currVal_111, currVal_112, currVal_113, currVal_114, currVal_115, currVal_116, currVal_117); }); }
function View_PortfolioComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-portfolio", [], null, null, null, View_PortfolioComponent_0, RenderType_PortfolioComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"], [_block_item_service__WEBPACK_IMPORTED_MODULE_7__["ItemService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PortfolioComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-portfolio", _portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"], View_PortfolioComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss.ngstyle.js":
/*!***************************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss.ngstyle.js ***!
  \***************************************************************/
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
var styles = ["#refreshBtn {\n  margin-bottom: 21px; }\n\nigx-icon {\n  cursor: pointer; }\n\n.addCoinForm {\n  padding: 12px 24px 24px; }\n\n.addCoinForm igx-input-group + igx-input-group {\n    margin-top: 24px; }\n\n#addBtn {\n  margin-left: 10px;\n  margin-right: 10px; }\n\n.sample-content {\n  padding-left: 10px;\n  justify-content: center;\n  display: flex; }\n\n.positionTop {\n  width: 100%;\n  margin-top: -7px; }\n\n.symbolPosition {\n  position: absolute;\n  margin-top: 10px;\n  margin-left: 10px; }\n\n.sbPosition {\n  z-index: 1;\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  justify-content: center; }\n\n@media only screen and (min-width: 786px) {\n    .sbPosition {\n      display: flex; } }\n\nigx-grid {\n  margin: 20px; }\n"];



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _block_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-item.service */ "./src/app/block-item.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};








var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(blockItemService, router, dataService, afs) {
        this.blockItemService = blockItemService;
        this.router = router;
        this.dataService = dataService;
        this.afs = afs;
        this.blockItems = [];
        this._dialogOverlaySettings = {
            closeOnOutsideClick: true,
            modal: true,
            outlet: this.outlet,
            scrollStrategy: new igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["CloseScrollStrategy"]()
        };
        this.newItem = new _block_item_service__WEBPACK_IMPORTED_MODULE_2__["BlockItem"]();
        this.deletedItem = new _block_item_service__WEBPACK_IMPORTED_MODULE_2__["BlockItem"]();
        this.positive24h = function (rowData) {
            return rowData.oneDayPercentChange > 0;
        };
        this.negative24h = function (rowData) {
            return rowData.oneDayPercentChange < 0;
        };
        // tslint:disable-next-line:member-ordering
        this.dailyChanges = {
            positive: this.positive24h,
            negative: this.negative24h
        };
    }
    // @HostListener('window:resize', ['$event'])
    // onResize(event) {
    //   this.grid1.reflow();
    // }
    PortfolioComponent.prototype.openDialog = function () {
        this._dialogOverlaySettings.outlet = this.outlet;
        this.dialog.open(this._dialogOverlaySettings);
    };
    PortfolioComponent.prototype.ngOnInit = function () { };
    // tslint:disable-next-line:use-life-cycle-interface
    PortfolioComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.blockItemsCollection = this.blockItemService.getItemsList();
        this.blockItemsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) { return actions.map(function (a) { return (__assign({ key: a.payload.key }, a.payload.val())); }); })).subscribe(function (res) {
            _this.blockItems = res;
        });
        setTimeout(function () {
            _this.refreshGrid();
        }, 100);
    };
    PortfolioComponent.prototype.refreshGrid = function () {
        this.grid1.reflow();
    };
    PortfolioComponent.prototype.addItem = function (event) {
        if (!this.dataService.cachedData) {
            this.dataService.getData();
        } // Check whether the coin is already in your portfolio
        this.checkCoinExistence(this.newItem.coinSymbol);
        event.dialog.close();
    };
    PortfolioComponent.prototype.updateItem = function (item) {
        this.blockItemService.updateItem(item.key, item);
    };
    PortfolioComponent.prototype.deleteItem = function (item) {
        this.blockItemService.deleteItem(item.key);
    };
    PortfolioComponent.prototype.selectCell = function (event) {
        this.selectedCell = event;
    };
    PortfolioComponent.prototype.restore = function () {
        this.blockItemService.createItem(this.deletedItem);
        this.snack.hide();
        this.deletedItem = new _block_item_service__WEBPACK_IMPORTED_MODULE_2__["BlockItem"]();
    };
    PortfolioComponent.prototype.checkCoinExistence = function (coin) {
        var fCoin = this.blockItems.filter(function (item) { return item.coinSymbol === coin.toUpperCase(); });
        if (fCoin.length !== 0) {
            this.snackExists.message = 'Already added!';
            this.snackExists.show();
        }
        else {
            // find coin and add it if exsist
            this.findCoin(this.newItem.coinSymbol.toUpperCase());
        }
    };
    PortfolioComponent.prototype.findCoin = function (coin) {
        var _this = this;
        this.dataService.getCryptoIdFromSymbol(coin).subscribe(function (filteredItem) {
            if (filteredItem) {
                _this.dataService.getSpecificCoinData(filteredItem['id']).subscribe(function (result) {
                    _this.newItem.coinSymbol = _this.newItem.coinSymbol.toUpperCase();
                    _this.newItem.coinName = result['name'];
                    _this.newItem.cryptoId = result['id'];
                    _this.newItem.rank = result['rank'];
                    _this.newItem.totalSupply = result['total_supply'];
                    _this.newItem.oneHourPercentChange = result['quotes.USD.percent_change_1h'];
                    _this.newItem.oneDayPercentChange = result['quotes.USD.percent_change_24h'];
                    _this.newItem.sevenDaysPercentChange = result['quotes.USD.percent_change_7d'];
                    _this.newItem.usdPrice = result['quotes.USD.price'];
                    _this.blockItemService.createItem(_this.newItem);
                    _this.newItem = new _block_item_service__WEBPACK_IMPORTED_MODULE_2__["BlockItem"]();
                    _this.snackExists.message = 'Coin Added!';
                    _this.snackExists.show();
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                _this.snackExists.message = 'Coin does not exist!';
                _this.snackExists.show();
            }
        });
    };
    PortfolioComponent.prototype.updatePortfolio = function () {
        var _loop_1 = function (coin) {
            this_1.dataService.getSpecificCoinData(coin.cryptoId).subscribe(function (res) {
                coin.oneHourPercentChange = res['quotes.USD.percent_change_1h'];
                coin.oneDayPercentChange = res['quotes.USD.percent_change_24h'];
                coin.sevenDaysPercentChange = res['quotes.USD.percent_change_7d'];
                coin.usdPrice = res['quotes.USD.price'];
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.blockItems; _i < _a.length; _i++) {
            var coin = _a[_i];
            _loop_1(coin);
        }
    };
    PortfolioComponent.prototype.openChart = function (evt, symbol) {
        this.router.navigate(['/statistics', { text: 'Volatility', iconName: 'show_chart', cryptoName: symbol, daysCount: 100 }]);
    };
    PortfolioComponent.prototype.calculateHoldings = function (holdings, price) {
        return holdings * price;
    };
    PortfolioComponent.prototype.calculateTotalPortfolio = function () {
        var total = 0;
        for (var _i = 0, _a = this.blockItems; _i < _a.length; _i++) {
            var coin = _a[_i];
            total += this.calculateHoldings(coin.holdings, coin.usdPrice);
        }
        return total;
    };
    PortfolioComponent.prototype.deleteRow = function (item) {
        this.selectedRow = Object.assign({}, this.selectedCell.row);
        this.deleteItem(this.selectedCell.cell.row.rowData);
        // store deleted data
        this.deletedItem.coinName = this.selectedCell.cell.row.rowData.coinName;
        this.deletedItem.holdings = this.selectedCell.cell.row.rowData.holdings;
        this.deletedItem.cryptoId = this.selectedCell.cell.row.rowData.cryptoId;
        this.deletedItem.coinSymbol = this.selectedCell.cell.row.rowData.coinSymbol;
        this.deletedItem.rank = this.selectedCell.cell.row.rowData.rank;
        this.deletedItem.totalSupply = this.selectedCell.cell.row.rowData.totalSupply;
        this.deletedItem.oneHourPercentChange = this.selectedCell.cell.row.rowData.oneHourPercentChange;
        this.deletedItem.oneDayPercentChange = this.selectedCell.cell.row.rowData.oneDayPercentChange;
        this.deletedItem.sevenDaysPercentChange = this.selectedCell.cell.row.rowData.sevenDaysPercentChange;
        this.deletedItem.usdPrice = this.selectedCell.cell.row.rowData.usdPrice;
        this.selectedCell = {};
        this.snack.show();
    };
    PortfolioComponent.prototype.updateRow = function (obj) {
        var updatedItem = obj.row.rowData;
        updatedItem.holdings = obj.newValue;
        this.updateItem(updatedItem);
    };
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/signup/signup.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_SignupComponent, View_SignupComponent_0, View_SignupComponent_Host_0, SignupComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SignupComponent", function() { return RenderType_SignupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SignupComponent_0", function() { return View_SignupComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SignupComponent_Host_0", function() { return View_SignupComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponentNgFactory", function() { return SignupComponentNgFactory; });
/* harmony import */ var _signup_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.component.scss.shim.ngstyle */ "./src/app/signup/signup.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/igniteui-angular/igniteui-angular.ngfactory */ "./node_modules/igniteui-angular/igniteui-angular.ngfactory.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_SignupComponent = [_signup_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SignupComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SignupComponent, data: { "animation": [{ type: 7, name: "moveIn", definitions: [{ type: 0, name: "void", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 0, name: "*", styles: { type: 6, styles: {}, offset: null }, options: undefined }, { type: 1, expr: ":enter", animation: [{ type: 6, styles: { opacity: "0", transform: "translateX(100px)" }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: "1", transform: "translateX(0)" }, offset: null }, timings: "0.8s ease-in-out" }], options: null }], options: {} }, { type: 7, name: "fallIn", definitions: [{ type: 1, expr: ":enter", animation: [{ type: 6, styles: { opacity: "0", transform: "translateY(40px)" }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: "1", transform: "translateY(0)" }, offset: null }, timings: ".4s .2s ease-in-out" }], options: null }, { type: 1, expr: ":leave", animation: [{ type: 6, styles: { opacity: "1", transform: "translateX(0)" }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: "0", transform: "translateX(-200px)" }, offset: null }, timings: ".3s ease-in-out" }], options: null }], options: {} }] } });

function View_SignupComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "error"]], [[24, "@fallIn", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.state; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.error; _ck(_v, 1, 0, currVal_1); }); }
function View_SignupComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 60, "div", [["class", "form-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 59, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "igx-icon", [["id", "lockIcon"], ["name", "person"]], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxIconService"]], { id: [0, "id"], iconName: [1, "iconName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_SignupComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 54, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_bg"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4210688, [["formData", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 19, "igx-input-group", [], [[1, "id", 0], [2, "igx-input-group", null], [2, "igx-input-group--placeholder", null], [2, "igx-input-group--required", null], [2, "igx-input-group--focused", null], [2, "igx-input-group--box", null], [2, "igx-input-group--border", null], [2, "igx-input-group--search", null], [2, "igx-input-group--disabled", null], [2, "igx-input-group--valid", null], [2, "igx-input-group--invalid", null], [2, "igx-input-group--warning", null], [2, "igx-input-group--filled", null], [2, "igx-input-group--cosy", null], [2, "igx-input-group--comfortable", null], [2, "igx-input-group--compact", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IgxInputGroupComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IgxInputGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 49152, null, 2, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxInputGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["DisplayDensityToken"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { hints: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { input: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 2, 2, "label", [["for", "email"], ["igxLabel", ""]], [[2, "igx-input-group__label", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxLabelDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Email address"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 3, 8, "input", [["igxInput", ""], ["name", "email"], ["required", ""], ["type", "email"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "igx-input-group__input", null], [2, "igx-input-group__textarea", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("focus" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onFocus($event) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onBlur($event) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.email = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 4341760, [[2, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxInputDirective"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxInputGroupComponent"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 4, 3, "igx-suffix", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxSuffixDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "igx-icon", [["name", "email"]], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxIconService"]], { iconName: [0, "iconName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 19, "igx-input-group", [], [[1, "id", 0], [2, "igx-input-group", null], [2, "igx-input-group--placeholder", null], [2, "igx-input-group--required", null], [2, "igx-input-group--focused", null], [2, "igx-input-group--box", null], [2, "igx-input-group--border", null], [2, "igx-input-group--search", null], [2, "igx-input-group--disabled", null], [2, "igx-input-group--valid", null], [2, "igx-input-group--invalid", null], [2, "igx-input-group--warning", null], [2, "igx-input-group--filled", null], [2, "igx-input-group--cosy", null], [2, "igx-input-group--comfortable", null], [2, "igx-input-group--compact", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IgxInputGroupComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IgxInputGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 49152, null, 2, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxInputGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["DisplayDensityToken"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { hints: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, { input: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, 2, 2, "label", [["for", "password"], ["igxLabel", ""]], [[2, "igx-input-group__label", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxLabelDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, 3, 8, "input", [["igxInput", ""], ["name", "password"], ["required", ""], ["type", "password"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "igx-input-group__input", null], [2, "igx-input-group__textarea", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("focus" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).onFocus($event) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).onBlur($event) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.password = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 4341760, [[4, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxInputDirective"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxInputGroupComponent"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, 4, 3, "igx-suffix", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxSuffixDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 1, "igx-icon", [["name", "lock"]], [[2, "igx-icon", null], [1, "aria-hidden", 0], [1, "id", 0], [2, "igx-icon--inactive", null], [4, "color", null]], null, null, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IgxIconComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IgxIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 114688, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxIconService"]], { iconName: [0, "iconName"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 9, "div", [["class", "signup-form-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 4, "a", [["id", "goback"], ["igxButton", "flat"], ["igxRipple", ""], ["routerLink", "/login"]], [[1, "target", 0], [8, "href", 4], [1, "role", 0]], [[null, "click"], [null, "mousedown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("mousedown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).onMouseDown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).onClick($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxRippleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { rippleColor: [0, "rippleColor"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { type: [0, "type"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Go back"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 3, "button", [["class", "basic-btn"], ["igxButton", "raised"], ["igxRipple", ""], ["type", "submit"]], [[1, "role", 0]], [[null, "mousedown"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).onMouseDown($event) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).onClick($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxRippleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { rippleColor: [0, "rippleColor"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxButtonDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { type: [0, "type"], disabled: [1, "disabled"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Create my account"]))], function (_ck, _v) { var _co = _v.component; var currVal_5 = "lockIcon"; var currVal_6 = "person"; _ck(_v, 3, 0, currVal_5, currVal_6); var currVal_7 = _co.error; _ck(_v, 5, 0, currVal_7); var currVal_42 = ""; _ck(_v, 20, 0, currVal_42); var currVal_43 = "email"; var currVal_44 = _co.email; _ck(_v, 23, 0, currVal_43, currVal_44); var currVal_50 = "email"; _ck(_v, 30, 0, currVal_50); var currVal_78 = ""; _ck(_v, 40, 0, currVal_78); var currVal_79 = "password"; var currVal_80 = _co.password; _ck(_v, 43, 0, currVal_79, currVal_80); var currVal_86 = "lock"; _ck(_v, 50, 0, currVal_86); var currVal_90 = "/login"; _ck(_v, 53, 0, currVal_90); var currVal_91 = ""; _ck(_v, 54, 0, currVal_91); var currVal_92 = "flat"; _ck(_v, 55, 0, currVal_92); var currVal_94 = ""; _ck(_v, 58, 0, currVal_94); var currVal_95 = "raised"; var currVal_96 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).valid; _ck(_v, 59, 0, currVal_95, currVal_96); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).cssClass; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ariaHidden; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).id; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).getInactive; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).getIconColor; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).id; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).defaultClass; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).hasPlaceholder; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isRequired; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isFocused; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isBox; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isBorder; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isSearch; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabled; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).validClass; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).invalidClass; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).hasWarning; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isFilled; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isDisplayDensityCosy; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isDisplayDensityComfortable; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).isDisplayDensityCompact; _ck(_v, 11, 1, [currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30]); var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).defaultClass; _ck(_v, 15, 0, currVal_31); var currVal_32 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).required ? "" : null); var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassUntouched; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassTouched; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPristine; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassDirty; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassValid; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassInvalid; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).ngClassPending; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).isInput; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).isTextArea; _ck(_v, 18, 0, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41); var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).cssClass; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ariaHidden; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).id; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).getInactive; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).getIconColor; _ck(_v, 29, 0, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49); var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).id; var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).defaultClass; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).hasPlaceholder; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).isRequired; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).isFocused; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).isBox; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).isBorder; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).isSearch; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).disabled; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).validClass; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).invalidClass; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).hasWarning; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).isFilled; var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).isDisplayDensityCosy; var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).isDisplayDensityComfortable; var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).isDisplayDensityCompact; _ck(_v, 31, 1, [currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66]); var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).defaultClass; _ck(_v, 35, 0, currVal_67); var currVal_68 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).required ? "" : null); var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassUntouched; var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassTouched; var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassPristine; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassDirty; var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassValid; var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassInvalid; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).ngClassPending; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).isInput; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).isTextArea; _ck(_v, 38, 0, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77); var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).cssClass; var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).ariaHidden; var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).id; var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).getInactive; var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).getIconColor; _ck(_v, 49, 0, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85); var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).target; var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).href; var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 55).role; _ck(_v, 52, 0, currVal_87, currVal_88, currVal_89); var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).role; _ck(_v, 57, 0, currVal_93); }); }
function View_SignupComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-signup", [], [[40, "@moveIn", 0]], null, null, View_SignupComponent_0, RenderType_SignupComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); }); }
var SignupComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-signup", _signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], View_SignupComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/signup/signup.component.scss.shim.ngstyle.js":
/*!**************************************************************!*\
  !*** ./src/app/signup/signup.component.scss.shim.ngstyle.js ***!
  \**************************************************************/
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
var styles = [""];



/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.state = '';
    }
    SignupComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password).then(function (success) {
                console.log(success);
                _this.router.navigate(['/login']);
            }).catch(function (err) {
                console.log(err);
                _this.error = err;
            });
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/statistics/statistics.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_StatisticsComponent, View_StatisticsComponent_0, View_StatisticsComponent_Host_0, StatisticsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_StatisticsComponent", function() { return RenderType_StatisticsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_StatisticsComponent_0", function() { return View_StatisticsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_StatisticsComponent_Host_0", function() { return View_StatisticsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponentNgFactory", function() { return StatisticsComponentNgFactory; });
/* harmony import */ var _statistics_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics.component.scss.ngstyle */ "./src/app/statistics/statistics.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/igniteui-angular/igniteui-angular.ngfactory */ "./node_modules/igniteui-angular/igniteui-angular.ngfactory.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_igniteui_angular_charts_ES5_igx_financial_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/igniteui-angular-charts/ES5/igx-financial-chart-component.ngfactory */ "./node_modules/igniteui-angular-charts/ES5/igx-financial-chart-component.ngfactory.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_financial_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-financial-chart-component */ "./node_modules/igniteui-angular-charts/ES5/igx-financial-chart-component.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _statistics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var styles_StatisticsComponent = [_statistics_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_StatisticsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_StatisticsComponent, data: {} });

function View_StatisticsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 34, "div", [["class", "sample-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 31, "div", [["class", "chart-wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["id", "sText"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cryptocurrency: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 11, "span", [["style", "width: 40px; display: inline-block;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 10, "igx-input-group", [["style", "width: 100%"]], [[1, "id", 0], [2, "igx-input-group", null], [2, "igx-input-group--placeholder", null], [2, "igx-input-group--required", null], [2, "igx-input-group--focused", null], [2, "igx-input-group--box", null], [2, "igx-input-group--border", null], [2, "igx-input-group--search", null], [2, "igx-input-group--disabled", null], [2, "igx-input-group--valid", null], [2, "igx-input-group--invalid", null], [2, "igx-input-group--warning", null], [2, "igx-input-group--filled", null], [2, "igx-input-group--cosy", null], [2, "igx-input-group--comfortable", null], [2, "igx-input-group--compact", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IgxInputGroupComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IgxInputGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 2, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxInputGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["DisplayDensityToken"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { hints: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 2, { input: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, [["input1", 1]], 3, 6, "input", [["igxInput", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "igx-input-group__input", null], [2, "igx-input-group__textarea", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("focus" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onFocus($event) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onBlur($event) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.cryptoName = $event) !== false);
        ad = (pd_7 && ad);
    } if (("input" === en)) {
        var pd_8 = (_co.getData() !== false);
        ad = (pd_8 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 4341760, [[2, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxInputDirective"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxInputGroupComponent"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "span", [["id", "sText"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["to see all price changes for the past "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 14, "span", [["style", "width: 75px; display: inline-block;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 13, "igx-input-group", [["style", "width: 100%"]], [[1, "id", 0], [2, "igx-input-group", null], [2, "igx-input-group--placeholder", null], [2, "igx-input-group--required", null], [2, "igx-input-group--focused", null], [2, "igx-input-group--box", null], [2, "igx-input-group--border", null], [2, "igx-input-group--search", null], [2, "igx-input-group--disabled", null], [2, "igx-input-group--valid", null], [2, "igx-input-group--invalid", null], [2, "igx-input-group--warning", null], [2, "igx-input-group--filled", null], [2, "igx-input-group--cosy", null], [2, "igx-input-group--comfortable", null], [2, "igx-input-group--compact", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_IgxInputGroupComponent_0"], _node_modules_igniteui_angular_igniteui_angular_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_IgxInputGroupComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 49152, null, 2, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxInputGroupComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["DisplayDensityToken"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { hints: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 4, { input: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, [["input1", 1]], 3, 6, "input", [["igxInput", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "igx-input-group__input", null], [2, "igx-input-group__textarea", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("focus" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).onFocus($event) !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).onBlur($event) !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).onInput() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.daysCount = $event) !== false);
        ad = (pd_7 && ad);
    } if (("input" === en)) {
        var pd_8 = (_co.getData() !== false);
        ad = (pd_8 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 4341760, [[4, 4]], 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxInputDirective"], [igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxInputGroupComponent"], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, 4, 2, "igx-suffix", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, igniteui_angular__WEBPACK_IMPORTED_MODULE_3__["IgxSuffixDirective"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" days. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 16777216, null, null, 1, "igx-financial-chart", [["chartType", "candle"], ["height", "400px"], ["isToolbarVisible", "false"], ["style", "margin-top: 20px;"], ["width", "100%"]], null, [["document", "click"]], function (_v, en, $event) { var ad = true; if (("document:click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onDocumentClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_igniteui_angular_charts_ES5_igx_financial_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_IgxFinancialChartComponent_0"], _node_modules_igniteui_angular_charts_ES5_igx_financial_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_IgxFinancialChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 4440064, null, 0, igniteui_angular_charts_ES5_igx_financial_chart_component__WEBPACK_IMPORTED_MODULE_6__["IgxFinancialChartComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]], { height: [0, "height"], width: [1, "width"], dataSource: [2, "dataSource"], isToolbarVisible: [3, "isToolbarVisible"], chartType: [4, "chartType"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_25 = _co.cryptoName; _ck(_v, 12, 0, currVal_25); var currVal_51 = _co.daysCount; _ck(_v, 26, 0, currVal_51); var currVal_52 = "400px"; var currVal_53 = "100%"; var currVal_54 = _co.data; var currVal_55 = "false"; var currVal_56 = "candle"; _ck(_v, 34, 0, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).id; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).defaultClass; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).hasPlaceholder; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).isRequired; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).isFocused; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).isBox; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).isBorder; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).isSearch; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).validClass; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).invalidClass; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).hasWarning; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).isFilled; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).isDisplayDensityCosy; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).isDisplayDensityComfortable; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).isDisplayDensityCompact; _ck(_v, 5, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15]); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassUntouched; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassTouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPristine; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassDirty; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassValid; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassInvalid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPending; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).isInput; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).isTextArea; _ck(_v, 9, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).id; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).defaultClass; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).hasPlaceholder; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).isRequired; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).isFocused; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).isBox; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).isBorder; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).isSearch; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).disabled; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).validClass; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).invalidClass; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).hasWarning; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).isFilled; var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).isDisplayDensityCosy; var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).isDisplayDensityComfortable; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).isDisplayDensityCompact; _ck(_v, 19, 1, [currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41]); var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassUntouched; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassTouched; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassPristine; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassDirty; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassValid; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassInvalid; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).ngClassPending; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).isInput; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).isTextArea; _ck(_v, 23, 0, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50); }); }
function View_StatisticsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-statistics", [], null, null, null, View_StatisticsComponent_0, RenderType_StatisticsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _statistics_component__WEBPACK_IMPORTED_MODULE_8__["StatisticsComponent"], [_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var StatisticsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-statistics", _statistics_component__WEBPACK_IMPORTED_MODULE_8__["StatisticsComponent"], View_StatisticsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/statistics/statistics.component.scss.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/statistics/statistics.component.scss.ngstyle.js ***!
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
var styles = [":host {\n  width: 100%;\n  padding: 0 24px; }\n\n.ui-tooltip-container {\n  color: black; }\n"];



/***/ }),

/***/ "./src/app/statistics/statistics.component.ts":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(dataService, route) {
        var _this = this;
        this.dataService = dataService;
        this.route = route;
        this.route
            .paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (params) { return params.get('cryptoName') || route.routeConfig.data.cryptoName; })).subscribe(function (res) { return _this.cryptoName = res; });
        this.route
            .paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (params) { return params.get('daysCount') || route.routeConfig.data.daysCount; })).subscribe(function (res) { return _this.daysCount = res; });
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    StatisticsComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.getLastSevenDaysPrices(this.cryptoName, this.daysCount)
            .subscribe(function (res) {
            _this.data = Object.assign(res).Data.map(function (item) {
                // multiply by 1000 because Date() requires miliseconds
                var dateObject = new Date(item.time * 1000);
                item.time = dateObject;
                return item;
            });
        });
    };
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/assets/offlineData.ts":
/*!***********************************!*\
  !*** ./src/assets/offlineData.ts ***!
  \***********************************/
/*! exports provided: offlineData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offlineData", function() { return offlineData; });
var offlineData = [
    {
        'id': 1,
        'name': 'Bitcoin',
        'symbol': 'BTC',
        'website_slug': 'bitcoin',
        'rank': 1,
        'circulating_supply': 17025937,
        'total_supply': 17025937,
        'max_supply': 21000000,
        'quotes.USD.price': 9395.52,
        'quotes.USD.volume_24h': 6666730000,
        'quotes.USD.market_cap': 159967531602,
        'quotes.USD.percent_change_1h': 0.53,
        'quotes.USD.percent_change_24h': 1.08,
        'quotes.USD.percent_change_7d': 0.21,
        'quotes.BTC.price': 1,
        'quotes.BTC.volume_24h': 709564.7712952556,
        'quotes.BTC.market_cap': 17025937,
        'quotes.BTC.percent_change_1h': 0,
        'quotes.BTC.percent_change_24h': 0,
        'quotes.BTC.percent_change_7d': 0,
        'last_updated': 1525959572
    },
    {
        'id': 2,
        'name': 'Litecoin',
        'symbol': 'LTC',
        'website_slug': 'litecoin',
        'rank': 6,
        'circulating_supply': 56469388,
        'total_supply': 56469388,
        'max_supply': 84000000,
        'quotes.USD.price': 158.047,
        'quotes.USD.volume_24h': 410340000,
        'quotes.USD.market_cap': 8924817310,
        'quotes.USD.percent_change_1h': 0.39,
        'quotes.USD.percent_change_24h': 0.3,
        'quotes.USD.percent_change_7d': 0.97,
        'quotes.BTC.price': 0.0168215277,
        'quotes.BTC.volume_24h': 43674.0063349341,
        'quotes.BTC.market_cap': 949901,
        'quotes.BTC.percent_change_1h': 0.39,
        'quotes.BTC.percent_change_24h': 0.3,
        'quotes.BTC.percent_change_7d': 0.97,
        'last_updated': 1525959542
    },
    {
        'id': 52,
        'name': 'Ripple',
        'symbol': 'XRP',
        'website_slug': 'ripple',
        'rank': 3,
        'circulating_supply': 39178259468,
        'total_supply': 99992263539,
        'max_supply': 100000000000,
        'quotes.USD.price': 0.805734,
        'quotes.USD.volume_24h': 376369000,
        'quotes.USD.market_cap': 31567255714,
        'quotes.USD.percent_change_1h': 0.62,
        'quotes.USD.percent_change_24h': 0.18,
        'quotes.USD.percent_change_7d': -7.11,
        'quotes.BTC.price': 0.0000857573,
        'quotes.BTC.volume_24h': 40058.3469568475,
        'quotes.BTC.market_cap': 3359820,
        'quotes.BTC.percent_change_1h': 0.62,
        'quotes.BTC.percent_change_24h': 0.18,
        'quotes.BTC.percent_change_7d': -7.11,
        'last_updated': 1525959542
    },
    {
        'id': 66,
        'name': 'Nxt',
        'symbol': 'NXT',
        'website_slug': 'nxt',
        'rank': 92,
        'circulating_supply': 998999942,
        'total_supply': 998999942,
        'max_supply': 1000000000,
        'quotes.USD.price': 0.210166,
        'quotes.USD.volume_24h': 2357960,
        'quotes.USD.market_cap': 209955822,
        'quotes.USD.percent_change_1h': 0.17,
        'quotes.USD.percent_change_24h': -1.12,
        'quotes.USD.percent_change_7d': -13.51,
        'quotes.BTC.price': 0.0000223687,
        'quotes.BTC.volume_24h': 250.9664180375,
        'quotes.BTC.market_cap': 22346,
        'quotes.BTC.percent_change_1h': 0.17,
        'quotes.BTC.percent_change_24h': -1.12,
        'quotes.BTC.percent_change_7d': -13.51,
        'last_updated': 1525959541
    },
    {
        'id': 74,
        'name': 'Dogecoin',
        'symbol': 'DOGE',
        'website_slug': 'dogecoin',
        'rank': 46,
        'circulating_supply': 114376196461,
        'total_supply': 114376196461,
        'quotes.USD.price': 0.00499883,
        'quotes.USD.volume_24h': 31836700,
        'quotes.USD.market_cap': 571747162,
        'quotes.USD.percent_change_1h': 0.74,
        'quotes.USD.percent_change_24h': 0.74,
        'quotes.USD.percent_change_7d': -7.94,
        'quotes.BTC.price': 5.32e-7,
        'quotes.BTC.volume_24h': 3388.4979224141,
        'quotes.BTC.market_cap': 60853,
        'quotes.BTC.percent_change_1h': 0.74,
        'quotes.BTC.percent_change_24h': 0.74,
        'quotes.BTC.percent_change_7d': -7.94,
        'last_updated': 1525959542
    },
    {
        'id': 109,
        'name': 'DigiByte',
        'symbol': 'DGB',
        'website_slug': 'digibyte',
        'rank': 50,
        'circulating_supply': 10232179272,
        'total_supply': 10232179272,
        'max_supply': 21000000000,
        'quotes.USD.price': 0.047742,
        'quotes.USD.volume_24h': 6562960,
        'quotes.USD.market_cap': 488504703,
        'quotes.USD.percent_change_1h': 0.78,
        'quotes.USD.percent_change_24h': 0.59,
        'quotes.USD.percent_change_7d': 0.7,
        'quotes.BTC.price': 0.0000050814,
        'quotes.BTC.volume_24h': 698.5201457716,
        'quotes.BTC.market_cap': 51993,
        'quotes.BTC.percent_change_1h': 0.78,
        'quotes.BTC.percent_change_24h': 0.59,
        'quotes.BTC.percent_change_7d': 0.7,
        'last_updated': 1525959542
    },
    {
        'id': 118,
        'name': 'ReddCoin',
        'symbol': 'RDD',
        'website_slug': 'reddcoin',
        'rank': 74,
        'circulating_supply': 28808713174,
        'total_supply': 28808713174,
        'quotes.USD.price': 0.00949311,
        'quotes.USD.volume_24h': 13309900,
        'quotes.USD.market_cap': 273484283,
        'quotes.USD.percent_change_1h': -0.32,
        'quotes.USD.percent_change_24h': -0.8,
        'quotes.USD.percent_change_7d': -10.88,
        'quotes.BTC.price': 0.0000010104,
        'quotes.BTC.volume_24h': 1416.6219645107,
        'quotes.BTC.market_cap': 29108,
        'quotes.BTC.percent_change_1h': -0.32,
        'quotes.BTC.percent_change_24h': -0.8,
        'quotes.BTC.percent_change_7d': -10.88,
        'last_updated': 1525959547
    },
    {
        'id': 131,
        'name': 'Dash',
        'symbol': 'DASH',
        'website_slug': 'dash',
        'rank': 13,
        'circulating_supply': 8062942,
        'total_supply': 8062942,
        'max_supply': 18900000,
        'quotes.USD.price': 454.508,
        'quotes.USD.volume_24h': 92699700,
        'quotes.USD.market_cap': 3664671705,
        'quotes.USD.percent_change_1h': 0.2,
        'quotes.USD.percent_change_24h': 3.19,
        'quotes.USD.percent_change_7d': -7.65,
        'quotes.BTC.price': 0.0483749702,
        'quotes.BTC.volume_24h': 9866.3724839072,
        'quotes.BTC.market_cap': 390045,
        'quotes.BTC.percent_change_1h': 0.2,
        'quotes.BTC.percent_change_24h': 3.19,
        'quotes.BTC.percent_change_7d': -7.65,
        'last_updated': 1525959542
    },
    {
        'id': 213,
        'name': 'MonaCoin',
        'symbol': 'MONA',
        'website_slug': 'monacoin',
        'rank': 77,
        'circulating_supply': 59360150,
        'total_supply': 59360150,
        'quotes.USD.price': 4.47467,
        'quotes.USD.volume_24h': 2057410,
        'quotes.USD.market_cap': 265617082,
        'quotes.USD.percent_change_1h': 0.21,
        'quotes.USD.percent_change_24h': -1.13,
        'quotes.USD.percent_change_7d': -13.89,
        'quotes.BTC.price': 0.0004762557,
        'quotes.BTC.volume_24h': 218.9777681278,
        'quotes.BTC.market_cap': 28271,
        'quotes.BTC.percent_change_1h': 0.21,
        'quotes.BTC.percent_change_24h': -1.13,
        'quotes.BTC.percent_change_7d': -13.89,
        'last_updated': 1525959547
    },
    {
        'id': 328,
        'name': 'Monero',
        'symbol': 'XMR',
        'website_slug': 'monero',
        'rank': 12,
        'circulating_supply': 16016709,
        'total_supply': 16016709,
        'quotes.USD.price': 233.202,
        'quotes.USD.volume_24h': 34242000,
        'quotes.USD.market_cap': 3735128643,
        'quotes.USD.percent_change_1h': 0.42,
        'quotes.USD.percent_change_24h': 1.83,
        'quotes.USD.percent_change_7d': -6.22,
        'quotes.BTC.price': 0.0248205528,
        'quotes.BTC.volume_24h': 3644.5029120262,
        'quotes.BTC.market_cap': 397544,
        'quotes.BTC.percent_change_1h': 0.42,
        'quotes.BTC.percent_change_24h': 1.83,
        'quotes.BTC.percent_change_7d': -6.22,
        'last_updated': 1525959543
    },
    {
        'id': 463,
        'name': 'BitShares',
        'symbol': 'BTS',
        'website_slug': 'bitshares',
        'rank': 34,
        'circulating_supply': 2623190000,
        'total_supply': 2623190000,
        'max_supply': 3600570502,
        'quotes.USD.price': 0.305921,
        'quotes.USD.volume_24h': 14437100,
        'quotes.USD.market_cap': 802488908,
        'quotes.USD.percent_change_1h': 1.76,
        'quotes.USD.percent_change_24h': -0.49,
        'quotes.USD.percent_change_7d': -15.75,
        'quotes.BTC.price': 0.0000325603,
        'quotes.BTC.volume_24h': 1536.5940363067,
        'quotes.BTC.market_cap': 85412,
        'quotes.BTC.percent_change_1h': 1.76,
        'quotes.BTC.percent_change_24h': -0.49,
        'quotes.BTC.percent_change_7d': -15.75,
        'last_updated': 1525959543
    },
    {
        'id': 512,
        'name': 'Stellar',
        'symbol': 'XLM',
        'website_slug': 'stellar',
        'rank': 8,
        'circulating_supply': 18576159298,
        'total_supply': 103926681379,
        'quotes.USD.price': 0.377528,
        'quotes.USD.volume_24h': 36262000,
        'quotes.USD.market_cap': 7013020268,
        'quotes.USD.percent_change_1h': 0.53,
        'quotes.USD.percent_change_24h': -1.96,
        'quotes.USD.percent_change_7d': -13.39,
        'quotes.BTC.price': 0.0000401817,
        'quotes.BTC.volume_24h': 3859.4989952658,
        'quotes.BTC.market_cap': 746422,
        'quotes.BTC.percent_change_1h': 0.53,
        'quotes.BTC.percent_change_24h': -1.96,
        'quotes.BTC.percent_change_7d': -13.39,
        'last_updated': 1525959544
    },
    {
        'id': 541,
        'name': 'Syscoin',
        'symbol': 'SYS',
        'website_slug': 'syscoin',
        'rank': 80,
        'circulating_supply': 533453383,
        'total_supply': 533453383,
        'max_supply': 888000000,
        'quotes.USD.price': 0.491208,
        'quotes.USD.volume_24h': 4952990,
        'quotes.USD.market_cap': 262036569,
        'quotes.USD.percent_change_1h': 0.33,
        'quotes.USD.percent_change_24h': 2.84,
        'quotes.USD.percent_change_7d': -13.42,
        'quotes.BTC.price': 0.0000522811,
        'quotes.BTC.volume_24h': 527.1650744184,
        'quotes.BTC.market_cap': 27890,
        'quotes.BTC.percent_change_1h': 0.33,
        'quotes.BTC.percent_change_24h': 2.84,
        'quotes.BTC.percent_change_7d': -13.42,
        'last_updated': 1525959544
    },
    {
        'id': 693,
        'name': 'Verge',
        'symbol': 'XVG',
        'website_slug': 'verge',
        'rank': 25,
        'circulating_supply': 14978218776,
        'total_supply': 14978218776,
        'max_supply': 16555000000,
        'quotes.USD.price': 0.0749074,
        'quotes.USD.volume_24h': 82567700,
        'quotes.USD.market_cap': 1121979425,
        'quotes.USD.percent_change_1h': 0.34,
        'quotes.USD.percent_change_24h': -0.65,
        'quotes.USD.percent_change_7d': -6.61,
        'quotes.BTC.price': 0.0000079727,
        'quotes.BTC.volume_24h': 8787.9861891625,
        'quotes.BTC.market_cap': 119416,
        'quotes.BTC.percent_change_1h': 0.34,
        'quotes.BTC.percent_change_24h': -0.65,
        'quotes.BTC.percent_change_7d': -6.61,
        'last_updated': 1525959546
    },
    {
        'id': 825,
        'name': 'Tether',
        'symbol': 'USDT',
        'website_slug': 'tether',
        'rank': 17,
        'circulating_supply': 2107140814,
        'total_supply': 2580109970,
        'quotes.USD.price': 0.999404,
        'quotes.USD.volume_24h': 3053490000,
        'quotes.USD.market_cap': 2105884958,
        'quotes.USD.percent_change_1h': 0.09,
        'quotes.USD.percent_change_24h': -0.04,
        'quotes.USD.percent_change_7d': 0.16,
        'quotes.BTC.price': 0.0001063703,
        'quotes.BTC.volume_24h': 324994.252579953,
        'quotes.BTC.market_cap': 224137,
        'quotes.BTC.percent_change_1h': 0.09,
        'quotes.BTC.percent_change_24h': -0.04,
        'quotes.BTC.percent_change_7d': 0.16,
        'last_updated': 1525959547
    },
    {
        'id': 873,
        'name': 'NEM',
        'symbol': 'XEM',
        'website_slug': 'nem',
        'rank': 14,
        'circulating_supply': 8999999999,
        'total_supply': 8999999999,
        'quotes.USD.price': 0.375536,
        'quotes.USD.volume_24h': 16691100,
        'quotes.USD.market_cap': 3379824000,
        'quotes.USD.percent_change_1h': 0.42,
        'quotes.USD.percent_change_24h': -0.58,
        'quotes.USD.percent_change_7d': -11.69,
        'quotes.BTC.price': 0.0000399697,
        'quotes.BTC.volume_24h': 1776.4956064167,
        'quotes.BTC.market_cap': 359727,
        'quotes.BTC.percent_change_1h': 0.42,
        'quotes.BTC.percent_change_24h': -0.58,
        'quotes.BTC.percent_change_7d': -11.69,
        'last_updated': 1525959545
    },
    {
        'id': 1027,
        'name': 'Ethereum',
        'symbol': 'ETH',
        'website_slug': 'ethereum',
        'rank': 2,
        'circulating_supply': 99348375,
        'total_supply': 99348375,
        'quotes.USD.price': 765.465,
        'quotes.USD.volume_24h': 2683730000,
        'quotes.USD.market_cap': 76047703749,
        'quotes.USD.percent_change_1h': 0.58,
        'quotes.USD.percent_change_24h': 2.28,
        'quotes.USD.percent_change_7d': 3.49,
        'quotes.BTC.price': 0.0814712757,
        'quotes.BTC.volume_24h': 285639.3259766357,
        'quotes.BTC.market_cap': 8094039,
        'quotes.BTC.percent_change_1h': 0.58,
        'quotes.BTC.percent_change_24h': 2.28,
        'quotes.BTC.percent_change_7d': 3.49,
        'last_updated': 1525959558
    },
    {
        'id': 1042,
        'name': 'Siacoin',
        'symbol': 'SC',
        'website_slug': 'siacoin',
        'rank': 31,
        'circulating_supply': 34336528259,
        'total_supply': 34336528259,
        'quotes.USD.price': 0.0254995,
        'quotes.USD.volume_24h': 20212500,
        'quotes.USD.market_cap': 875564302,
        'quotes.USD.percent_change_1h': 0.09,
        'quotes.USD.percent_change_24h': -1.67,
        'quotes.USD.percent_change_7d': -9.47,
        'quotes.BTC.price': 0.000002714,
        'quotes.BTC.volume_24h': 2151.2912537039,
        'quotes.BTC.market_cap': 93190,
        'quotes.BTC.percent_change_1h': 0.09,
        'quotes.BTC.percent_change_24h': -1.67,
        'quotes.BTC.percent_change_7d': -9.47,
        'last_updated': 1525959546
    },
    {
        'id': 1104,
        'name': 'Augur',
        'symbol': 'REP',
        'website_slug': 'augur',
        'rank': 48,
        'circulating_supply': 11000000,
        'total_supply': 11000000,
        'quotes.USD.price': 48.9569,
        'quotes.USD.volume_24h': 17877700,
        'quotes.USD.market_cap': 538525900,
        'quotes.USD.percent_change_1h': 0.77,
        'quotes.USD.percent_change_24h': -7.59,
        'quotes.USD.percent_change_7d': 12.93,
        'quotes.BTC.price': 0.0052106642,
        'quotes.BTC.volume_24h': 1902.7898402643,
        'quotes.BTC.market_cap': 57317,
        'quotes.BTC.percent_change_1h': 0.77,
        'quotes.BTC.percent_change_24h': -7.59,
        'quotes.BTC.percent_change_7d': 12.93,
        'last_updated': 1525959547
    },
    {
        'id': 1168,
        'name': 'Decred',
        'symbol': 'DCR',
        'website_slug': 'decred',
        'rank': 43,
        'circulating_supply': 7145743,
        'total_supply': 7565743,
        'max_supply': 21000000,
        'quotes.USD.price': 87.3537,
        'quotes.USD.volume_24h': 5551500,
        'quotes.USD.market_cap': 624207083,
        'quotes.USD.percent_change_1h': 0.41,
        'quotes.USD.percent_change_24h': 2.01,
        'quotes.USD.percent_change_7d': 8.13,
        'quotes.BTC.price': 0.0092973779,
        'quotes.BTC.volume_24h': 590.8667109431,
        'quotes.BTC.market_cap': 66437,
        'quotes.BTC.percent_change_1h': 0.41,
        'quotes.BTC.percent_change_24h': 2.01,
        'quotes.BTC.percent_change_7d': 8.13,
        'last_updated': 1525959547
    },
    {
        'id': 1169,
        'name': 'PIVX',
        'symbol': 'PIVX',
        'website_slug': 'pivx',
        'rank': 70,
        'circulating_supply': 56162946,
        'total_supply': 56162946,
        'quotes.USD.price': 5.49196,
        'quotes.USD.volume_24h': 2325100,
        'quotes.USD.market_cap': 308444655,
        'quotes.USD.percent_change_1h': 0.37,
        'quotes.USD.percent_change_24h': -1.31,
        'quotes.USD.percent_change_7d': -9.01,
        'quotes.BTC.price': 0.0005845296,
        'quotes.BTC.volume_24h': 247.4690065052,
        'quotes.BTC.market_cap': 32829,
        'quotes.BTC.percent_change_1h': 0.37,
        'quotes.BTC.percent_change_24h': -1.31,
        'quotes.BTC.percent_change_7d': -9.01,
        'last_updated': 1525959547
    },
    {
        'id': 1214,
        'name': 'Lisk',
        'symbol': 'LSK',
        'website_slug': 'lisk',
        'rank': 23,
        'circulating_supply': 105741615,
        'total_supply': 120991452,
        'quotes.USD.price': 12.3162,
        'quotes.USD.volume_24h': 22025300,
        'quotes.USD.market_cap': 1302334883,
        'quotes.USD.percent_change_1h': -0.11,
        'quotes.USD.percent_change_24h': 3.63,
        'quotes.USD.percent_change_7d': -12.15,
        'quotes.BTC.price': 0.0013108588,
        'quotes.BTC.volume_24h': 2344.2342733558,
        'quotes.BTC.market_cap': 138612,
        'quotes.BTC.percent_change_1h': -0.11,
        'quotes.BTC.percent_change_24h': 3.63,
        'quotes.BTC.percent_change_7d': -12.15,
        'last_updated': 1525959548
    },
    {
        'id': 1229,
        'name': 'DigixDAO',
        'symbol': 'DGD',
        'website_slug': 'digixdao',
        'rank': 54,
        'circulating_supply': 2000000,
        'total_supply': 2000000,
        'quotes.USD.price': 228.826,
        'quotes.USD.volume_24h': 2526760,
        'quotes.USD.market_cap': 457652000,
        'quotes.USD.percent_change_1h': 0.9,
        'quotes.USD.percent_change_24h': -1.92,
        'quotes.USD.percent_change_7d': -16.86,
        'quotes.BTC.price': 0.0243547989,
        'quotes.BTC.volume_24h': 268.9324273696,
        'quotes.BTC.market_cap': 48710,
        'quotes.BTC.percent_change_1h': 0.9,
        'quotes.BTC.percent_change_24h': -1.92,
        'quotes.BTC.percent_change_7d': -16.86,
        'last_updated': 1525959548
    },
    {
        'id': 1230,
        'name': 'Steem',
        'symbol': 'STEEM',
        'website_slug': 'steem',
        'rank': 32,
        'circulating_supply': 255002183,
        'total_supply': 271976277,
        'quotes.USD.price': 3.40084,
        'quotes.USD.volume_24h': 8336220,
        'quotes.USD.market_cap': 867221623,
        'quotes.USD.percent_change_1h': 0.01,
        'quotes.USD.percent_change_24h': -2.85,
        'quotes.USD.percent_change_7d': -14.32,
        'quotes.BTC.price': 0.000361964,
        'quotes.BTC.volume_24h': 887.2547767447,
        'quotes.BTC.market_cap': 92302,
        'quotes.BTC.percent_change_1h': 0.01,
        'quotes.BTC.percent_change_24h': -2.85,
        'quotes.BTC.percent_change_7d': -14.32,
        'last_updated': 1525959548
    },
    {
        'id': 1274,
        'name': 'Waves',
        'symbol': 'WAVES',
        'website_slug': 'waves',
        'rank': 39,
        'circulating_supply': 100000000,
        'total_supply': 100000000,
        'quotes.USD.price': 6.78247,
        'quotes.USD.volume_24h': 32242500,
        'quotes.USD.market_cap': 678247000,
        'quotes.USD.percent_change_1h': 1.43,
        'quotes.USD.percent_change_24h': 4.98,
        'quotes.USD.percent_change_7d': -9.8,
        'quotes.BTC.price': 0.0007218834,
        'quotes.BTC.volume_24h': 3431.6887197303,
        'quotes.BTC.market_cap': 72188,
        'quotes.BTC.percent_change_1h': 1.43,
        'quotes.BTC.percent_change_24h': 4.98,
        'quotes.BTC.percent_change_7d': -9.8,
        'last_updated': 1525959548
    },
    {
        'id': 1320,
        'name': 'Ardor',
        'symbol': 'ARDR',
        'website_slug': 'ardor',
        'rank': 61,
        'circulating_supply': 998999495,
        'total_supply': 998999495,
        'max_supply': 998999495,
        'quotes.USD.price': 0.367437,
        'quotes.USD.volume_24h': 2444260,
        'quotes.USD.market_cap': 367069377,
        'quotes.USD.percent_change_1h': 0.77,
        'quotes.USD.percent_change_24h': 2.02,
        'quotes.USD.percent_change_7d': -15.3,
        'quotes.BTC.price': 0.0000391077,
        'quotes.BTC.volume_24h': 260.1516467423,
        'quotes.BTC.market_cap': 39069,
        'quotes.BTC.percent_change_1h': 0.77,
        'quotes.BTC.percent_change_24h': 2.02,
        'quotes.BTC.percent_change_7d': -15.3,
        'last_updated': 1525959549
    },
    {
        'id': 1321,
        'name': 'Ethereum Classic',
        'symbol': 'ETC',
        'website_slug': 'ethereum-classic',
        'rank': 16,
        'circulating_supply': 101617423,
        'total_supply': 101617423,
        'quotes.USD.price': 21.6327,
        'quotes.USD.volume_24h': 209703000,
        'quotes.USD.market_cap': 2198259227,
        'quotes.USD.percent_change_1h': 0.44,
        'quotes.USD.percent_change_24h': 0.34,
        'quotes.USD.percent_change_7d': -3.67,
        'quotes.BTC.price': 0.0023024484,
        'quotes.BTC.volume_24h': 22319.4671503014,
        'quotes.BTC.market_cap': 233969,
        'quotes.BTC.percent_change_1h': 0.44,
        'quotes.BTC.percent_change_24h': 0.34,
        'quotes.BTC.percent_change_7d': -3.67,
        'last_updated': 1525959549
    },
    {
        'id': 1343,
        'name': 'Stratis',
        'symbol': 'STRAT',
        'website_slug': 'stratis',
        'rank': 37,
        'circulating_supply': 98849905,
        'total_supply': 98849905,
        'quotes.USD.price': 7.0794,
        'quotes.USD.volume_24h': 13008600,
        'quotes.USD.market_cap': 699798019,
        'quotes.USD.percent_change_1h': -0.94,
        'quotes.USD.percent_change_24h': -3.42,
        'quotes.USD.percent_change_7d': -7.64,
        'quotes.BTC.price': 0.0007534868,
        'quotes.BTC.volume_24h': 1384.5534893226,
        'quotes.BTC.market_cap': 74482,
        'quotes.BTC.percent_change_1h': -0.94,
        'quotes.BTC.percent_change_24h': -3.42,
        'quotes.BTC.percent_change_7d': -7.64,
        'last_updated': 1525959548
    },
    {
        'id': 1376,
        'name': 'NEO',
        'symbol': 'NEO',
        'website_slug': 'neo',
        'rank': 11,
        'circulating_supply': 65000000,
        'total_supply': 100000000,
        'max_supply': 100000000,
        'quotes.USD.price': 75.9669,
        'quotes.USD.volume_24h': 111202000,
        'quotes.USD.market_cap': 4937848500,
        'quotes.USD.percent_change_1h': 0.68,
        'quotes.USD.percent_change_24h': -0.11,
        'quotes.USD.percent_change_7d': -11.79,
        'quotes.BTC.price': 0.0080854386,
        'quotes.BTC.volume_24h': 11835.6408160485,
        'quotes.BTC.market_cap': 525554,
        'quotes.BTC.percent_change_1h': 0.68,
        'quotes.BTC.percent_change_24h': -0.11,
        'quotes.BTC.percent_change_7d': -11.79,
        'last_updated': 1525959551
    },
    {
        'id': 1437,
        'name': 'Zcash',
        'symbol': 'ZEC',
        'website_slug': 'zcash',
        'rank': 27,
        'circulating_supply': 3885556,
        'total_supply': 3885556,
        'quotes.USD.price': 280.883,
        'quotes.USD.volume_24h': 53374000,
        'quotes.USD.market_cap': 1091386696,
        'quotes.USD.percent_change_1h': 0.17,
        'quotes.USD.percent_change_24h': 2.29,
        'quotes.USD.percent_change_7d': -7.22,
        'quotes.BTC.price': 0.0298954182,
        'quotes.BTC.volume_24h': 5680.7925479377,
        'quotes.BTC.market_cap': 116160,
        'quotes.BTC.percent_change_1h': 0.17,
        'quotes.BTC.percent_change_24h': 2.29,
        'quotes.BTC.percent_change_7d': -7.22,
        'last_updated': 1525959549
    },
    {
        'id': 1455,
        'name': 'Golem',
        'symbol': 'GNT',
        'website_slug': 'golem-network-tokens',
        'rank': 45,
        'circulating_supply': 834262000,
        'total_supply': 1000000000,
        'quotes.USD.price': 0.695396,
        'quotes.USD.volume_24h': 23335300,
        'quotes.USD.market_cap': 580142458,
        'quotes.USD.percent_change_1h': 0.2,
        'quotes.USD.percent_change_24h': -3.12,
        'quotes.USD.percent_change_7d': -16.54,
        'quotes.BTC.price': 0.0000740136,
        'quotes.BTC.volume_24h': 2483.6624263479,
        'quotes.BTC.market_cap': 61747,
        'quotes.BTC.percent_change_1h': 0.2,
        'quotes.BTC.percent_change_24h': -3.12,
        'quotes.BTC.percent_change_7d': -16.54,
        'last_updated': 1525959550
    },
    {
        'id': 1518,
        'name': 'Maker',
        'symbol': 'MKR',
        'website_slug': 'maker',
        'rank': 40,
        'circulating_supply': 618228,
        'total_supply': 1000000,
        'quotes.USD.price': 1079.04,
        'quotes.USD.volume_24h': 1358940,
        'quotes.USD.market_cap': 667092493,
        'quotes.USD.percent_change_1h': -0.01,
        'quotes.USD.percent_change_24h': 5.79,
        'quotes.USD.percent_change_7d': -1.54,
        'quotes.BTC.price': 0.1148462246,
        'quotes.BTC.volume_24h': 144.6370184939,
        'quotes.BTC.market_cap': 71001,
        'quotes.BTC.percent_change_1h': -0.01,
        'quotes.BTC.percent_change_24h': 5.79,
        'quotes.BTC.percent_change_7d': -1.54,
        'last_updated': 1525959555
    },
    {
        'id': 1521,
        'name': 'Komodo',
        'symbol': 'KMD',
        'website_slug': 'komodo',
        'rank': 62,
        'circulating_supply': 104059367,
        'total_supply': 104059367,
        'quotes.USD.price': 3.52224,
        'quotes.USD.volume_24h': 2954990,
        'quotes.USD.market_cap': 366522067,
        'quotes.USD.percent_change_1h': 0.65,
        'quotes.USD.percent_change_24h': 1.77,
        'quotes.USD.percent_change_7d': -16.38,
        'quotes.BTC.price': 0.0003748851,
        'quotes.BTC.volume_24h': 314.5105326794,
        'quotes.BTC.market_cap': 39010,
        'quotes.BTC.percent_change_1h': 0.65,
        'quotes.BTC.percent_change_24h': 1.77,
        'quotes.BTC.percent_change_7d': -16.38,
        'last_updated': 1525959550
    },
    {
        'id': 1567,
        'name': 'Nano',
        'symbol': 'NANO',
        'website_slug': 'nano',
        'rank': 28,
        'circulating_supply': 133248289,
        'total_supply': 133248289,
        'max_supply': 133248290,
        'quotes.USD.price': 7.73502,
        'quotes.USD.volume_24h': 22009000,
        'quotes.USD.market_cap': 1030678182,
        'quotes.USD.percent_change_1h': -0.84,
        'quotes.USD.percent_change_24h': -1.84,
        'quotes.USD.percent_change_7d': -18.19,
        'quotes.BTC.price': 0.0008232668,
        'quotes.BTC.volume_24h': 2342.4994039713,
        'quotes.BTC.market_cap': 109699,
        'quotes.BTC.percent_change_1h': -0.84,
        'quotes.BTC.percent_change_24h': -1.84,
        'quotes.BTC.percent_change_7d': -18.19,
        'last_updated': 1525959550
    },
    {
        'id': 1586,
        'name': 'Ark',
        'symbol': 'ARK',
        'website_slug': 'ark',
        'rank': 64,
        'circulating_supply': 102454190,
        'total_supply': 133704190,
        'quotes.USD.price': 3.27081,
        'quotes.USD.volume_24h': 2002160,
        'quotes.USD.market_cap': 335108189,
        'quotes.USD.percent_change_1h': -0.28,
        'quotes.USD.percent_change_24h': -0.87,
        'quotes.USD.percent_change_7d': -12.03,
        'quotes.BTC.price': 0.0003481244,
        'quotes.BTC.volume_24h': 213.0973059501,
        'quotes.BTC.market_cap': 35667,
        'quotes.BTC.percent_change_1h': -0.28,
        'quotes.BTC.percent_change_24h': -0.87,
        'quotes.BTC.percent_change_7d': -12.03,
        'last_updated': 1525959550
    },
    {
        'id': 1619,
        'name': 'Skycoin',
        'symbol': 'SKY',
        'website_slug': 'skycoin',
        'rank': 85,
        'circulating_supply': 8739174,
        'total_supply': 25000000,
        'max_supply': 100000000,
        'quotes.USD.price': 26.44,
        'quotes.USD.volume_24h': 2355990,
        'quotes.USD.market_cap': 231063761,
        'quotes.USD.percent_change_1h': -1.79,
        'quotes.USD.percent_change_24h': 12.08,
        'quotes.USD.percent_change_7d': 35.89,
        'quotes.BTC.price': 0.0028141071,
        'quotes.BTC.volume_24h': 250.7567436395,
        'quotes.BTC.market_cap': 24593,
        'quotes.BTC.percent_change_1h': -1.79,
        'quotes.BTC.percent_change_24h': 12.08,
        'quotes.BTC.percent_change_7d': 35.89,
        'last_updated': 1525959551
    },
    {
        'id': 1684,
        'name': 'Qtum',
        'symbol': 'QTUM',
        'website_slug': 'qtum',
        'rank': 18,
        'circulating_supply': 88584760,
        'total_supply': 100584760,
        'quotes.USD.price': 20.0481,
        'quotes.USD.volume_24h': 153130000,
        'quotes.USD.market_cap': 1775956127,
        'quotes.USD.percent_change_1h': 0.46,
        'quotes.USD.percent_change_24h': -0.81,
        'quotes.USD.percent_change_7d': -10.94,
        'quotes.BTC.price': 0.0021337936,
        'quotes.BTC.volume_24h': 16298.1931814312,
        'quotes.BTC.market_cap': 189022,
        'quotes.BTC.percent_change_1h': 0.46,
        'quotes.BTC.percent_change_24h': -0.81,
        'quotes.BTC.percent_change_7d': -10.94,
        'last_updated': 1525959552
    },
    {
        'id': 1697,
        'name': 'Basic Attention Token',
        'symbol': 'BAT',
        'website_slug': 'basic-attention-token',
        'rank': 59,
        'circulating_supply': 1000000000,
        'total_supply': 1500000000,
        'quotes.USD.price': 0.3844,
        'quotes.USD.volume_24h': 5814560,
        'quotes.USD.market_cap': 384400000,
        'quotes.USD.percent_change_1h': 0.43,
        'quotes.USD.percent_change_24h': 2.01,
        'quotes.USD.percent_change_7d': -23.32,
        'quotes.BTC.price': 0.0000409131,
        'quotes.BTC.volume_24h': 618.8651612683,
        'quotes.BTC.market_cap': 40913,
        'quotes.BTC.percent_change_1h': 0.43,
        'quotes.BTC.percent_change_24h': 2.01,
        'quotes.BTC.percent_change_7d': -23.32,
        'last_updated': 1525959552
    },
    {
        'id': 1700,
        'name': 'Aeternity',
        'symbol': 'AE',
        'website_slug': 'aeternity',
        'rank': 26,
        'circulating_supply': 233020472,
        'total_supply': 273685830,
        'quotes.USD.price': 4.70968,
        'quotes.USD.volume_24h': 42675000,
        'quotes.USD.market_cap': 1097451857,
        'quotes.USD.percent_change_1h': 0.93,
        'quotes.USD.percent_change_24h': 4.41,
        'quotes.USD.percent_change_7d': 2.38,
        'quotes.BTC.price': 0.0005012687,
        'quotes.BTC.volume_24h': 4542.0583426995,
        'quotes.BTC.market_cap': 116806,
        'quotes.BTC.percent_change_1h': 0.93,
        'quotes.BTC.percent_change_24h': 4.41,
        'quotes.BTC.percent_change_7d': 2.38,
        'last_updated': 1525959552
    },
    {
        'id': 1710,
        'name': 'Veritaseum',
        'symbol': 'VERI',
        'website_slug': 'veritaseum',
        'rank': 93,
        'circulating_supply': 2036645,
        'total_supply': 100000000,
        'quotes.USD.price': 100.553,
        'quotes.USD.volume_24h': 582160,
        'quotes.USD.market_cap': 204790809,
        'quotes.USD.percent_change_1h': -1.19,
        'quotes.USD.percent_change_24h': 0.66,
        'quotes.USD.percent_change_7d': -23.95,
        'quotes.BTC.price': 0.0107022283,
        'quotes.BTC.volume_24h': 61.9614454549,
        'quotes.BTC.market_cap': 21797,
        'quotes.BTC.percent_change_1h': -1.19,
        'quotes.BTC.percent_change_24h': 0.66,
        'quotes.BTC.percent_change_7d': -23.95,
        'last_updated': 1525959552
    },
    {
        'id': 1720,
        'name': 'IOTA',
        'symbol': 'MIOTA',
        'website_slug': 'iota',
        'rank': 9,
        'circulating_supply': 2779530283,
        'total_supply': 2779530283,
        'max_supply': 2779530283,
        'quotes.USD.price': 2.27662,
        'quotes.USD.volume_24h': 83189900,
        'quotes.USD.market_cap': 6327934233,
        'quotes.USD.percent_change_1h': -0.03,
        'quotes.USD.percent_change_24h': -3.22,
        'quotes.USD.percent_change_7d': -7.22,
        'quotes.BTC.price': 0.0002423091,
        'quotes.BTC.volume_24h': 8854.2092401485,
        'quotes.BTC.market_cap': 673505,
        'quotes.BTC.percent_change_1h': -0.03,
        'quotes.BTC.percent_change_24h': -3.22,
        'quotes.BTC.percent_change_7d': -7.22,
        'last_updated': 1525959552
    },
    {
        'id': 1727,
        'name': 'Bancor',
        'symbol': 'BNT',
        'website_slug': 'bancor',
        'rank': 78,
        'circulating_supply': 51610074,
        'total_supply': 75902028,
        'quotes.USD.price': 5.13411,
        'quotes.USD.volume_24h': 20076100,
        'quotes.USD.market_cap': 264971796,
        'quotes.USD.percent_change_1h': 0.41,
        'quotes.USD.percent_change_24h': 3.27,
        'quotes.USD.percent_change_7d': 3.35,
        'quotes.BTC.price': 0.0005464423,
        'quotes.BTC.volume_24h': 2136.7736964,
        'quotes.BTC.market_cap': 28202,
        'quotes.BTC.percent_change_1h': 0.41,
        'quotes.BTC.percent_change_24h': 3.27,
        'quotes.BTC.percent_change_7d': 3.35,
        'last_updated': 1525959553
    },
    {
        'id': 1750,
        'name': 'GXChain',
        'symbol': 'GXS',
        'website_slug': 'gxchain',
        'rank': 81,
        'circulating_supply': 60000000,
        'total_supply': 100000000,
        'max_supply': 100000000,
        'quotes.USD.price': 4.35505,
        'quotes.USD.volume_24h': 19964900,
        'quotes.USD.market_cap': 261303000,
        'quotes.USD.percent_change_1h': 0.25,
        'quotes.USD.percent_change_24h': 12.69,
        'quotes.USD.percent_change_7d': -0.75,
        'quotes.BTC.price': 0.0004635241,
        'quotes.BTC.volume_24h': 2124.9382684513,
        'quotes.BTC.market_cap': 27811,
        'quotes.BTC.percent_change_1h': 0.25,
        'quotes.BTC.percent_change_24h': 12.69,
        'quotes.BTC.percent_change_7d': -0.75,
        'last_updated': 1525959553
    },
    {
        'id': 1757,
        'name': 'FunFair',
        'symbol': 'FUN',
        'website_slug': 'funfair',
        'rank': 73,
        'circulating_supply': 4858654389,
        'total_supply': 10999873621,
        'quotes.USD.price': 0.0571294,
        'quotes.USD.volume_24h': 9900680,
        'quotes.USD.market_cap': 277572010,
        'quotes.USD.percent_change_1h': 0.44,
        'quotes.USD.percent_change_24h': 5.7,
        'quotes.USD.percent_change_7d': 7.94,
        'quotes.BTC.price': 0.0000060805,
        'quotes.BTC.volume_24h': 1053.7660502026,
        'quotes.BTC.market_cap': 29543,
        'quotes.BTC.percent_change_1h': 0.44,
        'quotes.BTC.percent_change_24h': 5.7,
        'quotes.BTC.percent_change_7d': 7.94,
        'last_updated': 1525959553
    },
    {
        'id': 1759,
        'name': 'Status',
        'symbol': 'SNT',
        'website_slug': 'status',
        'rank': 47,
        'circulating_supply': 3470483788,
        'total_supply': 6804870174,
        'quotes.USD.price': 0.157027,
        'quotes.USD.volume_24h': 37478600,
        'quotes.USD.market_cap': 544959658,
        'quotes.USD.percent_change_1h': -0.31,
        'quotes.USD.percent_change_24h': 0.78,
        'quotes.USD.percent_change_7d': -5.11,
        'quotes.BTC.price': 0.000016713,
        'quotes.BTC.volume_24h': 3988.9862402507,
        'quotes.BTC.market_cap': 58002,
        'quotes.BTC.percent_change_1h': -0.31,
        'quotes.BTC.percent_change_24h': 0.78,
        'quotes.BTC.percent_change_7d': -5.11,
        'last_updated': 1525959553
    },
    {
        'id': 1765,
        'name': 'EOS',
        'symbol': 'EOS',
        'website_slug': 'eos',
        'rank': 5,
        'circulating_supply': 846909223,
        'total_supply': 900000000,
        'max_supply': 1000000000,
        'quotes.USD.price': 18.6412,
        'quotes.USD.volume_24h': 1060340000,
        'quotes.USD.market_cap': 15787404209,
        'quotes.USD.percent_change_1h': 2.87,
        'quotes.USD.percent_change_24h': 3.92,
        'quotes.USD.percent_change_7d': 4.17,
        'quotes.BTC.price': 0.001984052,
        'quotes.BTC.volume_24h': 112855.9143080958,
        'quotes.BTC.market_cap': 1680312,
        'quotes.BTC.percent_change_1h': 2.87,
        'quotes.BTC.percent_change_24h': 3.92,
        'quotes.BTC.percent_change_7d': 4.17,
        'last_updated': 1525959554
    },
    {
        'id': 1785,
        'name': 'Gas',
        'symbol': 'GAS',
        'website_slug': 'gas',
        'rank': 67,
        'circulating_supply': 10128375,
        'total_supply': 17190378,
        'max_supply': 100000000,
        'quotes.USD.price': 31.8588,
        'quotes.USD.volume_24h': 10942400,
        'quotes.USD.market_cap': 322677877,
        'quotes.USD.percent_change_1h': 0.26,
        'quotes.USD.percent_change_24h': -1.85,
        'quotes.USD.percent_change_7d': 0.54,
        'quotes.BTC.price': 0.0033908501,
        'quotes.BTC.volume_24h': 1164.6401689316,
        'quotes.BTC.market_cap': 34344,
        'quotes.BTC.percent_change_1h': 0.26,
        'quotes.BTC.percent_change_24h': -1.85,
        'quotes.BTC.percent_change_7d': 0.54,
        'last_updated': 1525959553
    },
    {
        'id': 1789,
        'name': 'Populous',
        'symbol': 'PPT',
        'website_slug': 'populous',
        'rank': 38,
        'circulating_supply': 37004027,
        'total_supply': 53252246,
        'max_supply': 53252246,
        'quotes.USD.price': 18.4866,
        'quotes.USD.volume_24h': 10530500,
        'quotes.USD.market_cap': 684078644,
        'quotes.USD.percent_change_1h': -0.16,
        'quotes.USD.percent_change_24h': -5.91,
        'quotes.USD.percent_change_7d': -21.53,
        'quotes.BTC.price': 0.0019675973,
        'quotes.BTC.volume_24h': 1120.8001260175,
        'quotes.BTC.market_cap': 72809,
        'quotes.BTC.percent_change_1h': -0.16,
        'quotes.BTC.percent_change_24h': -5.91,
        'quotes.BTC.percent_change_7d': -21.53,
        'last_updated': 1525959553
    },
    {
        'id': 1808,
        'name': 'OmiseGO',
        'symbol': 'OMG',
        'website_slug': 'omisego',
        'rank': 19,
        'circulating_supply': 102042552,
        'total_supply': 140245398,
        'quotes.USD.price': 16.1189,
        'quotes.USD.volume_24h': 47569900,
        'quotes.USD.market_cap': 1644813688,
        'quotes.USD.percent_change_1h': -0.03,
        'quotes.USD.percent_change_24h': 0.07,
        'quotes.USD.percent_change_7d': -11.89,
        'quotes.BTC.price': 0.0017155942,
        'quotes.BTC.volume_24h': 5063.0406832192,
        'quotes.BTC.market_cap': 175064,
        'quotes.BTC.percent_change_1h': -0.03,
        'quotes.BTC.percent_change_24h': 0.07,
        'quotes.BTC.percent_change_7d': -11.89,
        'last_updated': 1525959554
    },
    {
        'id': 1817,
        'name': 'Ethos',
        'symbol': 'ETHOS',
        'website_slug': 'ethos',
        'rank': 69,
        'circulating_supply': 76496756,
        'total_supply': 222295208,
        'quotes.USD.price': 4.11,
        'quotes.USD.volume_24h': 51644200,
        'quotes.USD.market_cap': 314401665,
        'quotes.USD.percent_change_1h': 0.96,
        'quotes.USD.percent_change_24h': -4.53,
        'quotes.USD.percent_change_7d': 15.14,
        'quotes.BTC.price': 0.0004374425,
        'quotes.BTC.volume_24h': 5496.6835257655,
        'quotes.BTC.market_cap': 33463,
        'quotes.BTC.percent_change_1h': 0.96,
        'quotes.BTC.percent_change_24h': -4.53,
        'quotes.BTC.percent_change_7d': 15.14,
        'last_updated': 1525959556
    },
    {
        'id': 1831,
        'name': 'Bitcoin Cash',
        'symbol': 'BCH',
        'website_slug': 'bitcoin-cash',
        'rank': 4,
        'circulating_supply': 17120113,
        'total_supply': 17120113,
        'max_supply': 21000000,
        'quotes.USD.price': 1662.52,
        'quotes.USD.volume_24h': 1137080000,
        'quotes.USD.market_cap': 28462529434,
        'quotes.USD.percent_change_1h': 0.73,
        'quotes.USD.percent_change_24h': 5.92,
        'quotes.USD.percent_change_7d': 11.11,
        'quotes.BTC.price': 0.1769481625,
        'quotes.BTC.volume_24h': 121023.6367971118,
        'quotes.BTC.market_cap': 3029372,
        'quotes.BTC.percent_change_1h': 0.73,
        'quotes.BTC.percent_change_24h': 5.92,
        'quotes.BTC.percent_change_7d': 11.11,
        'last_updated': 1525959554
    },
    {
        'id': 1839,
        'name': 'Binance Coin',
        'symbol': 'BNB',
        'website_slug': 'binance-coin',
        'rank': 21,
        'circulating_supply': 114041290,
        'total_supply': 194972068,
        'quotes.USD.price': 14.344,
        'quotes.USD.volume_24h': 101085000,
        'quotes.USD.market_cap': 1635808265,
        'quotes.USD.percent_change_1h': 1.13,
        'quotes.USD.percent_change_24h': 2.89,
        'quotes.USD.percent_change_7d': -0.5,
        'quotes.BTC.price': 0.0015266851,
        'quotes.BTC.volume_24h': 10758.8510268724,
        'quotes.BTC.market_cap': 174105,
        'quotes.BTC.percent_change_1h': 1.13,
        'quotes.BTC.percent_change_24h': 2.89,
        'quotes.BTC.percent_change_7d': -0.5,
        'last_updated': 1525959554
    },
    {
        'id': 1866,
        'name': 'Bytom',
        'symbol': 'BTM',
        'website_slug': 'bytom',
        'rank': 35,
        'circulating_supply': 987000000,
        'total_supply': 1407000000,
        'quotes.USD.price': 0.781271,
        'quotes.USD.volume_24h': 66008000,
        'quotes.USD.market_cap': 771114477,
        'quotes.USD.percent_change_1h': 1.07,
        'quotes.USD.percent_change_24h': -0.6,
        'quotes.USD.percent_change_7d': -17.02,
        'quotes.BTC.price': 0.0000831536,
        'quotes.BTC.volume_24h': 7025.4759715269,
        'quotes.BTC.market_cap': 82073,
        'quotes.BTC.percent_change_1h': 1.07,
        'quotes.BTC.percent_change_24h': -0.6,
        'quotes.BTC.percent_change_7d': -17.02,
        'last_updated': 1525959554
    },
    {
        'id': 1876,
        'name': 'Dentacoin',
        'symbol': 'DCN',
        'website_slug': 'dentacoin',
        'rank': 55,
        'circulating_supply': 325226613094,
        'total_supply': 1963173416169,
        'max_supply': 8000000000000,
        'quotes.USD.price': 0.00133026,
        'quotes.USD.volume_24h': 5416500,
        'quotes.USD.market_cap': 432635954,
        'quotes.USD.percent_change_1h': 4.62,
        'quotes.USD.percent_change_24h': 42.7,
        'quotes.USD.percent_change_7d': 77.46,
        'quotes.BTC.price': 1.416e-7,
        'quotes.BTC.volume_24h': 576.4981608256,
        'quotes.BTC.market_cap': 46047,
        'quotes.BTC.percent_change_1h': 4.62,
        'quotes.BTC.percent_change_24h': 42.7,
        'quotes.BTC.percent_change_7d': 77.46,
        'last_updated': 1525959555
    },
    {
        'id': 1896,
        'name': '0x',
        'symbol': 'ZRX',
        'website_slug': '0x',
        'rank': 30,
        'circulating_supply': 527845645,
        'total_supply': 1000000000,
        'quotes.USD.price': 1.87853,
        'quotes.USD.volume_24h': 55581300,
        'quotes.USD.market_cap': 991573880,
        'quotes.USD.percent_change_1h': 0.49,
        'quotes.USD.percent_change_24h': 9.71,
        'quotes.USD.percent_change_7d': 32.16,
        'quotes.BTC.price': 0.0001999389,
        'quotes.BTC.volume_24h': 5915.7236640441,
        'quotes.BTC.market_cap': 105537,
        'quotes.BTC.percent_change_1h': 0.49,
        'quotes.BTC.percent_change_24h': 9.71,
        'quotes.BTC.percent_change_7d': 32.16,
        'last_updated': 1525959555
    },
    {
        'id': 1903,
        'name': 'Hshare',
        'symbol': 'HSR',
        'website_slug': 'hshare',
        'rank': 49,
        'circulating_supply': 42966786,
        'total_supply': 42966786,
        'max_supply': 84000000,
        'quotes.USD.price': 11.6004,
        'quotes.USD.volume_24h': 62928900,
        'quotes.USD.market_cap': 498431899,
        'quotes.USD.percent_change_1h': 0.65,
        'quotes.USD.percent_change_24h': -0.14,
        'quotes.USD.percent_change_7d': -18.59,
        'quotes.BTC.price': 0.0012346735,
        'quotes.BTC.volume_24h': 6697.7559517728,
        'quotes.BTC.market_cap': 53050,
        'quotes.BTC.percent_change_1h': 0.65,
        'quotes.BTC.percent_change_24h': -0.14,
        'quotes.BTC.percent_change_7d': -18.59,
        'last_updated': 1525959555
    },
    {
        'id': 1904,
        'name': 'VeChain',
        'symbol': 'VEN',
        'website_slug': 'vechain',
        'rank': 15,
        'circulating_supply': 525899138,
        'total_supply': 873378637,
        'quotes.USD.price': 5.37628,
        'quotes.USD.volume_24h': 131622000,
        'quotes.USD.market_cap': 2827381016,
        'quotes.USD.percent_change_1h': 1.27,
        'quotes.USD.percent_change_24h': 6.93,
        'quotes.USD.percent_change_7d': 3.25,
        'quotes.BTC.price': 0.0005722174,
        'quotes.BTC.volume_24h': 14009.0170634515,
        'quotes.BTC.market_cap': 300929,
        'quotes.BTC.percent_change_1h': 1.27,
        'quotes.BTC.percent_change_24h': 6.93,
        'quotes.BTC.percent_change_7d': 3.25,
        'last_updated': 1525959555
    },
    {
        'id': 1908,
        'name': 'Nebulas',
        'symbol': 'NAS',
        'website_slug': 'nebulas-token',
        'rank': 56,
        'circulating_supply': 45500000,
        'total_supply': 100000000,
        'max_supply': 100000000,
        'quotes.USD.price': 9.46654,
        'quotes.USD.volume_24h': 36855400,
        'quotes.USD.market_cap': 430727570,
        'quotes.USD.percent_change_1h': 3.18,
        'quotes.USD.percent_change_24h': 0.15,
        'quotes.USD.percent_change_7d': -18.02,
        'quotes.BTC.price': 0.0010075589,
        'quotes.BTC.volume_24h': 3922.6567555601,
        'quotes.BTC.market_cap': 45844,
        'quotes.BTC.percent_change_1h': 3.18,
        'quotes.BTC.percent_change_24h': 0.15,
        'quotes.BTC.percent_change_7d': -18.02,
        'last_updated': 1525959555
    },
    {
        'id': 1925,
        'name': 'Waltonchain',
        'symbol': 'WTC',
        'website_slug': 'waltonchain',
        'rank': 51,
        'circulating_supply': 31144099,
        'total_supply': 70000000,
        'max_supply': 100000000,
        'quotes.USD.price': 14.9176,
        'quotes.USD.volume_24h': 11236100,
        'quotes.USD.market_cap': 464595217,
        'quotes.USD.percent_change_1h': 0.34,
        'quotes.USD.percent_change_24h': -0.08,
        'quotes.USD.percent_change_7d': -12.06,
        'quotes.BTC.price': 0.0015877354,
        'quotes.BTC.volume_24h': 1195.899747965,
        'quotes.BTC.market_cap': 49449,
        'quotes.BTC.percent_change_1h': 0.34,
        'quotes.BTC.percent_change_24h': -0.08,
        'quotes.BTC.percent_change_7d': -12.06,
        'last_updated': 1525959555
    },
    {
        'id': 1934,
        'name': 'Loopring',
        'symbol': 'LRC',
        'website_slug': 'loopring',
        'rank': 53,
        'circulating_supply': 572074043,
        'total_supply': 1374956262,
        'quotes.USD.price': 0.810461,
        'quotes.USD.volume_24h': 20727600,
        'quotes.USD.market_cap': 463643701,
        'quotes.USD.percent_change_1h': -0.06,
        'quotes.USD.percent_change_24h': -0.8,
        'quotes.USD.percent_change_7d': -13.21,
        'quotes.BTC.price': 0.0000862604,
        'quotes.BTC.volume_24h': 2206.11525493,
        'quotes.BTC.market_cap': 49347,
        'quotes.BTC.percent_change_1h': -0.06,
        'quotes.BTC.percent_change_24h': -0.8,
        'quotes.BTC.percent_change_7d': -13.21,
        'last_updated': 1525959556
    },
    {
        'id': 1955,
        'name': 'Neblio',
        'symbol': 'NEBL',
        'website_slug': 'neblio',
        'rank': 95,
        'circulating_supply': 13082609,
        'total_supply': 13844890,
        'quotes.USD.price': 15.3869,
        'quotes.USD.volume_24h': 10336400,
        'quotes.USD.market_cap': 201300799,
        'quotes.USD.percent_change_1h': 1.44,
        'quotes.USD.percent_change_24h': 5.53,
        'quotes.USD.percent_change_7d': -1.92,
        'quotes.BTC.price': 0.0016376848,
        'quotes.BTC.volume_24h': 1100.1413439597,
        'quotes.BTC.market_cap': 21425,
        'quotes.BTC.percent_change_1h': 1.44,
        'quotes.BTC.percent_change_24h': 5.53,
        'quotes.BTC.percent_change_7d': -1.92,
        'last_updated': 1525959556
    },
    {
        'id': 1958,
        'name': 'TRON',
        'symbol': 'TRX',
        'website_slug': 'tron',
        'rank': 10,
        'circulating_supply': 65748111645,
        'total_supply': 100000000000,
        'quotes.USD.price': 0.080687,
        'quotes.USD.volume_24h': 299007000,
        'quotes.USD.market_cap': 5305017884,
        'quotes.USD.percent_change_1h': 0.59,
        'quotes.USD.percent_change_24h': -1.21,
        'quotes.USD.percent_change_7d': -7.83,
        'quotes.BTC.price': 0.0000085878,
        'quotes.BTC.volume_24h': 31824.4227035864,
        'quotes.BTC.market_cap': 564633,
        'quotes.BTC.percent_change_1h': 0.59,
        'quotes.BTC.percent_change_24h': -1.21,
        'quotes.BTC.percent_change_7d': -7.83,
        'last_updated': 1525959555
    },
    {
        'id': 1975,
        'name': 'ChainLink',
        'symbol': 'LINK',
        'website_slug': 'chainlink',
        'rank': 96,
        'circulating_supply': 350000000,
        'total_supply': 1000000000,
        'quotes.USD.price': 0.572062,
        'quotes.USD.volume_24h': 7885770,
        'quotes.USD.market_cap': 200221700,
        'quotes.USD.percent_change_1h': 1.22,
        'quotes.USD.percent_change_24h': 3.23,
        'quotes.USD.percent_change_7d': 1.46,
        'quotes.BTC.price': 0.0000608867,
        'quotes.BTC.volume_24h': 839.3117145193,
        'quotes.BTC.market_cap': 21310,
        'quotes.BTC.percent_change_1h': 1.22,
        'quotes.BTC.percent_change_24h': 3.23,
        'quotes.BTC.percent_change_7d': 1.46,
        'last_updated': 1525959555
    },
    {
        'id': 1982,
        'name': 'Kyber Network',
        'symbol': 'KNC',
        'website_slug': 'kyber-network',
        'rank': 66,
        'circulating_supply': 134132697,
        'total_supply': 215625349,
        'quotes.USD.price': 2.43591,
        'quotes.USD.volume_24h': 58360900,
        'quotes.USD.market_cap': 326735178,
        'quotes.USD.percent_change_1h': 0.76,
        'quotes.USD.percent_change_24h': 9.58,
        'quotes.USD.percent_change_7d': -5.65,
        'quotes.BTC.price': 0.0002592629,
        'quotes.BTC.volume_24h': 6211.5667892783,
        'quotes.BTC.market_cap': 34776,
        'quotes.BTC.percent_change_1h': 0.76,
        'quotes.BTC.percent_change_24h': 9.58,
        'quotes.BTC.percent_change_7d': -5.65,
        'last_updated': 1525959556
    },
    {
        'id': 1984,
        'name': 'Substratum',
        'symbol': 'SUB',
        'website_slug': 'substratum',
        'rank': 76,
        'circulating_supply': 383021000,
        'total_supply': 472000000,
        'quotes.USD.price': 0.706048,
        'quotes.USD.volume_24h': 8287830,
        'quotes.USD.market_cap': 270431211,
        'quotes.USD.percent_change_1h': 2.19,
        'quotes.USD.percent_change_24h': 0.53,
        'quotes.USD.percent_change_7d': -14.1,
        'quotes.BTC.price': 0.0000751473,
        'quotes.BTC.volume_24h': 882.1044497803,
        'quotes.BTC.market_cap': 28783,
        'quotes.BTC.percent_change_1h': 2.19,
        'quotes.BTC.percent_change_24h': 0.53,
        'quotes.BTC.percent_change_7d': -14.1,
        'last_updated': 1525959556
    },
    {
        'id': 1996,
        'name': 'SALT',
        'symbol': 'SALT',
        'website_slug': 'salt',
        'rank': 99,
        'circulating_supply': 58777029,
        'total_supply': 120000000,
        'quotes.USD.price': 3.37318,
        'quotes.USD.volume_24h': 8359060,
        'quotes.USD.market_cap': 198265499,
        'quotes.USD.percent_change_1h': -0.07,
        'quotes.USD.percent_change_24h': -2.43,
        'quotes.USD.percent_change_7d': -22.07,
        'quotes.BTC.price': 0.00035902,
        'quotes.BTC.volume_24h': 889.6857225571,
        'quotes.BTC.market_cap': 21102,
        'quotes.BTC.percent_change_1h': -0.07,
        'quotes.BTC.percent_change_24h': -2.43,
        'quotes.BTC.percent_change_7d': -22.07,
        'last_updated': 1525959557
    },
    {
        'id': 2010,
        'name': 'Cardano',
        'symbol': 'ADA',
        'website_slug': 'cardano',
        'rank': 7,
        'circulating_supply': 25927070538,
        'total_supply': 31112483745,
        'max_supply': 45000000000,
        'quotes.USD.price': 0.322667,
        'quotes.USD.volume_24h': 116154000,
        'quotes.USD.market_cap': 8365810069,
        'quotes.USD.percent_change_1h': 1.18,
        'quotes.USD.percent_change_24h': -0.04,
        'quotes.USD.percent_change_7d': -13.81,
        'quotes.BTC.price': 0.0000343426,
        'quotes.BTC.volume_24h': 12362.7005210994,
        'quotes.BTC.market_cap': 890404,
        'quotes.BTC.percent_change_1h': 1.18,
        'quotes.BTC.percent_change_24h': -0.04,
        'quotes.BTC.percent_change_7d': -13.81,
        'last_updated': 1525959557
    },
    {
        'id': 2021,
        'name': 'RChain',
        'symbol': 'RHOC',
        'website_slug': 'rchain',
        'rank': 41,
        'circulating_supply': 360108914,
        'total_supply': 870663574,
        'max_supply': 1000000000,
        'quotes.USD.price': 1.8168,
        'quotes.USD.volume_24h': 966040,
        'quotes.USD.market_cap': 654245874,
        'quotes.USD.percent_change_1h': 0.17,
        'quotes.USD.percent_change_24h': -1.04,
        'quotes.USD.percent_change_7d': -8.53,
        'quotes.BTC.price': 0.0001933688,
        'quotes.BTC.volume_24h': 102.8192159668,
        'quotes.BTC.market_cap': 69634,
        'quotes.BTC.percent_change_1h': 0.17,
        'quotes.BTC.percent_change_24h': -1.04,
        'quotes.BTC.percent_change_7d': -8.53,
        'last_updated': 1525959557
    },
    {
        'id': 2027,
        'name': 'Cryptonex',
        'symbol': 'CNX',
        'website_slug': 'cryptonex',
        'rank': 72,
        'circulating_supply': 45261389,
        'total_supply': 106699014,
        'max_supply': 210000000,
        'quotes.USD.price': 6.22134,
        'quotes.USD.volume_24h': 2060160,
        'quotes.USD.market_cap': 281586488,
        'quotes.USD.percent_change_1h': 3.05,
        'quotes.USD.percent_change_24h': 6.82,
        'quotes.USD.percent_change_7d': -1.51,
        'quotes.BTC.price': 0.0006621603,
        'quotes.BTC.volume_24h': 219.2704608154,
        'quotes.BTC.market_cap': 29970,
        'quotes.BTC.percent_change_1h': 3.05,
        'quotes.BTC.percent_change_24h': 6.82,
        'quotes.BTC.percent_change_7d': -1.51,
        'last_updated': 1525959556
    },
    {
        'id': 2044,
        'name': 'Enigma',
        'symbol': 'ENG',
        'website_slug': 'enigma-project',
        'rank': 91,
        'circulating_supply': 74836171,
        'total_supply': 150000000,
        'quotes.USD.price': 2.82055,
        'quotes.USD.volume_24h': 7391400,
        'quotes.USD.market_cap': 211079162,
        'quotes.USD.percent_change_1h': 0.26,
        'quotes.USD.percent_change_24h': 6.15,
        'quotes.USD.percent_change_7d': -4.78,
        'quotes.BTC.price': 0.0003002016,
        'quotes.BTC.volume_24h': 786.694083989,
        'quotes.BTC.market_cap': 22466,
        'quotes.BTC.percent_change_1h': 0.26,
        'quotes.BTC.percent_change_24h': 6.15,
        'quotes.BTC.percent_change_7d': -4.78,
        'last_updated': 1525959557
    },
    {
        'id': 2062,
        'name': 'Aion',
        'symbol': 'AION',
        'website_slug': 'aion',
        'rank': 57,
        'circulating_supply': 133073439,
        'total_supply': 465934587,
        'quotes.USD.price': 3.20026,
        'quotes.USD.volume_24h': 8911780,
        'quotes.USD.market_cap': 425869604,
        'quotes.USD.percent_change_1h': 0.6,
        'quotes.USD.percent_change_24h': 3.78,
        'quotes.USD.percent_change_7d': -19.95,
        'quotes.BTC.price': 0.0003406155,
        'quotes.BTC.volume_24h': 948.5137597493,
        'quotes.BTC.market_cap': 45327,
        'quotes.BTC.percent_change_1h': 0.6,
        'quotes.BTC.percent_change_24h': 3.78,
        'quotes.BTC.percent_change_7d': -19.95,
        'last_updated': 1525959557
    },
    {
        'id': 2083,
        'name': 'Bitcoin Gold',
        'symbol': 'BTG',
        'website_slug': 'bitcoin-gold',
        'rank': 24,
        'circulating_supply': 16995386,
        'total_supply': 17095386,
        'max_supply': 21000000,
        'quotes.USD.price': 69.6296,
        'quotes.USD.volume_24h': 20973900,
        'quotes.USD.market_cap': 1183381935,
        'quotes.USD.percent_change_1h': 0.99,
        'quotes.USD.percent_change_24h': 0.54,
        'quotes.USD.percent_change_7d': -8,
        'quotes.BTC.price': 0.0074109363,
        'quotes.BTC.volume_24h': 2232.3298763666,
        'quotes.BTC.market_cap': 125952,
        'quotes.BTC.percent_change_1h': 0.99,
        'quotes.BTC.percent_change_24h': 0.54,
        'quotes.BTC.percent_change_7d': -8,
        'last_updated': 1525959558
    },
    {
        'id': 2087,
        'name': 'KuCoin Shares',
        'symbol': 'KCS',
        'website_slug': 'kucoin-shares',
        'rank': 68,
        'circulating_supply': 75730576,
        'total_supply': 180730576,
        'quotes.USD.price': 4.23405,
        'quotes.USD.volume_24h': 657613,
        'quotes.USD.market_cap': 320647045,
        'quotes.USD.percent_change_1h': 0.29,
        'quotes.USD.percent_change_24h': -0.12,
        'quotes.USD.percent_change_7d': 2.16,
        'quotes.BTC.price': 0.0004506456,
        'quotes.BTC.volume_24h': 69.9921877661,
        'quotes.BTC.market_cap': 34128,
        'quotes.BTC.percent_change_1h': 0.29,
        'quotes.BTC.percent_change_24h': -0.12,
        'quotes.BTC.percent_change_7d': 2.16,
        'last_updated': 1525959557
    },
    {
        'id': 2099,
        'name': 'ICON',
        'symbol': 'ICX',
        'website_slug': 'icon',
        'rank': 20,
        'circulating_supply': 387231348,
        'total_supply': 400228740,
        'quotes.USD.price': 4.23754,
        'quotes.USD.volume_24h': 35044200,
        'quotes.USD.market_cap': 1640908328,
        'quotes.USD.percent_change_1h': 0.28,
        'quotes.USD.percent_change_24h': -1.45,
        'quotes.USD.percent_change_7d': -5.61,
        'quotes.BTC.price': 0.0004510171,
        'quotes.BTC.volume_24h': 3729.8840298355,
        'quotes.BTC.market_cap': 174648,
        'quotes.BTC.percent_change_1h': 0.28,
        'quotes.BTC.percent_change_24h': -1.45,
        'quotes.BTC.percent_change_7d': -5.61,
        'last_updated': 1525959558
    },
    {
        'id': 2137,
        'name': 'Electroneum',
        'symbol': 'ETN',
        'website_slug': 'electroneum',
        'rank': 98,
        'circulating_supply': 6941818980,
        'total_supply': 6941818980,
        'max_supply': 21000000000,
        'quotes.USD.price': 0.0287879,
        'quotes.USD.volume_24h': 1045220,
        'quotes.USD.market_cap': 199840391,
        'quotes.USD.percent_change_1h': 0.19,
        'quotes.USD.percent_change_24h': 2.76,
        'quotes.USD.percent_change_7d': -10.25,
        'quotes.BTC.price': 0.000003064,
        'quotes.BTC.volume_24h': 111.2466366949,
        'quotes.BTC.market_cap': 21270,
        'quotes.BTC.percent_change_1h': 0.19,
        'quotes.BTC.percent_change_24h': 2.76,
        'quotes.BTC.percent_change_7d': -10.25,
        'last_updated': 1525959558
    },
    {
        'id': 2213,
        'name': 'QASH',
        'symbol': 'QASH',
        'website_slug': 'qash',
        'rank': 82,
        'circulating_supply': 350000000,
        'total_supply': 1000000000,
        'quotes.USD.price': 0.735873,
        'quotes.USD.volume_24h': 1915520,
        'quotes.USD.market_cap': 257555550,
        'quotes.USD.percent_change_1h': 0.86,
        'quotes.USD.percent_change_24h': 1.88,
        'quotes.USD.percent_change_7d': -13.36,
        'quotes.BTC.price': 0.0000783217,
        'quotes.BTC.volume_24h': 203.8758897858,
        'quotes.BTC.market_cap': 27413,
        'quotes.BTC.percent_change_1h': 0.86,
        'quotes.BTC.percent_change_24h': 1.88,
        'quotes.BTC.percent_change_7d': -13.36,
        'last_updated': 1525959559
    },
    {
        'id': 2222,
        'name': 'Bitcoin Diamond',
        'symbol': 'BCD',
        'website_slug': 'bitcoin-diamond',
        'rank': 36,
        'circulating_supply': 153551000,
        'total_supply': 156551000,
        'max_supply': 210000000,
        'quotes.USD.price': 4.84513,
        'quotes.USD.volume_24h': 3974060,
        'quotes.USD.market_cap': 743974557,
        'quotes.USD.percent_change_1h': 0.83,
        'quotes.USD.percent_change_24h': 0.03,
        'quotes.USD.percent_change_7d': -13.57,
        'quotes.BTC.price': 0.0005156851,
        'quotes.BTC.volume_24h': 422.9739279997,
        'quotes.BTC.market_cap': 79184,
        'quotes.BTC.percent_change_1h': 0.83,
        'quotes.BTC.percent_change_24h': 0.03,
        'quotes.BTC.percent_change_7d': -13.57,
        'last_updated': 1525959559
    },
    {
        'id': 2243,
        'name': 'Dragonchain',
        'symbol': 'DRGN',
        'website_slug': 'dragonchain',
        'rank': 84,
        'circulating_supply': 238421940,
        'total_supply': 433494437,
        'quotes.USD.price': 0.977103,
        'quotes.USD.volume_24h': 2715220,
        'quotes.USD.market_cap': 232962793,
        'quotes.USD.percent_change_1h': 0.27,
        'quotes.USD.percent_change_24h': 0.43,
        'quotes.USD.percent_change_7d': -13.73,
        'quotes.BTC.price': 0.0001039967,
        'quotes.BTC.volume_24h': 288.9909233337,
        'quotes.BTC.market_cap': 24795,
        'quotes.BTC.percent_change_1h': 0.27,
        'quotes.BTC.percent_change_24h': 0.43,
        'quotes.BTC.percent_change_7d': -13.73,
        'last_updated': 1525959560
    },
    {
        'id': 2246,
        'name': 'CyberMiles',
        'symbol': 'CMT',
        'website_slug': 'cybermiles',
        'rank': 97,
        'circulating_supply': 633879774,
        'total_supply': 1000000000,
        'quotes.USD.price': 0.315328,
        'quotes.USD.volume_24h': 47207900,
        'quotes.USD.market_cap': 199880041,
        'quotes.USD.percent_change_1h': -0.47,
        'quotes.USD.percent_change_24h': 0.24,
        'quotes.USD.percent_change_7d': 9.32,
        'quotes.BTC.price': 0.0000335615,
        'quotes.BTC.volume_24h': 5024.5116821634,
        'quotes.BTC.market_cap': 21274,
        'quotes.BTC.percent_change_1h': -0.47,
        'quotes.BTC.percent_change_24h': 0.24,
        'quotes.BTC.percent_change_7d': 9.32,
        'last_updated': 1525959560
    },
    {
        'id': 2297,
        'name': 'Storm',
        'symbol': 'STORM',
        'website_slug': 'storm',
        'rank': 89,
        'circulating_supply': 4091706234,
        'total_supply': 10000000000,
        'quotes.USD.price': 0.0530606,
        'quotes.USD.volume_24h': 30297000,
        'quotes.USD.market_cap': 217108388,
        'quotes.USD.percent_change_1h': -0.27,
        'quotes.USD.percent_change_24h': -0.48,
        'quotes.USD.percent_change_7d': -19.12,
        'quotes.BTC.price': 0.0000056474,
        'quotes.BTC.volume_24h': 3224.6219474814,
        'quotes.BTC.market_cap': 23108,
        'quotes.BTC.percent_change_1h': -0.27,
        'quotes.BTC.percent_change_24h': -0.48,
        'quotes.BTC.percent_change_7d': -19.12,
        'last_updated': 1525959560
    },
    {
        'id': 2299,
        'name': 'aelf',
        'symbol': 'ELF',
        'website_slug': 'aelf',
        'rank': 58,
        'circulating_supply': 250000000,
        'total_supply': 280000000,
        'max_supply': 1000000000,
        'quotes.USD.price': 1.66084,
        'quotes.USD.volume_24h': 61145500,
        'quotes.USD.market_cap': 415210000,
        'quotes.USD.percent_change_1h': 1.73,
        'quotes.USD.percent_change_24h': 7.43,
        'quotes.USD.percent_change_7d': -11.22,
        'quotes.BTC.price': 0.0001767694,
        'quotes.BTC.volume_24h': 6507.9420830353,
        'quotes.BTC.market_cap': 44192,
        'quotes.BTC.percent_change_1h': 1.73,
        'quotes.BTC.percent_change_24h': 7.43,
        'quotes.BTC.percent_change_7d': -11.22,
        'last_updated': 1525959560
    },
    {
        'id': 2300,
        'name': 'WAX',
        'symbol': 'WAX',
        'website_slug': 'wax',
        'rank': 94,
        'circulating_supply': 624832756,
        'total_supply': 1850000000,
        'quotes.USD.price': 0.324088,
        'quotes.USD.volume_24h': 2527640,
        'quotes.USD.market_cap': 202500798,
        'quotes.USD.percent_change_1h': 0.79,
        'quotes.USD.percent_change_24h': -2.32,
        'quotes.USD.percent_change_7d': -22.8,
        'quotes.BTC.price': 0.0000344939,
        'quotes.BTC.volume_24h': 269.0260890297,
        'quotes.BTC.market_cap': 21553,
        'quotes.BTC.percent_change_1h': 0.79,
        'quotes.BTC.percent_change_24h': -2.32,
        'quotes.BTC.percent_change_7d': -22.8,
        'last_updated': 1525959560
    },
    {
        'id': 2346,
        'name': 'WaykiChain',
        'symbol': 'WICC',
        'website_slug': 'waykichain',
        'rank': 63,
        'circulating_supply': 143400000,
        'total_supply': 210000000,
        'quotes.USD.price': 2.45214,
        'quotes.USD.volume_24h': 20386300,
        'quotes.USD.market_cap': 351636876,
        'quotes.USD.percent_change_1h': 0.23,
        'quotes.USD.percent_change_24h': -1.35,
        'quotes.USD.percent_change_7d': 9.71,
        'quotes.BTC.price': 0.0002609903,
        'quotes.BTC.volume_24h': 2169.7894315589,
        'quotes.BTC.market_cap': 37426,
        'quotes.BTC.percent_change_1h': 0.23,
        'quotes.BTC.percent_change_24h': -1.35,
        'quotes.BTC.percent_change_7d': 9.71,
        'last_updated': 1525959561
    },
    {
        'id': 2349,
        'name': 'Mixin',
        'symbol': 'XIN',
        'website_slug': 'mixin',
        'rank': 52,
        'circulating_supply': 422180,
        'total_supply': 1000000,
        'quotes.USD.price': 1099.45,
        'quotes.USD.volume_24h': 658461,
        'quotes.USD.market_cap': 464165484,
        'quotes.USD.percent_change_1h': 1.74,
        'quotes.USD.percent_change_24h': 5.71,
        'quotes.USD.percent_change_7d': -5.3,
        'quotes.BTC.price': 0.1170185365,
        'quotes.BTC.volume_24h': 70.0824435476,
        'quotes.BTC.market_cap': 49403,
        'quotes.BTC.percent_change_1h': 1.74,
        'quotes.BTC.percent_change_24h': 5.71,
        'quotes.BTC.percent_change_7d': -5.3,
        'last_updated': 1525959561
    },
    {
        'id': 2405,
        'name': 'IOStoken',
        'symbol': 'IOST',
        'website_slug': 'iostoken',
        'rank': 42,
        'circulating_supply': 8400000000,
        'total_supply': 21000000000,
        'quotes.USD.price': 0.0764422,
        'quotes.USD.volume_24h': 155818000,
        'quotes.USD.market_cap': 642114480,
        'quotes.USD.percent_change_1h': -0.29,
        'quotes.USD.percent_change_24h': 11.27,
        'quotes.USD.percent_change_7d': 17.35,
        'quotes.BTC.price': 0.000008136,
        'quotes.BTC.volume_24h': 16584.2869793263,
        'quotes.BTC.market_cap': 68343,
        'quotes.BTC.percent_change_1h': -0.29,
        'quotes.BTC.percent_change_24h': 11.27,
        'quotes.BTC.percent_change_7d': 17.35,
        'last_updated': 1525959562
    },
    {
        'id': 2469,
        'name': 'Zilliqa',
        'symbol': 'ZIL',
        'website_slug': 'zilliqa',
        'rank': 22,
        'circulating_supply': 7286961952,
        'total_supply': 12600000000,
        'quotes.USD.price': 0.193907,
        'quotes.USD.volume_24h': 713873000,
        'quotes.USD.market_cap': 1412992931,
        'quotes.USD.percent_change_1h': -1.86,
        'quotes.USD.percent_change_24h': 16.68,
        'quotes.USD.percent_change_7d': 56.2,
        'quotes.BTC.price': 0.0000206382,
        'quotes.BTC.volume_24h': 75980.1479854228,
        'quotes.BTC.market_cap': 150390,
        'quotes.BTC.percent_change_1h': -1.86,
        'quotes.BTC.percent_change_24h': 16.68,
        'quotes.BTC.percent_change_7d': 56.2,
        'last_updated': 1525959563
    },
    {
        'id': 2473,
        'name': 'All Sports',
        'symbol': 'SOC',
        'website_slug': 'all-sports',
        'rank': 100,
        'circulating_supply': 744251871,
        'total_supply': 1500000000,
        'quotes.USD.price': 0.265973,
        'quotes.USD.volume_24h': 28559100,
        'quotes.USD.market_cap': 197950903,
        'quotes.USD.percent_change_1h': -0.76,
        'quotes.USD.percent_change_24h': -5.61,
        'quotes.USD.percent_change_7d': 85.74,
        'quotes.BTC.price': 0.0000283085,
        'quotes.BTC.volume_24h': 3039.650812302,
        'quotes.BTC.market_cap': 21069,
        'quotes.BTC.percent_change_1h': -0.76,
        'quotes.BTC.percent_change_24h': -5.61,
        'quotes.BTC.percent_change_7d': 85.74,
        'last_updated': 1525959562
    },
    {
        'id': 2474,
        'name': 'Matrix AI Network',
        'symbol': 'MAN',
        'website_slug': 'matrix-ai-network',
        'rank': 87,
        'circulating_supply': 150000000,
        'total_supply': 250000000,
        'max_supply': 1000000000,
        'quotes.USD.price': 1.47997,
        'quotes.USD.volume_24h': 7684040,
        'quotes.USD.market_cap': 221995500,
        'quotes.USD.percent_change_1h': -0.07,
        'quotes.USD.percent_change_24h': -1.92,
        'quotes.USD.percent_change_7d': 40.26,
        'quotes.BTC.price': 0.0001575187,
        'quotes.BTC.volume_24h': 817.8408432955,
        'quotes.BTC.market_cap': 23628,
        'quotes.BTC.percent_change_1h': -0.07,
        'quotes.BTC.percent_change_24h': -1.92,
        'quotes.BTC.percent_change_7d': 40.26,
        'last_updated': 1525959562
    },
    {
        'id': 2492,
        'name': 'Elastos',
        'symbol': 'ELA',
        'website_slug': 'elastos',
        'rank': 71,
        'circulating_supply': 5146316,
        'total_supply': 33501771,
        'quotes.USD.price': 57.8153,
        'quotes.USD.volume_24h': 21015300,
        'quotes.USD.market_cap': 297535805,
        'quotes.USD.percent_change_1h': -0.05,
        'quotes.USD.percent_change_24h': 5.23,
        'quotes.USD.percent_change_7d': 20.66,
        'quotes.BTC.price': 0.0061534966,
        'quotes.BTC.volume_24h': 2236.736231736,
        'quotes.BTC.market_cap': 31668,
        'quotes.BTC.percent_change_1h': -0.05,
        'quotes.BTC.percent_change_24h': 5.23,
        'quotes.BTC.percent_change_7d': 20.66,
        'last_updated': 1525959563
    },
    {
        'id': 2496,
        'name': 'Polymath',
        'symbol': 'POLY',
        'website_slug': 'polymath-network',
        'rank': 86,
        'circulating_supply': 239999750,
        'total_supply': 1000000000,
        'quotes.USD.price': 0.955408,
        'quotes.USD.volume_24h': 29235000,
        'quotes.USD.market_cap': 229297681,
        'quotes.USD.percent_change_1h': 0.89,
        'quotes.USD.percent_change_24h': 26.34,
        'quotes.USD.percent_change_7d': 23.65,
        'quotes.BTC.price': 0.0001016876,
        'quotes.BTC.volume_24h': 3111.5893532237,
        'quotes.BTC.market_cap': 24405,
        'quotes.BTC.percent_change_1h': 0.89,
        'quotes.BTC.percent_change_24h': 26.34,
        'quotes.BTC.percent_change_7d': 23.65,
        'last_updated': 1525959563
    },
    {
        'id': 2530,
        'name': 'Fusion',
        'symbol': 'FSN',
        'website_slug': 'fusion',
        'rank': 83,
        'circulating_supply': 29684331,
        'total_supply': 57344000,
        'quotes.USD.price': 8.20882,
        'quotes.USD.volume_24h': 6620640,
        'quotes.USD.market_cap': 243673332,
        'quotes.USD.percent_change_1h': 0.1,
        'quotes.USD.percent_change_24h': 6.08,
        'quotes.USD.percent_change_7d': -7.62,
        'quotes.BTC.price': 0.0008736951,
        'quotes.BTC.volume_24h': 704.6592418514,
        'quotes.BTC.market_cap': 25935,
        'quotes.BTC.percent_change_1h': 0.1,
        'quotes.BTC.percent_change_24h': 6.08,
        'quotes.BTC.percent_change_7d': -7.62,
        'last_updated': 1525959563
    },
    {
        'id': 2566,
        'name': 'Ontology',
        'symbol': 'ONT',
        'website_slug': 'ontology',
        'rank': 29,
        'circulating_supply': 113627171,
        'total_supply': 1000000000,
        'quotes.USD.price': 8.94755,
        'quotes.USD.volume_24h': 77201200,
        'quotes.USD.market_cap': 1016684793,
        'quotes.USD.percent_change_1h': 0.16,
        'quotes.USD.percent_change_24h': 1.78,
        'quotes.USD.percent_change_7d': -11.3,
        'quotes.BTC.price': 0.0009523209,
        'quotes.BTC.volume_24h': 8216.8097135656,
        'quotes.BTC.market_cap': 108210,
        'quotes.BTC.percent_change_1h': 0.16,
        'quotes.BTC.percent_change_24h': 1.78,
        'quotes.BTC.percent_change_7d': -11.3,
        'last_updated': 1525959564
    },
    {
        'id': 2575,
        'name': 'Bitcoin Private',
        'symbol': 'BTCP',
        'website_slug': 'bitcoin-private',
        'rank': 44,
        'circulating_supply': 20429215,
        'total_supply': 20429215,
        'max_supply': 21000000,
        'quotes.USD.price': 29.7408,
        'quotes.USD.volume_24h': 1560230,
        'quotes.USD.market_cap': 607581205,
        'quotes.USD.percent_change_1h': -0.26,
        'quotes.USD.percent_change_24h': 8.61,
        'quotes.USD.percent_change_7d': -24.86,
        'quotes.BTC.price': 0.0031654235,
        'quotes.BTC.volume_24h': 166.0610588876,
        'quotes.BTC.market_cap': 64667,
        'quotes.BTC.percent_change_1h': -0.26,
        'quotes.BTC.percent_change_24h': 8.61,
        'quotes.BTC.percent_change_7d': -24.86,
        'last_updated': 1525959564
    },
    {
        'id': 2585,
        'name': 'Centrality',
        'symbol': 'CENNZ',
        'website_slug': 'centrality',
        'rank': 79,
        'circulating_supply': 707187700,
        'total_supply': 1200000000,
        'quotes.USD.price': 0.373375,
        'quotes.USD.volume_24h': 256000,
        'quotes.USD.market_cap': 264046208,
        'quotes.USD.percent_change_1h': 0.52,
        'quotes.USD.percent_change_24h': 1.83,
        'quotes.USD.percent_change_7d': -11.63,
        'quotes.BTC.price': 0.0000397397,
        'quotes.BTC.volume_24h': 27.247028371,
        'quotes.BTC.market_cap': 28103,
        'quotes.BTC.percent_change_1h': 0.52,
        'quotes.BTC.percent_change_24h': 1.83,
        'quotes.BTC.percent_change_7d': -11.63,
        'last_updated': 1525959564
    },
    {
        'id': 2588,
        'name': 'Loom Network',
        'symbol': 'LOOM',
        'website_slug': 'loom-network',
        'rank': 65,
        'circulating_supply': 577566508,
        'total_supply': 1000000000,
        'quotes.USD.price': 0.573038,
        'quotes.USD.volume_24h': 14705200,
        'quotes.USD.market_cap': 330967556,
        'quotes.USD.percent_change_1h': 0.09,
        'quotes.USD.percent_change_24h': -5.04,
        'quotes.USD.percent_change_7d': 3.13,
        'quotes.BTC.price': 0.0000609906,
        'quotes.BTC.volume_24h': 1565.128912503,
        'quotes.BTC.market_cap': 35226,
        'quotes.BTC.percent_change_1h': 0.09,
        'quotes.BTC.percent_change_24h': -5.04,
        'quotes.BTC.percent_change_7d': 3.13,
        'last_updated': 1525959564
    },
    {
        'id': 2606,
        'name': 'Wanchain',
        'symbol': 'WAN',
        'website_slug': 'wanchain',
        'rank': 33,
        'circulating_supply': 106152493,
        'total_supply': 210000000,
        'quotes.USD.price': 7.98818,
        'quotes.USD.volume_24h': 73962200,
        'quotes.USD.market_cap': 847965219,
        'quotes.USD.percent_change_1h': 0.75,
        'quotes.USD.percent_change_24h': 1.29,
        'quotes.USD.percent_change_7d': -14.14,
        'quotes.BTC.price': 0.0008502116,
        'quotes.BTC.volume_24h': 7872.0709444501,
        'quotes.BTC.market_cap': 90252,
        'quotes.BTC.percent_change_1h': 0.75,
        'quotes.BTC.percent_change_24h': 1.29,
        'quotes.BTC.percent_change_7d': -14.14,
        'last_updated': 1525959564
    },
    {
        'id': 2608,
        'name': 'Mithril',
        'symbol': 'MITH',
        'website_slug': 'mithril',
        'rank': 60,
        'circulating_supply': 306417022,
        'total_supply': 1000000000,
        'quotes.USD.price': 1.24726,
        'quotes.USD.volume_24h': 66753600,
        'quotes.USD.market_cap': 382181695,
        'quotes.USD.percent_change_1h': 4.49,
        'quotes.USD.percent_change_24h': 9.54,
        'quotes.USD.percent_change_7d': -2.56,
        'quotes.BTC.price': 0.0001327505,
        'quotes.BTC.volume_24h': 7104.8329416573,
        'quotes.BTC.market_cap': 40677,
        'quotes.BTC.percent_change_1h': 4.49,
        'quotes.BTC.percent_change_24h': 9.54,
        'quotes.BTC.percent_change_7d': -2.56,
        'last_updated': 1525959564
    },
    {
        'id': 2638,
        'name': 'Cortex',
        'symbol': 'CTXC',
        'website_slug': 'cortex',
        'rank': 75,
        'circulating_supply': 149792458,
        'total_supply': 299792458,
        'quotes.USD.price': 1.81807,
        'quotes.USD.volume_24h': 93114600,
        'quotes.USD.market_cap': 272333174,
        'quotes.USD.percent_change_1h': 0.25,
        'quotes.USD.percent_change_24h': 0.25,
        'quotes.USD.percent_change_7d': -12.97,
        'quotes.BTC.price': 0.0001935039,
        'quotes.BTC.volume_24h': 9910.531827935,
        'quotes.BTC.market_cap': 28985,
        'quotes.BTC.percent_change_1h': 0.25,
        'quotes.BTC.percent_change_24h': 0.25,
        'quotes.BTC.percent_change_7d': -12.97,
        'last_updated': 1525959565
    },
    {
        'id': 2682,
        'name': 'Holo',
        'symbol': 'HOT',
        'website_slug': 'holo',
        'rank': 88,
        'circulating_supply': 133214575156,
        'total_supply': 177619433541,
        'quotes.USD.price': 0.00164132,
        'quotes.USD.volume_24h': 4162980,
        'quotes.USD.market_cap': 218647746,
        'quotes.USD.percent_change_1h': 0.73,
        'quotes.USD.percent_change_24h': 0.74,
        'quotes.USD.percent_change_7d': 37.48,
        'quotes.BTC.price': 1.747e-7,
        'quotes.BTC.volume_24h': 443.0813834679,
        'quotes.BTC.market_cap': 23271,
        'quotes.BTC.percent_change_1h': 0.73,
        'quotes.BTC.percent_change_24h': 0.74,
        'quotes.BTC.percent_change_7d': 37.48,
        'last_updated': 1525959565
    },
    {
        'id': 2694,
        'name': 'Nexo',
        'symbol': 'NEXO',
        'website_slug': 'nexo',
        'rank': 90,
        'circulating_supply': 560000010,
        'total_supply': 1000000000,
        'quotes.USD.price': 0.378016,
        'quotes.USD.volume_24h': 6117620,
        'quotes.USD.market_cap': 211688964,
        'quotes.USD.percent_change_1h': 1.4,
        'quotes.USD.percent_change_24h': -2.55,
        'quotes.USD.percent_change_7d': 61,
        'quotes.BTC.price': 0.0000402336,
        'quotes.BTC.volume_24h': 651.1209597766,
        'quotes.BTC.market_cap': 22531,
        'quotes.BTC.percent_change_1h': 1.4,
        'quotes.BTC.percent_change_24h': -2.55,
        'quotes.BTC.percent_change_7d': 61,
        'last_updated': 1525959565
    }
];


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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Dev\crypto-portfolio-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map