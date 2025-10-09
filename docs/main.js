"use strict";
(self["webpackChunkcryptoapp"] = self["webpackChunkcryptoapp"] || []).push([["main"],{

/***/ 80484:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 46916);
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statistics/statistics.component */ 47300);
/* harmony import */ var _block_grid_block_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block-grid/block-grid.component */ 25796);
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.guard */ 66016);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ 92080);
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email/email.component */ 44244);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ 60552);
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio/portfolio.component */ 18316);
/* harmony import */ var _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./block-list/block-list.component */ 73516);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 94280);












const routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'portfolio',
  component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_7__.PortfolioComponent,
  data: {
    text: 'My portfolio',
    iconName: 'account_box'
  },
  canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  data: {
    text: 'Top 100 Crypto`s',
    iconName: 'call_made'
  }
}, {
  path: 'block-grid',
  component: _block_grid_block_grid_component__WEBPACK_IMPORTED_MODULE_2__.BlockGridComponent,
  data: {
    text: 'Grid view',
    iconName: 'grid_on',
    subItem: true
  }
}, {
  path: 'block-list',
  component: _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_8__.BlockListComponent,
  data: {
    text: 'List view',
    iconName: 'list_alt',
    subItem: true
  }
}, {
  path: 'statistics',
  component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_1__.StatisticsComponent,
  data: {
    text: 'Volatility',
    iconName: 'insert_chart_outlined',
    cryptoName: 'ETH',
    daysCount: 100
  }
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent
}, {
  path: 'email',
  component: _email_email_component__WEBPACK_IMPORTED_MODULE_5__.EmailComponent
}, {
  path: 'signup',
  component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__.SignupComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes, {
      useHash: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 86108:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6560);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 80484);
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 27492);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 16088);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ 45359);










function AppComponent_ng_template_3_span_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u00A0\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_ng_template_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_ng_template_3_span_2_span_1_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "igx-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const route_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", route_r8.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", route_r8.subItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](route_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](route_r8.name);
  }
}
function AppComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_ng_template_3_span_2_Template, 6, 4, "span", 13);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isHeader", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.topNavLinks);
  }
}
function AppComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_7_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.changeTheme());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_8_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.changeTheme(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r15.name !== null ? "Hi " + ctx_r15.name : "");
  }
}
function AppComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_10_span_1_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_10_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.innerWidth > 650);
  }
}
function AppComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_ng_template_12_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class AppComponent {
  onResize() {
    this.innerWidth = window.innerWidth;
  }
  constructor(router, afAuth, authService) {
    this.router = router;
    this.afAuth = afAuth;
    this.authService = authService;
    this.darkTheme = false;
    this.topNavLinks = [];
    this.isIE = /trident\//i.test(window.navigator.userAgent);
    for (const route of _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.routes) {
      if (route.path && route.data && route.path.indexOf('*') === -1) {
        this.topNavLinks.push({
          name: route.data.text,
          path: '/' + route.path,
          icon: route.data.iconName,
          subItem: route.data.subItem
        });
      }
    }
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        if (auth.displayName) {
          this.name = auth.displayName;
        } else {
          this.name = auth.email.split('@')[0];
        }
      }
    });
  }
  ngOnInit() {
    document.body.classList.add('light-theme');
    document.body.style.background = '#eee';
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(x => x instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationStart)).subscribe(event => {
      if (event.url !== '/' && !this.navdrawer.pin) {
        // Close drawer when selecting a view on mobile (unpinned)
        this.navdrawer.close();
      }
    });
    this.innerWidth = window.innerWidth;
  }
  changeTheme(dark) {
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
  logout() {
    this.authService.signOut();
  }
  login() {
    this.router.navigate(['/login']);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthServiceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    viewQuery: function AppComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxNavigationDrawerComponent, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxLayoutDirective, 7, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxLayoutDirective);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.navdrawer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.layout = _t.first);
      }
    },
    hostBindings: function AppComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 16,
    vars: 8,
    consts: [["igxLayout", "", 1, "main"], ["id", "project-menu", "width", "280px", "pinThreshold", "5000", 3, "enableGestures", "pin"], ["nav", ""], ["igxDrawer", ""], ["igxFlex", ""], ["title", "Crypto Portfolio App", "actionButtonIcon", "menu", "igxFlex", "", 3, "action"], [1, "theme-chooser"], ["class", "theme-chooser__item--light", "title", "Light Theme", 3, "click", 4, "ngIf"], ["class", "theme-chooser__item--dark", "title", "Dark Theme", 3, "click", 4, "ngIf"], ["class", "account-container", 4, "ngIf", "ngIfElse"], ["showLogin", ""], ["igxLayout", "", "igxLayoutJustify", "center", 1, "content"], ["igxDrawerItem", "", 3, "isHeader"], ["igxDrawerItem", "", "igxRipple", "", "routerLinkActive", "igx-nav-drawer__item--active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["igxDrawerItem", "", "igxRipple", "", "routerLinkActive", "igx-nav-drawer__item--active", 3, "routerLink"], [4, "ngIf"], ["fontSet", "material"], ["title", "Light Theme", 1, "theme-chooser__item--light", 3, "click"], ["title", "Dark Theme", 1, "theme-chooser__item--dark", 3, "click"], [1, "account-container"], ["igxButton", "contained", "igxRipple", "", 3, "click"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "igx-nav-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppComponent_ng_template_3_Template, 3, 2, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "igx-navbar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("action", function AppComponent_Template_igx_navbar_action_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r0.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_div_7_Template, 1, 0, "div", 7)(8, AppComponent_div_8_Template, 1, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AppComponent_div_10_Template, 4, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, AppComponent_ng_template_12_Template, 3, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("enableGestures", true)("pin", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.darkTheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.darkTheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 6, ctx.afAuth.authState))("ngIfElse", _r6);
      }
    },
    dependencies: [_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxLayoutModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxFlexDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxLayoutDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxNavigationDrawerModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxNavigationDrawerComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxNavDrawerItemDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxNavDrawerTemplateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgFor, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxRippleModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxRippleDirective, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxIconModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxIconComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxNavbarModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxNavbarComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxButtonModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxButtonDirective, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: [".theme-chooser {\n  display: flex;\n}\n.theme-chooser__item--light {\n  position: relative;\n  width: 34px;\n  height: 34px;\n  border-radius: 17px;\n  overflow: hidden;\n  transform: rotate(45deg);\n  border: 2px solid white;\n  cursor: pointer;\n  transition: box-shadow 0.25s ease-out;\n}\n.theme-chooser__item--light::before, .theme-chooser__item--light::after {\n  position: absolute;\n  content: \"\";\n  width: 50%;\n  top: 0;\n  bottom: 0;\n}\n.theme-chooser__item--light::before {\n  left: 0;\n  background: #8049ff;\n}\n.theme-chooser__item--light::after {\n  right: 0;\n  background: #E29C45;\n}\n.theme-chooser__item--light:hover {\n  box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.24);\n}\n.theme-chooser__item--dark {\n  position: relative;\n  width: 34px;\n  height: 34px;\n  border-radius: 17px;\n  overflow: hidden;\n  transform: rotate(45deg);\n  border: 2px solid white;\n  cursor: pointer;\n  transition: box-shadow 0.25s ease-out;\n}\n.theme-chooser__item--dark::before, .theme-chooser__item--dark::after {\n  position: absolute;\n  content: \"\";\n  width: 50%;\n  top: 0;\n  bottom: 0;\n}\n.theme-chooser__item--dark::before {\n  left: 0;\n  background: #000;\n}\n.theme-chooser__item--dark::after {\n  right: 0;\n  background: #72da67;\n}\n.theme-chooser__item--dark:hover {\n  box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.24);\n}\n\n.main {\n  width: 100%;\n  height: 100%;\n}\n\n.content {\n  flex: 1 1 100%;\n  height: 85%;\n}\n\n.temp {\n  vertical-align: top;\n}\n\n.igx-nav-drawer__overlay {\n  position: fixed;\n}\n\nigx-navbar {\n  height: 56px;\n  display: block;\n}\n\n.igx-navbar {\n  position: fixed;\n}\n\n.account-container span {\n  margin-right: 13px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLXRoZW1lcy9jaG9vc2VyLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ0U7RUFDRSxhQUFBO0FDckNKO0FEdUNJO0VBckNBLGtCQUFBO0VBQ0EsV0FMVztFQU1YLFlBTlc7RUFPWCxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQ0NKO0FEQ0k7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QUNBTjtBREdJO0VBQ0UsT0FBQTtFQUNBLG1CQWlCNEI7QUNsQmxDO0FESUk7RUFDRSxRQUFBO0VBQ0EsbUJBWXFDO0FDZDNDO0FES0k7RUFDRSwyQ0FBQTtBQ0hOO0FEY0k7RUF6Q0Esa0JBQUE7RUFDQSxXQUxXO0VBTVgsWUFOVztFQU9YLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0FDOEJKO0FENUJJO0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FDNkJOO0FEMUJJO0VBQ0UsT0FBQTtFQUNBLGdCQXFCNEI7QUNPbEM7QUR6Qkk7RUFDRSxRQUFBO0VBQ0EsbUJBZ0JrQztBQ1d4QztBRHhCSTtFQUNFLDJDQUFBO0FDMEJOOztBQTNEQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBOERKOztBQTNEQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FBOERKOztBQTNEQTtFQUNJLG1CQUFBO0FBOERKOztBQTNEQTtFQUNJLGVBQUE7QUE4REo7O0FBM0RBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUE4REo7O0FBM0RBO0VBQ0ksZUFBQTtBQThESjs7QUEzREE7RUFDSSxrQkFBQTtBQThESiIsInNvdXJjZXNDb250ZW50IjpbIiRjaG9vc2VyLXNpemU6IDM0cHg7XHJcblxyXG5AbWl4aW4gdGhlbWUtY2hvb3Nlci1pdGVtKCRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCkge1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAkY2hvb3Nlci1zaXplO1xyXG4gICAgaGVpZ2h0OiAkY2hvb3Nlci1zaXplO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGNob29zZXItc2l6ZSAqIDAuNTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjI1cyBlYXNlLW91dDtcclxuXHJcbiAgICAmOjpiZWZvcmUsXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRmb3JlZ3JvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMnB4IDNweCByZ2JhKDAsIDAsIDAsIC4yNCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGhlbWUtY2hvb3NlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICZfX2l0ZW0tLWxpZ2h0IHtcclxuICAgICAgQGluY2x1ZGUgdGhlbWUtY2hvb3Nlci1pdGVtKCM4MDQ5ZmYsICNFMjlDNDUpO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2l0ZW0tLWRhcmsge1xyXG4gICAgICBAaW5jbHVkZSB0aGVtZS1jaG9vc2VyLWl0ZW0oIzAwMCwgIzcyZGE2Nyk7XHJcbiAgICB9XHJcbiAgfVxyXG4iLCJAaW1wb3J0ICcuL2FwcC10aGVtZXMvY2hvb3Nlci5zY3NzJztcclxuLm1haW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGZsZXg6IDEgMSAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4NSU7XHJcbn1cclxuXHJcbi50ZW1wIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi5pZ3gtbmF2LWRyYXdlcl9fb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbmlneC1uYXZiYXIge1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5pZ3gtbmF2YmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuLmFjY291bnQtY29udGFpbmVyIHNwYW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 25796:
/*!****************************************************!*\
  !*** ./src/app/block-grid/block-grid.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockGridComponent: () => (/* binding */ BlockGridComponent)
/* harmony export */ });
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 27492);
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils */ 23476);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 74092);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 31792);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ 58644);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 24040);









