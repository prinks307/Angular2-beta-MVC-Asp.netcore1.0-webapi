"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var common_1 = require('angular2/common');
var browser_1 = require('angular2/platform/browser');
require('rxjs/add/operator/map');
var App = (function () {
    function App(http) {
        this.http = http;
        this.http = http;
        this.getValues();
    }
    App.prototype.getValues = function () {
        var _this = this;
        this.http.get('http://localhost:56689/api/values')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.values = data; }, function (err) { return _this.logError(err); }, function () { return console.log('Finished retrieving values'); });
    };
    App.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    App = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            moduleId: module.id,
            template: '<header><h1>Angular 2 / WebAPI</h1></header><section><p>Values:</p> <ul><li *ngFor="#value of values"> Value: {{ value }} </li></ul></section>'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], App);
    return App;
}());
exports.App = App;
browser_1.bootstrap(App, [http_1.HTTP_BINDINGS]);
//# sourceMappingURL=app.js.map