"use strict";
// EG2: Readonly
const names = ["Amir", "Nasir", "Ronith"];
// names.push("Farhin");
console.log("names", names);
function courseGoal(title, description, date) {
    let courseGoal = {};
    // some logic.. eg validation
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
//# sourceMappingURL=31-generics-other-utility-function-partials-readonly.js.map