const _c0 = ["grid1"];
function BlockGridComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlockGridComponent_div_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.refreshGrid());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "igx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlockGridComponent_div_2_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.exportGrid());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("igxTooltipTarget", _r3);
  }
}
function BlockGridComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlockGridComponent_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.refreshGrid());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "igx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function BlockGridComponent_ng_template_10_Template(rf, ctx) {}
function BlockGridComponent_ng_template_11_Template(rf, ctx) {}
function BlockGridComponent_ng_template_12_Template(rf, ctx) {}
function BlockGridComponent_ng_template_13_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 32)(2, "igx-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "group_work");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "igx-badge", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const groupRow_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", groupRow_r26.value ? "Positive Daily Scale" : "Negative Daily Scale", ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", groupRow_r26.records ? groupRow_r26.records.length : 0);
  }
}
function BlockGridComponent_ng_template_13_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32)(1, "igx-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "group_work");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "igx-badge", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const groupRow_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", groupRow_r26.expression ? ctx_r28.getHeader(groupRow_r26.expression.fieldName) : "", ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](groupRow_r26.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", groupRow_r26.records ? groupRow_r26.records.length : 0);
  }
}
function BlockGridComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BlockGridComponent_ng_template_13_div_0_Template, 7, 2, "div", 30)(1, BlockGridComponent_ng_template_13_ng_template_1_Template, 9, 3, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const groupRow_r26 = ctx.$implicit;
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", groupRow_r26.expression.fieldName === "dailyScale")("ngIfElse", _r29);
  }
}
function BlockGridComponent_ng_template_15_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cell_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().cell;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r34.getCoinImage(cell_r32.row.data["imageUrl"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function BlockGridComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, BlockGridComponent_ng_template_15_span_0_Template, 2, 1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.hideColumn === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r33);
  }
}
function BlockGridComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlockGridComponent_ng_template_17_Template_span_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38);
      const cell_r36 = restoredCtx.cell;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r37.openChart($event, cell_r36.row.data.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "igx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "insert_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function BlockGridComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " (24 h) % ");
  }
}
function BlockGridComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("percent-style-", item_r40 >= 0 ? "up" : "down", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 4, item_r40, "0.0-2"), " %");
  }
}
function BlockGridComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Price ");
  }
}
function BlockGridComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" $ ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, item_r45, "0.0-2"), " ");
  }
}
function BlockGridComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " Total supply ");
  }
}
function BlockGridComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, item_r49, "3.0-2"), "");
  }
}
function BlockGridComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", value_r52, " ");
  }
}
function BlockGridComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const value_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", value_r53, " ");
  }
}
class BlockGridComponent {
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }
  constructor(dataService, excelExportService, router) {
    this.dataService = dataService;
    this.excelExportService = excelExportService;
    this.router = router;
    this.positive24h = rowData => {
      return rowData['changePct24Hour'] >= 0;
    };
    this.negative24h = rowData => {
      return rowData['changePct24Hour'] < 0;
    };
    // tslint:disable-next-line:member-ordering
    this.changes24h = {
      positive: this.positive24h,
      negative: this.negative24h
    };
  }
  ngOnInit() {
    this.windowWidth = window.innerWidth;
  }
  loadData() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(15000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)(0)).subscribe(() => {
      this.dataService.getData().subscribe(res => {
        this.remoteData = res;
      });
    });
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.grid1.groupingDone.subscribe(args => {
      if (args.groupedColumns instanceof Array && args.groupedColumns.length !== 0) {
        const colNotForGroup = args.groupedColumns.find(col => col.field === 'changePct24Hour');
        if (colNotForGroup) {
          this.grid1.clearGrouping('changePct24Hour');
          if (args.groupedColumns.find(col => col.field === 'dailyScale') === undefined) {
            this.grid1.groupBy({
              fieldName: 'dailyScale',
              dir: _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.SortingDirection.Asc
            });
          }
        }
      } else if (args.groupedColumns instanceof _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxColumnComponent) {
        if (args.groupedColumns.field === 'changePct24Hour') {
          this.grid1.clearGrouping('changePct24Hour');
          this.grid1.groupBy({
            fieldName: 'dailyScale',
            dir: _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.SortingDirection.Asc
          });
        }
      }
    });
    this.grid1.groupBy({
      fieldName: 'dailyScale',
      dir: _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.SortingDirection.Asc
    });
    this.refreshGrid();
  }
  get hideColumn() {
    return this.windowWidth && this.windowWidth < 800;
  }
  setWidth(withHideColumns, withoutHideColumns) {
    return this.hideColumn ? withHideColumns : withoutHideColumns;
  }
  getCoinImage(imageUrl) {
    return (0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.transformCoinImgUrl)(imageUrl);
  }
  exportGrid() {
    const options = new _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxExcelExporterOptions('ExportFileFromGrid');
    options.ignoreColumnsVisibility = true;
    this.excelExportService.export(this.grid1, options);
  }
  refreshGrid() {
    // this.grid1.reflow();
    this.loadData();
  }
  getHeader(fieldName) {
    return this.grid1.getColumnByName(fieldName).header;
  }
  openChart(evt, symbol) {
    this.router.navigate(['/statistics', {
      text: 'Volatility',
      iconName: 'insert_chart',
      cryptoName: symbol,
      daysCount: 100
    }]);
  }
  static #_ = this.ɵfac = function BlockGridComponent_Factory(t) {
    return new (t || BlockGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxExcelExporterService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: BlockGridComponent,
    selectors: [["app-block-grid"]],
    viewQuery: function BlockGridComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.grid1 = _t.first);
      }
    },
    hostBindings: function BlockGridComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function BlockGridComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 23,
    consts: [[1, "sample-wrapper"], [1, "sample-content"], ["class", "buttons-container", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["igxTooltip", ""], ["tooltipRef", "tooltip"], ["width", "100%", "height", "100%", 3, "data", "allowFiltering", "filterMode"], ["grid1", ""], ["igxExcelStyleHiding", ""], ["igxExcelStyleMoving", ""], ["igxExcelStylePinning", ""], ["igxGroupByRow", ""], ["field", "fullName", "header", "Name", 3, "width", "filterable"], ["igxCell", ""], [3, "width", "header", "filterable", "hidden"], ["field", "changePct24Hour", "dataType", "number", "sortable", "true", "dataType", "number", 3, "width", "groupable", "cellClasses"], ["changeCol", ""], ["igxHeader", ""], ["igxCell", "", "dataType", "number"], ["width", "20%", "field", "price", "filterable", "true", "dataType", "number"], ["width", "15%", "field", "supply", "sortable", "true", "filterable", "true", "dataType", "number", 3, "hidden"], ["supplyCol", ""], ["field", "dailyScale", "header", "Daily Scale", "dataType", "boolean", 3, "groupable", "hidden"], ["field", "proofType", "header", "Proof Type", "dataType", "string", 3, "width", "groupable", "hidden"], ["field", "algorithm", "header", "Algorithm", "dataType", "string", 3, "width", "groupable", "hidden"], [1, "buttons-container"], ["id", "refresh", "igxButton", "contained", "igxRipple", "", 3, "click"], ["id", "exportButton", "igxButton", "contained", "igxRipple", "", 3, "igxTooltipTarget", "click"], ["src", "https://img.icons8.com/material/24/000000/ms-excel.png"], ["id", "refreshFabBtn", "igxButton", "fab", "igxRipple", "", 3, "click"], [4, "ngIf", "ngIfElse"], ["defaultGroupByTemplate", ""], [1, "igx-group-label"], ["fontSet", "material", 1, "igx-group-label__icon"], [1, "igx-group-label__column-name"], [1, "igx-group-label__count-badge", 3, "value"], [1, "igx-group-label__text"], ["class", "coin-logo", 4, "ngIf"], [1, "coin-title"], [1, "coin-logo"], [3, "src"], ["igxIconButton", "flat", "igxRipple", "", 3, "click"], [2, "width", "100%", "text-align", "center"]],
    template: function BlockGridComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BlockGridComponent_div_2_Template, 6, 1, "div", 2)(3, BlockGridComponent_ng_template_3_Template, 3, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Export to Excel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "igx-grid", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, BlockGridComponent_ng_template_10_Template, 0, 0, "ng-template", 8)(11, BlockGridComponent_ng_template_11_Template, 0, 0, "ng-template", 9)(12, BlockGridComponent_ng_template_12_Template, 0, 0, "ng-template", 10)(13, BlockGridComponent_ng_template_13_Template, 3, 2, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "igx-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, BlockGridComponent_ng_template_15_Template, 3, 2, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "igx-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, BlockGridComponent_ng_template_17_Template, 3, 0, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "igx-column", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, BlockGridComponent_ng_template_20_Template, 1, 0, "ng-template", 17)(21, BlockGridComponent_ng_template_21_Template, 3, 7, "ng-template", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "igx-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, BlockGridComponent_ng_template_23_Template, 1, 0, "ng-template", 17)(24, BlockGridComponent_ng_template_24_Template, 3, 4, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "igx-column", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, BlockGridComponent_ng_template_27_Template, 1, 0, "ng-template", 17)(28, BlockGridComponent_ng_template_28_Template, 3, 4, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "igx-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "igx-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, BlockGridComponent_ng_template_31_Template, 2, 1, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "igx-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, BlockGridComponent_ng_template_33_Template, 2, 1, "ng-template", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideColumn)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx.remoteData)("allowFiltering", true)("filterMode", "excelStyleFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", ctx.setWidth("20%", "20%"))("filterable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", ctx.setWidth("15%", "10%"))("header", ctx.hideColumn ? "Chart" : "Volatility")("filterable", false)("hidden", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", ctx.setWidth("25%", "13%"))("groupable", true)("cellClasses", ctx.changes24h);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.hideColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("groupable", true)("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", ctx.setWidth("20%", "12%"))("groupable", true)("hidden", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", "10%")("groupable", true)("hidden", ctx.hideColumn);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxButtonModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxButtonDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxRippleModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxRippleDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxIconModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxIconComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxTooltipModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxTooltipDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxTooltipTargetDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxGridModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxGridComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxGroupByRowTemplateDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxCellTemplateDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxCellHeaderTemplateDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxColumnComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxBadgeModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxBadgeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxIconButtonDirective],
    styles: ["#refreshFabBtn[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 33px;\n  z-index: 998;\n  bottom: 33px;\n}\n\n.coin-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.coin-logo[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.9);\n}\n\n.coin-logo[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n#exportButton[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  background-color: #72da67;\n  padding: 0;\n  cursor: pointer;\n}\n\n.buttons-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvY2stZ3JpZC9ibG9jay1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFFQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0M7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFGSDs7QUFLQztFQUNDLG1CQUFBO0VBQ0EsYUFBQTtBQUZGIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4jcmVmcmVzaEZhYkJ0biB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMzNweDtcclxuICAgIHotaW5kZXg6IDk5ODtcclxuICAgIGJvdHRvbTogMzNweDtcclxufVxyXG5cclxuLmNvaW4tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmNvaW4tbG9nbyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsIC45KTtcclxufVxyXG5cclxuLmNvaW4tbG9nbyA+IGltZyB7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4gI2V4cG9ydEJ1dHRvbntcclxuICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzcyZGE2NztcclxuICAgcGFkZGluZzogMDtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gfVxyXG5cclxuIC5idXR0b25zLWNvbnRhaW5lcntcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 73516:
/*!****************************************************!*\
  !*** ./src/app/block-list/block-list.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockListComponent: () => (/* binding */ BlockListComponent)
