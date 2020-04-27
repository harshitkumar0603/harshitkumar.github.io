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

/***/ "./src/app/TrackList.ts":
/*!******************************!*\
  !*** ./src/app/TrackList.ts ***!
  \******************************/
/*! exports provided: TrackList, CategoryList, MoodList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackList", function() { return TrackList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryList", function() { return CategoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoodList", function() { return MoodList; });
var TrackList = /** @class */ (function () {
    function TrackList(tracks, _embedded, search) {
        this.tracks = tracks;
        this._embedded = _embedded;
        this.search = search;
    }
    return TrackList;
}());

var CategoryList = /** @class */ (function () {
    function CategoryList(categories, _embedded, search) {
        this.categories = categories;
        this._embedded = _embedded;
        this.search = search;
    }
    return CategoryList;
}());

var MoodList = /** @class */ (function () {
    function MoodList(moods, _embedded, search) {
        this.moods = moods;
        this._embedded = _embedded;
        this.search = search;
    }
    return MoodList;
}());



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
/* harmony import */ var _by_genre_by_genre_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./by-genre/by-genre.component */ "./src/app/by-genre/by-genre.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _by_mood_by_mood_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./by-mood/by-mood.component */ "./src/app/by-mood/by-mood.component.ts");




var routes = [
    { path: 'tracks-by-genre/:genre', component: _by_genre_by_genre_component__WEBPACK_IMPORTED_MODULE_1__["ByGenreComponent"] },
    { path: 'tracks-by-mood/:mood', component: _by_mood_by_mood_component__WEBPACK_IMPORTED_MODULE_3__["ByMoodComponent"] },
    { path: 'tracks-by-genre', component: _by_genre_by_genre_component__WEBPACK_IMPORTED_MODULE_1__["ByGenreComponent"] },
    { path: 'tracksgenre', component: _by_genre_by_genre_component__WEBPACK_IMPORTED_MODULE_1__["ByGenreComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var AppRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet>\n\n</router-outlet>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tracks_tracks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tracks/tracks.component */ "./src/app/tracks/tracks.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _by_genre_by_genre_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./by-genre/by-genre.component */ "./src/app/by-genre/by-genre.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _moods_moods_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./moods/moods.component */ "./src/app/moods/moods.component.ts");
/* harmony import */ var _by_mood_by_mood_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./by-mood/by-mood.component */ "./src/app/by-mood/by-mood.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _tracks_tracks_component__WEBPACK_IMPORTED_MODULE_4__["TracksComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_6__["CategoriesComponent"],
                _by_genre_by_genre_component__WEBPACK_IMPORTED_MODULE_8__["ByGenreComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _moods_moods_component__WEBPACK_IMPORTED_MODULE_10__["MoodsComponent"],
                _by_mood_by_mood_component__WEBPACK_IMPORTED_MODULE_11__["ByMoodComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/by-genre/by-genre.component.css":
/*!*************************************************!*\
  !*** ./src/app/by-genre/by-genre.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td h4{color:#fff;}\ntd a{color:#fff;}"

/***/ }),

/***/ "./src/app/by-genre/by-genre.component.html":
/*!**************************************************!*\
  !*** ./src/app/by-genre/by-genre.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"page-header\">Tracks by genre : {{genre}}</h3>\n  <app-tracks [songs]=\"tracks\"></app-tracks>\n</div>\n\n"

/***/ }),

/***/ "./src/app/by-genre/by-genre.component.ts":
/*!************************************************!*\
  !*** ./src/app/by-genre/by-genre.component.ts ***!
  \************************************************/
/*! exports provided: ByGenreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByGenreComponent", function() { return ByGenreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fliktrax_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fliktrax.service */ "./src/app/fliktrax.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ByGenreComponent = /** @class */ (function () {
    function ByGenreComponent(flikTraxService, route) {
        this.flikTraxService = flikTraxService;
        this.route = route;
        this.tracks = [];
        this.route.params.subscribe(function (params) { return console.log(params); });
    }
    ByGenreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.genre = this.route.snapshot.params.genre;
        this.flikTraxService.getTracksByCategory(this.genre)
            .subscribe(function (tracks) {
            _this.tracks = tracks;
        });
    };
    ByGenreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-by-genre',
            template: __webpack_require__(/*! ./by-genre.component.html */ "./src/app/by-genre/by-genre.component.html"),
            styles: [__webpack_require__(/*! ./by-genre.component.css */ "./src/app/by-genre/by-genre.component.css")]
        }),
        __metadata("design:paramtypes", [_fliktrax_service__WEBPACK_IMPORTED_MODULE_1__["FliktraxService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ByGenreComponent);
    return ByGenreComponent;
}());



/***/ }),

