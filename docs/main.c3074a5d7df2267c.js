"use strict";
(self["webpackChunkmyBank"] = self["webpackChunkmyBank"] || []).push([["main"],{

/***/ 5995:
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutUsComponent: () => (/* binding */ AboutUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class AboutUsComponent {}
_class = AboutUsComponent;
_class.ɵfac = function AboutUsComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-about-us"]],
  decls: 24,
  vars: 0,
  consts: [[1, "about-us"], [1, "container", "pb-3", "pb-md-5"]],
  template: function AboutUsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to Janklyan Bank");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Janklyan Bank is not just a bank; we are your trusted financial partner on your journey to prosperity. Established in 1960, we have been serving the community for over six decades. Our legacy is built on principles of integrity, transparency, and unwavering dedication to our customers. We have evolved with the times, adapting to meet the changing financial needs of our valued customers. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Our Commitment");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " We are committed to empowering individuals and businesses with financial solutions that drive growth and financial well-being. Our personalized services, innovative products, and customer-centric approach set us apart in the banking industry. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Why Choose Janklyan Bank?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " - A legacy of trust and reliability");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " - A wide range of banking and financial services");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " - Experienced and dedicated team");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " - Commitment to community development");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " - Cutting-edge technology for seamless banking");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " - Your financial goals are our top priority. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us/about-us.component */ 5995);
/* harmony import */ var _home_menu_home_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-menu/home-menu.component */ 4741);
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-us/contact-us.component */ 4439);
/* harmony import */ var _gallary_gallary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallary/gallary.component */ 8590);
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faq/faq.component */ 8970);
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/services.component */ 2231);
/* harmony import */ var _homeloan_homeloan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homeloan/homeloan.component */ 5415);
/* harmony import */ var _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vehicle/vehicle.component */ 1622);
/* harmony import */ var _term_term_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./term/term.component */ 8562);
/* harmony import */ var _interest_rates_interest_rates_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interest-rates/interest-rates.component */ 4546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;













const routes = [{
  path: '',
  component: _home_menu_home_menu_component__WEBPACK_IMPORTED_MODULE_1__.HomeMenuComponent
}, {
  path: 'about-us',
  component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_0__.AboutUsComponent
}, {
  path: 'contact-us',
  component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_2__.ContactUsComponent
}, {
  path: 'gallary',
  component: _gallary_gallary_component__WEBPACK_IMPORTED_MODULE_3__.GallaryComponent
}, {
  path: 'faq',
  component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__.FaqComponent
}, {
  path: 'services',
  component: _services_services_component__WEBPACK_IMPORTED_MODULE_5__.ServicesComponent
}, {
  path: 'interest-rates',
  component: _interest_rates_interest_rates_component__WEBPACK_IMPORTED_MODULE_9__.InterestRatesComponent
}, {
  path: 'loans',
  children: [{
    path: 'vehicle-loan',
    component: _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_7__.VehicleComponent
  }, {
    path: 'term-loan',
    component: _term_term_component__WEBPACK_IMPORTED_MODULE_8__.TermComponent
  }, {
    path: 'home-loan',
    component: _homeloan_homeloan_component__WEBPACK_IMPORTED_MODULE_6__.HomeloanComponent
  }
  // Add more loan types as needed
  ]
}];

class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ 2247);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 6515);
var _class;





class AppComponent {
  constructor() {
    this.title = 'myBank';
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 4,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-home")(1, "app-navbar")(2, "router-outlet")(3, "app-footer");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent],
  styles: ["p[_ngcontent-%COMP%] {\n    font-family: Lato;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7RUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 6459);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ 2247);
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us/about-us.component */ 5995);
/* harmony import */ var _home_menu_home_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-menu/home-menu.component */ 4741);
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us/contact-us.component */ 4439);
/* harmony import */ var _gallary_gallary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gallary/gallary.component */ 8590);
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faq/faq.component */ 8970);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ 6515);
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/services.component */ 2231);
/* harmony import */ var _loan_term_term_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loan/term/term.component */ 2624);
/* harmony import */ var _loan_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./loan/vehicle/vehicle.component */ 140);
/* harmony import */ var _homeloan_homeloan_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./homeloan/homeloan.component */ 5415);
/* harmony import */ var _interest_rates_interest_rates_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interest-rates/interest-rates.component */ 4546);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



















class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbCollapseModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent, _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__.AboutUsComponent, _home_menu_home_menu_component__WEBPACK_IMPORTED_MODULE_5__.HomeMenuComponent, _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__.ContactUsComponent, _gallary_gallary_component__WEBPACK_IMPORTED_MODULE_7__.GallaryComponent, _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__.FaqComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__.FooterComponent, _services_services_component__WEBPACK_IMPORTED_MODULE_10__.ServicesComponent, _loan_term_term_component__WEBPACK_IMPORTED_MODULE_11__.TermComponent, _loan_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_12__.VehicleComponent, _homeloan_homeloan_component__WEBPACK_IMPORTED_MODULE_13__.HomeloanComponent, _interest_rates_interest_rates_component__WEBPACK_IMPORTED_MODULE_14__.InterestRatesComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbCollapseModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule]
  });
})();

/***/ }),

