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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\n    /* This fills the remaining space, by using flexbox. \n    Every toolbar row uses a flexbox row layout. */\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n}\n\na, a:visited {\n    color: #fff;\n    text-decoration: none;\n}\n\na:hover {\n    color: #424242;\n    cursor: pointer;\n}\n\n.container {\n    margin: 10px;\n}\n\n.margin-right {\n    margin-right: 10px;\n}\n\n.mat-toolbar-row div a {    \n    font-weight: lighter;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtrREFDOEM7SUFDOUMsbUJBQWM7WUFBZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAgIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC4gXG4gICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuYSwgYTp2aXNpdGVkIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICAgIGNvbG9yOiAjNDI0MjQyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubWFyZ2luLXJpZ2h0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWF0LXRvb2xiYXItcm93IGRpdiBhIHsgICAgXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        <span>Books Project</span>\n        <span class=\"example-fill-remaining-space\"></span>\n        <div *ngIf=\"!jwtToken.token\">\n            <a class=\"margin-right\" routerLink=\"signIn\">Connexion</a>\n            <a class=\"margin-right\" routerLink=\"signUp\">Inscription</a>\n        </div>\n        <div *ngIf=\"jwtToken.token\">\n            <a class=\"margin-right\" routerLink=\"categories\">Catégories</a>\n            <a class=\"margin-right\" routerLink=\"books\">Livres</a>\n            <a (click)=\"logout()\">Déconnexion</a>\n        </div>  \n    </mat-toolbar-row>\n</mat-toolbar>\n\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\n\n\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'Client';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.authService.jwtToken.subscribe(function (jwtToken) {
            _this.jwtToken = jwtToken;
        });
    };
    AppComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['signIn']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _books_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./books/add-book/add-book.component */ "./src/app/books/add-book/add-book.component.ts");
/* harmony import */ var _books_list_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./books/list/list.component */ "./src/app/books/list/list.component.ts");
/* harmony import */ var _books_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./books/edit-book/edit-book.component */ "./src/app/books/edit-book/edit-book.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _categories_add_categorie_add_categorie_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./categories/add-categorie/add-categorie.component */ "./src/app/categories/add-categorie/add-categorie.component.ts");
/* harmony import */ var _categories_list_categories_list_categories_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./categories/list-categories/list-categories.component */ "./src/app/categories/list-categories/list-categories.component.ts");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/categories.service */ "./src/app/services/categories.service.ts");



























