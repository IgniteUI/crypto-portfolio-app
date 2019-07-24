(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" igxLayout>\r\n  <igx-nav-drawer #nav id=\"project-menu\" [enableGestures]=\"true\" width=\"280px\" [pin]=\"false\" pinThreshold=\"5000\">\r\n    <ng-template igxDrawer>\r\n      <span igxDrawerItem [isHeader]=\"true\">Menu</span>\r\n      <span *ngFor=\"let route of topNavLinks\" igxDrawerItem igxRipple routerLinkActive=\"igx-nav-drawer__item--active\"\r\n        routerLink=\"{{route.path}}\">\r\n        <span *ngIf=\"route.subItem\">&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n        <igx-icon fontSet=\"material\">{{route.icon}}</igx-icon>\r\n        <span>{{route.name}}</span>\r\n      </span>\r\n    </ng-template>\r\n  </igx-nav-drawer>\r\n  <div igxFlex>\r\n    <igx-navbar title=\"Crypto Blockfolio App\" actionButtonIcon=\"menu\" (onAction)=\"nav.toggle()\" igxFlex>\r\n        <div class=\"theme-chooser\">\r\n            <div *ngIf =\"darkTheme\" class=\"theme-chooser__item--light\"\r\n            (click)=\"this.changeTheme()\" title = \"Light Theme\">\r\n            </div>\r\n            <div *ngIf =\"!darkTheme\" class=\"theme-chooser__item--dark\" title = \"Dark Theme\"\r\n            (click)=\"this.changeTheme(true)\">\r\n            </div>\r\n          </div>\r\n      <span>\r\n        <div class=\"account-container\" *ngIf=\"afAuth.authState | async as user; else showLogin\">\r\n          <span *ngIf=\"innerWidth > 650\">{{ user.displayName !== null ? 'Hey ' + user.displayName.split(' ')[0] + '!' : '' }}</span>\r\n          <button igxButton=\"raised\" igxRipple (click)=\"logout()\">Logout</button>\r\n        </div>\r\n        <ng-template #showLogin>\r\n          <div><button igxButton=\"raised\" igxRipple (click)=\"login()\">Login</button></div>\r\n        </ng-template>\r\n      </span>\r\n    </igx-navbar>\r\n    <div class=\"content\" igxLayout igxLayoutJustify=\"center\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/block-grid/block-grid.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/block-grid/block-grid.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sample-wrapper\">\r\n  <div class=\"sample-content\">\r\n    <div class=\"buttons-container\" *ngIf=\"!hideColumn; else elseBlock\">\r\n      <button id=\"refresh\" igxButton=\"raised\" igxRipple (click)=\"refreshGrid()\">\r\n        <igx-icon>refresh</igx-icon>\r\n      </button>\r\n      <button [igxTooltipTarget]=\"tooltipRef\" id=\"exportButton\" igxButton=\"raised\" igxRipple (click)=\"exportGrid()\">\r\n        <img src=\"https://img.icons8.com/material/24/000000/ms-excel.png\">\r\n      </button>\r\n    </div>\r\n    <ng-template #elseBlock>\r\n      <button id=\"refreshFabBtn\" igxButton=\"fab\" igxRipple (click)=\"refreshGrid()\">\r\n        <igx-icon>refresh</igx-icon>\r\n      </button>\r\n    </ng-template>\r\n    <div #tooltipRef=\"tooltip\" igxTooltip>\r\n      Export to Excel\r\n    </div>\r\n    <igx-grid #grid1 [data]=\"remoteData\" width=\"calc(100% - 18px)\" height=\"100%\" [allowFiltering]=\"true\"\r\n      [filterMode]=\"'excelStyleFilter'\">\r\n      <ng-template igxExcelStyleHidingTemplate></ng-template>\r\n      <ng-template igxExcelStyleMovingTemplate></ng-template>\r\n      <ng-template igxExcelStylePinningTemplate></ng-template>\r\n      <ng-template igxGroupByRow let-groupRow>\r\n        <div *ngIf=\"groupRow.expression.fieldName === 'dailyScale'; else defaultGroupByTemplate\">\r\n          <div class=\"igx-group-label\">\r\n            <igx-icon fontSet=\"material\" class=\"igx-group-label__icon\">group_work</igx-icon>\r\n            <span class=\"igx-group-label__column-name\">\r\n              {{ groupRow.value ? 'Positive Daily Scale' : 'Negative Daily Scale' }}:\r\n            </span>\r\n            <igx-badge [value]=\"groupRow.records ? groupRow.records.length : 0\" class='igx-group-label__count-badge'>\r\n            </igx-badge>\r\n          </div>\r\n        </div>\r\n        <ng-template #defaultGroupByTemplate>\r\n          <div class=\"igx-group-label\">\r\n            <igx-icon fontSet=\"material\" class=\"igx-group-label__icon\">group_work</igx-icon>\r\n            <span class=\"igx-group-label__column-name\">\r\n              {{ groupRow.expression ? getHeader(groupRow.expression.fieldName) : '' }}:\r\n            </span>\r\n\r\n            <ng-container>\r\n              <span class=\"igx-group-label__text\">{{ groupRow.value }}</span>\r\n            </ng-container>\r\n\r\n            <igx-badge [value]=\"groupRow.records ? groupRow.records.length : 0\" class='igx-group-label__count-badge'>\r\n            </igx-badge>\r\n          </div>\r\n        </ng-template>\r\n      </ng-template>\r\n\r\n      <igx-column [width]=\"setWidth('20%', '20%')\" field=\"fullName\" header=\"Name\" [filterable]=\"true\">\r\n        <ng-template igxCell let-cell=\"cell\" let-item>\r\n          <span *ngIf=\"hideColumn === false\" class=\"coin-logo\">\r\n            <img src=\"{{ getCoinImage(cell.row.rowData['imageUrl']) }}\" />\r\n          </span>\r\n          <span class=\"coin-title\">{{ item }}</span>\r\n        </ng-template>\r\n      </igx-column>\r\n\r\n      <igx-column [width]=\"setWidth('15%', '10%')\" [header]=\"hideColumn ? 'Chart' : 'Volatility'\" [filterable]=\"false\" [hidden]=\"false\">\r\n        <ng-template igxCell let-cell=\"cell\">\r\n          <span igxButton=\"icon\" igxRipple (click)='openChart($event, cell.row.rowData.name)'>\r\n            <igx-icon>insert_chart</igx-icon>\r\n          </span>\r\n        </ng-template>\r\n      </igx-column>\r\n\r\n      <igx-column #changeCol [width]=\"setWidth('25%', '13%')\" field=\"changePct24Hour\" dataType=\"number\" sortable=\"true\"\r\n      dataType=\"number\" [groupable]=\"true\" [cellClasses]=\"changes24h\">\r\n      <ng-template igxHeader let-column=\"column\">\r\n        (24 h) %\r\n      </ng-template>\r\n      <ng-template igxCell let-item let-ri=\"rowIndex\" let-column=\"column\" dataType=\"number\"\r\n        let-class=\"{{ item >= 0 ? 'up' : 'down'}}\">\r\n        <span class=\"percent-style-{{ item >= 0 ? 'up' : 'down'}}\"> {{ item | number:'0.0-2' }} %</span>\r\n      </ng-template>\r\n    </igx-column>\r\n\r\n      <igx-column width=\"20%\" field=\"price\" filterable=\"true\" dataType=\"number\">\r\n        <ng-template igxHeader let-column=\"column\">\r\n          Price\r\n        </ng-template>\r\n        <ng-template igxCell let-item let-ri=\"rowIndex\" let-column=\"column\">\r\n                <div style=\"width: 100%; text-align: center\">\r\n                    $ {{ item | number:'0.0-2' }}\r\n                </div>\r\n              </ng-template>\r\n      </igx-column>\r\n\r\n      <igx-column #supplyCol width=\"15%\" field=\"supply\" sortable=\"true\" filterable=\"true\" dataType=\"number\"\r\n        [hidden]=\"hideColumn\">\r\n        <ng-template igxHeader let-column=\"column\">\r\n          Total supply\r\n        </ng-template>\r\n        <ng-template igxCell let-item let-ri=\"rowIndex\" let-column=\"column\">\r\n          <span> {{ item | number:'3.0-2' }}</span>\r\n        </ng-template>\r\n      </igx-column>\r\n\r\n      <igx-column field=\"dailyScale\" header=\"Daily Scale\" dataType=\"boolean\" [groupable]=\"true\" [hidden]=\"true\">\r\n      </igx-column>\r\n      <igx-column [width]=\"setWidth('20%', '12%')\" field=\"proofType\" header=\"Proof Type\" dataType=\"string\"\r\n        [groupable]=\"true\" [hidden]=\"false\">\r\n        <ng-template igxCell let-value>\r\n          <div style=\"width: 100%; text-align: center\">\r\n            {{value}}\r\n          </div>\r\n        </ng-template>\r\n      </igx-column>\r\n\r\n      <igx-column [width]=\"'10%'\" field=\"algorithm\" header=\"Algorithm\" dataType=\"string\"\r\n        [groupable]=\"true\" [hidden]=\"hideColumn\">\r\n        <ng-template igxCell let-value>\r\n          <div style=\"width: 100%; text-align: center\">\r\n            {{value}}\r\n          </div>\r\n        </ng-template>\r\n      </igx-column>\r\n\r\n    </igx-grid>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/block-list/block-list.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/block-list/block-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sample-wrapper\">\r\n    <igx-input-group type=\"search\" class=\"search\">\r\n        <igx-prefix>\r\n            <igx-icon>search</igx-icon>\r\n        </igx-prefix>\r\n        <input #search igxInput placeholder=\"Search by name\" [(ngModel)]=\"searchCrypto\">\r\n        <igx-suffix *ngIf=\"search.value.length > 0\" (click)=\"searchCrypto = null\">\r\n            <igx-icon>clear</igx-icon>\r\n        </igx-suffix>\r\n    </igx-input-group>\r\n\r\n    <div class=\"list-sample\">\r\n        <igx-list [@listAnimation]=\"remoteData.length\">\r\n            <igx-list-item isHeader=\"true\">Cryptocurrencies</igx-list-item>\r\n            <igx-list-item #item *ngFor=\"let crypto of remoteData | igxFilter: filterCryptos;\">\r\n                <div class=\"crypto\">\r\n                    <div class=\"crypto__info\">\r\n                        <span class=\"crypto__item\">\r\n\r\n                            <div class=\"crypto__name\">\r\n                              <igx-avatar size=\"small\" class=\"crypto__avatar\" src=\"{{ getCoinImage(crypto['imageUrl']) }}\" roundShape=\"true\"></igx-avatar>\r\n                              <span>\r\n                                  {{ crypto['fullName'] }}\r\n                              </span>\r\n                            </div>\r\n\r\n                            <div class=\"crypto__details\">\r\n                              <span class=\"crypto__price\">${{ crypto['price'] | number: '1.0-3' }}</span>\r\n\r\n                              <span class=\"percent-style-{{ crypto['changePct24Hour'] >= 0 ? 'up' : 'down'}}\">\r\n                                  {{ crypto['changePct24Hour'] | number: '0.0-2' }} %\r\n                              </span>\r\n\r\n                              <igx-icon [color]=\"crypto['changePct24Hour'] >= 0 ? 'green' : 'red'\">\r\n                                    {{ crypto['changePct24Hour'] >= 0 ? 'arrow_drop_up' : 'arrow_drop_down'}}\r\n                              </igx-icon>\r\n\r\n                              <span class=\"li_item\">(24h)</span>\r\n                            </div>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </igx-list-item>\r\n        </igx-list>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/email/email.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/email/email.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\r\n   <div>\r\n      <igx-icon id=\"lockIcon\">email</igx-icon>\r\n      <form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\r\n         <igx-input-group>\r\n            <label igxLabel for=\"email\">Email address</label>\r\n            <input igxInput name=\"email\" type=\"email\" [(ngModel)]=\"email\" required />\r\n            <igx-suffix>\r\n               <igx-icon>email</igx-icon>\r\n            </igx-suffix>\r\n         </igx-input-group>\r\n         <igx-input-group>\r\n            <label igxLabel for=\"password\">Password</label>\r\n            <input igxInput name=\"password\" type=\"password\" [(ngModel)]=\"password\" required />\r\n            <igx-suffix>\r\n               <igx-icon>lock</igx-icon>\r\n            </igx-suffix>\r\n         </igx-input-group>\r\n\r\n         <div class=\"signup-form-actions\">\r\n            <a igxButton=\"flat\" igxRipple routerLink=\"/login\" id=\"goback\">Go back</a>\r\n            <button id=\"loginBtn\" igxButton=\"raised\" igxRipple type=\"submit\" [disabled]=\"!formData.valid\"\r\n               class=\"basic-btn\">Log in</button>\r\n         </div>\r\n         <div class=\"sbPosition\">\r\n            <igx-snackbar #snack [autoHide]=\"true\" [message]=\"error\"></igx-snackbar>\r\n         </div>\r\n      </form>\r\n      <a routerLink=\"/signup\" class=\"alc\">Don't have an account?</a>\r\n   </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<div *ngIf=\"cryptos\">\r\n    <div class=\"sample-wrapper\">\r\n        <igx-input-group type=\"search\" class=\"searchBox\">\r\n            <input #input1 igxInput placeholder=\"Search by name or symbol\" [(ngModel)]=\"searchValue\" />\r\n            <igx-prefix>\r\n                <igx-icon>search</igx-icon>\r\n            </igx-prefix>\r\n            <igx-suffix *ngIf=\"input1.value.length > 0\" (click)=\"clear(input1)\">\r\n                <igx-icon>clear</igx-icon>\r\n            </igx-suffix>\r\n        </igx-input-group>\r\n        <div class=\"sample-content\">\r\n            <article class=\"sample-column card-wrapper\" *ngFor=\"let crypto of cryptos | igxFilter: filterOptions\" [@flyInOut]>\r\n                <igx-card>\r\n                    <igx-card-header vertical=\"true\">\r\n                        <igx-card-media height=\"32px\">\r\n                            <img src=\"{{ getCoinImage(crypto['imageUrl']) }}\" />\r\n                        </igx-card-media>\r\n                        <span igxCardHeaderTitle>{{ crypto['fullName'] }}</span><span>({{ crypto['name'] }})</span>\r\n                    </igx-card-header>\r\n                    <igx-card-content>\r\n                        <p><strong>Price: ${{ crypto['price'] | number: '1.0-8'  }} </strong>\r\n                            <span class=\"percent-style-{{ crypto['changePct24Hour'] >= 0 ? 'up' : 'down'}}\">({{ crypto['changePct24Hour'] | number: '0.0-2' }})%</span> 24h\r\n                        </p>\r\n                        <p>Rank: <strong>{{ crypto['rank'] }}</strong></p>\r\n                        <p>Proof type: <strong>{{ crypto['proofType'] }}</strong></p>\r\n                        <p>Market Cap: <strong>${{ crypto['mktcap'] | number:'3.0-2' }}</strong></p>\r\n                    </igx-card-content>\r\n                    <igx-divider></igx-divider>\r\n                    <igx-card-actions>\r\n                        <button igxButton igxRipple (click)=\"openChart($event, crypto['name'])\">\r\n                            View chart\r\n                        </button>\r\n                    </igx-card-actions>\r\n                </igx-card>\r\n            </article>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/loading-spinner/loading-spinner.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loading-spinner/loading-spinner.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\r\n  <div class=\"double-bounce1\"></div>\r\n  <div class=\"double-bounce2\"></div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\r\n  <div *ngIf=\"!showSpinner; else elseBlock\">\r\n    <igx-icon id=\"lockIcon\">lock_open</igx-icon>\r\n    <span class=\"error\" *ngIf=\"error\">{{ error }}</span>\r\n\r\n    <button class=\"button\" igxButton=\"raised\" igxRipple (click)=\"loginFb()\" id=\"fb\">\r\n      <img class=\"s-logo\" src=\"../../assets/images/facebook.svg\" alt=\"\">\r\n      <span>Login With Facebook</span>\r\n    </button>\r\n\r\n    <button class=\"button\" igxButton=\"raised\" igxRipple (click)=\"loginGoogle()\" id=\"google\">\r\n      <img class=\"s-logo\" src=\"../../assets/images/google.svg\" alt=\"\">\r\n      <span>Login With Google</span>\r\n    </button>\r\n\r\n    <button class=\"button\" igxButton=\"raised\" igxRipple (click)=\"loginEmail()\" id=\"email\">\r\n      <igx-icon class=\"s-logo\">email</igx-icon>\r\n      <span>Email</span>\r\n    </button>\r\n\r\n    <a routerLink=\"/signup\" routerLinkActive=\"active\" class=\"alc\">Sign up for an <strong>Account</strong></a>\r\n  </div>\r\n  <ng-template #elseBlock>\r\n    <app-loading-spinner *ngIf=\"showSpinner\"></app-loading-spinner>\r\n  </ng-template>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portfolio/portfolio.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portfolio/portfolio.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sample-wrapper\" igxOverlayOutlet>\r\n   <div class=\"sample-content\">\r\n     <span>\r\n        <button id=\"refreshBtn\" igxButton=\"raised\" igxRipple (click)=\"updatePortfolio()\">\r\n            <igx-icon>refresh</igx-icon> Total Portfolio Value: {{ calculateTotalPortfolio() | number:'0.2-2' }}\r\n         </button>\r\n     </span>\r\n\r\n      <span>\r\n          <button id=\"addBtn\" igxButton=\"raised\" igxRipple (click)=\"openDialog()\">\r\n              <igx-icon>playlist_add</igx-icon> Add coin\r\n           </button>\r\n      </span>\r\n\r\n      <igx-grid #grid1 [data]=\"blockItems\" width=\"100%\" height=\"500px\" toolbarTitle=\"My portfolio\"\r\n         (onCellEdit)=\"updateRow($event)\" [showToolbar]=\"true\"\r\n         [columnHiding]=\"true\" [columnPinning]=\"true\">\r\n         <igx-column field=\"name\" header=\"Coin symbol\" field=\"name\" sortable=\"true\">\r\n            <ng-template igxCell let-cell=\"cell\" let-ri=\"rowIndex\" let-column=\"column\">\r\n               <div class=\"positionTop\">\r\n                  <img src=\"{{ getCoinImage(cell.row.rowData.imageUrl) }}\" />\r\n                  <span class=\"symbolPosition\">\r\n                     {{ cell.row.rowData.name }}</span>\r\n               </div>\r\n            </ng-template>\r\n         </igx-column>\r\n         <igx-column field=\"holdings\" header=\"Holdings\" editable=\"true\" sortable=\"true\">\r\n            <ng-template igxCell let-cell=\"cell\" let-ri=\"rowIndex\" let-column=\"column\">\r\n               <div class=\"positionTop\">\r\n                  ${{ calculateHoldings(cell.row.rowData.holdings, cell.row.rowData.price) |\r\n                        number:'0.2-2' }}\r\n                  <br />\r\n                  <b>{{ cell.row.rowData.holdings | number:'1.0-7' }}</b>\r\n               </div>\r\n            </ng-template>\r\n         </igx-column>\r\n         <igx-column header=\"Price\" field=\"price\" sortable=\"true\" [cellClasses]=\"dailyChanges\">\r\n            <ng-template igxCell let-cell=\"cell\" let-ri=\"rowIndex\" let-column=\"column\">\r\n               <div class=\"positionTop\">\r\n                  ${{ cell.row.rowData.price | number:'0.2-2' }}\r\n                  <br />\r\n                  <span\r\n                     class=\"percent-style-{{ cell.row.rowData.changePct24Hour >= 0 ? 'up' : 'down'}}\">{{ cell.row.rowData.changePct24Hour | number:'0.2-2' }}\r\n                     % </span>\r\n               </div>\r\n            </ng-template>\r\n         </igx-column>\r\n         <igx-column header=\"Actions\">\r\n            <ng-template igxCell let-cell=\"cell\" let-column=\"column\">\r\n               <span igxButton=\"icon\" igxRipple (click)='deleteRow(cell)'>\r\n                  <igx-icon>highlight_off</igx-icon>\r\n               </span>\r\n               <span igxButton=\"icon\" igxRipple (click)='openChart($event, cell.row.rowData.name)'>\r\n                  <igx-icon>insert_chart</igx-icon>\r\n               </span>\r\n            </ng-template>\r\n         </igx-column>\r\n      </igx-grid>\r\n      <div class=\"sbPosition\">\r\n         <igx-snackbar #snack [autoHide]=\"true\" message=\"Record was deleted\" actionText=\"Undo\" (onAction)=\"restore()\">\r\n         </igx-snackbar>\r\n      </div>\r\n      <div class=\"sbPosition\">\r\n         <igx-snackbar #snackExists [autoHide]=\"true\">\r\n         </igx-snackbar>\r\n      </div>\r\n   </div>\r\n\r\n   <igx-dialog #modal title=\"Add coin\" leftButtonLabel=\"Cancel\" (onLeftButtonSelect)=\"modal.close()\"\r\n      (onRightButtonSelect)=\"addItem($event)\" rightButtonLabel=\"Add coin\" [closeOnOutsideSelect]=\"true\">\r\n      <form class=\"addCoinForm\">\r\n         <igx-input-group type=\"border\">\r\n            <label igxLabel for=\"coin\">Coin name</label>\r\n            <input id=\"coin\" igxInput name=\"coin\" type=\"text\" [(ngModel)]=\"coinName\" />\r\n         </igx-input-group>\r\n         <br />\r\n         <igx-input-group type=\"border\">\r\n            <label igxLabel for=\"holdings\">Holdings</label>\r\n            <input igxInput name=\"holdings\" type=\"number\" [(ngModel)]=\"holdings\" />\r\n         </igx-input-group>\r\n      </form>\r\n   </igx-dialog>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\r\n  <div>\r\n    <igx-icon id=\"lockIcon\" name=\"person\"></igx-icon>\r\n    <form #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\r\n      <igx-input-group>\r\n        <label igxLabel for=\"email\">Email address</label>\r\n        <input igxInput name=\"email\" type=\"email\" [(ngModel)]=\"email\" required />\r\n        <igx-suffix>\r\n          <igx-icon name=\"email\"></igx-icon>\r\n        </igx-suffix>\r\n      </igx-input-group>\r\n      <igx-input-group>\r\n        <label igxLabel for=\"password\">Password</label>\r\n        <input igxInput name=\"password\" type=\"password\" [(ngModel)]=\"password\" required />\r\n        <igx-suffix>\r\n          <igx-icon name=\"lock\"></igx-icon>\r\n        </igx-suffix>\r\n      </igx-input-group>\r\n\r\n      <div class=\"signup-form-actions\">\r\n        <a igxButton=\"flat\" igxRipple routerLink=\"/login\" id=\"goback\">Go back</a>\r\n        <button igxButton=\"raised\" igxRipple type=\"submit\" [disabled]=\"!formData.valid\" class=\"basic-btn\">Create my account</button>\r\n      </div>\r\n\r\n      <div class=\"sbPosition\">\r\n          <igx-snackbar #snack [autoHide]=\"true\" [message]=\"error\"></igx-snackbar>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/statistics/statistics.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/statistics/statistics.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sample-wrapper\">\r\n  <div class=\"chart-wrapper\">\r\n    <span id=\"sText\">Cryptocurrency: </span>\r\n    <span style=\"width: 80px; display: inline-block;\">\r\n      <igx-input-group style=\"width: 100%\">\r\n        <input #input1 igxInput [(ngModel)]=\"cryptoName\" (click)=\"toggleDropDown($event,dropDown)\"\r\n          [title]=\"dropDown.collapsed? 'Click to open' : 'Click to close'\" />\r\n      </igx-input-group>\r\n    </span>\r\n    <igx-drop-down #dropDown>\r\n      <igx-list style=\"height:auto; overflow-y: auto; max-height: 300px;\" (onItemClicked)=\"getData($event)\">\r\n        <div>\r\n          <igx-list-item *ngFor=\"let coin of coins | igxFilter: filterNames\" style=\"width: 150px\">\r\n            {{coin.name}} [{{coin.symbol}}]\r\n          </igx-list-item>\r\n        </div>\r\n      </igx-list>\r\n    </igx-drop-down>\r\n    <span id=\"sText\">to see all price changes for the past </span>\r\n    <span style=\"width: 75px; display: inline-block;\">\r\n      <igx-input-group style=\"width: 100%\">\r\n        <input #input1 igxInput [(ngModel)]=\"daysCount\" (input)=\"this.getData()\" />\r\n        <igx-suffix>\r\n          days.\r\n        </igx-suffix>\r\n      </igx-input-group>\r\n    </span>\r\n    <igx-financial-chart [dataSource]=\"data\"\r\n                         height=\"100%\"\r\n                         width=\"100%\"\r\n                         style=\"margin-top: 20px;\"\r\n                         crosshairsDisplayMode=\"Horizontal\"\r\n                         crosshairsSnapToData=\"true\"\r\n                         [isToolbarVisible]=\"false\"\r\n                         chartType=\"candle\"\r\n                         trendLineType=\"ExponentialFit\"\r\n                         indicatorTypes=\"StochRSI\"\r\n                         [crosshairsAnnotationEnabled]=\"true\"\r\n                         finalValueAnnotationsVisible=\"true\">\r\n    </igx-financial-chart>\r\n  </div>\r\n</div>\r\n"

/***/ }),

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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _block_grid_block_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-grid/block-grid.component */ "./src/app/block-grid/block-grid.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email/email.component */ "./src/app/email/email.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./block-list/block-list.component */ "./src/app/block-list/block-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioComponent"], data: { text: 'My portfolio', iconName: 'account_box' },
        canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { text: 'Top 100 Crypto`s', iconName: 'call_made' } },
    { path: 'block-grid', component: _block_grid_block_grid_component__WEBPACK_IMPORTED_MODULE_4__["BlockGridComponent"], data: { text: 'Grid view', iconName: 'grid_on', subItem: true } },
    { path: 'block-list', component: _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_10__["BlockListComponent"], data: { text: 'List view', iconName: 'list_alt', subItem: true } },
    {
        path: 'statistics', component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_3__["StatisticsComponent"],
        data: { text: 'Volatility', iconName: 'insert_chart_outlined', cryptoName: 'BTC', daysCount: 100 }
    },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'email', component: _email_email_component__WEBPACK_IMPORTED_MODULE_7__["EmailComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".theme-chooser {\n  display: flex; }\n  .theme-chooser__item--light {\n    position: relative;\n    width: 34px;\n    height: 34px;\n    border-radius: 17px;\n    overflow: hidden;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    border: 2px solid white;\n    cursor: pointer;\n    transition: box-shadow .25s ease-out; }\n  .theme-chooser__item--light::before, .theme-chooser__item--light::after {\n      position: absolute;\n      content: '';\n      width: 50%;\n      top: 0;\n      bottom: 0; }\n  .theme-chooser__item--light::before {\n      left: 0;\n      background: #8049ff; }\n  .theme-chooser__item--light::after {\n      right: 0;\n      background: #E29C45; }\n  .theme-chooser__item--light:hover {\n      box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.24); }\n  .theme-chooser__item--dark {\n    position: relative;\n    width: 34px;\n    height: 34px;\n    border-radius: 17px;\n    overflow: hidden;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    border: 2px solid white;\n    cursor: pointer;\n    transition: box-shadow .25s ease-out; }\n  .theme-chooser__item--dark::before, .theme-chooser__item--dark::after {\n      position: absolute;\n      content: '';\n      width: 50%;\n      top: 0;\n      bottom: 0; }\n  .theme-chooser__item--dark::before {\n      left: 0;\n      background: #000; }\n  .theme-chooser__item--dark::after {\n      right: 0;\n      background: #72da67; }\n  .theme-chooser__item--dark:hover {\n      box-shadow: 0 0 2px 3px rgba(0, 0, 0, 0.24); }\n  .main {\n  width: 100%;\n  height: 100%; }\n  .content {\n  flex: 1 1 100%;\n  height: 85%; }\n  .temp {\n  vertical-align: top; }\n  .igx-nav-drawer__overlay {\n  position: fixed; }\n  igx-navbar {\n  height: 56px;\n  display: block; }\n  .igx-navbar {\n  position: fixed; }\n  .account-container span {\n  margin-right: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXERldlxcY3J5cHRvLXBvcnRmb2xpby1hcHAvc3JjXFxhcHBcXGFwcC10aGVtZXNcXGNob29zZXIuc2NzcyIsInNyYy9hcHAvRDpcXERldlxcY3J5cHRvLXBvcnRmb2xpby1hcHAvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ0U7RUFDRSxhQUFhLEVBQUE7RUFFYjtJQXJDQSxrQkFBa0I7SUFDbEIsV0FMZTtJQU1mLFlBTmU7SUFPZixtQkFBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixvQ0FBb0MsRUFBQTtFQUVwQztNQUVFLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsVUFBVTtNQUNWLE1BQU07TUFDTixTQUFTLEVBQUE7RUFHWDtNQUNFLE9BQU87TUFDUCxtQkFpQm1DLEVBQUE7RUFkckM7TUFDRSxRQUFRO01BQ1IsbUJBWTRDLEVBQUE7RUFUOUM7TUFDRSwyQ0FBMEMsRUFBQTtFQVc1QztJQXpDQSxrQkFBa0I7SUFDbEIsV0FMZTtJQU1mLFlBTmU7SUFPZixtQkFBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixvQ0FBb0MsRUFBQTtFQUVwQztNQUVFLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsVUFBVTtNQUNWLE1BQU07TUFDTixTQUFTLEVBQUE7RUFHWDtNQUNFLE9BQU87TUFDUCxnQkFxQmdDLEVBQUE7RUFsQmxDO01BQ0UsUUFBUTtNQUNSLG1CQWdCeUMsRUFBQTtFQWIzQztNQUNFLDJDQUEwQyxFQUFBO0VDakNoRDtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFHaEI7RUFDSSxjQUFjO0VBQ2QsV0FBVyxFQUFBO0VBR2Y7RUFDSSxtQkFBbUIsRUFBQTtFQUd2QjtFQUNJLGVBQWUsRUFBQTtFQUduQjtFQUNJLFlBQVk7RUFDWixjQUFjLEVBQUE7RUFHbEI7RUFDSSxlQUFlLEVBQUE7RUFHbkI7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjaG9vc2VyLXNpemU6IDM0cHg7XHJcblxyXG5AbWl4aW4gdGhlbWUtY2hvb3Nlci1pdGVtKCRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCkge1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAkY2hvb3Nlci1zaXplO1xyXG4gICAgaGVpZ2h0OiAkY2hvb3Nlci1zaXplO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGNob29zZXItc2l6ZSAvIDI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4yNXMgZWFzZS1vdXQ7XHJcbiAgICBcclxuICAgICY6OmJlZm9yZSxcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkZm9yZWdyb3VuZDtcclxuICAgIH1cclxuICBcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgLjI0KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnRoZW1lLWNob29zZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICBcclxuICAgICZfX2l0ZW0tLWxpZ2h0IHtcclxuICAgICAgQGluY2x1ZGUgdGhlbWUtY2hvb3Nlci1pdGVtKCM4MDQ5ZmYsICNFMjlDNDUpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJl9faXRlbS0tZGFyayB7XHJcbiAgICAgIEBpbmNsdWRlIHRoZW1lLWNob29zZXItaXRlbSgjMDAwLCAjNzJkYTY3KTtcclxuICAgIH1cclxuICB9IiwiQGltcG9ydCAnLi9hcHAtdGhlbWVzL2Nob29zZXIuc2Nzcyc7XHJcbi5tYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBmbGV4OiAxIDEgMTAwJTtcclxuICAgIGhlaWdodDogODUlO1xyXG59XHJcblxyXG4udGVtcCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4uaWd4LW5hdi1kcmF3ZXJfX292ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG5pZ3gtbmF2YmFyIHtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uaWd4LW5hdmJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi5hY2NvdW50LWNvbnRhaW5lciBzcGFuIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm2015/igniteui-angular.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let AppComponent = class AppComponent {
    constructor(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
        this.darkTheme = false;
        this.topNavLinks = [];
        this.isIE = /trident\//i.test(window.navigator.userAgent);
        for (const route of _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routes"]) {
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
                this.name = auth;
            }
        });
    }
    onResize(event) {
        this.innerWidth = window.innerWidth;
    }
    ngOnInit() {
        if (this.isIE) {
            this.layout.display = '';
        }
        document.body.classList.add('light-theme');
        document.body.style.background = '#eee';
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((x) => x instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]))
            .subscribe((event) => {
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
        }
        else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            document.body.style.background = '#eee';
            this.darkTheme = false;
        }
    }
    logout() {
        this.afAuth.auth.signOut();
        this.router.navigateByUrl('/home');
    }
    login() {
        this.router.navigate(['/login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(igniteui_angular__WEBPACK_IMPORTED_MODULE_4__["IgxNavigationDrawerComponent"], { static: true }),
    __metadata("design:type", igniteui_angular__WEBPACK_IMPORTED_MODULE_4__["IgxNavigationDrawerComponent"])
], AppComponent.prototype, "navdrawer", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(igniteui_angular__WEBPACK_IMPORTED_MODULE_4__["IgxLayoutDirective"], { read: igniteui_angular__WEBPACK_IMPORTED_MODULE_4__["IgxLayoutDirective"], static: true }),
    __metadata("design:type", igniteui_angular__WEBPACK_IMPORTED_MODULE_4__["IgxLayoutDirective"])
], AppComponent.prototype, "layout", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onResize", null);
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm2015/igniteui-angular.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var igniteui_angular_charts_ES5_igx_financial_chart_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-financial-chart-module */ "./node_modules/igniteui-angular-charts/ES5/igx-financial-chart-module.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _block_grid_block_grid_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./block-grid/block-grid.component */ "./src/app/block-grid/block-grid.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./email/email.component */ "./src/app/email/email.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./block-list/block-list.component */ "./src/app/block-list/block-list.component.ts");
/* harmony import */ var _services_block_item_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/block-item.service */ "./src/app/services/block-item.service.ts");
/* harmony import */ var _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./loading-spinner/loading-spinner.component */ "./src/app/loading-spinner/loading-spinner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























