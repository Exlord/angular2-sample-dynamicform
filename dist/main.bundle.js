webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__field_field_component__ = __webpack_require__("../../../../../src/app/field/field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_form_component__ = __webpack_require__("../../../../../src/app/form/form.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouteModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Exlord on 6/13/2017.
 */





var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'field', component: __WEBPACK_IMPORTED_MODULE_3__field_field_component__["a" /* FieldComponent */] },
    { path: 'form', component: __WEBPACK_IMPORTED_MODULE_4__form_form_component__["a" /* FormComponent */] }
];
var AppRouteModule = (function () {
    function AppRouteModule() {
    }
    return AppRouteModule;
}());
AppRouteModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRouteModule);

//# sourceMappingURL=app-route.js.map

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

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n            <ul class=\"nav nav-pills\">\n        <li role=\"presentation\" [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li>\n        <li role=\"presentation\" [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/field']\">Field</a></li>\n        <li role=\"presentation\" [routerLinkActive]=\"['active']\"><a [routerLink]=\"['/form']\">Form</a></li>\n      </ul>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__in_memory_data_service__ = __webpack_require__("../../../../../src/app/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_route__ = __webpack_require__("../../../../../src/app/app-route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__field_field_component__ = __webpack_require__("../../../../../src/app/field/field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__form_form_component__ = __webpack_require__("../../../../../src/app/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__field_field_service__ = __webpack_require__("../../../../../src/app/field/field.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__field_field_form_field_form_component__ = __webpack_require__("../../../../../src/app/field/field-form/field-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__form_form_field_form_field_component__ = __webpack_require__("../../../../../src/app/form/form-field/form-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__form_form_field_fields_field_text_field_text_component__ = __webpack_require__("../../../../../src/app/form/form-field/fields/field-text/field-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__form_form_service__ = __webpack_require__("../../../../../src/app/form/form.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__field_field_component__["a" /* FieldComponent */],
            __WEBPACK_IMPORTED_MODULE_10__form_form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_12__field_field_form_field_form_component__["a" /* FieldFormComponent */],
            __WEBPACK_IMPORTED_MODULE_13__form_form_field_form_field_component__["a" /* FormFieldComponent */],
            __WEBPACK_IMPORTED_MODULE_14__form_form_field_fields_field_text_field_text_component__["a" /* FieldTextComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__in_memory_data_service__["a" /* InMemoryDataService */]),
            __WEBPACK_IMPORTED_MODULE_6__app_route__["a" /* AppRouteModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__field_field_service__["a" /* FieldService */], __WEBPACK_IMPORTED_MODULE_15__form_form_service__["a" /* FormService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1 class=\"page-header\">Submitted Data</h1>\n    <p class=\"help-block\">\n      These data has been submitted throw the dynamically generated form. Try it\n      <a [routerLink]=\"['/form']\">here</a>.<br/>\n      You can add more fields to this form <a [routerLink]=\"['/field']\">Fields</a>here.<br/>\n    </p>\n\n    <div class=\"table-responsive\">\n      <table class=\"table table-condensed table-hover table-striped\">\n        <thead>\n        <tr>\n          <th *ngFor=\"let field of fields\" [innerHtml]=\"field.label\"></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let row of data\">\n          <td *ngFor=\"let field of fields\" [innerHtml]=\"row[field.name]\"></td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__field_field_service__ = __webpack_require__("../../../../../src/app/field/field.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_form_service__ = __webpack_require__("../../../../../src/app/form/form.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(fieldService, formService) {
        this.fieldService = fieldService;
        this.formService = formService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this.getFields().then(function () {
            return _this.getData();
        });
    };
    DashboardComponent.prototype.getFields = function () {
        var _this = this;
        return this.fieldService
            .getFields()
            .then(function (fields) { return _this.fields = fields; });
    };
    DashboardComponent.prototype.getData = function () {
        var _this = this;
        return this.formService
            .getData()
            .then(function (data) { return _this.data = data; });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__field_field_service__["a" /* FieldService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__field_field_service__["a" /* FieldService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__form_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__form_form_service__["a" /* FormService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/field/field-form/field-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/field/field-form/field-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"save(form.value, form.valid)\" novalidate>\n  <div class=\"form-group\" [ngClass]=\"{'has-error':!form.controls['name'].valid && form.controls['name'].touched}\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\"\n           class=\"form-control\"\n           name=\"name\"\n           id=\"name\"\n           placeholder=\"Name\"\n           required\n           [formControl]=\"form.controls['name']\">\n    <p class=\"help-block text-danger\"\n       [hidden]=\"form.controls['name'].valid || form.controls['name'].pristine || !submitted \">\n      The name should be between 5 and 50 characters.\n    </p>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"type\">Type</label>\n    <select class=\"form-control\" id=\"type\" name=\"type\" [formControl]=\"form.controls['type']\">\n      <option *ngFor=\"let key of fieldTypes\" [value]=\"FieldTypes[key]\" [innerHtml]=\"key\"></option>\n    </select>\n  </div>\n\n  <div class=\"form-group\" [ngClass]=\"{'has-error':!form.controls['label'].valid && form.controls['label'].touched}\">\n    <label for=\"Name\">Label</label>\n    <input type=\"text\"\n           class=\"form-control\"\n           name=\"label\"\n           id=\"label\"\n           placeholder=\"Label\"\n           required\n           [formControl]=\"form.controls['label']\">\n    <p class=\"help-block text-danger\"\n       [hidden]=\"form.controls['label'].valid || form.controls['label'].pristine || !submitted \">\n      The label should be between 5 and 50 characters.\n    </p>\n  </div>\n\n  <div class=\"form-group\" [ngClass]=\"{'has-error':!form.controls['help'].valid && form.controls['help'].touched}\">\n    <label for=\"Name\">Help Text</label>\n    <textarea\n      class=\"form-control\"\n      name=\"help\"\n      id=\"help\"\n      placeholder=\"Help Text\"\n      [formControl]=\"form.controls['help']\"></textarea>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!form.valid\">\n    Save\n  </button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/field/field-form/field-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__field__ = __webpack_require__("../../../../../src/app/field/field.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__field_type_enum__ = __webpack_require__("../../../../../src/app/field/field-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__field_service__ = __webpack_require__("../../../../../src/app/field/field.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FieldFormComponent = (function () {
    function FieldFormComponent(fieldService, fb) {
        this.fieldService = fieldService;
        this.fb = fb;
        this.FieldTypes = __WEBPACK_IMPORTED_MODULE_3__field_type_enum__["a" /* FieldType */];
        this.submitted = false;
        this.onSave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    FieldFormComponent.prototype.ngOnInit = function () {
        var fieldTypes = Object.keys(__WEBPACK_IMPORTED_MODULE_3__field_type_enum__["a" /* FieldType */]);
        this.fieldTypes = fieldTypes.splice(fieldTypes.length / 2);
        this.form = this.fb.group({
            'id': [null],
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(50)])],
            'type': [__WEBPACK_IMPORTED_MODULE_3__field_type_enum__["a" /* FieldType */].Text, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'label': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(50)])],
            'help': [null],
        });
    };
    FieldFormComponent.prototype.save = function (value) {
        var _this = this;
        this.submitted = true;
        this.fieldService.save(value).then(function (field) {
            _this.submitted = false;
            _this.form.reset();
            _this.onSave.emit();
        });
    };
    FieldFormComponent.prototype.ngOnChanges = function (changes) {
        if (changes.field.currentValue) {
            this.form.setValue(changes.field.currentValue, { onlySelf: true });
        }
    };
    return FieldFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], FieldFormComponent.prototype, "onSave", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__field__["a" /* Field */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__field__["a" /* Field */]) === "function" && _a || Object)
], FieldFormComponent.prototype, "field", void 0);
FieldFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-field-form',
        template: __webpack_require__("../../../../../src/app/field/field-form/field-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/field/field-form/field-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__field_service__["a" /* FieldService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__field_service__["a" /* FieldService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _c || Object])
], FieldFormComponent);