var routes = [
    { path: 'signIn', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_15__["SignInComponent"] },
    { path: 'signUp', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_19__["SignUpComponent"] },
    { path: 'addBook', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _books_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_16__["AddBookComponent"] },
    { path: 'books', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _books_list_list_component__WEBPACK_IMPORTED_MODULE_17__["ListComponent"] },
    { path: 'editBook/:id', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _books_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_18__["EditBookComponent"] },
    { path: 'categories', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _categories_list_categories_list_categories_component__WEBPACK_IMPORTED_MODULE_24__["ListCategoriesComponent"] },
    { path: 'addCategory', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], component: _categories_add_categorie_add_categorie_component__WEBPACK_IMPORTED_MODULE_23__["AddCategorieComponent"] },
    { path: '', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_15__["SignInComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_15__["SignInComponent"],
                _books_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_16__["AddBookComponent"],
                _books_list_list_component__WEBPACK_IMPORTED_MODULE_17__["ListComponent"],
                _books_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_18__["EditBookComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_19__["SignUpComponent"],
                _categories_add_categorie_add_categorie_component__WEBPACK_IMPORTED_MODULE_23__["AddCategorieComponent"],
                _categories_list_categories_list_categories_component__WEBPACK_IMPORTED_MODULE_24__["ListCategoriesComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"]
            ],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _services_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"], _services_books_service__WEBPACK_IMPORTED_MODULE_21__["BooksService"], _services_api_service__WEBPACK_IMPORTED_MODULE_22__["ApiService"], _services_categories_service__WEBPACK_IMPORTED_MODULE_25__["CategoriesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/books/add-book/add-book.component.css":
/*!*******************************************************!*\
  !*** ./src/app/books/add-book/add-book.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL2FkZC1ib29rL2FkZC1ib29rLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/books/add-book/add-book.component.html":
/*!********************************************************!*\
  !*** ./src/app/books/add-book/add-book.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Ajouter un livre</h1>   \n\n<mat-card>\n  <form [formGroup]=\"addBookForm\" (ngSubmit)=\"onSubmit()\" class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">        \n      <div class=\"error\" *ngIf=\"error_message != '' \">{{ error_message }}</div>\n      <input matInput type=\"text\" formControlName=\"title\" placeholder=\"Titre de votre livre\">\n    </mat-form-field>\n    \n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput  type=\"text\" formControlName=\"resume\" placeholder=\"Résumé de votre livre\"></textarea>\n    </mat-form-field>\n    \n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"number\" formControlName=\"note\" placeholder=\"note /10\">\n    </mat-form-field>\n    \n    <div formArrayName=\"categories\">\n        <div  *ngFor=\"let categorieControl of getCategories().controls; let i = index\">\n        <mat-form-field>\n            <mat-label>categorie</mat-label>\n            <select matNativeControl [formControlName]=\"i\" >\n            <option *ngFor=\"let categorie of categories\" [value]=\"categorie.label\" >{{categorie.label}}</option>\n            </select>\n        </mat-form-field>\n        </div>\n        <button mat-raised-button color=\"primary\" type=\"button\"  (click)=\"onAddCategory()\">Ajouter Catégorie</button>\n    </div>\n    <br>\n    <button [disabled]=\"addBookForm.invalid\" mat-raised-button color=\"primary\" type=\"submit\">Ajouter le livre</button>\n    \n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/books/add-book/add-book.component.ts":
/*!******************************************************!*\
  !*** ./src/app/books/add-book/add-book.component.ts ***!
  \******************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");






var AddBookComponent = /** @class */ (function () {
    function AddBookComponent(booksService, formBuilder, router, categoriesService) {
        this.booksService = booksService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.categoriesService = categoriesService;
        this.error_message = "";
    }
    AddBookComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    AddBookComponent.prototype.initForm = function () {
        this.addBookForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            resume: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            categories: this.formBuilder.array([]),
            note: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^([0-9]\d*)(?:\.[5]?)?$')]],
        });
        this.getAllCategories();
        this.onAddCategory();
    };
    AddBookComponent.prototype.getCategories = function () {
        return this.addBookForm.get('categories');
    };
    AddBookComponent.prototype.getAllCategories = function () {
        var _this = this;
        return this.categoriesService.getCategories().subscribe(function (res) {
            _this.categories = res;
        });
    };
    AddBookComponent.prototype.onAddCategory = function () {
        var newCategoryControl = this.formBuilder.control(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.getCategories().push(newCategoryControl);
    };
    AddBookComponent.prototype.onSubmit = function () {
        var _this = this;
        var myForm = this.addBookForm;
        this.book = {
            title: myForm.get('title').value,
            resume: myForm.get('resume').value,
            categories: myForm.get('categories').value,
            note: myForm.get('note').value,
            userId: localStorage.getItem('id')
        };
        // console.log("new : ", this.book);
        this.booksService.addBook(this.book).subscribe(function (res) {
            _this.router.navigate(['books']);
        }, function (err) {
            if (err.error.ErrorCode == 11000) {
                _this.error_message = "Ce titre est déjà pris, veuillez en mettre un autre.";
            }
        });
    };
    AddBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-book',
            template: __webpack_require__(/*! ./add-book.component.html */ "./src/app/books/add-book/add-book.component.html"),
            styles: [__webpack_require__(/*! ./add-book.component.css */ "./src/app/books/add-book/add-book.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"]])
    ], AddBookComponent);
    return AddBookComponent;
}());



