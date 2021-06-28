"use strict";
class Person2 {
    constructor(name) {
        this.name = name;
    }
    // Interface function must be defined
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
    // New functions are also appreciated
    greetFormat() {
        console.log('Some other logic');
    }
}
let obj = new Person2("Amir");
//# sourceMappingURL=14-interface-with-class.js.map