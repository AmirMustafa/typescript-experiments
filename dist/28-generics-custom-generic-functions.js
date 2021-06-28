"use strict";
function countAndDescribe(element) {
    let descriptionText = 'Value not found.';
    if (element.length === 1)
        descriptionText = 'Got 1 element';
    else if (element.length > 1)
        descriptionText = `Got ${element.length} values`;
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there'));
console.log(countAndDescribe(["Sports", "Cooking"]));
console.log(countAndDescribe([]));
// console.log(countAndDescribe(100));  // All property with length is only allowed
// Eg1
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const mergedResult = merge({ name: "Amir" }, { gender: "male" });
// console.log(mergedResult); // O/P: {name: 'Amir', gender: 'male'}, TS silently ignores number
//# sourceMappingURL=28-generics-custom-generic-functions.js.map