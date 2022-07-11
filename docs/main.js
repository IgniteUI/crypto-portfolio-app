"use strict";
(self["webpackChunkcryptoapp"] = self["webpackChunkcryptoapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": function() { return /* binding */ routes; },
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statistics/statistics.component */ 3269);
/* harmony import */ var _block_grid_block_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-grid/block-grid.component */ 121);
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.guard */ 8063);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email/email.component */ 3753);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ 570);
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio/portfolio.component */ 5574);
/* harmony import */ var _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./block-list/block-list.component */ 7488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);














var routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'portfolio',
  component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__.PortfolioComponent,
  data: {
    text: 'My portfolio',
    iconName: 'account_box'
  },
  canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard]
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
  data: {
    text: 'Top 100 Crypto`s',
    iconName: 'call_made'
  }
}, {
  path: 'block-grid',
  component: _block_grid_block_grid_component__WEBPACK_IMPORTED_MODULE_4__.BlockGridComponent,
  data: {
    text: 'Grid view',
    iconName: 'grid_on',
    subItem: true
  }
}, {
  path: 'block-list',
  component: _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_10__.BlockListComponent,
  data: {
    text: 'List view',
    iconName: 'list_alt',
    subItem: true
  }
}, {
  path: 'statistics',
  component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_3__.StatisticsComponent,
  data: {
    text: 'Volatility',
    iconName: 'insert_chart_outlined',
    cryptoName: 'ETH',
    daysCount: 100
  }
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent
}, {
  path: 'email',
  component: _email_email_component__WEBPACK_IMPORTED_MODULE_7__.EmailComponent
}, {
  path: 'signup',
  component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__.SignupComponent
}];
var AppRoutingModule = /*#__PURE__*/(0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppRoutingModule() {
  (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppRoutingModule);
});

AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};

AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes, {
    useHash: true,
    relativeLinkResolution: 'legacy'
  })], _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 5106);
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 9606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ 4402);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);














function AppComponent_ng_template_3_span_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\xA0\xA0\xA0\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AppComponent_ng_template_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_ng_template_3_span_2_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "igx-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var route_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("routerLink", route_r8.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", route_r8.subItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](route_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](route_r8.name);
  }
}

function AppComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AppComponent_ng_template_3_span_2_Template, 6, 4, "span", 13);
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isHeader", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.topNavLinks);
  }
}

function AppComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_7_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r10.changeTheme();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AppComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_8_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r12.changeTheme(true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function AppComponent_div_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r15.name !== null ? "Hey " + ctx_r15.name : "");
  }
}

function AppComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_10_span_1_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_10_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r16.logout();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.innerWidth > 650);
  }
}

function AppComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_ng_template_12_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r18.login();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

var AppComponent = /*#__PURE__*/function () {
  function AppComponent(router, afAuth, authService) {
    var _this = this;

    (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppComponent);

    this.router = router;
    this.afAuth = afAuth;
    this.authService = authService;
    this.darkTheme = false;
    this.topNavLinks = [];
    this.isIE = /trident\//i.test(window.navigator.userAgent);

    var _iterator = (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_app_routing_module__WEBPACK_IMPORTED_MODULE_3__.routes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var route = _step.value;

        if (route.path && route.data && route.path.indexOf('*') === -1) {
          this.topNavLinks.push({
            name: route.data.text,
            path: '/' + route.path,
            icon: route.data.iconName,
            subItem: route.data.subItem
          });
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this.afAuth.authState.subscribe(function (auth) {
      if (auth) {
        if (auth.displayName) {
          _this.name = auth.displayName;
        } else {
          _this.name = auth.email.split('@')[0];
        }
      }
    });
  }

  (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AppComponent, [{
    key: "onResize",
    value: function onResize(event) {
      this.innerWidth = window.innerWidth;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      document.body.classList.add('light-theme');
      document.body.style.background = '#eee';
      this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(function (x) {
        return x instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationStart;
      })).subscribe(function (event) {
        if (event.url !== '/' && !_this2.navdrawer.pin) {
          // Close drawer when selecting a view on mobile (unpinned)
          _this2.navdrawer.close();
        }
      });
      this.innerWidth = window.innerWidth;
    }
  }, {
    key: "changeTheme",
    value: function changeTheme(dark) {
      if (dark) {
        this.darkTheme = true;
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        document.body.style.background = '#414141';
      } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        document.body.style.background = '#eee';
        this.darkTheme = false;
      }
    }
  }, {
    key: "logout",
    value: function logout() {
      this.authService.signOut();
    }
  }, {
    key: "login",
    value: function login() {
      this.router.navigate(['/login']);
    }
  }]);

  return AppComponent;
}();

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceService));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  viewQuery: function AppComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_9__.IgxNavigationDrawerComponent, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_9__.IgxLayoutDirective, 7, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_9__.IgxLayoutDirective);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.navdrawer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.layout = _t.first);
    }
  },
  hostBindings: function AppComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    }
  },
  decls: 16,
  vars: 8,
  consts: [["igxLayout", "", 1, "main"], ["id", "project-menu", "width", "280px", "pinThreshold", "5000", 3, "enableGestures", "pin"], ["nav", ""], ["igxDrawer", ""], ["igxFlex", ""], ["title", "Crypto Blockfolio App", "actionButtonIcon", "menu", "igxFlex", "", 3, "action"], [1, "theme-chooser"], ["class", "theme-chooser__item--light", "title", "Light Theme", 3, "click", 4, "ngIf"], ["class", "theme-chooser__item--dark", "title", "Dark Theme", 3, "click", 4, "ngIf"], ["class", "account-container", 4, "ngIf", "ngIfElse"], ["showLogin", ""], ["igxLayout", "", "igxLayoutJustify", "center", 1, "content"], ["igxDrawerItem", "", 3, "isHeader"], ["igxDrawerItem", "", "igxRipple", "", "routerLinkActive", "igx-nav-drawer__item--active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["igxDrawerItem", "", "igxRipple", "", "routerLinkActive", "igx-nav-drawer__item--active", 3, "routerLink"], [4, "ngIf"], ["fontSet", "material"], ["title", "Light Theme", 1, "theme-chooser__item--light", 3, "click"], ["title", "Dark Theme", 1, "theme-chooser__item--dark", 3, "click"], [1, "account-container"], ["igxButton", "raised", "igxRipple", "", 3, "click"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "igx-nav-drawer", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_ng_template_3_Template, 3, 2, "ng-template", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "igx-navbar", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("action", function AppComponent_Template_igx_navbar_action_5_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);

        return _r0.toggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AppComponent_div_7_Template, 1, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AppComponent_div_8_Template, 1, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AppComponent_div_10_Template, 4, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AppComponent_ng_template_12_Template, 3, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("enableGestures", true)("pin", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.darkTheme);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.darkTheme);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 6, ctx.afAuth.authState))("ngIfElse", _r5);
    }
  },
  directives: [_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_9__.IgxLayoutDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_9__.IgxNavigationDrawerComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_9__.IgxNavDrawerTemplateDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_9__.IgxNavDrawerItemDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_9__.IgxRippleDirective, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_9__.IgxIconComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_9__.IgxFlexDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_9__.IgxNavbarComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_9__.IgxButtonDirective, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
  styles: [".theme-chooser {\n  display: flex;\n}\n.theme-chooser__item--light {\n  position: relative;\n  width: 34px;\n  height: 34px;\n  border-radius: 17px;\n  overflow: hidden;\n  transform: rotate(45deg);\n  border: 2px solid white;\n  cursor: pointer;\n  transition: box-shadow 0.25s ease-out;\n}\n.theme-chooser__item--light::before, .theme-chooser__item--light::after {\n  position: absolute;\n  content: \"\";\n  width: 50%;\n  top: 0;\n  bottom: 0;\n}\n.theme-chooser__item--light::before {\n  left: 0;\n  background: #8049ff;\n}\n.theme-chooser__item--light::after {\n  right: 0;\n  background: #E29C45;\n}\n.theme-chooser__item--light:hover {\n  box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.24);\n}\n.theme-chooser__item--dark {\n  position: relative;\n  width: 34px;\n  height: 34px;\n  border-radius: 17px;\n  overflow: hidden;\n  transform: rotate(45deg);\n  border: 2px solid white;\n  cursor: pointer;\n  transition: box-shadow 0.25s ease-out;\n}\n.theme-chooser__item--dark::before, .theme-chooser__item--dark::after {\n  position: absolute;\n  content: \"\";\n  width: 50%;\n  top: 0;\n  bottom: 0;\n}\n.theme-chooser__item--dark::before {\n  left: 0;\n  background: #000;\n}\n.theme-chooser__item--dark::after {\n  right: 0;\n  background: #72da67;\n}\n.theme-chooser__item--dark:hover {\n  box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.24);\n}\n.main {\n  width: 100%;\n  height: 100%;\n}\n.content {\n  flex: 1 1 100%;\n  height: 85%;\n}\n.temp {\n  vertical-align: top;\n}\n.igx-nav-drawer__overlay {\n  position: fixed;\n}\nigx-navbar {\n  height: 56px;\n  display: block;\n}\n.igx-navbar {\n  position: fixed;\n}\n.account-container span {\n  margin-right: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC10aGVtZXNcXGNob29zZXIuc2NzcyIsImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ0U7RUFDRSxhQUFBO0FDckNKO0FEdUNJO0VBckNBLGtCQUFBO0VBQ0EsV0FMVztFQU1YLFlBTlc7RUFPWCxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQ0NKO0FEQ0k7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QUNBTjtBREdJO0VBQ0UsT0FBQTtFQUNBLG1CQWlCNEI7QUNsQmxDO0FESUk7RUFDRSxRQUFBO0VBQ0EsbUJBWXFDO0FDZDNDO0FES0k7RUFDRSwyQ0FBQTtBQ0hOO0FEY0k7RUF6Q0Esa0JBQUE7RUFDQSxXQUxXO0VBTVgsWUFOVztFQU9YLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0FDOEJKO0FENUJJO0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FDNkJOO0FEMUJJO0VBQ0UsT0FBQTtFQUNBLGdCQXFCNEI7QUNPbEM7QUR6Qkk7RUFDRSxRQUFBO0VBQ0EsbUJBZ0JrQztBQ1d4QztBRHhCSTtFQUNFLDJDQUFBO0FDMEJOO0FBM0RBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUE4REo7QUEzREE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQThESjtBQTNEQTtFQUNJLG1CQUFBO0FBOERKO0FBM0RBO0VBQ0ksZUFBQTtBQThESjtBQTNEQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBOERKO0FBM0RBO0VBQ0ksZUFBQTtBQThESjtBQTNEQTtFQUNJLGtCQUFBO0FBOERKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjaG9vc2VyLXNpemU6IDM0cHg7XHJcblxyXG5AbWl4aW4gdGhlbWUtY2hvb3Nlci1pdGVtKCRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCkge1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAkY2hvb3Nlci1zaXplO1xyXG4gICAgaGVpZ2h0OiAkY2hvb3Nlci1zaXplO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGNob29zZXItc2l6ZSAqIDAuNTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjI1cyBlYXNlLW91dDtcclxuXHJcbiAgICAmOjpiZWZvcmUsXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRmb3JlZ3JvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMnB4IDNweCByZ2JhKDAsIDAsIDAsIC4yNCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGhlbWUtY2hvb3NlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICZfX2l0ZW0tLWxpZ2h0IHtcclxuICAgICAgQGluY2x1ZGUgdGhlbWUtY2hvb3Nlci1pdGVtKCM4MDQ5ZmYsICNFMjlDNDUpO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2l0ZW0tLWRhcmsge1xyXG4gICAgICBAaW5jbHVkZSB0aGVtZS1jaG9vc2VyLWl0ZW0oIzAwMCwgIzcyZGE2Nyk7XHJcbiAgICB9XHJcbiAgfVxyXG4iLCIudGhlbWUtY2hvb3NlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udGhlbWUtY2hvb3Nlcl9faXRlbS0tbGlnaHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyBlYXNlLW91dDtcbn1cbi50aGVtZS1jaG9vc2VyX19pdGVtLS1saWdodDo6YmVmb3JlLCAudGhlbWUtY2hvb3Nlcl9faXRlbS0tbGlnaHQ6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNTAlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi50aGVtZS1jaG9vc2VyX19pdGVtLS1saWdodDo6YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogIzgwNDlmZjtcbn1cbi50aGVtZS1jaG9vc2VyX19pdGVtLS1saWdodDo6YWZ0ZXIge1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogI0UyOUM0NTtcbn1cbi50aGVtZS1jaG9vc2VyX19pdGVtLS1saWdodDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG4udGhlbWUtY2hvb3Nlcl9faXRlbS0tZGFyayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzIGVhc2Utb3V0O1xufVxuLnRoZW1lLWNob29zZXJfX2l0ZW0tLWRhcms6OmJlZm9yZSwgLnRoZW1lLWNob29zZXJfX2l0ZW0tLWRhcms6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogNTAlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi50aGVtZS1jaG9vc2VyX19pdGVtLS1kYXJrOjpiZWZvcmUge1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuLnRoZW1lLWNob29zZXJfX2l0ZW0tLWRhcms6OmFmdGVyIHtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICM3MmRhNjc7XG59XG4udGhlbWUtY2hvb3Nlcl9faXRlbS0tZGFyazpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG5cbi5tYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbnRlbnQge1xuICBmbGV4OiAxIDEgMTAwJTtcbiAgaGVpZ2h0OiA4NSU7XG59XG5cbi50ZW1wIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmlneC1uYXYtZHJhd2VyX19vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG5pZ3gtbmF2YmFyIHtcbiAgaGVpZ2h0OiA1NnB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmlneC1uYXZiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5hY2NvdW50LWNvbnRhaW5lciBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xufSJdfQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firebaseConfig": function() { return /* binding */ firebaseConfig; },
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 9606);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./statistics/statistics.component */ 3269);
/* harmony import */ var igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! igniteui-angular-charts */ 4873);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/data.service */ 2468);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _block_grid_block_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block-grid/block-grid.component */ 121);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire */ 7151);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/firestore */ 6436);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire/storage */ 3194);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/auth */ 4402);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/fire/database */ 7334);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./email/email.component */ 3753);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ 570);
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./portfolio/portfolio.component */ 5574);
/* harmony import */ var _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./block-list/block-list.component */ 7488);
/* harmony import */ var _services_block_item_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/block-item.service */ 2695);
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.component */ 4394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);


// IgxExcelExporterService no longer need to be manually provided and can be safely removed.


























var firebaseConfig = {
  apiKey: 'AIzaSyASqXec1QsPpOZ6Pbgk5YuYOnmiewOOvhc',
  authDomain: 'crypto-portfolio-tracker.firebaseapp.com',
  databaseURL: 'https://crypto-portfolio-tracker.firebaseio.com',
  projectId: 'crypto-portfolio-tracker',
  storageBucket: 'crypto-portfolio-tracker.appspot.com',
  messagingSenderId: '1078645280256'
};
var AppModule = /*#__PURE__*/(0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService, _services_block_item_service__WEBPACK_IMPORTED_MODULE_13__.ItemService, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxExcelExporterService],
  imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxNavigationDrawerModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxNavbarModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxLayoutModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxRippleModule, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_20__.IgxFinancialChartModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxAvatarModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxButtonModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxIconModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxCardModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxInputGroupModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxListModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxFilterModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxTabsModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxSnackbarModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxDialogModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxToggleModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxGridModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxComboModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxActionStripModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxFocusModule, _angular_fire__WEBPACK_IMPORTED_MODULE_22__.AngularFireModule.initializeApp(firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__.AngularFirestoreModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_24__.AngularFireAuthModule, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_25__.AngularFireStorageModule, _angular_fire_database__WEBPACK_IMPORTED_MODULE_26__.AngularFireDatabaseModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxDividerModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxExpansionPanelModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxTooltipModule, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_20__.IgxPieChartModule, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_20__.IgxLegendModule, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_20__.IgxItemLegendModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_5__.StatisticsComponent, _block_grid_block_grid_component__WEBPACK_IMPORTED_MODULE_7__.BlockGridComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_8__.LoginComponent, _email_email_component__WEBPACK_IMPORTED_MODULE_9__.EmailComponent, _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__.SignupComponent, _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__.PortfolioComponent, _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_12__.BlockListComponent, _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_14__.LoadingSpinnerComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxNavigationDrawerModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxNavbarModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxLayoutModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxRippleModule, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_20__.IgxFinancialChartModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxAvatarModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxButtonModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxIconModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxCardModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxInputGroupModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxListModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxFilterModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxTabsModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxSnackbarModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxDialogModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxToggleModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxGridModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxComboModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxActionStripModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxFocusModule, _angular_fire__WEBPACK_IMPORTED_MODULE_22__.AngularFireModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__.AngularFirestoreModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_24__.AngularFireAuthModule, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_25__.AngularFireStorageModule, _angular_fire_database__WEBPACK_IMPORTED_MODULE_26__.AngularFireDatabaseModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxDividerModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxExpansionPanelModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_16__.IgxTooltipModule, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_20__.IgxPieChartModule, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_20__.IgxLegendModule, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_20__.IgxItemLegendModule]
  });
})();