var _a, _b, _c;
//# sourceMappingURL=field-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/field/field-type.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldType; });
var FieldType;
(function (FieldType) {
    FieldType[FieldType["Text"] = 1] = "Text";
})(FieldType || (FieldType = {}));
//# sourceMappingURL=field-type.enum.js.map

/***/ }),

/***/ "../../../../../src/app/field/field.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/field/field.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1 class=\"page-header\">Fields</h1>\n\n    <div class=\"col-sm-6\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-condensed table-hover table-striped\">\n          <thead>\n          <tr>\n            <th>Id</th>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Label</th>\n            <th>Help Text</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let field of fields\">\n            <td [innerHtml]=\"field.id\"></td>\n            <td [innerHtml]=\"field.name\"></td>\n            <td [innerHtml]=\"FieldTypes[field.type]\"></td>\n            <td [innerHtml]=\"field.label\"></td>\n            <td [innerHtml]=\"field.help\"></td>\n            <td>\n              <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"edit(field)\">Edit</button>\n              <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"delete(field)\">Delete</button>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <app-field-form (onSave)=\"onSave()\" [field]=\"fieldToEdit\"></app-field-form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/field/field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__field_type_enum__ = __webpack_require__("../../../../../src/app/field/field-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__field_service__ = __webpack_require__("../../../../../src/app/field/field.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FieldComponent = (function () {
    function FieldComponent(fieldService) {
        this.fieldService = fieldService;
        this.FieldTypes = __WEBPACK_IMPORTED_MODULE_1__field_type_enum__["a" /* FieldType */];
        this.fieldToEdit = null;
    }
    FieldComponent.prototype.ngOnInit = function () {
        this.getFields();
    };
    FieldComponent.prototype.getFields = function () {
        var _this = this;
        this.fieldService
            .getFields()
            .then(function (fields) { return _this.fields = fields; });
    };
    FieldComponent.prototype.onSave = function () {
        this.getFields();
    };
    FieldComponent.prototype.delete = function (field) {
        this.fieldService
            .delete(field.id)
            .then(this.getFields.bind(this));
    };
    FieldComponent.prototype.edit = function (field) {
        this.fieldToEdit = field;
    };
    return FieldComponent;
}());
FieldComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-field',
        template: __webpack_require__("../../../../../src/app/field/field.component.html"),
        styles: [__webpack_require__("../../../../../src/app/field/field.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__field_service__["a" /* FieldService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__field_service__["a" /* FieldService */]) === "function" && _a || Object])
], FieldComponent);

