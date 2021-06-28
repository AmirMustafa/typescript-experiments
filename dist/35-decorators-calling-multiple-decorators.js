"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator Function
function Logger7() {
    console.log("1. LOGGER: Factory");
    return function (constructor) {
        console.log("2. LOGGER: Decorator");
        console.log(constructor);
    };
}
// Decorator Factory
function WithTemplate7(template, hookId) {
    console.log("3. TEMPLATE: Factory");
    return function (constructor) {
        console.log("4. TEMPLATE: Decorator");
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template + p.name;
        }
    };
}
let Person7 = class Person7 {
    constructor() {
        this.name = "Amir";
        console.log("Constructor called..");
    }
};
Person7 = __decorate([
    Logger7(),
    WithTemplate7("<h2>My Person Object</h2>", "app")
], Person7);
const pers7 = new Person7();
console.log(pers7);
//# sourceMappingURL=35-decorators-calling-multiple-decorators.js.map