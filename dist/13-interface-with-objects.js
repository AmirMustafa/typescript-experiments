"use strict";
let user;
user = {
    name: "Amir",
    age: 28,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user.greet("Hi there, this is ");
//# sourceMappingURL=13-interface-with-objects.js.map