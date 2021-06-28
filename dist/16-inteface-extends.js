"use strict";
class Person4 {
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
let obj4 = new Person4("Amir");
//# sourceMappingURL=16-inteface-extends.js.map