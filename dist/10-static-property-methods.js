"use strict";
class DepartmentNew {
    constructor(name) {
        this.name = name;
        this.employee = [];
        this.name = name;
        DepartmentNew.fiscalYear = 2022;
    }
    static createEmployee(name) {
        return { name: name };
    }
}
DepartmentNew.fiscalYear = 2020;
const depAc = new DepartmentNew('accounting');
const employee = DepartmentNew.createEmployee('Max'); // Static method are accessed from class
console.log(employee);
console.log(DepartmentNew.fiscalYear);
//# sourceMappingURL=10-static-property-methods.js.map