/* harmony export */ });
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 27492);
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils */ 23476);
/* harmony import */ var _core_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/animations */ 67664);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 58644);









function BlockListComponent_igx_suffix_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "igx-suffix", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BlockListComponent_igx_suffix_7_Template_igx_suffix_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.searchCrypto = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "igx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function BlockListComponent_igx_list_item_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "igx-list-item", null, 9)(2, "div", 10)(3, "div", 11)(4, "span", 12)(5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "igx-avatar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 15)(10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "igx-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "(24h)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const crypto_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r2.getCoinImage(crypto_r5["imageUrl"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", crypto_r5["fullName"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](12, 9, crypto_r5["price"], "1.0-3"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("percent-style-", crypto_r5["changePct24Hour"] >= 0 ? "up" : "down", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](15, 12, crypto_r5["changePct24Hour"], "0.0-2"), " % ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", crypto_r5["changePct24Hour"] >= 0 ? "green" : "red");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", crypto_r5["changePct24Hour"] >= 0 ? "arrow_drop_up" : "arrow_drop_down", " ");
  }
}
class BlockListComponent {
  constructor(data) {
    this.data = data;
    this.remoteData = [];
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.data.getData().subscribe(res => {
      this.remoteData = (0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.sortDataByKey)(res, 'rank');
    });
  }
  get filterCryptos() {
    const fo = new _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxFilterOptions();
    fo.key = 'fullName';
    fo.inputValue = this.searchCrypto;
    return fo;
  }
  getCoinImage(imageUrl) {
    return (0,_core_utils__WEBPACK_IMPORTED_MODULE_0__.transformCoinImgUrl)(imageUrl);
  }
  static #_ = this.ɵfac = function BlockListComponent_Factory(t) {
    return new (t || BlockListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: BlockListComponent,
    selectors: [["app-block-list"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 7,
    consts: [[1, "sample-wrapper"], ["type", "search", 1, "search"], ["igxInput", "", "placeholder", "Search by name", 3, "ngModel", "ngModelChange"], ["search", ""], [3, "click", 4, "ngIf"], [1, "list-sample"], ["isHeader", "true"], [4, "ngFor", "ngForOf"], [3, "click"], ["item", ""], [1, "crypto"], [1, "crypto__info"], [1, "crypto__item"], [1, "crypto__name"], ["size", "small", "roundShape", "true", 1, "crypto__avatar", 3, "src"], [1, "crypto__details"], [1, "crypto__price"], [3, "color"], [1, "li_item"]],
    template: function BlockListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "igx-input-group", 1)(2, "igx-prefix")(3, "igx-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function BlockListComponent_Template_input_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.searchCrypto, $event) || (ctx.searchCrypto = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, BlockListComponent_igx_suffix_7_Template, 3, 0, "igx-suffix", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "igx-list")(10, "igx-list-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Cryptocurrencies");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, BlockListComponent_igx_list_item_12_Template, 20, 15, "igx-list-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "igxFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.searchCrypto);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r0.value.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@listAnimation", ctx.remoteData.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](13, 4, ctx.remoteData, ctx.filterCryptos));
      }
    },
    dependencies: [_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxInputGroupModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxInputGroupComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxInputDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxPrefixDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxSuffixDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxIconModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxListModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxListComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxListItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgFor, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxAvatarModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxAvatarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxFilterModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxFilterPipe],
    styles: ["[_nghost-%COMP%] {\n  display: block;\n  flex: initial;\n}\n\n@media only screen and (max-width: 786px) {\n  [_nghost-%COMP%] {\n    flex: 1 0 0%;\n  }\n}\n.list-sample[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  min-width: 500px;\n  overflow-y: auto;\n  max-height: calc(100vh - 154px);\n  min-height: 200px;\n  border-radius: 5px;\n  margin-top: 8px;\n}\n@media only screen and (max-width: 786px) {\n  .list-sample[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n}\n\n.crypto[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.crypto__info[_ngcontent-%COMP%] {\n  flex: 1 0 0%;\n}\n\n.crypto__item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n@media only screen and (max-width: 639px) {\n  .crypto__item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n\n.crypto__avatar[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.crypto__name[_ngcontent-%COMP%], .crypto__details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 1 0 0%;\n}\n\n.crypto__details[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.crypto__details[_ngcontent-%COMP%]   .crypto__price[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n\n.percent-style-down[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n@media only screen and (max-width: 639px) {\n  .crypto__details[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n  .igx-navbar__title[_ngcontent-%COMP%] {\n    max-width: 144px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYmxvY2stbGlzdC9ibG9jay1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLCtHQUFBO0VBR0EsZ0JBQUE7RUFJQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLGVBQUE7QUFORjtBQUZFO0VBTEY7SUFNSSxlQUFBO0VBS0Y7QUFDRjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBREY7QUFHRTtFQUxGO0lBTUksc0JBQUE7SUFDQSx1QkFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRSxpQkFBQTtBQUFGOztBQUdBOztFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLDhCQUFBO0FBQUY7QUFDRTtFQUNFLGtCQUFBO0FBQ0o7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxlQUFBO0VBQUY7RUFHQTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLHVCQUFBO0VBREY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmbGV4OiBpbml0aWFsO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4NnB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgZmxleDogMSAwIDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmxpc3Qtc2FtcGxlIHtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3ODZweCkge1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gIH1cclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNTRweCk7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5jcnlwdG8ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNyeXB0b19faW5mbyB7XHJcbiAgZmxleDogMSAwIDAlO1xyXG59XHJcblxyXG4uY3J5cHRvX19pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY3J5cHRvX19hdmF0YXIge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uY3J5cHRvX19uYW1lLFxyXG4uY3J5cHRvX19kZXRhaWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleDogMSAwIDAlO1xyXG59XHJcblxyXG4uY3J5cHRvX19kZXRhaWxzIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLmNyeXB0b19fcHJpY2Uge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBlcmNlbnQtc3R5bGUtZG93biB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MzlweCkge1xyXG4gIC5jcnlwdG9fX2RldGFpbHMge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmlneC1uYXZiYXJfX3RpdGxlIHtcclxuICAgIG1heC13aWR0aDogMTQ0cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [_core_animations__WEBPACK_IMPORTED_MODULE_1__.Animations.listItemLoadAnimation]
    }
  });
}