/***/ }),

/***/ "./src/app/books/edit-book/edit-book.component.css":
/*!*********************************************************!*\
  !*** ./src/app/books/edit-book/edit-book.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL2VkaXQtYm9vay9lZGl0LWJvb2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/books/edit-book/edit-book.component.html":
/*!**********************************************************!*\
  !*** ./src/app/books/edit-book/edit-book.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Editer un livre</h1>   \n\n<mat-card *ngIf=\"isLoaded\">\n    <form [formGroup]=\"editBookForm\" (ngSubmit)=\"onSubmit()\" class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n            <div class=\"error\" *ngIf=\"error_message != '' \">{{ error_message }}</div>\n            <input matInput type=\"text\" formControlName=\"title\" placeholder=\"Titre de votre livre\" value=\"{{ oldBook.title }}\">\n        </mat-form-field>\n        \n        <mat-form-field class=\"example-full-width\">\n            <textarea matInput  type=\"text\" formControlName=\"resume\" placeholder=\"Résumé de votre livre\" value=\"{{ oldBook.resume }}\"></textarea>\n        </mat-form-field>\n        \n        <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"number\" formControlName=\"note\" placeholder=\"note sur 10\" value=\"{{ oldBook.note }}\">\n        </mat-form-field>\n        \n        <div formArrayName=\"categories\">\n            <div  *ngFor=\"let categorieControl of getCategories().controls; let i = index\">\n                <mat-form-field>\n                    <mat-label>categorie</mat-label>\n                    <select matNativeControl [formControlName]=\"i\" >\n                        <option *ngFor=\"let category of categories\" [value]=\"category.label\" >{{ category.label }}</option>\n                    </select>\n                </mat-form-field>\n            </div>\n            <button mat-raised-button color=\"primary\" type=\"button\"  (click)=\"onAddCategory()\">Ajouter Catégorie</button>\n        </div>\n        <br>\n        <button mat-raised-button color=\"primary\" type=\"submit\">Editer le livre</button>\n        \n    </form>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/books/edit-book/edit-book.component.ts":
/*!********************************************************!*\
  !*** ./src/app/books/edit-book/edit-book.component.ts ***!
  \********************************************************/
/*! exports provided: EditBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBookComponent", function() { return EditBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_books_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");






var EditBookComponent = /** @class */ (function () {
    function EditBookComponent(router, route, formBuilder, booksService, categoriesService) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.booksService = booksService;
        this.categoriesService = categoriesService;
        this.isLoaded = false;
        this.error_message = "";
    }
    EditBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookId = this.route.snapshot.params['id'];
        this.booksService.getbook(this.bookId).subscribe(function (res) {
            _this.oldBook = res;
            _this.isLoaded = true;
            _this.initForm();
            _this.editBookForm.setControl('categories', _this.formBuilder.array(res.categories || []));
        });
    };
    EditBookComponent.prototype.initForm = function () {
        this.editBookForm = this.formBuilder.group({
            title: [this.oldBook.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            resume: [this.oldBook.resume, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            categories: this.formBuilder.array([]),
            note: [this.oldBook.note, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^([0-9]\d*)(?:\.[5]?)?$')]],
        });
        this.getAllCategories();
        this.onAddCategory();
    };
    EditBookComponent.prototype.getCategories = function () {
        return this.editBookForm.get('categories');
    };
    EditBookComponent.prototype.getAllCategories = function () {
        var _this = this;
        return this.categoriesService.getCategories().subscribe(function (res) {
            _this.categories = res;
        });
    };
    EditBookComponent.prototype.onAddCategory = function () {
        var newCategoryControl = this.formBuilder.control(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.getCategories().push(newCategoryControl);
    };
    EditBookComponent.prototype.onSubmit = function () {
        var _this = this;
        var myForm = this.editBookForm;
        this.book = {
            title: myForm.get('title').value,
            resume: myForm.get('resume').value,
            categories: myForm.get('categories').value,
            note: myForm.get('note').value,
            userId: localStorage.getItem('id')
        };
        this.booksService.editBook(this.bookId, this.book).subscribe(function (res) {
            _this.router.navigate(['books']);
        }, function (err) {
            console.log(err);
            if (err.error.ErrorCode == 11000) {
                _this.error_message = "Ce titre est déjà pris, veuillez en mettre un autre.";
            }
        });
    };
    EditBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-book',
            template: __webpack_require__(/*! ./edit-book.component.html */ "./src/app/books/edit-book/edit-book.component.html"),
            styles: [__webpack_require__(/*! ./edit-book.component.css */ "./src/app/books/edit-book/edit-book.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_books_service__WEBPACK_IMPORTED_MODULE_4__["BooksService"],
            src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"]])
    ], EditBookComponent);
    return EditBookComponent;
}());



/***/ }),