var _a;
//# sourceMappingURL=field.component.js.map

/***/ }),

/***/ "../../../../../src/app/field/field.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Exlord on 6/13/2017.
 */



var FieldService = (function () {
    function FieldService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.fieldsUrl = 'api/fields'; // URL to web api
    }
    FieldService.prototype.getFields = function () {
        return this.http.get(this.fieldsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // getHero(id: number): Promise<Hero> {
    //   const url = `${this.heroesUrl}/${id}`;
    //   return this.http.get(url)
    //     .toPromise()
    //     .then(response => response.json().data as Hero)
    //     .catch(this.handleError);
    // }
    FieldService.prototype.delete = function (id) {
        var url = this.fieldsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    FieldService.prototype.save = function (field) {
        return field.id == null ? this.create(field) : this.update(field);
    };
    FieldService.prototype.create = function (field) {
        return this.http
            .post(this.fieldsUrl, JSON.stringify(field), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    FieldService.prototype.update = function (field) {
        var url = this.fieldsUrl + "/" + field.id;
        return this.http
            .put(url, JSON.stringify(field), { headers: this.headers })
            .toPromise()
            .then(function () { return field; })
            .catch(this.handleError);
    };
    FieldService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return FieldService;
}());
FieldService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], FieldService);

var _a;
//# sourceMappingURL=field.service.js.map

/***/ }),

/***/ "../../../../../src/app/field/field.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__field_type_enum__ = __webpack_require__("../../../../../src/app/field/field-type.enum.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Field; });

var Field = (function () {
    function Field() {
        this.type = __WEBPACK_IMPORTED_MODULE_0__field_type_enum__["a" /* FieldType */].Text;
    }
    return Field;
}());

//# sourceMappingURL=field.js.map

/***/ }),

/***/ "../../../../../src/app/form/form-field/fields/field-text/field-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form-field/fields/field-text/field-text.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"text\"\n       class=\"form-control\"\n       [name]=\"field.name\"\n       [id]=\"field.name\"\n       [placeholder]=\"field.label\"\n       [formControl]=\"formField\"\n>\n"

/***/ }),