/***/ }),

/***/ 67664:
/*!************************************!*\
  !*** ./src/app/core/animations.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animations: () => (/* binding */ Animations)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 53291);

const Animations = {
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

/***/ 17028:
/*!************************************!*\
  !*** ./src/app/core/interfaces.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockItem: () => (/* binding */ BlockItem),
/* harmony export */   CoinItem: () => (/* binding */ CoinItem)
/* harmony export */ });
class CoinItem {
  constructor() {
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
  }
}
class BlockItem {
  constructor() {
    this.key = '';
    this.fullName = '';
    this.holdings = 0;
    this.name = '';
    this.supply = 0;
    this.changePct24Hour = 0;
    this.price = 0;
    this.imageUrl = '';
    this.total = 0;
  }
}

/***/ }),

/***/ 23476:
/*!*******************************!*\
  !*** ./src/app/core/utils.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillFromJSON: () => (/* binding */ fillFromJSON),
/* harmony export */   flattenObject: () => (/* binding */ flattenObject),
/* harmony export */   sortDataByKey: () => (/* binding */ sortDataByKey),
/* harmony export */   transformCoinImgUrl: () => (/* binding */ transformCoinImgUrl)
/* harmony export */ });
const baseUrl = 'https://www.cryptocompare.com';
function sortDataByKey(array, keyToSortBy) {
  function sortByKey(a, b) {
    const x = a[keyToSortBy];
    const y = b[keyToSortBy];
    return x < y ? -1 : x > y ? 1 : 0;
  }
  return array.sort(sortByKey);
}
function flattenObject(ob) {
  const toReturn = {};
  for (const i in ob) {
    if (!Object.prototype.hasOwnProperty.call(ob, i)) {
      continue;
    }
    if (typeof ob[i] === 'object') {
      const flatObject = flattenObject(ob[i]);
      for (const x in flatObject) {
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
  for (const propName in obj) {
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

/***/ 44244:
/*!******************************************!*\
  !*** ./src/app/email/email.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailComponent: () => (/* binding */ EmailComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router.animations */ 45532);
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 27492);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 45359);









const _c0 = ["snack"];
class EmailComponent {
  constructor(router, route, authService) {
    this.router = router;
    this.route = route;
    this.authService = authService;
    this.return = '';
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => this.return = params['return'] || '/home');
  }
  onSubmit(formData) {
    if (formData.valid) {
      this.authService.signIn(formData.value.email, formData.value.password).then(() => {
        this.router.navigate(['/home']);
      }).catch(err => {
        this.snack.open(err.message);
      });
    }
  }
  static #_ = this.ɵfac = function EmailComponent_Factory(t) {
    return new (t || EmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthServiceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: EmailComponent,
    selectors: [["app-email"]],
    viewQuery: function EmailComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.snack = _t.first);
      }
    },
    hostVars: 1,
    hostBindings: function EmailComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@moveIn", undefined);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 30,
    vars: 4,
    consts: [[1, "form-container"], ["id", "lockIcon"], [3, "ngSubmit"], ["formData", "ngForm"], ["igxLabel", "", "for", "email"], ["igxInput", "", "name", "email", "type", "email", "required", "", 3, "ngModel", "ngModelChange"], ["igxLabel", "", "for", "password"], ["igxInput", "", "name", "password", "type", "password", "required", "", 3, "ngModel", "ngModelChange"], [1, "signup-form-actions"], ["igxButton", "flat", "igxRipple", "", "routerLink", "/login", "id", "goback"], ["id", "loginBtn", "igxButton", "contained", "igxRipple", "", "type", "submit", 1, "basic-btn", 3, "disabled"], [1, "sbPosition"], [3, "autoHide"], ["snack", ""], ["routerLink", "/signup", 1, "alc"]],
    template: function EmailComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "igx-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EmailComponent_Template_form_ngSubmit_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onSubmit(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "igx-input-group")(7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "igx-suffix")(11, "igx-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "igx-input-group")(14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function EmailComponent_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "igx-suffix")(18, "igx-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 8)(21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "igx-snackbar", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Don't have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autoHide", true);
      }
    },
    dependencies: [_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxIconModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxInputGroupModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxInputGroupComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxInputDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxLabelDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxSuffixDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxButtonModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxButtonDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxRippleModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxRippleDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxSnackbarModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxSnackbarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_0__.moveIn)(), (0,_router_animations__WEBPACK_IMPORTED_MODULE_0__.fallIn)()]
    }
  });
}

/***/ }),

/***/ 46916:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 27492);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router.animations */ 45532);
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils */ 23476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 58644);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 24040);










function HomeComponent_div_0_igx_suffix_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "igx-suffix", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_div_0_igx_suffix_8_Template_igx_suffix_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _r1.value = "";
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "igx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function HomeComponent_div_0_article_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "article", 9)(1, "igx-card", 10)(2, "igx-card-header", 11)(3, "igx-card-media", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "igx-card-content")(10, "p")(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " 24h ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Rank: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Proof type: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Market Cap: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "igx-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "igx-card-actions")(33, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HomeComponent_div_0_article_10_Template_button_click_33_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const crypto_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.openChart($event, crypto_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " View chart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const crypto_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@flyInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r3.getCoinImage(crypto_r6["imageUrl"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](crypto_r6["fullName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", crypto_r6["name"], ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Price: $", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](13, 12, crypto_r6["price"], "1.0-8"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("percent-style-", crypto_r6["changePct24Hour"] >= 0 ? "up" : "down", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](16, 15, crypto_r6["changePct24Hour"], "0.0-2"), ")%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](crypto_r6["rank"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](crypto_r6["proofType"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](30, 18, crypto_r6["mktcap"], "3.0-2"), "");
  }
}
function HomeComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "igx-input-group", 2)(3, "input", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function HomeComponent_div_0_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r9.searchValue, $event) || (ctx_r9.searchValue = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "igx-prefix")(6, "igx-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, HomeComponent_div_0_igx_suffix_8_Template, 3, 0, "igx-suffix", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, HomeComponent_div_0_article_10_Template, 35, 21, "article", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "igxFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.searchValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r1.value.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 3, ctx_r0.cryptos, ctx_r0.filterOptions));
  }
}
class HomeComponent {
  constructor(data, router) {
    this.data = data;
    this.router = router;
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.data.getData().subscribe(res => {
      this.cryptos = (0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.sortDataByKey)(res, 'rank');
    });
  }
  get filterOptions() {
    const fo = new _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxFilterOptions();
    fo.items = this.cryptos;
    fo.key = 'fullName';
    fo.inputValue = this.searchValue ? this.searchValue : '';
    if (fo.items && fo.inputValue) {
      const fI = fo.items.find(item => {
        return item.name.toUpperCase().includes(fo.inputValue.toUpperCase());
      });
      if (fI) {
        fo.key = 'name';
      }
    }
    return fo;
  }
  clear() {
    this.searchValue = '';
  }
  openChart(evt, crypto) {
    this.router.navigate(['/statistics', {
      text: 'Volatility',
      iconName: 'show_chart',
      cryptoName: [crypto['name'], crypto['fullName']],
      daysCount: 100
    }]);
  }
  getCoinImage(imageUrl) {
    return (0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.transformCoinImgUrl)(imageUrl);
  }
  toggleDetails() {
    this.panel.toggle();
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    viewQuery: function HomeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxExpansionPanelComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [1, "sample-wrapper"], ["type", "search", 1, "searchBox"], ["igxInput", "", "placeholder", "Search by name or symbol", 3, "ngModel", "ngModelChange"], ["input1", ""], [3, "click", 4, "ngIf"], [1, "sample-content"], ["class", "sample-column card-wrapper", 4, "ngFor", "ngForOf"], [3, "click"], [1, "sample-column", "card-wrapper"], ["elevated", ""], ["vertical", "true"], ["height", "32px"], [3, "src"], ["igxCardHeaderTitle", ""], ["igxButton", "", "igxRipple", "", 3, "click"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 12, 6, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cryptos);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxInputGroupModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxInputGroupComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxInputDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxPrefixDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxSuffixDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxIconModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgFor, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxCardModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxCardComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxCardHeaderComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxCardMediaDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxCardContentDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxCardActionsComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxCardHeaderTitleDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxDividerModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxDividerDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxButtonModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxButtonDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxRippleModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxRippleDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxFilterModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxFilterPipe],
    styles: ["a[_ngcontent-%COMP%] {\n  color: #731963;\n}\n\n.links[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0 35px;\n}\n\n#linksContainer[_ngcontent-%COMP%] {\n  flex-flow: row wrap;\n  display: flex;\n  justify-content: center;\n}\n\n.searchBox[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.sample-content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 auto;\n  justify-content: flex-start;\n}\n\n.igx-card-header[_ngcontent-%COMP%], .igx-card-header__title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.igx-card-content[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.igx-card-header[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n\n.igx-card-header[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.igx-card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  margin-bottom: 8px;\n}\n\n.content-span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: stretch;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QUFKRjs7QUFPQTs7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLDRCQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0FBSkY7QUFLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFPQTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFKRiIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIGNvbG9yOiAjNzMxOTYzO1xyXG59XHJcblxyXG4ubGlua3N7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMzVweDtcclxufVxyXG5cclxuI2xpbmtzQ29udGFpbmVyIHtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIC5jYXJkLXdyYXBwZXIge1xyXG4vLyAgIG1heC13aWR0aDogMjc5cHg7XHJcbi8vICAgbWluLXdpZHRoOiAyNjBweDtcclxuLy8gfVxyXG5cclxuLnNlYXJjaEJveCB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uc2FtcGxlLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5pZ3gtY2FyZC1oZWFkZXIsXHJcbi5pZ3gtY2FyZC1oZWFkZXJfX3RpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmlneC1jYXJkLWNvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5pZ3gtY2FyZC1oZWFkZXJ7XHJcbiAgcGFkZGluZy1ib3R0b206IDAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWd4LWNhcmQtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQtc3BhbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2hcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_0__.flyInOut)()]
    }
  });
}