/***/ 4439:
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactUsComponent: () => (/* binding */ ContactUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class ContactUsComponent {}
_class = ContactUsComponent;
_class.ɵfac = function ContactUsComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-contact-us"]],
  decls: 55,
  vars: 0,
  consts: [[1, "container", "pb-3", "pb-md-5"], [1, "row"], [1, "col-md-12"], [1, "contact-info"]],
  template: function ContactUsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "section", 3)(4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Ready to start your financial journey with Janklyan Bank? Reach out to us for personalized assistance or inquiries. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Visit Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Janklyan Bank Head Office:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 123 Main Street");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " City, State ZIP Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Country ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Branch Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Janklyan Bank Kalamb Branch:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " 456 Branch Road");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Kalamb, State ZIP Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Country ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Call Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Customer Service: +1-123-456-7890");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Business Banking: +1-987-654-3210 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Email Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " General Inquiries: info@janklyanbank.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Customer Support: support@janklyanbank.com ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Working Hours");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Head Office:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Monday to Friday: 9:00 AM - 5:00 PM");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Saturday: 9:00 AM - 12:00 PM");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br")(49, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Kalamb Branch:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Monday to Friday: 9:30 AM - 4:30 PM");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Saturday: 9:30 AM - 12:30 PM ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: ["\n\n.contact-form[_ngcontent-%COMP%] {\n    background-color: #f9f9f9;\n    border: 1px solid #ddd;\n    border-radius: 10px;\n    padding: 20px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    margin-bottom: 20px; \n\n  }\n  \n  .contact-info[_ngcontent-%COMP%] {\n    margin-bottom: 20px; \n\n  }\n  \n  .contact-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #5f4ef5; \n\n    font-size: 28px;\n    margin-bottom: 20px;\n  }\n  \n  .contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #666; \n\n    font-size: 18px; \n\n    line-height: 1.5;\n  }\n  \n  .contact-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #5f4ef5; \n\n    font-size: 24px;\n    margin-top: 30px;\n  }\n  \n  .contact-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #666; \n\n    font-size: 20px;\n    margin-top: 20px;\n  }\n  \n  .contact-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-weight: bold;\n    display: block;\n    color: #333; \n\n    margin-bottom: 10px; \n\n  }\n  \n  .contact-form[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    font-size: 18px;\n    margin-bottom: 15px; \n\n  }\n  \n  .contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    height: 150px;\n  }\n  \n  .contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: #007BFF;\n    color: #fff;\n    border: none;\n    padding: 10px 20px;\n    font-size: 18px;\n    cursor: pointer;\n    transition: background-color 0.3s ease; \n\n    border-radius: 5px;\n  }\n  \n  .contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: #0056b3;\n  }\n  \n  \n\n  @media (max-width: 767px) {\n    .contact-form[_ngcontent-%COMP%], .contact-info[_ngcontent-%COMP%] {\n      padding: 15px;\n    }\n  \n    .contact-form[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n      font-size: 16px; \n\n    }\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEO0FBQ3JEO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxtQkFBbUIsRUFBRSxnQ0FBZ0M7RUFDdkQ7O0VBRUE7SUFDRSxtQkFBbUIsRUFBRSxnQ0FBZ0M7RUFDdkQ7O0VBRUE7SUFDRSxjQUFjLEVBQUUsb0RBQW9EO0lBQ3BFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXLEVBQUUsb0RBQW9EO0lBQ2pFLGVBQWUsRUFBRSx1Q0FBdUM7SUFDeEQsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYyxFQUFFLG9EQUFvRDtJQUNwRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVyxFQUFFLG9EQUFvRDtJQUNqRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXLEVBQUUscUJBQXFCO0lBQ2xDLG1CQUFtQixFQUFFLG9DQUFvQztFQUMzRDs7RUFFQTs7O0lBR0UsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUIsRUFBRSxtQ0FBbUM7RUFDMUQ7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixzQ0FBc0MsRUFBRSw4QkFBOEI7SUFDdEUsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBLHNCQUFzQjtFQUN0QjtJQUNFO01BQ0UsYUFBYTtJQUNmOztJQUVBOzs7TUFHRSxlQUFlLEVBQUUseUNBQXlDO0lBQzVEO0VBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZSB0aGUgY29udGFjdCBmb3JtIGFuZCBjb250YWN0IGluZm8gc2VjdGlvbnMgKi9cclxuLmNvbnRhY3QtZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogQWRkIG1hcmdpbiBiZXR3ZWVuIHNlY3Rpb25zICovXHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWluZm8ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDsgLyogQWRkIG1hcmdpbiBiZXR3ZWVuIHNlY3Rpb25zICovXHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWluZm8gaDIge1xyXG4gICAgY29sb3I6ICM1ZjRlZjU7IC8qIFVzZSB0aGUgc2FtZSBjb2xvciBhcyBpbiB0aGUgXCJhYm91dC11c1wiIHNlY3Rpb24gKi9cclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWluZm8gcCB7XHJcbiAgICBjb2xvcjogIzY2NjsgLyogVXNlIHRoZSBzYW1lIGNvbG9yIGFzIGluIHRoZSBcImFib3V0LXVzXCIgc2VjdGlvbiAqL1xyXG4gICAgZm9udC1zaXplOiAxOHB4OyAvKiBJbmNyZWFzZSB0aGUgZm9udCBzaXplIGZvciBhZGRyZXNzICovXHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1pbmZvIGgzIHtcclxuICAgIGNvbG9yOiAjNWY0ZWY1OyAvKiBVc2UgdGhlIHNhbWUgY29sb3IgYXMgaW4gdGhlIFwiYWJvdXQtdXNcIiBzZWN0aW9uICovXHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1pbmZvIGg0IHtcclxuICAgIGNvbG9yOiAjNjY2OyAvKiBVc2UgdGhlIHNhbWUgY29sb3IgYXMgaW4gdGhlIFwiYWJvdXQtdXNcIiBzZWN0aW9uICovXHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1mb3JtIC5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzMzMzsgLyogTGFiZWwgdGV4dCBjb2xvciAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgLyogU3BhY2luZyBiZXR3ZWVuIGxhYmVsIGFuZCBpbnB1dCAqL1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gIC5jb250YWN0LWZvcm0gaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gIC5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IC8qIFNwYWNpbmcgYmV0d2VlbiBpbnB1dCBlbGVtZW50cyAqL1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1mb3JtIHRleHRhcmVhIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWZvcm0gYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdCRkY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlOyAvKiBBZGQgYSBzbW9vdGggaG92ZXIgZWZmZWN0ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LWZvcm0gYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJlc3BvbnNpdmUgc3R5bGVzICovXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuY29udGFjdC1mb3JtLCAuY29udGFjdC1pbmZvIHtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuICBcclxuICAgIC5jb250YWN0LWZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgICAuY29udGFjdC1mb3JtIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcclxuICAgIC5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7IC8qIEFkanVzdCBmb250IHNpemUgZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xyXG4gICAgfVxyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8970:
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqComponent: () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;


const _c0 = function (a0, a1) {
  return {
    "fa-plus": a0,
    "fa-minus": a1
  };
};
function FaqComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqComponent_div_1_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.toggleFaq(item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, !item_r1.isOpen, item_r1.isOpen));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.question, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", item_r1.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.answer);
  }
}
class FaqComponent {
  constructor() {
    this.faqItems = [{
      question: 'Q1: What is Jankalyan Bank?',
      answer: 'A1: Jankalyan Bank is a cooperative bank...',
      isOpen: false
    }, {
      question: 'Q2: How can I open an account?',
      answer: 'A2: To open an account, visit our nearest branch...',
      isOpen: false
    }, {
      question: 'Q1: What is the IFSC code for Jankalyan Urban Cooperative Bank Ltd JANKALYAN URBAN COOPERATIVE BANK LTD branch?',
      answer: 'A1: The IFSC Code of Jankalyan Urban Cooperative Bank Ltd JANKALYAN URBAN COOPERATIVE BANK LTD branch is ICIC00JKUCB, and the same code can also be found on a cheque and bank passbook of Jankalyan Urban Cooperative Bank Ltd bank JANKALYAN URBAN COOPERATIVE BANK LTD branch. The IFSC code: ICIC00JKUCB is used for RTGS, NEFT, and IMPS transactions.',
      isOpen: false
    }, {
      question: 'Q2: What are the bank timings for Jankalyan Urban Cooperative Bank Ltd, JANKALYAN URBAN COOPERATIVE BANK LTD branch?',
      answer: 'A2: The JANKALYAN URBAN COOPERATIVE BANK LTD branch of Jankalyan Urban Cooperative Bank Ltd operates from Mondays to Saturdays, and the timings are from 10 AM to 4 PM IST (tentatively). However, 2nd and 4th Saturdays will be bank holidays.',
      isOpen: false
    }, {
      question: 'Q3: What is the address of Jankalyan Urban Cooperative Bank Ltd, JANKALYAN URBAN COOPERATIVE BANK LTD branch?',
      answer: 'A3: The address of the Jankalyan Urban Cooperative Bank Ltd JANKALYAN URBAN COOPERATIVE BANK LTD Branch is DHOKI ROAD KALAMB TQ KALAMB DIST OSMANABAD 413501, KALAMB, MAHARASHTRA.',
      isOpen: false
    }, {
      question: 'Q4: What is the branch code of JANKALYAN URBAN COOPERATIVE BANK LTD Jankalyan Urban Cooperative Bank Ltd?',
      answer: 'A4: 0JKUCB is the branch code of JANKALYAN URBAN COOPERATIVE BANK LTD Jankalyan Urban Cooperative Bank Ltd.',
      isOpen: false
    }, {
      question: 'Q5: Where can I check Jankalyan Urban Cooperative Bank Ltd, JANKALYAN URBAN COOPERATIVE BANK LTD branch holidays?',
      answer: 'A5: Bank holidays may vary from state to state across India. To know the details of bank holidays for each state, you can visit the bank\'s official website and click on the bank holidays section.',
      isOpen: false
    }, {
      question: 'Q6: What is the format of the IFSC Code of Jankalyan Urban Cooperative Bank Ltd JANKALYAN URBAN COOPERATIVE BANK LTD branch?',
      answer: 'A6: The IFSC code ICIC00JKUCB is an 11-character code. The first four alphabetic characters indicate the bank name, the fifth character is 0 (zero), reserved for future use, and the last six characters (either numerical or alphabetical) specify the branch. The format of ICIC00JKUCB is as follows:\n\nICIC : bank code\n0 : Reserved for future use\n0JKUCB : branch code',
      isOpen: false
    }, {
      question: 'Q7: How can I contact Jankalyan Urban Cooperative Bank Ltd, JANKALYAN URBAN COOPERATIVE BANK LTD branch?',
      answer: 'A7: If you are a customer of Jankalyan Urban Cooperative Bank Ltd, JANKALYAN URBAN COOPERATIVE BANK LTD branch, you can physically visit the branch on working days. The bank also provides customer support through phone and email, so you may call or email using the following contact details:\n\nBank: Jankalyan Urban Cooperative Bank Ltd\nBank Group: Co-operative\nLandline / Mobile Number: 8698989697\nFax Number: NA\nBank Toll Free Number: NA\nEmail Id: NA\nBank Website: NA\n\nIt\'s recommended to visit the branch unless it is urgent.',
      isOpen: false
    }];
  }
  toggleFaq(item) {
    item.isOpen = !item.isOpen;
  }
}
_class = FaqComponent;
_class.ɵfac = function FaqComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-faq"]],
  decls: 2,
  vars: 1,
  consts: [[1, "faq"], ["class", "faq-item", 4, "ngFor", "ngForOf"], [1, "faq-item"], [1, "faq-question", 3, "click"], [1, "fas", 3, "ngClass"], [1, "faq-answer"]],
  template: function FaqComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FaqComponent_div_1_Template, 6, 8, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.faqItems);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: [".faq[_ngcontent-%COMP%] {\n    background-color: #f9f9f9;\n    padding: 20px;\n  }\n  \n  .faq-item[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  \n  .faq-question[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: #333;\n    font-size: 18px;\n    cursor: pointer;\n  }\n  \n  .faq-answer[_ngcontent-%COMP%] {\n    display: none;\n    color: #666;\n    font-size: 16px;\n    line-height: 1.5;\n  }\n  \n  .faq-item.open[_ngcontent-%COMP%]   .faq-answer[_ngcontent-%COMP%] {\n    display: block;\n  }\n  \n  .faq-answer[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  .faq-answer.open[_ngcontent-%COMP%] {\n    display: block;\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmFxL2ZhcS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztFQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi5mYXEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYXEtaXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZmFxLXF1ZXN0aW9uIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYXEtYW5zd2VyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYXEtaXRlbS5vcGVuIC5mYXEtYW5zd2VyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuZmFxLWFuc3dlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZmFxLWFuc3dlci5vcGVuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6515:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class FooterComponent {}
_class = FooterComponent;
_class.ɵfac = function FooterComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-footer"]],
  decls: 26,
  vars: 0,
  consts: [[1, "bg-danger", "text-white", "mt-5"], [1, "container", "py-4"], [1, "row", "justify-content-center", "align-items-center"], [1, "col-md-4", "text-center"], [1, "mb-3"], [1, "mb-0"], [1, "list-inline", 2, "list-style-type", "none"], [1, "list-inline-item"], ["href", "#", 2, "color", "white"], [1, "fab", "fa-facebook"], [1, "fab", "fa-twitter"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Janklayan Urban Co-op Bank");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 123 Bank Street");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " City, State ZIP");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3)(12, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "8698989697");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3)(17, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Follow Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 6)(20, "li", 7)(21, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 7)(24, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    }
  },
  styles: ["footer[_ngcontent-%COMP%] {\n  font-size: 16px;\n  text-align: left;\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n}\n\naddress[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n\nul.list-unstyled[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n\nli[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: white;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZm9vdGVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaDUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuYWRkcmVzcyB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnVsLmxpc3QtdW5zdHlsZWQge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG5saSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8590:
/*!**********************************************!*\
  !*** ./src/app/gallary/gallary.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GallaryComponent: () => (/* binding */ GallaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;


function GallaryComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const image_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class GallaryComponent {
  constructor() {
    // Define an array of gallery images with URLs and descriptions
    this.galleryImages = [{
      url: 'assets/bankpic1.JPG',
      description: 'Image 1 Description'
    }, {
      url: 'assets/bankpic2.jpg',
      description: 'Image 2 Description'
    }, {
      url: 'assets/umesh.jpg',
      description: 'Image 3 Description'
    }, {
      url: 'assets/bankpic4.jpg',
      description: 'Image 1 Description'
    }, {
      url: 'assets/bankpic7.jpg',
      description: 'Image 3 Description'
    }, {
      url: 'assets/bankpic1.JPG',
      description: 'Image 2 Description'
    }
    // Add more images as needed
    ];
  }
}
_class = GallaryComponent;
_class.ɵfac = function GallaryComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-gallary"]],
  decls: 4,
  vars: 1,
  consts: [[1, "gallery"], [1, "container"], [1, "row"], ["class", "col-md-4 col-sm-6 mb-4", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-sm-6", "mb-4"], [1, "card"], ["alt", "Gallery Image", 1, "card-img-top", "fixed-height", 3, "src"]],
  template: function GallaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GallaryComponent_div_3_Template, 3, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.galleryImages);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: [".gallery[_ngcontent-%COMP%] {\n    background-color: #f9f9f9;\n    padding: 20px;\n}\n\n.gallery[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n    margin-bottom: 20px;\n    color: #333;\n}\n\n.card[_ngcontent-%COMP%] {\n    border: none;\n    transition: transform 0.2s;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n    transform: scale(1.05); \n\n}\n\n.fixed-height[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 300px; \n\n    object-fit: cover;\n}\n\n.card-text[_ngcontent-%COMP%] {\n    font-size: 16px;\n    color: #666;\n    line-height: 1.5;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ2FsbGFyeS9nYWxsYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHNCQUFzQixFQUFFLCtCQUErQjtBQUMzRDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhLEVBQUUsNENBQTRDO0lBQzNELGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbGxlcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5nYWxsZXJ5IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IC8qIEluY3JlYXNlIHRoZSBzaXplIG9uIGhvdmVyICovXHJcbn1cclxuXHJcbi5maXhlZC1oZWlnaHQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4OyAvKiBTZXQgeW91ciBkZXNpcmVkIGZpeGVkIGNhcmQgaGVpZ2h0IGhlcmUgKi9cclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uY2FyZC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4741:
/*!**************************************************!*\
  !*** ./src/app/home-menu/home-menu.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeMenuComponent: () => (/* binding */ HomeMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class HomeMenuComponent {}
_class = HomeMenuComponent;
_class.ɵfac = function HomeMenuComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-home-menu"]],
  decls: 52,
  vars: 0,
  consts: [[1, "image-container"], ["src", "assets/4.jpg", "alt", "Image Description", 1, "img-fluid"], [1, "container", "mt-4"], [1, "row", "mt-4"], [1, "col-md-4", "mb-4"], [1, "feature-card"], [1, "card-icon"], [1, "fas", "fa-piggy-bank"], [1, "col-md-4"], [1, "fas", "fa-hand-holding-usd"], [1, "fas", "fa-credit-card"], [1, "fas", "fa-building"], [1, "fas", "fa-money-check-alt"]],
  template: function HomeMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Savings Accounts");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Start saving today with our high-yield savings accounts.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8)(13, "div", 5)(14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Loans");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Explore our range of loan options for all your financial needs.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8)(21, "div", 5)(22, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Credit Cards");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Get the right credit card to manage your expenses and enjoy rewards.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8)(29, "div", 5)(30, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mortgages");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Find your dream home with our flexible mortgage options.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8)(37, "div", 5)(38, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Investments");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Grow your wealth with our investment solutions.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8)(45, "div", 5)(46, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Online Banking");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Manage your accounts online with our secure banking platform.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: [".image-container[_ngcontent-%COMP%] {\n    overflow: hidden; \n\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n    width: 100%; \n\n    height: auto; \n\n}\n\n.feature-card[_ngcontent-%COMP%] {\n    background-color: #fff;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    padding: 20px;\n    text-align: center;\n    margin-bottom: 20px;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  }\n  \n  .card-icon[_ngcontent-%COMP%] {\n    font-size: 48px;\n    color: #007bff;\n    margin-bottom: 10px;\n  }\n  \n  h3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin-bottom: 10px;\n    color: #333;\n  }\n  \n  p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    color: #666;\n  }\n  \n  .feature-card[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);\n    transform: translateY(-5px);\n    transition: 0.3s;\n  }\n\n  .welcome-content[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 20px;\n  }\n  \n  .welcome-message[_ngcontent-%COMP%] {\n    font-size: 36px;\n    color: #5f4ef5;\n  }\n  \n  .welcome-description[_ngcontent-%COMP%] {\n    font-size: 18px;\n    color: #333;\n  }\n  \n  .feature-card[_ngcontent-%COMP%] {\n    padding: 20px;\n    border: 1px solid #e0e0e0;\n    border-radius: 5px;\n    background-color: #fff;\n    text-align: center;\n    transition: transform 0.3s;\n    margin-top: 20px; \n\n\n  }\n  \n  .feature-card[_ngcontent-%COMP%]:hover {\n    transform: translateY(-5px);\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS1tZW51L2hvbWUtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCLEVBQUUsaUNBQWlDO0FBQ3ZEOztBQUVBO0lBQ0ksV0FBVyxFQUFFLCtDQUErQztJQUM1RCxZQUFZLEVBQUUsZ0RBQWdEO0FBQ2xFOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRSx1Q0FBdUM7SUFDdkMsMkJBQTJCO0lBQzNCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixnQkFBZ0IsRUFBRSwrQ0FBK0M7O0VBRW5FOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBIaWRlIGFueSBvdmVyZmxvd2luZyBjb250ZW50ICovXHJcbn1cclxuXHJcbi5pbWctZmx1aWQge1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIE1ha2UgdGhlIGltYWdlIHdpZHRoIDEwMCUgb2YgaXRzIGNvbnRhaW5lciAqL1xyXG4gICAgaGVpZ2h0OiBhdXRvOyAvKiBFbnN1cmUgdGhlIGltYWdlIG1haW50YWlucyBpdHMgYXNwZWN0IHJhdGlvICovXHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gIH1cclxuICBcclxuICAuZmVhdHVyZS1jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgfVxyXG5cclxuICAud2VsY29tZS1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWxjb21lLW1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgY29sb3I6ICM1ZjRlZjU7XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWxjb21lLWRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICBcclxuICAuZmVhdHVyZS1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDsgLyogQWRkZWQgdG9wIG1hcmdpbiB0byBzZXBhcmF0ZSBmZWF0dXJlIGNhcmRzICovXHJcblxyXG4gIH1cclxuICBcclxuICAuZmVhdHVyZS1jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICB9XHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6459:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class HomeComponent {
  constructor() {
    this.isCollapsed = true;
    this.title = "Jankalyan";
    this.slides = ['url1.jpg', 'url2.jpg', 'url3.jpg' // Replace with actual image URLs
    ];
  }
}
_class = HomeComponent;
_class.ɵfac = function HomeComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-home"]],
  decls: 13,
  vars: 0,
  consts: [[1, "container", "pb-3", "pb-md-5"], [1, "row"], [1, "col-12", "col-md-4", "d-flex", "justify-content-center", "align-items-center", "bg-white", "pb-3", "pb-md-0"], [1, "navbar-brand"], ["src", "assets/2.png", "alt", "Bank Logo", 1, "bank-logo", "img-fluid"], [1, "col-12", "col-md-4", "d-flex", "justify-content-center", "align-items-center", "bg-white", "text-center"], [1, "navbar-text", 2, "font-size", "18px", "color", "blue"], [1, "fas", "fa-code"], [1, "far", "fa-envelope"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " IFSC Code: ICIC00JKUCB ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5)(10, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Email:info@jankalyan.com ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5415:
/*!************************************************!*\
  !*** ./src/app/homeloan/homeloan.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeloanComponent: () => (/* binding */ HomeloanComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class HomeloanComponent {}
_class = HomeloanComponent;
_class.ɵfac = function HomeloanComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-homeloan"]],
  decls: 43,
  vars: 0,
  consts: [[1, "about-us"], [1, "text-center"], [1, "container"], [1, "pb-3", "pb-md-5"], [1, "text-left"]],
  template: function HomeloanComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home Loan Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Your dream home is within reach with our comprehensive Home Loan Services at Janklyan Bank. We understand that owning a home is a significant milestone, and we're here to make your dream a reality. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Why Choose Janklyan Bank for Your Home Loan?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul")(10, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Competitive Interest Rates: We offer some of the most competitive interest rates in the market to help you save on your mortgage.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Flexible Repayment Plans: Tailor your repayment plan to suit your financial situation with a range of flexible options.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Quick Approval Process: Our streamlined application and approval process ensures you get a decision in a timely manner.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Personalized Guidance: Our expert loan advisors will guide you through the entire process, from application to closing.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "No Hidden Costs: We believe in transparency. You won't find any hidden charges or surprises with our home loans.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Customized Solutions: We understand that every home buyer is unique. We offer customized loan solutions to meet your specific needs.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Types of Home Loans");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Choose from a variety of home loan options, including: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul")(27, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "First-Time Homebuyer Loans");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Refinance Loans");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Construction Loans");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Home Equity Loans");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Jumbo Loans");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Whatever your home financing needs, we have a loan product for you. Our experienced team is ready to assist you in finding the perfect home loan to suit your unique circumstances. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Start Your Journey to Homeownership");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Owning a home is a significant life achievement. Let Janklyan Bank help you take that first step. Contact us today to discuss your home loan options and begin your journey to homeownership. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4546:
/*!************************************************************!*\
  !*** ./src/app/interest-rates/interest-rates.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterestRatesComponent: () => (/* binding */ InterestRatesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class InterestRatesComponent {}
_class = InterestRatesComponent;
_class.ɵfac = function InterestRatesComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-interest-rates"]],
  decls: 21,
  vars: 0,
  consts: [[1, "interest-rates"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-md-6"], [1, "rate-card"], [1, "rate"]],
  template: function InterestRatesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Interest Rates");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Savings Accounts");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "2.5%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Grow your savings with our high-interest savings accounts.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4)(14, "div", 5)(15, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Fixed Deposits");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "5.0% - 6.5%");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Earn guaranteed returns with our fixed deposit options.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: [".interest-rates[_ngcontent-%COMP%] {\n    padding: 50px 0;\n    background-color: #f8f8f8; \n\n  }\n  \n  .section-title[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 28px;\n    color: #5f4ef5;\n    margin-bottom: 20px;\n  }\n  \n  .rate-card[_ngcontent-%COMP%] {\n    border: 1px solid #e0e0e0;\n    border-radius: 5px;\n    background-color: #fff;\n    padding: 20px;\n    text-align: center;\n    margin-bottom: 20px;\n  }\n  \n  .rate-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 24px;\n    color: #5f4ef5;\n  }\n  \n  .rate-card[_ngcontent-%COMP%]   .rate[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #333;\n    font-weight: bold;\n    margin-top: 10px;\n  }\n  \n  .rate-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    color: #666;\n  }\n  \n  \n\n  .rate-card[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    transform: translateY(-5px);\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW50ZXJlc3QtcmF0ZXMvaW50ZXJlc3QtcmF0ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZix5QkFBeUIsRUFBRSxxQ0FBcUM7RUFDbEU7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQSwwREFBMEQ7RUFDMUQ7SUFDRSx1Q0FBdUM7SUFDdkMsMkJBQTJCO0VBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiLmludGVyZXN0LXJhdGVzIHtcclxuICAgIHBhZGRpbmc6IDUwcHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7IC8qIEJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBzZWN0aW9uICovXHJcbiAgfVxyXG4gIFxyXG4gIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGNvbG9yOiAjNWY0ZWY1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnJhdGUtY2FyZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAucmF0ZS1jYXJkIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjNWY0ZWY1O1xyXG4gIH1cclxuICBcclxuICAucmF0ZS1jYXJkIC5yYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAucmF0ZS1jYXJkIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZGl0aW9uYWwgc3R5bGluZyBmb3IgcmF0ZSBjYXJkcyBvbiBob3ZlciAob3B0aW9uYWwpICovXHJcbiAgLnJhdGUtY2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgfVxyXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2624:
/*!*********************************************!*\
  !*** ./src/app/loan/term/term.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermComponent: () => (/* binding */ TermComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class TermComponent {}
_class = TermComponent;
_class.ɵfac = function TermComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-term"]],
  decls: 2,
  vars: 0,
  template: function TermComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "term works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 140:
/*!***************************************************!*\
  !*** ./src/app/loan/vehicle/vehicle.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VehicleComponent: () => (/* binding */ VehicleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class VehicleComponent {}
_class = VehicleComponent;
_class.ɵfac = function VehicleComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-vehicle"]],
  decls: 2,
  vars: 0,
  template: function VehicleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "vehicle works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2247:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
var _class;


class NavbarComponent {
  // Add navigation links as needed
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
    this.isCollapsed = true; // Initially collapsed for mobile view
  }

  ngOnInit() {
    const navbarToggle = this.el.nativeElement.querySelector('.navbar-toggler');
    const navbarCollapse = this.el.nativeElement.querySelector('.navbar-collapse');
    this.renderer.listen(navbarToggle, 'click', () => {
      if (navbarCollapse.classList.contains('show')) {
        this.renderer.removeClass(navbarCollapse, 'show');
      } else {
        this.renderer.addClass(navbarCollapse, 'show');
      }
    });
  }
}
_class = NavbarComponent;
_class.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-navbar"]],
  decls: 37,
  vars: 0,
  consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-danger"], ["id", "navbarToggle", "type", "button", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "nav-item"], ["href", "#", 1, "nav-link"], ["routerLink", "/about-us", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "loansDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "loansDropdown", 1, "dropdown-menu"], ["routerLink", "/loans/vehicle-loan", 1, "dropdown-item"], ["routerLink", "/loans/term-loan", 1, "dropdown-item"], ["routerLink", "/loans/home-loan", 1, "dropdown-item"], ["routerLink", "/interest-rates", 1, "nav-link"], ["routerLink", "/services", 1, "nav-link"], ["routerLink", "/gallary", 1, "nav-link"], ["routerLink", "/contact-us", 1, "nav-link"], ["routerLink", "/faq", 1, "nav-link"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "ul", 4)(5, "li", 5)(6, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5)(9, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8)(12, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Loans ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10)(15, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Vehicle Loan");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Term Loan");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Home Loan");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 5)(22, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Interest Rates");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 5)(25, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 5)(28, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 5)(31, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 5)(34, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "FAQs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["\n\n.dropdown-menu[_ngcontent-%COMP%] {\n    background-color: #ffffff; \n\n    border: none; \n\n    border-radius: 0; \n\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); \n\n  }\n  \n  .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #333; \n\n    font-size: 16px; \n\n    padding: 10px 20px; \n\n    text-transform: none; \n\n  }\n  \n  .dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    background-color: #dc3545; \n\n    color: #fff; \n\n    text-decoration: none; \n\n  }\n  \n  \n\n  .dropdown-menu[_ngcontent-%COMP%]   .dropdown-divider[_ngcontent-%COMP%] {\n    border-top: 1px solid #e5e5e5; \n\n  }\n  \n  .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n    padding: 10px 20px; \n\n  }\n  \n  \n\n  .navbar[_ngcontent-%COMP%]   .nav-item.dropdown[_ngcontent-%COMP%]:hover {\n    cursor: pointer;\n    background-color: #dc3545; \n\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQztBQUNoQztJQUNJLHlCQUF5QixFQUFFLDJDQUEyQztJQUN0RSxZQUFZLEVBQUUsbUJBQW1CO0lBQ2pDLGdCQUFnQixFQUFFLHlCQUF5QjtJQUMzQyx3Q0FBd0MsRUFBRSw0QkFBNEI7RUFDeEU7O0VBRUE7SUFDRSxXQUFXLEVBQUUsK0JBQStCO0lBQzVDLGVBQWUsRUFBRSw4QkFBOEI7SUFDL0Msa0JBQWtCLEVBQUUsNEJBQTRCO0lBQ2hELG9CQUFvQixFQUFFLDJCQUEyQjtFQUNuRDs7RUFFQTtJQUNFLHlCQUF5QixFQUFFLDhCQUE4QjtJQUN6RCxXQUFXLEVBQUUsd0JBQXdCO0lBQ3JDLHFCQUFxQixFQUFFLCtCQUErQjtFQUN4RDs7RUFFQSx3REFBd0Q7RUFDeEQ7SUFDRSw2QkFBNkIsRUFBRSxvQkFBb0I7RUFDckQ7O0VBRUE7SUFDRSxrQkFBa0IsRUFBRSw0QkFBNEI7RUFDbEQ7O0VBRUEsc0VBQXNFO0VBQ3RFO0lBQ0UsZUFBZTtJQUNmLHlCQUF5QixFQUFFLDhCQUE4QjtFQUMzRCIsInNvdXJjZXNDb250ZW50IjpbIi8qIEN1c3RvbSBDU1MgZm9yIHRoZSBkcm9wZG93biAqL1xyXG4uZHJvcGRvd24tbWVudSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgZHJvcGRvd24gbWVudSAqL1xyXG4gICAgYm9yZGVyOiBub25lOyAvKiBSZW1vdmUgYm9yZGVycyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDsgLyogUmVtb3ZlIGJvcmRlciByYWRpdXMgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIEFkZCBhIHN1YnRsZSBib3ggc2hhZG93ICovXHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1tZW51IGEge1xyXG4gICAgY29sb3I6ICMzMzM7IC8qIFRleHQgY29sb3IgZm9yIGNoaWxkIGxpbmtzICovXHJcbiAgICBmb250LXNpemU6IDE2cHg7IC8qIEZvbnQgc2l6ZSBmb3IgY2hpbGQgbGlua3MgKi9cclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDsgLyogUGFkZGluZyBmb3IgY2hpbGQgbGlua3MgKi9cclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lOyAvKiBQcmV2ZW50IHVwcGVyY2FzZSB0ZXh0ICovXHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1tZW51IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTsgLyogQmFja2dyb3VuZCBjb2xvciBvbiBob3ZlciAqL1xyXG4gICAgY29sb3I6ICNmZmY7IC8qIFRleHQgY29sb3Igb24gaG92ZXIgKi9cclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgLyogUmVtb3ZlIHVuZGVybGluZXMgb24gaG92ZXIgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogQWRkaXRpb25hbCBzdHlsZXMgZm9yIGJldHRlciBzcGFjaW5nIGFuZCBzZXBhcmF0aW9uICovXHJcbiAgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWRpdmlkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7IC8qIFNlcGFyYXRpb24gbGluZSAqL1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taXRlbSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7IC8qIFNwYWNpbmcgZm9yIGNoaWxkIGl0ZW1zICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIEluY3JlYXNlIHRoZSBoZWlnaHQgb2YgdGhlIHBhcmVudCBsaW5rIHRvIG1ha2UgaXQgZWFzaWVyIHRvIGNsaWNrICovXHJcbiAgLm5hdmJhciAubmF2LWl0ZW0uZHJvcGRvd246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTsgLyogQmFja2dyb3VuZCBjb2xvciBvbiBob3ZlciAqL1xyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2231:
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesComponent: () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class ServicesComponent {}
_class = ServicesComponent;
_class.ɵfac = function ServicesComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-services"]],
  decls: 18,
  vars: 0,
  consts: [[1, "container"], [1, "service"]],
  template: function ServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Our Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Savings Accounts");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Open a savings account and start saving for your future with competitive interest rates.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1)(9, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Loans");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Get the financial assistance you need with our flexible loan options.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1)(14, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Credit Cards");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Enjoy the convenience and benefits of our credit card offerings.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: ["\n\n\n.container[_ngcontent-%COMP%] {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px;\n  }\n  \n  h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin-bottom: 20px;\n  }\n  \n  .service[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n    padding: 10px;\n    margin-bottom: 20px;\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\n  }\n  \n  .service[_ngcontent-%COMP%]:hover {\n    transform: scale(1.02);\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  }\n  \n  .service[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-bottom: 10px;\n  }\n  \n  .service[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 1.5;\n  }\n  \n  \n\n  @media (max-width: 768px) {\n    .container[_ngcontent-%COMP%] {\n      padding: 10px;\n    }\n  \n    .service[_ngcontent-%COMP%] {\n      padding: 8px;\n      display: block; \n\n    }\n  \n    .service[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      font-size: 16px;\n      margin-bottom: 8px;\n    }\n  \n    .service[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      font-size: 14px;\n    }\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7O0FBRTNCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscURBQXFEO0VBQ3ZEOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBLHNCQUFzQjtFQUN0QjtJQUNFO01BQ0UsYUFBYTtJQUNmOztJQUVBO01BQ0UsWUFBWTtNQUNaLGNBQWMsRUFBRSxpQ0FBaUM7SUFDbkQ7O0lBRUE7TUFDRSxlQUFlO01BQ2Ysa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsZUFBZTtJQUNqQjtFQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogc2VydmljZXMuY29tcG9uZW50LmNzcyAqL1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2VydmljZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxuICB9XHJcbiAgXHJcbiAgLnNlcnZpY2U6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbiAgXHJcbiAgLnNlcnZpY2UgaDMge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNlcnZpY2UgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxuICBcclxuICAvKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2VydmljZSB7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7IC8qIENoYW5nZSB0byBibG9jayBmb3Igc3RhY2tpbmcgKi9cclxuICAgIH1cclxuICBcclxuICAgIC5zZXJ2aWNlIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2VydmljZSBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8562:
/*!****************************************!*\
  !*** ./src/app/term/term.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermComponent: () => (/* binding */ TermComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class TermComponent {}
_class = TermComponent;
_class.ɵfac = function TermComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-term"]],
  decls: 20,
  vars: 0,
  consts: [[1, "about-us"], [1, "text-center"], [1, "container"], [1, "pb-3", "pb-md-5"]],
  template: function TermComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Term Loan Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " At Janklyan Bank, we offer a range of term loan services to meet your financial needs. Our term loans are designed to provide you with the financial support you need for various purposes. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Key Features:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul")(10, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Competitive interest rates");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Flexible repayment options");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Quick and easy application process");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Personalized loan solutions");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Whether you're planning to expand your business, fund an education, or make a major purchase, our term loan services are here to help you achieve your goals. Contact us today to learn more and apply for a term loan. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1622:
/*!**********************************************!*\
  !*** ./src/app/vehicle/vehicle.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VehicleComponent: () => (/* binding */ VehicleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class VehicleComponent {}
_class = VehicleComponent;
_class.ɵfac = function VehicleComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-vehicle"]],
  decls: 16,
  vars: 0,
  consts: [[1, "about-us"], [1, "text-center"], [1, "container"]],
  template: function VehicleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Explore Our Vehicle Loan Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div")(5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " We offer flexible vehicle loan options to help you purchase your dream car or bike. Enjoy competitive interest rates and easy repayment plans. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul")(8, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Low-interest rates");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Quick approval process");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Flexible repayment terms");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "No hidden charges");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.c3074a5d7df2267c.js.map