/***/ "../../../../../src/app/form/form-field/fields/field-text/field-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__field_field__ = __webpack_require__("../../../../../src/app/field/field.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldTextComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FieldTextComponent = (function () {
    function FieldTextComponent() {
    }
    FieldTextComponent.prototype.ngOnInit = function () {
    };
    return FieldTextComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__field_field__["a" /* Field */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__field_field__["a" /* Field */]) === "function" && _a || Object)
], FieldTextComponent.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]) === "function" && _b || Object)
], FieldTextComponent.prototype, "formField", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]) === "function" && _c || Object)
], FieldTextComponent.prototype, "form", void 0);
FieldTextComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-field-text',
        template: __webpack_require__("../../../../../src/app/form/form-field/fields/field-text/field-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form/form-field/fields/field-text/field-text.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FieldTextComponent);

var _a, _b, _c;
//# sourceMappingURL=field-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/form/form-field/form-field.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form-field/form-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label [for]=\"field.name\" [innerHtml]=\"field.label\"></label>\n\n  <div [ngSwitch]=\"field.type\">\n    <!--<div *ngSwitchWhen=\"FieldTypes.Text\">-->\n      <!---->\n    <!--</div>-->\n    <app-field-text [field]=\"field\" [formField]=\"formField\"></app-field-text>\n  </div>\n\n  <p class=\"help-block\" [innerHtml]=\"field.help\"></p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/form/form-field/form-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__field_field__ = __webpack_require__("../../../../../src/app/field/field.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__field_field_type_enum__ = __webpack_require__("../../../../../src/app/field/field-type.enum.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormFieldComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormFieldComponent = (function () {
    function FormFieldComponent() {
        this.FieldTypes = __WEBPACK_IMPORTED_MODULE_3__field_field_type_enum__["a" /* FieldType */];
    }
    FormFieldComponent.prototype.ngOnInit = function () {
    };
    return FormFieldComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__field_field__["a" /* Field */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__field_field__["a" /* Field */]) === "function" && _a || Object)
], FormFieldComponent.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]) === "function" && _b || Object)
], FormFieldComponent.prototype, "formField", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]) === "function" && _c || Object)
], FormFieldComponent.prototype, "form", void 0);
FormFieldComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-form-field',
        template: __webpack_require__("../../../../../src/app/form/form-field/form-field.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form/form-field/form-field.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FormFieldComponent);

var _a, _b, _c;
//# sourceMappingURL=form-field.component.js.map

/***/ }),

/***/ "../../../../../src/app/form/form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1 class=\"page-header\">Form</h1>\n    <p class=\"help-block\">\n      This form is generated based on the fields defined in the <a [routerLink]=\"['/field']\">Fields</a> section.<br/>\n      You can see the submitted data for this form is <a [routerLink]=\"['/dashboard']\">Dashboard</a>.\n    </p>\n\n    <form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"save(form.value, form.valid)\" novalidate>\n\n      <app-form-field\n        *ngFor=\"let field of fields\"\n        [field]=\"field\"\n        [form]=\"form\"\n        [formField]=\"form.controls[field.name]\"></app-form-field>\n\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__field_field_service__ = __webpack_require__("../../../../../src/app/field/field.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_service__ = __webpack_require__("../../../../../src/app/form/form.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormComponent = (function () {
    function FormComponent(fieldService, formService, fb) {
        this.fieldService = fieldService;
        this.formService = formService;
        this.fb = fb;
        this.form = null;
        this.submitted = false;
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this.getFields().then(function () {
            var fields = {};
            for (var i = 0, l = _this.fields.length; i < l; i++) {
                var field = _this.fields[i];
                fields[field.name] = [null];
            }
            _this.form = _this.fb.group(fields);
        });
    };
    FormComponent.prototype.getFields = function () {
        var _this = this;
        return this.fieldService
            .getFields()
            .then(function (fields) { return _this.fields = fields; });
    };
    FormComponent.prototype.save = function (value) {
        var _this = this;
        this.submitted = true;
        this.formService.create(value).then(function () {
            _this.submitted = false;
            _this.form.reset();
        });
    };
    return FormComponent;
}());
FormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-form',
        template: __webpack_require__("../../../../../src/app/form/form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form/form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__field_field_service__["a" /* FieldService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__field_field_service__["a" /* FieldService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__form_service__["a" /* FormService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormBuilder */]) === "function" && _c || Object])
], FormComponent);

var _a, _b, _c;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/form/form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormService = (function () {
    function FormService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.formUrl = 'api/form'; // URL to web api
    }
    FormService.prototype.getData = function () {
        return this.http.get(this.formUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    FormService.prototype.create = function (form) {
        return this.http
            .post(this.formUrl, JSON.stringify(form), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    FormService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return FormService;
}());
FormService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], FormService);

var _a;
//# sourceMappingURL=form.service.js.map

/***/ }),

/***/ "../../../../../src/app/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var fields = [
            { id: 0, name: 'name', type: 1, label: 'Name', help: 'this is help text' },
            { id: 1, name: 'last_name', type: 1, label: 'Last Name', help: 'this is another help text' },
        ];
        var form = [
            { id: 0, name: 'name1', last_name: 'last_name1' },
            { id: 1, name: 'name2', last_name: 'last_name2' }
        ];
        return { fields: fields, form: form };
    };
    return InMemoryDataService;
}());

//# sourceMappingURL=in-memory-data.service.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map