/***/ }),

/***/ 90736:
/*!**************************************************************!*\
  !*** ./src/app/loading-spinner/loading-spinner.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSpinnerComponent: () => (/* binding */ LoadingSpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94280);

class LoadingSpinnerComponent {
  static #_ = this.ɵfac = function LoadingSpinnerComponent_Factory(t) {
    return new (t || LoadingSpinnerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoadingSpinnerComponent,
    selectors: [["app-loading-spinner"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 3,
    vars: 0,
    consts: [[1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"]],
    template: function LoadingSpinnerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: [".spinner[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  position: relative;\n  margin: 100px auto;\n}\n\n.double-bounce1[_ngcontent-%COMP%], .double-bounce2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: _ngcontent-%COMP%_sk-bounce 2s infinite ease-in-out;\n}\n\n.double-bounce2[_ngcontent-%COMP%] {\n  animation-delay: -1s;\n}\n@keyframes _ngcontent-%COMP%_sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFHQSw0Q0FBQTtBQURGOztBQUlBO0VBRUUsb0JBQUE7QUFERjtBQVNBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLDJCQUFBO0VBRUY7RUFERTtJQUNBLG1CQUFBO0lBQ0EsMkJBQUE7RUFHRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXIge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMTAwcHggYXV0bztcclxufVxyXG5cclxuLmRvdWJsZS1ib3VuY2UxLCAuZG91YmxlLWJvdW5jZTIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG5cclxuICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmRvdWJsZS1ib3VuY2UyIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgMCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKSB9XHJcbiAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCkgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZSB7XHJcbiAgMCUsIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMCk7XHJcbiAgfSA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 92080:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router.animations */ 45532);
/* harmony import */ var _igniteui_material_icons_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @igniteui/material-icons-extended */ 14340);
/* harmony import */ var _igniteui_material_icons_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @igniteui/material-icons-extended */ 94292);
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 27492);
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loading-spinner/loading-spinner.component */ 90736);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 45359);










function LoginComponent_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.error);
  }
}
function LoginComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "igx-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "lock_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LoginComponent_div_1_span_3_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.loginGoogle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "igx-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Login With Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_1_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.loginFb());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "igx-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Login With Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_1_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.loginEmail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "igx-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Sign up for an ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.error);
  }
}
function LoginComponent_ng_template_2_app_loading_spinner_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-loading-spinner");
  }
}
function LoginComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, LoginComponent_ng_template_2_app_loading_spinner_0_Template, 1, 0, "app-loading-spinner", 12);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.showSpinner);
  }
}
class LoginComponent {
  constructor(router, route, iconService, authService) {
    this.router = router;
    this.route = route;
    this.iconService = iconService;
    this.authService = authService;
    this.return = '';
    this.showSpinner = localStorage.getItem('showSpinner') === 'true' ? true : false;
  }
  ngOnInit() {
    // Get the query params
    this.route.queryParams.subscribe(params => this.return = params['return'] || '/home');
    // Register a single icon
    this.iconService.addSvgIconFromText(_igniteui_material_icons_extended__WEBPACK_IMPORTED_MODULE_4__.facebook.name, _igniteui_material_icons_extended__WEBPACK_IMPORTED_MODULE_4__.facebook.value, 'imx-icons');
    this.iconService.addSvgIconFromText(_igniteui_material_icons_extended__WEBPACK_IMPORTED_MODULE_5__.google.name, _igniteui_material_icons_extended__WEBPACK_IMPORTED_MODULE_5__.google.value, 'imx-icons');
  }
  loginFb() {
    this.authService.facebookAuth();
  }
  loginGoogle() {
    this.authService.googleAuth();
  }
  loginEmail() {
    this.router.navigate(['/email'], {
      queryParams: {
        return: this.return
      }
    });
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxIconService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthServiceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    hostVars: 1,
    hostBindings: function LoginComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostProperty"]("@moveIn", undefined);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 2,
    consts: [[1, "form-container"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["id", "lockIcon"], ["class", "error", 4, "ngIf"], ["igxButton", "contained", "igxRipple", "", "id", "google", 1, "button", 3, "click"], ["family", "imx-icons", "name", "google", 1, "s-logo"], ["family", "imx-icons", "name", "facebook", 1, "s-logo"], ["igxButton", "contained", "igxRipple", "", "id", "email", 1, "button", 3, "click"], [1, "s-logo"], ["routerLink", "/signup", "routerLinkActive", "active", 1, "alc"], [1, "error"], [4, "ngIf"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 21, 1, "div", 1)(2, LoginComponent_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showSpinner)("ngIfElse", _r2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxIconModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxIconComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxButtonModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxButtonDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxRippleModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_7__.IgxRippleDirective, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_1__.LoadingSpinnerComponent],
    styles: ["#lock[_ngcontent-%COMP%] {\n  width: 40%;\n  margin: 1.5em auto 4em auto;\n  display: block;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 0 0 16px 0;\n}\n.button[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 0;\n}\n\n#fb[_ngcontent-%COMP%] {\n  background: #3B5998;\n  color: #fff;\n  margin-top: 10px;\n}\n\n#google[_ngcontent-%COMP%] {\n  border: 1px solid #95989A;\n  background: #fff;\n}\n\n.s-logo[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n}\n\n#email[_ngcontent-%COMP%] {\n  background: #ECECEC;\n}\n\n.error[_ngcontent-%COMP%] {\n  background: #f1f0ef;\n  padding: 1em;\n  width: 100%;\n  display: block;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0FBQ0o7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFBRiIsInNvdXJjZXNDb250ZW50IjpbIiNsb2NrIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIG1hcmdpbjogMS41ZW0gYXV0byA0ZW0gYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBtYXJnaW46IDAgMCAxNnB4IDA7XHJcblxyXG4gICY6bGFzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG4jZmIge1xyXG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcblxyXG4jZ29vZ2xlIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTU5ODlBO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5zLWxvZ28ge1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuI2VtYWlsIHtcclxuICBiYWNrZ3JvdW5kOiAjRUNFQ0VDO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIGJhY2tncm91bmQ6ICNmMWYwZWY7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_0__.moveIn)()]
    }
  });
}

/***/ }),

/***/ 18316:
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PortfolioComponent: () => (/* binding */ PortfolioComponent)
/* harmony export */ });
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 27492);
/* harmony import */ var _core_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/interfaces */ 17028);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 40604);
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils */ 23476);
/* harmony import */ var igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! igniteui-angular-charts */ 34964);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 65056);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _services_block_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/block-item.service */ 2944);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 58644);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 16088);
