/***/ "./src/app/books/list/list.component.css":
/*!***********************************************!*\
  !*** ./src/app/books/list/list.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/books/list/list.component.html":
/*!************************************************!*\
  !*** ./src/app/books/list/list.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n    <thead>\n        <tr>\n            <th scope=\"col\">Titre</th>\n            <th scope=\"col\">categorie</th>\n            <th scope=\"col\">Note</th>\n            <th scope='col'>Resumé</th>\n            <th scope='col'>Editer</th>\n            <th scope='col'>Supprimer</th>\n            <th scope='col'>Partager</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let book of books\">\n            <td>{{ book.title }}</td>\n            <td> {{ book.categories }}</td>\n            <td>{{ book.note }}</td>\n            <td>{{ book.resume }}</td>\n            <td><button mat-raised-button color=\"primary\" type=\"button\"  (click)=\"edit(book._id)\">Editer</button></td>\n            <td><button mat-raised-button color=\"primary\" type=\"button\"  (click)=\"remove(book._id)\">Supprimer</button></td>\n            <td><button mat-raised-button color=\"primary\" type=\"button\"  (click)=\"share(book)\">Partager</button></td>\n        </tr>\n    </tbody>\n</table>\n<br>\n\n<div mat-dialog-content *ngIf=\"shareClick\">\n    <mat-card>\n        <form (ngSubmit)=\"onSubmitShare(f)\" #f=\"ngForm\">\n            <mat-form-field class=\"example-full-width\">                \n                <input matInput ngModel [email]=\"true\" type='email' name='email' required placeholder=\"Adresse mail de votre ami(e) :\">\n            </mat-form-field>\n            <button [disabled]=\"f.invalid\" mat-raised-button color=\"primary\" type=\"submit\">Envoyer</button>\n        </form>\n    </mat-card><br>\n</div>\n\n<a routerLink=\"/addBook\"><button mat-raised-button color=\"primary\" type=\"button\" >Ajouter un livre</button></a>"

/***/ }),

