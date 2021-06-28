"use strict";
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener('click', (e) => console.log(e));
const person = {
    name: "amir",
    age: 28
};
const person2 = Object.assign(Object.assign({}, person), { gender: 'M' });
console.log(person2);
const addFunction = (...num) => {
    return num.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
console.log(addFunction(5, 3, 5, 1.2));
//# sourceMappingURL=6-reduce.js.map