const _c0 = ["snack"];
const _c1 = ["snackExists"];
const _c2 = ["grid1"];
const _c3 = ["modal"];
const _c4 = ["chart"];
function PortfolioComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cell_r10 = ctx.cell;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r1.getCoinImage(cell_r10.row.data.imageUrl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", cell_r10.row.data.name, "");
  }
}
function PortfolioComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cell_r13 = ctx.cell;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 2, cell_r13.row.data.total, "0.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 5, cell_r13.row.data.holdings, "1.0-7"));
  }
}
function PortfolioComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cell_r16 = ctx.cell;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 5, cell_r16.row.data.price, "0.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("percent-style-", cell_r16.row.data.changePct24Hour >= 0 ? "up" : "down", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 8, cell_r16.row.data.changePct24Hour, "0.2-2"), " % ");
  }
}
class PortfolioComponent {
  constructor(blockItemService, router, dataService, afAuth) {
    this.blockItemService = blockItemService;
    this.router = router;
    this.dataService = dataService;
    this.afAuth = afAuth;
    this.blockItems = [];
    // Number options
    this.options = {
      digitsInfo: '1.2-2',
      currencyCode: 'USD'
    };
    this.formatOptions = this.options;
    this.helper = new Helper();
    // tslint:disable-next-line: member-ordering
    this._dialogOverlaySettings = {
      closeOnOutsideClick: true,
      modal: true,
      outlet: null,
      scrollStrategy: new _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.CloseScrollStrategy()
    };
    this.positive24h = rowData => {
      return rowData.changePct24Hour > 0;
    };
    this.negative24h = rowData => {
      return rowData.changePct24Hour < 0;
    };
    // tslint:disable-next-line:member-ordering
    this.dailyChanges = {
      positive: this.positive24h,
      negative: this.negative24h
    };
  }
  ngAfterViewInit() {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.blockItemService.getItemsList().snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(actions =>
        // actions.map(a => ({ key: a.payload.key, ...a.payload.val() }))
        actions.map(a => {
          const item = {
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
        }))).subscribe(items => {
          this.blockItems = items;
          this.grid1.sort({
            fieldName: 'total',
            dir: _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.SortingDirection.Desc,
            ignoreCase: false
          });
          // Update portfolio upon load
          this.updatePortfolio();
          // Explode the last slice
          this.chart.explodedSlices.add(items.length - 1);
        });
      }
    });
  }
  restore() {
    this.blockItemService.createItem(this.deletedItem);
    this.snack.close();
    this.deletedItem = new _core_interfaces__WEBPACK_IMPORTED_MODULE_0__.BlockItem();
  }
  openDialog() {
    this._dialogOverlaySettings.outlet = this.outlet;
    this.dialog.open(this._dialogOverlaySettings);
  }
  updatePortfolio() {
    for (const coin of this.blockItems) {
      this.dataService.getSpecificCoinData(coin.name).subscribe(res => {
        coin.changePct24Hour = res.changePct24Hour;
        coin.price = res.price;
      });
    }
  }
  openChart(evt, symbol) {
    this.router.navigate(['/statistics', {
      text: 'Volatility',
      iconName: 'show_chart',
      cryptoName: symbol,
      daysCount: 100
    }]);
  }
  getCoinImage(imageUrl) {
    return (0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.transformCoinImgUrl)(imageUrl);
  }
  calculateTotalPortfolio() {
    let total = 0;
    for (const coin of this.blockItems) {
      total += this.helper.calculateHoldings(coin.holdings, coin.price);
    }
    return total;
  }
  addItem(event) {
    // Check whether the coin is already in your portfolio
    this.checkCoinExistence(this.coinName);
    event.dialog.close();
  }
  checkCoinExistence(coin) {
    const fCoin = this.blockItems.filter(item => item.name === coin.toUpperCase());
    if (fCoin.length !== 0) {
      this.snackExists.open('Already added!');
    } else {
      // find coin and add it if exist
      this.addRow(coin.toUpperCase());
    }
  }
  addRow(symbol) {
    this.dataService.getCryptoIdFromSymbol(symbol).subscribe(filteredItem => {
      if (filteredItem) {
        this.dataService.getSpecificCoinData(filteredItem['Name']).subscribe(blockItem => {
          blockItem.holdings = this.holdings;
          this.blockItemService.createItem(blockItem);
          this.snackExists.open('Coin Added!');
          this.clearFormInputs();
        }, err => {
          this.clearFormInputs();
          this.snackExists.open(err);
        });
      } else {
        this.snackExists.open('Coin does not exist!');
      }
    });
  }
  deleteRow(cell) {
    const blockItem = cell.row.data;
    this.delete(blockItem);
  }
  updateRow(evt) {
    const rowItem = evt.rowID;
    rowItem.holdings = evt.newValue;
    this.blockItemService.updateItem(rowItem.key, rowItem);
  }
  /*
    Used by action strip grid
  */
  updateCell(evt) {
    const rowItem = evt.owner.getRowData(evt.rowID);
    rowItem.holdings = evt.newValue;
    this.blockItemService.updateItem(rowItem.key, rowItem);
  }
  deleteRowFromActions(evt) {
    this.delete(evt.data);
  }
  delete(blockItem) {
    // Delele item from AngularFireList
    this.blockItemService.deleteItem(blockItem.key);
    // Stores deleted item for the 'Restore' Snackbar logic
    this.deletedItem = new _core_interfaces__WEBPACK_IMPORTED_MODULE_0__.BlockItem();
    Object.assign(this.deletedItem, blockItem);
    delete this.deletedItem['key'];
    this.snack.open();
  }
  clearFormInputs() {
    this.coinName = '';
    this.holdings = '';
  }
  removeSorting($event) {
    this.grid1.columns.forEach(col => {
      if (!(col.field === $event.fieldName)) {
        this.grid1.clearSort(col.field);
      }
    });
  }
  calculateHoldings(holdings, price) {
    return this.helper.calculateHoldings(holdings, price);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setFormat(context) {
    return context.item.fullName + " (" + Math.round(context.percentValue * 100) / 100 + '%)';
  }
  pieSliceClickEvent(e) {
    e.args.isExploded = !e.args.isExploded;
  }
  static #_ = this.ɵfac = function PortfolioComponent_Factory(t) {
    return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_block_item_service__WEBPACK_IMPORTED_MODULE_2__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: PortfolioComponent,
    selectors: [["app-portfolio"]],
    viewQuery: function PortfolioComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxOverlayOutletDirective, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c3, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c4, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.outlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.snack = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.snackExists = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.grid1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dialog = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 52,
    vars: 25,
    consts: [["igxOverlayOutlet", "", 1, "sample-wrapper"], [1, "sample-content"], ["id", "refreshBtn", "igxButton", "contained", "igxRipple", "", 3, "click"], ["id", "addBtn", "igxButton", "contained", "igxRipple", "", 3, "click"], ["width", "100%", "height", "400px", 3, "primaryKey", "data", "rowEditable", "cellEdit", "rowDeleted"], ["grid1", ""], ["field", "name", "header", "Coin symbol", "field", "name", "sortable", "true", 3, "editable"], ["igxCell", ""], ["field", "holdings", "header", "Holdings", "editable", "true", "sortable", "true", 3, "dataType"], ["header", "Total", "field", "total", "sortable", "true", 3, "editable", "pipeArgs", "dataType"], ["header", "Price", "field", "price", "sortable", "true", 3, "editable", "cellClasses"], ["actionstrip", ""], [3, "addRow", "deleteRow", "editRow"], ["id", "legendTitle"], ["legend", ""], ["height", "100%", "width", "100%", "valueMemberPath", "total", "labelMemberPath", "total", "legendLabelMemberPath", "fullName", "labelsPosition", "OutsideEnd", "labelExtent", "30", "radiusFactor", "0.7", "startAngle", "210", "labelsPosition", "OutsideEnd", "labelExtent", "30", "othersCategoryText", "Others", "othersCategoryThreshold", "2", "othersCategoryType", "Number", 3, "dataSource", "legend", "formatLabel", "sliceClick"], ["chart", ""], [1, "sbPosition"], ["actionText", "UNDO", 3, "autoHide", "clicked"], ["snack", ""], [3, "autoHide"], ["snackExists", ""], ["title", "Add coin", "leftButtonLabel", "Cancel", "rightButtonLabel", "Add coin", 3, "closeOnOutsideSelect", "leftButtonSelect", "rightButtonSelect"], ["modal", ""], [1, "addCoinForm"], ["type", "border"], ["igxLabel", "", "for", "coin"], ["id", "coin", "igxInput", "", "name", "coin", "type", "text", 3, "ngModel", "ngModelChange"], ["igxLabel", "", "for", "holdings"], ["igxInput", "", "name", "holdings", "type", "number", 3, "ngModel", "ngModelChange"], [1, "positionTop"], [3, "src"], [1, "symbolPosition"]],
    template: function PortfolioComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span")(3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PortfolioComponent_Template_button_click_3_listener() {
          return ctx.updatePortfolio();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "igx-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span")(10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PortfolioComponent_Template_button_click_10_listener() {
          return ctx.openDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "igx-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "playlist_add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Add coin");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "igx-grid", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cellEdit", function PortfolioComponent_Template_igx_grid_cellEdit_15_listener($event) {
          return ctx.updateCell($event);
        })("rowDeleted", function PortfolioComponent_Template_igx_grid_rowDeleted_15_listener($event) {
          return ctx.deleteRowFromActions($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "igx-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, PortfolioComponent_ng_template_18_Template, 4, 2, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "igx-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, PortfolioComponent_ng_template_20_Template, 7, 8, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "igx-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "igx-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, PortfolioComponent_ng_template_23_Template, 7, 11, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "igx-action-strip", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "igx-grid-editing-actions", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Portfolio allocation: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "igx-item-legend", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "igx-pie-chart", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sliceClick", function PortfolioComponent_Template_igx_pie_chart_sliceClick_31_listener($event) {
          return ctx.pieSliceClickEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 17)(34, "igx-snackbar", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("clicked", function PortfolioComponent_Template_igx_snackbar_clicked_34_listener() {
          return ctx.restore();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Record was deleted");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "igx-snackbar", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "igx-dialog", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("leftButtonSelect", function PortfolioComponent_Template_igx_dialog_leftButtonSelect_40_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
          const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](41);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r9.close());
        })("rightButtonSelect", function PortfolioComponent_Template_igx_dialog_rightButtonSelect_40_listener($event) {
          return ctx.addItem($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "form", 24)(43, "igx-input-group", 25)(44, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Coin name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function PortfolioComponent_Template_input_ngModelChange_46_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.coinName, $event) || (ctx.coinName = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "igx-input-group", 25)(49, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Holdings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function PortfolioComponent_Template_input_ngModelChange_51_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.holdings, $event) || (ctx.holdings = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Total Portfolio Value: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 22, ctx.calculateTotalPortfolio(), "0.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("primaryKey", "key")("data", ctx.blockItems)("rowEditable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("editable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataType", "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("editable", false)("pipeArgs", ctx.formatOptions)("dataType", "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("editable", false)("cellClasses", ctx.dailyChanges);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("addRow", false)("deleteRow", true)("editRow", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.blockItems)("legend", _r5)("formatLabel", ctx.setFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoHide", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoHide", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("closeOnOutsideSelect", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.coinName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.holdings);
      }
    },
    dependencies: [_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxToggleModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxOverlayOutletDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxButtonModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxButtonDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxRippleModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxRippleDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxIconModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxIconComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxGridModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxGridComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxCellTemplateDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxColumnComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxActionStripModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxActionStripComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxGridEditingActionsComponent, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_9__.IgxItemLegendModule, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_9__.IgxItemLegendComponent, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_9__.IgxPieChartCoreModule, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_9__.IgxPieChartComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxSnackbarModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxSnackbarComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxDialogModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxDialogComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxInputGroupModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxInputGroupComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxInputDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_5__.IgxLabelDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe],
    styles: ["#refreshBtn[_ngcontent-%COMP%] {\n  margin-bottom: 21px;\n}\n\n#addBtn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.sample-content[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n}\n\n.positionTop[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.positionTop[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.symbolPosition[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 5px;\n  margin-left: 10px;\n}\n\n[_nghost-%COMP%]     igx-icon {\n  cursor: pointer;\n}\n[_nghost-%COMP%]     .addCoinForm {\n  padding: 12px 24px 24px;\n}\n[_nghost-%COMP%]     .addCoinForm igx-input-group + igx-input-group {\n  margin-top: 24px;\n}\n[_nghost-%COMP%]     igx-grid {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSx1QkFBQTtFQUNBLGFBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQURGOztBQU1FO0VBQ0UsZUFBQTtBQUhKO0FBTUU7RUFDRSx1QkFBQTtBQUpKO0FBTUk7RUFDRSxnQkFBQTtBQUpOO0FBUUU7RUFDRSxZQUFBO0FBTkoiLCJzb3VyY2VzQ29udGVudCI6WyIjcmVmcmVzaEJ0biB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjFweDtcclxufVxyXG5cclxuXHJcbiNhZGRCdG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnNhbXBsZS1jb250ZW50IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucG9zaXRpb25Ub3Age1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vIG1hcmdpbi10b3A6IC03cHg7XHJcbn1cclxuXHJcbi5wb3NpdGlvblRvcD5pbWcge1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuLnN5bWJvbFBvc2l0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIHtcclxuICBpZ3gtaWNvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYWRkQ29pbkZvcm0ge1xyXG4gICAgcGFkZGluZzogMTJweCAyNHB4IDI0cHg7XHJcblxyXG4gICAgaWd4LWlucHV0LWdyb3VwK2lneC1pbnB1dC1ncm91cCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZ3gtZ3JpZCB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
class Helper {
  calculateHoldings(holdings, price) {
    return holdings * price;
  }
}

/***/ }),

/***/ 45532:
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fallIn: () => (/* binding */ fallIn),
/* harmony export */   flyInOut: () => (/* binding */ flyInOut),
/* harmony export */   moveIn: () => (/* binding */ moveIn),
/* harmony export */   moveInLeft: () => (/* binding */ moveInLeft)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 53291);

function moveIn() {
  return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('moveIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    opacity: '0',
    transform: 'translateX(100px)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.8s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
    opacity: '1',
    transform: 'translateX(0)'
  }))])
  // transition(':leave', [
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