/***/ "./src/app/books/list/list.component.ts":
/*!**********************************************!*\
  !*** ./src/app/books/list/list.component.ts ***!
  \**********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/books.service */ "./src/app/services/books.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ListComponent = /** @class */ (function () {
    function ListComponent(booksService, router) {
        this.booksService = booksService;
        this.router = router;
        this.shareClick = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksService.getBooks().subscribe(function (books) {
            _this.books = books;
        });
    };
    ListComponent.prototype.edit = function (bookId) {
        this.router.navigate(['/editBook', bookId]);
    };
    ListComponent.prototype.remove = function (bookId) {
        var _this = this;
        this.booksService.removeBook(bookId).subscribe(function (res) {
            _this.booksService.getBooks().subscribe(function (res) {
                _this.books = res;
            });
        });
    };
    ListComponent.prototype.share = function (book) {
        this.shareClick = true;
        this.book_shared = book;
    };
    ListComponent.prototype.onSubmitShare = function (f) {
        this.email_shared = (f.form.value['email']);
        this.shareClick = false;
        var data_shared = {
            book: this.book_shared,
            email: this.email_shared
        };
        this.booksService.shareBook(data_shared).subscribe(function (res) {
            console.log(res);
            console.log('Envoyé à ' + data_shared.email);
        });
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/books/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/books/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_books_service__WEBPACK_IMPORTED_MODULE_2__["BooksService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/categories/add-categorie/add-categorie.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/categories/add-categorie/add-categorie.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvYWRkLWNhdGVnb3JpZS9hZGQtY2F0ZWdvcmllLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/categories/add-categorie/add-categorie.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/categories/add-categorie/add-categorie.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"row align-items-center form_sign justify-content-center\">\n    <div class=\"col-8 align-self-center\">\n        \n        <h1>Ajouter une catégorie</h1>\n        <mat-card>\n            <form [formGroup]=\"addCategoryForm\" (ngSubmit)=\"onSubmit()\" class=\"example-form\">\n                <mat-form-field class=\"example-full-width\">\n                    <div class=\"error\" *ngIf=\"error_message != '' \">{{ error_message }}</div>\n                    <input matInput type=\"text\" formControlName=\"label\" placeholder=\"Nom catégorie\">\n                </mat-form-field>\n                \n                <button [disabled]=\"addCategoryForm.invalid\" mat-raised-button color=\"primary\" type=\"submit\">Ajouter</button>\n                \n            </form>\n        </mat-card>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/categories/add-categorie/add-categorie.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/categories/add-categorie/add-categorie.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddCategorieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategorieComponent", function() { return AddCategorieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddCategorieComponent = /** @class */ (function () {
    function AddCategorieComponent(formBuilder, categoriesService, router) {
        this.formBuilder = formBuilder;
        this.categoriesService = categoriesService;
        this.router = router;
        this.error_message = '';
    }
    AddCategorieComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    AddCategorieComponent.prototype.initForm = function () {
        this.addCategoryForm = this.formBuilder.group({
            label: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    AddCategorieComponent.prototype.onSubmit = function () {
        var _this = this;
        var myForm = this.addCategoryForm;
        this.category = {
            label: myForm.get('label').value
        };
        this.categoriesService.addCategory(this.category).subscribe(function (res) {
            _this.router.navigate(['categories']);
        }, function (err) {
            if (err.error.ErrorCode == 11000) {
                _this.error_message = "Ce nom est déjà pris, veuillez en mettre un autre.";
            }
        });
    };
    AddCategorieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-categorie',
            template: __webpack_require__(/*! ./add-categorie.component.html */ "./src/app/categories/add-categorie/add-categorie.component.html"),
            styles: [__webpack_require__(/*! ./add-categorie.component.css */ "./src/app/categories/add-categorie/add-categorie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddCategorieComponent);
    return AddCategorieComponent;
}());



/***/ }),

/***/ "./src/app/categories/list-categories/list-categories.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/categories/list-categories/list-categories.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvbGlzdC1jYXRlZ29yaWVzL2xpc3QtY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/categories/list-categories/list-categories.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/categories/list-categories/list-categories.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n    <thead>\n        <tr>\n            <th scope=\"col\">Catégorie</th>\n            <th scope='col'>Supprimer</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let categorie of categories\">\n            <td>{{ categorie.label }}</td>\n            <td><button mat-raised-button color=\"primary\" type=\"button\"  (click)=\"remove(categorie._id)\">Supprimer</button></td>\n        </tr>\n    </tbody>\n</table>\n\n<a routerLink=\"/addCategory\">\n    <button mat-raised-button color=\"primary\" type=\"button\" >Ajouter une catégorie</button>\n</a>"

/***/ }),

/***/ "./src/app/categories/list-categories/list-categories.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/categories/list-categories/list-categories.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCategoriesComponent", function() { return ListCategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/categories.service */ "./src/app/services/categories.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ListCategoriesComponent = /** @class */ (function () {
    function ListCategoriesComponent(categoriesService, router) {
        this.categoriesService = categoriesService;
        this.router = router;
    }
    ListCategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesService.getCategories().subscribe(function (categories) {
            _this.categories = categories;
        });
    };
    ListCategoriesComponent.prototype.edit = function (id) {
        this.router.navigate(['/editCategory', id]);
    };
    ListCategoriesComponent.prototype.remove = function (categoryId) {
        var _this = this;
        this.categoriesService.removeCategory(categoryId).subscribe(function (res) {
            _this.categoriesService.getCategories().subscribe(function (res) {
                _this.categories = res;
            });
        });
    };
    ListCategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-categories',
            template: __webpack_require__(/*! ./list-categories.component.html */ "./src/app/categories/list-categories/list-categories.component.html"),
            styles: [__webpack_require__(/*! ./list-categories.component.css */ "./src/app/categories/list-categories/list-categories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListCategoriesComponent);
    return ListCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var isAuth = this.authService.jwtToken.value.token;
        if (isAuth) {
            return true;
        }
        else {
            this.router.navigate(['signIn']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.authorization = "";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authorization
            })
        };
    }
    ApiService.prototype.getHeaders = function () {
        var headersParams = { 'Content-Type': 'application/json' };
        var token = localStorage.getItem('token');
        if (token) {
            Object.assign(headersParams, { 'authorization': "" + token });
        }
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headersParams);
    };
    ApiService.prototype.fixHeaders = function () {
        this.httpOptions.headers = this.getHeaders();
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(httpClient) {
        this.httpClient = httpClient;
        this.jwtToken = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            token: null
        });
        this.initJwtToken();
    }
    AuthService.prototype.initJwtToken = function () {
        var token = localStorage.getItem('token');
        if (token) {
            this.jwtToken.next({
                token: token
            });
        }
        else {
            this.jwtToken.next({
                token: null
            });
        }
    };
    AuthService.prototype.signIn = function (username, password) {
        var _this = this;
        return this.httpClient.post('http://localhost:3000/api/auth/login', { username: username, password: password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (token) {
            _this.jwtToken.next({
                token: token['token']
            });
        }));
    };
    AuthService.prototype.signUp = function (username, password) {
        return this.httpClient.post('http://localhost:3000/api/auth/signup', { username: username, password: password });
    };
    AuthService.prototype.logout = function () {
        this.jwtToken.next({
            token: null
        });
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        console.log(localStorage);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/books.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/books.service.ts ***!
  \*******************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");




var BooksService = /** @class */ (function () {
    function BooksService(httpClient, apiService) {
        this.httpClient = httpClient;
        this.apiService = apiService;
    }
    BooksService.prototype.addBook = function (newBook) {
        this.apiService.fixHeaders();
        return this.httpClient.post('http://localhost:3000/api/books/add', newBook, this.apiService.httpOptions);
    };
    BooksService.prototype.getBooks = function () {
        this.apiService.fixHeaders();
        return this.httpClient.get('http://localhost:3000/api/books', this.apiService.httpOptions);
    };
    BooksService.prototype.getbook = function (id) {
        this.apiService.fixHeaders();
        return this.httpClient.get('http://localhost:3000/api/books/' + id, this.apiService.httpOptions);
    };
    BooksService.prototype.editBook = function (bookId, newBook) {
        this.apiService.fixHeaders();
        return this.httpClient.post('http://localhost:3000/api/books/edit/' + bookId, { 'book': newBook, 'bookId': bookId }, this.apiService.httpOptions);
    };
    BooksService.prototype.removeBook = function (bookId) {
        return this.httpClient.get('http://localhost:3000/api/books/delete/' + bookId);
    };
    BooksService.prototype.shareBook = function (book) {
        return this.httpClient.post('http://localhost:3000/api/books/share', book);
    };
    BooksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], BooksService);
    return BooksService;
}());



/***/ }),