const firebaseConfig = {
    apiKey: 'AIzaSyASqXec1QsPpOZ6Pbgk5YuYOnmiewOOvhc',
    authDomain: 'crypto-portfolio-tracker.firebaseapp.com',
    databaseURL: 'https://crypto-portfolio-tracker.firebaseio.com',
    projectId: 'crypto-portfolio-tracker',
    storageBucket: 'crypto-portfolio-tracker.appspot.com',
    messagingSenderId: '1078645280256'
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_8__["StatisticsComponent"],
            _block_grid_block_grid_component__WEBPACK_IMPORTED_MODULE_12__["BlockGridComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
            _email_email_component__WEBPACK_IMPORTED_MODULE_19__["EmailComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_20__["SignupComponent"],
            _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_22__["PortfolioComponent"],
            _block_list_block_list_component__WEBPACK_IMPORTED_MODULE_23__["BlockListComponent"],
            _loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_25__["LoadingSpinnerComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxNavigationDrawerModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxNavbarModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxLayoutModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxRippleModule"],
            igniteui_angular_charts_ES5_igx_financial_chart_module__WEBPACK_IMPORTED_MODULE_9__["IgxFinancialChartModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxAvatarModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxButtonModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxIconModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxCardModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxInputGroupModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxListModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxFilterModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxTabsModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxSnackbarModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxDialogModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxToggleModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxGridModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp(firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxDividerModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxExpansionPanelModule"],
            igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxTooltipModule"]
        ],
        providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"], _services_block_item_service__WEBPACK_IMPORTED_MODULE_24__["ItemService"], igniteui_angular__WEBPACK_IMPORTED_MODULE_6__["IgxExcelExporterService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/block-grid/block-grid.component.scss":
/*!******************************************************!*\
  !*** ./src/app/block-grid/block-grid.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#refreshFabBtn {\n  position: fixed;\n  right: 33px;\n  z-index: 998;\n  bottom: 33px; }\n\n.coin-title {\n  font-size: 16px; }\n\n.coin-logo {\n  margin-right: 8px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.9); }\n\n.coin-logo > img {\n  width: 24px;\n  height: 24px; }\n\n#exportButton {\n  margin-left: 5px;\n  background-color: #72da67;\n  padding: 0;\n  cursor: pointer; }\n\n.buttons-container {\n  margin-bottom: 20px;\n  display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvY2stZ3JpZC9EOlxcRGV2XFxjcnlwdG8tcG9ydGZvbGlvLWFwcC9zcmNcXGFwcFxcYmxvY2stZ3JpZFxcYmxvY2stZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHaEI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsaUJBQWlCO0VBRWpCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdiO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsZUFBZSxFQUFBOztBQUdqQjtFQUNDLG1CQUFtQjtFQUNuQixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ibG9jay1ncmlkL2Jsb2NrLWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiNyZWZyZXNoRmFiQnRuIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAzM3B4O1xyXG4gICAgei1pbmRleDogOTk4O1xyXG4gICAgYm90dG9tOiAzM3B4O1xyXG59XHJcblxyXG4uY29pbi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uY29pbi1sb2dvIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgLjkpO1xyXG59XHJcblxyXG4uY29pbi1sb2dvID4gaW1nIHtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbiAjZXhwb3J0QnV0dG9ue1xyXG4gICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzJkYTY3O1xyXG4gICBwYWRkaW5nOiAwO1xyXG4gICBjdXJzb3I6IHBvaW50ZXI7XHJcbiB9XHJcblxyXG4gLmJ1dHRvbnMtY29udGFpbmVye1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuIH1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm2015/igniteui-angular.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils */ "./src/app/core/utils.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let BlockGridComponent = class BlockGridComponent {
    constructor(dataService, excelExportService, router) {
        this.dataService = dataService;
        this.excelExportService = excelExportService;
        this.router = router;
        this.positive24h = (rowData) => {
            return rowData['changePct24Hour'] >= 0;
        };
        this.negative24h = (rowData) => {
            return rowData['changePct24Hour'] < 0;
        };
        // tslint:disable-next-line:member-ordering
        this.changes24h = {
            positive: this.positive24h,
            negative: this.negative24h
        };
    }
    onResize(event) {
        this.windowWidth = event.target.innerWidth;
    }
    ngOnInit() {
        this.windowWidth = window.innerWidth;
    }
    loadData() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(15000)
            .startWith(0)
            .subscribe(() => {
            this.dataService.getData().subscribe(res => {
                this.remoteData = res;
            });
        });
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit() {
        this.grid1.onGroupingDone.subscribe((args) => {
            if (args.groupedColumns instanceof Array && args.groupedColumns.length !== 0) {
                const colNotForGroup = args.groupedColumns.find(col => col.field === 'changePct24Hour');
                if (colNotForGroup) {
                    this.grid1.clearGrouping('changePct24Hour');
                    if (args.groupedColumns.find(col => col.field === 'dailyScale') === undefined) {
                        this.grid1.groupBy({ fieldName: 'dailyScale', dir: igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["SortingDirection"].Asc });
                    }
                }
            }
            else if (args.groupedColumns instanceof igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxColumnComponent"]) {
                if (args.groupedColumns.field === 'changePct24Hour') {
                    this.grid1.clearGrouping('changePct24Hour');
                    this.grid1.groupBy({ fieldName: 'dailyScale', dir: igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["SortingDirection"].Asc });
                }
            }
        });
        this.grid1.groupBy({ fieldName: 'dailyScale', dir: igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["SortingDirection"].Asc });
        this.refreshGrid();
    }
    get hideColumn() {
        return this.windowWidth && this.windowWidth < 800;
    }
    setWidth(withHideColumns, withoutHideColumns) {
        return this.hideColumn ? withHideColumns : withoutHideColumns;
    }
    getCoinImage(imageUrl) {
        return Object(_core_utils__WEBPACK_IMPORTED_MODULE_3__["transformCoinImgUrl"])(imageUrl);
    }
    exportGrid() {
        const options = new igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxExcelExporterOptions"]('ExportFileFromGrid');
        options.ignoreColumnsVisibility = true;
        this.excelExportService.export(this.grid1, options);
    }
    refreshGrid() {
        this.grid1.reflow();
        this.loadData();
    }
    getHeader(fieldName) {
        return this.grid1.getColumnByName(fieldName).header;
    }
    openChart(evt, symbol) {
        this.router.navigate(['/statistics', { text: 'Volatility', iconName: 'insert_chart', cryptoName: symbol, daysCount: 100 }]);
    }
};
BlockGridComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
    { type: igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxExcelExporterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('grid1', { static: true }),
    __metadata("design:type", igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxGridComponent"])
], BlockGridComponent.prototype, "grid1", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BlockGridComponent.prototype, "onResize", null);
BlockGridComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-block-grid',
        template: __webpack_require__(/*! raw-loader!./block-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/block-grid/block-grid.component.html"),
        styles: [__webpack_require__(/*! ./block-grid.component.scss */ "./src/app/block-grid/block-grid.component.scss")]
    }),
    __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxExcelExporterService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], BlockGridComponent);



