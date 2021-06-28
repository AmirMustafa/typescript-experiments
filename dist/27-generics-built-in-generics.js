"use strict";
// const d = ['Amir', 'Ronith'];
// Built-in Generics
const arr = []; // same as const arr: string [] = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            resolve("Hola, data succeded.");
        }
        catch (e) {
            reject("Something went wrong " + e);
        }
    }, 2000);
});
promise.then(data => {
    data.split(' ');
});
//# sourceMappingURL=27-generics-built-in-generics.js.map