/***/ "./src/app/services/categories.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");




var CategoriesService = /** @class */ (function () {
    function CategoriesService(httpClient, apiService) {
        this.httpClient = httpClient;
        this.apiService = apiService;
    }
    CategoriesService.prototype.getCategories = function () {
        this.apiService.fixHeaders();
        return this.httpClient.get('http://localhost:3000/api/categories', this.apiService.httpOptions);
    };
    CategoriesService.prototype.getCategory = function (id) {
        this.apiService.fixHeaders();
        return this.httpClient.get('http://localhost:3000/api/categories/' + id, this.apiService.httpOptions);
    };
    CategoriesService.prototype.addCategory = function (newCategory) {
        this.apiService.fixHeaders();
        return this.httpClient.post('http://localhost:3000/api/categories/add', newCategory, this.apiService.httpOptions);
    };
    CategoriesService.prototype.removeCategory = function (categoryId) {
        return this.httpClient.get('http://localhost:3000/api/categories/delete/' + categoryId);
    };
    CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Connexion</h1> \n\n<mat-card>\n    <div class=\"error\" *ngIf=\"error\">\n        {{ error }}\n    </div>\n    <form [formGroup]=\"signInForm\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"text\" formControlName=\"username\" placeholder=\"Votre pseudo\" required>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"password\" formControlName=\"password\" placeholder=\"Votre Mot de passe\" required>\n        </mat-form-field>\n      <button [disabled]=\"f.invalid\" mat-raised-button color=\"primary\" type=\"submit\">Connexion</button>\n    </form>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SignInComponent = /** @class */ (function () {
    function SignInComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.error = "";
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SignInComponent.prototype.initForm = function () {
        this.signInForm = this.formBuilder.group({
            username: [''],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[0-9a-zA-Z]{6,}/)]]
        });
    };
    SignInComponent.prototype.onSubmit = function () {
        var _this = this;
        var username = this.signInForm.get('username').value;
        var password = this.signInForm.get('password').value;
        this.authService.signIn(username, password).subscribe(function (res) {
            // console.log(res);
            var token = res['token'];
            var id = res['id'];
            localStorage.setItem('token', token);
            localStorage.setItem('id', id);
            _this.router.navigate(['books']);
        }, function (error) {
            // console.log(error);
            _this.error = error.error.ErrorMsg;
        });
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Inscription</h1> \n\n<mat-card>\n    <div class=\"error\" *ngIf=\"error\">\n        {{ error }}\n    </div>\n    <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"text\" formControlName=\"username\" placeholder=\"Votre pseudo\" required>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"password\" formControlName=\"password\" placeholder=\"Votre Mot de passe (6 caractères minimum)\" required>\n        </mat-form-field>\n        <button [disabled]=\"f.invalid\" mat-raised-button color=\"primary\" type=\"submit\">Connexion</button>\n    </form>\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.error = "";
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SignUpComponent.prototype.initForm = function () {
        this.signUpForm = this.formBuilder.group({
            username: [''],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/[0-9a-zA-Z]{6,}/)]]
        });
    };
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        // console.log(f);
        var username = this.signUpForm.get('username').value;
        var password = this.signUpForm.get('password').value;
        console.log(password);
        this.authService.signUp(username, password).subscribe(function (res) {
            console.log(res);
            // var token = res['token'];
            // localStorage.setItem('token', token);
            _this.router.navigate(['signIn']);
        }, function (err) {
            console.log(err);
            if (err.error.ErrorCode == 11000) {
                _this.error = "Ce pseudo est déjà pris, veuillez en choisir un autre.";
            }
        });
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/test angular/ProjectEzBeez/Client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map