/***/ }),

/***/ "./src/app/block-list/block-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/block-list/block-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  flex: initial; }\n\n@media only screen and (max-width: 786px) {\n  :host {\n    flex: 1 0 0%; } }\n\n.list-sample {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  min-width: 500px;\n  overflow-y: auto;\n  max-height: calc(100vh - 154px);\n  min-height: 200px;\n  border-radius: 5px;\n  margin-top: 8px; }\n\n@media only screen and (max-width: 786px) {\n    .list-sample {\n      min-width: auto; } }\n\n.crypto {\n  width: 100%;\n  display: flex;\n  align-items: center; }\n\n.crypto__info {\n  flex: 1 0 0%; }\n\n.crypto__item {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center; }\n\n@media only screen and (max-width: 639px) {\n    .crypto__item {\n      flex-direction: column;\n      align-items: flex-start; } }\n\n.crypto__avatar {\n  margin-right: 8px; }\n\n.crypto__name,\n.crypto__details {\n  display: flex;\n  align-items: center;\n  flex: 1 0 0%; }\n\n.crypto__details {\n  justify-content: space-between; }\n\n.crypto__details .crypto__price {\n    margin-right: 16px; }\n\n.percent-style-down {\n  white-space: nowrap; }\n\n@media only screen and (max-width: 639px) {\n  .crypto__details {\n    min-width: 100%; }\n  .igx-navbar__title {\n    max-width: 144px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvY2stbGlzdC9EOlxcRGV2XFxjcnlwdG8tcG9ydGZvbGlvLWFwcC9zcmNcXGFwcFxcYmxvY2stbGlzdFxcYmxvY2stbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhLEVBQUE7O0FBR2Y7RUFDRTtJQUNFLFlBQVksRUFBQSxFQUNiOztBQUdIO0VBQ0UsK0dBRWtDO0VBQ2xDLGdCQUFnQjtFQUloQixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUVqQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQVJmO0lBTEY7TUFNSSxlQUFlLEVBQUEsRUFRbEI7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CLEVBQUE7O0FBRW5CO0lBTEY7TUFNSSxzQkFBc0I7TUFDdEIsdUJBQXVCLEVBQUEsRUFFMUI7O0FBRUQ7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSw4QkFBOEIsRUFBQTs7QUFEaEM7SUFHSSxrQkFBa0IsRUFBQTs7QUFJdEI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRTtJQUNFLGVBQWUsRUFBQTtFQUdqQjtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYmxvY2stbGlzdC9ibG9jay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsZXg6IGluaXRpYWw7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzg2cHgpIHtcclxuICA6aG9zdCB7XHJcbiAgICBmbGV4OiAxIDAgMCU7XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdC1zYW1wbGUge1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgbWluLXdpZHRoOiA1MDBweDtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc4NnB4KSB7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgfVxyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE1NHB4KTtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLmNyeXB0byB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY3J5cHRvX19pbmZvIHtcclxuICBmbGV4OiAxIDAgMCU7XHJcbn1cclxuXHJcbi5jcnlwdG9fX2l0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjM5cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB9XHJcbn1cclxuXHJcbi5jcnlwdG9fX2F2YXRhciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5jcnlwdG9fX25hbWUsXHJcbi5jcnlwdG9fX2RldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4OiAxIDAgMCU7XHJcbn1cclxuXHJcbi5jcnlwdG9fX2RldGFpbHMge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAuY3J5cHRvX19wcmljZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucGVyY2VudC1zdHlsZS1kb3duIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzOXB4KSB7XHJcbiAgLmNyeXB0b19fZGV0YWlscyB7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuaWd4LW5hdmJhcl9fdGl0bGUge1xyXG4gICAgbWF4LXdpZHRoOiAxNDRweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm2015/igniteui-angular.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils */ "./src/app/core/utils.ts");
/* harmony import */ var _core_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/animations */ "./src/app/core/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let BlockListComponent = class BlockListComponent {
    constructor(data) {
        this.data = data;
        this.remoteData = [];
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        this.data.getData()
            .subscribe(res => {
            this.remoteData = Object(_core_utils__WEBPACK_IMPORTED_MODULE_3__["sortDataByKey"])(res, 'rank');
        });
    }
    get filterCryptos() {
        const fo = new igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxFilterOptions"]();
        fo.key = 'fullName';
        fo.inputValue = this.searchCrypto;
        return fo;
    }
    getCoinImage(imageUrl) {
        return Object(_core_utils__WEBPACK_IMPORTED_MODULE_3__["transformCoinImgUrl"])(imageUrl);
    }
};
BlockListComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
];
BlockListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-block-list',
        template: __webpack_require__(/*! raw-loader!./block-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/block-list/block-list.component.html"),
        animations: [_core_animations__WEBPACK_IMPORTED_MODULE_4__["Animations"].listItemLoadAnimation],
        styles: [__webpack_require__(/*! ./block-list.component.scss */ "./src/app/block-list/block-list.component.scss")]
    }),
    __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
], BlockListComponent);