/***/ 66016:
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 45359);



class AuthGuard {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
  }
  canActivate() {
    if (this.authService.isLoggedIn !== true) {
      this.router.navigate(['/login']);
    }
    return true;
  }
  static #_ = this.ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthServiceService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 45359:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthServiceService: () => (/* binding */ AuthServiceService)
/* harmony export */ });
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/auth */ 91805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 52712);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 16088);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 24040);





class AuthServiceService {
  constructor(afs, afAuth, router, ngZone) {
    this.afs = afs;
    this.afAuth = afAuth;
    this.router = router;
    this.ngZone = ngZone;
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }
  signIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  signUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }
  get isLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null ? true : false;
  }
  googleAuth() {
    return this.authLogin(new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider());
  }
  facebookAuth() {
    return this.authLogin(new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_0__.FacebookAuthProvider());
  }
  authLogin(provider) {
    return this.afAuth.signInWithPopup(provider).then(() => {
      this.router.navigate(['/home']);
    }).catch(error => {
      window.alert(error);
    });
  }
  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/home']);
    });
  }
  static #_ = this.ɵfac = function AuthServiceService_Factory(t) {
    return new (t || AuthServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthServiceService,
    factory: AuthServiceService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2944:
/*!************************************************!*\
  !*** ./src/app/services/block-item.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemService: () => (/* binding */ ItemService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/database */ 75872);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/auth */ 16088);



class ItemService {
  constructor(db, auth) {
    this.db = db;
    this.auth = auth;
    this.items = null;
    this.auth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid;
      }
    });
  }
  // Return an observable list.
  getItemsList() {
    if (!this.userId) {
      return;
    }
    this.items = this.db.list(`items/${this.userId}`);
    return this.items;
  }
  // Creates a new record on the list, using the Realtime Database's push-ids.
  createItem(item) {
    this.items = this.getItemsList();
    item.total = item.holdings * item.price;
    /* Fix: When you pass an object to Firebase, the values of the properties can be a value or null.
    They can not be undefined */
    item.key = null;
    this.items.push(item);
    const listObservable = this.items.snapshotChanges();
    listObservable.subscribe();
  }
  // Non-destructive update
  updateItem(key, item) {
    this.items.update(key, item).catch(error => console.log(error));
  }
  // Deletes the item by key. If no parameter is provided, the entire list will be deleted.
  deleteItem(key) {
    this.items.remove(key).catch(error => console.log(error));
  }
  static #_ = this.ɵfac = function ItemService_Factory(t) {
    return new (t || ItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_1__.AngularFireDatabase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ItemService,
    factory: ItemService.ɵfac
  });
}

/***/ }),

/***/ 58644:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataService: () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _assets_offlineData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/offlineData */ 11824);
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils */ 23476);
/* harmony import */ var _core_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/interfaces */ 17028);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 40604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 33712);