/***/ }),

/***/ 121:
/*!****************************************************!*\
  !*** ./src/app/block-grid/block-grid.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockGridComponent": function() { return /* binding */ BlockGridComponent; }
/* harmony export */ });
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 9606);
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils */ 1960);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);











var _c0 = ["grid1"];

function BlockGridComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlockGridComponent_div_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r21.refreshGrid();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "igx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlockGridComponent_div_2_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);
      var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r23.exportGrid();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("igxTooltipTarget", _r3);
  }
}

function BlockGridComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlockGridComponent_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25);
      var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r24.refreshGrid();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "igx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function BlockGridComponent_ng_template_10_Template(rf, ctx) {}

function BlockGridComponent_ng_template_11_Template(rf, ctx) {}

function BlockGridComponent_ng_template_12_Template(rf, ctx) {}

function BlockGridComponent_ng_template_13_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "igx-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "group_work");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "igx-badge", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var groupRow_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", groupRow_r26.value ? "Positive Daily Scale" : "Negative Daily Scale", ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", groupRow_r26.records ? groupRow_r26.records.length : 0);
  }
}

function BlockGridComponent_ng_template_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "igx-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "group_work");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "igx-badge", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var groupRow_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", groupRow_r26.expression ? ctx_r29.getHeader(groupRow_r26.expression.fieldName) : "", ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](groupRow_r26.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", groupRow_r26.records ? groupRow_r26.records.length : 0);
  }
}

function BlockGridComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BlockGridComponent_ng_template_13_div_0_Template, 7, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, BlockGridComponent_ng_template_13_ng_template_1_Template, 9, 3, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
  }

  if (rf & 2) {
    var groupRow_r26 = ctx.$implicit;

    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", groupRow_r26.expression.fieldName === "dailyScale")("ngIfElse", _r28);
  }
}

function BlockGridComponent_ng_template_15_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var cell_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().cell;
    var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r34.getCoinImage(cell_r32.row.data["imageUrl"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}

function BlockGridComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, BlockGridComponent_ng_template_15_span_0_Template, 2, 1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r33 = ctx.$implicit;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.hideColumn === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r33);
  }
}

function BlockGridComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BlockGridComponent_ng_template_17_Template_span_click_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38);
      var cell_r36 = restoredCtx.cell;
      var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r37.openChart($event, cell_r36.row.data.name);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "igx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "insert_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function BlockGridComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " (24 h) % ");
  }
}

function BlockGridComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("percent-style-", item_r40 >= 0 ? "up" : "down", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 4, item_r40, "0.0-2"), " %");
  }
}

function BlockGridComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " Price ");
  }
}

function BlockGridComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" $ ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, item_r45, "0.0-2"), " ");
  }
}

function BlockGridComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " Total supply ");
  }
}

function BlockGridComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, item_r49, "3.0-2"), "");
  }
}

function BlockGridComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var value_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", value_r52, " ");
  }
}

function BlockGridComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var value_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", value_r53, " ");
  }
}

var BlockGridComponent = /*#__PURE__*/function () {
  function BlockGridComponent(dataService, excelExportService, router) {
    (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BlockGridComponent);

    this.dataService = dataService;
    this.excelExportService = excelExportService;
    this.router = router;

    this.positive24h = function (rowData) {
      return rowData['changePct24Hour'] >= 0;
    };

    this.negative24h = function (rowData) {
      return rowData['changePct24Hour'] < 0;
    }; // tslint:disable-next-line:member-ordering


    this.changes24h = {
      positive: this.positive24h,
      negative: this.negative24h
    };
  }

  (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BlockGridComponent, [{
    key: "onResize",
    value: function onResize(event) {
      this.windowWidth = event.target.innerWidth;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.windowWidth = window.innerWidth;
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this = this;

      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.interval)(15000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(0)).subscribe(function () {
        _this.dataService.getData().subscribe(function (res) {
          _this.remoteData = res;
        });
      });
    } // tslint:disable-next-line:use-life-cycle-interface

  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      this.grid1.onGroupingDone.subscribe(function (args) {
        if (args.groupedColumns instanceof Array && args.groupedColumns.length !== 0) {
          var colNotForGroup = args.groupedColumns.find(function (col) {
            return col.field === 'changePct24Hour';
          });

          if (colNotForGroup) {
            _this2.grid1.clearGrouping('changePct24Hour');

            if (args.groupedColumns.find(function (col) {
              return col.field === 'dailyScale';
            }) === undefined) {
              _this2.grid1.groupBy({
                fieldName: 'dailyScale',
                dir: _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.SortingDirection.Asc
              });
            }
          }
        } else if (args.groupedColumns instanceof _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxColumnComponent) {
          if (args.groupedColumns.field === 'changePct24Hour') {
            _this2.grid1.clearGrouping('changePct24Hour');

            _this2.grid1.groupBy({
              fieldName: 'dailyScale',
              dir: _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.SortingDirection.Asc
            });
          }
        }
      });
      this.grid1.groupBy({
        fieldName: 'dailyScale',
        dir: _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.SortingDirection.Asc
      });
      this.refreshGrid();
    }
  }, {
    key: "hideColumn",
    get: function get() {
      return this.windowWidth && this.windowWidth < 800;
    }
  }, {
    key: "setWidth",
    value: function setWidth(withHideColumns, withoutHideColumns) {
      return this.hideColumn ? withHideColumns : withoutHideColumns;
    }
  }, {
    key: "getCoinImage",
    value: function getCoinImage(imageUrl) {
      return (0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.transformCoinImgUrl)(imageUrl);
    }
  }, {
    key: "exportGrid",
    value: function exportGrid() {
      var options = new _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxExcelExporterOptions('ExportFileFromGrid');
      options.ignoreColumnsVisibility = true;
      this.excelExportService.export(this.grid1, options);
    }
  }, {
    key: "refreshGrid",
    value: function refreshGrid() {
      // this.grid1.reflow();
      this.loadData();
    }
  }, {
    key: "getHeader",
    value: function getHeader(fieldName) {
      return this.grid1.getColumnByName(fieldName).header;
    }
  }, {
    key: "openChart",
    value: function openChart(evt, symbol) {
      this.router.navigate(['/statistics', {
        text: 'Volatility',
        iconName: 'insert_chart',
        cryptoName: symbol,
        daysCount: 100
      }]);
    }
  }]);

  return BlockGridComponent;
}();

BlockGridComponent.ɵfac = function BlockGridComponent_Factory(t) {
  return new (t || BlockGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxExcelExporterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
};

BlockGridComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: BlockGridComponent,
  selectors: [["app-block-grid"]],
  viewQuery: function BlockGridComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.grid1 = _t.first);
    }
  },
  hostBindings: function BlockGridComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function BlockGridComponent_resize_HostBindingHandler($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
    }
  },
  decls: 34,
  vars: 23,
  consts: [[1, "sample-wrapper"], [1, "sample-content"], ["class", "buttons-container", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["igxTooltip", ""], ["tooltipRef", "tooltip"], ["width", "100%", "height", "100%", 3, "data", "allowFiltering", "filterMode"], ["grid1", ""], ["igxExcelStyleHiding", ""], ["igxExcelStyleMoving", ""], ["igxExcelStylePinning", ""], ["igxGroupByRow", ""], ["field", "fullName", "header", "Name", 3, "width", "filterable"], ["igxCell", ""], [3, "width", "header", "filterable", "hidden"], ["field", "changePct24Hour", "dataType", "number", "sortable", "true", "dataType", "number", 3, "width", "groupable", "cellClasses"], ["changeCol", ""], ["igxHeader", ""], ["igxCell", "", "dataType", "number"], ["width", "20%", "field", "price", "filterable", "true", "dataType", "number"], ["width", "15%", "field", "supply", "sortable", "true", "filterable", "true", "dataType", "number", 3, "hidden"], ["supplyCol", ""], ["field", "dailyScale", "header", "Daily Scale", "dataType", "boolean", 3, "groupable", "hidden"], ["field", "proofType", "header", "Proof Type", "dataType", "string", 3, "width", "groupable", "hidden"], ["field", "algorithm", "header", "Algorithm", "dataType", "string", 3, "width", "groupable", "hidden"], [1, "buttons-container"], ["id", "refresh", "igxButton", "raised", "igxRipple", "", 3, "click"], ["id", "exportButton", "igxButton", "raised", "igxRipple", "", 3, "igxTooltipTarget", "click"], ["src", "https://img.icons8.com/material/24/000000/ms-excel.png"], ["id", "refreshFabBtn", "igxButton", "fab", "igxRipple", "", 3, "click"], [4, "ngIf", "ngIfElse"], ["defaultGroupByTemplate", ""], [1, "igx-group-label"], ["fontSet", "material", 1, "igx-group-label__icon"], [1, "igx-group-label__column-name"], [1, "igx-group-label__count-badge", 3, "value"], [1, "igx-group-label__text"], ["class", "coin-logo", 4, "ngIf"], [1, "coin-title"], [1, "coin-logo"], [3, "src"], ["igxButton", "icon", "igxRipple", "", 3, "click"], [2, "width", "100%", "text-align", "center"]],
  template: function BlockGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, BlockGridComponent_div_2_Template, 6, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, BlockGridComponent_ng_template_3_Template, 3, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Export to Excel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "igx-grid", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, BlockGridComponent_ng_template_10_Template, 0, 0, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, BlockGridComponent_ng_template_11_Template, 0, 0, "ng-template", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, BlockGridComponent_ng_template_12_Template, 0, 0, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, BlockGridComponent_ng_template_13_Template, 3, 2, "ng-template", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "igx-column", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, BlockGridComponent_ng_template_15_Template, 3, 2, "ng-template", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "igx-column", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, BlockGridComponent_ng_template_17_Template, 3, 0, "ng-template", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "igx-column", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, BlockGridComponent_ng_template_20_Template, 1, 0, "ng-template", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, BlockGridComponent_ng_template_21_Template, 3, 7, "ng-template", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "igx-column", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, BlockGridComponent_ng_template_23_Template, 1, 0, "ng-template", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, BlockGridComponent_ng_template_24_Template, 3, 4, "ng-template", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "igx-column", 20, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, BlockGridComponent_ng_template_27_Template, 1, 0, "ng-template", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, BlockGridComponent_ng_template_28_Template, 3, 4, "ng-template", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "igx-column", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "igx-column", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, BlockGridComponent_ng_template_31_Template, 2, 1, "ng-template", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "igx-column", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, BlockGridComponent_ng_template_33_Template, 2, 1, "ng-template", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.hideColumn)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.remoteData)("allowFiltering", true)("filterMode", "excelStyleFilter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", ctx.setWidth("20%", "20%"))("filterable", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", ctx.setWidth("15%", "10%"))("header", ctx.hideColumn ? "Chart" : "Volatility")("filterable", false)("hidden", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", ctx.setWidth("25%", "13%"))("groupable", true)("cellClasses", ctx.changes24h);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.hideColumn);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("groupable", true)("hidden", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", ctx.setWidth("20%", "12%"))("groupable", true)("hidden", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", "10%")("groupable", true)("hidden", ctx.hideColumn);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxButtonDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxRippleDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxIconComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxTooltipTargetDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxTooltipDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxGridComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxGroupByRowTemplateDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxBadgeComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxColumnComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxCellTemplateDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxCellHeaderTemplateDirective],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe],
  styles: ["#refreshFabBtn[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 33px;\n  z-index: 998;\n  bottom: 33px;\n}\n\n.coin-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.coin-logo[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.9);\n}\n\n.coin-logo[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n#exportButton[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  background-color: #72da67;\n  padding: 0;\n  cursor: pointer;\n}\n\n.buttons-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2NrLWdyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFDRSxlQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQztFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUZIOztBQUtDO0VBQ0MsbUJBQUE7RUFDQSxhQUFBO0FBRkYiLCJmaWxlIjoiYmxvY2stZ3JpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuI3JlZnJlc2hGYWJCdG4ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDMzcHg7XHJcbiAgICB6LWluZGV4OiA5OTg7XHJcbiAgICBib3R0b206IDMzcHg7XHJcbn1cclxuXHJcbi5jb2luLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5jb2luLWxvZ28ge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LCAuOSk7XHJcbn1cclxuXHJcbi5jb2luLWxvZ28gPiBpbWcge1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuICNleHBvcnRCdXR0b257XHJcbiAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICM3MmRhNjc7XHJcbiAgIHBhZGRpbmc6IDA7XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxuIH1cclxuXHJcbiAuYnV0dG9ucy1jb250YWluZXJ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gfVxyXG4iXX0= */"]
});

/***/ }),

/***/ 7488:
/*!****************************************************!*\
  !*** ./src/app/block-list/block-list.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockListComponent": function() { return /* binding */ BlockListComponent; }
/* harmony export */ });
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 9606);
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils */ 1960);
/* harmony import */ var _core_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/animations */ 6552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);











function BlockListComponent_igx_suffix_7_Template(rf, ctx) {
  if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "igx-suffix", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BlockListComponent_igx_suffix_7_Template_igx_suffix_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r3.searchCrypto = null;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "igx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function BlockListComponent_igx_list_item_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "igx-list-item", null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "igx-avatar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "igx-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "(24h)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var crypto_r5 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r2.getCoinImage(crypto_r5["imageUrl"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", crypto_r5["fullName"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 9, crypto_r5["price"], "1.0-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("percent-style-", crypto_r5["changePct24Hour"] >= 0 ? "up" : "down", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](15, 12, crypto_r5["changePct24Hour"], "0.0-2"), " % ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("color", crypto_r5["changePct24Hour"] >= 0 ? "green" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", crypto_r5["changePct24Hour"] >= 0 ? "arrow_drop_up" : "arrow_drop_down", " ");
  }
}

var BlockListComponent = /*#__PURE__*/function () {
  function BlockListComponent(data) {
    (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BlockListComponent);

    this.data = data;
    this.remoteData = [];
  }

  (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(BlockListComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this = this;

      this.data.getData().subscribe(function (res) {
        _this.remoteData = (0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.sortDataByKey)(res, 'rank');
      });
    }
  }, {
    key: "filterCryptos",
    get: function get() {
      var fo = new _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxFilterOptions();
      fo.key = 'fullName';
      fo.inputValue = this.searchCrypto;
      return fo;
    }
  }, {
    key: "getCoinImage",
    value: function getCoinImage(imageUrl) {
      return (0,_core_utils__WEBPACK_IMPORTED_MODULE_2__.transformCoinImgUrl)(imageUrl);
    }
  }]);

  return BlockListComponent;
}();

BlockListComponent.ɵfac = function BlockListComponent_Factory(t) {
  return new (t || BlockListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService));
};

BlockListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: BlockListComponent,
  selectors: [["app-block-list"]],
  decls: 14,
  vars: 7,
  consts: [[1, "sample-wrapper"], ["type", "search", 1, "search"], ["igxInput", "", "placeholder", "Search by name", 3, "ngModel", "ngModelChange"], ["search", ""], [3, "click", 4, "ngIf"], [1, "list-sample"], ["isHeader", "true"], [4, "ngFor", "ngForOf"], [3, "click"], ["item", ""], [1, "crypto"], [1, "crypto__info"], [1, "crypto__item"], [1, "crypto__name"], ["size", "small", "roundShape", "true", 1, "crypto__avatar", 3, "src"], [1, "crypto__details"], [1, "crypto__price"], [3, "color"], [1, "li_item"]],
  template: function BlockListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "igx-input-group", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "igx-prefix");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "igx-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "search");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function BlockListComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.searchCrypto = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, BlockListComponent_igx_suffix_7_Template, 3, 0, "igx-suffix", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "igx-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "igx-list-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Cryptocurrencies");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, BlockListComponent_igx_list_item_12_Template, 20, 15, "igx-list-item", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "igxFilter");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchCrypto);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r0.value.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@listAnimation", ctx.remoteData.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](13, 4, ctx.remoteData, ctx.filterCryptos));
    }
  },
  directives: [_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxInputGroupComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxPrefixDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxSuffixDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxListComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxListItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxAvatarComponent],
  pipes: [_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxFilterPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  flex: initial;\n}\n\n@media only screen and (max-width: 786px) {\n  [_nghost-%COMP%] {\n    flex: 1 0 0%;\n  }\n}\n\n.list-sample[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  min-width: 500px;\n  overflow-y: auto;\n  max-height: calc(100vh - 154px);\n  min-height: 200px;\n  border-radius: 5px;\n  margin-top: 8px;\n}\n\n@media only screen and (max-width: 786px) {\n  .list-sample[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n}\n\n.crypto[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.crypto__info[_ngcontent-%COMP%] {\n  flex: 1 0 0%;\n}\n\n.crypto__item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n@media only screen and (max-width: 639px) {\n  .crypto__item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n\n.crypto__avatar[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.crypto__name[_ngcontent-%COMP%], .crypto__details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 1 0 0%;\n}\n\n.crypto__details[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.crypto__details[_ngcontent-%COMP%]   .crypto__price[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n\n.percent-style-down[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n@media only screen and (max-width: 639px) {\n  .crypto__details[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n\n  .igx-navbar__title[_ngcontent-%COMP%] {\n    max-width: 144px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2NrLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLCtHQUFBO0VBR0EsZ0JBQUE7RUFJQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLGVBQUE7QUFORjs7QUFGRTtFQUxGO0lBTUksZUFBQTtFQUtGO0FBQ0Y7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUdFO0VBTEY7SUFNSSxzQkFBQTtJQUNBLHVCQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsOEJBQUE7QUFBRjs7QUFDRTtFQUNFLGtCQUFBO0FBQ0o7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxlQUFBO0VBQUY7O0VBR0E7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtFQUFGO0FBQ0YiLCJmaWxlIjoiYmxvY2stbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4OiBpbml0aWFsO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4NnB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgZmxleDogMSAwIDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmxpc3Qtc2FtcGxlIHtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODZweCkge1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gIH1cclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTRweCk7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5jcnlwdG8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNyeXB0b19faW5mbyB7XHJcbiAgZmxleDogMSAwIDAlO1xyXG59XHJcblxyXG4uY3J5cHRvX19pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY3J5cHRvX19hdmF0YXIge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uY3J5cHRvX19uYW1lLFxyXG4uY3J5cHRvX19kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleDogMSAwIDAlO1xyXG59XHJcblxyXG4uY3J5cHRvX19kZXRhaWxzIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLmNyeXB0b19fcHJpY2Uge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBlcmNlbnQtc3R5bGUtZG93biB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xyXG4gIC5jcnlwdG9fX2RldGFpbHMge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmlneC1uYXZiYXJfX3RpdGxlIHtcclxuICAgIG1heC13aWR0aDogMTQ0cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxufVxyXG4iXX0= */"],
  data: {
    animation: [_core_animations__WEBPACK_IMPORTED_MODULE_3__.Animations.listItemLoadAnimation]
  }
});

/***/ }),

/***/ 6552:
/*!************************************!*\
  !*** ./src/app/core/animations.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Animations": function() { return /* binding */ Animations; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

var Animations = {
  listItemLoadAnimation: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('listAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    opacity: 0,
    transform: 'translateY(-15px)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.stagger)('50ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('550ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    opacity: 1,
    transform: 'translateY(0px)'
  })))], {
    optional: true
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('50ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    opacity: 0
  })), {
    optional: true
  })])])
};

/***/ }),

/***/ 1550:
/*!************************************!*\
  !*** ./src/app/core/interfaces.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoinItem": function() { return /* binding */ CoinItem; },
/* harmony export */   "BlockItem": function() { return /* binding */ BlockItem; }
/* harmony export */ });
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);


var CoinItem = /*#__PURE__*/(0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CoinItem() {
  (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CoinItem);

  this.id = 0; // CoinInfo.Id

  this.name = ''; // CoinInfo.Name

  this.fullName = ''; // CoinInfo.FullName

  this.price = 0; // RAW.USD.PRICE

  this.supply = 0; // RAW.USD.SUPPLY

  this.changePct24Hour = 0; // RAW.USD.CHANGEPCT24HOUR

  this.proofType = ''; // CoinInfo.ProofType

  this.algorithm = ''; // CoinInfo.Algorithm

  this.rank = 0; // CoinInfo.Rank

  this.imageUrl = ''; // RAW.USD.IMAGEURL

  this.change24Hour = 0; // RAW.USD.CHANGE24HOUR(dollars)

  this.high24Hour = 0; // RAW.USD.HIGH24HOUR(dollars)

  this.volume24Hour = 0; // RAW.USD.VOLUME24HOUR(dollars)

  this.mktcap = 0; // RAW.USD.MKTCAP
});
var BlockItem = /*#__PURE__*/(0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function BlockItem() {
  (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BlockItem);

  this.key = '';
  this.fullName = '';
  this.holdings = 0;
  this.name = '';
  this.supply = 0;
  this.changePct24Hour = 0;
  this.price = 0;
  this.imageUrl = '';
  this.total = 0;
});

/***/ }),

/***/ 1960:
/*!*******************************!*\
  !*** ./src/app/core/utils.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortDataByKey": function() { return /* binding */ sortDataByKey; },
/* harmony export */   "flattenObject": function() { return /* binding */ flattenObject; },
/* harmony export */   "transformCoinImgUrl": function() { return /* binding */ transformCoinImgUrl; },
/* harmony export */   "fillFromJSON": function() { return /* binding */ fillFromJSON; }
/* harmony export */ });
var baseUrl = 'https://www.cryptocompare.com';
function sortDataByKey(array, keyToSortBy) {
  function sortByKey(a, b) {
    var x = a[keyToSortBy];
    var y = b[keyToSortBy];
    return x < y ? -1 : x > y ? 1 : 0;
  }

  return array.sort(sortByKey);
}
function flattenObject(ob) {
  var toReturn = {};

  for (var i in ob) {
    if (!Object.prototype.hasOwnProperty.call(ob, i)) {
      continue;
    }

    if (typeof ob[i] === 'object') {
      var flatObject = flattenObject(ob[i]);

      for (var x in flatObject) {
        if (!Object.prototype.hasOwnProperty.call(flatObject, x) || i === 'DISPLAY') {
          continue;
        }

        toReturn[x] = flatObject[x];
      }
    } else {
      toReturn[i.toUpperCase()] = ob[i];
    }
  }

  return toReturn;
}
function transformCoinImgUrl(imgUrl) {
  return baseUrl + imgUrl;
}
function fillFromJSON(obj, jsonObj) {
  for (var propName in obj) {
    if (propName === 'name' && jsonObj['FROMSYMBOL'] !== undefined) {
      obj['name'] = jsonObj['FROMSYMBOL'];
      obj['fullName'] = jsonObj['FROMSYMBOL'];
    } else {
      obj[propName] = jsonObj[propName.toUpperCase()];
    }
  }

  return obj;
}

/***/ }),

/***/ 3753:
/*!******************************************!*\
  !*** ./src/app/email/email.component.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailComponent": function() { return /* binding */ EmailComponent; }
/* harmony export */ });
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ 4903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 9606);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);








var _c0 = ["snack"];
var EmailComponent = /*#__PURE__*/function () {
  function EmailComponent(router, route, authService) {
    (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EmailComponent);

    this.router = router;
    this.route = route;
    this.authService = authService;
    this.return = '';
  }

  (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EmailComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.route.queryParams.subscribe(function (params) {
        return _this.return = params['return'] || '/home';
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(formData) {
      var _this2 = this;

      if (formData.valid) {
        this.authService.signIn(formData.value.email, formData.value.password).then(function (result) {
          _this2.router.navigate(['/home']);
        }).catch(function (err) {
          _this2.snack.open(err.message);
        });
      }
    }
  }]);

  return EmailComponent;
}();

EmailComponent.ɵfac = function EmailComponent_Factory(t) {
  return new (t || EmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthServiceService));
};

EmailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: EmailComponent,
  selectors: [["app-email"]],
  viewQuery: function EmailComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.snack = _t.first);
    }
  },
  hostVars: 1,
  hostBindings: function EmailComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsyntheticHostProperty"]("@moveIn", undefined);
    }
  },
  decls: 30,
  vars: 4,
  consts: [[1, "form-container"], ["id", "lockIcon"], [3, "ngSubmit"], ["formData", "ngForm"], ["igxLabel", "", "for", "email"], ["igxInput", "", "name", "email", "type", "email", "required", "", 3, "ngModel", "ngModelChange"], ["igxLabel", "", "for", "password"], ["igxInput", "", "name", "password", "type", "password", "required", "", 3, "ngModel", "ngModelChange"], [1, "signup-form-actions"], ["igxButton", "flat", "igxRipple", "", "routerLink", "/login", "id", "goback"], ["id", "loginBtn", "igxButton", "raised", "igxRipple", "", "type", "submit", 1, "basic-btn", 3, "disabled"], [1, "sbPosition"], [3, "autoHide"], ["snack", ""], ["routerLink", "/signup", 1, "alc"]],
  template: function EmailComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "igx-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "email");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function EmailComponent_Template_form_ngSubmit_4_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);

        return ctx.onSubmit(_r0);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "igx-input-group");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Email address");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_9_listener($event) {
        return ctx.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "igx-suffix");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "igx-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "email");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "igx-input-group");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "igx-suffix");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "igx-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "lock");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Go back");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Log in");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "igx-snackbar", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Don't have an account?");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_r0.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoHide", true);
    }
  },
  directives: [_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxInputGroupComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxLabelDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxSuffixDirective, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxButtonDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxRippleDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxSnackbarComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC5jb21wb25lbnQuc2NzcyJ9 */"],
  data: {
    animation: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.moveIn)(), (0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.fallIn)()]
  }
});

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 9606);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ 4903);
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils */ 1960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);












function HomeComponent_div_0_igx_suffix_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "igx-suffix", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_div_0_igx_suffix_8_Template_igx_suffix_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);

      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      _r1.value = "";
      return ctx_r4.clear();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "igx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function HomeComponent_div_0_article_10_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "article", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "igx-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "igx-card-header", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "igx-card-media", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "igx-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " 24h ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Rank: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Proof type: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Market Cap: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "igx-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "igx-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_div_0_article_10_Template_button_click_33_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      var crypto_r6 = restoredCtx.$implicit;
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r7.openChart($event, crypto_r6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " View chart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var crypto_r6 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@flyInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r3.getCoinImage(crypto_r6["imageUrl"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](crypto_r6["fullName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(", crypto_r6["name"], ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Price: $", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](13, 12, crypto_r6["price"], "1.0-8"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("percent-style-", crypto_r6["changePct24Hour"] >= 0 ? "up" : "down", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](16, 15, crypto_r6["changePct24Hour"], "0.0-2"), ")%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](crypto_r6["rank"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](crypto_r6["proofType"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](30, 18, crypto_r6["mktcap"], "3.0-2"), "");
  }
}

function HomeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "igx-input-group", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_0_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r9.searchValue = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "igx-prefix");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "igx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, HomeComponent_div_0_igx_suffix_8_Template, 3, 0, "igx-suffix", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, HomeComponent_div_0_article_10_Template, 35, 21, "article", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "igxFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);

    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r1.value.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 3, ctx_r0.cryptos, ctx_r0.filterOptions));
  }
}

var HomeComponent = /*#__PURE__*/function () {
  function HomeComponent(data, router) {
    (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeComponent);

    this.data = data;
    this.router = router;
  }

  (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this = this;

      this.data.getData().subscribe(function (res) {
        _this.cryptos = (0,_core_utils__WEBPACK_IMPORTED_MODULE_3__.sortDataByKey)(res, 'rank');
      });
    }
  }, {
    key: "filterOptions",
    get: function get() {
      var fo = new _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxFilterOptions();
      fo.items = this.cryptos;
      fo.key = 'fullName';
      fo.inputValue = this.searchValue ? this.searchValue : '';

      if (fo.items && fo.inputValue) {
        var fI = fo.items.find(function (item) {
          return item.name.toUpperCase().includes(fo.inputValue.toUpperCase());
        });

        if (fI) {
          fo.key = 'name';
        }
      }

      return fo;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.searchValue = '';
    }
  }, {
    key: "openChart",
    value: function openChart(evt, crypto) {
      this.router.navigate(['/statistics', {
        text: 'Volatility',
        iconName: 'show_chart',
        cryptoName: [crypto['name'], crypto['fullName']],
        daysCount: 100
      }]);
    }
  }, {
    key: "getCoinImage",
    value: function getCoinImage(imageUrl) {
      return (0,_core_utils__WEBPACK_IMPORTED_MODULE_3__.transformCoinImgUrl)(imageUrl);
    }
  }, {
    key: "toggleDetails",
    value: function toggleDetails() {
      this.panel.toggle();
    }
  }]);

  return HomeComponent;
}();

HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
};

HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  viewQuery: function HomeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxExpansionPanelComponent, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
    }
  },
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "sample-wrapper"], ["type", "search", 1, "searchBox"], ["igxInput", "", "placeholder", "Search by name or symbol", 3, "ngModel", "ngModelChange"], ["input1", ""], [3, "click", 4, "ngIf"], [1, "sample-content"], ["class", "sample-column card-wrapper", 4, "ngFor", "ngForOf"], [3, "click"], [1, "sample-column", "card-wrapper"], ["vertical", "true"], ["height", "32px"], [3, "src"], ["igxCardHeaderTitle", ""], ["igxButton", "", "igxRipple", "", 3, "click"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 12, 6, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.cryptos);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxPrefixDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxIconComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxSuffixDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxCardComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxCardHeaderComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxCardMediaDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxCardHeaderTitleDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxCardContentDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxDividerDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxCardActionsComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxButtonDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxRippleDirective],
  pipes: [_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxFilterPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe],
  styles: ["a[_ngcontent-%COMP%] {\n  color: #731963;\n}\n\n.links[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0 35px;\n}\n\n#linksContainer[_ngcontent-%COMP%] {\n  flex-flow: row wrap;\n  display: flex;\n  justify-content: center;\n}\n\n.searchBox[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.sample-content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 auto;\n  justify-content: flex-start;\n}\n\n.igx-card-header[_ngcontent-%COMP%], .igx-card-header__title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.igx-card-content[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.igx-card-header[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n\n.igx-card-header[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.igx-card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  margin-bottom: 8px;\n}\n\n.content-span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: stretch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBT0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQUpGOztBQU9BOztFQUVFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtBQUpGOztBQU9BO0VBQ0UsNEJBQUE7QUFKRjs7QUFPQTtFQUNFLGVBQUE7QUFKRjs7QUFLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFPQTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFKRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgY29sb3I6ICM3MzE5NjM7XHJcbn1cclxuXHJcbi5saW5rc3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAzNXB4O1xyXG59XHJcblxyXG4jbGlua3NDb250YWluZXIge1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLy8gLmNhcmQtd3JhcHBlciB7XHJcbi8vICAgbWF4LXdpZHRoOiAyNzlweDtcclxuLy8gICBtaW4td2lkdGg6IDI2MHB4O1xyXG4vLyB9XHJcblxyXG4uc2VhcmNoQm94IHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zYW1wbGUtY29udGVudCB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmlneC1jYXJkLWhlYWRlcixcclxuLmlneC1jYXJkLWhlYWRlcl9fdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaWd4LWNhcmQtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmlneC1jYXJkLWhlYWRlcntcclxuICBwYWRkaW5nLWJvdHRvbTogMCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pZ3gtY2FyZC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGVudC1zcGFuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaFxyXG59Il19 */"],
  data: {
    animation: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.flyInOut)()]
  }
});

/***/ }),

/***/ 4394:
/*!**************************************************************!*\
  !*** ./src/app/loading-spinner/loading-spinner.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingSpinnerComponent": function() { return /* binding */ LoadingSpinnerComponent; }
