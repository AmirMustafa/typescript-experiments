"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Log(target, propertyName) {
    console.log("Log1 ======>", "Property Decorator");
    console.log("target", target);
    console.log("name", propertyName);
    console.log("--------------------------------------------");
}
function Log2(target, name, descriptor) {
    console.log("Log2 ======>", "Accessor Decorator");
    console.log("target", target);
    console.log("name", name);
    console.log("descriptor", descriptor);
    console.log("--------------------------------------------");
}
function Log3(target, name, descriptor) {
    console.log("Log3 ======>", "Method Decorator");
    console.log("target", target);
    console.log("name", name);
    console.log("descriptor", descriptor);
    console.log("--------------------------------------------");
}
function Log4(target, name, position) {
    console.log("Log4 ======>", "Paramater Decorator");
    console.log("target", target);
    console.log("name", name);
    console.log("position", position);
    console.log("-----------------------------  ---------------");
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price - should be positive");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
let product = new Product("Desk", 100);
//# sourceMappingURL=36-decorators-property-methods-accessor-parameters.js.map