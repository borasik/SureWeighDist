webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width: 80%; background-color: rgb(228, 232, 236);\">\n  <div class=\"row\" style=\"margin-top: 10px;\">\n    <!-- <img src=\"/dist/assets/logo.png\" alt=\"logo\"> -->\n    <div class=\"col-lg-2 col-lg-offset-5\">\n      <img src='logo.png' alt=\"logo\">\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin-top: 50px;\">\n    <div class=\"col-lg-4 col-sm-12\" style=\"font-size: 2.0em;color:rgb(32, 5, 122);\">\n      <span style=\"padding-left: 20px;\">Welcome Back, Nick!</span>\n    </div>\n    <div class=\"col-lg-5 col-sm-12\">\n       \n        <my-date-picker [options]=\"myDatePickerOptions\"\n        [placeholder]=\"placeholder\"\n        (dateChanged)=\"onDateChanged($event)\"\n        [selDate]=\"selectedDate\"></my-date-picker>\n       \n    </div>\n    <div class=\"col-lg-3 col-sm-12\">\n        <i style=\"font-size: 2.2em;color:rgb(241, 10, 10); margin-right:22px;\" class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n        <i style=\"font-size: 2.2em;color:rgb(73, 70, 70); margin-right:22px;\" class=\"fa fa-search-plus\" aria-hidden=\"true\"></i>\n        <i style=\"font-size: 2.2em;color:rgb(73, 70, 70); margin-right:22px;\" class=\"fa fa-users\" aria-hidden=\"true\"></i>\n        <i style=\"font-size: 2.2em;color:rgb(73, 70, 70); margin-right:22px;\" class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i>\n        <i style=\"font-size: 2.2em;color:rgb(73, 70, 70); margin-right:22px;\" class=\"fa fa-gear\" aria-hidden=\"true\"></i>\n        <i style=\"font-size: 2.2em;color:rgb(73, 70, 70); margin-right:22px;\" class=\"fa fa-caret-square-o-right\" aria-hidden=\"true\"></i>\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin: 10px 0px 20px 0px;\">\n    <div style=\"border-top: 2px solid gray\"></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"card col-lg-3 col-sm-6 col-xs-12 col-md-4\" *ngFor=\"let shipper of shippers\">\n      <div style=\"padding: 20px;\" [ngStyle]=\"{'background-color': getBackGroundColor(shipper.Status)}\"\n      style=\"border: 1px black solid; border-radius: 10px ; margin-bottom: 20px;\">\n        <div style=\"padding-left:30px;\">\n          <div style=\"font-size: 1.5em; color:white; margin-top:10px;\"> {{ shipper.Shipper }}</div>\n          <div style=\"font-size: 1.1em; color:white\"> B.O.L: {{ shipper.BOL }}</div>\n          <div style=\"font-size: 1.1em; color:white\"> Phone: {{ shipper.Phone }}</div>\n          <div style=\"font-size: 1.1em; color:white\"> Email: {{ shipper.Email }}</div>\n          <div style=\"font-size: 1.1em; color:white; margin-top: 10px;\"> Driver: {{ shipper.Driver }}</div>\n          <div style=\"font-size: 1.1em; color:white; margin-bottom: 10px;\"> Phone: {{ shipper.DriverPhone }}\n            <span style=\"color:white; margin-left: 30px;\" class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>\n            <span style=\"color:white; margin-left: 15px;\" class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gateway_service_service__ = __webpack_require__("../../../../../src/app/gateway-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    // shippers = [
    //   {
    //     "Shipper": "Bob Smith",
    //     "BOL": "1234-452-223",
    //     "Phone": "(555)555-1234",
    //     "Email": "bob@email.com",
    //     "Driver": "Joe West",
    //     "DriverPhone": "(555)555-0101",
    //     "Status": "Non-Complient"
    //   },
    //   {
    //     "Shipper": "Anita Hill",
    //     "BOL": "1234-333-432",
    //     "Phone": "(555) 555-4321",
    //     "Email": "anita@hill.com",
    //     "Driver": "Jose Gonzales",
    //     "DriverPhone": "(555) 555-0002",
    //     "Status": "In Progress"
    //   },
    //   {
    //     "Shipper": "Darrell Johnson",
    //     "BOL": "4321-452-111",
    //     "Phone": "(555) 555-5555",
    //     "Email": "dj@email.com",
    //     "Driver": "Jen Preston",
    //     "DriverPhone": "(555) 555-4004",
    //     "Status": "In Progress"
    //   },
    //   {
    //     "Shipper": "John Smith",
    //     "BOL": "1234-452-224",
    //     "Phone": " (555) 555-5678",
    //     "Email": "john@email.com",
    //     "Driver": "Greg West",
    //     "DriverPhone": "(555)555-0101",
    //     "Status": "In progress"
    //   },
    //   {
    //     "Shipper": "Fred Mitchell",
    //     "BOL": "4444-555-111",
    //     "Phone": "(555) 555-0011",
    //     "Email": "fmitchell@email.com",
    //     "Driver": "Don Driver",
    //     "DriverPhone": "(555) 555-4132",
    //     "Status": "Pending"
    //   },
    //   {
    //     "Shipper": "Phil Parson",
    //     "BOL": "0101-232-323",
    //     "Phone": "(555) 555-2222",
    //     "Email": "phil@parson.com",
    //     "Driver": "Billy Bob",
    //     "DriverPhone": "(555) 555-9999",
    //     "Status": "Pending"
    //   },
    //   {
    //     "Shipper": "Brianna MacKenzie",
    //     "BOL": "3333-222-123",
    //     "Phone": "(555) 555-4233",
    //     "Email": "bmac@email.com",
    //     "Driver": "Tim East",
    //     "DriverPhone": "(555) 555-1212",
    //     "Status": "Pending"
    //   },
    //   {
    //     "Shipper": "Carl Jennings",
    //     "BOL": "1234-567-890",
    //     "Phone": "(555) 555-2002",
    //     "Email": "cj@email.com",
    //     "Driver": "Eduardo Rodriquez",
    //     "DriverPhone": "(555)555-8141",
    //     "Status": "Assured"
    //   },
    //   {
    //     "Shipper": "Joanne James",
    //     "BOL": "0987-654-321",
    //     "Phone": "(555)555-6543",
    //     "Email": "jojam@email.com",
    //     "Driver": "Flynn Jordon",
    //     "DriverPhone": "(555)555-7890",
    //     "Status": "Assured"
    //   },
    //   {
    //     "Shipper": "Jennifer Terry",
    //     "BOL": "1424-542-934",
    //     "Phone": "(555)555-5454",
    //     "Email": "j.terry@email.com",
    //     "Driver": "Sam Thompson",
    //     "DriverPhone": "(555)555-8543",
    //     "Status": "Assured"
    //   },
    //   {
    //     "Shipper": "Nick Turner",
    //     "BOL": "2222-111-999",
    //     "Phone": "(555) 555-9203",
    //     "Email": "nick@turner.com",
    //     "Driver": "Susan Harrison",
    //     "DriverPhone": "(555)555-6832",
    //     "Status": "Assured"
    //   },
    //   {
    //     "Shipper": "Austin Wilson",
    //     "BOL": "9540-432-205",
    //     "Phone": "(555)555-1235",
    //     "Email": "a.wilson@email.com",
    //     "Driver": "Wayne Nelson",
    //     "DriverPhone": "(555)555-0151",
    //     "Status": "Assured"
    //   }
    // ]
    function AppComponent(service) {
        this.service = service;
        this.title = 'app';
        this.placeholder = "Today: " + new Date().toLocaleDateString() + ".  Please Select a Date";
        this.myDatePickerOptions = {
            todayBtnTxt: 'Today',
            dateFormat: 'yyyy-mm-dd',
            firstDayOfWeek: 'mo',
            sunHighlight: false,
            inline: false,
            disableUntil: { year: 2016, month: 8, day: 10 },
            width: '80%',
            selectionTxtFontSize: '1.5em'
        };
        // Initialized to specific date (09.10.2018).
        this.model = { date: { year: 2018, month: 10, day: 9 } };
    }
    AppComponent.prototype.getBackGroundColor = function (status) {
        switch (status.toUpperCase()) {
            case "Non-Complient".toUpperCase():
                return '#E74C3C';
            case "In Progress".toUpperCase():
                return '#3498DB';
            case "Pending".toUpperCase():
                return '#154360';
            case "Assured".toUpperCase():
                return '#58D68D';
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getShippers().subscribe(function (shippers) { return _this.shippers = shippers; }, function (err) { return console.log("Getting Shippers Error: " + err); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__gateway_service_service__["a" /* GatewayServiceService */]],
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gateway_service_service__["a" /* GatewayServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gateway_service_service__["a" /* GatewayServiceService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4_mydatepicker__["MyDatePickerModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/gateway-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GatewayServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GatewayServiceService = (function () {
    function GatewayServiceService(http) {
        this.http = http;
    }
    GatewayServiceService.prototype.extractData = function (res) {
        return res.json();
    };
    GatewayServiceService.prototype.getShippers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get('http://ppswtest.azurewebsites.net/api/values', options).map(this.extractData);
    };
    return GatewayServiceService;
}());
GatewayServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GatewayServiceService);

var _a;
//# sourceMappingURL=gateway-service.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map