/* harmony export */ });
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



var LoadingSpinnerComponent = /*#__PURE__*/(0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoadingSpinnerComponent() {
  (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoadingSpinnerComponent);
});

LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) {
  return new (t || LoadingSpinnerComponent)();
};

LoadingSpinnerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoadingSpinnerComponent,
  selectors: [["app-loading-spinner"]],
  decls: 3,
  vars: 0,
  consts: [[1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]],
  template: function LoadingSpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  styles: [".spinner[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  position: relative;\n  margin: 100px auto;\n}\n\n.double-bounce1[_ngcontent-%COMP%], .double-bounce2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: sk-bounce 2s infinite ease-in-out;\n}\n\n.double-bounce2[_ngcontent-%COMP%] {\n  animation-delay: -1s;\n}\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFHQSw0Q0FBQTtBQURGOztBQUlBO0VBRUUsb0JBQUE7QUFERjs7QUFTQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSwyQkFBQTtFQUVGO0VBREU7SUFDQSxtQkFBQTtJQUNBLDJCQUFBO0VBR0Y7QUFDRiIsImZpbGUiOiJsb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lciB7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG59XHJcblxyXG4uZG91YmxlLWJvdW5jZTEsIC5kb3VibGUtYm91bmNlMiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxuICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uZG91YmxlLWJvdW5jZTIge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxuICBhbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stYm91bmNlIHtcclxuICAwJSwgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApIH1cclxuICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKSB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stYm91bmNlIHtcclxuICAwJSwgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKTtcclxuICB9IDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICB9XHJcbn0iXX0= */"]
});

/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": function() { return /* binding */ LoginComponent; }
/* harmony export */ });
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ 4903);
/* harmony import */ var _igniteui_material_icons_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @igniteui/material-icons-extended */ 4448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 9606);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading-spinner/loading-spinner.component */ 4394);











function LoginComponent_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.error);
  }
}

function LoginComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "igx-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "lock_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, LoginComponent_div_1_span_3_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginComponent_div_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r4.loginGoogle();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "igx-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Login With Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LoginComponent_div_1_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r6.loginEmail();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "igx-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Sign up for an ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.error);
  }
}

function LoginComponent_ng_template_2_app_loading_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loading-spinner");
  }
}

function LoginComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, LoginComponent_ng_template_2_app_loading_spinner_0_Template, 1, 0, "app-loading-spinner", 11);
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.showSpinner);
  }
}

var LoginComponent = /*#__PURE__*/function () {
  function LoginComponent(router, route, iconService, authService) {
    (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginComponent);

    this.router = router;
    this.route = route;
    this.iconService = iconService;
    this.authService = authService;
    this.return = '';
    this.showSpinner = localStorage.getItem('showSpinner') === 'true' ? true : false;
  }

  (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // Get the query params
      this.route.queryParams.subscribe(function (params) {
        return _this.return = params['return'] || '/home';
      }); // Register a single icon

      this.iconService.addSvgIconFromText(_igniteui_material_icons_extended__WEBPACK_IMPORTED_MODULE_3__.facebook.name, _igniteui_material_icons_extended__WEBPACK_IMPORTED_MODULE_3__.facebook.value, 'imx-icons');
      this.iconService.addSvgIconFromText(_igniteui_material_icons_extended__WEBPACK_IMPORTED_MODULE_3__.google.name, _igniteui_material_icons_extended__WEBPACK_IMPORTED_MODULE_3__.google.value, 'imx-icons');
    } // loginFb() {
    //    this.showSpinner = true;
    //    localStorage.setItem('showSpinner', 'true');
    //    this.facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
    //    this.afAuth.signInWithRedirect(this.facebookAuthProvider);
    //    this.afAuth.getRedirectResult().then(result => {
    //       if (result.user) {
    //          this.showSpinner = true;
    //          localStorage.setItem('showSpinner', 'true');
    //          this.router.navigate([this.return]);
    //       }
    //    }).catch(function (error) {
    //       // Handle Errors here.
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       this.error = errorMessage;
    //    });
    // }

  }, {
    key: "loginGoogle",
    value: function loginGoogle() {
      this.authService.googleAuth();
    }
  }, {
    key: "loginEmail",
    value: function loginEmail() {
      this.router.navigate(['/email'], {
        queryParams: {
          return: this.return
        }
      });
    }
  }]);

  return LoginComponent;
}();

LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxIconService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthServiceService));
};

LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  hostVars: 1,
  hostBindings: function LoginComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsyntheticHostProperty"]("@moveIn", undefined);
    }
  },
  decls: 4,
  vars: 2,
  consts: [[1, "form-container"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["id", "lockIcon"], ["class", "error", 4, "ngIf"], ["igxButton", "raised", "igxRipple", "", "id", "google", 1, "button", 3, "click"], ["family", "imx-icons", "name", "google", 1, "s-logo"], ["igxButton", "raised", "igxRipple", "", "id", "email", 1, "button", 3, "click"], [1, "s-logo"], ["routerLink", "/signup", "routerLinkActive", "active", 1, "alc"], [1, "error"], [4, "ngIf"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 17, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, LoginComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.showSpinner)("ngIfElse", _r1);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxIconComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxButtonDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxRippleDirective, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_5__.LoadingSpinnerComponent],
  styles: ["#lock[_ngcontent-%COMP%] {\n  width: 40%;\n  margin: 1.5em auto 4em auto;\n  display: block;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 0 0 16px 0;\n}\n\n.button[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0;\n}\n\n#fb[_ngcontent-%COMP%] {\n  background: #3B5998;\n  color: #fff;\n  margin-top: 10px;\n}\n\n#google[_ngcontent-%COMP%] {\n  border: 1px solid #95989A;\n  background: #fff;\n}\n\n.s-logo[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n}\n\n#email[_ngcontent-%COMP%] {\n  background: #ECECEC;\n}\n\n.error[_ngcontent-%COMP%] {\n  background: #f1f0ef;\n  padding: 1em;\n  width: 100%;\n  display: block;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNFO0VBQ0UsZ0JBQUE7QUFDSjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUFGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvY2sge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luOiAxLjVlbSBhdXRvIDRlbSBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbjogMCAwIDE2cHggMDtcclxuXHJcbiAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbiNmYiB7XHJcbiAgYmFja2dyb3VuZDogIzNCNTk5ODtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tdG9wOjEwcHg7XHJcbn1cclxuXHJcbiNnb29nbGUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5NTk4OUE7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLnMtbG9nbyB7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4jZW1haWwge1xyXG4gIGJhY2tncm91bmQ6ICNFQ0VDRUM7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjBlZjtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4iXX0= */"],
  data: {
    animation: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.moveIn)()]
  }
});

/***/ }),

/***/ 5574:
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioComponent": function() { return /* binding */ PortfolioComponent; }
/* harmony export */ });
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 5106);
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 9606);
/* harmony import */ var _core_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/interfaces */ 1550);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utils */ 1960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_block_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/block-item.service */ 2695);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ 4402);
/* harmony import */ var igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! igniteui-angular-charts */ 4873);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);

















var _c0 = ["snack"];
var _c1 = ["snackExists"];
var _c2 = ["grid1"];
var _c3 = ["modal"];
var _c4 = ["chart"];

function PortfolioComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var cell_r10 = ctx.cell;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("src", ctx_r1.getCoinImage(cell_r10.row.data.imageUrl), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", cell_r10.row.data.name, "");
  }
}

function PortfolioComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var cell_r13 = ctx.cell;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 2, cell_r13.row.data.total, "0.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](6, 5, cell_r13.row.data.holdings, "1.0-7"));
  }
}

function PortfolioComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var cell_r16 = ctx.cell;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 5, cell_r16.row.data.price, "0.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMapInterpolate1"]("percent-style-", cell_r16.row.data.changePct24Hour >= 0 ? "up" : "down", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](6, 8, cell_r16.row.data.changePct24Hour, "0.2-2"), " % ");
  }
}

function PortfolioComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PortfolioComponent_ng_template_25_Template_span_click_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      var cell_r19 = restoredCtx.cell;
      var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r21.deleteRow(cell_r19);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "igx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "highlight_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PortfolioComponent_ng_template_25_Template_span_click_3_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      var cell_r19 = restoredCtx.cell;
      var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r23.openChart($event, cell_r19.row.data.name);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "igx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "insert_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

var PortfolioComponent = /*#__PURE__*/function () {
  function PortfolioComponent(blockItemService, router, dataService, afAuth) {
    (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PortfolioComponent);

    this.blockItemService = blockItemService;
    this.router = router;
    this.dataService = dataService;
    this.afAuth = afAuth;
    this.blockItems = []; // Number options

    this.options = {
      digitsInfo: '1.2-2',
      currencyCode: 'USD'
    };
    this.formatOptions = this.options;
    this.helper = new Helper(); // tslint:disable-next-line: member-ordering

    this._dialogOverlaySettings = {
      closeOnOutsideClick: true,
      modal: true,
      outlet: null,
      scrollStrategy: new _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.CloseScrollStrategy()
    };

    this.positive24h = function (rowData) {
      return rowData.changePct24Hour > 0;
    };

    this.negative24h = function (rowData) {
      return rowData.changePct24Hour < 0;
    }; // tslint:disable-next-line:member-ordering


    this.dailyChanges = {
      positive: this.positive24h,
      negative: this.negative24h
    };
  }

  (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(PortfolioComponent, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this = this;

      this.afAuth.authState.subscribe(function (res) {
        if (res && res.uid) {
          _this.blockItemService.getItemsList().snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(function (actions) {
            return (// actions.map(a => ({ key: a.payload.key, ...a.payload.val() }))
              actions.map(function (a) {
                var item = {
                  key: a.key,
                  fullName: a.payload.val().fullName,
                  holdings: a.payload.val().holdings,
                  name: a.payload.val().name,
                  supply: a.payload.val().supply,
                  changePct24Hour: a.payload.val().changePct24Hour,
                  price: a.payload.val().price,
                  imageUrl: a.payload.val().imageUrl,
                  total: a.payload.val().holdings * a.payload.val().price
                };
                return item;
              })
            );
          })).subscribe(function (items) {
            _this.blockItems = items;

            _this.grid1.sort({
              fieldName: 'total',
              dir: _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.SortingDirection.Desc,
              ignoreCase: false
            }); // Update portfolio upon load


            _this.updatePortfolio(); // Explode the last slice


            _this.chart.explodedSlices.add(items.length - 1);
          });
        }
      });
    }
  }, {
    key: "restore",
    value: function restore() {
      this.blockItemService.createItem(this.deletedItem);
      this.snack.close();
      this.deletedItem = new _core_interfaces__WEBPACK_IMPORTED_MODULE_3__.BlockItem();
    }
  }, {
    key: "openDialog",
    value: function openDialog() {
      this._dialogOverlaySettings.outlet = this.outlet;
      this.dialog.open(this._dialogOverlaySettings);
    }
  }, {
    key: "addItem",
    value: function addItem(event) {
      // Check whether the coin is already in your portfolio
      this.checkCoinExistence(this.coinName);
      event.dialog.close();
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item) {
      this.blockItemService.deleteItem(item.key);
    }
  }, {
    key: "checkCoinExistence",
    value: function checkCoinExistence(coin) {
      var fCoin = this.blockItems.filter(function (item) {
        return item.name === coin.toUpperCase();
      });

      if (fCoin.length !== 0) {
        this.snackExists.open('Already added!');
      } else {
        // find coin and add it if exist
        this.addRow(coin.toUpperCase());
      }
    }
  }, {
    key: "updatePortfolio",
    value: function updatePortfolio() {
      var _this2 = this;

      var _iterator = (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.blockItems),
          _step;

      try {
        var _loop = function _loop() {
          var coin = _step.value;

          _this2.dataService.getSpecificCoinData(coin.name).subscribe(function (res) {
            coin.changePct24Hour = res.changePct24Hour;
            coin.price = res.price;
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "openChart",
    value: function openChart(evt, symbol) {
      this.router.navigate(['/statistics', {
        text: 'Volatility',
        iconName: 'show_chart',
        cryptoName: symbol,
        daysCount: 100
      }]);
    }
  }, {
    key: "getCoinImage",
    value: function getCoinImage(imageUrl) {
      return (0,_core_utils__WEBPACK_IMPORTED_MODULE_4__.transformCoinImgUrl)(imageUrl);
    }
  }, {
    key: "calculateTotalPortfolio",
    value: function calculateTotalPortfolio() {
      var total = 0;

      var _iterator2 = (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.blockItems),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var coin = _step2.value;
          total += this.helper.calculateHoldings(coin.holdings, coin.price);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return total;
    }
  }, {
    key: "addRow",
    value: function addRow(symbol) {
      var _this3 = this;

      this.dataService.getCryptoIdFromSymbol(symbol).subscribe(function (filteredItem) {
        if (filteredItem) {
          _this3.dataService.getSpecificCoinData(filteredItem['Name']).subscribe(function (blockItem) {
            blockItem.holdings = _this3.holdings;

            _this3.blockItemService.createItem(blockItem);

            _this3.snackExists.open('Coin Added!');

            _this3.clearFormInputs();
          }, function (err) {
            _this3.clearFormInputs();

            _this3.snackExists.open(err);
          });
        } else {
          _this3.snackExists.open('Coin does not exist!');
        }
      });
    }
  }, {
    key: "deleteRow",
    value: function deleteRow(cell) {
      var blockItem = cell.row.data; // Detele item from AngularFireList

      this.deleteItem(blockItem); // Stores deleted item for the 'Restore' Snackbar logic

      this.deletedItem = new _core_interfaces__WEBPACK_IMPORTED_MODULE_3__.BlockItem();
      Object.assign(this.deletedItem, blockItem);
      delete this.deletedItem['key'];
      this.snack.open();
    }
  }, {
    key: "updateRow",
    value: function updateRow(evt) {
      var rowItem = evt.rowID;
      rowItem.holdings = evt.newValue;
      this.blockItemService.updateItem(rowItem.key, rowItem);
    }
  }, {
    key: "clearFormInputs",
    value: function clearFormInputs() {
      this.coinName = '';
      this.holdings = '';
    }
  }, {
    key: "removeSorting",
    value: function removeSorting($event) {
      var _this4 = this;

      this.grid1.columns.forEach(function (col) {
        if (!(col.field === $event.fieldName)) {
          _this4.grid1.clearSort(col.field);
        }
      });
    }
  }, {
    key: "calculateHoldings",
    value: function calculateHoldings(holdings, price) {
      return this.helper.calculateHoldings(holdings, price);
    } // eslint-disable-next-line @typescript-eslint/no-unused-vars

  }, {
    key: "setFormat",
    value: function setFormat(context) {
      return context.item.fullName + " (" + Math.round(context.percentValue * 100) / 100 + '%)';
    }
  }, {
    key: "pieSliceClickEvent",
    value: function pieSliceClickEvent(e) {
      e.args.isExploded = !e.args.isExploded;
    }
  }]);

  return PortfolioComponent;
}();

PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
  return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_block_item_service__WEBPACK_IMPORTED_MODULE_5__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_6__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuth));
};

PortfolioComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: PortfolioComponent,
  selectors: [["app-portfolio"]],
  viewQuery: function PortfolioComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxOverlayOutletDirective, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c3, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c4, 7);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.outlet = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.snack = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.snackExists = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.grid1 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.dialog = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    }
  },
  decls: 51,
  vars: 17,
  consts: [["igxOverlayOutlet", "", 1, "sample-wrapper"], [1, "sample-content"], ["id", "refreshBtn", "igxButton", "raised", "igxRipple", "", 3, "click"], ["id", "addBtn", "igxButton", "raised", "igxRipple", "", 3, "click"], ["width", "100%", "height", "400px", 3, "data", "cellEdit", "onSortingDone"], ["grid1", ""], ["field", "name", "header", "Coin symbol", "field", "name", "sortable", "true"], ["igxCell", ""], ["field", "holdings", "header", "Holdings", "editable", "true", "sortable", "true", 3, "dataType"], ["header", "Total", "editable", "false", "field", "total", "sortable", "true", 3, "pipeArgs", "dataType"], ["header", "Price", "field", "price", "sortable", "true", 3, "cellClasses"], ["header", "Actions"], ["id", "legendTitle"], ["legend", ""], ["height", "100%", "width", "100%", "valueMemberPath", "total", "labelMemberPath", "total", "legendLabelMemberPath", "fullName", "labelsPosition", "OutsideEnd", "labelExtent", "30", "radiusFactor", "0.7", "startAngle", "210", "labelsPosition", "OutsideEnd", "labelExtent", "30", "othersCategoryText", "Others", "othersCategoryThreshold", "2", "othersCategoryType", "Number", 3, "dataSource", "legend", "formatLabel", "sliceClick"], ["chart", ""], [1, "sbPosition"], ["actionText", "UNDO", 3, "autoHide", "clicked"], ["snack", ""], [3, "autoHide"], ["snackExists", ""], ["title", "Add coin", "leftButtonLabel", "Cancel", "rightButtonLabel", "Add coin", 3, "closeOnOutsideSelect", "leftButtonSelect", "rightButtonSelect"], ["modal", ""], [1, "addCoinForm"], ["type", "border"], ["igxLabel", "", "for", "coin"], ["id", "coin", "igxInput", "", "name", "coin", "type", "text", 3, "ngModel", "ngModelChange"], ["igxLabel", "", "for", "holdings"], ["igxInput", "", "name", "holdings", "type", "number", 3, "ngModel", "ngModelChange"], [1, "positionTop"], [3, "src"], [1, "symbolPosition"], ["igxButton", "icon", "igxRipple", "", 3, "click"]],
  template: function PortfolioComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PortfolioComponent_Template_button_click_3_listener() {
        return ctx.updatePortfolio();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "igx-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "refresh");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function PortfolioComponent_Template_button_click_10_listener() {
        return ctx.openDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "igx-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "playlist_add");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Add coin");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "igx-grid", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("cellEdit", function PortfolioComponent_Template_igx_grid_cellEdit_15_listener($event) {
        return ctx.updateRow($event);
      })("onSortingDone", function PortfolioComponent_Template_igx_grid_onSortingDone_15_listener($event) {
        return ctx.removeSorting($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "igx-column", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, PortfolioComponent_ng_template_18_Template, 4, 2, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "igx-column", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, PortfolioComponent_ng_template_20_Template, 7, 8, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "igx-column", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "igx-column", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, PortfolioComponent_ng_template_23_Template, 7, 11, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "igx-column", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, PortfolioComponent_ng_template_25_Template, 6, 0, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Portfolio allocation: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "igx-item-legend", null, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "igx-pie-chart", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sliceClick", function PortfolioComponent_Template_igx_pie_chart_sliceClick_30_listener($event) {
        return ctx.pieSliceClickEvent($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "igx-snackbar", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("clicked", function PortfolioComponent_Template_igx_snackbar_clicked_33_listener() {
        return ctx.restore();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Record was deleted");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "igx-snackbar", 19, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "igx-dialog", 21, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("leftButtonSelect", function PortfolioComponent_Template_igx_dialog_leftButtonSelect_39_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);

        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](40);

        return _r9.close();
      })("rightButtonSelect", function PortfolioComponent_Template_igx_dialog_rightButtonSelect_39_listener($event) {
        return ctx.addItem($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "form", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "igx-input-group", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Coin name");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PortfolioComponent_Template_input_ngModelChange_45_listener($event) {
        return ctx.coinName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "igx-input-group", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Holdings");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function PortfolioComponent_Template_input_ngModelChange_50_listener($event) {
        return ctx.holdings = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](29);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Total Portfolio Value: ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](8, 14, ctx.calculateTotalPortfolio(), "0.2-2"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.blockItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataType", "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pipeArgs", ctx.formatOptions)("dataType", "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cellClasses", ctx.dailyChanges);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.blockItems)("legend", _r5)("formatLabel", ctx.setFormat);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("autoHide", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("autoHide", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("closeOnOutsideSelect", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.coinName);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.holdings);
    }
  },
  directives: [_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxOverlayOutletDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxButtonDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxRippleDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxIconComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxGridComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxColumnComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxCellTemplateDirective, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_12__.IgxItemLegendComponent, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_12__.IgxPieChartComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxSnackbarComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxDialogComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxInputGroupComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxLabelDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DecimalPipe],
  styles: ["#refreshBtn[_ngcontent-%COMP%] {\n  margin-bottom: 21px;\n}\n\n#addBtn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.sample-content[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n}\n\n.positionTop[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.positionTop[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.symbolPosition[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 5px;\n  margin-left: 10px;\n}\n\n[_nghost-%COMP%]     igx-icon {\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]     .addCoinForm {\n  padding: 12px 24px 24px;\n}\n\n[_nghost-%COMP%]     .addCoinForm igx-input-group + igx-input-group {\n  margin-top: 24px;\n}\n\n[_nghost-%COMP%]     igx-grid {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQURGOztBQU1FO0VBQ0UsZUFBQTtBQUhKOztBQU1FO0VBQ0UsdUJBQUE7QUFKSjs7QUFNSTtFQUNFLGdCQUFBO0FBSk47O0FBUUU7RUFDRSxZQUFBO0FBTkoiLCJmaWxlIjoicG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JlZnJlc2hCdG4ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIxcHg7XHJcbn1cclxuXHJcblxyXG4jYWRkQnRuIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zYW1wbGUtY29udGVudCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnBvc2l0aW9uVG9wIHtcclxuICB3aWR0aDogMTAwJTtcclxuICAvLyBtYXJnaW4tdG9wOiAtN3B4O1xyXG59XHJcblxyXG4ucG9zaXRpb25Ub3A+aW1nIHtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5zeW1ib2xQb3NpdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuXHJcbjpob3N0IDo6bmctZGVlcCB7XHJcbiAgaWd4LWljb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmFkZENvaW5Gb3JtIHtcclxuICAgIHBhZGRpbmc6IDEycHggMjRweCAyNHB4O1xyXG5cclxuICAgIGlneC1pbnB1dC1ncm91cCtpZ3gtaW5wdXQtZ3JvdXAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWd4LWdyaWQge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"]
});

var Helper = /*#__PURE__*/function () {
  function Helper() {
    (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Helper);
  }

  (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Helper, [{
    key: "calculateHoldings",
    value: function calculateHoldings(holdings, price) {
      return holdings * price;
    }
  }]);

  return Helper;
}();

/***/ }),

/***/ 4903:
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moveIn": function() { return /* binding */ moveIn; },
/* harmony export */   "fallIn": function() { return /* binding */ fallIn; },
/* harmony export */   "moveInLeft": function() { return /* binding */ moveInLeft; },
/* harmony export */   "flyInOut": function() { return /* binding */ flyInOut; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

function moveIn() {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('moveIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    opacity: '0',
    transform: 'translateX(100px)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.8s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    opacity: '1',
    transform: 'translateX(0)'
  }))]) // transition(':leave', [
  //   style({opacity: '1', transform: 'translateX(0)'}),
  //   animate('.3s ease-in-out', style({opacity: '0', transform: 'translateX(-200px)'}))
  // ])
  ]);
}
function fallIn() {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fallIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    opacity: '0',
    transform: 'translateY(40px)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('.4s .2s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    opacity: '1',
    transform: 'translateY(0)'
  }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    opacity: '1',
    transform: 'translateX(0)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('.3s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    opacity: '0',
    transform: 'translateX(-200px)'
  }))])]);
}
function moveInLeft() {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('moveInLeft', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    opacity: '0',
    transform: 'translateX(-100px)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('.6s .2s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    opacity: '1',
    transform: 'translateX(0)'
  }))])]);
}
function flyInOut() {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('flyInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    width: 120,
    transform: 'translateX(0)',
    opacity: 1
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    width: 10,
    transform: 'translateX(50px)',
    opacity: 0
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s 0.3s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'translateX(0)',
    width: 140
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    opacity: 1
  }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    transform: 'translateX(50px)',
    width: 20
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.5s 0.4s ease', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    opacity: 0
  }))])])]);
}

/***/ }),

/***/ 8063:
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 7556);





var AuthGuard = /*#__PURE__*/function () {
  function AuthGuard(router, authService) {
    (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthGuard);

    this.router = router;
    this.authService = authService;
  }

  (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthGuard, [{
    key: "canActivate",
    value: function canActivate(route, routerState) {
      if (this.authService.isLoggedIn !== true) {
        this.router.navigate(['/login']);
      }

      return true;
    }
  }]);

  return AuthGuard;
}();

AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthServiceService));
};

AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthServiceService": function() { return /* binding */ AuthServiceService; }
/* harmony export */ });
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ 6369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 6436);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ 4402);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);







var AuthServiceService = /*#__PURE__*/function () {
  function AuthServiceService(afs, afAuth, router, ngZone) {
    var _this = this;

    (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthServiceService);

    this.afs = afs;
    this.afAuth = afAuth;
    this.router = router;
    this.ngZone = ngZone;
    this.afAuth.authState.subscribe(function (user) {
      if (user) {
        _this.userData = user;
        localStorage.setItem('user', JSON.stringify(_this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthServiceService, [{
    key: "signIn",
    value: function signIn(email, password) {
      return this.afAuth.signInWithEmailAndPassword(email, password);
    }
  }, {
    key: "signUp",
    value: function signUp(email, password) {
      return this.afAuth.createUserWithEmailAndPassword(email, password);
    }
  }, {
    key: "isLoggedIn",
    get: function get() {
      var user = JSON.parse(localStorage.getItem('user'));
      return user !== null ? true : false;
    }
  }, {
    key: "googleAuth",
    value: function googleAuth() {
      return this.authLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["default"].auth.GoogleAuthProvider());
    }
  }, {
    key: "authLogin",
    value: function authLogin(provider) {
      var _this2 = this;

      return this.afAuth.signInWithPopup(provider).then(function (result) {
        _this2.router.navigate(['/home']);
      }).catch(function (error) {
        window.alert(error);
      });
    }
  }, {
    key: "signOut",
    value: function signOut() {
      var _this3 = this;

      return this.afAuth.signOut().then(function () {
        localStorage.removeItem('user');

        _this3.router.navigate(['/home']);
      });
    }
  }]);

  return AuthServiceService;
}();

AuthServiceService.ɵfac = function AuthServiceService_Factory(t) {
  return new (t || AuthServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
};

AuthServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthServiceService,
  factory: AuthServiceService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2695:
/*!************************************************!*\
  !*** ./src/app/services/block-item.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemService": function() { return /* binding */ ItemService; }
/* harmony export */ });
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ 7334);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ 4402);





var ItemService = /*#__PURE__*/function () {
  function ItemService(db, auth) {
    var _this = this;

    (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ItemService);

    this.db = db;
    this.auth = auth;
    this.items = null;
    this.auth.authState.subscribe(function (user) {
      if (user) {
        _this.userId = user.uid;
      }
    });
  } // Return an observable list.


  (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ItemService, [{
    key: "getItemsList",
    value: function getItemsList() {
      if (!this.userId) {
        return;
      }

      this.items = this.db.list("items/".concat(this.userId));
      return this.items;
    } // Creates a new record on the list, using the Realtime Database's push-ids.

  }, {
    key: "createItem",
    value: function createItem(item) {
      this.items = this.getItemsList();
      item.total = item.holdings * item.price;
      /* Fix: When you pass an object to Firebase, the values of the properties can be a value or null.
      They can not be undefined */

      item.key = null;
      this.items.push(item);
      var listObservable = this.items.snapshotChanges();
      listObservable.subscribe();
    } // Non-destructive update

  }, {
    key: "updateItem",
    value: function updateItem(key, item) {
      this.items.update(key, item).catch(function (error) {
        return console.log(error);
      });
    } // Deletes the item by key. If no parameter is provided, the entire list will be deleted.

  }, {
    key: "deleteItem",
    value: function deleteItem(key) {
      this.items.remove(key).catch(function (error) {
        return console.log(error);
      });
    }
  }]);

  return ItemService;
}();

ItemService.ɵfac = function ItemService_Factory(t) {
  return new (t || ItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__.AngularFireDatabase), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth));
};

ItemService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ItemService,
  factory: ItemService.ɵfac
});

/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": function() { return /* binding */ DataService; }
/* harmony export */ });
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _assets_offlineData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/offlineData */ 9726);
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils */ 1960);
/* harmony import */ var _core_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/interfaces */ 1550);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);









var DataService = /*#__PURE__*/function () {
  function DataService(http) {
    (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DataService);

    this.http = http;
    this.apiKey = 'c1f530907ddda7f8da258a43988a86e852dedabef797f7e97c4b35688b9d27bd';
    this.baseUrl = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&api_key=".concat(this.apiKey);
    this.allCoinsDataUrl = "https://min-api.cryptocompare.com/data/all/coinlist?api_key=".concat(this.apiKey);
    this.histoDataUrl = 'https://min-api.cryptocompare.com/data/histoday?fsym=';
    this.priceMultiFullUrl = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=';
  }

  (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DataService, [{
    key: "getData",
    value: function getData() {
      var _this = this;

      return this.http.get(this.baseUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (result) {
        return _this.transformData(result);
      }));
    }
  }, {
    key: "getSpecificCoinData",
    value: function getSpecificCoinData(symbol) {
      return this.http.get(this.priceMultiFullUrl + symbol + '&tsyms=USD&api_key=' + this.apiKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (result) {
        var returnedCoin = (0,_core_utils__WEBPACK_IMPORTED_MODULE_3__.flattenObject)(result['RAW'][symbol]['USD']);
        var coin = new _core_interfaces__WEBPACK_IMPORTED_MODULE_4__.BlockItem();
        (0,_core_utils__WEBPACK_IMPORTED_MODULE_3__.fillFromJSON)(coin, returnedCoin);
        return coin;
      }));
    }
  }, {
    key: "getBetweenDaysPrices",
    value: function getBetweenDaysPrices(symbol, forDays) {
      return this.http.get(this.histoDataUrl + symbol + '&tsym=USD&limit=' + forDays + '&api_key=' + this.apiKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (result) {
        return result;
      }));
    }
  }, {
    key: "getHistoricalData",
    value: function getHistoricalData(symbol) {
      return this.http.get(this.histoDataUrl + symbol + '&tsym=USD&limit=730&api_key=' + this.apiKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (result) {
        return {
          data: result,
          symbol: symbol
        };
      }));
    }
  }, {
    key: "getCryptoIdFromSymbol",
    value: function getCryptoIdFromSymbol(symbol) {
      return this.http.get(this.allCoinsDataUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (result) {
        var crypto = result['Data'][symbol];
        return crypto;
      }));
    }
  }, {
    key: "transformData",
    value: function transformData(data) {
      var transformedData = [];
      this.coins = [];

      if (data['Message'] === 'Success' && data['HasWarning'] === false && data['Data'].length !== 0) {
        var indexes = Object.keys(data['Data']);

        for (var _i = 0, _indexes = indexes; _i < _indexes.length; _i++) {
          var idx = _indexes[_i];
          var newCoin = new _core_interfaces__WEBPACK_IMPORTED_MODULE_4__.CoinItem();
          transformedData.push((0,_core_utils__WEBPACK_IMPORTED_MODULE_3__.flattenObject)(data['Data'][idx]));
          (0,_core_utils__WEBPACK_IMPORTED_MODULE_3__.fillFromJSON)(newCoin, transformedData[idx]);

          if (newCoin.changePct24Hour >= 0) {
            newCoin.dailyScale = true;
          } else {
            newCoin.dailyScale = false;
          }

          newCoin.rank = Number(idx) + 1;
          this.coins.push(newCoin);
        }
      } else {
        for (var i = 0; i < _assets_offlineData__WEBPACK_IMPORTED_MODULE_2__.offlineData.length; i++) {
          var coin = new _core_interfaces__WEBPACK_IMPORTED_MODULE_4__.CoinItem();
          (0,_core_utils__WEBPACK_IMPORTED_MODULE_3__.fillFromJSON)(coin, _assets_offlineData__WEBPACK_IMPORTED_MODULE_2__.offlineData[i]);
          this.coins.push(coin);
        }
      }

      return (0,_core_utils__WEBPACK_IMPORTED_MODULE_3__.sortDataByKey)(this.coins, 'rank');
    }
  }]);

  return DataService;
}();

DataService.ɵfac = function DataService_Factory(t) {
  return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
};

DataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: DataService,
  factory: DataService.ɵfac
});

/***/ }),

/***/ 570:
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": function() { return /* binding */ SignupComponent; }
/* harmony export */ });
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ 4903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 9606);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);








