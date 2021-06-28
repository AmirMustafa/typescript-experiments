"use strict";
function addition(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = addition('Amir', ' Mustafa');
result.split(' ');
//# sourceMappingURL=24-function-overloads.js.map