"use strict";
function extractAndConvert(obj, key) {
    return 'Value is ' + obj[key];
}
// console.log(extractAndConvert({}, 'name')); // ERROR: as there is no name property
console.log(extractAndConvert({ name: 'Amir' }, "name"));
//# sourceMappingURL=29-generics-keyof.js.map