/***/ }),

/***/ "./src/app/core/animations.ts":
/*!************************************!*\
  !*** ./src/app/core/animations.ts ***!
  \************************************/
/*! exports provided: Animations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animations", function() { return Animations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

const Animations = {
    listItemLoadAnimation: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listAnimation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateY(-15px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('550ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0px)' })))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })), {
                optional: true
            })
        ])
    ])
};


/***/ }),

/***/ "./src/app/core/interfaces.ts":
/*!************************************!*\
  !*** ./src/app/core/interfaces.ts ***!
  \************************************/
/*! exports provided: CoinItem, BlockItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinItem", function() { return CoinItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockItem", function() { return BlockItem; });
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
        this.fullName = '';
        this.holdings = 0;
        this.name = '';
        this.supply = 0;
        this.changePct24Hour = 0;
        this.price = 0;
        this.imageUrl = '';
    }
}


/***/ }),

/***/ "./src/app/core/utils.ts":
/*!*******************************!*\
  !*** ./src/app/core/utils.ts ***!
  \*******************************/
/*! exports provided: sortDataByKey, flattenObject, transformCoinImgUrl, fillFromJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortDataByKey", function() { return sortDataByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenObject", function() { return flattenObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformCoinImgUrl", function() { return transformCoinImgUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillFromJSON", function() { return fillFromJSON; });
const baseUrl = 'https://www.cryptocompare.com';
function sortDataByKey(array, keyToSortBy) {
    function sortByKey(a, b) {
        const x = a[keyToSortBy];
        const y = b[keyToSortBy];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }
    return array.sort(sortByKey);
}
function flattenObject(ob) {
    const toReturn = {};
    for (const i in ob) {
        if (!ob.hasOwnProperty(i)) {
            continue;
        }
        if ((typeof ob[i]) === 'object') {
            const flatObject = flattenObject(ob[i]);
            for (const x in flatObject) {
                if (!flatObject.hasOwnProperty(x) || i === 'DISPLAY') {
                    continue;
                }
                toReturn[x] = flatObject[x];
            }
        }
        else {
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
        }
        else {
            obj[propName] = jsonObj[propName.toUpperCase()];
        }
    }
    return obj;
}


/***/ }),

