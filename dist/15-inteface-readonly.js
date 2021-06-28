"use strict";
class Person3 {
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
let obj3 = new Person3("Amir");
obj3.name = "user2";
//# sourceMappingURL=15-inteface-readonly.js.map