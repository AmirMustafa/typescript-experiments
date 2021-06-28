"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Template(template, hookId) {
    return function (originalConstructor) {
        // const hookEl = document.getElementById(hookId);
        // if (hookEl) {
        //   hookEl.innerHTML = template;
        //   hookEl.querySelector("h2")!.innerHTML;
        // }
        return class extends originalConstructor {
            constructor(..._) {
                super();
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h3").innerHTML += this.name;
                }
            }
        };
    };
}
let Productt = class Productt {
    constructor() {
        this.name = "Amir";
        console.log("Constructor called..");
    }
};
Productt = __decorate([
    Template("<h3>My template</h3>", "app")
], Productt);
let productt = new Productt();
//# sourceMappingURL=37-decorators-class-decorator-returned.js.map