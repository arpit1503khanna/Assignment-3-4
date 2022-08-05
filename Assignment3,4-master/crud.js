"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Crud = void 0;
function FormatDate() {
    return function (target, name, descriptor) {
        var dateTime = document.getElementById("dateTime");
        dateTime.innerHTML = new Date().toLocaleString();
        setInterval(function () {
            dateTime.innerHTML = new Date().toLocaleString();
        }, 1000);
    };
}
var Crud = /** @class */ (function () {
    function Crud() {
        this.items = [];
    }
    Crud.prototype.create = function (e) {
        this.items.push(e);
    };
    Crud.prototype.update = function (i, e) {
        this.items[i] = e;
        console.log(this.items);
        // showTable();
    };
    Crud.prototype["delete"] = function (i) {
        this.items.splice(i, 1);
        console.log(this.items);
        // showTable();
    };
    __decorate([
        FormatDate()
    ], Crud.prototype, "create");
    return Crud;
}());
exports.Crud = Crud;
