"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator Factory
function WithTemplate(template, hookId) {
    return function (constructor) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template + p.name;
        }
    };
}
let Person6 = class Person6 {
    constructor() {
        this.name = "Amir";
        console.log("Constructor called..");
    }
};
Person6 = __decorate([
    WithTemplate("<h2>My Person Object</h2>", "app")
], Person6);
const pers6 = new Person6();
console.log(pers6);
//# sourceMappingURL=34-decorators-some-productive-templates.js.map