var _c0 = ["snack"];
var SignupComponent = /*#__PURE__*/function () {
  function SignupComponent(router, authService) {
    (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignupComponent);

    this.router = router;
    this.authService = authService;
    this.state = '';
  }

  (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SignupComponent, [{
    key: "onSubmit",
    value: function onSubmit(formData) {
      var _this = this;

      if (formData.valid) {
        this.authService.signUp(formData.value.email, formData.value.password).then(function () {
          _this.router.navigate(['/login']);
        }).catch(function (err) {
          _this.snack.open(err.message);
        });
      }
    }
  }]);

  return SignupComponent;
}();

SignupComponent.ɵfac = function SignupComponent_Factory(t) {
  return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthServiceService));
};

SignupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SignupComponent,
  selectors: [["app-signup"]],
  viewQuery: function SignupComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.snack = _t.first);
    }
  },
  hostVars: 1,
  hostBindings: function SignupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsyntheticHostProperty"]("@moveIn", undefined);
    }
  },
  decls: 25,
  vars: 4,
  consts: [[1, "form-container"], ["id", "lockIcon", "name", "person"], [3, "ngSubmit"], ["formData", "ngForm"], ["igxLabel", "", "for", "email"], ["igxInput", "", "name", "email", "type", "email", "required", "", 3, "ngModel", "ngModelChange"], ["name", "email"], ["igxLabel", "", "for", "password"], ["igxInput", "", "name", "password", "type", "password", "required", "", 3, "ngModel", "ngModelChange"], ["name", "lock"], [1, "signup-form-actions"], ["igxButton", "flat", "igxRipple", "", "routerLink", "/login", "id", "goback"], ["igxButton", "raised", "igxRipple", "", "type", "submit", 1, "basic-btn", 3, "disabled"], [1, "sbPosition"], [3, "autoHide"], ["snack", ""]],
  template: function SignupComponent_Template(rf, ctx) {
    if (rf & 1) {
      var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "igx-icon", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_3_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

        return ctx.onSubmit(_r0);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "igx-input-group");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Email address");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "igx-suffix");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "igx-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "igx-input-group");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "igx-suffix");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "igx-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Go back");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Create my account");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "igx-snackbar", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.password);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !_r0.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoHide", true);
    }
  },
  directives: [_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxInputGroupComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxLabelDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxSuffixDirective, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxButtonDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxRippleDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxSnackbarComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"],
  data: {
    animation: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.moveIn)(), (0,_router_animations__WEBPACK_IMPORTED_MODULE_2__.fallIn)()]
  }
});

/***/ }),

/***/ 3269:
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticsComponent": function() { return /* binding */ StatisticsComponent; }
/* harmony export */ });
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5670);
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 9606);
/* harmony import */ var igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! igniteui-angular-charts */ 4873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);











var _c0 = ["combo"];
var StatisticsComponent = /*#__PURE__*/function () {
  function StatisticsComponent(dataService, route, cdr, zone) {
    var _this = this;

    (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StatisticsComponent);

    this.dataService = dataService;
    this.route = route;
    this.cdr = cdr;
    this.zone = zone;
    this.int = 0;
    this.data = [];
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (params) {
      return params.getAll('cryptoName') || route.routeConfig.data.cryptoName;
    })).subscribe(function (res) {
      _this.cryptoName = res.length === 0 ? {
        name: 'Bitcoin',
        symbol: 'BTC'
      } : {
        name: res[0].split(',')[1],
        symbol: res[0].split(',')[0]
      };
    });
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (params) {
      return params.get('daysCount') || route.routeConfig.data.daysCount;
    })).subscribe(function (res) {
      return _this.daysCount = res;
    });
  }

  (0,D_Dev_crypto_portfolio_app_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(StatisticsComponent, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      // this.getAndTransformData();
      this.chart.overlayTypes.add(igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_4__.FinancialOverlayType.PriceChannel);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this2 = this;

      this.getAndTransformData();
      this.combo.selectionChanging.subscribe(function (evt) {
        if (_this2.coins) {
          if (evt.newSelection.length === 0) {
            _this2.clearChartData();
          } else {
            var coin = evt.added.length !== 0 ? evt.added : evt.removed;
            var removeRecord = evt.added.length !== 0 ? false : true;

            _this2.fillChart(coin, removeRecord);
          }
        }
      });
    }
  }, {
    key: "fillChart",
    value: function fillChart(obj, removeRecord) {
      var _this3 = this;

      this.dataService.getHistoricalData(obj).subscribe(function (res) {
        var returnedData = Object.assign(res.data).Data.map(function (item) {
          // Transform data for the Chart. Multiply by 1000 because Date() requires miliseconds
          var dateObject = new Date(item.time * 1000);
          item.time = dateObject;
          return item;
        });

        if (removeRecord) {
          // Removing data item
          _this3.data = _this3.arrayRemove(_this3.data, obj[0]);

          _this3.chart.notifyInsertItem(_this3.data, _this3.data.length - 1, [returnedData, returnedData.title = obj[0]]);
        } else {
          // Adding data item
          _this3.data.push([returnedData, returnedData.title = obj[0]]);

          _this3.chart.notifyInsertItem(_this3.data, _this3.data.length - 1, [returnedData, returnedData.title = obj[0]]);
        }
      });
    }
  }, {
    key: "arrayRemove",
    value: function arrayRemove(arr, value) {
      return arr.filter(function (item) {
        return item[1] !== value;
      });
    } // Fill coins collection

  }, {
    key: "getAndTransformData",
    value: function getAndTransformData() {
      var _this4 = this;

      this.dataService.getData().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (data) {
        var obj = [];

        for (var index = 0; index < data.length; index++) {
          var name = data[index]['fullName'];
          var symbol = data[index]['name'];
          obj.push({
            name: name,
            symbol: symbol
          });
        }

        return obj;
      })).subscribe(function (res) {
        // set combo datasource
        _this4.coins = res; // Or use
        // this.cdr.detectChanges();

        _this4.zone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)()).subscribe(function () {
          _this4.combo.select([_this4.cryptoName.symbol]);
        });
      });
    }
  }, {
    key: "clearChartData",
    value: function clearChartData() {
      this.data = [];
    }
  }]);

  return StatisticsComponent;
}();

StatisticsComponent.ɵfac = function StatisticsComponent_Factory(t) {
  return new (t || StatisticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone));
};

StatisticsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: StatisticsComponent,
  selectors: [["app-statistics"]],
  viewQuery: function StatisticsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 7, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxComboComponent);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_4__.IgxFinancialChartComponent, 7);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.combo = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    }
  },
  decls: 6,
  vars: 7,
  consts: [[1, "sample-wrapper"], [1, "chart-wrapper"], [1, "content-span"], ["placeholder", "Cryptocurrencies", "searchPlaceholder", "Search...", 3, "itemsMaxHeight", "data", "displayKey", "valueKey"], ["combo", ""], ["height", "100%", "width", "100%", "crosshairsDisplayMode", "both", "crosshairsAnnotationEnabled", "true", "chartType", "candle", "trendLineType", "ExponentialFit", "indicatorTypes", "StochRSI", "finalValueAnnotationsVisible", "true", 2, "margin-top", "20px", 3, "dataSource", "isToolbarVisible", "crosshairsAnnotationEnabled"]],
  template: function StatisticsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "igx-combo", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "igx-financial-chart", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("itemsMaxHeight", 255)("data", ctx.coins)("displayKey", "name")("valueKey", "symbol");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.data)("isToolbarVisible", true)("crosshairsAnnotationEnabled", true);
    }
  },
  directives: [_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxComboComponent, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_4__.IgxFinancialChartComponent],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n  .dark-theme .main igx-financial-chart .ig-tooltip-container-background {\n  background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FBQ0Y7O0FBSUk7RUFDRSxpQkFBQTtBQUROIiwiZmlsZSI6InN0YXRpc3RpY3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZGFyay10aGVtZSAubWFpbiB7XHJcbiAgaWd4LWZpbmFuY2lhbC1jaGFydCB7XHJcbiAgICAuaWctdG9vbHRpcC1jb250YWluZXItYmFja2dyb3VuZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 9726:
/*!***********************************!*\
  !*** ./src/assets/offlineData.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "offlineData": function() { return /* binding */ offlineData; }