class DataService {
  constructor(http) {
    this.http = http;
    this.apiKey = 'c6d27a61006e744bde9f940f6a6ef693aa724d8682b47c1bd26d361befc13faa';
    this.baseUrl = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&api_key=${this.apiKey}`;
    this.allCoinsDataUrl = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;
    this.histoDataUrl = 'https://min-api.cryptocompare.com/data/histoday?fsym=';
    this.priceMultiFullUrl = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=';
  }
  getData() {
    return this.http.get(this.baseUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => {
      return this.transformData(result);
    }));
  }
  getSpecificCoinData(symbol) {
    return this.http.get(this.priceMultiFullUrl + symbol + '&tsyms=USD&api_key=' + this.apiKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => {
      const returnedCoin = (0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.flattenObject)(result['RAW'][symbol]['USD']);
      const coin = new _core_interfaces__WEBPACK_IMPORTED_MODULE_2__.BlockItem();
      (0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.fillFromJSON)(coin, returnedCoin);
      return coin;
    }));
  }
  getBetweenDaysPrices(symbol, forDays) {
    return this.http.get(this.histoDataUrl + symbol + '&tsym=USD&limit=' + forDays + '&api_key=' + this.apiKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => {
      return result;
    }));
  }
  getHistoricalData(symbol) {
    return this.http.get(this.histoDataUrl + symbol + '&tsym=USD&limit=730&api_key=' + this.apiKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => {
      return {
        data: result,
        symbol: symbol
      };
    }));
  }
  getCryptoIdFromSymbol(symbol) {
    return this.http.get(this.allCoinsDataUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => {
      const crypto = result['Data'][symbol];
      return crypto;
    }));
  }
  transformData(data) {
    const transformedData = [];
    this.coins = [];
    if (data['Message'] === 'Success' && data['HasWarning'] === false && data['Data'].length !== 0) {
      const indexes = Object.keys(data['Data']);
      for (const idx of indexes) {
        const newCoin = new _core_interfaces__WEBPACK_IMPORTED_MODULE_2__.CoinItem();
        transformedData.push((0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.flattenObject)(data['Data'][idx]));
        (0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.fillFromJSON)(newCoin, transformedData[idx]);
        if (newCoin.changePct24Hour >= 0) {
          newCoin.dailyScale = true;
        } else {
          newCoin.dailyScale = false;
        }
        newCoin.rank = Number(idx) + 1;
        this.coins.push(newCoin);
      }
    } else {
      for (let i = 0; i < _assets_offlineData__WEBPACK_IMPORTED_MODULE_0__.offlineData.length; i++) {
        const coin = new _core_interfaces__WEBPACK_IMPORTED_MODULE_2__.CoinItem();
        (0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.fillFromJSON)(coin, _assets_offlineData__WEBPACK_IMPORTED_MODULE_0__.offlineData[i]);
        this.coins.push(coin);
      }
    }
    return (0,_core_utils__WEBPACK_IMPORTED_MODULE_1__.sortDataByKey)(this.coins, 'rank');
  }
  static #_ = this.ɵfac = function DataService_Factory(t) {
    return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: DataService,
    factory: DataService.ɵfac
  });
}

/***/ }),

/***/ 60552:
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupComponent: () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 24040);
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router.animations */ 45532);
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 27492);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 45359);









const _c0 = ["snack"];
class SignupComponent {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
    this.state = '';
  }
  onSubmit(formData) {
    if (formData.valid) {
      this.authService.signUp(formData.value.email, formData.value.password).then(() => {
        this.router.navigate(['/login']);
      }).catch(err => {
        this.snack.open(err.message);
      });
    }
  }
  static #_ = this.ɵfac = function SignupComponent_Factory(t) {
    return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthServiceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: SignupComponent,
    selectors: [["app-signup"]],
    viewQuery: function SignupComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.snack = _t.first);
      }
    },
    hostVars: 1,
    hostBindings: function SignupComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsyntheticHostProperty"]("@moveIn", undefined);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 25,
    vars: 4,
    consts: [[1, "form-container"], ["id", "lockIcon", "name", "person"], [3, "ngSubmit"], ["formData", "ngForm"], ["igxLabel", "", "for", "email"], ["igxInput", "", "name", "email", "type", "email", "required", "", 3, "ngModel", "ngModelChange"], ["name", "email"], ["igxLabel", "", "for", "password"], ["igxInput", "", "name", "password", "type", "password", "required", "", 3, "ngModel", "ngModelChange"], ["name", "lock"], [1, "signup-form-actions"], ["igxButton", "flat", "igxRipple", "", "routerLink", "/login", "id", "goback"], ["igxButton", "contained", "igxRipple", "", "type", "submit", 1, "basic-btn", 3, "disabled"], [1, "sbPosition"], [3, "autoHide"], ["snack", ""]],
    template: function SignupComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "igx-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onSubmit(_r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "igx-input-group")(6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "igx-suffix");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "igx-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "igx-input-group")(12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "igx-suffix");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "igx-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10)(18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Create my account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "igx-snackbar", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autoHide", true);
      }
    },
    dependencies: [_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxIconModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxInputGroupModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxInputGroupComponent, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxInputDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxLabelDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxSuffixDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxButtonModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxButtonDirective, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxRippleModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxRippleDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxSnackbarModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_4__.IgxSnackbarComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_router_animations__WEBPACK_IMPORTED_MODULE_0__.moveIn)(), (0,_router_animations__WEBPACK_IMPORTED_MODULE_0__.fallIn)()]
    }
  });
}

/***/ }),

/***/ 47300:
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatisticsComponent: () => (/* binding */ StatisticsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 40604);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 83680);
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 27492);
/* harmony import */ var igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! igniteui-angular-charts */ 34964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/data.service */ 58644);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 24040);









const _c0 = ["combo"];
class StatisticsComponent {
  constructor(dataService, route, cdr, zone) {
    this.dataService = dataService;
    this.route = route;
    this.cdr = cdr;
    this.zone = zone;
    this.int = 0;
    this.data = [];
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(params => params.getAll('cryptoName') || route.routeConfig.data.cryptoName)).subscribe(res => {
      this.cryptoName = res.length === 0 ? {
        name: 'Bitcoin',
        symbol: 'BTC'
      } : {
        name: res[0].split(',')[1],
        symbol: res[0].split(',')[0]
      };
    });
    this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(params => params.get('daysCount') || route.routeConfig.data.daysCount)).subscribe(res => this.daysCount = res);
  }
  ngAfterViewInit() {
    // this.getAndTransformData();
    this.chart.overlayTypes.add(igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_2__.FinancialOverlayType.PriceChannel);
  }
  ngOnInit() {
    this.getAndTransformData();
    this.combo.selectionChanging.subscribe(evt => {
      if (this.coins) {
        if (evt.newValue.length === 0) {
          this.clearChartData();
        } else {
          const coin = evt.added.length !== 0 ? evt.added : evt.removed;
          const removeRecord = evt.added.length !== 0 ? false : true;
          this.fillChart(coin, removeRecord);
        }
      }
    });
  }
  fillChart(obj, removeRecord) {
    this.dataService.getHistoricalData(obj[0].symbol).subscribe(res => {
      const returnedData = Object.assign(res.data).Data.map(item => {
        // Transform data for the Chart. Multiply by 1000 because Date() requires miliseconds
        const dateObject = new Date(item.time * 1000);
        item.time = dateObject;
        return item;
      });
      if (removeRecord) {
        // Removing data item
        this.data = this.arrayRemove(this.data, obj[0].name);
        this.chart.notifyInsertItem(this.data, this.data.length - 1, [returnedData, returnedData.title = obj[0].name]);
      } else {
        // Adding data item
        this.data.push([returnedData, returnedData.title = obj[0].name]);
        this.chart.notifyInsertItem(this.data, this.data.length - 1, [returnedData, returnedData.title = obj[0].name]);
      }
    });
  }
  arrayRemove(arr, value) {
    return arr.filter(function (item) {
      return item[1] !== value;
    });
  }
  // Fill coins collection
  getAndTransformData() {
    this.dataService.getData().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
      const obj = [];
      for (let index = 0; index < data.length; index++) {
        const name = data[index]['fullName'];
        const symbol = data[index]['name'];
        obj.push({
          name: name,
          symbol: symbol
        });
      }
      return obj;
    })).subscribe(res => {
      // set combo datasource
      this.coins = res;
      // Or use
      // this.cdr.detectChanges();
      this.zone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.first)()).subscribe(() => {
        this.combo.select([this.cryptoName.symbol]);
      });
    });
  }
  clearChartData() {
    this.data = [];
  }
  static #_ = this.ɵfac = function StatisticsComponent_Factory(t) {
    return new (t || StatisticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: StatisticsComponent,
    selectors: [["app-statistics"]],
    viewQuery: function StatisticsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxComboComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_2__.IgxFinancialChartComponent, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.combo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 7,
    consts: [[1, "sample-wrapper"], [1, "chart-wrapper"], [1, "content-span"], ["placeholder", "Cryptocurrencies", "searchPlaceholder", "Search...", 3, "itemsMaxHeight", "data", "displayKey", "valueKey"], ["combo", ""], ["height", "100%", "width", "100%", "crosshairsDisplayMode", "both", "crosshairsAnnotationEnabled", "true", "chartType", "candle", "trendLineType", "ExponentialFit", "indicatorTypes", "StochRSI", "finalValueAnnotationsVisible", "true", 2, "margin-top", "20px", 3, "dataSource", "isToolbarVisible", "crosshairsAnnotationEnabled"]],
    template: function StatisticsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "igx-combo", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "igx-financial-chart", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("itemsMaxHeight", 255)("data", ctx.coins)("displayKey", "name")("valueKey", "symbol");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.data)("isToolbarVisible", true)("crosshairsAnnotationEnabled", true);
      }
    },
    dependencies: [_infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxComboModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_6__.IgxComboComponent, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_2__.IgxFinancialChartCoreModule, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_2__.IgxFinancialChartComponent],
    styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n  .dark-theme .main igx-financial-chart .ig-tooltip-container-background {\n  background: black;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUlJO0VBQ0UsaUJBQUE7QUFETiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5kYXJrLXRoZW1lIC5tYWluIHtcclxuICBpZ3gtZmluYW5jaWFsLWNoYXJ0IHtcclxuICAgIC5pZy10b29sdGlwLWNvbnRhaW5lci1iYWNrZ3JvdW5kIHtcclxuICAgICAgYmFja2dyb3VuZDogYmxhY2tcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 11824:
/*!***********************************!*\
  !*** ./src/assets/offlineData.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   offlineData: () => (/* binding */ offlineData)
/* harmony export */ });
const offlineData = [{
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

/***/ 36716:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false,
  firebaseConfig: {
    apiKey: '${FIREBASE_API_KEY}',
    authDomain: '${FIREBASE_AUTH_DOMAIN}',
    databaseURL: '${FIREBASE_DATABASE_URL}',
    projectId: '${FIREBASE_PROJECT_ID}',
    storageBucket: '${FIREBASE_STORAGE_BUCKET}',
    messagingSenderId: '${FIREBASE_MESSAGING_SENDER_ID}'
  }
};

/***/ }),

/***/ 27460:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 94280);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ 36716);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 86108);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat/database */ 75872);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/storage */ 6668);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/auth */ 16088);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 52712);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat */ 36724);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 33712);
/* harmony import */ var igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! igniteui-angular-charts */ 34964);
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app-routing.module */ 80484);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 381);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 50168);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 71904);
/* harmony import */ var _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @infragistics/igniteui-angular */ 27492);
/* harmony import */ var _app_services_block_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/services/block-item.service */ 2944);
/* harmony import */ var _app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/services/data.service */ 58644);

















if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.enableProdMode)();
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxNavigationDrawerModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxNavbarModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxLayoutModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxRippleModule, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_9__.IgxFinancialChartModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxAvatarModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxButtonModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxIconModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxCardModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxInputGroupModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxListModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxFilterModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxTabsModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxSnackbarModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxDialogModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxToggleModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxGridModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxComboModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxActionStripModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxFocusModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebaseConfig), _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestoreModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_12__.AngularFireAuthModule, _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_13__.AngularFireStorageModule, _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_14__.AngularFireDatabaseModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxDividerModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxExpansionPanelModule, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxTooltipModule, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_9__.IgxPieChartModule, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_9__.IgxLegendModule, igniteui_angular_charts__WEBPACK_IMPORTED_MODULE_9__.IgxItemLegendModule), _app_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService, _app_services_block_item_service__WEBPACK_IMPORTED_MODULE_3__.ItemService, _infragistics_igniteui_angular__WEBPACK_IMPORTED_MODULE_8__.IgxExcelExporterService, (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.provideAnimations)(), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_16__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_16__.withInterceptorsFromDi)())]
}).catch(err => console.log(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(27460)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map