/***/ "./src/app/by-mood/by-mood.component.css":
/*!***********************************************!*\
  !*** ./src/app/by-mood/by-mood.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/by-mood/by-mood.component.html":
/*!************************************************!*\
  !*** ./src/app/by-mood/by-mood.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"page-header\">Tracks by genre : {{mood}}</h3>\n  <app-tracks [songs]=\"tracks\"></app-tracks>\n</div>\n\n"

/***/ }),

/***/ "./src/app/by-mood/by-mood.component.ts":
/*!**********************************************!*\
  !*** ./src/app/by-mood/by-mood.component.ts ***!
  \**********************************************/
/*! exports provided: ByMoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByMoodComponent", function() { return ByMoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fliktrax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fliktrax.service */ "./src/app/fliktrax.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ByMoodComponent = /** @class */ (function () {
    function ByMoodComponent(flikTraxService, route) {
        this.flikTraxService = flikTraxService;
        this.route = route;
        this.tracks = [];
    }
    ByMoodComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mood = this.route.snapshot.params.mood;
        this.flikTraxService.getTracksByCategory(this.mood)
            .subscribe(function (tracks) {
            _this.tracks = tracks;
        });
    };
    ByMoodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-by-mood',
            template: __webpack_require__(/*! ./by-mood.component.html */ "./src/app/by-mood/by-mood.component.html"),
            styles: [__webpack_require__(/*! ./by-mood.component.css */ "./src/app/by-mood/by-mood.component.css")]
        }),
        __metadata("design:paramtypes", [_fliktrax_service__WEBPACK_IMPORTED_MODULE_2__["FliktraxService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ByMoodComponent);
    return ByMoodComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".genre a{\n    display: flex;\n    height: 55px;\n    align-items: center;\n    font-size: 14px;\n    color: #b4b4b5;\n    border-top: solid 1px rgba(255,255,255,0.1);\n    text-transform: capitalize;\n}"

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\" [@slideInOut]=\"genreState\">\n  <div class=\" col-md-3 col-sm-6 col-xs-6 genre\" *ngFor=\"let cat of categories\">\n    <a [routerLink]=\"['/tracks-by-genre' | lowercase, cat.slug]\"> {{cat.slug}}</a>\n  </div>\n</div>\n\n<!--<tr *ngFor=\"let cat of categories\">-->\n  <!--<td><a [routerLink]=\"['/tracks-by-genre' | lowercase, cat.slug]\"> {{cat.slug}}</a></td>-->\n<!--</tr>-->\n\n"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tracks_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tracks/animations */ "./src/app/tracks/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        console.log(this.categories);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CategoriesComponent.prototype, "genreState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CategoriesComponent.prototype, "categories", void 0);
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")],
            animations: [_tracks_animations__WEBPACK_IMPORTED_MODULE_1__["SlideInOutAnimation"]]
        }),
        __metadata("design:paramtypes", [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/fliktrax.service.ts":
/*!*************************************!*\
  !*** ./src/app/fliktrax.service.ts ***!
  \*************************************/
/*! exports provided: FliktraxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FliktraxService", function() { return FliktraxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FliktraxService = /** @class */ (function () {
    function FliktraxService(httpClient) {
        this.httpClient = httpClient;
    }
    FliktraxService.prototype.getTracks = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Authorization', 'Basic ' + btoa('audiotram:TSEBaY7q'));
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var response = this.httpClient.get('https://api.fliktrax.com/category?category_id=hip-hop', { headers: headers })
            .map(function (list) { return list._embedded.category; });
        return response;
    };
    FliktraxService.prototype.getCategories = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Authorization', 'Basic ' + btoa('audiotram:TSEBaY7q'));
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var response = this.httpClient.get('https://api.fliktrax.com/categories', { headers: headers })
            .map(function (list) { return list._embedded.categories; });
        return response;
    };
    FliktraxService.prototype.getMoods = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Authorization', 'Basic ' + btoa('audiotram:TSEBaY7q'));
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var response = this.httpClient.get('https://api.fliktrax.com/moods', { headers: headers })
            .map(function (list) { return list._embedded.moods; });
        return response;
    };
    FliktraxService.prototype.getTracksByCategory = function (genre) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Authorization', 'Basic ' + btoa('audiotram:TSEBaY7q'));
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var response = this.httpClient.get('https://api.fliktrax.com/category?category_id=' + genre, { headers: headers })
            .map(function (list) { return list._embedded.category; });
        return response;
    };
    FliktraxService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FliktraxService);
    return FliktraxService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{background-color:#000;}\n.recent-track{background-color:#fff;color: #000;    max-width: 1260px;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding-left: 20px;\n    padding-right: 20px;}\n.bcg-white{background-color: #fff;}\n.position-adjust{position: relative;}\n.procedure-details{position: inherit;top:0;}\n.procedure-details h1{text-align: center;font-size:30px;margin-bottom:30px;}\nfooter{\n    display: block;\n    min-height: 220px;\n}\n/* banner */\n.item img{width:100%;}\n.logo{justify-content: flex-start;}\n.logo a{color: #fff;font-size: 30px;padding: 10px 20px;};\n.musicAction{text-align: center;}\n.topHeader{position: relative;}\n.topHeader .header{position: absolute;top:0;z-index:99;}\n.navbar-default{    border-radius: unset;\n    padding: 15px 0px;\n    margin: 0;}\n.navbar-default .navbar-nav>li>a{font-size:2rem;}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid\">\n    <nav class=\"navbar navbar-default\" ng-controller=\"NavbarController\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"navbarToggle()\" aria-expanded=\"true\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <div class=\"logo\"><a href=\"home\"><img src=\"../../assets/images/audiotram-logo-black-01.png\"></a></div>\n          </div>\n          <div class=\"navbar-collapse collapse\" id=\"navbar-collapse\" collapse=\"isCollapsed\" aria-expanded=\"true\">\n            <ul class=\"nav navbar-nav\">\n              <li ><a (click)=\"ScrollTo('#recent-tracks')\">Recent Music</a>\n              </li>\n              <li><a (click)=\"ScrollTo('#search-music')\">Search By Music</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </nav>\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n      <!-- Indicators -->\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n        <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n      </ol>\n\n      <!-- Wrapper for slides -->\n      <div class=\"carousel-inner\">\n        <div class=\"item active\">\n          <img src=\"../../assets/images/audiotram_header_01.jpg\" alt=\"Chania\">\n          <!-- <div class=\"carousel-caption\">\n            <h3>Los Angeles</h3>\n            <p>LA is always so much fun!</p>\n          </div> -->\n        </div>\n\n        <div class=\"item\">\n          <img src=\"../../assets/images/audiotram_royalty_free_music_04.jpg\" alt=\"Chicago\">\n          <!-- <div class=\"carousel-caption\">\n            <h3>Chicago</h3>\n            <p>Thank you, Chicago!</p>\n          </div> -->\n        </div>\n\n        <div class=\"item\">\n          <img src=\"../../assets/images/audiotram_licensed_music_06.jpg\" alt=\"New York\">\n          <!-- <div class=\"carousel-caption\">\n            <h3>New York</h3>\n            <p>We love the Big Apple!</p>\n          </div> -->\n        </div>\n      </div>\n\n      <!-- Left and right controls -->\n      <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n        <span class=\"glyphicon glyphicon-chevron-right\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n    <div class=\"b4Asd\">\n        <h1 class=\"Bannertitle\" id=\"search-music\"><span>Explore Our<br>Curated Royalty-Free<br>Music Library</span></h1>\n        <div class=\"_16PAR\">\n          <div class=\"_1W1zA\">\n            <div class=\"dZAqz\">\n              <span class=\"xzvPX _3UsAU\">\n                <button id=\"E2E_SearchButton\" title=\"Search\" class=\"_3yhJv _1Pj1o _3Hm6m _3AmmF _31RSk\" type=\"button\">\n                  <span>\n                    <svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n                      <path d=\"M27.7 27.3l-5.9-6a10.6 10.6 0 1 0-7.2 3 10.5 10.5 0 0 0 5.7-1.7 1 1 0 0 0 0 .2l6 6a1 1 0 1 0 1.4-1.5zM6 13.6a8.6 8.6 0 1 1 8.6 8.7A8.6 8.6 0 0 1 6 13.6z\"></path>\n                    </svg>\n              </span>\n            </button>\n            <input type=\"text\" aria-label=\"Search by Genre or Mood\" value=\"\" maxlength=\"50\" autocomplete=\"off\" class=\"p4XE8\" placeholder=\"Search by Genre or Mood\" id=\"E2E_SearchInput\">\n          </span>\n        </div>\n      </div>\n      <button class=\"_3xTKO\" id=\"E2E_CategoryButton_genre\" (click)=\"toggleShowDiv()\">\n        <span class=\"_1uLnA\">\n          <svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><path d=\"M24.1 13.8a5.9 5.9 0 1 1 5.9-6 5.9 5.9 0 0 1-5.9 6zm0-9.8A3.9 3.9 0 1 0 28 8a3.9 3.9 0 0 0-3.9-4zM7.9 13.8a5.9 5.9 0 1 1 5.8-6 5.9 5.9 0 0 1-5.8 6zm0-9.8a3.9 3.9 0 1 0 3.8 4A3.9 3.9 0 0 0 8 4zm16.2 26a5.9 5.9 0 1 1 5.9-5.9 5.9 5.9 0 0 1-5.9 6zm0-9.7A3.9 3.9 0 1 0 28 24a3.9 3.9 0 0 0-3.9-3.8zM7.9 30a5.9 5.9 0 1 1 5.8-5.9 5.9 5.9 0 0 1-5.8 6zm0-9.7a3.9 3.9 0 1 0 3.8 3.8A3.9 3.9 0 0 0 8 20.3z\"></path>\n          </svg>\n          <span>Genre</span>\n        </span>\n      </button>\n      <button class=\"_3xTKO\" id=\"E2E_CategoryButton_mood\" (click)=\"moodToggleShowDiv()\">\n        <span class=\"_1uLnA\"><svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n          <path d=\"M2 27.7a1 1 0 0 1-.4-1.9l7.8-3.1a1 1 0 0 1 .6 0l13.8 3 6-1.5a1 1 0 1 1 .4 2L24 27.6a1 1 0 0 1-.4 0l-13.7-3-7.5 3a1 1 0 0 1-.4 0zm21.8-6.2a1 1 0 0 1-.4 0l-13.6-6-7.3 4.3a1 1 0 0 1-1-1.7l7.8-4.7a1 1 0 0 1 .9 0l13.6 6 5.8-2.9a1 1 0 1 1 .8 1.8l-6.2 3.1a1 1 0 0 1-.4.1zm0-7.8a1 1 0 0 1-.5 0L9.9 6.1 2.6 12a1 1 0 0 1-1.2-1.6l7.8-6.2a1 1 0 0 1 1-.1l13.5 7.4 5.7-4.2a1 1 0 0 1 1.2 1.6l-6.2 4.6a1 1 0 0 1-.6.2z\"></path>\n        </svg>\n        <span>Mood</span>\n      </span>\n    </button>\n      </div>\n    </div>\n</div>\n  <div *ngIf=\"genreState!='out' || moodsState!='out'\" class=\"container position-adjust\">\n    <div class=\"procedure-details\" [@slideInOut]=\"genreState\" id=\"genreId\">\n      <h1 (click)=\"toggleShowDiv()\">Genres</h1>\n      <app-categories [categories]=\"categories\" [genreState]=\"genreState\"></app-categories>\n    </div>\n\n    <div class=\"procedure-details\" [@slideInOut]=\"moodsState\" id=\"moodsId\">\n      <h1>Moods</h1>\n      <app-moods [moods]=\"moods\" [moodsState]=\"moodsState\"></app-moods>\n    </div>\n  </div>\n    <div class=\"container-fluid bcg-white\">\n    <div class=\"recent-track\" id=\"recent-tracks\">\n      <h1>Recent Tracks</h1>\n      <app-tracks [songs]=\"tracks\"></app-tracks>\n    </div>\n  </div>\n  <footer>\n      <div class=\"col-md-12 text-center\">\n          <ul class=\"social-network social-circle\">\n            <li><a href=\"https://www.facebook.com/audiotram/\" class=\"icoFacebook\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n            <li><a href=\"https://www.twitter.com/audiotram/\" class=\"icoTwitter\" title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n            <!-- <li><a href=\"#\" class=\"icoLinkedin\" title=\"Linkedin\"><i class=\"fa fa-linkedin\"></i></a></li> -->\n            <li><a href=\"https://plus.google.com/audiotram/\" class=\"icoGoogle\" title=\"Google +\"><i class=\"fa fa-google-plus\"></i></a></li>\n            <li><a href=\"https://www.instagram.com/audiotram/\" class=\"icoRss\" title=\"Rss\"><i class=\"fa fa-rss\"></i></a></li>\n          </ul>\n        </div>\n      </footer>\n\n<div>\n    <div style=\"position: fixed;bottom: 0px;background: #252525; width:100%;padding: 15px 10px;\">\n      <div class=\"musicAction text-center\">\n      <button (click)=\"pauseTrack()\">\n        <div *ngIf=\"pause; else elseBlock\"><svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><path d=\"M28.3 15.3L8.3 3.6a.8.8 0 0 0-1.2.7v23.4a.8.8 0 0 0 1.2.7l20-11.7a.8.8 0 0 0 0-1.4z\"></path></svg></div>\n        <ng-template #elseBlock><svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><path d=\"M8.2 3.5H13v25H8.2zm10.9 0h4.7v25h-4.7z\"></path></svg></ng-template>\n      </button>\n      <button (click)=\"stopTrack()\"><svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n      \t width=\"32\" height=\"32\" viewBox=\"0 0 408.221 408.221\" style=\"enable-background:new 0 0 408.221 408.221;\"\n      \t xml:space=\"preserve\">\n      <g>\n      \t<g>\n      \t\t<path d=\"M408.221,204.111C408.221,91.388,316.839,0,204.11,0C91.388,0,0,91.388,0,204.111c0,112.725,91.388,204.11,204.11,204.11\n      \t\t\tC316.839,408.221,408.221,316.836,408.221,204.111z M295.68,265.524c0,16.647-13.509,30.152-30.147,30.152H142.707\n      \t\t\tc-16.651,0-30.156-13.505-30.156-30.152V142.689c0-16.649,13.505-30.146,30.156-30.146h122.826\n      \t\t\tc16.654,0,30.147,13.497,30.147,30.146V265.524z\"/>\n      \t</g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      <g>\n      </g>\n      </svg></button>\n      <button ng-click='audio.muting = !audio.muting'><svg enable-background=\"new 0 0 512 512\" height=\"30px\" id=\"Layer_1\" version=\"1.1\" viewBox=\"0 0 512 512\" width=\"30px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M511.603,303.727l-47.694,47.726l-47.726-47.726l-47.726,47.726l-47.693-47.726L368.457,256l-47.693-47.725l47.693-47.726  l47.726,47.726l47.726-47.726l47.694,47.726L463.907,256L511.603,303.727z M256.266,511.868L128.332,383.936H32.381  c-17.678,0-31.983-14.307-31.983-31.983V160.05c0-17.679,14.307-31.983,31.983-31.983h95.951L256.266,0.133  c0,0,31.983-3.998,31.983,31.983c0,173.535,0,425.718,0,447.769C288.249,515.866,256.266,511.868,256.266,511.868z M224.282,128.066  l-63.968,63.967H64.364v127.934h95.951l63.968,63.969V128.066z\"/></svg>\n      </button>\n    </div>\n      <label>Current Time</label>\n      <span class='form-control' type=text>{{getDuration()}}</span>\n      <div class=\"volume\">\n      <label>Volume</label>\n      <input class='form-control' type=range min=0 max=1 step=0.01 ng-model='audio.volume'>\n     </div>\n  </div>\n  </div>\n\n"

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
/* harmony import */ var _fliktrax_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fliktrax.service */ "./src/app/fliktrax.service.ts");
/* harmony import */ var _tracks_tracks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tracks/tracks.component */ "./src/app/tracks/tracks.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _tracks_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tracks/animations */ "./src/app/tracks/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(flikTraxService) {
        this.flikTraxService = flikTraxService;
        this.title = 'audiotram';
        this.tracks = [];
        this.categories = [];
        this.moods = [];
        this.pause = false;
        this.genreState = 'out';
        this.moodsState = 'out';
        this.name = 'resting';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flikTraxService.getCategories()
            .subscribe(function (categories) {
            _this.categories = categories;
        });
        this.flikTraxService.getMoods()
            .subscribe(function (moods) {
            _this.moods = moods;
        });
        this.flikTraxService.getTracks()
            .subscribe(function (tracks) {
            _this.tracks = tracks;
        });
    };
    HomeComponent.prototype.stopTrack = function () {
        this.trackComponent.sound.stop();
    };
    HomeComponent.prototype.getDuration = function () {
        if (this.trackComponent.sound != null) {
            return this.trackComponent.sound.duration(this.trackComponent.sound.id);
        }
    };
    HomeComponent.prototype.toggleShowDiv = function () {
        this.genreState = this.genreState === 'out' ? 'in' : 'out';
        this.moodsState = 'out';
    };
    HomeComponent.prototype.moodToggleShowDiv = function () {
        this.moodsState = this.moodsState === 'out' ? 'in' : 'out';
        this.genreState = 'out';
    };
    HomeComponent.prototype.navbarToggle = function () {
        var element = document.getElementById("navbar-collapse");
        element.classList.toggle("in");
    };
    HomeComponent.prototype.ScrollTo = function (id) {
        var element = document.querySelector(id);
        var top = element.getBoundingClientRect().top;
        window.scrollTo({
            top: top,
            behavior: 'smooth' // smooth scroll
        });
    };
    HomeComponent.prototype.pauseTrack = function () {
        if (!this.pause) {
            this.trackComponent.sound.pause();
            this.pause = true;
            return this.pause;
        }
        else {
            this.trackComponent.sound.play();
            this.pause = false;
            return this.pause;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_tracks_tracks_component__WEBPACK_IMPORTED_MODULE_2__["TracksComponent"]),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "trackComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_categories_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"]),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "categoryComponent", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            animations: [_tracks_animations__WEBPACK_IMPORTED_MODULE_4__["SlideInOutAnimation"]]
        }),
        __metadata("design:paramtypes", [_fliktrax_service__WEBPACK_IMPORTED_MODULE_1__["FliktraxService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/moods/moods.component.css":
/*!*******************************************!*\
  !*** ./src/app/moods/moods.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".moods a{\n    display: flex;\n    height: 55px;\n    align-items: center;\n    font-size: 14px;\n    color: #b4b4b5;\n    border-top: solid 1px rgba(255,255,255,0.1);}\n"

/***/ }),

/***/ "./src/app/moods/moods.component.html":
/*!********************************************!*\
  !*** ./src/app/moods/moods.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-12\">\n  <div class=\"col-md-3 col-sm-6 col-xs-6 moods\" *ngFor=\"let mood of moods\">\n    <a [routerLink]=\"['/tracks-by-genre' | lowercase, mood.slug]\"> {{mood.slug}}</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/moods/moods.component.ts":
/*!******************************************!*\
  !*** ./src/app/moods/moods.component.ts ***!
  \******************************************/
/*! exports provided: MoodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoodsComponent", function() { return MoodsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MoodsComponent = /** @class */ (function () {
    function MoodsComponent() {
    }
    MoodsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MoodsComponent.prototype, "moodsState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MoodsComponent.prototype, "moods", void 0);
    MoodsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-moods',
            template: __webpack_require__(/*! ./moods.component.html */ "./src/app/moods/moods.component.html"),
            styles: [__webpack_require__(/*! ./moods.component.css */ "./src/app/moods/moods.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MoodsComponent);
    return MoodsComponent;
}());



/***/ }),

/***/ "./src/app/tracks/animations.ts":
/*!**************************************!*\
  !*** ./src/app/tracks/animations.ts ***!
  \**************************************/
/*! exports provided: SlideInOutAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideInOutAnimation", function() { return SlideInOutAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var SlideInOutAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            'max-height': '800px', 'opacity': '1', 'visibility': 'visible'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('in => out', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'opacity': '0'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'max-height': '0px'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'visibility': 'hidden'
                }))
            ])]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('out => in', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'visibility': 'visible'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'max-height': '500px'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('800ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    'opacity': '1'
                }))
            ])])
    ]),
];


/***/ }),