/* harmony export */ });
var offlineData = [{
  'rank': 1,
  'id': '1182',
  'fullName': 'Bitcoin',
  'price': 3589.16,
  'supply': 17539500,
  'changePct24Hour': -0.21296589765404744,
  'proofType': 'PoW',
  'algorithm': 'SHA256',
  'imageUrl': '/media/19633/btc.png',
  'changeUSD24H': -7.660000000000309,
  'highUSD24H': 3646.02,
  'volumeUSD24H': 37762.9865940754,
  'dailyScale': false
}, {
  'rank': 2,
  'id': '5031',
  'fullName': 'XRP',
  'price': 0.2999,
  'supply': 99991850794,
  'changePct24Hour': -1.2187088274044733,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/34477776/xrp.png',
  'changeUSD24H': -0.003699999999999981,
  'highUSD24H': 0.3072,
  'volumeUSD24H': 35662673.807077914,
  'dailyScale': false
}, {
  'rank': 3,
  'id': '7605',
  'fullName': 'Ethereum',
  'price': 121.84,
  'supply': 104870951.5616,
  'changePct24Hour': -0.2701154129491678,
  'proofType': 'PoW',
  'algorithm': 'Ethash',
  'imageUrl': '/media/20646/eth_logo.png',
  'changeUSD24H': -0.3299999999999983,
  'highUSD24H': 125.23,
  'volumeUSD24H': 450165.98764466,
  'dailyScale': false
}, {
  'rank': 4,
  'id': '166503',
  'fullName': 'EOS',
  'price': 2.82,
  'supply': 1033526351.7597,
  'changePct24Hour': 0.714285714285715,
  'proofType': 'DPoS',
  'algorithm': 'DPoS',
  'imageUrl': '/media/1383652/eos_1.png',
  'changeUSD24H': 0.020000000000000018,
  'highUSD24H': 2.93,
  'volumeUSD24H': 2302921.9322177703,
  'dailyScale': true
}, {
  'rank': 5,
  'id': '3808',
  'fullName': 'Litecoin',
  'price': 42.05,
  'supply': 60480599.7738777,
  'changePct24Hour': 0.8877159309021052,
  'proofType': 'PoW',
  'algorithm': 'Scrypt',
  'imageUrl': '/media/35309662/ltc.png',
  'changeUSD24H': 0.36999999999999744,
  'highUSD24H': 44.79,
  'volumeUSD24H': 557742.7757938594,
  'dailyScale': true
}, {
  'rank': 6,
  'id': '202330',
  'fullName': 'Bitcoin Cash',
  'price': 120.87,
  'supply': 17539471.0449731,
  'changePct24Hour': -0.8856088560885594,
  'proofType': 'PoW',
  'algorithm': 'SHA256',
  'imageUrl': '/media/1383919/12-bitcoin-cash-square-crop-small-grn.png',
  'changeUSD24H': -1.0799999999999983,
  'highUSD24H': 124.51,
  'volumeUSD24H': 26543.182984569998,
  'dailyScale': false
}, {
  'rank': 7,
  'id': '171986',
  'fullName': 'Tether',
  'price': 0.9901,
  'supply': 2021459017,
  'changePct24Hour': -0.010098969905068571,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/1383672/usdt.png',
  'changeUSD24H': -0.00009999999999998899,
  'highUSD24H': 0.9918,
  'volumeUSD24H': 3794356.3917094897,
  'dailyScale': false
}, {
  'rank': 8,
  'id': '204788',
  'fullName': 'Binance Coin',
  'price': 9.76,
  'supply': 189175490.242499,
  'changePct24Hour': 4.49678800856531,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/1383947/bnb.png',
  'changeUSD24H': 0.41999999999999993,
  'highUSD24H': 11.86,
  'volumeUSD24H': 10153.39899867,
  'dailyScale': true
}, {
  'rank': 9,
  'id': '310829',
  'fullName': 'TRON',
  'price': 0.02404,
  'supply': 66682042955.6418,
  'changePct24Hour': 1.1784511784511742,
  'proofType': 'DPoS',
  'algorithm': 'N/A',
  'imageUrl': '/media/34477805/trx.jpg',
  'changeUSD24H': 0.000279999999999999,
  'highUSD24H': 0.02456,
  'volumeUSD24H': 10928199.477149459,
  'dailyScale': true
}, {
  'rank': 10,
  'id': '4614',
  'fullName': 'Stellar',
  'price': 0.07797,
  'supply': 19170868660,
  'changePct24Hour': 2.148565439538848,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/20696/str.png',
  'changeUSD24H': 0.0016400000000000026,
  'highUSD24H': 0.08211,
  'volumeUSD24H': 8704544.40632135,
  'dailyScale': true
}, {
  'rank': 11,
  'id': '926591',
  'fullName': 'Bitcoin SV',
  'price': 62.36,
  'supply': 17539471.0449731,
  'changePct24Hour': -2.3947409610267667,
  'proofType': 'N/A',
  'algorithm': 'SHA256',
  'imageUrl': '/media/35309257/bsv1.png',
  'changeUSD24H': -1.5300000000000011,
  'highUSD24H': 64.11,
  'volumeUSD24H': 7014.96279241,
  'dailyScale': false
}, {
  'rank': 12,
  'id': '321992',
  'fullName': 'Cardano',
  'price': 0.04066,
  'supply': 25927070538,
  'changePct24Hour': 0.17245627001724714,
  'proofType': 'PoS',
  'algorithm': 'Ouroboros',
  'imageUrl': '/media/12318177/ada.png',
  'changeUSD24H': 0.00007000000000000062,
  'highUSD24H': 0.04144,
  'volumeUSD24H': 1515023.96859837,
  'dailyScale': true
}, {
  'rank': 13,
  'id': '5038',
  'fullName': 'Monero',
  'price': 47.49,
  'supply': 16794641.2589585,
  'changePct24Hour': -0.8352474420547058,
  'proofType': 'PoW',
  'algorithm': 'CryptoNight-V7',
  'imageUrl': '/media/19969/xmr.png',
  'changeUSD24H': -0.3999999999999986,
  'highUSD24H': 49.06,
  'volumeUSD24H': 32356.227137590013,
  'dailyScale': false
}, {
  'rank': 14,
  'id': '127356',
  'fullName': 'IOTA',
  'price': 0.2752,
  'supply': 2779530283,
  'changePct24Hour': 1.775147928994093,
  'proofType': 'Tangle',
  'algorithm': 'N/A',
  'imageUrl': '/media/1383540/iota_logo.png',
  'changeUSD24H': 0.0048000000000000265,
  'highUSD24H': 0.2839,
  'volumeUSD24H': 5188379.92359467,
  'dailyScale': true
}, {
  'rank': 15,
  'id': '3807',
  'fullName': 'Dash',
  'price': 79.41,
  'supply': 8632430.03999772,
  'changePct24Hour': 0.12608750472827426,
  'proofType': 'PoW/PoS',
  'algorithm': 'X11',
  'imageUrl': '/media/33842920/dash.png',
  'changeUSD24H': 0.09999999999999432,
  'highUSD24H': 81.13,
  'volumeUSD24H': 11777.250316670003,
  'dailyScale': true
}, {
  'rank': 16,
  'id': '771595',
  'fullName': 'Huobi Token',
  'price': 1.092540304,
  'supply': 500000000,
  'changePct24Hour': -0.5878510777269847,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/27010813/ht.png',
  'changeUSD24H': -0.0064604880000000975,
  'highUSD24H': 1.117664424,
  'volumeUSD24H': 0,
  'dailyScale': false
}, {
  'rank': 17,
  'id': '41192',
  'fullName': 'Maker',
  'price': 519.0384,
  'supply': 1000000,
  'changePct24Hour': -2.2935779816513913,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/1382296/mkr.png',
  'changeUSD24H': -12.184000000000083,
  'highUSD24H': 545.8432,
  'volumeUSD24H': 398.63801617,
  'dailyScale': false
}, {
  'rank': 18,
  'id': '27368',
  'fullName': 'NEO',
  'price': 8.18,
  'supply': 65000000,
  'changePct24Hour': 1.6149068322981242,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/1383858/neo.jpg',
  'changeUSD24H': 0.129999999999999,
  'highUSD24H': 8.57,
  'volumeUSD24H': 200464.27822384992,
  'dailyScale': true
}, {
  'rank': 19,
  'id': '218906',
  'fullName': 'Dentacoin',
  'price': 0.0000621384,
  'supply': 8000000000000,
  'changePct24Hour': 0,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/1383999/dcn.png',
  'changeUSD24H': 0,
  'highUSD24H': 0.0000682304,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 20,
  'id': '5324',
  'fullName': 'Ethereum Classic',
  'price': 4.14,
  'supply': 108298586,
  'changePct24Hour': -0.956937799043063,
  'proofType': 'PoW',
  'algorithm': 'Ethash',
  'imageUrl': '/media/33752295/etc_new.png',
  'changeUSD24H': -0.040000000000000036,
  'highUSD24H': 4.28,
  'volumeUSD24H': 344093.5471517499,
  'dailyScale': false
}, {
  'rank': 21,
  'id': '309621',
  'fullName': 'ChainLink',
  'price': 0.425674376,
  'supply': 1000000000,
  'changePct24Hour': -0.5867560771165046,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/35309382/link.png',
  'changeUSD24H': -0.002512411999999964,
  'highUSD24H': 0.4306992,
  'volumeUSD24H': 0,
  'dailyScale': false
}, {
  'rank': 22,
  'id': '5285',
  'fullName': 'NEM',
  'price': 0.0426,
  'supply': 8999999999,
  'changePct24Hour': 3.222679912769561,
  'proofType': 'PoI',
  'algorithm': 'N/A',
  'imageUrl': '/media/20490/xem.png',
  'changeUSD24H': 0.0013299999999999979,
  'highUSD24H': 0.04663,
  'volumeUSD24H': 341702.69333632,
  'dailyScale': true
}, {
  'rank': 23,
  'id': '808414',
  'fullName': 'Ontology',
  'price': 0.66329696,
  'supply': 597000000,
  'changePct24Hour': 16.47411210954215,
  'proofType': 'PoS',
  'algorithm': 'VBFT',
  'imageUrl': '/media/30001663/ont.jpg',
  'changeUSD24H': 0.09381680000000003,
  'highUSD24H': 0.67584648,
  'volumeUSD24H': 79509.44057975999,
  'dailyScale': true
}, {
  'rank': 24,
  'id': '24854',
  'fullName': 'ZCash',
  'price': 51.15,
  'supply': 5900443.75,
  'changePct24Hour': -2.142720489764692,
  'proofType': 'PoW',
  'algorithm': 'Equihash',
  'imageUrl': '/media/351360/zec.png',
  'changeUSD24H': -1.1200000000000045,
  'highUSD24H': 52.44,
  'volumeUSD24H': 11225.806046429998,
  'dailyScale': false
}, {
  'rank': 25,
  'id': '916868',
  'fullName': 'Karatgold coin',
  'price': 0.024599496,
  'supply': 12000000000,
  'changePct24Hour': -7.385321100917438,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/34333424/kbc.png',
  'changeUSD24H': -0.001961624000000002,
  'highUSD24H': 0.02656112,
  'volumeUSD24H': 19997.20472034,
  'dailyScale': false
}, {
  'rank': 26,
  'id': '899553',
  'fullName': 'QuarkChain',
  'price': 0.0297541364,
  'supply': 10000000000,
  'changePct24Hour': 0.6067961165048558,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/33434307/qkc.jpg',
  'changeUSD24H': 0.0001794580000000004,
  'highUSD24H': 0.0302566188,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 27,
  'id': '20131',
  'fullName': 'Waves',
  'price': 2.72,
  'supply': 100000000,
  'changePct24Hour': -0.7299270072992706,
  'proofType': 'LPoS',
  'algorithm': 'Leased POS',
  'imageUrl': '/media/27010639/waves2.png',
  'changeUSD24H': -0.020000000000000018,
  'highUSD24H': 2.82,
  'volumeUSD24H': 16806.301555539998,
  'dailyScale': false
}, {
  'rank': 28,
  'id': '925809',
  'fullName': 'USD Coin',
  'price': 1.012969737279681,
  'supply': 247646591.56,
  'changePct24Hour': 0.38244097106753666,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/34835941/usdc.png',
  'changeUSD24H': 0.0038592519392801616,
  'highUSD24H': 1.02326362643823,
  'volumeUSD24H': 656.3509615400001,
  'dailyScale': true
}, {
  'rank': 29,
  'id': '925591',
  'fullName': 'Beauty Chain',
  'price': 0.030687318,
  'supply': 7000000000,
  'changePct24Hour': 1.1834319526627244,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/34478407/bec.png',
  'changeUSD24H': 0.0003589160000000008,
  'highUSD24H': 0.0329843804,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 30,
  'id': '186277',
  'fullName': '0x',
  'price': 0.2253,
  'supply': 1000000000,
  'changePct24Hour': -0.8798944126704802,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/1383799/zrx.png',
  'changeUSD24H': -0.0020000000000000018,
  'highUSD24H': 0.232,
  'volumeUSD24H': 1977680.42926734,
  'dailyScale': false
}, {
  'rank': 31,
  'id': '4432',
  'fullName': 'Dogecoin',
  'price': 0.001885,
  'supply': 118279410291.783,
  'changePct24Hour': 0.10621348911311997,
  'proofType': 'PoW',
  'algorithm': 'Scrypt',
  'imageUrl': '/media/19684/doge.png',
  'changeUSD24H': 0.0000020000000000000486,
  'highUSD24H': 0.001895,
  'volumeUSD24H': 16331481.17787663,
  'dailyScale': true
}, {
  'rank': 32,
  'id': '868276',
  'fullName': 'Holo',
  'price': 0.0013279892,
  'supply': 177619433541.141,
  'changePct24Hour': 12.121212121212126,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/30002313/hot.jpg',
  'changeUSD24H': 0.00014356640000000006,
  'highUSD24H': 0.0013638808,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 33,
  'id': '236131',
  'fullName': 'Vechain',
  'price': 0.003957,
  'supply': 55454734800,
  'changePct24Hour': 1.2538382804503472,
  'proofType': 'Proof of Authority',
  'algorithm': 'VeChainThor Authority',
  'imageUrl': '/media/12318129/ven.png',
  'changeUSD24H': 0.000048999999999999565,
  'highUSD24H': 0.004023,
  'volumeUSD24H': 2703250.83432756,
  'dailyScale': true
}, {
  'rank': 34,
  'id': '716725',
  'fullName': 'Zilliqa',
  'price': 0.016869052,
  'supply': 12599999804.24,
  'changePct24Hour': 0.42735042735041584,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/27010464/zil.png',
  'changeUSD24H': 0.00007178319999999808,
  'highUSD24H': 0.0169767268,
  'volumeUSD24H': 327820.35238583,
  'dailyScale': true
}, {
  'rank': 35,
  'id': '844139',
  'fullName': 'True USD',
  'price': 1.01443984,
  'supply': 206951837.11,
  'changePct24Hour': 0.4948702474351309,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/30001972/tusd.png',
  'changeUSD24H': 0.004995440000000073,
  'highUSD24H': 1.02369968,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 36,
  'id': '107672',
  'fullName': 'Basic Attention Token',
  'price': 0.1258718412,
  'supply': 1500000000,
  'changePct24Hour': -0.056996295240816085,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/1383370/bat.png',
  'changeUSD24H': -0.00007178320000000848,
  'highUSD24H': 0.1307172072,
  'volumeUSD24H': 159183.57701514,
  'dailyScale': false
}, {
  'rank': 37,
  'id': '112392',
  'fullName': 'QTUM',
  'price': 1.9031408,
  'supply': 100000000,
  'changePct24Hour': -0.19169329073481686,
  'proofType': 'PoS',
  'algorithm': 'POS 3.0',
  'imageUrl': '/media/1383382/qtum.png',
  'changeUSD24H': -0.0036551999999998586,
  'highUSD24H': 1.9567504,
  'volumeUSD24H': 13129.946923529998,
  'dailyScale': false
}, {
  'rank': 38,
  'id': '731516',
  'fullName': 'Pundi X',
  'price': 0.0006819404,
  'supply': 274555193861,
  'changePct24Hour': 5.555555555555576,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/27010505/pxs.png',
  'changeUSD24H': 0.00003589160000000012,
  'highUSD24H': 0.000717832,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 39,
  'id': '928790',
  'fullName': 'Quant',
  'price': 4.02344836,
  'supply': 45467000,
  'changePct24Hour': -2.9437229437229178,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/35309600/qnt.jpg',
  'changeUSD24H': -0.12203143999999888,
  'highUSD24H': 4.4146668,
  'volumeUSD24H': 0,
  'dailyScale': false
}, {
  'rank': 40,
  'id': '347235',
  'fullName': 'Bitcoin Gold',
  'price': 10.25,
  'supply': 17202361.088994,
  'changePct24Hour': 0.7866273352999024,
  'proofType': 'PoW',
  'algorithm': 'Equihash',
  'imageUrl': '/media/27011062/btg.png',
  'changeUSD24H': 0.08000000000000007,
  'highUSD24H': 10.4,
  'volumeUSD24H': 16490.00402888,
  'dailyScale': true
}, {
  'rank': 41,
  'id': '187440',
  'fullName': 'OmiseGo',
  'price': 1.15,
  'supply': 140245398.245133,
  'changePct24Hour': 0,
  'proofType': 'PoS',
  'algorithm': 'N/A',
  'imageUrl': '/media/1383814/omisego.png',
  'changeUSD24H': 0,
  'highUSD24H': 1.18,
  'volumeUSD24H': 111956.86621527,
  'dailyScale': true
}, {
  'rank': 42,
  'id': '16713',
  'fullName': 'Decred',
  'price': 16.60345416,
  'supply': 9321586.23337609,
  'changePct24Hour': 0.021621621621604113,
  'proofType': 'PoW/PoS',
  'algorithm': 'BLAKE256',
  'imageUrl': '/media/1382607/decred.png',
  'changeUSD24H': 0.0035891599999970936,
  'highUSD24H': 16.70395064,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 43,
  'id': '345420',
  'fullName': 'Revain',
  'price': 0.1490578148,
  'supply': 1000000000,
  'changePct24Hour': -2.3742360131640887,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/12318360/r.png',
  'changeUSD24H': -0.003625051600000012,
  'highUSD24H': 0.1577794736,
  'volumeUSD24H': 0,
  'dailyScale': false
}, {
  'rank': 44,
  'id': '17778',
  'fullName': 'Augur',
  'price': 13.38397764,
  'supply': 11000000,
  'changePct24Hour': -0.5865102639296188,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/350815/augur-logo.png',
  'changeUSD24H': -0.07896152000000001,
  'highUSD24H': 13.57779228,
  'volumeUSD24H': 1081.35821833,
  'dailyScale': false
}, {
  'rank': 45,
  'id': '716522',
  'fullName': 'IOS token',
  'price': 0.0067117292,
  'supply': 21000000000,
  'changePct24Hour': 1.6304347826086913,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/27010459/iost.png',
  'changeUSD24H': 0.00010767479999999972,
  'highUSD24H': 0.006819403999999999,
  'volumeUSD24H': 602197.42125474,
  'dailyScale': true
}, {
  'rank': 46,
  'id': '137013',
  'fullName': 'Status Network Token',
  'price': 0.0188789816,
  'supply': 6804870174.87817,
  'changePct24Hour': 1.7408123791102514,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/1383568/snt.png',
  'changeUSD24H': 0.0003230244,
  'highUSD24H': 0.0203864288,
  'volumeUSD24H': 551781.51579053,
  'dailyScale': true
}, {
  'rank': 47,
  'id': '409492',
  'fullName': 'Bitcoin Diamond',
  'price': 0.70347536,
  'supply': 183534024.889807,
  'changePct24Hour': 0,
  'proofType': 'PoW/PoS',
  'algorithm': 'X13',
  'imageUrl': '/media/16404872/bcd.png',
  'changeUSD24H': 0,
  'highUSD24H': 0.71065368,
  'volumeUSD24H': 128.5,
  'dailyScale': true
}, {
  'rank': 48,
  'id': '19745',
  'fullName': 'Lisk',
  'price': 1.132021064,
  'supply': 114640373,
  'changePct24Hour': 0.7345895879910551,
  'proofType': 'DPoS',
  'algorithm': 'DPoS',
  'imageUrl': '/media/27011060/lsk.png',
  'changeUSD24H': 0.008255067999999977,
  'highUSD24H': 1.141711796,
  'volumeUSD24H': 7637.581561570001,
  'dailyScale': true
}, {
  'rank': 49,
  'id': '866629',
  'fullName': 'FuturoCoin',
  'price': 3.87988196,
  'supply': 31801461.1867843,
  'changePct24Hour': 4.444444444444444,
  'proofType': 'PoW',
  'algorithm': 'X11',
  'imageUrl': '/media/30002288/fto.png',
  'changeUSD24H': 0.16510135999999997,
  'highUSD24H': 4.027037519999999,
  'volumeUSD24H': 202.62729233,
  'dailyScale': true
}, {
  'rank': 50,
  'id': '925939',
  'fullName': 'Paxos Standard',
  'price': 1.012296444001329,
  'supply': 116044027.41,
  'changePct24Hour': 0.26586905948818446,
  'proofType': 'PoW',
  'algorithm': 'N/A',
  'imageUrl': '/media/34835691/pax.png',
  'changeUSD24H': 0.002684246454096817,
  'highUSD24H': 1.028012149848127,
  'volumeUSD24H': 2854.46365658,
  'dailyScale': true
}, {
  'rank': 51,
  'id': '66193',
  'fullName': 'Gnosis',
  'price': 11.1981792,
  'supply': 10000000,
  'changePct24Hour': 0.25706940874035844,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/1383083/gnosis-logo.png',
  'changeUSD24H': 0.02871327999999984,
  'highUSD24H': 11.55350604,
  'volumeUSD24H': 167.71282036,
  'dailyScale': true
}, {
  'rank': 52,
  'id': '172091',
  'fullName': 'Nano',
  'price': 0.8509898359999999,
  'supply': 133248289,
  'changePct24Hour': 1.2815036309269474,
  'proofType': 'PoW',
  'algorithm': 'Blake2b',
  'imageUrl': '/media/30001997/untitled-1.png',
  'changeUSD24H': 0.01076747999999994,
  'highUSD24H': 0.8570914079999999,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 53,
  'id': '913066',
  'fullName': 'Eternal Token',
  'price': 0.593288148,
  'supply': 200000000,
  'changePct24Hour': -7.910863509749308,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/34155549/xet.jpg',
  'changeUSD24H': -0.05096607200000003,
  'highUSD24H': 0.693066796,
  'volumeUSD24H': 0,
  'dailyScale': false
}, {
  'rank': 54,
  'id': '218008',
  'fullName': 'Bytom',
  'price': 0.0781719048,
  'supply': 1407000000,
  'changePct24Hour': 0.8333333333333425,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/1383996/btm.png',
  'changeUSD24H': 0.000646048800000007,
  'highUSD24H': 0.079679352,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 55,
  'id': '4430',
  'fullName': 'DigiByte',
  'price': 0.0089370084,
  'supply': 11406219141,
  'changePct24Hour': 1.219512195121938,
  'proofType': 'PoW',
  'algorithm': 'Multiple',
  'imageUrl': '/media/12318264/7638-nty_400x400.jpg',
  'changeUSD24H': 0.00010767479999999885,
  'highUSD24H': 0.0090446832,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 56,
  'id': '5039',
  'fullName': 'Bitshares',
  'price': 0.04024628719412292,
  'supply': 2511953117,
  'changePct24Hour': 1.6106442577030349,
  'proofType': 'PoS',
  'algorithm': 'SHA-512',
  'imageUrl': '/media/20705/bts.png',
  'changeUSD24H': 0.0006379494179633363,
  'highUSD24H': 0.04033689117249781,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 57,
  'id': '141331',
  'fullName': 'Dent',
  'price': 0.0009331815999999999,
  'supply': 100000000000,
  'changePct24Hour': -3.7037037037037055,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/1383613/dent.png',
  'changeUSD24H': -0.000035891600000000014,
  'highUSD24H': 0.0010049648,
  'volumeUSD24H': 0,
  'dailyScale': false
}, {
  'rank': 58,
  'id': '714811',
  'fullName': 'Theta',
  'price': 0.0916312548,
  'supply': 1000000000,
  'changePct24Hour': -3.441754916792736,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/27010450/theta.png',
  'changeUSD24H': -0.0032661355999999975,
  'highUSD24H': 0.09654840399999999,
  'volumeUSD24H': 1210.31226014,
  'dailyScale': false
}, {
  'rank': 59,
  'id': '4433',
  'fullName': 'Verge',
  'price': 0.005886222399999999,
  'supply': 15653483779.5879,
  'changePct24Hour': 0,
  'proofType': 'PoW',
  'algorithm': 'Multiple',
  'imageUrl': '/media/12318032/xvg.png',
  'changeUSD24H': 0,
  'highUSD24H': 0.0059580056,
  'volumeUSD24H': 124607,
  'dailyScale': true
}, {
  'rank': 60,
  'id': '324068',
  'fullName': 'ICON Project',
  'price': 0.2217741964,
  'supply': 400228740,
  'changePct24Hour': 3.3450409767519727,
  'proofType': 'LFT',
  'algorithm': 'N/A',
  'imageUrl': '/media/12318192/icx.png',
  'changeUSD24H': 0.007178320000000016,
  'highUSD24H': 0.2271220448,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 61,
  'id': '199148',
  'fullName': 'Decentraland',
  'price': 0.034635394,
  'supply': 2534811617.00344,
  'changePct24Hour': 1.7932489451476876,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/1383903/mana.png',
  'changeUSD24H': 0.0006101572000000027,
  'highUSD24H': 0.03499431,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 62,
  'id': '26132',
  'fullName': 'Komodo',
  'price': 0.740084792,
  'supply': 111836982,
  'changePct24Hour': -11.804961505560302,
  'proofType': 'dPoW/PoW',
  'algorithm': 'Equihash',
  'imageUrl': '/media/351408/kmd.png',
  'changeUSD24H': -0.09906081599999994,
  'highUSD24H': 0.844170432,
  'volumeUSD24H': 0,
  'dailyScale': false
}, {
  'rank': 63,
  'id': '744820',
  'fullName': 'Polymath Network',
  'price': 0.0862475148,
  'supply': 1000000000,
  'changePct24Hour': -0.12468827930174431,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/27010571/poly.png',
  'changeUSD24H': -0.00010767479999999885,
  'highUSD24H': 0.0875396124,
  'volumeUSD24H': 0,
  'dailyScale': false
}, {
  'rank': 64,
  'id': '24294',
  'fullName': 'Stratis',
  'price': 0.848118508,
  'supply': 99213341.1704062,
  'changePct24Hour': -4.640839386602098,
  'proofType': 'PoW/PoS',
  'algorithm': 'X13',
  'imageUrl': '/media/351303/stratis-logo.png',
  'changeUSD24H': -0.041275339999999994,
  'highUSD24H': 0.8926240919999998,
  'volumeUSD24H': 0,
  'dailyScale': false
}, {
  'rank': 65,
  'id': '339617',
  'fullName': 'Power Ledger',
  'price': 0.0847759592,
  'supply': 1000000000,
  'changePct24Hour': 2.118460873324686,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/12318301/powr.png',
  'changeUSD24H': 0.0017586883999999997,
  'highUSD24H': 0.088472794,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 66,
  'id': '925154',
  'fullName': 'Bit-Z',
  'price': 0.075394592,
  'supply': 1186842105,
  'changePct24Hour': 6.671263575245645,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/34478146/bz.png',
  'changeUSD24H': 0.0047152079999999985,
  'highUSD24H': 0.078550248,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 67,
  'id': '318169',
  'fullName': 'Loopring',
  'price': 0.05401685799999999,
  'supply': 1395076054.52386,
  'changePct24Hour': -11.052009456264802,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/12318135/lrc.png',
  'changeUSD24H': -0.006711729200000016,
  'highUSD24H': 0.06158998559999999,
  'volumeUSD24H': 0,
  'dailyScale': false
}, {
  'rank': 68,
  'id': '166548',
  'fullName': 'Crypto.com',
  'price': 2.3722248,
  'supply': 31587682.3632061,
  'changePct24Hour': 13.992974238875894,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/34478435/mco.png',
  'changeUSD24H': 0.2911976000000003,
  'highUSD24H': 2.7560208,
  'volumeUSD24H': 5.416147580000001,
  'dailyScale': true
}, {
  'rank': 69,
  'id': '13072',
  'fullName': 'Siacoin',
  'price': 0.0022611708,
  'supply': 33098296530,
  'changePct24Hour': 1.612903225806447,
  'proofType': 'PoW',
  'algorithm': 'Blake2b',
  'imageUrl': '/media/20726/siacon-logo.png',
  'changeUSD24H': 0.000035891599999999906,
  'highUSD24H': 0.0022970624,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 70,
  'id': '299397',
  'fullName': 'Waltonchain',
  'price': 0.984865504,
  'supply': 70000000,
  'changePct24Hour': 0.36576444769569333,
  'proofType': 'N/A',
  'algorithm': 'Ethash',
  'imageUrl': '/media/12317959/wtc.png',
  'changeUSD24H': 0.003589160000000091,
  'highUSD24H': 0.9970686479999998,
  'volumeUSD24H': 565.2738,
  'dailyScale': true
}, {
  'rank': 71,
  'id': '893122',
  'fullName': 'IoTeX Network',
  'price': 0.0067476208,
  'supply': 10000000000,
  'changePct24Hour': 0,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/33187927/rsz_njsdvvpv_400x400.jpg',
  'changeUSD24H': 0,
  'highUSD24H': 0.006891187199999999,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 72,
  'id': '402714',
  'fullName': 'Quoine Liquid',
  'price': 0.066378432,
  'supply': 1000000000,
  'changePct24Hour': -6.776180698151949,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/15887431/qash.png',
  'changeUSD24H': -0.004824863999999998,
  'highUSD24H': 0.071605368,
  'volumeUSD24H': 4344.9804096200005,
  'dailyScale': false
}, {
  'rank': 73,
  'id': '348628',
  'fullName': 'Kucoin',
  'price': 0.365735404,
  'supply': 179939916,
  'changePct24Hour': 5.2359805845295835,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/12318389/kcs.png',
  'changeUSD24H': 0.018197041199999986,
  'highUSD24H': 0.36968348,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 74,
  'id': '338541',
  'fullName': 'Worldwide Asset eXchange',
  'price': 0.0351019848,
  'supply': 1850000000,
  'changePct24Hour': 0.7209062821833219,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/12318290/wax.png',
  'changeUSD24H': 0.00025124120000000194,
  'highUSD24H': 0.0354967924,
  'volumeUSD24H': 6604.79856316,
  'dailyScale': true
}, {
  'rank': 75,
  'id': '179896',
  'fullName': 'Populous',
  'price': 1.210623668,
  'supply': 53252246,
  'changePct24Hour': 1.3217182337038227,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/1383747/ppt.png',
  'changeUSD24H': 0.01579230400000009,
  'highUSD24H': 1.228210552,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 76,
  'id': '310297',
  'fullName': 'Eidoo',
  'price': 0.708141268,
  'supply': 89288327.072846,
  'changePct24Hour': 0.2031488065007701,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/12318082/eiboo.png',
  'changeUSD24H': 0.0014356640000000587,
  'highUSD24H': 0.7124482599999999,
  'volumeUSD24H': 7284.771164320001,
  'dailyScale': true
}, {
  'rank': 77,
  'id': '918501',
  'fullName': 'Aurora ',
  'price': 0.006372232,
  'supply': 10000000000,
  'changePct24Hour': 0.38387715930902594,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/34477737/aoa.jpg',
  'changeUSD24H': 0.000024368000000000306,
  'highUSD24H': 0.006713384,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 78,
  'id': '187347',
  'fullName': 'Storj',
  'price': 0.1396542156,
  'supply': 424999998,
  'changePct24Hour': 2.0456333595594005,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/20422/sjcx.png',
  'changeUSD24H': 0.002799544799999998,
  'highUSD24H': 0.1484835492,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 79,
  'id': '926388',
  'fullName': 'Alibabacoin',
  'price': 0.064066506,
  'supply': 1002157050.0106,
  'changePct24Hour': 8.181818181818151,
  'proofType': 'N/A',
  'algorithm': 'X13',
  'imageUrl': '/media/34836013/abbc_ticker.png',
  'changeUSD24H': 0.004845365999999983,
  'highUSD24H': 0.0666865928,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 80,
  'id': '33022',
  'fullName': 'Golem Network Token',
  'price': 0.05818028359999999,
  'supply': 1000000000,
  'changePct24Hour': 0.4337050805451966,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/351995/golem_logo.png',
  'changeUSD24H': 0.0002512411999999811,
  'highUSD24H': 0.05871865759999999,
  'volumeUSD24H': 16228.56098686,
  'dailyScale': true
}, {
  'rank': 81,
  'id': '918549',
  'fullName': 'Project Pai',
  'price': 0.0272058328,
  'supply': 2100000000,
  'changePct24Hour': -1.8134715025906751,
  'proofType': 'PoW',
  'algorithm': 'SHA256',
  'imageUrl': '/media/34477740/pai.jpg',
  'changeUSD24H': -0.0005024824000000004,
  'highUSD24H': 0.0281031228,
  'volumeUSD24H': 223048.06543849,
  'dailyScale': false
}, {
  'rank': 82,
  'id': '619555',
  'fullName': 'Nebulas',
  'price': 0.544834488,
  'supply': 100000000,
  'changePct24Hour': 2.498311951384203,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/20780653/nas.png',
  'changeUSD24H': 0.013279892000000015,
  'highUSD24H': 0.562421372,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 83,
  'id': '32699',
  'fullName': 'ARK',
  'price': 0.478076112,
  'supply': 108202084,
  'changePct24Hour': -2.4890190336749853,
  'proofType': 'DPoS',
  'algorithm': 'DPoS',
  'imageUrl': '/media/351931/ark.png',
  'changeUSD24H': -0.01220314400000011,
  'highUSD24H': 0.511814216,
  'volumeUSD24H': 0,
  'dailyScale': false
}, {
  'rank': 84,
  'id': '13280',
  'fullName': 'Factoids',
  'price': 5.96159476,
  'supply': 8753873,
  'changePct24Hour': -1.3657957244655545,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/1382863/fct1.png',
  'changeUSD24H': -0.08255067999999977,
  'highUSD24H': 6.13387444,
  'volumeUSD24H': 0,
  'dailyScale': false
}, {
  'rank': 85,
  'id': '5293',
  'fullName': 'MaidSafe Coin',
  'price': 0.1148172284,
  'supply': 452552412,
  'changePct24Hour': -0.9904054472299572,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/352247/maid.png',
  'changeUSD24H': -0.001148531199999997,
  'highUSD24H': 0.116468242,
  'volumeUSD24H': 0,
  'dailyScale': false
}, {
  'rank': 86,
  'id': '30173',
  'fullName': 'Ardor',
  'price': 0.05225816959999999,
  'supply': 998999495,
  'changePct24Hour': 1.1111111111110814,
  'proofType': 'PoS',
  'algorithm': 'N/A',
  'imageUrl': '/media/351736/ardr.png',
  'changeUSD24H': 0.0005742655999999846,
  'highUSD24H': 0.0525094108,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 87,
  'id': '139467',
  'fullName': 'Civic',
  'price': 0.0503918064,
  'supply': 1000000000,
  'changePct24Hour': 1.1527377521613944,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/1383611/cvc.png',
  'changeUSD24H': 0.0005742656000000054,
  'highUSD24H': 0.0508942888,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 88,
  'id': '926044',
  'fullName': 'HyperCash',
  'price': 1.126637324,
  'supply': 43855705.345052,
  'changePct24Hour': 3.120893561103824,
  'proofType': 'PoW/PoS',
  'algorithm': 'N/A',
  'imageUrl': '/media/34835738/hcash.png',
  'changeUSD24H': 0.034097020000000144,
  'highUSD24H': 1.192318952,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 89,
  'id': '318199',
  'fullName': 'Hshare',
  'price': 1.126637324,
  'supply': 43855733.569052,
  'changePct24Hour': 2.715968586387442,
  'proofType': 'PoW/PoS',
  'algorithm': 'N/A',
  'imageUrl': '/media/12318137/hsr.png',
  'changeUSD24H': 0.02979002800000008,
  'highUSD24H': 1.140993964,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 90,
  'id': '45260',
  'fullName': 'TenX',
  'price': 0.2326852428,
  'supply': 205218255.948578,
  'changePct24Hour': -2.2761531504371426,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/1383687/pay.png',
  'changeUSD24H': -0.005419631600000002,
  'highUSD24H': 0.2425554328,
  'volumeUSD24H': 0,
  'dailyScale': false
}, {
  'rank': 91,
  'id': '920190',
  'fullName': 'Scroll',
  'price': 0.048736,
  'supply': 1000000000,
  'changePct24Hour': 11.111111111111107,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/34477763/scrl.jpg',
  'changeUSD24H': 0.004873599999999999,
  'highUSD24H': 0.052890744,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 92,
  'id': '338335',
  'fullName': 'Enigma',
  'price': 0.2961415916,
  'supply': 150000000,
  'changePct24Hour': -4.601688056422681,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/12318287/eng.png',
  'changeUSD24H': -0.014284856799999912,
  'highUSD24H': 0.3205837712,
  'volumeUSD24H': 0,
  'dailyScale': false
}, {
  'rank': 93,
  'id': '816702',
  'fullName': 'TomoChain',
  'price': 0.46092072,
  'supply': 100000000,
  'changePct24Hour': 5.936712405488667,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/30001748/tomo.jpg',
  'changeUSD24H': 0.025830080000000033,
  'highUSD24H': 0.469084,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 94,
  'id': '900419',
  'fullName': 'Endor Protocol Token ',
  'price': 0.0286056052,
  'supply': 1500000000,
  'changePct24Hour': 2.3106546854942236,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/33752291/endor.png',
  'changeUSD24H': 0.0006460488,
  'highUSD24H': 0.0289645212,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 95,
  'id': '710156',
  'fullName': 'SingularityNET',
  'price': 0.0418496056,
  'supply': 1000000000,
  'changePct24Hour': -2.42677824267782,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/25792653/agi.png',
  'changeUSD24H': -0.0010408563999999981,
  'highUSD24H': 0.04306992,
  'volumeUSD24H': 3437.4876,
  'dailyScale': false
}, {
  'rank': 96,
  'id': '42433',
  'fullName': 'Private Instant Verified Transaction',
  'price': 0.70526994,
  'supply': 59037617.749476,
  'changePct24Hour': -0.20314880650075443,
  'proofType': 'PoW/PoS',
  'algorithm': 'Quark',
  'imageUrl': '/media/1382389/pivx.png',
  'changeUSD24H': -0.0014356639999999476,
  'highUSD24H': 0.722138992,
  'volumeUSD24H': 0,
  'dailyScale': false
}, {
  'rank': 97,
  'id': '178978',
  'fullName': 'FunFair',
  'price': 0.0037327264,
  'supply': 10999873621.398,
  'changePct24Hour': 0,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/1383738/fun.png',
  'changeUSD24H': 0,
  'highUSD24H': 0.0038045096,
  'volumeUSD24H': 471773.51362626,
  'dailyScale': true
}, {
  'rank': 98,
  'id': '15282',
  'fullName': 'CapriCoin',
  'price': 0.19628424,
  'supply': 201290423.082765,
  'changePct24Hour': -10.45025013896609,
  'proofType': 'PoW/PoS',
  'algorithm': 'X11',
  'imageUrl': '/media/350560/cpc.png',
  'changeUSD24H': -0.022905919999999996,
  'highUSD24H': 0.22016488,
  'volumeUSD24H': 21767.48291407,
  'dailyScale': false
}, {
  'rank': 99,
  'id': '836492',
  'fullName': 'Loom Network',
  'price': 0.0403062668,
  'supply': 1000000000,
  'changePct24Hour': 0.9892086330935204,
  'proofType': 'N/A',
  'algorithm': 'N/A',
  'imageUrl': '/media/30001890/untitled-1.png',
  'changeUSD24H': 0.0003948075999999981,
  'highUSD24H': 0.0411676652,
  'volumeUSD24H': 0,
  'dailyScale': true
}, {
  'rank': 100,
  'id': '847172',
  'fullName': 'Mithril',
  'price': 0.0384399036,
  'supply': 1000000000,
  'changePct24Hour': -7.192374350086651,
  'proofType': 'PoS',
  'algorithm': 'N/A',
  'imageUrl': '/media/30002012/mith.jpg',
  'changeUSD24H': -0.0029790027999999982,
  'highUSD24H': 0.041813714,
  'volumeUSD24H': 101209.7519051001,
  'dailyScale': false
}];

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
  production: false
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(function (err) {
  return console.log(err);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map