/***/ "./src/app/email/email.component.scss":
/*!********************************************!*\
  !*** ./src/app/email/email.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsL2VtYWlsLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm2015/igniteui-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let EmailComponent = class EmailComponent {
    constructor(afAuth, router, route) {
        this.afAuth = afAuth;
        this.router = router;
        this.route = route;
        this.return = '';
        this.afAuth.authState.subscribe(auth => {
            if (auth) {
                this.router.navigateByUrl(this.return);
            }
        });
    }
    ngOnInit() {
        this.route.queryParams
            .subscribe(params => this.return = params['return'] || '/home');
    }
    onSubmit(formData) {
        if (formData.valid) {
            this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password).then((success) => {
                this.router.navigate([this.return]);
            }).catch((err) => {
                this.snack.show();
                this.error = err;
            });
        }
    }
};
EmailComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('snack', { static: true }),
    __metadata("design:type", igniteui_angular__WEBPACK_IMPORTED_MODULE_4__["IgxSnackbarComponent"])
], EmailComponent.prototype, "snack", void 0);
EmailComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-email',
        template: __webpack_require__(/*! raw-loader!./email.component.html */ "./node_modules/raw-loader/index.js!./src/app/email/email.component.html"),
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["moveIn"])(), Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["fallIn"])()],
        // tslint:disable-next-line: use-host-property-decorator
        host: { '[@moveIn]': '' },
        styles: [__webpack_require__(/*! ./email.component.scss */ "./src/app/email/email.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], EmailComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: #731963; }\n\n.links {\n  text-align: center;\n  padding: 0 35px; }\n\n#linksContainer {\n  flex-flow: row wrap;\n  display: flex;\n  justify-content: center; }\n\n.searchBox {\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.sample-content {\n  display: flex;\n  justify-content: flex-start; }\n\n.igx-card-header,\n.igx-card-header__title {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.igx-card-content {\n  text-align: left; }\n\n.igx-card-header {\n  padding-bottom: 0 !important; }\n\n.igx-card-header {\n  font-size: 18px; }\n\n.igx-card-header img {\n    width: 32px;\n    height: 32px;\n    margin-bottom: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcRGV2XFxjcnlwdG8tcG9ydGZvbGlvLWFwcC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsV0FBVTtFQUNWLGtCQUFpQjtFQUNqQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxhQUFZO0VBQ1osMkJBQTJCLEVBQUE7O0FBRzdCOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsNEJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsZUFBZSxFQUFBOztBQURqQjtJQUdJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhIHtcclxuICBjb2xvcjogIzczMTk2MztcclxufVxyXG5cclxuLmxpbmtze1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDM1cHg7XHJcbn1cclxuXHJcbiNsaW5rc0NvbnRhaW5lciB7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoQm94IHtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zYW1wbGUtY29udGVudCB7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmlneC1jYXJkLWhlYWRlcixcclxuLmlneC1jYXJkLWhlYWRlcl9fdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaWd4LWNhcmQtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmlneC1jYXJkLWhlYWRlcntcclxuICBwYWRkaW5nLWJvdHRvbTogMCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pZ3gtY2FyZC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm2015/igniteui-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils */ "./src/app/core/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






let HomeComponent = class HomeComponent {
    constructor(data, router) {
        this.data = data;
        this.router = router;
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        this.data.getData()
            .subscribe(res => {
            this.cryptos = Object(_core_utils__WEBPACK_IMPORTED_MODULE_5__["sortDataByKey"])(res, 'rank');
        });
    }
    get filterOptions() {
        const fo = new igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxFilterOptions"]();
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
    clear(input) {
        input.value = '';
        this.loadData();
    }
    openChart(evt, symbol) {
        this.router.navigate(['/statistics', { text: 'Volatility', iconName: 'show_chart', cryptoName: symbol, daysCount: 100 }]);
    }
    getCoinImage(imageUrl) {
        return Object(_core_utils__WEBPACK_IMPORTED_MODULE_5__["transformCoinImgUrl"])(imageUrl);
    }
    toggleDetails() {
        this.panel.toggle();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxExpansionPanelComponent"], { static: false }),
    __metadata("design:type", igniteui_angular__WEBPACK_IMPORTED_MODULE_2__["IgxExpansionPanelComponent"])
], HomeComponent.prototype, "panel", void 0);
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_4__["flyInOut"])()],
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/loading-spinner/loading-spinner.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/loading-spinner/loading-spinner.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner {\n  width: 60px;\n  height: 60px;\n  position: relative;\n  margin: 100px auto; }\n\n.double-bounce1, .double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out; }\n\n.double-bounce2 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy1zcGlubmVyL0Q6XFxEZXZcXGNyeXB0by1wb3J0Zm9saW8tYXBwL3NyY1xcYXBwXFxsb2FkaW5nLXNwaW5uZXJcXGxvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBRVosa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBRVAsc0RBQXNEO0VBQ3RELDhDQUE4QyxFQUFBOztBQUdoRDtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRTtJQUFXLDJCQUE2QixFQUFBO0VBQ3hDO0lBQU0sMkJBQTZCLEVBQUEsRUFBQTs7QUFHckM7RUFDRTtJQUNFLG1CQUFxQjtJQUNyQiwyQkFBNkIsRUFBQTtFQUM3QjtJQUNBLG1CQUFxQjtJQUNyQiwyQkFBNkIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGlubmVyIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcblxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDEwMHB4IGF1dG87XHJcbn1cclxuXHJcbi5kb3VibGUtYm91bmNlMSwgLmRvdWJsZS1ib3VuY2UyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuXHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG4gIGFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5kb3VibGUtYm91bmNlMiB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjBzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xyXG4gIDAlLCAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMCkgfVxyXG4gIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1ib3VuY2Uge1xyXG4gIDAlLCAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xyXG4gIH0gNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gIH1cclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let LoadingSpinnerComponent = class LoadingSpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoadingSpinnerComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-loading-spinner',
        template: __webpack_require__(/*! raw-loader!./loading-spinner.component.html */ "./node_modules/raw-loader/index.js!./src/app/loading-spinner/loading-spinner.component.html"),
        styles: [__webpack_require__(/*! ./loading-spinner.component.scss */ "./src/app/loading-spinner/loading-spinner.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LoadingSpinnerComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#lock {\n  width: 40%;\n  margin: 1.5em auto 4em auto;\n  display: block; }\n\n.button {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 0 0 16px 0; }\n\n.button:last-of-type {\n    margin-bottom: 0; }\n\n#fb {\n  background: #3B5998;\n  color: #fff;\n  margin-top: 10px; }\n\n#google {\n  border: 1px solid #95989A;\n  background: #fff; }\n\n.s-logo {\n  width: 24px;\n  height: 24px;\n  margin-right: 8px; }\n\n#email {\n  background: #ECECEC; }\n\n.error {\n  background: #f1f0ef;\n  padding: 1em;\n  width: 100%;\n  display: block;\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXERldlxcY3J5cHRvLXBvcnRmb2xpby1hcHAvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsY0FBYyxFQUFBOztBQUtoQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGtCQUFrQixFQUFBOztBQUpwQjtJQU9JLGdCQUFnQixFQUFBOztBQUlwQjtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWUsRUFBQTs7QUFHakI7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2NrIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIG1hcmdpbjogMS41ZW0gYXV0byA0ZW0gYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbjogMCAwIDE2cHggMDtcclxuXHJcbiAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuXHJcbiNmYiB7XHJcbiAgYmFja2dyb3VuZDogIzNCNTk5ODtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tdG9wOjEwcHg7XHJcbn1cclxuXHJcbiNnb29nbGUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5NTk4OUE7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLnMtbG9nbyB7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4jZW1haWwge1xyXG4gIGJhY2tncm91bmQ6ICNFQ0VDRUM7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjBlZjtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let LoginComponent = class LoginComponent {
    constructor(afAuth, router, route) {
        this.afAuth = afAuth;
        this.router = router;
        this.route = route;
        this.return = '';
        this.googleAuthProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider();
        this.facebookAuthProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider();
        this.showSpinner = localStorage.getItem('showSpinner') === 'true' ? true : false;
        this.afAuth.authState.subscribe(auth => {
            localStorage.setItem('showSpinner', 'false');
            if (auth) {
                this.router.navigateByUrl(this.return);
            }
        });
    }
    ngOnInit() {
        // Get the query params
        this.route.queryParams
            .subscribe(params => this.return = params['return'] || '/home');
    }
    ngAfterViewInit() {
    }
    loginFb() {
        this.showSpinner = true;
        localStorage.setItem('showSpinner', 'true');
        this.afAuth.auth.signInWithRedirect(this.facebookAuthProvider);
        this.afAuth.auth.getRedirectResult().then(result => {
            if (result.user) {
                this.showSpinner = true;
                localStorage.setItem('showSpinner', 'true');
                this.router.navigate([this.return]);
            }
        }).catch(function (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            this.error = errorMessage;
        });
    }
    loginGoogle() {
        this.afAuth.auth.signInWithRedirect(this.googleAuthProvider).then((success) => {
            this.router.navigate([this.return]);
        }).catch((err) => {
            this.error = err;
        });
    }
    loginEmail() {
        this.router.navigate(['/email'], {
            queryParams: {
                return: this.return
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["moveIn"])()],
        host: { '[@moveIn]': '' },
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#refreshBtn {\n  margin-bottom: 21px; }\n\n#addBtn {\n  margin-left: 10px;\n  margin-right: 10px; }\n\n.sample-content {\n  padding-left: 10px;\n  justify-content: center;\n  display: flex; }\n\n.positionTop {\n  width: 100%; }\n\n.positionTop > img {\n  width: 24px;\n  height: 24px; }\n\n.symbolPosition {\n  position: absolute;\n  margin-top: 5px;\n  margin-left: 10px; }\n\n:host ::ng-deep igx-icon {\n  cursor: pointer; }\n\n:host ::ng-deep .addCoinForm {\n  padding: 12px 24px 24px; }\n\n:host ::ng-deep .addCoinForm igx-input-group + igx-input-group {\n    margin-top: 24px; }\n\n:host ::ng-deep igx-grid {\n  margin: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL0Q6XFxEZXZcXGNyeXB0by1wb3J0Zm9saW8tYXBwL3NyY1xcYXBwXFxwb3J0Zm9saW9cXHBvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQixFQUFBOztBQUlyQjtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFdBQVcsRUFBQTs7QUFJYjtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUluQjtFQUVJLGVBQWUsRUFBQTs7QUFGbkI7RUFNSSx1QkFBdUIsRUFBQTs7QUFOM0I7SUFTTSxnQkFBZ0IsRUFBQTs7QUFUdEI7RUFjSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JlZnJlc2hCdG4ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIxcHg7XHJcbn1cclxuXHJcblxyXG4jYWRkQnRuIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zYW1wbGUtY29udGVudCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5wb3NpdGlvblRvcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gbWFyZ2luLXRvcDogLTdweDtcclxufVxyXG5cclxuLnBvc2l0aW9uVG9wPmltZyB7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uc3ltYm9sUG9zaXRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcblxyXG46aG9zdCA6Om5nLWRlZXAge1xyXG4gIGlneC1pY29uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5hZGRDb2luRm9ybSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHggMjRweDtcclxuXHJcbiAgICBpZ3gtaW5wdXQtZ3JvdXAraWd4LWlucHV0LWdyb3VwIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlneC1ncmlkIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICB9XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm2015/igniteui-angular.js");
/* harmony import */ var _services_block_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/block-item.service */ "./src/app/services/block-item.service.ts");
/* harmony import */ var _core_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/interfaces */ "./src/app/core/interfaces.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/utils */ "./src/app/core/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









let PortfolioComponent = class PortfolioComponent {
    constructor(blockItemService, router, dataService, cdr) {
        this.blockItemService = blockItemService;
        this.router = router;
        this.dataService = dataService;
        this.cdr = cdr;
        this.blockItems = [];
        // tslint:disable-next-line: member-ordering
        this._dialogOverlaySettings = {
            closeOnOutsideClick: true,
            modal: true,
            outlet: this.outlet,
            scrollStrategy: new igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["CloseScrollStrategy"]()
        };
        this.positive24h = (rowData) => {
            return rowData.changePct24Hour > 0;
        };
        this.negative24h = (rowData) => {
            return rowData.changePct24Hour < 0;
        };
        // tslint:disable-next-line:member-ordering
        this.dailyChanges = {
            positive: this.positive24h,
            negative: this.negative24h
        };
    }
    // tslint:disable-next-line: use-life-cycle-interface
    ngAfterViewInit() {
        this.blockItemService.getItemsList().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(a => (Object.assign({ key: a.payload.key }, a.payload.val()))))).subscribe(items => {
            this.blockItems = items;
        });
        setTimeout(() => {
            this.refreshGrid();
        }, 100);
        this.grid1.sort({ fieldName: 'name', dir: igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["SortingDirection"].Asc, ignoreCase: false });
        this.cdr.detectChanges();
    }
    ngOnInit() { }
    restore() {
        this.blockItemService.createItem(this.deletedItem);
        this.snack.hide();
        this.deletedItem = new _core_interfaces__WEBPACK_IMPORTED_MODULE_3__["BlockItem"]();
    }
    openDialog() {
        this._dialogOverlaySettings.outlet = this.outlet;
        this.dialog.open(this._dialogOverlaySettings);
    }
    refreshGrid() {
        this.grid1.reflow();
    }
    addItem(event) {
        // Check whether the coin is already in your portfolio
        this.checkCoinExistence(this.coinName);
        event.dialog.close();
    }
    updateItem(item) {
        this.blockItemService.updateItem(item.key, item);
    }
    deleteItem(item) {
        this.blockItemService.deleteItem(item.key);
    }
    checkCoinExistence(coin) {
        const fCoin = this.blockItems.filter(item => item.name === coin.toUpperCase());
        if (fCoin.length !== 0) {
            this.snackExists.message = 'Already added!';
            this.snackExists.show();
        }
        else {
            // find coin and add it if exsist
            this.addRow(coin.toUpperCase());
        }
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
        this.router.navigate(['/statistics', { text: 'Volatility', iconName: 'show_chart', cryptoName: symbol, daysCount: 100 }]);
    }
    getCoinImage(imageUrl) {
        return Object(_core_utils__WEBPACK_IMPORTED_MODULE_7__["transformCoinImgUrl"])(imageUrl);
    }
    calculateTotalPortfolio() {
        let total = 0;
        for (const coin of this.blockItems) {
            total += this.calculateHoldings(coin.holdings, coin.price);
        }
        return total;
    }
    calculateHoldings(holdings, price) {
        return holdings * price;
    }
    addRow(symbol) {
        this.dataService.getCryptoIdFromSymbol(symbol).subscribe(filteredItem => {
            if (filteredItem) {
                this.dataService.getSpecificCoinData(filteredItem['Name']).subscribe(blockItem => {
                    blockItem.holdings = this.holdings;
                    this.blockItemService.createItem(blockItem);
                    this.snackExists.message = 'Coin Added!';
                    this.snackExists.show();
                    this.clearFormInputs();
                }, err => {
                    this.snackExists.message = err;
                    this.snackExists.show();
                });
            }
            else {
                this.snackExists.message = 'Coin does not exist!';
                this.snackExists.show();
            }
        });
    }
    deleteRow(cell) {
        const blockItem = cell.row.rowData;
        // Detele item from AngularFireList
        this.deleteItem(blockItem);
        // Stores deleted item for the 'Restore' Snackbar logic
        this.deletedItem = new _core_interfaces__WEBPACK_IMPORTED_MODULE_3__["BlockItem"]();
        Object.assign(this.deletedItem, blockItem);
        delete this.deletedItem['key'];
        this.snack.show();
    }
    updateRow(evt) {
        const rowItem = evt.rowID;
        rowItem.holdings = evt.newValue;
        this.updateItem(rowItem);
    }
    clearFormInputs() {
        this.coinName = '';
        this.holdings = '';
    }
};
PortfolioComponent.ctorParameters = () => [
    { type: _services_block_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxOverlayOutletDirective"], { static: true }),
    __metadata("design:type", igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxOverlayOutletDirective"])
], PortfolioComponent.prototype, "outlet", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('snack', { static: true }),
    __metadata("design:type", igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxSnackbarComponent"])
], PortfolioComponent.prototype, "snack", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('snackExists', { static: true }),
    __metadata("design:type", igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxSnackbarComponent"])
], PortfolioComponent.prototype, "snackExists", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('grid1', { static: true }),
    __metadata("design:type", igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxGridComponent"])
], PortfolioComponent.prototype, "grid1", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modal', { static: true }),
    __metadata("design:type", igniteui_angular__WEBPACK_IMPORTED_MODULE_1__["IgxDialogComponent"])
], PortfolioComponent.prototype, "dialog", void 0);
PortfolioComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-portfolio',
        template: __webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/index.js!./src/app/portfolio/portfolio.component.html"),
        styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio.component.scss")]
    }),
    __metadata("design:paramtypes", [_services_block_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
], PortfolioComponent);