/***/ "./src/app/tracks/tracks.component.css":
/*!*********************************************!*\
  !*** ./src/app/tracks/tracks.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{cursor: pointer;}\nh4{font-size:12px;margin-bottom:0;cursor: pointer;}\ntable tr td{padding:15px 8px; vertical-align: middle;}\n.procedure-details p{    margin-top: 12px;\n    font-size: 12px;}\ntable thead{    background-color: #BD3518;\n    color: #fff;}\n"

/***/ }),

/***/ "./src/app/tracks/tracks.component.html":
/*!**********************************************!*\
  !*** ./src/app/tracks/tracks.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <table  class=\"table\">\n    <thead>\n    <tr>\n      <th>Song</th>\n      <th>Artist</th>\n      <th>Duration</th>\n      <th class=\"hidembl\">BPM</th>\n      <th class=\"hidembl320\">Genre</th>\n    </tr>\n    </thead>\n    <tr *ngFor=\"let song of songs; let i = index\">\n      <td style=\"width: 30%\"> <a (click) = \"playTrack(song.preview_url); stopTrack()\">{{song.track_title}}</a>\n        <h4><a (click)=\"toggleShowDiv(i)\">Description</a></h4>\n        <div class=\"procedure-details\" [@slideInOut]=\"animationState[i]\">\n          <p>{{song.description}}</p>\n        </div>\n      </td>\n      <td> <a href=\"{{song.detail_url}}\">{{song.artist_name}}</a> </td>\n      <td> {{song.duration}} </td>\n      <td class=\"hidembl\"> {{song.beats_per_minute}} </td>\n      <td class=\"hidembl320\">  {{song.vocal_type}}</td>\n    </tr>\n  </table>\n  \n</div>\n\n\n<!--\n<div class=\"wrapper\">\n  <a (click)=\"this.toggleShowDiv('divA')\">Description</a>\n  <div [@slideInOut]=\"this.animationState\" style=\"height: auto;\">\n    {{song.description}}\n  </div>\n</div>-->\n"

/***/ }),

