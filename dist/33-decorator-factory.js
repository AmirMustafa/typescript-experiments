"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator Function
function Logger5(anydata = 50) {
    return function (constructor) {
        console.log("Logger....");
        console.log(anydata);
        console.log(constructor);
    };
}
const anydata = 100;
let Person5 = class Person5 {
    constructor() {
        this.name = "Amir";
        console.log("Constructor called..");
    }
};
Person5 = __decorate([
    Logger5(anydata)
], Person5);
const pers5 = new Person5();
console.log(pers5);
//# sourceMappingURL=33-decorator-factory.js.map