/***/ }),

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: moveIn, fallIn, moveInLeft, flyInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveIn", function() { return moveIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallIn", function() { return fallIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveInLeft", function() { return moveInLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyInOut", function() { return flyInOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

function moveIn() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('moveIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.8s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateX(0)' }))
        ]),
    ]);
}
function fallIn() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fallIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateY(40px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s .2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateX(0)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function moveInLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('moveInLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '0', transform: 'translateX(-100px)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.6s .2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', transform: 'translateX(0)' }))
        ])
    ]);
}
function flyInOut() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: 120, transform: 'translateX(0)', opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s 0.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateX(0)',
                    width: 140
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1
                }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'translateX(50px)',
                    width: 20
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s 0.4s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0
                }))
            ])
        ])
    ]);
}


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm2015/Rx.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm2015/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm2015/add/operator/take.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// tslint:disable-next-line: import-blacklist




let AuthGuard = class AuthGuard {
    constructor(auth, router, route) {
        this.auth = auth;
        this.router = router;
        this.route = route;
    }
    canActivate(route, routerState) {
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].from(this.auth.authState)
            .take(1)
            .map(state => !!state)
            .do(authenticated => {
            if (!authenticated) {
                this.router.navigate(['/login'], {
                    queryParams: {
                        return: routerState.url
                    }
                });
            }
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"] }
];
AuthGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/services/block-item.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/block-item.service.ts ***!
  \************************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let ItemService = class ItemService {
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
};
ItemService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
ItemService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
], ItemService);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _assets_offlineData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/offlineData */ "./src/assets/offlineData.ts");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils */ "./src/app/core/utils.ts");
/* harmony import */ var _core_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/interfaces */ "./src/app/core/interfaces.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.apiKey = 'c1f530907ddda7f8da258a43988a86e852dedabef797f7e97c4b35688b9d27bd';
        this.baseUrl = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&api_key=${this.apiKey}`;
        this.allCoinsDataUrl = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;
        this.histoDataUrl = 'https://min-api.cryptocompare.com/data/histoday?fsym=';
        this.priceMultiFullUrl = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=';
    }
    getData() {
        return this.http.get(this.baseUrl)
            .map(result => {
            return this.transformData(result);
        })
            .publishReplay(1, 300000)
            .refCount();
    }
    getSpecificCoinData(symbol) {
        return this.http.get(this.priceMultiFullUrl + symbol + '&tsyms=USD&api_key=' + this.apiKey)
            .map(result => {
            const returnedCoin = Object(_core_utils__WEBPACK_IMPORTED_MODULE_3__["flattenObject"])(result['RAW'][symbol]['USD']);
            const coin = new _core_interfaces__WEBPACK_IMPORTED_MODULE_4__["BlockItem"]();
            Object(_core_utils__WEBPACK_IMPORTED_MODULE_3__["fillFromJSON"])(coin, returnedCoin);
            return coin;
        });
    }
    getBetweenDaysPrices(symbol, forDays) {
        return this.http.get(this.histoDataUrl + symbol + '&tsym=USD&limit=' + forDays + '&api_key=' + this.apiKey)
            .map(result => {
            return result;
        });
    }
    getCryptoIdFromSymbol(symbol) {
        return this.http.get(this.allCoinsDataUrl)
            .map(result => {
            const crypto = result['Data'][symbol];
            return crypto;
        });
    }
    transformData(data) {
        const transformedData = [];
        this.coins = [];
        if (data['Message'] === 'Success' && data['HasWarning'] === false && data['Data'].length !== 0) {
            const indexes = Object.keys(data['Data']);
            for (const idx of indexes) {
                const newCoin = new _core_interfaces__WEBPACK_IMPORTED_MODULE_4__["CoinItem"]();
                transformedData.push(Object(_core_utils__WEBPACK_IMPORTED_MODULE_3__["flattenObject"])(data['Data'][idx]));
                Object(_core_utils__WEBPACK_IMPORTED_MODULE_3__["fillFromJSON"])(newCoin, transformedData[idx]);
                if (newCoin.changePct24Hour >= 0) {
                    newCoin.dailyScale = true;
                }
                else {
                    newCoin.dailyScale = false;
                }
                newCoin.rank = Number(idx) + 1;
                this.coins.push(newCoin);
            }
        }
        else {
            for (let i = 0; i < _assets_offlineData__WEBPACK_IMPORTED_MODULE_2__["offlineData"].length; i++) {
                const coin = new _core_interfaces__WEBPACK_IMPORTED_MODULE_4__["CoinItem"]();
                Object(_core_utils__WEBPACK_IMPORTED_MODULE_3__["fillFromJSON"])(coin, _assets_offlineData__WEBPACK_IMPORTED_MODULE_2__["offlineData"][i]);
                this.coins.push(coin);
            }
        }
        return Object(_core_utils__WEBPACK_IMPORTED_MODULE_3__["sortDataByKey"])(this.coins, 'rank');
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DataService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], DataService);



/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm2015/igniteui-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let SignupComponent = class SignupComponent {
    constructor(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.state = '';
    }
    onSubmit(formData) {
        if (formData.valid) {
            this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password).then((success) => {
                this.router.navigate(['/login']);
            }).catch((err) => {
                this.snack.show();
                this.error = err;
            });
        }
    }
    ngOnInit() {
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('snack', { static: true }),
    __metadata("design:type", igniteui_angular__WEBPACK_IMPORTED_MODULE_4__["IgxSnackbarComponent"])
], SignupComponent.prototype, "snack", void 0);
SignupComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
        animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["moveIn"])(), Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["fallIn"])()],
        // tslint:disable-next-line: use-host-property-decorator
        host: { '[@moveIn]': '' },
        styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
    }),
    __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/statistics/statistics.component.scss":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n\n::ng-deep .dark-theme .main igx-financial-chart .ig-tooltip-container-background {\n  background: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGljcy9EOlxcRGV2XFxjcnlwdG8tcG9ydGZvbGlvLWFwcC9zcmNcXGFwcFxcc3RhdGlzdGljc1xcc3RhdGlzdGljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUdNLGlCQUNGLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZGFyay10aGVtZSAubWFpbiB7XHJcbiAgaWd4LWZpbmFuY2lhbC1jaGFydCB7XHJcbiAgICAuaWctdG9vbHRpcC1jb250YWluZXItYmFja2dyb3VuZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm2015/igniteui-angular.js");
/* harmony import */ var igniteui_angular_charts_ES5_igx_financial_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! igniteui-angular-charts/ES5/igx-financial-chart-component */ "./node_modules/igniteui-angular-charts/ES5/igx-financial-chart-component.js");
/* harmony import */ var igniteui_angular_charts_ES5_FinancialOverlayType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! igniteui-angular-charts/ES5/FinancialOverlayType */ "./node_modules/igniteui-angular-charts/ES5/FinancialOverlayType.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let StatisticsComponent = class StatisticsComponent {
    constructor(dataService, route, cdr) {
        this.dataService = dataService;
        this.route = route;
        this.cdr = cdr;
        this.int = 0;
        // tslint:disable-next-line: member-ordering
        this._dropdownPositionSettings = {
            horizontalStartPoint: igniteui_angular__WEBPACK_IMPORTED_MODULE_4__["HorizontalAlignment"].Left,
            verticalStartPoint: igniteui_angular__WEBPACK_IMPORTED_MODULE_4__["VerticalAlignment"].Bottom
        };
        // tslint:disable-next-line: member-ordering
        this._dropDownOverlaySettings = {
            closeOnOutsideClick: true,
            modal: false,
            positionStrategy: new igniteui_angular__WEBPACK_IMPORTED_MODULE_4__["ConnectedPositioningStrategy"](this._dropdownPositionSettings),
            scrollStrategy: new igniteui_angular__WEBPACK_IMPORTED_MODULE_4__["CloseScrollStrategy"]()
        };
        this.route
            .paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(params => params.get('cryptoName') || route.routeConfig.data.cryptoName)).subscribe(res => this.cryptoName = res);
        this.route
            .paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(params => params.get('daysCount') || route.routeConfig.data.daysCount)).subscribe(res => this.daysCount = res);
    }
    ngAfterViewInit() {
        this.getData();
        this.getAndTransformData();
        this.chart.overlayTypes.add(igniteui_angular_charts_ES5_FinancialOverlayType__WEBPACK_IMPORTED_MODULE_6__["FinancialOverlayType"].PriceChannel);
    }
    toggleDropDown(eventArgs, selectedDropDown) {
        const dropDown = selectedDropDown;
        this._dropDownOverlaySettings.positionStrategy.settings.target = eventArgs.target;
        dropDown.toggle(this._dropDownOverlaySettings);
    }
    getData(event) {
        let coin;
        if (event) {
            const name = event.item.elementRef.nativeElement.innerText;
            const symbol = name.substring(name.search('[[]') + 1, name.length - 1);
            coin = this.coins.find(c => c.name === name || c.symbol === symbol);
            this.cryptoName = coin.symbol;
            this.dropDown.close();
        }
        this.dataService.getBetweenDaysPrices(this.cryptoName, this.daysCount)
            .subscribe(res => {
            this.data = Object.assign(res).Data.map(item => {
                // Transform data for the Chart. Multiply by 1000 because Date() requires miliseconds
                const dateObject = new Date(item.time * 1000);
                item.time = dateObject;
                return item;
            });
            this.cdr.detectChanges();
        });
    }
    // Fill coins collection
    getAndTransformData() {
        this.dataService.getData().map((data) => {
            const obj = [];
            for (let index = 0; index < data.length; index++) {
                const name = data[index]['fullName'];
                const symbol = data[index]['name'];
                obj.push({ name: name, symbol: symbol });
            }
            return obj;
        }).subscribe(res => this.coins = res);
    }
    get filterNames() {
        const fo = new igniteui_angular__WEBPACK_IMPORTED_MODULE_4__["IgxFilterOptions"]();
        fo.items = this.coins;
        fo.key = 'symbol';
        fo.inputValue = this.cryptoName;
        if (fo.items) {
            const fI = fo.items.find(item => {
                return item.name.toUpperCase().includes(fo.inputValue.toUpperCase());
            });
            if (fI) {
                fo.key = 'name';
            }
        }
        return fo;
    }
};
StatisticsComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dropDown', { read: igniteui_angular__WEBPACK_IMPORTED_MODULE_4__["IgxDropDownComponent"], static: true }),
    __metadata("design:type", igniteui_angular__WEBPACK_IMPORTED_MODULE_4__["IgxDropDownComponent"])
], StatisticsComponent.prototype, "dropDown", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(igniteui_angular_charts_ES5_igx_financial_chart_component__WEBPACK_IMPORTED_MODULE_5__["IgxFinancialChartComponent"], { static: true }),
    __metadata("design:type", igniteui_angular_charts_ES5_igx_financial_chart_component__WEBPACK_IMPORTED_MODULE_5__["IgxFinancialChartComponent"])
], StatisticsComponent.prototype, "chart", void 0);
StatisticsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-statistics',
        template: __webpack_require__(/*! raw-loader!./statistics.component.html */ "./node_modules/raw-loader/index.js!./src/app/statistics/statistics.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./statistics.component.scss */ "./src/app/statistics/statistics.component.scss")]
    }),
    __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
], StatisticsComponent);



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
const offlineData = [
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


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
//# sourceMappingURL=main-es2015.js.map