/***/ "./src/app/tracks/tracks.component.ts":
/*!********************************************!*\
  !*** ./src/app/tracks/tracks.component.ts ***!
  \********************************************/
/*! exports provided: TracksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TracksComponent", function() { return TracksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _TrackList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TrackList */ "./src/app/TrackList.ts");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ "./src/app/tracks/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TracksComponent = /** @class */ (function () {
    function TracksComponent() {
        this.hideme = {};
        this.hideme = {};
        this.animationState = [];
    }
    TracksComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 100; i++) {
            this.animationState.push('out');
        }
    };
    TracksComponent.prototype.playTrack = function (songUrl) {
        if (this.sound) {
            this.sound.stop();
        }
        this.sound = new howler__WEBPACK_IMPORTED_MODULE_2__["Howl"]({
            src: [songUrl],
            html5: true
        });
        this.sound.play();
    };
    TracksComponent.prototype.toggleShowDiv = function (divName) {
        console.log(this.animationState[divName]);
        this.animationState[divName] = this.animationState[divName] === 'out' ? 'in' : 'out';
        console.log(this.animationState);
    };
    TracksComponent.prototype.stopTrack = function () {
        // this.myEvent.emit(this.sound);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _TrackList__WEBPACK_IMPORTED_MODULE_1__["TrackList"])
    ], TracksComponent.prototype, "songs", void 0);
    TracksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tracks',
            template: __webpack_require__(/*! ./tracks.component.html */ "./src/app/tracks/tracks.component.html"),
            styles: [__webpack_require__(/*! ./tracks.component.css */ "./src/app/tracks/tracks.component.css")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_3__["SlideInOutAnimation"]]
        }),
        __metadata("design:paramtypes", [])
    ], TracksComponent);
    return TracksComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kumar/TestProjects/AudioTram/audiotram/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map